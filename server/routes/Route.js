import express from 'express';
import { AddUser, getUser, } from '../controller/UserController.js';
const router = express.Router();
router.post("/add", AddUser)
router.get("/all", getUser)
export default router