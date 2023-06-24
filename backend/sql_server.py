import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

# =========== CREATE USER TABLE ===============

create_user_table = '''
        CREATE TABLE IF NOT EXISTS users (
            id text,
            name VARCHAR(25) NOT NULL,
            username text,
            password VARCHAR(25) NOT NULL,
            PRIMARY KEY (id)
        )
        '''
cursor.execute(create_user_table)

# =========== CREATE QUESTIONS TABLE ===============

create_que_table = '''
        CREATE TABLE IF NOT EXISTS questions (
            topicId text,
            topic VARCHAR(25) NOT NULL,
            question text,
            url VARCHAR(25) NOT NULL,
            level VARCHAR(25) NOT NULL,
            platform VARCHAR(25) NOT NULL,
            PRIMARY KEY (topicId)
        )
        '''
cursor.execute(create_que_table)

# =========== INSERT MANY ROWS ================

user_data = [
    ("1", "Amitej Pratap Singh", "Amitej", "1234"),
]

insert_query = "INSERT OR IGNORE INTO users VALUES(?,?,?,?)"

cursor.executemany(insert_query, user_data)

connection.commit()
connection.close()
