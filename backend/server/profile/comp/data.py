from mapping import get_data_mapping

'''
Profile data dropdown manipulation
'''


def getOptions(arr, name):
    lis = []
    for idx, val in enumerate(arr):
        lis.append(
            {"id": idx+1, "label": data_mapping[name][val], "value": val})
    return lis


data_mapping = get_data_mapping()

platformList = ["codechef", "codeforces", "leetcode"]
topicList = ["arrays", "twoPointers", "strings"]


platformOptionsList = getOptions(platformList, "platform")
topicOptionsList = getOptions(platformList, "platform")


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


def getProfileDropDown():
    return dropDownData
