import React, {Component} from 'react';
import CodeBlock from './codeblockComponent';
import './blogPostComponent.less';

import {Link} from 'react-router-dom';
import Markdown from 'react-markdown';
import {formatDate} from '../utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class BlogPostView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nextPost: null,
			previousPost: null
		}

		this.findNextAndPrevPosts = this.findNextAndPrevPosts.bind(this);

	}
	componentDidMount() {
		this.findNextAndPrevPosts();

	}
	findNextAndPrevPosts() {
		const {match: {params: {slug}}} = this.props;
		const idx = this.props.posts.findIndex((obj) => obj.slug === slug);

		const nextPostIdx = idx + 1;
		const previousPostIdx = idx - 1;

		if(nextPostIdx !== this.props.posts.length) {
			this.setState({
				nextPost: this.props.posts[nextPostIdx]
			})
		}

		if(previousPostIdx !== -1) {
			this.setState({
				previousPost: this.props.posts[previousPostIdx]
			})
		}

	}

	isPrevDisabled() {

		return this.state.previousPost === null;
	}

	isNextDisabled() {
		return this.state.nextPost === null;
	}

	render() {
		const {post, match: {params}} = this.props;

		return (
			<main className="blog_post">
			 <header className="blog_post-header">
				<div className="blog_post__header-info">
	 		    <h2 className="blog_post-title">{post.title}</h2>
	 		    <span className="blog_post-date">Posted on {formatDate(post.createdAt)}</span>
				</div>
			 </header>
			 <article className="blog_post-content">
			  <Markdown className="result-pane" source={post.body} escapeHtml={false} renderers={{code: CodeBlock}}
			  />
			 </article>
			 <footer className="blog_post-footer">
				 <div className="post-tags">
					 <span>Tags: </span>
					 {
						 this.props.post.tags.map((tag, key) => {
							 return (
								 <span className="post-tag" key={key}>{tag}</span>
							 )
						 })
					 }
				 </div>
				 <div className="actions">
					 <Link to={`/posts/${this.isPrevDisabled() ? null : this.state.previousPost._id}`} onClick={(e) => {this.isPrevDisabled() && e.preventDefault()}} className={`btn ${this.isPrevDisabled() ? 'btn-light' : 'btn-primary'}`}><FontAwesomeIcon icon={faChevronLeft}/> Previous</Link>
					 <Link to={`/posts/${this.isNextDisabled() ? null : this.state.nextPost._id}`} onClick={(e) => { this.isNextDisabled() && e.preventDefault()}} className={`btn ${this.isNextDisabled() ? 'btn-light' : 'btn-primary'}`}>Next <FontAwesomeIcon icon={faChevronRight}/></Link>
				 </div>
			 </footer>
			</main>
		)
	}
}

export default BlogPostView;
