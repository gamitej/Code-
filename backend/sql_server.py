import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

create_table = '''
        CREATE TABLE IF NOT EXISTS remarks (
            id text,
            study VARCHAR(25) NOT NULL,
            remark text,
            work VARCHAR(25) NOT NULL,
            PRIMARY KEY (id)
        )
        '''
cursor.execute(create_table)


# ---------- INSERT MANY ROWS --------------

data = [
    ("1", "coding", "hi amitej", "monday"),
    ("2", "coding", "hi singh", "wednesday"),
    ("3", "frontend", "hi amisha", "monday"),
    ("4", "coding", "hi tiwari", "friday"),
]


insert_query = "INSERT OR IGNORE INTO remarks VALUES(?,?,?,?)"

cursor.executemany(insert_query, data)

connection.commit()
connection.close()
