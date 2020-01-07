import React from 'react';
// import routes from './routes';

import {Route, Switch} from 'react-router-dom';
import "./blogDashboardComponent.less";
import {Link} from 'react-router-dom';

const BlogDashboard = (props) => {
	const posts = props.displayedResults !== null ? props.displayedResults : props.posts;
	return (
		<main className="dashboard__blog__post">
		 <div className="dashboard__blog__post-header">
			<h3>Blog posts.</h3>
		  <Link className="btn btn-success" to="/dashboard/blog/create">Create post.</Link>
			<form onSubmit={props.onSearchSubmit}>
				<input type="text" placeholder="Search .." onChange={(e) => {props.onSearchInputChange(e)}}/>
			</form>
		 </div>
			<table className="dashboard__blog__post-display">
				<thead className="dashboard__blog__post__display-header">
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className="dashboard__blog__post__display-body">
					{
						posts.map(({_id, title, description, createdAt, path, slug}, key) => {

							return (
								<tr key={key}>
									<td>{title}</td>
									<td>{description}</td>
									<td>{createdAt}</td>
									<td>
										<Link to={`/dashboard/blog/update/${slug}`} className="btn btn-primary">Edit</Link>
										<button type="button" className="btn btn-danger" onClick={() => {props.deletePost(_id)}}>Delete</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</main>
	)
}

export default BlogDashboard;
