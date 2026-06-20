import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  base: '/llm-lab/',
  title: 'llm-lab',
  description: 'LLM 原理与工程实践的个人学习记录',
  lang: 'zh-CN',
  srcExclude: ['README.md', 'AGENTS.md'],
  lastUpdated: true,

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    },
  },

  themeConfig: {
    nav: [],

    sidebar: [
      {
        text: 'Basics',
        collapsed: false,
        items: [
          { text: 'Micrograd', link: '/basis/micrograd' },
          { text: 'XGBoost', link: '/basis/xgboost' },
        ],
      },
      {
        text: 'Roadmap',
        collapsed: false,
        items: [
          { text: 'Learning Roadmap', link: '/roadmap/roadmap' },
          { text: '12-Week Plan', link: '/roadmap/study_plan' },
          { text: 'Resources', link: '/roadmap/llm_link' },
          { text: 'Modern AI for Beginners', link: '/roadmap/modern_ai_for_beginners' },
          { text: 'How to Learn LLM', link: '/roadmap/how_to_learn_llm' },
          { text: 'How to Learn RL', link: '/roadmap/how_to_learn_rl' },
        ],
      },
      {
        text: 'Topics',
        collapsed: false,
        items: [
          { text: 'Optimizers', link: '/optimizer/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dundunkirk/llm-lab' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Personal notes on LLM fundamentals and engineering practice',
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
})
