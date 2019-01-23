import Client from '../components/client';
import DashboardContainer from '../containers/dashboard/dashboard-container';
import LoginContainer from '../containers/login-container.js';

const routes = [
	{
		path: "/",
		exact: true,
		component: Client
	},
	
	{
		path: "/profile",
		exact: false,
		component: Client
	},

	{
		path: '/blog',
		component: Client,
		exact: false
	},

	{
		path: '/portfolio',
		component: Client,
		exact: false
	},

	{
		path: "/dashboard",
		exact: false,
		component: DashboardContainer,
		as: 'H'
	},

	{
		path: '/login',
		exact: false,
		component: LoginContainer,
		as: 'C'
	}
]

export default routes;