import mongoose from '../../config/mongodb';
import Projects from '../models/projects';
import Skills from '../models/skills';
import Education from '../models/education';
import Posts from '../models/posts';

// =================================================================================
const getProjects = () => {
	const promise = new Promise((resolve, reject) => {
		Projects
		.aggregate([
			{
			$match: {}
			},
			{
				$project: {
					title: 1,
					skills_count: {
						$size: "$skills"
					},
					duration: {
						$subtract: ['$finished_at', '$started_at']
					},
					color: 1
				}
			},
			{
				$group: {
					_id: 0,
					count: {
						$sum: 1
					},
					
					biggest_duration: {
						$max: "$duration"
					},
					
					lowest_duration: {
						$min: "$duration"
					},

					projects: {$push: "$$ROOT"}
				}
			},
			{
				$project: {
					count: 1,
					longest_project: {
						$filter: {
							input: "$projects",
							as: "project",
							cond: {
								$gte: ["$$project.duration", "$biggest_duration"]
							}
						}
					},

					fastest_project: {
						$filter: {
							input: "$projects",
							as: "project",
							cond: {
								$lte: ["$$project.duration", "$lowest_duration"]
							}
						}
					},
					chart_config: {
						datasets: [
							{
								data: {
									$map: {
										input: "$projects",
										as: "project",
										in: "$$project.duration"
									}
								},
								backgroundColor: {
									$map: {
										input: "$projects",
										as: "project",
										in: "$$project.color"
									}
								},
								label: "dataset 1"
							}
						],
						labels: {
							$map: {
								input: "$projects",
								as: "project",
								in: "$$project.title"
							}
						}
					}
				}
			},
		])

		.exec((err, data) => {

			if(err) {
				reject({error: err, message: "Couldn't get the overview for projects."});
			}

			else {
				resolve({projects_overview: data})
			}
		})
	})

	return promise;
}

// =================================================================================

const getPosts = () => {

	const promise = new Promise((resolve, reject) => {

		Posts
		.aggregate([
		{
			$match: {}
		},
		{
			$group: {
				_id: 0,
				count: {
					$sum: 1
				}
			}
		}
		])

		.exec((err, data) => {

			if(err) {
				reject({error: err, message: "Couldn't fetch the blog posts."})
			}
			else {
				resolve({blog_posts_overview: data});
			}
		})
	})

	return promise;
}

// =================================================================================

const getEducation = () => {

	const promise = new Promise((resolve, reject) => {

		Education

		.aggregate([
		{
			$match: {}
		},
		{
			$group: {
				_id: 0,
				count: {
					$sum: 1
				}
			}
		}
		])

		.exec((err, data) => {

			if(err) {
				reject({error: err, message: "Couldn't fetch your 'Education'"})
			}

			else {
				resolve({education_overview: data});
			}
		})
	})

	return promise;
};

// =================================================================================

const getSkills = () => {

	const promise = new Promise((resolve, reject) => {

		Skills

		.aggregate([
		{
			$match: {}
		},
		{
			$group: {
				_id: 0,
				count: {
					$sum: 1
				},
				skills: {
					$push: "$$ROOT"
				}
			}
		},

		{
			$project: {
				skills: 1,
				count: 1,
				total_experience_in_ms: {
					$sum: {
						$map: {
							input: "$skills",
							as: "skill",
							in: {
								$subtract: ["$$skill.experience.to", "$$skill.experience.from"]
							}
						}
					}
				},
				chart_config: {
					datasets: [
						{
							data: {
								$map: {
									input: "$skills",
									as: "skill",
									in: "$$skill.level"
								}
							},
							backgroundColor: {
								$map: {
									input: "$skills",
									as: "skill",
									in: "$$skill.color"
								}
							},
							label: "dataset 1"
						}
					],
					labels: {
						$map: {
							input: "$skills",
							as: "skill",
							in: "$$skill.name"
						}
					}
				}
			}
		}
		])

		.exec((err, data) => {

			if(err) {
				reject({error: err, message: "Couldn't fetch your 'Skills'"})
			}

			else {
				resolve({skills_overview: data});
			}
		})
	})

	return promise;
};

const overviewController = async (req, res) => {
	
	try {
		const data = await Promise.all([getPosts(), getProjects(), getSkills(), getEducation()]);
		res.status(200).json(data);
	} catch(err) {
		res.status(400).json(err);
	}
	
}

export default overviewController;