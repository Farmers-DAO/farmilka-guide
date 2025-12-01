import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import TypingText from './components/TypingText.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('TypingText', TypingText)
  }
}

