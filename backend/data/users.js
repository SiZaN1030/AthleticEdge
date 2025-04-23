import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'sijan',
    email: 'sijan03@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  }
]

export default users
