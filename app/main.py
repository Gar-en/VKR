from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
from sqlite3 import Error



app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db_connection(path):
    connection = None
    try:
        connection = sqlite3.connect(path)
        print("Connection to SQLite DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection


@app.get("/ping")
def pong():
    return {"ping": "pong!"}

@app.get("/")
def pong():
    return "main"

def get_all(sql_query):
    try:
        conn = get_db_connection("./water.db")
        cur = conn.cursor()
    
        cur.execute(sql_query)

        result = [dict((cur.description[i][0], value) 
                for i, value in enumerate(row)) for row in cur.fetchall()]
        
        cur.close()
        conn.close()

    except Exception as ex:
        result = {'data': None}
        print(ex)

    return result

@app.get("/result")
def prod(numb_of_people = 1, smell = 1, turbidity = 1, pH = 1, oxidizability = 1, nitrates = 1, sulfates = 1, chlorides = 1, nitrites = 1, chromaticity = 1, hardness = 1, iron = 1):

    # arg = .get('smell')
    aeration = get_all(f"SELECT id, name, price FROM aeration WHERE smell <= {smell} \
                        OR turbidity <= {turbidity} OR sulfates <= {sulfates} OR iron <= {iron};")
    
    big_blue = get_all(f"SELECT id, name, price FROM big_blue WHERE smell <= {smell} \
                        OR turbidity <= {turbidity} OR pH <= {pH} OR oxidizability <= {oxidizability} \
                        OR nitrates <= {nitrates} OR sulfates <= {sulfates} OR chlorides <= {chlorides} \
                        OR nitrites <= {nitrites} OR chromaticity <= {chromaticity} OR hardness <= {hardness} \
                        OR iron <= {iron};")
    
    containers = get_all(f"SELECT id, name, capacity, price FROM containers WHERE hardness <= {hardness} \
                        OR iron <= {iron} OR numb_of_people <= {numb_of_people};")
    
    control_blocks = get_all(f"SELECT id, name, price FROM control_blocks WHERE hardness <= {hardness} \
                        OR iron <= {iron} OR numb_of_people <= {numb_of_people};")
    
    fillers = get_all(f"SELECT id, name, capacity, price FROM fillers WHERE 'smell' <= {smell} \
                        OR turbidity <= {turbidity} OR pH <= {pH} OR oxidizability <= {oxidizability} \
                        OR nitrates <= {nitrates} OR sulfates <= {sulfates} OR chlorides <= {chlorides} \
                        OR nitrites <= {nitrites} OR chromaticity <= {chromaticity} OR hardness <= {hardness} OR iron <= {iron};")
    
    return {'aeration':aeration, 'big_blue':big_blue, 'containers':containers, 'control_blocks':control_blocks, 'fillers':fillers}


#smell = arg.get('smell')
    #filler = get_all(f"SELECT * FROM products WHERE category = '{args['vol']}' LIMIT 10;")
    #query = "SELECT * FROM fillers WHERE smell > %s"
    #fillers = get_all(query, (smell))