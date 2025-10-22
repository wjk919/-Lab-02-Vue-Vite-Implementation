<script setup lang="ts">
// 8.1步骤：从Props接收事件对象，替代内部定义
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()

// 注释原内部事件定义
// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 28, 2022',
//   time: '12:00',
//   petsAllowed: true,
//   organizer: 'Kat Laydee'
// })
</script>

<template>
  <!-- 5步骤：更新卡片容器类名，应用样式 -->
  <div class="event-class">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </div>
</template>

<style scoped>
/* 5步骤：事件卡片样式 */
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  border-radius: 4px;
}
.event-card:hover {
  transform: scale(1.01); /*  hover放大效果 */
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); /* 阴影效果 */
}
</style>
