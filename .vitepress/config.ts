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
        text: '基础笔记',
        collapsed: false,
        items: [
          { text: 'Micrograd', link: '/basis/micrograd' },
          { text: 'XGBoost', link: '/basis/xgboost' },
        ],
      },
      {
        text: '路线图',
        collapsed: false,
        items: [
          { text: '学习路线', link: '/roadmap/roadmap' },
          { text: '12 周执行计划', link: '/roadmap/study_plan' },
          { text: '学习资源', link: '/roadmap/llm_link' },
          { text: 'modern_ai_for_beginners', link: '/roadmap/modern_ai_for_beginners' },
          { text: '如何学习大模型', link: '/roadmap/how_to_learn_llm' },
          { text: '如何学习强化学习', link: '/roadmap/how_to_learn_rl' },
        ],
      },
      {
        text: '专题笔记',
        collapsed: false,
        items: [
          { text: '优化器', link: '/optimizer/' },
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
      message: 'LLM 原理与工程实践的个人学习记录',
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
