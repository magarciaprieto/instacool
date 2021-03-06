import React from "react";
import Button from "../../components/Button";
import ProfileImg from "../../components/ProfileImg";
import Card from "../../components/Card";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as postsDuck from '../../ducks/Posts'
import services from "../../services";
import { chunk } from 'lodash';
import { submit } from "redux-form";


const { auth } = services

const styles = {
  container: {
    padding: '15px',
  },
  img: {
    width: '250px',
    height: '200px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  }
}

interface IProfileProps {
  data: any                         //postsDuck.IPost[][]. I put "any", to be able to execute "yarn start"
  fetchPosts: () => void 
  fetched: boolean
  fetching: boolean
  like: (a: string) => void
  share: (a: string) => void
  submitProfileImage: () => void
  handleProfileImageSubmit: (a: { file: File }) => void
}
function Profile ({data, submitProfileImage, handleProfileImageSubmit, fetched, fetchPosts, ...props} : IProfileProps) {

  if(!fetched) {
    fetchPosts();
  }

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <ProfileImg onSubmit={handleProfileImageSubmit} submitProfileImage={submitProfileImage}/ >
        <Button> Agregar </Button>
      </div>  
      {data.map( (x: any, i: any) => 
        <div key={i} style={styles.row}>
          {x.map( (y: any) => <Card key={y.imageURL}><img style={styles.img} src={y.imageURL} alt=''/></Card>)}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { Posts: { data, fetched, fetching } } = state
  const loading = fetching || !fetched
  const filtered = Object.keys(data).reduce( (acc: any, el) => {
    if (data[el].userId !== auth.currentUser?.uid) {
      return acc
    }
    return acc.concat(data[el])
    }, [] as postsDuck.IPost[])

  return {
    data: chunk(filtered, 3),
    fetched,
    loading,
  } 
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators({
  ...postsDuck,
  submitProfileImage: () => submit('profileImg'),
 }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)