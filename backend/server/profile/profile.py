# flask import
from flask import Flask, request, jsonify
from flask import Blueprint
from mapping import get_data_mapping

profile = Blueprint('profile', __name__)


data_mapping = get_data_mapping()

platformList = ["codechef", "codeforces", "leetcode"]
topicList = ["arrays", "twoPointers", "strings"]


platformOptionsList = []
for idx, val in enumerate(platformList):
    platformOptionsList.append(
        {"id": idx+1, "label": data_mapping["platform"][val], "value": val})

topicOptionsList = []
for idx, val in enumerate(topicList):
    topicOptionsList.append(
        {"id": idx+1, "label": data_mapping["topics"][val], "value": val})


dropDownData = [
    {
        "options": platformOptionsList,
        "id": "1",
        "label": "Platform",
        "name": "platform",
    },
    {
        "options": [
            {"id": 1, "label": "Easy", "value": "easy"},
            {"id": 2, "label": "Medium", "value": "medium"},
            {"id": 3, "label": "Hard", "value": "hard"},
        ],
        "id": "2",
        "label": "Level",
        "name": "level",
    },
    {
        "options": topicOptionsList,
        "id": "3",
        "label": "Topic",
        "name": "topic",
    },
]


@profile.route('/dropdown-data', methods=["GET"])
def getDropDownData():
    try:
        return jsonify({"data": dropDownData, "success": True}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500
