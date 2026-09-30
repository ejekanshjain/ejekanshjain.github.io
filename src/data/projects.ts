export interface Project {
  name: string
  directory: string
  tags: string[]
  description: string
  openSource: boolean
  repository?: string
  demo?: string
  fork?: boolean
}

// Keep projects in the order you want visitors to see.
export const projects: Project[] = [
  {
    name: 'create-ej-app',
    directory: 'create-ej-app',
    tags: ['npm Package', 'CLI'],
    description:
      'Start a web app, SaaS product, or API with authentication, a database, and deployment foundations.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/create-ej-app'
  },
  {
    name: 'Easy MDM',
    directory: 'easy-mdm',
    tags: ['Web App', 'Self-Hosted'],
    description:
      'Manage your computers and run scripts across macOS, Linux, and Windows from one dashboard.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/easy-mdm'
  },
  {
    name: 'Mailwind',
    directory: 'mailwind',
    tags: ['Desktop App'],
    description:
      'Bring multiple email accounts into one desktop inbox with local search, attachments, and notifications.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/mailwind'
  },
  {
    name: 'The Next QR',
    directory: 'thenextqr',
    tags: ['Web App', 'SaaS'],
    description: 'Create QR codes, share them with your team, and track scans.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/thenextqr',
    demo: 'https://thenextqr.vercel.app'
  },
  {
    name: 'AI SDK Provider for Grok CLI',
    directory: 'ai-sdk-provider-grok-cli',
    tags: ['npm Package', 'Library'],
    description:
      'Use Grok CLI through the AI SDK with streaming responses and tool activity.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/ai-sdk-provider-grok-cli'
  },
  {
    name: 'Financial Planner',
    directory: 'financial-planner',
    tags: ['Web App', 'PWA'],
    description:
      'Plan financial goals, monthly contributions, and withdrawals. Save your plans in your browser.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/financial-planner',
    demo: 'https://financial-planner-teal-delta.vercel.app'
  },
  {
    name: 'Fern',
    directory: 'Fern',
    tags: ['iOS App'],
    description:
      'Chat with an on-device assistant on your iPhone. Search attached documents and explore spreadsheets.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/Fern'
  },
  {
    name: 'Noobmeter',
    directory: 'noobmeter',
    tags: ['Web App'],
    description:
      'Explore AI commit reviews, contributor insights, and repository scorecards.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/noobmeter'
  },
  {
    name: 'Cloud Storage',
    directory: 'cloud-storage',
    tags: ['npm Package', 'Library'],
    description:
      'Upload, retrieve, and delete files across S3, Cloudflare R2, Google Cloud, and Azure.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/cloud-storage'
  },
  {
    name: 'Agent Skills',
    directory: 'skills',
    tags: ['Agent Skills'],
    description:
      'Give coding agents reusable workflows for product videos, browser tasks, and project setup.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/skills'
  },
  {
    name: 'pgsync',
    directory: 'pgsync',
    tags: ['Backend Service', 'Self-Hosted'],
    description:
      'Synchronize selected PostgreSQL records and their relationships into Meilisearch.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/pgsync'
  },
  {
    name: 'Simple Email Validator',
    directory: 'simple-email-validator',
    tags: ['npm Package', 'Library'],
    description:
      'Check email syntax, disposable domains, mail records, and SMTP responses.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/simple-email-validator'
  },
  {
    name: 'Office Hours',
    directory: 'office-hours',
    tags: ['Web App'],
    description:
      'Track office check-ins and check-outs with phone automations, activity history, and CSV exports.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/office-hours'
  },
  {
    name: 'Pocket Settle',
    directory: 'pocket-settle',
    tags: ['Mobile App'],
    description:
      'Create groups, track shared expenses, and record transfers in a mobile expense-sharing prototype.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/pocket-settle'
  },
  {
    name: 'HTML PDF',
    directory: 'html-pdf',
    tags: ['npm Package', 'Library'],
    description: 'Generate PDF files from HTML in your Node.js applications.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/html-pdf'
  },
  {
    name: 'Express Errors',
    directory: 'express-errors',
    tags: ['npm Package', 'Library'],
    description:
      'Return consistent HTTP errors from your Express applications with typed errors and shared middleware.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/express-errors'
  },
  {
    name: 'TypeGraphQL DataLoader',
    directory: 'type-graphql-dataloader',
    tags: ['npm Package', 'Library'],
    description:
      'Batch GraphQL data requests with DataLoader and TypeORM integration. A maintained fork of the original library.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/type-graphql-dataloader',
    fork: true
  },
  {
    name: 'get-npm-i',
    directory: 'get-npm-i',
    tags: ['npm Package', 'CLI'],
    description:
      'Turn your package manifest into npm commands for installing production and development dependencies.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/get-npm-i'
  },
  {
    name: "EJ's VS Code Extension Pack",
    directory: 'EJ-VSCode-Extension-Pack',
    tags: ['VS Code Extension'],
    description:
      'Get a curated set of VS Code extensions for TypeScript, web, Go, and infrastructure development.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/EJ-VSCode-Extension-Pack'
  },
  {
    name: 'VS Code Settings',
    directory: 'vscode-settings',
    tags: ['Configuration'],
    description:
      'Browse my VS Code preferences and extension list for full-stack development.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/vscode-settings'
  },
  {
    name: 'AI Chat Playground',
    directory: 'ai-chat-playground',
    tags: ['Web App'],
    description:
      'Explore a browser-based AI chat interface with saved conversations.',
    openSource: true,
    repository: 'https://github.com/ejekanshjain/ai-chat-playground'
  },
  {
    name: 'Grubbitt',
    directory: 'twilight-halo',
    tags: ['Web App', 'SaaS'],
    description:
      'Manage restaurant menus, table orders, staff, invoices, and payments in one place.',
    openSource: false,
    demo: 'https://www.grubbitt.com'
  }
]
