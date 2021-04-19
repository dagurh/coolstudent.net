import requests
from bs4 import BeautifulSoup
import sqlite3
from typing import Iterable, List

__DEADLINES_DB = "data.db"
__CREATE_SQL = """
CREATE TABLE IF NOT EXISTS deadlines
(course TEXT NOT NULL,
 title TEXT NOT NULL,
 due TEXT NOT NULL);
"""

deadlinesexsys = 'https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset'

headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'}

page = requests.get(deadlinesexsys, headers=headers)

soup = BeautifulSoup(page.text, 'html.parser')

rows = soup.find_all('li')

for row in rows:
  print(row)


