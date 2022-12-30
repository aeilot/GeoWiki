import { useRouter } from "next/router"
import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/aeilot/GeoWiki/tree/main',
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()
    return <>
      <meta property="og:url" content={`https://chemwiki.mrwillcom.com${asPath}`} />
      <meta property="og:title" content={title + ' · ChemWiki'} />
      <meta property="og:description" content={frontMatter.description || '中学地理知识库'} />
    </>
  },
  logo: <span>GeoWiki</span>,
  project: {
    link: 'https://github.com/aeilot/GeoWiki',
  },
  search: {
    emptyResult: <div className="nx-mt-4 nx-flex nx-justify-center nx-items-center nx-text-gray-500 nx-font-semibold nx-text-s nx-select-none">没有结果</div>,
    loading: '加载中...',
    placeholder: '搜索',
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  toc: {
    title: null,
  },
  editLink: {
    text: '编辑本页面 ↗',
  },
  feedback: {
    content: '有问题？前往反馈 ↗',
  },
  footer: {
    text: <span>{new Date().getFullYear() === 2022 ? '2022' : '2022 - ' + new Date().getFullYear()} · By all <a href="https://github.com/aeilot/GeoWiki" target="_blank">GeoWiki</a> contributors with ❤️.</span>,
  },

  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s · GeoWiki'
      }
    } else {
      return {
        titleTemplate: 'GeoWiki'
      }
    }
  },
}
