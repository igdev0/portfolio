import CreatePostContainer from '../containers/createPost';
import UpdatePostContainer from '../containers/updatePost';
import ViewPostsContainter from '../containers/viewPosts';

const routes = [
	{
		path: '/dashboard/blog',
		component: ViewPostsContainter,
		exact: true
	},

	{
		path: '/dashboard/blog/create-post',
		component: CreatePostContainer,
		exact: true
	},

	{
		path: '/dashboard/blog/update-post/:post',
		component: UpdatePostContainer,
		exact: true
	}
];

export default routes;