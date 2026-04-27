import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/computer-literacy-A/',
  title: 'コンピュータリテラシーA',
  description: 'PCの基本操作・Word文書作成・Excelスプレッドシート編集',
  ignoreDeadLinks: [/\.docx$/],

  locales: {
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '授業一覧', link: '/ja/lessons/lesson02' }
        ],
        sidebar: {
          '/ja/lessons/': [
            {
              text: '授業資料（第2〜6回）',
              items: [
                { text: '第2回 コンピュータの基礎演習', link: '/ja/lessons/lesson02' },
                { text: '第3回 Word文書の書式設定', link: '/ja/lessons/lesson03' },
                { text: '第4回 Word応用', link: '/ja/lessons/lesson04' },
                { text: '第5回 Excel基礎', link: '/ja/lessons/lesson05' },
                { text: '第6回 Excel応用', link: '/ja/lessons/lesson06' }
              ]
            }
          ]
        },
        outline: { label: '目次' },
        docFooter: { prev: '前のページ', next: '次のページ' }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Lessons', link: '/en/lessons/lesson02' }
        ],
        sidebar: {
          '/en/lessons/': [
            {
              text: 'Lessons (Sessions 2–6)',
              items: [
                { text: 'Lesson 2: Computer Basics', link: '/en/lessons/lesson02' },
                { text: 'Lesson 3: Word Document Formatting', link: '/en/lessons/lesson03' },
                { text: 'Lesson 4: Word Advanced', link: '/en/lessons/lesson04' },
                { text: 'Lesson 5: Excel Basics', link: '/en/lessons/lesson05' },
                { text: 'Lesson 6: Excel Advanced', link: '/en/lessons/lesson06' }
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/computer-literacy-A/favicon.png' }]
  ],

  themeConfig: {
    logo: '/CLAlogo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
