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

const infoIds = [
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

export const infos = [
  {
    _id:infoIds[0],
    "info_title": "Municipal Waste Collection Schedule",
    "info_dept": "Municipality",
    "description": "Check the schedule for municipal waste collection in your area.",
    "createdAt": "2022-02-01T10:00:00.000Z",
    "updatedAt": "2022-02-01T10:00:00.000Z"
  },
  {
    _id:infoIds[1],
    "info_title": "Power Outage Notice",
    "info_dept": "Electricity",
    "description": "Due to maintenance, there will be a planned power outage in your area.",
    "createdAt": "2022-02-05T15:30:00.000Z",
    "updatedAt": "2022-02-05T15:30:00.000Z"
  },
  {
    _id:infoIds[2],
    "info_title": "Road Closure Alert",
    "info_dept": "Road-Transport",
    "description": "A section of Main Street will be closed for road construction starting next week.",
    "createdAt": "2022-02-10T08:45:00.000Z",
    "updatedAt": "2022-02-10T08:45:00.000Z"
  },
  {
    _id:infoIds[3],
    "info_title": "Public Park Renovation",
    "info_dept": "Municipality",
    "description": "The public park is undergoing renovation to improve facilities for the community.",
    "createdAt": "2022-02-15T12:20:00.000Z",
    "updatedAt": "2022-02-15T12:20:00.000Z"
  },
  {
    _id:infoIds[4],
    "info_title": "Traffic Advisory",
    "info_dept": "Road-Transport",
    "description": "Expect delays on Highway 101 due to ongoing roadwork. Please plan your route accordingly.",
    "createdAt": "2022-02-20T17:10:00.000Z",
    "updatedAt": "2022-02-20T17:10:00.000Z"
  }
]




