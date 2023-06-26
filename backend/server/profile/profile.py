# flask import
from flask import Flask, request, jsonify
from flask import Blueprint
from profile.comp.data import getProfileDropDown

profile = Blueprint('profile', __name__)


@profile.route('/dropdown-data', methods=["GET"])
def getDropDownData():
    try:
        dropDownData = getProfileDropDown()
        return jsonify({"data": dropDownData, "success": True}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500
