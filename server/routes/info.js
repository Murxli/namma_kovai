import express from 'express';
import { getinfos, postinfo} from '../controllers/infos.js';
const router = express.Router();

// get requests
router.get("/",getinfos)
router.post("/",postinfo)

export default router;