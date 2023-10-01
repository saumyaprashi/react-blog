// for registration

import express from "express";
import {register, login, logout} from "../Controllers/auth.js";


const router = express.Router();
// functions from controller to register,login, logout
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)



export default router;
