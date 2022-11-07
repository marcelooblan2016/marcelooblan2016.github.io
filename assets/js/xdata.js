function xData() {
    return {
        animation: {
            object_count: 50,
        },
        menu: {
            quote: "Keep Moving Forward!",
            favicon: "./favicon.png",
            options: [
                {text: "About Me", href: "/"},
                {text: "Skills", href: "/skills.html"},
                {text: "Work Experience", href: "#"},
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
        section_1: {
            profile_img: "./assets/images/profile_picture.jpg"
        },
        section_2: {
            skills: [
                {
                    type: "BackEnd",
                    lists: [
                        "PHP : Core PHP (OOP), Laravel (elastic search, redis), Lumen, Code Igniter, Python",
                        "Database: MySQL, PostgreSQL, NoSQL",
                    ],
                },
                {
                    type: "FrontEnd",
                    lists: [
                        "Styling: CSS / SCSS / SASS, Tailwind, Bootstrap",
                        "Javascript: Jquery, Vue.js/Vuex, Nuxt.js, Node.js, Alpine.js",
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
        }
    };
}