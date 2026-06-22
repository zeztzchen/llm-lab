import DefaultTheme from 'vitepress/theme'
import HomeLanding from './HomeLanding.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeLanding', HomeLanding)
  },
}
