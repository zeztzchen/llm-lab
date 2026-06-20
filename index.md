---
layout: home

hero:
  name: "llm-lab"
  text: "从数学基础到 LLM 工程实践"
  tagline: 个人学习笔记 · 用可运行实验连接公式、源码和模型训练
  actions:
    - theme: brand
      text: 开始阅读
      link: /basis/micrograd
    - theme: alt
      text: 学习路线
      link: /roadmap/roadmap

features:
  - icon: 🧠
    title: Micrograd 笔记
    details: 从 Karpathy micrograd 出发，拆解自动求导、反向传播与训练闭环。
    link: /basis/micrograd
    linkText: 阅读笔记

  - icon: 🗺️
    title: LLM 学习路线图
    details: 按基础准备、Transformer、后训练和应用方向组织学习路径。
    link: /roadmap/roadmap
    linkText: 查看路线

  - icon: 📅
    title: 12 周执行计划
    details: 以周为单位拆分任务，强调代码、图示和短总结的持续产出。
    link: /roadmap/study_plan
    linkText: 查看计划

  - icon: 📚
    title: 精选学习资源
    details: 汇总 Karpathy、CS336、d2l.ai 等高密度学习材料。
    link: /roadmap/llm_link
    linkText: 查看资源
---

## 学习主线

这个站点记录 LLM 学习过程中的关键笔记和实验。内容会优先保持可复现：公式推导配合 notebook，概念总结配合源码或最小实验。

| 方向 | 重点 | 入口 |
| --- | --- | --- |
| 基础实现 | 自动求导、树模型、训练闭环 | [Micrograd](/basis/micrograd) |
| 学习规划 | 阶段目标、资源筛选、周计划 | [路线图](/roadmap/roadmap) |
| 优化方法 | 学习率调度、AdaGrad、RMSProp、Adam | [优化器](/optimizer/) |
