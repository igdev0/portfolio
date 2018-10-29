import CreatePostContainer from '../containers/CreatePost';
import UpdatePostContainer from '../containers/UpdatePost';
import ViewPostsContainter from '../containers/ViewPosts';

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