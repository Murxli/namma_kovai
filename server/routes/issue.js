import express from 'express';
import { getissues, getdeptissues, updateissuestatus} from '../controllers/issues.js';

const router = express.Router();

// get requests
router.get("/",getissues);
router.get("/:department",getdeptissues);

//patch requests
router.patch("/:issueId/updatestatus",updateissuestatus)

export default router;
