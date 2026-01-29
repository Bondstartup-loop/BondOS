from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["EarlyAccess"]

founders_collection = db["UserData"]
founders_collection.create_index("email", unique=True)
