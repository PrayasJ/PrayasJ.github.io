import self from "../img/self.png"
import rainbowDash from "../img/rainbow-dash.png"
import dataToolBelt from "../img/dataToolBelt.png"
import mvs from "../img/mvs.png"
import blinded from "../img/blinded.png"
import greenable from "../img/greenable.png"
import bwvn from "../img/bwvn.png"

//Import Blogs
import week1 from '../blogs/GSoC - Week 1.md'
import week2_3 from '../blogs/GSoC - Week 2-3.md'
import week4_5 from '../blogs/GSoC - Week 4-5.md'
import week6 from '../blogs/GSoC - Week 6.md'
import node_pkg from '../blogs/Creating Node.js packages.md'
import week7_8 from '../blogs/GSoC - Week 7-8.md'
import week9_10 from '../blogs/GSoC - Week 9-10.md'
import week11_12 from '../blogs/GSoC - Week 11-12.md'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["#ff83d7", "#ff9797"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Prayas",
    lastName: "Jain",
    initials: "Prayas", // the example uses first and last, but feel free to use three or more if you like.
    position: ["a Full Stack Developer", 1000, "a Game Developer", 1000, "Sleepy", 2000],
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🇮🇳',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at Imarticus"
        },
        {
            emoji: "📩",
            text: "prayas.jn24@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/_.prayas._/",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/PrayasJ",
            icon: "fa fa-github"
        },
        {
            link: "https://linkedin.com/in/prayasj/",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://codechef.com/users/percy_x",
            icon: "fa fa-code"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hey! I am Prayas. I am currently an Undergraduate at Delhi University and working as a Full Stack Developer at Imarticus. I love to watch anime and TV Shows.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'nodejs', 'html5', 'css3', 'python', 'Godot', 'Unity', 'Selenium', 'FFmpeg', 'C/C++'],
            exposedTo: ['R', 'angularjs', 'nginx', 'apache', 'figma', 'Adobe XD', 'Blender']
        }
    ,
    hobbies: [
        {
            label: 'Anime',
            emoji: '🌸'
        },
        {
            label: 'Games',
            emoji: '🎮'
        },
        {
            label: 'Shows and Movies',
            emoji: '🎥'
        },
        {
            label: 'Sleeping',
            emoji: '😴'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "DataToolBelt",
            live: "https://drive.google.com/file/d/1hZCyM2HTpcdCrR7dyNde66Zu9uo76uUQ/view?usp=sharing", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/veb7vmehra/DataToolBelt", // this should be a link to the **repository** of the project, where the code is hosted.
            image: dataToolBelt
        },
        {
            title: "Rainbow Dash",
            live: "https://percyx.itch.io/rainbow-dash",
            //source: "https://github.com/paytonjewell",
            image: rainbowDash
        },
        {
            title: "MyVirtualStream",
            live: "https://drive.google.com/file/d/1zyMI9JaOi4W_ennCHtPcRsrBdkFrkn8f/view?usp=sharing",
            //source: "https://github.com/paytonjewell",
            image: mvs
        },
        {
            title: "Blinded",
            live: "https://drive.google.com/file/d/1F5iAgaruyq3_5J9_6ugMVVmD4rDYUXPU/view?usp=sharing",
            //source: "https://github.com/paytonjewell",
            image: blinded
        },
        {
            title: "Greenable",
            live: "https://drive.google.com/file/d/1pP-xzrS43DePO-Hj5r0vqoJ_C37NWrFP/view?usp=sharing",
            //source: "https://github.com/paytonjewell",
            image: greenable
        },
        {
            title: "Bouncy Walls Vs Ninja",
            live: "https://drive.google.com/file/d/1ij2WKLJ67rh6uvSPmytjzUIeqBIX9hjU/view?usp=sharing",
            image: bwvn
        }
    ],
    education: [
        {
            title: 'Bachelor of Technology (B.Tech), ITMI',
            place: 'University Of Delhi',
            completion: '2023',
            grade: '9.05/10'
        },
        {
            title: 'Senior Secondary (XII), Science',
            place: 'DLF Public School',
            completion: '2019',
            grade: '84.00%'
        },
    ],
    experience: [
        {
            title: 'Intern',
            place: 'GeeksForGeeks',
            duration: 'Dec 2019 - May 2020',
            desc: 'Content writing focused over multiple areas of graphical programming. Mostly revolving around the common topic of fractals and optimized methods to make them.',
        },
        {
            title: 'Full Stack Developer',
            place: 'Dev-up',
            duration: 'Feb 2020 - May 2020',
            desc: 'DevUp is an In-house tech team quality development, at the price and time of no-code platforms.',
        },
        {
            title: 'Game Development Intern',
            place: 'Codecrust',
            duration: 'Sep 2021 - Dec 2021',
            desc: 'CodeCrust is a Game development company specializing in Multiplayer Mobile and HTML5 game development.',
        },
        {
            title: 'Student Developer - Weecology',
            place: 'Google Summer of Code',
            duration: 'May 2022 - Present',
            desc: 'The aim of this project is to make the currently running forecasting system capable of parallelization. ',
        },
        {
            title: 'Full Stack Developer',
            place: 'Imarticus Learning',
            duration: 'Jun 2022 - Present',
            desc: 'Accessible through the Imarticus Learning mobile app for iOS and Android as well as the website, Pegasus supports classes and assessment schedules for multiple time zones.',
        }
    ],
    blogs: [
        {
            title: 'Selection to GSoC',
            md: week1,
            date: 'May 22, 2022'
        },
        {
            title: 'Understanding Portal Project',
            md: week2_3,
            date: 'June 13, 2022'
        },
        {
            title: 'Parallel Processing in R',
            md: week4_5,
            date: 'June 25, 2022'
        },
        {
            title: 'Parallel Casting Function',
            md: week6,
            date: 'July 2, 2022'
        },
        {
            title: 'Creating Node.js Packages',
            md: node_pkg,
            date: 'July 11, 2022'
        },
        {
            title: 'Add Windows Support',
            md: week7_8,
            date: 'July 16, 2022'
        },
        {
            title: 'Testing the Project\'s Performance',
            md: week9_10,
            date: 'August 5, 2022'
        },
        {
            title: 'Adding Documentation',
            md: week11_12,
            date: 'August 18, 2022'
        }
    ]
}