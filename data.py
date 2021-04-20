import sqlite3
from typing import Iterable, List

__DEADLINES_DB = "data.db"
__CREATE_SQL = """
CREATE TABLE IF NOT EXISTS deadlines
(course TEXT NOT NULL,
 title TEXT NOT NULL,
 due TEXT NOT NULL);
"""

def create_database():
  with sqlite3.connect(
    __DEADLINES_DB, detect_types=sqlite3.PARSE_DECLTYPES | sqlite3.PARSE_COLNAMES
  ) as conn:
    cur = conn.cursor()
    cur.execute(__CREATE_SQL)
    conn.commit()

def all_deadlines() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM deadlines;"""
    )
    return cur.fetchall()

if __name__ != "__main__":
  create_database()