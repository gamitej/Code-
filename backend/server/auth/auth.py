from flask import Flask, request, jsonify
from flask import Blueprint

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=["POST"])
def login():
    try:
        req = request.get_json()
        userId, passwd = req["username"], req["password"]
        if userId != "Amitej":
            return jsonify({"msg": "Username not found"}), 400
        if passwd != "1234":
            return jsonify({"msg": "Password Incorrect"}), 400
        return jsonify({"msg": "success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"msg": "Something went wrong"}), 500


@auth.route('/signup', methods=["POST"])
def singup():
    try:
        req = request.get_json()
        name, username, passwd = req["name"], req["username"], req["password"]
        if username != "Amitej":
            return jsonify({"msg": "Username already exists"}), 400
        return jsonify({"msg": "success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"msg": "Something went wrong"}), 500


@auth.route('/pin-api', methods=["GET"])
def pins():
    return jsonify({"data": {
        "content": [
            {
                "name": "1",
                "id": "1",
                "username": "anupam",
                "created": "01-22-2023",
                "hashtags": "",
                "caption": "q",
            },
            {
                "name": "2",
                "id": "2",
                "username": "amitej",
                "created": "01-22-2023",
                "hashtags": "",
                "caption": "q",
            },
            {
                "name": "3",
                "id": "3",
                "username": "adarsh",
                "created": "01-22-2023",
                "hashtags": "",
                "caption": "q",
            },
            {
                "name": "4",
                "id": "4",
                "username": "pagal",
                "created": "01-22-2023",
                "hashtags": "",
                "caption": "q",
            },
        ],
    }}), 200
