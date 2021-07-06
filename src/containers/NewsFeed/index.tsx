import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import * as postsDuck from '../../ducks/Posts'

//Components
import Post from '../../components/Post'
import Container from '../../components/Container'

interface INewsFeedProps {
  data: postsDuck.IDataPosts
  fetchPosts: () => void 
  fetched: boolean
  fetching: boolean
  like: (a: string) => void
  share: (a: string) => void
}

function NewsFeed ({ like, share, data, fetchPosts, fetched, ...props}: INewsFeedProps) {

  if(!fetched) {
    fetchPosts();
  }

  const handleLike = (id: string) => () => {
    like(id)
  }
  const handleShare = (id: string) => () => {
    share(id)
  }

  return (
    <Container>
      {Object.keys(data).map( x => {
        const post = data[x];
        return (
          <div key={x} style={{ margin: '0 auto' }}>
            <Post 
              like={handleLike(x)} 
              share={handleShare(x)} 
              image={post.imageURL} 
            />
          </div>
        )
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