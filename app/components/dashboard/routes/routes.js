import ProfileContainer from '../profile/container';
import Overview from '../overview/overview';
import BlogContainer from '../../../containers/dashboard/blog-container';
import Messages from '../messages/messages';
import Portfolio from '../portfolio/portfolio';
import Skills from '../skills/skills';
import Todo from '../todo/todo';
import FilesContainer from '../files/containers/Files';

// Aside dashboard routes.


const Routes = [
	{
		path: '/dashboard/overview',
		component: Overview,
		exact: false,
		name: 'Overview',
		as: 'C'
	},

	{
		path: '/dashboard/profile',
		component: ProfileContainer,
		exact: false,
		name: 'Profile',
		as: 'C'
	},

	{
		path: '/dashboard/blog',
		component: BlogContainer,
		exact: false,
		name: 'Blog',
		as: 'C'
	},

	{
		path: '/dashboard/messages',
		component: Messages,
		exact: false,
		name: 'Messages',
		as: 'C'
	},

	{
		path: '/dashboard/portfolio',
		component: Portfolio,
		exact: false,
		name: 'Portfolio',
		as: 'C'
	},

	{
		path: '/dashboard/skills',
		component: Skills,
		exact: false,
		name: 'Skills',
		as: 'C'
	},

	{
		path: '/dashboard/todo',
		component: Todo,
		exact: false,
		name: 'Todos',
		as: 'C'
	},

	{
		path: "/dashboard/upload-files",
		component: FilesContainer,
		exact: false,
		name: 'Upload files',
		as: "C"
	}
];

export default Routes;