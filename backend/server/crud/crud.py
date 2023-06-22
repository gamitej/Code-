from flask import Flask,request,jsonify
from flask import Blueprint
from remark.rem import getRemarks, postRemark, delRemark, updateRemark

crud = Blueprint('crud', __name__)

@crud.route('/remarks', methods=["GET", "POST"])
def getPostRemark():
    try:
        if request.method == "GET":
            res = getRemarks()
            return jsonify({"data": res}), 200
        if request.method == "POST":
            req = request.get_json()
            study, remarkText, day = req["study"], req["remark"], req["day"]
            res = postRemark(study, remarkText, day)
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
