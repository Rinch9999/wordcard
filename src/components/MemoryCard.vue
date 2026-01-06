<template>
  <div class="memory-card-container">
    <h2>记忆测试</h2>
    
    <!-- 进度显示 -->
    <div class="progress-info">
      <span>当前: {{ currentIndex + 1 }} / {{ pendingWords.length }}</span>
      <span>已完成: {{ completedCount }} / {{ totalWords }}</span>
    </div>
    
    <!-- 卡片区域 -->
    <div v-if="pendingWords.length > 0" class="card-section">
      <div 
        class="card-container"
        @click="flipCard"
      >
        <div 
          class="card"
          :class="{ flipped: isFlipped }"
        >
          <!-- 卡片正面 -->
          <div class="card-face front">
            <h3>{{ currentWord.word }}</h3>
            <p class="hint">点击卡片查看释义</p>
          </div>
          
          <!-- 卡片背面 -->
          <div class="card-face back">
            <h3>{{ currentWord.word }}</h3>
            <p class="meaning">{{ currentWord.meaning }}</p>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="card-actions" v-if="isFlipped">
        <button 
          class="action-btn remember"
          @click.stop="handleRemember"
        >
          记住了
        </button>
        <button 
          class="action-btn forgot"
          @click.stop="handleForgot"
        >
          没记住
        </button>
      </div>
    </div>
    
    <!-- 无待学习单词状态 -->
    <div v-else class="no-words">
      <h3>太棒了！</h3>
      <p>今天的单词都已经复习完了</p>
      <button @click="refreshWords">重新加载</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { getPendingWords, updateWordStatus, getWords } from '../utils/wordService';

// 状态管理
const pendingWords = ref([]);
const currentIndex = ref(0);
const isFlipped = ref(false);
const completedCount = ref(0);
const totalWords = ref(0);

// 加载待学习单词
const loadPendingWords = () => {
  pendingWords.value = getPendingWords();
  totalWords.value = getWords().length;
  completedCount.value = totalWords.value - pendingWords.value.length;
  currentIndex.value = 0;
  isFlipped.value = false;
};

// 当前单词
const currentWord = computed(() => {
  return pendingWords.value[currentIndex.value] || {};
});

// 翻转卡片
const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};

// 处理记住了
const handleRemember = () => {
  updateWordStatus(currentWord.value.id, true);
  nextCard();
};

// 处理没记住
const handleForgot = () => {
  updateWordStatus(currentWord.value.id, false);
  nextCard();
};

// 下一张卡片
const nextCard = () => {
  currentIndex.value++;
  isFlipped.value = false;
  
  // 如果所有卡片都处理完了，重新加载
  if (currentIndex.value >= pendingWords.value.length) {
    loadPendingWords();
  }
};

// 重新加载单词
const refreshWords = () => {
  loadPendingWords();
};

// 组件挂载时加载单词
onMounted(loadPendingWords);
</script>

<style scoped>
.memory-card-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 16px;
  color: #666;
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.card-container {
  width: 400px;
  height: 250px;
  perspective: 1000px;
  cursor: pointer;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.card-face.front {
  background-color: #ffffff;
  color: #333;
  border: 2px solid #4CAF50;
}

.card-face.back {
  background-color: #f8f9fa;
  color: #333;
  border: 2px solid #2196F3;
  transform: rotateY(180deg);
}

.card-face h3 {
  font-size: 36px;
  margin-bottom: 20px;
}

.card-face .hint {
  color: #888;
  font-size: 14px;
  margin-top: 20px;
}

.card-face .meaning {
  font-size: 24px;
  color: #666;
  margin: 0;
}

.card-actions {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.action-btn {
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.action-btn.remember {
  background-color: #4CAF50;
  color: white;
}

.action-btn.remember:hover {
  background-color: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
}

.action-btn.forgot {
  background-color: #f44336;
  color: white;
}

.action-btn.forgot:hover {
  background-color: #da190b;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(244, 67, 54, 0.3);
}

.no-words {
  text-align: center;
  padding: 60px 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  margin-top: 30px;
}

.no-words h3 {
  color: #4CAF50;
  font-size: 24px;
  margin-bottom: 10px;
}

.no-words p {
  color: #666;
  margin-bottom: 20px;
}

.no-words button {
  padding: 10px 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.no-words button:hover {
  background-color: #1976d2;
}
</style>
