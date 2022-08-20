from dotenv import load_dotenv
from pymongo import MongoClient
from pycountry import countries
from datetime import date
import os
import requests


class CelebDB:
    """This class uploads celebrities to a MongoDB."""
    def __init__(self):
        load_dotenv()
        self.client = MongoClient(f"mongodb+srv://canasmh:{os.environ.get('MDB_ATLAS_AUTH')}@networthdle.xbjpss2.mongodb.net/?retryWrites=true&w=majority")
        self.db = self.client.Celebrities
        self.celeb_params = ["net_worth", "nationality", "occupation", "birthday"]

    @staticmethod
    def convert_net_worth(net_worth):
        """Convert net worth from i.e., 150000000 to 150 Million"""
        if net_worth < 0:
            return None
        else:

            if 1e3 <= net_worth < 1e6:
                conversion = 1e3
                unit = "thousand"

            elif 1e6 <= net_worth < 1e9:
                conversion = 1e6
                unit = "million"

            elif 1e9 <= net_worth < 1e12:
                conversion = 1e9
                unit = "billion"
            else:
                conversion = None
                unit = None
                print("Untested case")

            if conversion is not None:
                return f"{round(net_worth / conversion)} " + unit
            else:
                return None

    @staticmethod
    def convert_nationality(nationality):
        """Convert nationality from alpha code to country name (i.e., gb to Great Britain.)"""
        country = countries.get(alpha_2=nationality.upper())
        if country is not None:
            return country.name
        else:
            return None

    @staticmethod
    def convert_birthday(birthday):
        """Convert birthday from MM-DD-YYYY to MM DD, YYYY"""
        try:
            birth_year = birthday[0]
            birth_month = birthday[1]
            birth_day = birthday[2]
        except IndexError:
            return None
        else:
            if birth_month[0] == '0':
                birth_month = birth_month[-1]
            if birth_day[0] == '0':
                birth_day = birth_day[-1]

            birthday_date_obj = date(year=int(birth_year),
                                     month=int(birth_month),
                                     day=int(birth_day)
                                     )

            return birthday_date_obj.strftime("%B %d, %Y")

    @staticmethod
    def convert_occupation(occupation):
        """Only show the first three occupations. Remove snake casing"""
        if len(occupation) > 3:
            return [occ.replace("_", " ") for occ in occupation[0:3]]
        else:
            return [occ.replace("_", " ") for occ in occupation]

    def data_complete(self, celeb_data):
        """This function checks to see that the Ninja Celebrity API has all the fields we're interested in displaying"""
        for key in self.celeb_params:
            try:
                celeb_data[key]
            except KeyError:
                return False

        return True

    def upload_to_db(self, celeb_name, celeb_data):
        """Method in charged of uploading celebrity data to MongoDB"""
        if self.data_complete(celeb_data):
            data_complete = True
            celeb = {"name": celeb_name}
            for param in self.celeb_params:
                if param == "net_worth":
                    net_worth = celeb_data[param]
                    if self.convert_net_worth(net_worth):
                        celeb[param] = self.convert_net_worth(net_worth)
                    else:
                        data_complete = False
                        break

                elif param == "nationality":
                    nationality = celeb_data[param]
                    if self.convert_nationality(nationality):
                        celeb[param] = self.convert_nationality(nationality)
                    else:
                        data_complete = False
                        break

                elif param == "birthday":
                    birthday = celeb_data[param].split("-")
                    if self.convert_birthday(birthday):
                        celeb[param] = self.convert_birthday(birthday)
                    else:
                        data_complete = False
                        break
                elif param == "occupation":
                    occupation = celeb_data[param]
                    celeb[param] = self.convert_occupation(occupation)

            if data_complete:
                result = self.db.celebs.insert_one(celeb)
                print(f"Successfully added {celeb_name} to database")
            else:
                print(f"Data unavailable for {celeb_name}")

        else:
            print(f"Data unavailable for {celeb_name}")


def data_present(res):
    """
    This function ensures that the Ninja Celebrity API does have data for the celebrity.

    Parameters:
        res: The Celebrity API response.

    Returns:
          bool: True if the celebrity exists in the Ninja API.
    """

    try:
        res.json()[0]
    except IndexError:
        return False
    else:
        return True


def get_celeb_data(celeb_name):
    """
    Method used to retrieve net worth data from celebrity. Uses the The API Ninjas celebrity API.

    Parameters:
        celeb_name (str): Celebrity name used in the Celebrity API.

    Returns:

    """
    load_dotenv()

    api_url = 'https://api.api-ninjas.com/v1/celebrity?name={}'.format(celeb_name)

    response = requests.get(api_url, headers={'X-Api-Key': os.environ.get("CELEB_API_KEY")})

    if response.status_code != requests.codes.ok or not data_present(response):
        return None

    else:
        return response.json()[0]


if __name__ == "__main__":
    from datetime import datetime, timedelta
    from random import random
    from math import floor

    celeb = CelebDB()
    celebs = list(celeb.db.celebs.find())
    n_celebs = len(celebs)

    # Will add all celebs to a new collection called playedcelebs.
    # This list will be used to ensure no celebs are repeated, and all celebs are played
    i_celeb_used = []

    today = datetime.now()
    while len(i_celeb_used) < n_celebs:
        i_celeb = floor(random() * n_celebs)

        if i_celeb not in i_celeb_used:
            result = celeb.db.playedcelebs.insert_one({'name': celebs[i_celeb]['name'],
                                                       'date': today.strftime('%B %d, %Y')
                                                       })
            i_celeb_used.append(i_celeb)
            today += timedelta(1)
            print(f"{celebs[i_celeb]['name']} added on {today.strftime('%B %d, %Y')}")

