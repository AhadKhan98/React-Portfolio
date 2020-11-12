import ovt1 from '../../assets/projects/ovt1.PNG';
import sbs1 from '../../assets/projects/sbs1.PNG';
import mda1 from '../../assets/projects/mda1.PNG';
import mda2 from '../../assets/projects/mda2.PNG';
import iupui from '../../assets/iupui.png';
import ttm1 from '../../assets/projects/ttm1.PNG';
import ttm2 from '../../assets/projects/ttm2.PNG';
import ttm3 from '../../assets/projects/ttm3.PNG';
import ttm4 from '../../assets/projects/ttm4.PNG';
import insta1 from '../../assets/projects/insta1.PNG';
import insta2 from '../../assets/projects/insta2.PNG';
import insta3 from '../../assets/projects/insta3.PNG';
import sp1 from '../../assets/projects/sp1.PNG';
import sp2 from '../../assets/projects/sp2.PNG';
import cn1 from '../../assets/projects/cn1.png';
import cn2 from '../../assets/projects/cn2.PNG';
import cn3 from '../../assets/projects/cn3.PNG';
import cn4 from '../../assets/projects/cn4.PNG';
import rb1 from '../../assets/projects/rb1.jpg';
import rb2 from '../../assets/projects/rb2.jpg';
import rb3 from '../../assets/projects/rb3.jpg';
import fl1 from '../../assets/projects/fl1.jpg';
import fl2 from '../../assets/projects/fl2.jpg';
import fl3 from '../../assets/projects/fl3.jpg';
import fl4 from '../../assets/projects/fl4.jpg';
import fl5 from '../../assets/projects/fl5.jpg';


export const projects = [
    {
        title: `Flyrics`,
        images: [
            fl1,
            fl2,
            fl3,
            fl4,
            fl5,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Flyrics',
        description: `Flyrics is a mobile app that allows users to record a snippet of a song and using Artificial Intelligence and Machine Learning, it generates the lyrics to the song.`,
        type: '',
        technologies: ['React Native', 'JavaScript', 'Python', 'Flask', 'Tensorflow'],
    },
    {
        title: `Ruby's Adventures - Unity 3D Game`,
        images: [
            rb1,
            rb2,
            rb3,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Rubys-Adventures',
        description: `Ruby's Adventures is essentially a 2-in-one game with a pac-mac like minigame and an endless runner. However, there are twists to the minigames. Ruby can shoot obstacles and kill robots in order to find her way to the end goal.`,
        type: '',
        technologies: ['Unity 3D', 'C#'],
    },
    {
        title: 'Connectify - Study Rooms',
        images: [
            cn1,
            cn2,
            cn3,
            cn4,
        ],
        sourceCodeLink: 'https://github.com/ahadkhan98/Connectify',
        description: `Connectify is built on the idea to decrease isolation and provide the users with the option to study together based on their preferences. The web app creates a real time chat room where the matched users can chat with each other and set goals that they can tick off.`,
        type: '',
        technologies: ['JavaScript', 'ExpressJS', 'Node.js', 'Socket.io', 'Firebase', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
        title: 'Spotify Clone',
        images: [
            sp1,
            sp2,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Spotify-Clone-ReactJS',
        description: `A clone of the popular music streaming service Spotify. This application allows users to login using their Spotify account and view their playlists, or play songs to a connected device. `,
        type: '',
        technologies: ['JavaScript', 'React', 'Context API', 'Spotify API', 'Firebase',],
    },
    {
        title: 'Instagram Clone',
        images: [
            insta1,
            insta2,
            insta3,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Instagram-Clone-ReactJS',
        description: `A clone of the popular social media service Instagram. This application allows users to sign up and create image posts which other user's can comment on. All of the data is displayed in real-time using Firebase. `,
        type: '',
        technologies: ['JavaScript', 'React', 'Context API', 'Firebase',],
    },
    {
        title: 'Tracy Training Web Application',
        images: [
            ttm1,
            ttm2,
            ttm3,
            ttm4,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Tracy-Training-Modules-WebApp',
        description: `A web application made for the Berea College - Labor Program Office. Provides training resources on Berea College's time keeping system "Tracy". Contains quiz modules to test user's knowledge. 
        Upon completion of all the sections, a certificate is generated with the registered user's name.`,
        type: '',
        technologies: ['Python', 'Django', 'Bootstrap', 'User Auth',],
    },
    {
        title: 'Disease Diagnosis Automation',
        images: [
            iupui,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Disease-Diagnosis-Automation',
        description: `A project for my sumer 2019 internship as a Software Engineer at the Indiana University-Purdue University: School of Dentistry. Automates the diagnosis of three diseases (Diabetes, Gingivitis, Periodontitis) using patients' electronic dental data.`,
        type: '',
        technologies: ['Python', 'Natural Language Processing', 'Data Analysis', 'Pandas', 'String Matching'],
    },
    {
        title: 'Motion Detection Alarm',
        images: [
            mda1,
            mda2,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Motion-Detection-Alarm',
        description: `This program monitors motion using the user's webcam.Depending on the sensitivity(which can be set) the program sounds an alarm and displays a message when a certain amount of motion is detected.After closing the program, an html file is generated which contains a graph of the times the object entered the frame and left.`,
        type: '',
        technologies: ['Python', 'OpenCV', 'Pandas', 'Threading', 'Bokeh'],
    },
    {
        title: 'Simple Book Store',
        images: [
            sbs1,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Simple-Book-Store',
        description: 'A program that stores book information in a database and allows data retrieval, modification and addition. The books are stored in the format: Title, Author, Year, ISBN and are stored in a SQLite database.',
        type: '',
        technologies: ['Python', 'Tkinter', 'SQLite3'],
    },
    {
        title: 'Visit Tracking Software',
        images: [
            ovt1,
        ],
        sourceCodeLink: 'https://github.com/AhadKhan98/Office-Visit-Tracking',
        description: "Software made for the Berea College's Labor Program Office. Allows employees to enter visitor information and save it to the cloud storage with one click.",
        type: '',
        technologies: ['Python', 'Tkinter', 'Smartsheet API'],
    }
]
