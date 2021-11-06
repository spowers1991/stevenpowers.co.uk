import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import StoryblokService from '../utils/storyblok-service'
 
export default class PageTemplate extends React.Component {
  state = {
    story: {
       content: this.props.data.story ? JSON.parse(this.props.data.story.content) : {}
    }
  }
 
  async getInitialStory() {
    StoryblokService.setQuery(this.props.location.search)
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.data.story.full_slug}`)
    return story
  }
 
  async componentDidMount() {
    let story = await this.getInitialStory()
    if(story.content) this.setState({ story })
    setTimeout(() => StoryblokService.initEditor(this), 200)
  }
 
  render() {
    return (
       <Layout location={this.props.location}>
        <Page blok={this.state.story.content} />
      </Layout>
    )
  }
}

 
export const query = graphql`
  query storyBySlug($fullSlug: String!) {
    story: storyblokEntry(full_slug: { eq: $fullSlug }) {
      name
      content
      full_slug
      uuid
    }
  }
`