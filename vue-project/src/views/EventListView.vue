<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventMeta from '@/components/EventMeta.vue'
import type { Event } from '@/types'
// 15.3步：新增onMounted生命周期钩子和axios引入
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 15.2步：移除旧本地硬编码数据，初始化为null
const events = ref<Event[]>(null)

// 15.3步：新增Axios请求加载模拟服务器数据
onMounted(() => {
  axios
    // 替换为14.4步创建的模拟服务器URL（格式：https://my-json-server.typicode.com/[GitHub用户名]/[仓库名]/events）
    .get('https://my-json-server.typicode.com/wjk919/db/events')
    .then((response) => {
      // 15.3步：控制台打印服务器返回数据（验证请求成功）
      console.log('Loaded events from mock server:', response.data)
    })
    .catch((error) => {
      // 错误处理：打印错误信息
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-group">
      <EventCard :event="event" />
      <EventMeta :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.event-group {
  width: 250px;
  margin-bottom: 24px;
}
</style>