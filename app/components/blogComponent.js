import React, {Component} from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import Disqus from 'disqus-react';
import './blogComponent.less';


class Blog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filtered_posts: [],
			tags: []
		}

		this.filterPosts = this.filterPosts.bind(this);
		this.filterPostsByTagName = this.filterPostsByTagName.bind(this);
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

	filterPosts({letter}) {
		letter = letter !== undefined ? letter.toLowerCase() : '';
		this.setState(prevState => ({
			filtered_posts: this.props.posts.filter(post => post.title.toLowerCase().includes(letter || '') || post.tags.includes(letter))
		}))

		this.props.reset()
	}

	filterPostsByTagName(tag) {
		if(tag) {
			this.setState({
				filtered_posts: this.props.posts.filter(post => post.tags.includes(tag))
			})
		}
	}

	render() {
		return (
			<main className="main__blog">
			 <header className="main__blog-header">
			  <Form className="main__blog__header-search_form" onSubmit={this.props.handleSubmit(this.filterPosts)}>
			   <Field type="text" name="letter" label="Search ..." component={FieldTextComponent}/>
			   <button type="submit"><i className="fas fa-search fa-2x"></i></button>
			  </Form>
			  <div className="main__blog__header-tags">
			  	{
			  		this.state.tags.map((tag, key) => {

			  			return <span key={key} className="tag" onClick={() => {this.filterPostsByTagName(tag)}}>{tag}</span>
			  		})
			  	}
			  </div>
			 </header>
			 <section className="main__blog-content">
			  <section className="main__blog__content-posts">
			    <TransitionGroup className="main__blog__content__posts">
			    {
		   		 this.state.filtered_posts.map(({_id, title, description, images: {card}, createdAt, tags}, key) => {
				   return (
				   	<CSSTransition key={key} in={this.state.filtered_posts[key].title === title} timeout={300} classNames={'blog-post'} >
				   	<div className="main__blog__content__posts-post">
				   	 <div className="main__blog__content__posts__post__details-title">
				   	    <span className="post-date"><i className="far fa-calendar-check"></i>{new Date(createdAt).toLocaleDateString()}</span>
				   	   <Link to={`/blog/${_id}`}><h2>{title}</h2></Link>
				   	 </div>
				   	 <div className="main__blog__content__posts__post-img">
				   	  <Link to={`/blog/${_id}`}><img src={`${window.location.origin}/${card.path}`} alt={card.alt}/></Link>
				   	 </div>
				   	 <div className="main__blog__content__posts__post-details">
				   	  <div className="main__blog__content__posts__post__details-tags">
				   	   {
				   	   	tags.map((tag, key) => {
				   	   		return (
				   	   			<span key={key} onClick={() => this.filterPostsByTagName(tag)} className="tag">{tag}</span>
				   	   		)
				   	   	})
				   	   }
				   	  </div>
				   	  <div className="main__blog__content__posts__post__details-description">
				   	   <p>{description}</p>
				   	  </div>
				   	  <div className="main__blog__content__posts__post__details-share">
				   	   <Disqus.CommentCount
				   	   shortname={"dorultanianos"}
				   	   config={{
							url: `http://localhost:3000/blog/${_id}`,
							identifier: `/blog/${_id}`,
							title: title
						}}></Disqus.CommentCount>
				   	   <ul>
				   	    <li><a href="#"><i className="fab fa-facebook-f "></i></a></li>
				   	    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
				   	    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
				   	   </ul>
				   	  </div>
				   	</div>
				   </div>
				   </CSSTransition>
				   )
		   		  })
			   	 }
			   	 </TransitionGroup>
			  </section>
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
