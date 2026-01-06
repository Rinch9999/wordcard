// 单词数据结构和本地存储服务

// 初始化示例单词
const initialWords = [

  // 态度与评价类
  { id: 6, word: 'positive', meaning: '积极的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 7, word: 'negative', meaning: '消极的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 8, word: 'critical', meaning: '批判的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 9, word: 'optimistic', meaning: '乐观的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 10, word: 'pessimistic', meaning: '悲观的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 11, word: 'subjective', meaning: '主观的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 12, word: 'objective', meaning: '客观的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 13, word: 'favorable', meaning: '有利的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 14, word: 'unfavorable', meaning: '不利的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 15, word: 'controversial', meaning: '有争议的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 程度与范围类
  { id: 16, word: 'significant', meaning: '重要的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 17, word: 'minor', meaning: '次要的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 18, word: 'major', meaning: '主要的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 19, word: 'extensive', meaning: '广泛的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 20, word: 'limited', meaning: '有限的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 21, word: 'sufficient', meaning: '充足的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 22, word: 'insufficient', meaning: '不足的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 23, word: 'excessive', meaning: '过度的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 24, word: 'moderate', meaning: '适度的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 25, word: 'overwhelming', meaning: '压倒性的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 社会与文化类
  { id: 26, word: 'traditional', meaning: '传统的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 27, word: 'modern', meaning: '现代的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 28, word: 'cultural', meaning: '文化的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 29, word: 'social', meaning: '社会的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 30, word: 'global', meaning: '全球的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 31, word: 'local', meaning: '本地的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 32, word: 'diverse', meaning: '多样的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 33, word: 'homogeneous', meaning: '同质的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 34, word: 'conservative', meaning: '保守的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 35, word: 'progressive', meaning: '进步的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 心理与行为类
  { id: 36, word: 'emotional', meaning: '情感的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 37, word: 'rational', meaning: '理性的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 38, word: 'conscious', meaning: '有意识的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 39, word: 'unconscious', meaning: '无意识的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 40, word: 'motivated', meaning: '有动力的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 41, word: 'passive', meaning: '被动的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 42, word: 'aggressive', meaning: '侵略性的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 43, word: 'sensitive', meaning: '敏感的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 44, word: 'resistant', meaning: '抵抗的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 45, word: 'adaptable', meaning: '适应力强的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 经济与科技类
  { id: 46, word: 'economic', meaning: '经济的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 47, word: 'financial', meaning: '金融的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 48, word: 'commercial', meaning: '商业的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 49, word: 'technological', meaning: '技术的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 50, word: 'digital', meaning: '数字的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 51, word: 'innovative', meaning: '创新的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 52, word: 'efficient', meaning: '高效的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 53, word: 'competitive', meaning: '竞争的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 54, word: 'sustainable', meaning: '可持续的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 55, word: 'profitable', meaning: '盈利的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 环境与自然类
  { id: 56, word: 'environmental', meaning: '环境的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 57, word: 'natural', meaning: '自然的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 58, word: 'polluted', meaning: '污染的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 59, word: 'renewable', meaning: '可再生的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 60, word: 'ecological', meaning: '生态的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 61, word: 'severe', meaning: '严重的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 62, word: 'fragile', meaning: '脆弱的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 63, word: 'hazardous', meaning: '危险的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 64, word: 'climatic', meaning: '气候的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 65, word: 'urban', meaning: '城市的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 教育与学术类
  { id: 66, word: 'academic', meaning: '学术的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 67, word: 'educational', meaning: '教育的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 68, word: 'intellectual', meaning: '智力的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 69, word: 'theoretical', meaning: '理论的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 70, word: 'practical', meaning: '实践的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 71, word: 'comprehensive', meaning: '全面的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 72, word: 'specialized', meaning: '专业的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 73, word: 'challenging', meaning: '有挑战性的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 74, word: 'stimulating', meaning: '激励的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 75, word: 'rigorous', meaning: '严格的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 描述事物特征类
  { id: 76, word: 'complex', meaning: '复杂的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 77, word: 'simple', meaning: '简单的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 78, word: 'abstract', meaning: '抽象的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 79, word: 'concrete', meaning: '具体的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 80, word: 'visible', meaning: '可见的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 81, word: 'invisible', meaning: '不可见的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 82, word: 'permanent', meaning: '永久的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 83, word: 'temporary', meaning: '暂时的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 84, word: 'stable', meaning: '稳定的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 85, word: 'unstable', meaning: '不稳定的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 健康与医学类
  { id: 86, word: 'physical', meaning: '身体的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 87, word: 'mental', meaning: '心理的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 88, word: 'healthy', meaning: '健康的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 89, word: 'unhealthy', meaning: '不健康的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 90, word: 'chronic', meaning: '慢性的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 91, word: 'infectious', meaning: '传染的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 92, word: 'medical', meaning: '医学的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 93, word: 'nutritional', meaning: '营养的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 94, word: 'genetic', meaning: '基因的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 95, word: 'preventive', meaning: '预防性的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  // 其他高频词
  { id: 96, word: 'available', meaning: '可获得的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 97, word: 'unavailable', meaning: '不可获得的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 98, word: 'reliable', meaning: '可靠的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 99, word: 'unreliable', meaning: '不可靠的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 100, word: 'potential', meaning: '潜在的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 101, word: 'actual', meaning: '实际的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 102, word: 'explicit', meaning: '明确的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 103, word: 'implicit', meaning: '隐含的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 104, word: 'inevitable', meaning: '不可避免的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' },
  { id: 105, word: 'remarkable', meaning: '显著的', nextReview: new Date().toISOString(), interval: 1, easiness: 2.5, status: 'new' }
];

// 获取本地存储的单词
export function getWords() {
  const words = localStorage.getItem('words');
  if (!words) {
    localStorage.setItem('words', JSON.stringify(initialWords));
    return initialWords;
  }
  return JSON.parse(words);
}

// 保存单词到本地存储
export function saveWords(words) {
  localStorage.setItem('words', JSON.stringify(words));
}

// 添加新单词
export function addWord(word, meaning) {
  const words = getWords();
  const newWord = {
    id: Date.now(),
    word,
    meaning,
    nextReview: new Date().toISOString(),
    interval: 1,
    easiness: 2.5,
    status: 'new'
  };
  words.push(newWord);
  saveWords(words);
  return newWord;
}

// 删除单词
export function deleteWord(id) {
  const words = getWords();
  const filteredWords = words.filter(word => word.id !== id);
  saveWords(filteredWords);
  return filteredWords;
}

// 获取待学习的单词
export function getPendingWords() {
  const words = getWords();
  const now = new Date().toISOString();
  return words.filter(word => word.nextReview <= now);
}

// 更新单词学习状态（简化的间隔重复算法）
export function updateWordStatus(id, remembered) {
  const words = getWords();
  const wordIndex = words.findIndex(word => word.id === id);
  if (wordIndex === -1) return words;

  const word = words[wordIndex];
  const now = new Date();
  
  if (remembered) {
    // 记住了，增加间隔
    word.interval = Math.round(word.interval * word.easiness);
    word.status = 'reviewed';
  } else {
    // 没记住，重置间隔
    word.interval = 1;
    word.status = 'failed';
  }

  // 设置下次复习时间
  const nextReview = new Date(now.getTime() + word.interval * 24 * 60 * 60 * 1000);
  word.nextReview = nextReview.toISOString();
  
  words[wordIndex] = word;
  saveWords(words);
  return words;
}

// 获取学习进度
export function getProgress() {
  const words = getWords();
  const total = words.length;
  const reviewed = words.filter(word => word.status === 'reviewed').length;
  const pending = getPendingWords().length;
  
  return {
    total,
    reviewed,
    pending,
    percentage: total > 0 ? Math.round((reviewed / total) * 100) : 0
  };
}
