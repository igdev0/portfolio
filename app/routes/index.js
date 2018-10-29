import Home from '../components/home/home.js';
import DashboardContainer from '../containers/dashboard/dashboard-container';
import LoginContainer from '../containers/app/login-container.js';

const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		as: 'C'
	},

	{
		path: "/home",
		exact: true,
		component: Home,
		as: 'C'
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