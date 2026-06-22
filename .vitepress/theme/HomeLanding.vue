<template>
  <section class="lab-landing">
    <p class="lab-kicker">FIG_000 · learning log · open source notes</p>

    <div class="lab-hero">
      <h1>LLM Lab<br><span>from Scratch</span></h1>
      <p class="lab-lede">
        Build a working understanding of LLMs from math, notebooks, source reading,
        and small reproducible experiments.
      </p>
      <p class="lab-note">
        Personal notes for surviving the long path from calculus and probability to
        training loops, optimizers, transformers, and post-training.
      </p>

      <div class="lab-actions">
        <a class="lab-button lab-button-primary" href="/llm-lab/roadmap/roadmap">Start Roadmap</a>
        <a class="lab-button" href="/llm-lab/basis/micrograd">Read Notes</a>
      </div>
    </div>

    <section class="lab-section">
      <h2>How this works</h2>
      <div class="lab-copy">
        <p>
          The notes follow one loop: understand the problem, derive the minimum math,
          write a runnable notebook, then keep the artifact. The goal is not to collect
          links, but to make each idea executable.
        </p>
        <p>
          Web pages are kept in the repository root. Deeper experiments stay as
          notebooks under topic folders, with concise Markdown pages used as the map.
        </p>
      </div>
    </section>

    <section class="lab-stats" aria-label="Current progress">
      <div>
        <span class="lab-stat-number">3</span>
        <span class="lab-stat-label">Tracks</span>
      </div>
      <div>
        <span class="lab-stat-number">12</span>
        <span class="lab-stat-label">Week Plan</span>
      </div>
      <div>
        <span class="lab-stat-number">Python</span>
        <span class="lab-stat-label">Primary Runtime</span>
      </div>
      <div>
        <span class="lab-stat-number">Notebook</span>
        <span class="lab-stat-label">Artifact First</span>
      </div>
    </section>

    <section class="lab-section">
      <div class="lab-section-head">
        <p class="lab-kicker">Curriculum · expandable by topic</p>
        <h2>Current map</h2>
      </div>

      <div class="lab-catalog">
        <a class="lab-card" href="/llm-lab/basis/micrograd">
          <span>Phase 01</span>
          <strong>Autograd Basics</strong>
          <em>Micrograd, gradients, training loop</em>
        </a>
        <a class="lab-card" href="/llm-lab/basis/xgboost">
          <span>Phase 02</span>
          <strong>Classical ML</strong>
          <em>XGBoost and second-order optimization intuition</em>
        </a>
        <a class="lab-card" href="/llm-lab/optimizer/">
          <span>Phase 03</span>
          <strong>Optimization</strong>
          <em>Schedulers, AdaGrad, RMSProp, Adam, AdamW</em>
        </a>
        <a class="lab-card" href="/llm-lab/roadmap/study_plan">
          <span>Plan</span>
          <strong>12-Week Execution</strong>
          <em>One runnable result, one figure, one summary each week</em>
        </a>
      </div>
    </section>
  </section>
</template>
