import ProfileContainer from '../profile/container';
import ProfileOverviewContainer from '../overview/container';
import BlogContainer from '../../../containers/dashboard/blog-container';
import Messages from '../messages/messages';
import PortfolioContainer from '../portfolio/containers';
import Skills from '../skills/skills';
import Todo from '../todo/todo';
import FilesContainer from '../files/containers/Files';

// Aside dashboard routes.


const Routes = [
	{
		path: '/dashboard',
		component: ProfileOverviewContainer,
		exact: true,
		name: null,
		as: 'C'
	},
	{
		path: '/dashboard/overview',
		component: ProfileOverviewContainer,
		exact: true,
		name: 'Overview',
		as: 'C'
	},

	{
		path: '/dashboard/profile',
		component: ProfileContainer,
		exact: false,
		name: "Profile",
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
		path: '/dashboard/portfolio',
		component: PortfolioContainer,
		exact: false,
		name: 'Portfolio',
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