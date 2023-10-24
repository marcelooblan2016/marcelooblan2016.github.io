function xData() {
    return {
        pageLoaded: true,
        animation: {
            object_count: 50,
        },
        external_links: {
            resume: "https://drive.google.com/file/d/1eIDiy4mGxvVhrRBwCQWnTRnOxBTM1NSY/view?usp=sharing"
        },
        menu: {
            quote: "Keep Moving Forward!",
            favicon: "./favicon.png",
            options: [
                {text: "About Me", href: "index"},
                {text: "Skills", href: "skills"},
                {text: "Work Experience", href: "work-experience"},
                {text: "Portfolio", href: "portfolio"}
            ],
            is_open: false,
            social: [
                {text: 'Github', value: 'github', icon: 'fa fa-github', href: 'https://github.com/marcelooblan2016'},
                {text: 'Facebook', value: 'facebook', icon: 'fa fa-facebook', href: 'https://www.facebook.com/Mr.AllTimeHigh'},
                {text: 'Instagram', value: 'instagram', icon: 'fa fa-instagram', href: 'https://www.instagram.com/marxoblan/'},
                {text: 'LinkedIn', value: 'linkedin', icon: 'fa fa-linkedin-square', href: 'https://www.linkedin.com/in/marcelo-oblan-2016/'}        
            ]
        },
        footer: {
            year: function () { return (new Date()).getFullYear(); }
        },
        contact: {
            email: "marcelo.oblan2016@gmail.com",
            location: "Philippines"
        },
        person: {
            full_name: "Marcelo Oblan III",
            title: "Fullstack Web Developer (Laravel | Vue.js | Inertia.js | LAMP | TALL)",
            summary: [
                "I have been professionally engaged as a web developer since 2012, with a specialization in full-stack development. Over the years, I have cultivated extensive expertise by actively contributing to a diverse array of projects, encompassing various domains such as WiFi hotspots, online refund systems, eCommerce, and Software as a Service (SaaS) solutions. My portfolio is a testament to a rich and multifaceted experience, incorporating a blend of freelance and full-time project-based engagements.",
            ].join(","),
        },
        profile_img: "./assets/images/profile-picture-ph.jpg",
        testimonials: [
            {name: 'Teresa W.', position: 'Owner, 01Hearts', message: '"Marcelo is an excellent software engineer, proficient in many full-stack developer technologies. If he doesn\'t know a new language, app, or technology, he learns it. He is reliable and available if we have an urgent update. Marcelo asks the right questions to clarify new assignments or tasks, which results in finishing as expected the first time. He\'s great about using our development tools and Agile methods. He\'s a good listener, collaborates well with me and others, and has excellent troubleshooting skills. Marcelo helped us with the allcars and Neurosig startups. What I like most about Marcelo is that he is fun to work with. I am confident Marcelo would do a great job with any project or job he signs up for."'},
            {name: 'Fheter John C.', position: 'CTO | Business Analyst | Product Manager | Scrum M', message: '"I hired Marcelo as a Contract Fullstack Website Developer, He showcased exceptional skills in PHP, Laravel, Vue.js, and Postgre while working on the WildAlert project for our client, DENR Philippines, at IT-Era Technology Solutions. Marcelo\'s technical prowess played a pivotal role in the project\'s success. He consistently demonstrated a commitment to excellence, swiftly tackling complex challenges, and maintaining open communication with our team and the client. Marcelo\'s contributions were instrumental in the nationwide rollout of WildAlert, a vital tool for DENR rangers combatting illegal wildlife trading. He is a valuable asset to any web development project and consistently goes above and beyond to deliver exceptional results. "'},
            {name: 'Dan S.', position: 'Partner at Arcadia Consulting | Driving Behavioral', message: '"Marcelo is highly responsive, technically skilled and creative in his solutions. I hired Marcelo for a complex responsive website design and he exceeded my expectations, bringing a level of sophistication that was impressive. I highly recommend Marcelo. "'},
            {name: 'Matt J.', position: '', message: '"Marcelo is very knowledgeable. Communication was never a problem. He’s very responsive and by far one of the best developers I’ve worked with in the past. All tasks were completed as required and I am looking forward to working with him on projects in the future!"'},
        ],
        testimonial_current: 0,
        skills: [
            {
                type: "Front-End",
                lists: [
                    "Javascript", 
                    "JQuery",
                    "Vue.js / Vuex",
                    "Inertia.js",
                    "Nuxt.js",
                    "Node.js",
                    "TypeScript",
                    "Alpine.js",
                    "CSS / SCSS",
                    "TailwindCSS",
                    "Bootstrap"
                ],
            },
            {
                type: "Back-End",
                lists: [
                    "PHP",
                    "Laravel (elastic search, redis)",
                    "Livewire",
                    "Lumen",
                    "Code Igniter"
                ],
            },
            {
                type: "Database",
                lists: [
                    "MySQL",
                    "PostgreSQL"
                ],
            },
            {
                type: "DevOps",
                lists: [
                    "Github Actions: CI/CD",
                    "AWS (EC2, S3)",
                    "Envoyer"
                ],
            },
            {
                type: "Management",
                lists: [
                    "Jira",
                    "Trello",
                    "Teamwork"
                ],
            },
            {
                type: "Others",
                lists: [
                    "TDD (PHPUNIT), AGILE",
                    "Git / Git Flow",
                    "Gihub, Bitbucket",
                    "NPM", 
                    "Command Line / SSH",
                    "SEO",
                    "Linux (Ubuntu, Centos, Amazon Linux)",
                    "Hosting / Deployment: Envoyer, AWS, Digital Ocean, Namecheap, Hostinger"
                ],
            }
        ],
        experiences: [
            {
                company: "AllCars.com",
                location: "Webster, New York, United States",
                type: "Remote",
                time_frame: "2020 - Present",
                title: "Software Engineer / FullStack",
                description: [
                    "Develop a platform for purchasing and selling pre-owned vehicles on the internet. This project involves generating novel functionalities, ensuring smooth operation, resolving issues, and enhancing performance. The technology stack includes Laravel and Vue.js, and the final product will be deployed after completion.",
                    "Skills: Laravel (elastic search), Vue.js / Vuex, Javascript, JQuery, MySql, Bootstrap, Sass/Scss, Envoyer, Wordpress (Sage root), Node.js, Stripe, Twilio, Git, LiquidWeb, Amazon: S3, CentOS"
                ]
            },
            {
                company: "DiegoDev Group, LLC",
                location: "San Diego, California, United States",
                type: "Remote",
                time_frame: "Apr 2019 - Apr 2020",
                title: "Laravel Web Developer",
                description: [
                    "I collaborated with a team to develop an e-commerce website called CarsZoom, utilizing the Laravel framework. Additionally, I was involved in the development of the SDPHP blog website.",
                    "Skills: Laravel, Vue.js, Javascript, JQuery, MySql, Bootstrap"
                ]
            },
            {
                company: "Yondu, Inc.",
                location: "Bonifacio Global City, Taguig, Metro Manila, Philippines",
                type: "Office",
                time_frame: "Sep 2016 - Sep 2018",
                title: "Back End Software Engineer",
                description: [
                    "I was part of a committed team working on the wifi project (Wifi Hotspots) for the client Globe.",
                    "We used the Agile method for development.",
                    "The project was primarily implemented in public areas such as malls, MRT/LRT stations, and airports. My role in the project was as a backend developer for the API.",
                    "Skills: Laravel, Lumen, JQuery, MySql, Bootstrap"
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
                    "Develop their website, created a CMS, Chat App exclusively for company, Some New-to-me Projects like Online Refund System and Exclusive Payment Gateway.",
                    "Skills: PHP, MySql, Javascript, JQuery"
                ]
            }
        ],
        libraries: {
            isLocalhost: function(url) {
                return url.toString().includes('localhost') || url.toString().includes('127.0.0.1');
            },
            safeUrl: function(page) {
                // pdf file eg: resume or any other file
                if (page.includes(".pdf") === true) {
                    return page;
                }
                // production
                if (page == 'index') { return '/' };
                // localhost
                let isLocalhost = this.isLocalhost(window.location);
                if (isLocalhost === true) {
                    return [page, '.html'].join("");
                }

                return page;
            },
            frontPhoto: function (photos) {
                if (photos.length < 1) return '#';

                return photos.filter(photo => typeof photo['front'] != 'undefined' && photo['front'] === true)[0].url;
            },
            getGithubLink: function ({menu}) {
                let menuSocial = menu.social;
                return menuSocial.filter(menu => menu.value == "github" )[0].href;
            },
            getPortfolioDateFromAndTo(portfolio) {
                if (portfolio.date_from == null) return null;

                return [
                    portfolio.date_from,
                    portfolio.date_to
                ].filter(item => item != null).join("&nbsp;&bullet;&nbsp;");
            }
        },
        portfolio_shown: false,
        portfolios: [
            {
                "shown": false,
                "title": "Filechamp.io",
                "slug": "filechamp-io",
                "description": "An online file conversion and optimization tool that makes it easy to convert documents and images to various formats. You can resize images before converting them and process multiple files at once. The platform also allows you to download all your converted files together in a zip archive. With an intuitive interface and a focus on user privacy.",
                "date_from": "09-01-2023",
                "date_to": "present",
                "status": "active",
                "url": "https://filechamp.io/",
                "tech_used": [
                    "Laravel",
                    "Vue.js",
                    "Tailwindcss",
                    "Inertia.js",
                    "Github Actions: CI / CD",
                    "Digital Ocean",
                    "Namecheap"
                ],
                "photos": [
                    {"url": "filechamp.io/front.webp",  "front": true}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Paralanx.com",
                "slug": "paralanx-dot-com",
                "description": "all-in-one website, featuring a diverse range of integrated tools such as paraphraser, grammar fixer, and summarizer, all powered by ChatGPT. Enhance your blogging experience with its custom-built CMS, optimized with GPT technology for seamless blog creation",
                "date_from": "05-01-2023",
                "date_to": "present",
                "status": "active",
                "url": "https://paralanx.com",
                "tech_used": [
                    "Tailwindcss",
                    "Alpine.js",
                    "Laravel",
                    "Livewire",
                    "Hostinger",
                    "OpenAi"
                ],
                "photos": [
                    {"url": "paralanx/front.webp",  "front": true}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Crypto Bot Trader",
                "slug": "crypto-bot-trader",
                "description": "The process of exchanging ERC-20 Tokens (purchasing/selling) depending on the market's condition using a bot strategy, achieved through the utilization of MetaMask and Puppeteer.",
                "date_from": "01-01-2022",
                "date_to": "02-15-2022",
                "status": "active",
                "url": "https://github.com/marcelooblan2016/crypto-bot-trader",
                "tech_used": [
                    "NodeJs",
                    "TypeScript",
                    "Digital Ocean"
                ],
                "photos": [
                    {"url": "crypto-bot-trader/1.jpg",  "front": true}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Monkey Converter",
                "slug": "monkey-converter",
                "description": "An online youtube, facebook & for adult converter.",
                "date_from": "07-01-2020",
                "date_to": "09-01-2020",
                "status": "ongoing",
                "url": null,
                "tech_used": [
                    "Laravel ^7",
                    "PHP 7",
                    "MySQL ^8.0",
                    "Redis",
                    "Html/Html5",
                    "Css/Scss",
                    "Javascript",
                    "jQuery",
                    "Vue.js",
                    "Youtube-dl",
                    "CMS"
                ],
                "photos": [
                    {"url": "monkey-converter/1.jpg"},
                    {"url": "monkey-converter/2.jpg",  "front": true},
                    {"url": "monkey-converter/3.jpg"},
                    {"url": "monkey-converter/4.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "AllCars",
                "slug": "allcars",
                "description": "A platform for purchasing and selling pre-owned vehicles in the online marketplace.",
                "date_from": "08-05-2019",
                "date_to": "present",
                "status": "ongoing",
                "url": "https://cars.allcars.com/search/s",
                "tech_used": [
                    "Laravel ^8",
                    "PHP 8",
                    "MySQL ^8.0",
                    "NoSQL",
                    "Python -Intelligent Image",
                    "Puppeteer",
                    "Docker",
                    "Redis",
                    "Elastic Search",
                    "Html/Html5",
                    "Css/Scss",
                    "Javascript",
                    "jQuery",
                    "Vue.js/Vuex",
                    "Node.js",
                    "Envoyer",
                    "Stripe / Plaid",
                    "CMS",
                    "Active Campaign"
                ],
                "photos": [
                    {"url": "allcars/front.webp", "front": true},
                    {"url": "allcars/2.jpg"},
                    {"url": "allcars/3.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Wild Alert",
                "slug": "wild-alert",
                "description": "A Platform Allows ranger to track wildlife report with geolocation & Identify species. Rangers used their phone to report through mobile app into the server.",
                "date_from": "11-01-2019",
                "date_to": "02-15-2020",
                "status": "active",
                "url": "https://crm.wildalert.ph/",
                "tech_used": [
                    "Laravel 5.8",
                    "PHP 7",
                    "PostgreSQL",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery",
                    "Vue.js",
                    "Leaflet.js",
                    "Restful API",
                    "JWT",
                    "OpenStreetMap",
                    "CMS"
                ],
                "photos": [
                    {"url": "wild-alert/1.jpg", "front": true},
                    {"url": "wild-alert/2.jpg"},
                    {"url": "wild-alert/3.jpg"},
                    {"url": "wild-alert/4.jpg"},
                    {"url": "wild-alert/5.jpg"},
                    {"url": "wild-alert/6.jpg"},
                    {"url": "wild-alert/7.jpg"},
                    {"url": "wild-alert/8.jpg"},
                    {"url": "wild-alert/9.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Tourist Tracker",
                "slug": "tourist-tracker",
                "description": "Tourist Information Management - Collect, View Statistics, Voucher Based Tours",
                "date_from": "2019-03-05",
                "date_to": "2019-04-09",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "Laravel 5.8",
                    "PHP",
                    "MySQL 8.0",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery",
                    "Vue.js",
                    "SPA",
                    "Restful API",
                    "OAuth2",
                    "CMS"
                ],
                "photos": [
                    {"url": "tourist_tracker/1.png", "front": true},
                    {"url": "tourist_tracker/2.png"},
                    {"url": "tourist_tracker/3.png"},
                    {"url": "tourist_tracker/4.png"},
                    {"url": "tourist_tracker/5.png"},
                    {"url": "tourist_tracker/6.png"},
                    {"url": "tourist_tracker/7.png"},
                    {"url": "tourist_tracker/8.png"},
                    {"url": "tourist_tracker/9.png"},
                    {"url": "tourist_tracker/10.png"},
                    {"url": "tourist_tracker/11.png"},
                    {"url": "tourist_tracker/12.png"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "City Tourism Tracker",
                "slug": "city-tourism-tracker",
                "description": "Crm for staff to track records of all local business within the city.",
                "date_from": "2019-01-15",
                "date_to": "2019-01-31",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "Laravel 5.6",
                    "PHP",
                    "MySQL 5.5",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery",
                    "CMS"
                ],
                "photos": [
                    {"url": "city_tourism/1.png", "front": true},
                    {"url": "city_tourism/2.png"},
                    {"url": "city_tourism/3.png"},
                    {"url": "city_tourism/4.png"},
                    {"url": "city_tourism/5.png"},
                    {"url": "city_tourism/6.png"},
                    {"url": "city_tourism/7.png"},
                    {"url": "city_tourism/8.png"},
                    {"url": "city_tourism/9.png"},
                    {"url": "city_tourism/10.png"},
                    {"url": "city_tourism/11.png"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Flow CMS",
                "slug": "flow-cms",
                "description": "Created a cms for a private company that allows them to manage/monitor the work orders.",
                "date_from": "2018-11-01",
                "date_to": "2018-12-01",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "Code Igniter",
                    "PHP",
                    "MySQL",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery",
                    "Vue.js",
                    "CMS"
                ],
                "photos": [
                    {"url": "flow_cms/6.jpg", "front": true},
                    {"url": "flow_cms/1.jpg"},
                    {"url": "flow_cms/2.jpg"},
                    {"url": "flow_cms/3.jpg"},
                    {"url": "flow_cms/4.jpg"},
                    {"url": "flow_cms/5.jpg"},
                    {"url": "flow_cms/7.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Danspira.com",
                "slug": "danspira",
                "description": "Created a parallax wordpress plugin on this site, A portfolio website.",
                "date_from": "2018-08-24",
                "date_to": "2018-09-01",
                "status": "completed",
                "url": "https://danspira.com/",
                "tech_used": [
                    "Wordpress",
                    "PHP",
                    "MySQL",
                    "Elementor",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery"
                ],
                "photos": [
                    {"url": "danspira.com/1.jpg", "front": true},
                    {"url": "danspira.com/2.jpg"},
                    {"url": "danspira.com/3.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Online Shop",
                "slug": "online-shop",
                "description": "an e-commerce for goods/item",
                "date_from": "2018-07-10",
                "date_to": "2018-09-10",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "Laravel",
                    "PHP",
                    "MySQL",
                    "Vue.js",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery",
                    "Paypal"
                ],
                "photos": [
                    {"url": "online_shop/1.jpg", "front": true},
                    {"url": "online_shop/2.jpg"},
                    {"url": "online_shop/3.jpg"},
                    {"url": "online_shop/4.jpg"},
                    {"url": "online_shop/5.jpg"},
                    {"url": "online_shop/6.jpg"},
                    {"url": "online_shop/7.jpg"},
                    {"url": "online_shop/8.jpg"},
                    {"url": "online_shop/9.jpg"},
                    {"url": "online_shop/10.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Morningfetch.com",
                "slug": "morningfetch",
                "description": "A wordpress (mobile responsive) website, create/modify plugins , customized themes. A website that will provide entertainment & knowledge.",
                "date_from": "2018-04",
                "date_to": "2018-05",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "Wordpress",
                    "PHP",
                    "MySQL",
                    "Html",
                    "Css",
                    "Javascript",
                    "jQuery"
                ],
                "photos": [
                    {"url": "morningfetch/2.jpg", "front": true},
                    {"url": "morningfetch/1.jpg"},
                    {"url": "morningfetch/3.jpg"},
                    {"url": "morningfetch/4.jpg"},
                    {"url": "morningfetch/5.jpg"},
                    {"url": "morningfetch/6.jpg"},
                    {"url": "morningfetch/7.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "theAwesomeAgency.com",
                "slug": "the-awesome-agency",
                "description": "A static responsive single page website that provides some information about an agency and their service.",
                "date_from": null,
                "date_to": "2018-05-05",
                "status": "completed",
                "url": "https://theawesomeagency.com/",
                "tech_used": [
                    "Html",
                    "Css",
                    "jQuery"
                ],
                "photos": [
                    {"url": "theawesomeagency/1.jpg", "front": true},
                    {"url": "theawesomeagency/2.jpg"},
                    {"url": "theawesomeagency/3.jpg"},
                    {"url": "theawesomeagency/4.jpg"},
                    {"url": "theawesomeagency/5.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Movie Download Site",
                "slug": "movie-download-site",
                "description": "I renamed the site for the anonimity of the client as it's in the gray area, every transaction made in bitcoin. I use laravel 5.4 here, it has a cms site, it generate links that may earn bitcoin via traffic.",
                "date_from": null,
                "date_to": "2018-01-01",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "Laravel",
                    "PHP",
                    "MySQL",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "Html"
                ],
                "photos": [
                    {"url": "movie_download_site/1.jpg", "front": true},
                    {"url": "movie_download_site/2.jpg"},
                    {"url": "movie_download_site/3.jpg"},
                    {"url": "movie_download_site/4.jpg"},
                    {"url": "movie_download_site/5.jpg"},
                    {"url": "movie_download_site/6.jpg"},
                    {"url": "movie_download_site/7.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Project Wifi",
                "slug": "project-wifi",
                "description": "A Platform, Captive Portal for Konekt,Gowifi. It gives internet to the user(s) via wifi hotspot. They are usually installed in malls, mrt station(s), airport or any public place for public use.",
                "date_from": null,
                "date_to": "2016-09-05",
                "status": "active",
                "url": null,
                "tech_used": [
                    "Laravel/Lumen",
                    "PHP",
                    "MySQL"
                ],
                "photos": [
                    {"url": "gowifi/1.png", "front": true}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "IPP Payment gateway",
                "slug": "ipp-payment-gateway",
                "description": "Payment Gateway that allow(s) online merchant to transfer the payment from their customer to their bank account(s). It involves Accounting System, CRM for Merchant(s) , CRM for Staff(s) , XMLAPI - (Integrated in JETPAY | TRUSTSPAY PROCESSOR)",
                "date_from": null,
                "date_to": "2016-05-24",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "PHP",
                    "MySQL",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "NMI"
                ],
                "photos": [
                    {"url": "ipp_gateway/front.jpg", "front": true},
                    {"url": "ipp_gateway/1.jpg"},
                    {"url": "ipp_gateway/2.jpg"},
                    {"url": "ipp_gateway/3.jpg"},
                    {"url": "ipp_gateway/4.jpg"},
                    {"url": "ipp_gateway/5.jpg"},
                    {"url": "ipp_gateway/6.jpg"},
                    {"url": "ipp_gateway/7.jpg"},
                    {"url": "ipp_gateway/8.jpg"},
                    {"url": "ipp_gateway/9.jpg"},
                    {"url": "ipp_gateway/10.jpg"},
                    {"url": "ipp_gateway/11.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "PWEBEX - Pluto Web Explorer",
                "slug": "pwebex",
                "description": "Webbased FTP without ftp account(s). Where you can upload,rename, download , delete file & delete, rename, remove directory in your ftp host/server.",
                "date_from": null,
                "date_to": "2015-06-07",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "PHP",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "Html"
                ],
                "photos": [
                    {"url": "pwebex/front.jpg", "front": true},
                    {"url": "pwebex/2.jpg"},
                    {"url": "pwebex/3.jpg"},
                    {"url": "pwebex/4.jpg"},
                    {"url": "pwebex/5.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "MLG Tours & Travel",
                "slug": "mlg-tours-and-travel",
                "description": "A Travel & Tours (Modified Wordpress theme). It has a cart system with integrated Paypal payment.",
                "date_from": null,
                "date_to": "2016-01-05",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "PHP",
                    "MySQL",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "Html"
                ],
                "photos": [
                    {"url": "mlgtours/front.jpg", "front": true},
                    {"url": "mlgtours/1.jpg"},
                    {"url": "mlgtours/2.jpg"},
                    {"url": "mlgtours/3.jpg"},
                    {"url": "mlgtours/4.jpg"},
                    {"url": "mlgtours/5.jpg"},
                    {"url": "mlgtours/6.jpg"},
                    {"url": "mlgtours/7.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "Citadel Bed & Breakfast",
                "slug": "citadel-bed-and-breakfast",
                "description": "A Bed & Breakfast where information about the institution is shown.Customer can also reserve a room in realtime as it has a online reservation system with cart & the administrator can manage everything about his room(s). Payment is integrated via Paypal & Migs Payment gateway.",
                "date_from": null,
                "date_to": "2013-01-07",
                "status": "active",
                "url": null,
                "tech_used": [
                    "PHP",
                    "MySQL",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "Html",
                    "Paypal"
                ],
                "photos": [
                    {"url": "citadel/front.jpg", "front": true},
                    {"url": "citadel/1.jpg"},
                    {"url": "citadel/2.jpg"},
                    {"url": "citadel/3.jpg"},
                    {"url": "citadel/4.jpg"},
                    {"url": "citadel/5.jpg"},
                    {"url": "citadel/6.jpg"},
                    {"url": "citadel/7.jpg"},
                    {"url": "citadel/8.jpg"},
                    {"url": "citadel/9.jpg"},
                    {"url": "citadel/10.jpg"},
                    {"url": "citadel/11.jpg"},
                    {"url": "citadel/12.jpg"},
                    {"url": "citadel/13.jpg"},
                    {"url": "citadel/14.jpg"},
                    {"url": "citadel/15.jpg"},
                    {"url": "citadel/16.jpg"},
                    {"url": "citadel/17.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "IPP Chat",
                "slug": "ipp-chat",
                "description": "Chat with user(s) depending on their AccountType, Join group and chat with them.",
                "date_from": null,
                "date_to": "2015-07-21",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "PHP",
                    "MySQL",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "Html"
                ],
                "photos": [
                    {"url": "ippchat/front.jpg", "front": true},
                    {"url": "ippchat/1.jpg"},
                    {"url": "ippchat/2.jpg"},
                    {"url": "ippchat/3.jpg"},
                    {"url": "ippchat/4.jpg"},
                    {"url": "ippchat/5.jpg"},
                    {"url": "ippchat/6.jpg"},
                    {"url": "ippchat/7.jpg"},
                    {"url": "ippchat/8.jpg"},
                    {"url": "ippchat/9.jpg"},
                    {"url": "ippchat/10.jpg"},
                    {"url": "ippchat/11.jpg"},
                    {"url": "ippchat/12.jpg"},
                    {"url": "ippchat/13.jpg"},
                    {"url": "ippchat/14.jpg"},
                    {"url": "ippchat/15.jpg"},
                    {"url": "ippchat/16.jpg"},
                    {"url": "ippchat/17.jpg"}
                ],
                "order": null,
                "is_display": true
            },
            {
                "shown": false,
                "title": "iCAN4Consumers",
                "slug": "ican4consumers",
                "description": "Online Refund, It allow(s) registered merchant's customer to have a refund by using iCan4consumers. Consumer will be able to send a request of refund depending on their merchant's payment gateway.",
                "date_from": null,
                "date_to": "2013-01-15",
                "status": "completed",
                "url": null,
                "tech_used": [
                    "PHP",
                    "MySQL",
                    "jQuery",
                    "Javascript",
                    "Css",
                    "Html",
                    "NMI"
                ],
                "photos": [
                    {"url": "ican/front.jpg", "front": true},
                    {"url": "ican/1.jpg"},
                    {"url": "ican/2.jpg"},
                    {"url": "ican/3.jpg"},
                    {"url": "ican/4.jpg"},
                    {"url": "ican/5.jpg"},
                    {"url": "ican/6.jpg"}
                ],
                "order": null,
                "is_display": true
            }
        ]
    };
}

/* Load Event */
(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);
/* Equivalent of jquery $(document).ready */
docReady(function() {
    /* Slowly open content with opacity effect */
    setTimeout(function () {
        document.getElementById('modal-init').classList.add('loaded');
        setTimeout(function () {
            document.getElementById('modal-init').remove();
        }, 700);
    }, 100);
});
