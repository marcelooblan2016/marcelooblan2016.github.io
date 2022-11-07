function xData() {
    return {
        pageLoaded: false,
        animation: {
            object_count: 50,
        },
        menu: {
            quote: "Keep Moving Forward!",
            favicon: "./favicon.png",
            options: [
                {text: "About Me", href: "index"},
                {text: "Skills", href: "skills"},
                {text: "Work Experience", href: "work-experience"},
                {text: "Portfolio", href: "#"},
                {text: "Contact Me", href: "#"},
            ],
            is_open: false,
            social: [
                {text: 'Github', icon: 'fa fa-github', href: 'https://github.com/marcelooblan2016'},
                {text: 'Facebook', icon: 'fa fa-facebook', href: 'https://www.facebook.com/Mr.AllTimeHigh'},
                {text: 'Instagram', icon: 'fa fa-instagram', href: 'https://www.instagram.com/marxoblan/'},
            ]
        },
        footer: {
            year: function () { return (new Date()).getFullYear(); }
        },
        person: {
            full_name: "Marcelo Oblan III",
            title: "Fullstack Web Developer (Laravel | Vuejs | LAMP)",
            summary: [
                "Web Developer since 2012",
                "A Fullstack which have been involved in many projects (s) such as wifi hotspots, payment gateway, online refund system, eCommerce, Software as a service. Some of them are Freelance jobs & most of them are Full-Time Project-Based.",
            ].join(","),
        },
        profile_img: "./assets/images/profile_picture.jpg",
        skills: [
            {
                type: "BackEnd",
                lists: [
                    "PHP : Core PHP (OOP), Laravel (elastic search, redis), Laravel Nova, Lumen, Code Igniter, Python",
                    "Database: MySQL, PostgreSQL, NoSQL",
                ],
            },
            {
                type: "FrontEnd",
                lists: [
                    "Styling: CSS / SCSS / SASS, Tailwind, Bootstrap",
                    "Javascript: Jquery, Vue.js/Vuex, Nuxt.js, Node.js, TypeScript, Alpine.js",
                    "CMS: WordPress, October CMS"
                ]
            },
            {
                type: "Others",
                lists: [
                    "Project Management Tools: Trello, Jira, Teamwork",
                    "Tools: Git / Git Flow, NPM, Command Line / SSH, SEO",
                    "OS: Linux (Ubuntu, Centos, Amazon Linux)",
                    "Hosting / Deployment: Envoyer, AWS, Digital Ocean, Namecheap"
                ]
            },
        ],
        experiences: [
            {
                company: "AllCars.com",
                location: "Webster, New York, United States",
                type: "Remote",
                time_frame: "2020 - Present",
                title: "Software Engineer / FullStack",
                description: [
                    "eCommerce website for used cars (buy/sell) - Create new feature, maintain, bugfix & optimization; Laravel/Vue.js, Deploy"
                ]
            },
            {
                company: "DiegoDev Group, LLC",
                location: "San Diego, California, United States",
                type: "Remote",
                time_frame: "Apr 2019 - Apr 2020",
                title: "Laravel Web Developer",
                description: [
                    "Worked with team for an online shop (e-commerce) of cars, CarsZoom using laravel",
                    "Worked on blog website SDPHP"
                ]
            },
            {
                company: "Yondu, Inc.",
                location: "Bonifacio Global City, Taguig, Metro Manila, Philippines",
                type: "Office",
                time_frame: "Sep 2016 - Sep 2018",
                title: "Back End Software Engineer",
                description: [
                    "Worked as member of a dedicated team for project wifi (Wifi Hotspots) of the client | Globe.",
                    "A development team, Agile method.",
                    "Project can usually be seen in public places like malls,mrt/lrt stations and airport. Im one of the backend developers of the API."
                ]
            },
            {
                company: "International Payments Processing",
                location: "Puerto Princesa City, Palawan, Philippines",
                type: "Office",
                time_frame: "Aug 2012 - Sep 2016",
                title: "Full Stack Web Developer",
                description: [
                    "Company started from 4 people to more than 50 people.",
                    "One of the 4 people as a web developer. In mid 2015 , I have become a Team Leader of the team.",
                    "Develop their website, created a CMS, Chat App exclusively for company, Some New-to-me Projects like Online Refund System and Exclusive Payment Gateway."
                ]
            }
        ],
        libraries: {
            isLocalhost: function(url) {
                return url.toString().includes('localhost') || url.toString().includes('127.0.0.1');
            },
            safeUrl: function(page) {
                if (page == 'index') { return '/' };

                let isLocalhost = this.isLocalhost(window.location);
                if (isLocalhost === true) {
                    return [page, '.html'].join("");
                }

                return page;
            }
        }
    };
}