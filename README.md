# NetWorthdle
A wordle-styled puzzle game where one must guess the net worth of a given celebrity. 


## How it was made

1.) Use Selenium.py to scrape the web for the names of the worlds most famous celebrity.
2.) Use Ninja API to get the net worth of each celebrity.
3.) Post celebrity name, birthday, country of origin, and networth to database using MongoPy.
4.) Create a Node API route used to fetch a celebrity from the Mongo database.
5.) Use React to build UI that makes a get request to the Node API to fetch a celebrity.
