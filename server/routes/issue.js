import express from 'express';
import { getissues, getbyissuestatus, updateissuestatus} from '../controllers/issues.js';

const router = express.Router();

// get requests
router.get("/",getissues);
router.get("/:department",getbyissuestatus);


//patch requests
router.patch("/updatestatus/:issueId",updateissuestatus)

export default router;
