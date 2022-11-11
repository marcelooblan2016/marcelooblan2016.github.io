function xData() {
    return {
        pageLoaded: true,
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
                {text: "Portfolio", href: "portfolio"},
                // {text: "Contact Me", href: "contact-me"},
            ],
            is_open: false,
            social: [
                {text: 'Github', value: 'github', icon: 'fa fa-github', href: 'https://github.com/marcelooblan2016'},
                {text: 'Facebook', value: 'facebook', icon: 'fa fa-facebook', href: 'https://www.facebook.com/Mr.AllTimeHigh'},
                {text: 'Instagram', value: 'instagram', icon: 'fa fa-instagram', href: 'https://www.instagram.com/marxoblan/'},
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
                    "PHP : Core PHP, Laravel (elastic search, redis), Laravel Nova, Lumen, Code Igniter, Python",
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
                "title": "Crypto Bot Trader",
                "slug": "crypto-bot-trader",
                "description": "swapping of ERC-20 Tokens (buy/sell) based on the market health with bot strategy (condition) - by utilizing MetaMask & Puppeteer (polygon network)",
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
                "description": "An e-commerce for Cars which allow users to buy & sell used cars. It scrapes data from its multiple known source & organized them accordingly.",
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
                    "Dom Crawler",
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
                    {"url": "allcars/1.jpg", "front": true},
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
                "url": "",
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
window.onload = function () {
    /* Slowly open content with opacity effect */
    document.getElementById('modal-init').classList.add('loaded');
    setTimeout(function () {
        document.getElementById('modal-init').remove();
    }, 700);
}