import DefaultTheme from 'vitepress/theme'
import 'luna-shader-toy-player/css'
import '../share/index.css'
import './index.css'
import Icon from './components/Icon.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
  },
}
