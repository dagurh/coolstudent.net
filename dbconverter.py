import sqlite3
import csv

__DEADLINES_DB = "data.db"

with sqlite3.connect(__DEADLINES_DB) as conn:
  cur = conn.cursor()
  cur.execute("""DELETE FROM courses""")
  cur.execute("""DELETE FROM deadlines""")
  conn.commit()

with open('csvdata/courses.csv', newline='') as csv_file:
  reader = csv.reader(csv_file, delimiter=',')
  next(reader)
  for row in reader:
    with sqlite3.connect(__DEADLINES_DB) as conn:
      cur = conn.cursor()
      cur.execute("""INSERT INTO courses VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)""",
                  (int(row[0]), row[1], row[2], int(row[3]), row[4], row[5], row[6], row[7], 
                  row[8], row[9], row[10], row[11], row[12]))
      conn.commit()

with open('csvdata/deadlines.csv', newline='') as csv_file:
  reader = csv.reader(csv_file, delimiter=',')
  next(reader)
  for row in reader:
    with sqlite3.connect(__DEADLINES_DB) as conn:
      cur = conn.cursor()
      cur.execute("""INSERT INTO deadlines VALUES (?,?,?,?,?,?,?)""",
                  (row[0], row[1], row[2], row[3], row[4], row[5], row[6]))
      conn.commit()
