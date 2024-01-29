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
    userName: 'Mona Abishek',
    email: 'monaabishek@gmail.com',
    password: 'hashed_password_1',
    phone_no: '9876543210',
    address: '789 South Street, Kovaipudur, Coimbatore',
    area: 'kovaipudur'
  },
  {
    _id: userIds[1],
    userName: 'MuraliKrishna',
    email: 'muralikrishna@gmail.com',
    password: 'hashed_password_4',
    phone_no: '8765432109',
    address: '456 East Avenue, Saravanampatti, Coimbatore',
    area: 'Saravanampatti'
  },
  {
    _id: userIds[2],
    userName: 'Manikandan',
    email: 'manikandan@gmail.om',
    password: 'hashed_password_5',
    phone_no: '7654321098',
    address: '123 North Road, Saibaba Colony, Coimbatore',
    area: 'Saibaba Colony'
  },
];

export const issues = [
  {
    _id: issueIds[0],
    userId: userIds[0],
    issue_type: 'pothole',
    department: 'Road-Transport',
    name: 'John Doe',
    phone_no: '9876543210',
    address: '123 Main Street, Kovaipudur , Coimbatore',
    area: 'Urban',
    description: 'Large pothole on the main road',
    images_list: ["one.jpg", "two.jpg","three.jpg"],
    issue_status: 'under review'
  },
  {
    _id: issueIds[1],
    userId: userIds[0],
    issue_type: 'streetlight',
    department: 'Electricity',
    name: 'Jane Smith',
    phone_no: '8765432109',
    address: '456 Broad Avenue, Saravanampatti, Coimbatore',
    area: 'Suburban',
    description: 'Streetlight not working in the neighborhood',
    images_list: ["image6.jpg", "image7.jpg"],
    issue_status: 'completed'
  },
  {
    _id: issueIds[2],
    userId: userIds[1],
    issue_type: 'wastedumps',
    department: 'Municipality',
    name: 'Bob Johnson',
    phone_no: '7654321098',
    address: '789 South Street, Kovaipudur, Coimbatore',
    area: 'Urban',
    description: 'Illegal waste dump near the park',
    images_list: ["image6.jpg", "image7.jpg"],
    issue_status: 'under review'
  },
  {
    _id: issueIds[3],
    userId: userIds[2],
    issue_type: 'pothole',
    department: 'Road-Transport',
    name: 'Alice Williams',
    phone_no: '6543210987',
    address: '321 North Road, Saravanampatti, Coimbatore',
    area: 'Rural',
    description: 'Small pothole on the village road',
    images_list: ["image6.jpg", "image7.jpg"],
    issue_status: 'work in progress'
  },
  {
    _id: issueIds[4],
    userId: userIds[2],
    issue_type: 'pothole',
    department: 'Road-Transport',
    name: 'Alice Williams',
    phone_no: '6543210987',
    address: '321 North Road, Kovaipudur, Coimbatore',
    area: 'Rural',
    description: 'Small pothole on the village road',
    images_list: ["image6.jpg", "image7.jpg"],
    issue_status: 'completed'
  },
];



