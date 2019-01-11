import Home from '../home';
import AboutContainer from '../../containers/about';
import BlogContainer from '../../containers/blog';
import BlogPostContainer from '../../containers/blogPost';
import ProjectsContainer from '../../containers/projects';


const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/home',
		component: Home,
		exact: true,
		name: "Home",
		fontAwesomeClass: "fas fa-home"
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
	}
];

export default routes;