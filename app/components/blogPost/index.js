 import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import parseHtml from 'react-markdown/plugins/html-parser';
import CodeBlock from './codeblock';
import Disqus from 'disqus-react';
import './styles.less';

import {Link} from 'react-router-dom';

class BlogPost extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		const {post, match: {params}} = this.props;
		const header_banner_url = `${window.location.origin + '/'}${post.images.hero.path}`.replace('\\', '/').replace('\\', '/');
		const disqusShortname= "dorultanianos";
		const disqusConfig = {
			url: `http://localhost:3000/blog/${post.post_id}`,
			identifier: `/blog/${post.post_id}`,
			title: post.title
		};

		return (
			<main className="blog_post">
			 <header className="blog_post-header">
			  <div className="blog_post__header">
			   <div className="blog_post__header-date">
			    <span>Posted on {new Date(post.createdAt).toLocaleDateString()} by <Link to="/profile">Dorultan Ianos</Link></span>
			   </div>
			   <div className="blog_post__header-title">
			    <h1>{post.title}</h1>
			   </div>
			   <div className="blog_post__header-description">
			    <p>{post.description}</p>
			   </div>
			   <div className="blog_post__header-share">
			    <h3>Share on</h3>
			    <ul>
		   	     <li><a href="#"><i className="fab fa-facebook-f "></i></a></li>
		   	     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
		   	     <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
		   	    </ul>
			   </div>
			  </div>
			 </header>
			 <article className="blog_post-content">
			  <ReactMarkdown className="result-pane" source={post.body} escapeHtml={false} renderers={{code: CodeBlock}}
			  />
			 </article>
	         <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

			</main>
		)
	}
}

export default BlogPost;