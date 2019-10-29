import Client from '../components/clientComponent';
import DashboardContainer from '../containers/dashboardContainer';
import LoginContainer from '../containers/loginContainer.js';
import ProfileContainer from '../containers/profileDashboardContainer';
import ProfileOverviewContainer from '../containers/overviewDashboardContainer';
import BlogDashboardContainer from '../containers/blogDashboardContainer';
import PortfolioContainer from '../containers/portfolioDashboardContainer';
import Skills from '../components/skillsDashboardComponent';
import FilesContainer from '../containers/filesDashboardContainer';
import Home from '../components/homeComponent';

import AboutContainer from '../containers/aboutContainer';
import BlogContainer from '../containers/blogContainer';
import BlogPostContainer from '../containers/blogPostContainer';
import ProjectsContainer from '../containers/projectsContainer';
import ProjectViewContainer from '../containers/projectViewContainer';
import ContactContainer from '../containers/contactContainer';
import UpdatePostContainer from '../containers/updatePostDashboardContainer';
import ViewPostsContainter from '../containers/viewPostsDashboardContainer';
import CreatePostContainer from '../containers/createPostDashboardContainer';


const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
	},
	{
		path: '/home',
		exact: true,
		component: Home
	},
	{
		path: '/login',
		exact: true,
		component: LoginContainer
	},
	{
		path: "/blog",
		exact: true,
		component: BlogContainer,
		name: "Blog",
		fontAwesomeClass: "fab fa-blogger-b"
	},

	{
		path: '/blog/:post_id',
		component: BlogPostContainer,
		exact: true,
		name: false
	},

	{
		path: '/profile',
		component: AboutContainer,
		exact: true,
		name: "Profile",
		fontAwesomeClass: "fas fa-user"
	},

	{
		path: '/portfolio',
		component: ProjectsContainer,
		exact: true,
		fontAwesomeClass: "fas fa-projects"
	},

	{
		path: "/portfolio/:project_id",
		component: ProjectViewContainer,
		exact: true,
		fontAwesomeClass: false
	},

	{
		path: '/contact',
		exact: true,
		component: ContactContainer,
		as: 'C'
	},

	{
		path: "/dashboard",
		exact: false,
		component: DashboardContainer,
		routes: [
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
				component: BlogDashboardContainer,
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
			},
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
		]
	}

]

export default routes;
