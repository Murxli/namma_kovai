import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import multer from 'multer';
import multerS3 from "multer-s3";
import AWS from 'aws-sdk';
import { fileURLToPath } from "url";
import { users, issues} from "./data/index.js";
import User from "./models/User.js"
import Issue from "./models/Issue.js"
import issueRoutes from "./routes/issue.js"
import {createIssue} from "./controllers/issues.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

AWS.config.update({
    accesskeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
const s3 = new AWS.S3();
const myBucket = process.env.AWS_BUCKET_NAME


var upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:myBucket,
        acl:"public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key : function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});

app.post("/upload",upload.single("images_list"),(req,res) => {
    console.log(req.file);
    res.send("successfully uploaded")
});

app.post("/multiple",upload.array("images",3),(req,res,next)=>{
    console.log(req.files);
    next();
},createIssue)



app.use("/issues",issueRoutes);

const PORT = process.env.PORT || 6001;
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Issue.insertMany(issues);
    })
    .catch((error) => console.log(`${error} did not connect`));
