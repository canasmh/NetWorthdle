from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


class CelebrityScraper:
    """
    This object scrapes celebrities from https://www.thefamouspeople.com/21st-century.php.
    """

    def __init__(self):
        service = Service(ChromeDriverManager().install())
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument("--headless")
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        self.url = "https://www.thefamouspeople.com/21st-century.php"



