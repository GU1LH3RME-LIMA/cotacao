import requests
from flask import Flask, request, render_template,jsonify

app= Flask(__name__)

@app.route("/")

def index():
    return render_template("index.html")


@app.route("/converta",methods=["POST"])

def converter():
    papel = request.form.get("moedas") 
    res = requests.get("http://economia.awesomeapi.com.br/json/all/",params={"moedas":papel+ "-BRL"})
    if res.status_code !=200:
        return jsonify({"success":False})
    data = res.json()
    return jsonify({"success":True, "rate":round(float(data[papel]["bid"]),2),"nome":
                    data[papel]["name"],"var":data[papel]["pctChange"]})
