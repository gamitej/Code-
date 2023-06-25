from flask import Flask, request, jsonify
from flask import Blueprint
from threading import Thread
# function import
from remark.rem import addQuestionToTable, delRemark, updateRemark
from crud.create_excel import createExcel


crud = Blueprint('crud', __name__)

arr = [
    {"title": "Arrays", "total": 32, "solved": 32, "per": 1},
    {"title": "Strings", "total": 22, "solved": 21, "per": 1},
    {"title": "Two Pointers", "total": 16, "solved": 3, "per": 1},
]


@crud.route('/add-questions', methods=["POST"])
def addQuestions():
    try:
        req = request.get_json()
        # -- req body
        url, level, question, topic, platform = req["url"], req[
            "level"], req["question"], req["topic"], req["platform"]
        # -- inserting to table
        res = addQuestionToTable(
            topic, question, url, level, platform)
        if res:
            # -- return response
            return jsonify({"message": res, "error": False}), 400
        # -- update to excel
        thread = Thread(target=createExcel)
        thread.start()
        # -- return response
        return jsonify({"message": "Question Added Successfully", "error": True}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


@crud.route('/topics', methods=["GET"])
def getTopic():
    # -- /topic?id=<string:id>
    try:
        id = request.args.get('id')
        # -- return response
        return jsonify({"data": arr, "error": True}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


@crud.route('/topics/<string:id>', methods=["GET"])
def getTopics(id):
    try:
        # -- return response
        return jsonify({"data": arr, "error": True}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


@crud.route('/remarks/<string:id>', methods=["DELETE", "PUT"])
def putDeleteRemark(id):
    try:
        if request.method == "DELETE":
            res = delRemark(id)
            if res:
                return jsonify({"message": "Remark Deleted Already"}), 200
            return jsonify({"message": "Remark Deleted Successfully"}), 200
        if request.method == "PUT":
            req = request.get_json()
            study, remarkText, day = req["study"], req["remark"], req["day"]
            res = updateRemark(study, remarkText, day, id)
            if res:
                return jsonify({"message": res}), 500
            return jsonify({"message": "Remark Updated successfully"}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500
