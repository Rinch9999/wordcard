<template>
  <div class="progress-tracker">
    <h2>学习进度</h2>
    
    <div class="progress-overview">
      <!-- 总览卡片 -->
      <div class="stat-card">
        <div class="stat-icon total">📚</div>
        <div class="stat-info">
          <div class="stat-value">{{ progress.total }}</div>
          <div class="stat-label">总单词数</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon reviewed">✅</div>
        <div class="stat-info">
          <div class="stat-value">{{ progress.reviewed }}</div>
          <div class="stat-label">已复习</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon pending">⏳</div>
        <div class="stat-info">
          <div class="stat-value">{{ progress.pending }}</div>
          <div class="stat-label">待复习</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon percentage">📊</div>
        <div class="stat-info">
          <div class="stat-value">{{ progress.percentage }}%</div>
          <div class="stat-label">完成率</div>
        </div>
      </div>
    </div>
    
    <!-- 进度条 -->
    <div class="progress-bar-container">
      <div class="progress-label">
        <span>总体进度</span>
        <span>{{ progress.percentage }}%</span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill"
          :style="{ width: `${progress.percentage}%` }"
        ></div>
      </div>
    </div>
    
    <!-- 学习建议 -->
    <div class="learning-tips">
      <h3>学习建议</h3>
      <ul>
        <li v-if="progress.pending > 5">建议每天复习5-10个单词，保持学习习惯</li>
        <li v-else-if="progress.pending > 0">今天还有{{ progress.pending }}个单词需要复习</li>
        <li v-else>今天的任务已完成，明天继续加油！</li>
        <li>定期回顾已掌握的单词，加深记忆</li>
        <li>结合语境使用单词，提高应用能力</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { getProgress } from '../utils/wordService';

const progress = ref(getProgress());

// 刷新进度
const refreshProgress = () => {
  progress.value = getProgress();
};

// 组件挂载时加载进度
onMounted(() => {
  refreshProgress();
  // 每30秒自动刷新一次进度
  const intervalId = setInterval(refreshProgress, 30000);
  
  // 组件卸载时清除定时器
  onUnmounted(() => {
    clearInterval(intervalId);
  });
});
</script>

<style scoped>
.progress-tracker {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.progress-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 36px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.stat-icon.total {
  background-color: #e3f2fd;
}

.stat-icon.reviewed {
  background-color: #e8f5e8;
}

.stat-icon.pending {
  background-color: #fff3e0;
}

.stat-icon.percentage {
  background-color: #f3e5f5;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.progress-bar-container {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50 0%, #45a049 100%);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.learning-tips {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.learning-tips h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 18px;
}

.learning-tips ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.learning-tips li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: #666;
  line-height: 1.5;
}

.learning-tips li::before {
  content: "💡";
  position: absolute;
  left: 0;
  top: 8px;
}
</style>
