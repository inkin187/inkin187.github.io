// 所有文字、图片和视频资源均集中在此处，后续替换时无需改动页面组件。

export const siteContent = {
  navigation: [
    { label: '首页', href: '#home' },
    { label: '个人简介', href: '#intro' },
    { label: '精选项目', href: '#projects' },
    { label: '个人经历', href: '#experience' },
    { label: '能力优势', href: '#strengths' },
  ],
  hero: {
    eyebrow: 'AI PRODUCT MANAGER',
    title: 'SHAO SHUAIBO',
    // 首页本地背景视频；视频加载失败或自动播放受限时会自动显示静态背景。
    videoUrl: '/videos/hero-background.mp4',
  },
  introduction: {
    eyebrow: 'AI DESIGNER',
    title: 'DESIGNING',
    accentTitle: 'AI EXPERIENCES.',
    statement: '【待填写】在这里补充一段简洁的个人介绍，说明你的专业方向、思考方式与希望解决的问题。',
    portraitUrl: '/images/shao-shuaibo-id.png',
    name: '邵帅博',
    role: 'AI DESIGNER',
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
    // 【待填写】替换为头像或人像图链接。
    portraitUrl:
      'https://placehold.co/960x1200/141920/7d8798?text=%E3%80%90%E5%BE%85%E5%A1%AB%E5%86%99%E3%80%91%E4%B8%AA%E4%BA%BA%E5%A4%B4%E5%83%8F',
    introTitle: '【待填写】个人简介标题',
    intro:
      '【待填写】在这里填写个人经历、专业方向与工作偏好。建议控制在 3–5 行，让读者快速建立对你的认识。',
    metrics: [
      { value: '【待填写】', label: '个人信息 01' },
      { value: '【待填写】', label: '个人信息 02' },
      { value: '【待填写】', label: '个人信息 03' },
    ],
    contact: [
      { label: '【待填写】', value: '基本信息 01' },
      { label: '【待填写】', value: '基本信息 02' },
      { label: '【待填写】', value: '基本信息 03' },
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
    preface: '联系 / 邵帅博',
    title: '期待与您交流。',
    email: '920930452@qq.com',
    emailHref: 'mailto:920930452@qq.com',
    phone: '188 1316 8768',
    phoneHref: 'tel:+8618813168768',
    socialLinks: [
      { label: '[待我替换] LinkedIn', href: '#' },
      { label: '[待我替换] GitHub', href: '#' },
      { label: '[待我替换] 其他链接', href: '#' },
    ],
  },
};
