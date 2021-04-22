import sqlite3
from typing import Iterable, List
from flask import Flask, render_template, url_for, redirect
import data as db

app = Flask(__name__)

@app.route('/')
def index():
  return redirect('https://vm06.exsys2021.cs.au.dk/index')

@app.route('/index')
def indexx():
  return render_template('index.html', list=db.all_deadlines())

@app.route('/kalender')
def kalender():
  return render_template('kalender.html')

if __name__ == '__main__':
  app.run(debug=True)


