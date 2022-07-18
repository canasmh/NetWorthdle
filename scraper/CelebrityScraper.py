from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from time import sleep


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

    def dynamically_load_content(self, n_scrolls=50, sleep_time=0.5):
        """"
        This website loads content dynamically. Therefore, the scraper needs to 'scroll down' to load content. The sleep
        time is used to ensure that the scraper doesn't scroll to the very bottom of the page, and allows content to load.

        Parameters:
            n_scrolls (int): The number of times the scraper will send the 'scroll down' key.
            sleep_time (float): Time (in seconds) between each key send.

        """

        html_body = self.driver.find_element(By.TAG_NAME, "body")

        for i in range(n_scrolls):
            html_body.send_keys(Keys.PAGE_DOWN)
            sleep(sleep_time)

