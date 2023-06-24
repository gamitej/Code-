import uuid
from db import selectFromTable, insertIntoTable

key = ["id", "username", "password"]

table_name = "users"


def getUsers():
    lis = []
    rows = selectFromTable("*", table_name)
    for row in rows:
        json = {}
        for col in range(len(row)):
            json[key[col]] = row[col]
        lis.append(json)
    return lis
