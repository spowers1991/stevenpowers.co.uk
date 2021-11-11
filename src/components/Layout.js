import React from "react"
import Header from './layout/header'
import Footer from './layout/footer'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import StoryblokService from '../utils/storyblok-service'

export default function Layout({ children, location, isEditor }){
  const { settings } = useStaticQuery(graphql`
  query Settings {
    settings: allStoryblokEntry(filter: {field_component: {eq: "settings"}}) {
      edges {
        node {
          name
          full_slug
          content
        }
      }
    }
  }
  `)
  //let content = JSON.parse(settings.edges[0].node.content)
  //let parsedSetting = Object.assign({}, content, {content: content})

  return (
    <div>
      { isEditor ? 
        (<>
        <Helmet
            script={[
              {"src": `//app.storyblok.com/f/storyblok-latest.js?t=${StoryblokService.token}`,
              "type": "text/javascript"}
            ]}
        />
        <Helmet
            script={[
              {
              "innerHTML": `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`,
              "type": "text/javascript"
              }
            ]}
        />
        </>) : null
      }
      <Helmet>
        <script src="https://kit.fontawesome.com/b1c70f5e3d.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header></Header>
      <main className="px-5">
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}