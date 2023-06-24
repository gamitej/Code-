from flask import Flask, request, jsonify
from flask import Blueprint
from remark.rem import addQuestionToTable, delRemark, updateRemark

crud = Blueprint('crud', __name__)


@crud.route('/add-questions', methods=["POST"])
def addQuestions():
    try:
        req = request.get_json()
        # -- req body
        url, level, question, topic, platform = req["url"], req[
            "level"], req["question"], req["topic"], req["platform"]
        res = addQuestionToTable(
            topic, question, url, level, platform)
        if res:
            return jsonify({"message": res}), 500
        return jsonify({"message": "Remark Added Successfully"}), 200
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
