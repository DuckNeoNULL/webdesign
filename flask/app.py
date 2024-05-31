from flask import Flask, render_template, request
# the special variable _name_ python refers the current file name;
app = Flask(__name__)

@app.route("/")

def index():
    return "Hello, World"


if __name__ == '__main__':
    app.run(debug=True)
