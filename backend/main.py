from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# MongoDB import
from db import founders_collection


# --------------------------------------------------
# FastAPI app
# --------------------------------------------------
app = FastAPI(
    title="BOND Early Access API",
    description="API for founder waitlist and feedback",
    version="1.0.0"
)


# --------------------------------------------------
# CORS (allow React frontend)
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",   # local React dev
        # "https://yourdomain.com" # add later when deployed
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Request model
# --------------------------------------------------
class FounderRequest(BaseModel):
    email: EmailStr
    feedback: Optional[str] = None


# --------------------------------------------------
# Routes
# --------------------------------------------------
@app.get("/")
def root():
    return {"status": "API is running"}


@app.post("/founders")
def save_founder(data: FounderRequest):
    """
    Save founder email + feedback into MongoDB
    """

    # Check for duplicate email
    existing = founders_collection.find_one({"email": data.email})
    if existing:
        raise HTTPException(
            status_code=409,
            detail="Email already registered"
        )

    # Insert into MongoDB
    founders_collection.insert_one({
        "email": data.email,
        "feedback": data.feedback,
        "created_at": datetime.utcnow()
    })

    return {
        "message": "Founder saved successfully",
        "email": data.email
    }


@app.post("/founders")
def save_or_update_founder(data: FounderRequest):
    founders_collection.update_one(
        {"email": data.email},      # find by email
        {
            "$set": {
                "feedback": data.feedback,
                "updated_at": datetime.utcnow()
            },
            "$setOnInsert": {
                "email": data.email,
                "created_at": datetime.utcnow()
            }
        },
        upsert=True
    )

    return {
        "message": "Founder response saved successfully",
        "email": data.email
    }

