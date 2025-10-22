<script setup lang="ts">
// 导入Event接口，通过Props接收事件对象
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <!-- 容器设置右对齐，内部展示分类和组织者 -->
  <div class="event-meta">
    <p>Category: {{ event.category }}</p>
    <p>Organized by: {{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-meta {
  text-align: right; /* 文本右对齐 */
  margin-top: 8px; /* 与上方标题保持间距 */
}

.event-meta p {
  font-size: 14px; /* 统一字体大小 */
  margin: 4px 0; /* 调整段落间距 */
  color: #666; /* 可选：调整字体颜色，增强视觉层次 */
}
</style>
