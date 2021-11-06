import React from 'react'
import Page from '../components/Page'
import Layout from "../components/Layout"
import StoryblokService from '../utils/storyblok-service'

export default class Editor extends React.Component {
  state = {
    story: null
  }
 
  async getInitialStory() {
    const urlParams = new URLSearchParams(window.location.search);
    const path = urlParams.get('path')    
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${path}`, {version: 'draft'})
    return story
  }
 
  async componentDidMount() {
    let story = await this.getInitialStory()
    if(story.content) this.setState({ story })
    setTimeout(() => StoryblokService.initEditor(this), 200)
  }
 
  render() {
    if(this.state.story === null) {
      return (<div>Loading</div>)
    }
    return (
       <Layout location={this.props.location} isEditor={true}>
        <Page blok={this.state.story.content} />
      </Layout>
    )
  }
}