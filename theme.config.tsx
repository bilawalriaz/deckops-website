import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Deck/Ops</span>,

  project: {
    link: 'https://github.com/bilawalriaz',
  },
  chat: {
    link: 'https://discord.com/bilawalriaz',
  },
  docsRepositoryBase: 'https://deckops.dev',
  editLink: {component: null},
  feedback: {content: null},

  banner: {
    key: '2.0-release',
    text: (
      <a href="https://news.hyperflash.uk" target="_blank">
        🎉 Visit QuickNews for unbiased, accurate news summaries. Read more →
      </a>
    )
  },

  footer: {text:(
    <span>
       {new Date().getFullYear()} ©{' '}
      <a href="https://bilawal.net" target="_blank">
        Bilawal Riaz
      </a>
      
    </span>
  ) }

}

export default config

