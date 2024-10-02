from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/games')
def games():
    game_data = [
        {"name": "Game 1", "img": "/static/images/game1.jpg"},
        {"name": "Game 2", "img": "/static/images/game2.jpg"},
        {"name": "Game 3", "img": "/static/images/game3.jpg"}
    ]
    return jsonify(game_data)

if __name__ == '__main__':
    app.run(debug=True)
