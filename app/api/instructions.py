"""Instructions API"""

from __future__ import annotations
from typing import Dict, Any
import logging
import json
from pathlib import Path

from fastapi import APIRouter, Depends, Request, HTTPException
from fastapi.responses import FileResponse
from libpvarki.middleware import MTLSHeader
from libpvarki.schemas.product import UserCRUDRequest

LOGGER = logging.getLogger(__name__)

router = APIRouter(dependencies=[Depends(MTLSHeader(auto_error=True))])


@router.post("/instructions/{language}")
async def user_intructions(user: UserCRUDRequest, request: Request, language: str) -> Dict[str, Any]:
    """return user instructions"""
    return {"callsign": "test", "instructions": "test", "language": language}
