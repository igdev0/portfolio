import React from 'react';
import Client from '../components/clientComponent.js';
import loadable from '@loadable/component'
// import '../components/clientComponent.less';

// import DashboardContainer from '../containers/dashboardContainer';
// import LoginContainer from '../containers/loginContainer.js';
// import ProfileContainer from '../containers/profileDashboardContainer';
// import ProfileOverviewContainer from '../containers/overviewDashboardContainer';
// import BlogDashboardContainer from '../containers/blogDashboardContainer';
// import PortfolioContainer from '../containers/portfolioDashboardContainer';
// import FilesContainer from '../containers/filesDashboardContainer';
//
// import AboutContainer from '../containers/aboutContainer';
// import BlogContainer from '../containers/blogContainer';
// import BlogPostContainer from '../containers/blogPostContainer';
// import ProjectsContainer from '../containers/projectsContainer';
// import ProjectViewContainer from '../containers/projectViewContainer';
// import BlogPostDashboardContainer from '../containers/blogPostDashboardContainer';
// import PortfolioProjectContainer from '../containers/portfolioProjectContainer';
// import UserProfileContainer from '../containers/userProfileContainer';

const DashboardContainer = loadable(() => import('../containers/dashboardContainer'));
const LoginContainer = loadable(() => import('../containers/loginContainer.js'));
const ProfileContainer = loadable(() => import('../containers/profileDashboardContainer'));
const ProfileOverviewContainer = loadable(() => import('../containers/overviewDashboardContainer'));
const BlogDashboardContainer = loadable(() => import('../containers/blogDashboardContainer'));
const PortfolioContainer = loadable(() => import('../containers/portfolioDashboardContainer'));
const FilesContainer = loadable(() => import('../containers/filesDashboardContainer'));
const AboutContainer = loadable(() => import('../containers/aboutContainer'));
const BlogContainer = loadable(() => import('../containers/blogContainer'));
const BlogPostContainer = loadable(() => import('../containers/blogPostContainer'));
const ProjectsContainer = loadable(() => import('../containers/projectsContainer'));
const ProjectViewContainer = loadable(() => import('../containers/projectViewContainer'));

const BlogPostDashboardContainer = loadable(() => import('../containers/blogPostDashboardContainer'));
const PortfolioProjectContainer = loadable(() => import('../containers/portfolioProjectContainer'));
const UserProfileContainer = loadable(() => import('../containers/userProfileContainer'));
const routes = [
	{
		path: "/",
		exact: true,
		component: AboutContainer,
	},

	{
		path: '/login',
		exact: true,
		component: LoginContainer
	},

	{
		path: "/posts",
		exact: true,
		component: BlogContainer,
		name: "Blog",
		fontAwesomeClass: "fab fa-blogger-b"
	},

	{
		path: '/posts/:slug',
		component: BlogPostContainer,
		exact: true,
		name: false
	},

	{
		path: '/about',
		component: AboutContainer,
		exact: true,
		name: "About",
		fontAwesomeClass: "fas fa-user"
	},

	{
		path: '/projects',
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
				path: '/dashboard/settings',
				component: UserProfileContainer,
				exact: true
			},
			{
				path: '/dashboard/blog',
				component: BlogDashboardContainer,
				exact: true,
				name: 'Blog',
				as: 'C'
			},

			{
				path: '/dashboard/blog/create',
				component: BlogPostDashboardContainer,
				exact: true
			},
			{
				path: '/dashboard/blog/update/:slug',
				component: BlogPostDashboardContainer,
				exact: false
			},
			{
				path: '/dashboard/portfolio',
				component: PortfolioContainer,
				exact: true,
				name: 'Portfolio',
				as: 'C'
			},
			{
				path: '/dashboard/portfolio/add',
				component: PortfolioProjectContainer,
				exact: true
			},
			{
				path: '/dashboard/portfolio/edit/:id',
				component: PortfolioProjectContainer,
				exact: true
			},

			{
				path: "/dashboard/upload-files",
				component: FilesContainer,
				exact: false,
				name: 'Upload files',
				as: "C"
			}
		]
	}

]

export default routes;
