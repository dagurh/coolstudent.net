import sqlite3
from typing import Iterable, List
from flask import Flask, render_template, url_for, redirect
import data as db

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html', list=db.all_deadlines(), exsyslit=db.exsysLit(), comarklit=db.comarkLit(), statlit=db.statLit(), exsystø=db.exsysTØ(), comarktø=db.comarkTØ(), stattø=db.statTØ(), exsyslec=db.exsysLec(), comarklec=db.comarkLec(), statlec=db.statLec())

@app.route('/Exsys')
def Exsys():
  return render_template('Exsys.html')

@app.route('/ComArk')
def Comark():
  return render_template('ComArk.html')

@app.route('/Stat')
def Stat():
  return render_template('Stat.html')

@app.route('/kalender')
def kalender():
  return render_template('kalender.html')

if __name__ == '__main__':
  app.run(debug=True, port=5000)


