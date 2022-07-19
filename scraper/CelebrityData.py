from dotenv import load_dotenv
import os
import requests


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

