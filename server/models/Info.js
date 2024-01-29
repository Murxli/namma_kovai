import mongoose from "mongoose";


const infoSchema = mongoose.Schema(
    {
        info_title:{
            type:String,
            required:true
        },
        info_dept:{
            type:String,
            enum: ['Municipality','Electricity','Road-Transport']
        },
        description:{
            type:String,
            required:true,
        },
    },
        {timestamps: true}
)


const Info  = mongoose.model("Info",infoSchema);

export default Info;