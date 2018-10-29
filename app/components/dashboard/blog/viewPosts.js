import React from 'react';
import {Link} from 'react-router-dom';
import './viewPosts.less';

const ViewPosts = (props) => {
	const {match: {params: {category}}} = props;
	const {posts} = props;
	return (
		<section className="blog-view__posts">
		 <CreatePostBanner category={category}/>
		 <div className="flex-row">
		  {
		  	posts.map((post, key)=> {
		  		return (
		  			<div key={key} className="flex-col">
		  			 <div className="meta">
		  			  <h2 className="meta-meta__title">{post.title}</h2>
  					  <p className="meta-meta__description">{post.description}</p>
		  			  <img className="meta-meta__image" src={post.images.card.url} alt={post.images.card.alt}/>
		  			 </div>
		  			 <div className="blog-post__actions">
		  			  <Link to={`/dashboard/blog/update-post/${post._id}`} className="btn btn-success">Update</Link>
		  			  <button type="button" className="btn btn-danger" onClick={() => props.deletePost(post._id)}>Delete</button>
		  			 </div>
		  			</div>
		  		)
		  	})
		  }
		 </div>
		</section>
	)
}

const CreatePostBanner = (props) => {

	return (
		<div className="blog-create__post__banner">
		  <Link className="blog-create__post__button" to={`/dashboard/blog/create-post`}>Create new Post.</Link>
		 </div>
	)
}

export default ViewPosts;