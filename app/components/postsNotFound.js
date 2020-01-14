import React from 'react';
import './postsNotFound.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFrown} from '@fortawesome/free-solid-svg-icons';

const PostsNotFound = (props) => {

  return (
    <main className="posts-not-found">
      <div className="container">
        <h1><FontAwesomeIcon icon={faFrown}/>404 Posts not found.</h1>
        <h2>I didn't wrote any post yet, but i will.</h2>
        <ul>
        </ul>
      </div>
    </main>
  )
}


export default PostsNotFound;
