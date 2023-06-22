import uuid
from db import selectFromTable, insertIntoTable, deleteRowFromTable, updateTable


key = ["id", "study", "remark", "day"]

table_name = "remarks"


def getRemarks():
    lis = []
    rows = selectFromTable("*", table_name)
    for row in rows:
        json = {}
        for col in range(len(row)):
            json[key[col]] = row[col]
        lis.append(json)
        json = {}

    return lis


def postRemark(study, remark, day):
    id = uuid.uuid1().hex
    res = insertIntoTable(table_name, "(?,?,?,?)", (id, study, remark, day))
    return res


def delRemark(id):
    res = deleteRowFromTable(table_name, id)
    return res


def updateRemark(study, remark, work, id):
    val = (study, remark, work, id)
    res = updateTable(table_name, "study=?,remark=?,work=?", "id=?", val)
    return res
