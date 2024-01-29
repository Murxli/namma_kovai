import express from 'express';
import { getusers, createuser ,getemailuser} from '../controllers/users.js';
const router = express.Router();

// get requests
router.get("/",getusers)
router.get("/:email",getemailuser)
router.post("/",createuser)

export default router;