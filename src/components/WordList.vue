<template>
  <div class="word-list-container">
    <h2>单词本</h2>
    
    <!-- 添加新单词表单 -->
    <div class="add-word-form">
      <input 
        v-model="newWord.word" 
        type="text" 
        placeholder="输入单词" 
        required
      >
      <input 
        v-model="newWord.meaning" 
        type="text" 
        placeholder="输入释义" 
        required
      >
      <button @click="addNewWord">添加单词</button>
    </div>
    
    <!-- 单词列表 -->
    <div class="word-list">
      <div 
        v-for="word in words" 
        :key="word.id" 
        class="word-item"
      >
        <div class="word-info">
          <h3>{{ word.word }}</h3>
          <p>{{ word.meaning }}</p>
          <div class="word-meta">
            <span :class="['status', word.status]">
              {{ word.status === 'new' ? '新单词' : word.status === 'reviewed' ? '已复习' : '需复习' }}
            </span>
            <span>下次复习: {{ formatDate(word.nextReview) }}</span>
          </div>
        </div>
        <button class="delete-btn" @click="deleteWordHandler(word.id)">删除</button>
      </div>
      
      <div v-if="words.length === 0" class="empty-state">
        暂无单词，点击上方添加第一个单词吧！
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getWords, addWord, deleteWord } from '../utils/wordService';

const words = ref([]);
const newWord = ref({ word: '', meaning: '' });

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// 加载单词列表
const loadWords = () => {
  words.value = getWords();
};

// 添加新单词
const addNewWord = () => {
  if (newWord.value.word.trim() && newWord.value.meaning.trim()) {
    addWord(newWord.value.word.trim(), newWord.value.meaning.trim());
    newWord.value = { word: '', meaning: '' };
    loadWords();
  }
};

// 删除单词
const deleteWordHandler = (id) => {
  deleteWord(id);
  loadWords();
};

// 组件挂载时加载单词
onMounted(loadWords);
</script>

<style scoped>
.word-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.add-word-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.add-word-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-word-form button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.add-word-form button:hover {
  background-color: #45a049;
}

.word-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.word-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.word-info h3 {
  margin: 0 0 5px 0;
  color: #333;
}

.word-info p {
  margin: 0 0 10px 0;
  color: #666;
}

.word-meta {
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #888;
}

.status {
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: bold;
}

.status.new {
  background-color: #e3f2fd;
  color: #1976d2;
}

.status.reviewed {
  background-color: #e8f5e8;
  color: #388e3c;
}

.status.failed {
  background-color: #ffebee;
  color: #d32f2f;
}

.delete-btn {
  padding: 8px 15px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.delete-btn:hover {
  background-color: #da190b;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #888;
  font-size: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
</style>
