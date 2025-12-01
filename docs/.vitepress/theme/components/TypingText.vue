<template>
  <span class="typing-text">
    <span class="static-part">{{ staticText }}</span>
    <span class="typing-part">{{ displayedText }}</span>
    <span class="cursor" :class="{ 'cursor-blink': !isTyping }">|</span>
    <span class="rest-text">{{ restText }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  words: {
    type: Array as () => string[],
    default: () => ['Build', 'Farm', 'Work']
  },
  staticText: {
    type: String,
    default: ''
  },
  restText: {
    type: String,
    default: ' Together!'
  },
  typingSpeed: {
    type: Number,
    default: 150
  },
  deletingSpeed: {
    type: Number,
    default: 100
  },
  pauseDuration: {
    type: Number,
    default: 2000
  }
})

const displayedText = ref('')
const currentWordIndex = ref(0)
const isTyping = ref(true)
const isDeleting = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

const type = () => {
  const currentWord = props.words[currentWordIndex.value]
  
  if (isDeleting.value) {
    // Удаление текста
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1)
      timeoutId = setTimeout(type, props.deletingSpeed)
    } else {
      // Закончили удаление, переходим к следующему слову
      isDeleting.value = false
      currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length
      timeoutId = setTimeout(type, props.typingSpeed)
    }
  } else {
    // Печать текста
    if (displayedText.value.length < currentWord.length) {
      displayedText.value = currentWord.slice(0, displayedText.value.length + 1)
      timeoutId = setTimeout(type, props.typingSpeed)
    } else {
      // Закончили печатать, делаем паузу перед удалением
      isTyping.value = false
      timeoutId = setTimeout(() => {
        isTyping.value = true
        isDeleting.value = true
        type()
      }, props.pauseDuration)
    }
  }
}

onMounted(() => {
  // Начинаем с первого слова
  timeoutId = setTimeout(type, props.typingSpeed)
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<style scoped>
.typing-text {
  display: inline-block;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.static-part,
.typing-part,
.rest-text {
  font-weight: inherit;
  font-size: inherit;
}

.typing-part {
  color: var(--vp-c-brand-1, #10b981);
}

.cursor {
  display: inline-block;
  color: var(--vp-c-brand-1, #10b981);
  font-weight: 400;
  margin-left: 2px;
  animation: none;
}

.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

/* Плавное появление при загрузке */
.typing-text {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

