import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import * as postsDuck from '../../ducks/Posts'

//Components
import Post from '../../components/Post'
import Container from '../../components/Container'

interface INewsFeedProps {
  fetchPosts: () => void 
  fetched: boolean
  fetching: boolean
}

function NewsFeed ({ data, fetchPosts, fetched, ...props}: INewsFeedProps) {

  console.log({...props});
  if(!fetched) {
    fetchPosts();
  }

  return (
    <Container>
      {Object.keys(data).map( x => {
        const post = data[x];
        return <div style={{ margin: '0 auto' }}><Post image='http://placekitten.com/300/200' /></div>
      })}
    </Container>
  )
}

const mapStateToProps = (state: any) => {
  const { Posts: { data, fetched, fetching } } = state
  const loading = fetching || !fetched
  return {
    data,
    fetched,
    loading,
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(postsDuck, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)