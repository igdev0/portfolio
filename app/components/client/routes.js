import Home from '../home';
import AboutContainer from '../../containers/about';
import BlogContainer from '../../containers/blog';
import BlogPostContainer from '../../containers/blogPost';
import ProjectsContainer from '../../containers/projects';
import ProjectViewContainer from '../../containers/projectView';


const routes = [
	{
		path: '/',
		component: Home,
		exact: true
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
	}
];

export default routes;