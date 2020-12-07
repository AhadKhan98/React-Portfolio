import ovt1 from '../../assets/projects/ovt1.PNG';
import sbs1 from '../../assets/projects/sbs1.PNG';
import mda1 from '../../assets/projects/mda1.PNG';
import iupui from '../../assets/iupui.png';
import ttm1 from '../../assets/projects/ttm1.PNG';
import insta2 from '../../assets/projects/insta2.PNG';
import sp1 from '../../assets/projects/sp1.PNG';
import cn1 from '../../assets/projects/cn1.png';
import rb1 from '../../assets/projects/rb1.jpg';
import flyrics from '../../assets/projects/flyrics.png';
import createit from '../../assets/projects/createit.png';
import censei from '../../assets/projects/censei.png';


export const projects = [
    {
        title: `Censei - Chrome Extension`,
        image: censei,
        sourceCodeLink: 'https://github.com/MLH-Fellowship/Censei',
        description: `A simple chrome extension that detects explicit words in webpages and replaces them with emojis.`,
        type: '',
        technologies: ['Python', 'JavaScript', 'Flask', 'HTML', 'Docker'],
    },
    {
        title: `Flyrics - Lyrics On The Fly`,
        image: flyrics,
        sourceCodeLink: 'https://github.com/AhadKhan98/Flyrics',
        description: `Flyrics is a mobile app that allows users to record a snippet of a song and using Artificial Intelligence and Machine Learning, it generates the lyrics to the song.`,
        type: '',
        technologies: ['React Native', 'JavaScript', 'Python', 'Flask', 'Tensorflow'],
    },
    {
        title: `CreateIt - Auto Repo Creator`,
        image: createit,
        sourceCodeLink: 'https://github.com/AhadKhan98/Create.It',
        description: `CreateIt is a command-line interface that automatically creates a repository on git version control sites such as Github and Bitbucket.`,
        type: '',
        technologies: ['Python', 'Click', 'Github API', 'Bitbucket API'],
    },
    {
        title: 'Connectify - Study Rooms',
        image: cn1,
        sourceCodeLink: 'https://github.com/ahadkhan98/Connectify',
        description: `Connectify is built on the idea to decrease isolation and provide the users with the option to study together based on their preferences. The web app creates a real time chat room where the matched users can chat with each other and set goals that they can tick off.`,
        type: '',
        technologies: ['JavaScript', 'ExpressJS', 'Node.js', 'Socket.io', 'Firebase', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
        title: `Ruby's Adventures - Unity 3D Game`,
        image: rb1,
        sourceCodeLink: 'https://github.com/AhadKhan98/Rubys-Adventures',
        description: `Ruby's Adventures is essentially a 2-in-one game with a pac-mac like minigame and an endless runner. However, there are twists to the minigames. Ruby can shoot obstacles and kill robots in order to find her way to the end goal.`,
        type: '',
        technologies: ['Unity 3D', 'C#'],
    },
    {
        title: 'Spotify Clone',
        image: sp1,
        sourceCodeLink: 'https://github.com/AhadKhan98/Spotify-Clone-ReactJS',
        description: `A clone of the popular music streaming service Spotify. This application allows users to login using their Spotify account and view their playlists, or play songs to a connected device. `,
        type: '',
        technologies: ['JavaScript', 'React', 'Context API', 'Spotify API', 'Firebase',],
    },
    {
        title: 'Instagram Clone',
        image: insta2,
        sourceCodeLink: 'https://github.com/AhadKhan98/Instagram-Clone-ReactJS',
        description: `A clone of the popular social media service Instagram. This application allows users to sign up and create image posts which other user's can comment on. All of the data is displayed in real-time using Firebase. `,
        type: '',
        technologies: ['JavaScript', 'React', 'Context API', 'Firebase',],
    },
    {
        title: 'Tracy Training Web Application',
        image: ttm1,
        sourceCodeLink: 'https://github.com/AhadKhan98/Tracy-Training-Modules-WebApp',
        description: `A web application made for the Berea College - Labor Program Office. Provides training resources on Berea College's time keeping system "Tracy". Contains quiz modules to test user's knowledge. 
        Upon completion of all the sections, a certificate is generated with the registered user's name.`,
        type: '',
        technologies: ['Python', 'Django', 'Bootstrap', 'User Auth',],
    },
    {
        title: 'Disease Diagnosis Automation',
        image: iupui,
        sourceCodeLink: 'https://github.com/AhadKhan98/Disease-Diagnosis-Automation',
        description: `A project for my sumer 2019 internship as a Software Engineer at the Indiana University-Purdue University: School of Dentistry. Automates the diagnosis of three diseases (Diabetes, Gingivitis, Periodontitis) using patients' electronic dental data.`,
        type: '',
        technologies: ['Python', 'Natural Language Processing', 'Data Analysis', 'Pandas', 'String Matching'],
    },
    {
        title: 'Motion Detection Alarm',
        image: mda1,
        sourceCodeLink: 'https://github.com/AhadKhan98/Motion-Detection-Alarm',
        description: `This program monitors motion using the user's webcam.Depending on the sensitivity(which can be set) the program sounds an alarm and displays a message when a certain amount of motion is detected.After closing the program, an html file is generated which contains a graph of the times the object entered the frame and left.`,
        type: '',
        technologies: ['Python', 'OpenCV', 'Pandas', 'Threading', 'Bokeh'],
    },
]
