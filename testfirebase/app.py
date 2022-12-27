from flask import Flask,render_template,flash, redirect,url_for,session,logging,request

from firebase import Firebase

app = Flask(__name__)

config = {
    "apiKey": "AIzaSyCwh41hkcD524PZqa0yfND4RM5CqZLKulE",
    "authDomain": "mivoyage.firebaseapp.com",
    "databaseURL": "https://mivoyage-default-rtdb.firebaseio.com/",
    "storageBucket": "mivoyage.appspot.com"
}

firebase = Firebase(config)
db = firebase.database()

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login",methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        global login
        log = db.child("users").child(username).get()
        login = log.val()
        if login["password"] == password:
            return redirect("/success")
    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form['username']
        mail = request.form['mail']
        password = request.form['password']
        data = {"mail": mail,
                "password": password,
                "username":username}
        db.child("users").child(username).set(data)

        return redirect(url_for("login"))
    return render_template("register.html")

@app.route("/success")
def success():
    return render_template("success.html", login = login)

if __name__ == "__main__":
    app.run(debug=True)