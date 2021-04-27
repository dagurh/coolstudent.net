import sqlite3
from typing import Iterable, List

__DEADLINES_DB = "data.db"
__CREATE_SQL = """
CREATE TABLE IF NOT EXISTS deadlines
(course TEXT NOT NULL,
 title TEXT NOT NULL,
 due TEXT NOT NULL);"""

__CREATE_SQL2 = """
CREATE TABLE IF NOT EXISTS courses
(course TEXT NOT NULL,
  category TEXT NOT NULL,
  week INT,
  title TEXT NOT NULL,
  weekday TEXT NOT NULL,
  infotitle TEXT NOT NULL,
  info TEXT NOT NULL);
"""

def create_database():
  with sqlite3.connect(
    __DEADLINES_DB, detect_types=sqlite3.PARSE_DECLTYPES | sqlite3.PARSE_COLNAMES
  ) as conn:
    cur = conn.cursor()
    cur.execute(__CREATE_SQL)
    cur.execute(__CREATE_SQL2)
    conn.commit()

def all_deadlines() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM deadlines;"""
    )
    return cur.fetchall()

def exsysLit() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'EXSYS' AND category = 'Literature';
      """)
    return cur.fetchall()

def comarkLit() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'COMARK' AND category = 'Literature';
      """)
    return cur.fetchall()

def statLit() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'STAT' AND category = 'Literature';
      """)
    return cur.fetchall()

def exsysTØ() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'EXSYS' AND category = 'Exercises';
      """)
    return cur.fetchall()

def comarkTØ() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'COMARK' AND category = 'Exercises';
      """)
    return cur.fetchall()

def statTØ() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'STAT' AND category = 'Exercises';
      """)
    return cur.fetchall()

def exsysLec() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'EXSYS' AND category = 'Lectures';
      """)
    return cur.fetchall()

def comarkLec() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'COMARK' AND category = 'Lectures';
      """)
    return cur.fetchall()

def statLec() -> List:
  with sqlite3.connect(__DEADLINES_DB) as conn:
    cur = conn.cursor()
    cur.execute(
      """SELECT * FROM courses 
      WHERE course = 'STAT' AND category = 'Lectures';
      """)
    return cur.fetchall()

if __name__ != "__main__":
  create_database()