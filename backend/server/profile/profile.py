# flask import
from flask import Flask, request, jsonify
from flask import Blueprint


profile = Blueprint('profile', __name__)


@profile.route('/add-questions', methods=["POST"])
def addQuestions():
    try:
        req = request.get_json()
        if req:
            return jsonify({"message": req, "error": False}), 400
        else:
            return jsonify({"message": "Question Added Successfully", "error": True}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500
