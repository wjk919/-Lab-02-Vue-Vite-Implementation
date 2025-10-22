import axios from 'axios'

// 16.3步：创建学生服务Axios实例，指向文档指定的学生接口
const studentApiClient = axios.create({
  baseURL: 'https://dv-student-backend-2019.appspot.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// 16.3步：封装学生信息请求方法
export default {
  getStudents() {
    return studentApiClient.get('/students') // 文档指定的学生接口路径
  },
}
