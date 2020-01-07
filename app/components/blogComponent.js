import React, {Component} from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import Disqus from 'disqus-react';
import {formatDate} from '../utilities';

import './blogComponent.less';


class Blog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filtered_posts: [],
			tags: [],
			selected_tags: []
		}

		this.filterPostsByTagName = this.filterPostsByTagName.bind(this);
		this.addTag = this.addTag.bind(this);
		this.deleteTag = this.deleteTag.bind(this);
	}

	componentDidMount() {

		this.setState({
			filtered_posts: this.props.posts
		})

		this.concatTags();
	}

	concatTags() {
		let tags = [];
		this.props.posts.forEach(post => tags.push(post.tags));
		let _tags = [].concat.apply([], tags);

		let clean_array_of_tags = _tags.filter((tag, i) => _tags.indexOf(tag) === i);

		this.setState({
			tags: clean_array_of_tags
		})

	}

	filterPostsByTagName(tags) {
		// if(tag) {
		// 	this.setState({
		// 		filtered_posts: this.props.posts.filter(post => post.tags.includes(tag)),
		// 		selected_tags: [...this.state.selected_tags, tag]
		// 	})
		// }
	}

	deleteTag(tag) {
		this.setState({
			selected_tags: this.state.selected_tags.filter(item => item !== tag)
		})
	}

	componentDidUpdate(prevProps, prevState) {

		const posts = this.props.posts.filter(({tags}) => {
			for(var i = 0; i < this.state.selected_tags.length; i++) {
				if(!tags.includes(this.state.selected_tags[i])) {
					return false;
				}
			}
			return true;
		})

		if(prevState.selected_tags !== this.state.selected_tags) {
			this.setState({
				filtered_posts: posts
			})
		}
	}

	addTag(tag) {
		// Check if selected_tags includes the tag.
		if(!this.state.selected_tags.includes(tag)) {
			this.setState({
				selected_tags: [...this.state.selected_tags, tag]
			})

			return false;
		}

		this.deleteTag(tag);
	}

	render() {
		return (
			<main className="main__blog">
			 <header className="main__blog-header">
			  <div className="main__blog__header-tags">
					<span>Select tags: </span>
			  	{
			  		this.state.tags.map((tag, key) => {

			  			return <span key={key} className={`post-tag ${this.state.selected_tags.includes(tag) && 'active' }`} onClick={() => {this.addTag(tag)}}>{tag}</span>
			  		})
			  	}
			  </div>
			 </header>
			 <section className="main__blog-posts">
				{
					this.state.filtered_posts ?
					this.state.filtered_posts.map((post, key) => {

						return (
							<Link key={key} to={`/posts/${post.slug}`}>
								<div className="post">
								 <div className="post-title">
									 <h2>{post.title}</h2>
								 </div>
								 <div className="post-date">
									 {formatDate(post.createdAt)}
								 </div>
								 <div className="post-description">
									 <p>{post.description}...<span className="read-more">Read more</span></p>
								 </div>
								 <div className="post-tags">
									 {
										 post.tags.map((name, key) => {
											 return <span key={key} className="post-tag">{name}</span>
										 })
									 }
								 </div>
								</div>
							</Link>
						)
					})
					: null
				}
			 </section>
			</main>
		)
	}
}

const FieldTextComponent = ({
	input,
	type,
	label,
	meta: {
		error,
		warn,
		touched
	}
}) => {
	return (
		<div className="main__blog__header-search_form-input">
		 <input type={type} placeholder={label} {...input}/>
		</div>
	)
}

export default reduxForm({form: 'search_post'})(Blog);
