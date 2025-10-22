<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

// 16.3步：定义Student类型（或在types.ts中声明，此处简化直接定义）
interface Student {
  name: string
  surname: string
  gpa: number
  // 其他字段根据接口返回补充，文档要求展示name、surname、gpa
}

const students = ref<Student[]>(null)

// 16.3步：调用学生服务加载数据
onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('Error loading students:', error)
    })
})
</script>

<template>
  <h1>Student Information</h1>
  <div class="students-container">
    <!-- 16.3步：循环渲染学生卡片，展示name、surname、gpa -->
    <div v-for="(student, index) in students" :key="index" class="student-card">
      <h3>{{ student.name }} {{ student.surname }}</h3>
      <p>GPA: {{ student.gpa }}</p>
    </div>
  </div>
</template>

<style scoped>
.students-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}
.student-card {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.student-card h3 {
  margin: 0 0 10px;
  color: #2c3e50;
}
.student-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
}
</style>
