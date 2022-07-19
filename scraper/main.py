from CelebrityScraper import CelebrityScraper
from CelebrityData import get_celeb_data

scraper = CelebrityScraper()
scraper.load_content(n_scrolls=10)
celebs_names = scraper.get_celebrities_name()

for celeb_name in celebs_names:
    celeb_data = get_celeb_data(celeb_name)
    if celeb_data:
        for key, val in celeb_data.items():
            print(f"{key}: {val}")
        print("")
