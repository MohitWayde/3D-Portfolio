import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	flask,
	python,
	django,
	meta,
	starbucks,
	tesla,
	shopify,
	Rakuten,
	iRely,
	Proffus,
	carrent,
	jobit,
	tripguide,
	threejs,
	textutils,
	inotebook,
	newsmonkey,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Full Stack Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "Flask",
		icon: flask,
	},
	{
		name: "Django",
		icon: django,
	},
	
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },
	{
		name: "git",
		icon: git,
	},
	
];

const experiences = [
	
	
	// Rakuten
	{
		title: "Software Engineer",
		company_name: "Rakuten",
		icon: Rakuten,
		iconBg: "#FFFFFF",
		date: "Sep 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js, Flask and other related technologies.",
			"Participating in code reviews and taking constructive feedback from other developers.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility & end to end validations.",
		],
	},

	// iRely
	{
		title: "Software Engineer",
		company_name: "iRely",
		icon: iRely,
		iconBg: "#FFFFFF",
		date: "May 2023 - July 2023",
		points: [
			"Developing and maintaining web applications using DotNet, JavaScript and other related technologies.",
			"Collaborating with cross-functional teams including, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring end-to-end validations.",
			"Participating in code reviews and taking constructive feedback from other developers.",
		],
	},

	// Proffus
	{
		title: "Web Developer",
		company_name: "Proffus",
		icon: Proffus,
		iconBg: "#223438",
		date: "March 2022 - June 2022",
		points: [
			"Developing and maintaining web applications using WordPress and other related technologies.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and taking constructive feedback from other developers.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam possimus accusantium",
		name: "Saran Tancredi",
		designation: "CFO",
		company: "ABC Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam possimus accusantium",
		name: "Chris Hemsworth",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam possimus accusantium",
		name: "Brian O'Corner",
		designation: "CTO",
		company: "XYZ enterprices",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "iNotebook",
		description:
			"Cutting edge online note taking platform designed to enhance note-taking experience.",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "REST API",
				color: "orange-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "Node JS",
				color: "green-text-gradient",
			},
		],
		image: inotebook,
		source_code_link: "https://github.com/MohitWayde/inotebook-development-edition",
	},

	{
		name: "Textutils",
		description:
			"TextUtils is a fundamental utility for text manipulation for ease & convenience",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
		],
		image: textutils,
		source_code_link: "https://mohitwayde.github.io/textutils/",
	},

	{
		name: "NewsMonkey",
		description:
			"Comprehensive news platform, allow users to see categorized and popular news.",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "NewsAPI",
				color: "green-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
		],
		image: newsmonkey,
		source_code_link: "https://github.com/MohitWayde/NewsMonkey",
	},
];

export { services, technologies, experiences, testimonials, projects };