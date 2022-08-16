from CelebrityScraper import CelebrityScraper
from CelebrityData import CelebDB, get_celeb_data

scraper = CelebrityScraper()
scraper.load_content(n_scrolls=1000)
celebs_names = scraper.get_celebrities_name()
celeb_database = CelebDB()

print(f"Obtained {len(celebs_names)} Celebrity names")
for celeb_name in celebs_names:

    celeb_data = get_celeb_data(celeb_name)

    if celeb_data:
        celeb_database.upload_to_db(celeb_name, celeb_data)

    else:
        print(f"Data unavailable for {celeb_name}")
        print("")
