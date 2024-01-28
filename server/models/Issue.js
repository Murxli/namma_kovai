import mongoose from "mongoose";

const issueSchema = mongoose.Schema(
    {
        userId:{
            type: String,
            required: true,
        },
        issue_type:{
            type: String,
            enum: ['pothole', 'streetlight', 'wastedumps'],
            required: true,
        },
        department:{
            type:String,
            enum: ['municipality','electricity','road']
        },
        name:{
            type:String,
            required:true,
        },
        phone_no:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            maxlength: 1000,
            required: true,
        },
        area:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        images_list:{
            type:[{imgURL:String}],
            required:true,
        },
        issue_status:{
            type: String,
            enum:['under review','work in progress','completed'],
            required:true
        }
    }
);

const Issue = mongoose.model("Issue",issueSchema);

export default Issue;