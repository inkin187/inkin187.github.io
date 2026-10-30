// 所有文字、图片和视频资源均集中在此处，后续替换时无需改动页面组件。

export const siteContent = {
  navigation: [
    { label: '首页', href: '#home' },
    { label: '精选项目', href: '#projects' },
    { label: '个人经历', href: '#experience' },
    { label: '能力优势', href: '#strengths' },
    { label: '联系我', href: '#contact' },
  ],
  hero: {
    eyebrow: '[待我替换] AI PRODUCT ENGINEER / AI AGENT ENGINEER',
    title: '[待我替换] 一句清晰、克制的个人身份 Slogan',
    description:
      '[待我替换] 用 1–2 句话说明你的方向、关注的问题与工作方式。',
    // 【待我替换】替换为可公开访问的 MP4 视频地址；保留空或加载失败时会自动显示静态背景。
    videoUrl: 'https://example.com/replace-me-hero-video.mp4',
  },
  projects: [
    {
      id: 'project-01',
      number: '01',
      title: '[待我替换] 项目名称',
      description: '[待我替换] 用一行说明项目所解决的问题或核心价值。',
      tags: ['[待我替换] 标签', '[待我替换] 标签'],
      // 【待我替换】替换为项目封面图链接或本地 public 目录图片路径。
      imageUrl:
        'https://placehold.co/1600x1040/11151c/7d8798?text=%5B%E5%BE%85%E6%88%91%E6%9B%BF%E6%8D%A2%5D+PROJECT+IMAGE+01',
    },
    {
      id: 'project-02',
      number: '02',
      title: '[待我替换] 项目名称',
      description: '[待我替换] 用一行说明项目所解决的问题或核心价值。',
      tags: ['[待我替换] 标签', '[待我替换] 标签'],
      imageUrl:
        'https://placehold.co/1600x1040/12161d/7d8798?text=%5B%E5%BE%85%E6%88%91%E6%9B%BF%E6%8D%A2%5D+PROJECT+IMAGE+02',
    },
    {
      id: 'project-03',
      number: '03',
      title: '[待我替换] 项目名称',
      description: '[待我替换] 用一行说明项目所解决的问题或核心价值。',
      tags: ['[待我替换] 标签', '[待我替换] 标签'],
      imageUrl:
        'https://placehold.co/1600x1040/11151c/7d8798?text=%5B%E5%BE%85%E6%88%91%E6%9B%BF%E6%8D%A2%5D+PROJECT+IMAGE+03',
    },
    {
      id: 'project-04',
      number: '04',
      title: '[待我替换] 项目名称',
      description: '[待我替换] 用一行说明项目所解决的问题或核心价值。',
      tags: ['[待我替换] 标签', '[待我替换] 标签'],
      imageUrl:
        'https://placehold.co/1600x1040/12161d/7d8798?text=%5B%E5%BE%85%E6%88%91%E6%9B%BF%E6%8D%A2%5D+PROJECT+IMAGE+04',
    },
  ],
  experience: {
    // 【待我替换】替换为头像或人像图链接。
    portraitUrl:
      'https://placehold.co/960x1200/141920/7d8798?text=%5B%E5%BE%85%E6%88%91%E6%9B%BF%E6%8D%A2%5D+PORTRAIT',
    introTitle: '[待我替换] 个人简介标题',
    intro:
      '[待我替换] 在这里填写个人经历、专业方向与工作偏好。建议控制在 3–5 行，让读者快速建立对你的认识。',
    metrics: [
      { value: '[待我替换]', label: '项目成果数据 01' },
      { value: '[待我替换]', label: '项目成果数据 02' },
      { value: '[待我替换]', label: '项目成果数据 03' },
    ],
    contact: [
      { label: '邮箱', value: '[待我替换] your@email.com' },
      { label: '所在地', value: '[待我替换] City, Country' },
      { label: '状态', value: '[待我替换] Available for opportunities' },
    ],
  },
  strengths: [
    {
      index: '01',
      title: '[待我替换] 能力标签',
      description: '[待我替换] 用两到三句话描述这项能力、方法论或擅长解决的问题。',
    },
    {
      index: '02',
      title: '[待我替换] 能力标签',
      description: '[待我替换] 用两到三句话描述这项能力、方法论或擅长解决的问题。',
    },
    {
      index: '03',
      title: '[待我替换] 能力标签',
      description: '[待我替换] 用两到三句话描述这项能力、方法论或擅长解决的问题。',
    },
    {
      index: '04',
      title: '[待我替换] 能力标签',
      description: '[待我替换] 用两到三句话描述这项能力、方法论或擅长解决的问题。',
    },
  ],
  contact: {
    preface: '[待我替换] CONTACT',
    title: '[待我替换] 让下一次对话从这里开始。',
    email: '[待我替换] your@email.com',
    socialLinks: [
      { label: '[待我替换] LinkedIn', href: '#' },
      { label: '[待我替换] GitHub', href: '#' },
      { label: '[待我替换] 其他链接', href: '#' },
    ],
  },
};
