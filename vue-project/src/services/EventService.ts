import axios from 'axios'

// 16.1步：创建Axios实例，配置模拟服务器基础URL
const apiClient = axios.create({
  // 替换为你的GitHub模拟服务器URL（格式：https://my-json-server.typicode.com/[用户名]/[仓库名]）
  baseURL: 'https://my-json-server.typicode.com/wjk919/db',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// 16.1步：封装事件列表请求方法
export default {
  getEvents() {
    return apiClient.get('/events') // 对应db.json中的events数组
  },
}
