import sqlite3
import pandas as pd

df = pd.read_csv("finnishWords.csv")
conn = sqlite3.connect("source.db")

df.to_sql("words", conn, if_exists="replace", index=False)

conn.close()