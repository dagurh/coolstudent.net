import sqlite3
from typing import Iterable, List
from flask import Flask, render_template, url_for, redirect
import data as db

app = Flask(__name__)

globalWeek = 18

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', list=db.all_deadlines(),
                           exsyslit=db.exsysLit(globalWeek), comarklit=db.comarkLit(globalWeek),
                           statlit=db.statLit(globalWeek), exsystø=db.exsysTØ(globalWeek),
                           comarktø=db.comarkTØ(globalWeek), stattø=db.statTØ(globalWeek),
                           exsyslec=db.exsysLec(globalWeek), comarklec=db.comarkLec(globalWeek),
                           statlec=db.statLec(globalWeek))


@app.route('/Exsys')
def Exsys():
    return render_template('Exsys.html')


@app.route('/ComArk')
def Comark():
    return render_template('ComArk.html')


@app.route('/Stat')
def Stat():
    return render_template('Stat.html')


@app.route('/Groups')
def Groups():
  return render_template('Groups.html')

@app.route('/kalender')
def kalender():
    return render_template('kalender.html')

@app.route('/db/<int:id>', methods=['GET'])
def my_link(id):
    db.changelink(id)
    db.changelinkDeadlines(id)
    return render_template('index.html', list=db.all_deadlines(),
                           exsyslit=db.exsysLit(globalWeek), comarklit=db.comarkLit(globalWeek),
                           statlit=db.statLit(globalWeek), exsystø=db.exsysTØ(globalWeek),
                           comarktø=db.comarkTØ(globalWeek), stattø=db.statTØ(globalWeek),
                           exsyslec=db.exsysLec(globalWeek), comarklec=db.comarkLec(globalWeek),
                           statlec=db.statLec(globalWeek))

@app.route('/week/<int:week>', methods=['GET'])
def earlier_week(week):
    return render_template('index.html', list=db.all_deadlines(),
                           exsyslit=db.exsysLit(week), comarklit=db.comarkLit(week),
                           statlit=db.statLit(week), exsystø=db.exsysTØ(week),
                           comarktø=db.comarkTØ(week), stattø=db.statTØ(week),
                           exsyslec=db.exsysLec(week), comarklec=db.comarkLec(week),
                           statlec=db.statLec(week))


@app.route('/reset/<int:week>', methods=['GET'])
def reset(week):
    print('I got clicked braaa!  ')
    db.resetLinks()
    db.resetLinksDeadlines()
    return render_template('index.html', list=db.all_deadlines(),
                           exsyslit=db.exsysLit(week), comarklit=db.comarkLit(week),
                           statlit=db.statLit(week), exsystø=db.exsysTØ(week),
                           comarktø=db.comarkTØ(week), stattø=db.statTØ(week),
                           exsyslec=db.exsysLec(week), comarklec=db.comarkLec(week),
                           statlec=db.statLec(week))


@app.route('/uploadDone/<int:id>', methods=['GET'])
def uploadDone(id):
    db.uploadDone(id)
    return render_template('index.html', list=db.all_deadlines(),
                           exsyslit=db.exsysLit(globalWeek), comarklit=db.comarkLit(globalWeek),
                           statlit=db.statLit(globalWeek), exsystø=db.exsysTØ(globalWeek),
                           comarktø=db.comarkTØ(globalWeek), stattø=db.statTØ(globalWeek),
                           exsyslec=db.exsysLec(globalWeek), comarklec=db.comarkLec(globalWeek),
                           statlec=db.statLec(globalWeek))                           

if __name__ == '__main__':
    app.run(debug=True, port=5000)


