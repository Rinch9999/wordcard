<script setup>
import { ref } from 'vue';
import WordList from './components/WordList.vue';
import MemoryCard from './components/MemoryCard.vue';
import ProgressTracker from './components/ProgressTracker.vue';

// 导航状态管理
const activeTab = ref('memory');

// 导航选项
const navItems = [
  { id: 'memory', name: '记忆测试', icon: '🧠' },
  { id: 'wordlist', name: '单词本', icon: '📚' },
  { id: 'progress', name: '学习进度', icon: '📊' }
];
</script>

<template>
  <div class="app-container">
    <!-- 应用标题 -->
    <header class="app-header">
      <h1>单词记忆卡片</h1>
      <p>使用间隔重复法，高效记忆英语单词</p>
    </header>
    
    <!-- 导航栏 -->
    <nav class="app-nav">
      <button 
        v-for="item in navItems" 
        :key="item.id"
        :class="['nav-btn', { active: activeTab === item.id }]"
        @click="activeTab = item.id"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-text">{{ item.name }}</span>
      </button>
    </nav>
    
    <!-- 主内容区 -->
    <main class="app-main">
      <MemoryCard v-if="activeTab === 'memory'" />
      <WordList v-else-if="activeTab === 'wordlist'" />
      <ProgressTracker v-else-if="activeTab === 'progress'" />
    </main>
    
    <!-- 页脚 -->
    <footer class="app-footer">
      <p>单词记忆卡片 © 2026 | 使用 Vue3 + 间隔重复算法</p>
    </footer>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f0f2f5;
  color: #333;
  line-height: 1.6;
}

/* 应用容器 */
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* 应用标题 */
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.app-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 导航栏 */
.app-nav {
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  font-weight: 500;
}

.nav-btn:hover {
  background-color: #e9ecef;
  color: #333;
}

.nav-btn.active {
  background-color: #e3f2fd;
  color: #1976d2;
  border-bottom: 3px solid #1976d2;
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-text {
  white-space: nowrap;
}

/* 主内容区 */
.app-main {
  flex: 1;
  padding: 2rem;
  background-color: #fafafa;
}

/* 页脚 */
.app-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 1.5rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  
  .app-main {
    padding: 1rem;
  }
  
  .nav-btn {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
  
  .nav-text {
    display: none;
  }
}
</style>
