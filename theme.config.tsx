import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <span>Deck/Ops</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Deck/Ops'
    }
  },
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
  ) },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://deckops.bilawal.net' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Deck/Ops'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Making you a better dev'}
        />
      </>
    )
  }

}

export default config

