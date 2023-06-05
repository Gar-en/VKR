import psycopg2


def get_db_connection(db_name, db_user, db_password, db_host, db_port):
    connection = None
    try:
        connection = psycopg2.connect(
            database=db_name,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port,
        )
        print("Connection to PostgreSQL DB successful")

    except psycopg2.OperationalError as e:
        print(f"The error '{e}' occurred")

    return connection


def init_db(host):
    conn = get_db_connection("postgres", "admin", "root", host, "5432")
    cur = conn.cursor()

    # Execute a command: this creates a new table
    cur.execute('DROP TABLE IF EXISTS products;')
    cur.execute('CREATE TABLE products( \
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY, \
        category VARCHAR(31), \
        name VARCHAR(255), \
        image VARCHAR(511), \
        label VARCHAR(511), \
        OS VARCHAR(31), \
        processor VARCHAR(63), \
        memory INT, \
        diagonal float, \
        resolution VARCHAR(15), \
        price INT, \
        price_with_sell INT \
    );')

    # cur.execute(req_str)
    # cur.execute(req_str)
    # cur.execute(req_str)

    conn.commit()

    cur.close()
    conn.close()

if __name__ == '__main__':
    init_db("127.0.0.1")