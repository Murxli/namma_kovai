import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

const issueIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    userName: 'raj_kumar',
    email: 'raj@example.com',
    password: 'hashed_password_3',
    phone_no: '9876543210',
    address: '789 South Street, Cityville, India',
    area: 'Urban'
  },
  {
    _id: userIds[1],
    userName: 'neha_sharma',
    email: 'neha@example.com',
    password: 'hashed_password_4',
    phone_no: '8765432109',
    address: '456 East Avenue, Townsville, India',
    area: 'Suburban'
  },
  {
    _id: userIds[2],
    userName: 'arjun_singh',
    email: 'arjun@example.com',
    password: 'hashed_password_5',
    phone_no: '7654321098',
    address: '123 North Road, Villagetown, India',
    area: 'Rural'
  },
];

export const issues = [
  {
    _id: issueIds[0],
    userId: userIds[0],
    issue_type: 'pothole',
    department: 'road',
    name: 'John Doe',
    phone_no: '9876543210',
    address: '123 Main Street, Cityville, Country',
    area: 'Urban',
    description: 'Large pothole on the main road',
    images_list: [{ imgURL: 'image1.jpg' }, { imgURL: 'image2.jpg' }],
    issue_status: 'under review'
  },
  {
    _id: issueIds[1],
    userId: userIds[0],
    issue_type: 'streetlight',
    department: 'road',
    name: 'Jane Smith',
    phone_no: '8765432109',
    address: '456 Broad Avenue, Townsville, Country',
    area: 'Suburban',
    description: 'Streetlight not working in the neighborhood',
    images_list: [{ imgURL: 'image3.jpg' }],
    issue_status: 'under review'
  },
  {
    _id: issueIds[2],
    userId: userIds[1],
    issue_type: 'wastedumps',
    department: 'municipality',
    name: 'Bob Johnson',
    phone_no: '7654321098',
    address: '789 South Street, Cityville, Country',
    area: 'Urban',
    description: 'Illegal waste dump near the park',
    images_list: [{ imgURL: 'image4.jpg' }, { imgURL: 'image5.jpg' }],
    issue_status: 'under review'
  },
  {
    _id: issueIds[3],
    userId: userIds[2],
    issue_type: 'pothole',
    department: 'road',
    name: 'Alice Williams',
    phone_no: '6543210987',
    address: '321 North Road, Villagetown, Country',
    area: 'Rural',
    description: 'Small pothole on the village road',
    images_list: [{ imgURL: 'image6.jpg' }],
    issue_status: 'work in progress'
  },
  {
    _id: issueIds[4],
    userId: userIds[2],
    issue_type: 'pothole',
    department: 'road',
    name: 'Alice Williams',
    phone_no: '6543210987',
    address: '321 North Road, Villagetown, Country',
    area: 'Rural',
    description: 'Small pothole on the village road',
    images_list: [{ imgURL: 'image6.jpg' }],
    issue_status: 'completed'
  },
  {
    _id: issueIds[5],
    userId: userIds[2],
    issue_type: 'pothole',
    department: 'road',
    name: 'Alice Williams',
    phone_no: '6543210987',
    address: '321 North Road, Villagetown, Country',
    area: 'Rural',
    description: 'Small pothole on the village road',
    images_list: [{ imgURL: 'image6.jpg' }],
    issue_status: 'under review'
  }
];



