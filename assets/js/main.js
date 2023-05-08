const menu = document.getElementById("nav-list");
const main = document.getElementById("main");
const upBtn = document.getElementById('up-btn');
const eduBtn = document.getElementById("educ-btn");
const workBtn = document.getElementById("work-btn");
const webBtn = document.getElementById("web-btn");
const appBtn = document.getElementById("app-btn");
const eduContainer = document.getElementById("educ-container");
const workContainer = document.getElementById("work-container");
const aboutContainer = document.getElementById("about");
const skillsContainer = document.getElementById("skills");
const frontEndContainer = document.getElementById("front-end");
const backEndContainer = document.getElementById("back-end");
const AppDevContainer = document.getElementById("app-dev");
const devOpsContainer = document.getElementById("dev-ops");
const projectGrid = document.getElementById("project-grid");
const skillsImages = document.getElementById("skills-images");
const webdevContainer = document.getElementById("web-dev-projects");
const appdevContainer = document.getElementById("app-dev-projects");

function log(params) {
    console.log(params);
}
function kPrettyPrint(params) {
    console.log(JSON.stringify(params, null, 4));
}

function menuBtnFunction() {
    if (document.getElementsByTagName('html')[0].offsetWidth < 992) {
        document.getElementsByClassName('menu-btn-1')[0].classList.toggle("active");
        menu.classList.toggle("tog-h");
        main.classList.toggle("d-none");
    }
}

var showupBtn = true

const upBtnListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= 200) {
        if (upBtn.classList.contains('d-none')) {
            upBtn.classList.remove('d-none');
        }
    } else {
        if (upBtn.classList.contains('d-none') === false) {
            upBtn.classList.toggle('d-none');
        }
    }
}
);

upBtn.onclick = () => {
    document.documentElement.scrollTop = 0;
}

function scrollToFunc(id) {
    document.documentElement.scrollTop = document.getElementById(id).offsetTop
}

function toggleQual() {
    eduBtn.classList.toggle("active");
    workBtn.classList.toggle("active");
    eduContainer.classList.toggle("d-none");
    workContainer.classList.toggle("d-none");
}

// ADD SKILLS

const frontEnd = [
    {
        name: "HTML",
        level: 90,
        color: "#e34c26"
    },
    {
        name: "CSS",
        level: 95,
        color: "#264de4"
    },
    {
        name: "JavaScript",
        level: 85,
        color: "#f0db4f"
    },
    {
        name: "Typescript",
        level: 70,
        color: "#0081cb"
    },
    {
        name: "React",
        level: 80,
        color: "#61dafb"
    },
    {
        name: "Bootstrap",
        level: 90,
        color: "#563d7c"
    },
    {
        name: "Tailwind",
        level: 80,
        color: "#38b2ac"
    },
]
const backEnd = [
    {
        name: "Django",
        level: 90,
        color: "#092e20"
    },
    {
        name: "Express_JS",
        level: 80,
        color: "#339933"
    },
    {
        name: "Flask",
        level: 80,
        color: "#339933"
    },
];
const AppDeveloper = [
    {
        name: "Flutter",
        level: 80,
        color: "#02569b"
    },
    {
        name: "React_Native",
        level: 90,
        color: "#61dafb"
    },
];
const devOps = [
    {
        name: "AWS",
        level: 80,
        color: "#232f3e"
    },
    {
        name: "Heroku",
        level: 90,
        color: "#0db7ed"
    },
    {
        name: "Cloudflare",
        level: 100,
        color: "#326ce5"
    },
    {
        name: "GIT",
        level: 80,
        color: "#d24939"
    },
]

const attachSkills = (parentElement, data) => {
    data.forEach((skill) => {
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("skill");
        const name = (`${skill.name}`).replace("_", " ");
        skillDiv.innerHTML = `
            <div class="skill-item">
                <div class="between">
                    <div class="left">
                        <h6>${name}</h6>
                    </div>
                    <div class="right">
                        <h6 for="${skill.name}" class="title">${skill.level}%</h6>
                    </div>
                </div>
                <progress id="${skill.name}" class="w-100" data-value="${skill.level}" value="0" max="100"></progress>
            </div>
        `
        parentElement.appendChild(skillDiv);
    });
}

attachSkills(frontEndContainer, frontEnd);
attachSkills(backEndContainer, backEnd);
attachSkills(AppDevContainer, AppDeveloper);
attachSkills(devOpsContainer, devOps);

// ADD Skills
// ADD Skills images
const skills_images = [
    {
        name: 'C',
        url: './assets/img/logos/C.png'
    },
    {
        name: 'C++',
        url: './assets/img/logos/C++.png'
    },
    {
        name: 'Javascript',
        url: './assets/img/logos/Javascript.png'
    },
    {
        name: 'Python',
        url: './assets/img/logos/Python.png'
    },
    {
        name: 'Dart',
        url: './assets/img/logos/Dart.png'
    },
    {
        name: 'Typescript',
        url: './assets/img/logos/Typescript.png'
    },
    {
        name: 'HTML',
        url: './assets/img/logos/HTML.svg'
    },
    {
        name: 'CSS',
        url: './assets/img/logos/CSS.png'
    },
    {
        name: 'Bootstrap',
        url: './assets/img/logos/Bootstrap.png'
    },
    {
        name: 'Tailwind',
        url: './assets/img/logos/Tailwind.png'
    },
    {
        name: 'React',
        url: './assets/img/logos/React.png'
    },
    {
        name: 'Django',
        url: './assets/img/logos/Django.png'
    },
    {
        name: 'Flask',
        url: './assets/img/logos/Flask.png'
    },
    {
        name: 'Expressjs',
        url: './assets/img/logos/Expressjs.png'
    },
    {
        name: 'Firebase',
        url: './assets/img/logos/Firebase.png'
    },
    {
        name: 'Flutter',
        url: './assets/img/logos/Flutter.jpg'
    },
    {
        name: 'React Native',
        url: './assets/img/logos/React-Native.png'
    },
    {
        name: 'Git',
        url: './assets/img/logos/Git.png'
    },
    {
        name: 'GitHub',
        url: './assets/img/logos/GitHub.png'
    },
    {
        name: 'Gitlab',
        url: './assets/img/logos/Gitlab.png'
    },
    {
        name: 'Bitbucket',
        url: './assets/img/logos/Bitbucket.png'
    },
    {
        name: 'Heroku',
        url: './assets/img/logos/Heroku.png'
    },
    {
        name: 'AWS',
        url: './assets/img/logos/aws.png'
    },
    {
        name: 'Cloudflare',
        url: './assets/img/logos/Cloudflare.png'
    },
    {
        name: 'Termux',
        url: './assets/img/logos/Termux.png'
    },
]

// skills_images.map((skill) => {
//     const div = document.createElement("div");
//     div.className = "col-3 my-2 mx-2 d-flex bg-success justify-content-center align-items-center";
//     div.innerHTML = `
//         <img class="w-100" src="${skill.url}" alt="${skill.name}" />
//     `
//     skillsImages.appendChild(div);
// })

// Animate Progress & Counter

var animateProgress = true;
var animateSkills = true;

const progressAnimationListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= (skillsContainer.offsetTop - 300)) {
        if (animateProgress) {
            animateProgressF();
            animateProgress = false;
            clearInterval(progressAnimationListener);
        }
    }
});

const aboutAnimationListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= (aboutContainer.offsetTop - 300)) {
        if (animateSkills) {
            animateSkillsF();
            animateSkills = false;
            clearInterval(aboutAnimationListener);
        }
    }
});

function animateProgressF() {
    const progress = document.getElementById('skills').querySelectorAll('progress');

    progress.forEach((progress) => {

        const _PRG = document.getElementById(progress.id), _OUT = document.querySelector(`[for=${progress.id}]`), K = 2, TMAX = K * _PRG.getAttribute('data-value');
        function load(t = 0) {
            if (t <= TMAX) {
                if (t % K === 0) {
                    _OUT.innerHTML = `${t / K}%`;
                    _PRG.value = t / K;
                }
                requestAnimationFrame(load.bind(this, t + 1));
            }
        }
        load();
    })
}
function animateSkillsF() {
    const elements = document.getElementById('about').querySelectorAll('.blockHero');
    elements.forEach((obj) => {
        counterAnim(obj, 0, parseInt(obj.getAttribute('data-value')), obj.getAttribute('data-duration') ?? 1000);
    })
}

const counterAnim = (element, start = 0, end, duration = 1000) => {
    const target = element;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Animate Progress & Counter

// My Gems

const pms_title = `Made to keep track of the placement process, by ensuring proper communication between the placement coordinators and placement cell.`;
const pms_des = `
        Placements are crucial for job aspirants, and so is placement management. In the digital era, one can tremendously improve the efficiency and quality of tasks by working out a strategy that involves the perfect concoction of harnessing the best out of technology and human brains. When there are 180+ companies coming for campus placements it is difficult to keep track of the status of the company. Whenever a company comes to our campus for recruitment there are a set of steps that are to be followed, but when the no. of companies become large enough it becomes difficult to manage, moreover there should be proper communication between the Placement Cell and the Placement Coordinators. When we look closely on this problem we  get to know placement coordination is mostly a repetitive process and this process can be shifted from manual to semi-automatic this will not only boost the productivity of the placement cell and the coordinators as well but will also save time and energy that can be utilized to work on different matters.
        <br>
        <br>
        This Placement Management website helps to combat all of these problems, here is a quick description of the project.
            <ol>
                <li> There are two types of accounts, one is for the Placement cell and the other one is for the Placement Coordinators. 
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/1.webp" alt="There are two types of accounts, one is for the Placement cell and the other one is for the Placement Coordinators. " />
                </li>
                <li> 
                    This is admin dashboard where you can see statistics of companies, placement coordinators and tasks (that are assigned by the placement cell to the coordinators)
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/2.webp" alt="This is admin dashboard where you can see statistics of companies, placement coordinators and tasks (that are assigned by the placement cell to the coordinators)" />
                </li>
                <li> 
                    This is download tab where the admin can download current database of the companies, placement coordinators, tasks and point of contacts in .csv format.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/3.webp" alt="This is download tab where the admin can download current database of the companies, placement coordinators, tasks and point of contacts in .csv format." />
                </li>
                <li> 
                    Here the admin can add a placement coordinator. Once a coordinator is created the coordinator will receive notifications (when enabled) and emails for the status of the assigned company.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/4.webp" alt="Here the admin can add a placement coordinator. Once a coordinator is created the coordinator will receive notifications (when enabled) and emails for the status of the assigned company." />
                </li>
                <li> 
                    Here the admin can add a company. On the right hand side there is a section which will show the admin if the same company is already present or not so that the admin can change the naming convention (Sometimes a company comes to the campus twice).
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/5.webp" alt="Here the admin can add a company. On the right hand side there is a section which will tell the admin if the same company is already present or not so that the admin can change the naming convention (Sometimes a company comes to the campus twice)." />
                </li>
                <li> 
                    Send notification tab, The admin can send push notifications to the admin devices and placement coordinators who have their push notifications enabled. There is also a section which shows the placement coordinators who have not enabled (or disabled) their push notifications.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/6.webp" alt="Send notification tab, The admin can send push notifications to the admin devices and placement coordinators who have their push notifications enabled. There is also a section which shows the placement coordinators who have not enabled (or disabled) their push notifications." />
                </li>
                <li> 
                    List of companies tab, The admin can view all the details of all the companies at once.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/7.webp" alt="List of companies tab, The admin can view all the details of all the companies at once." />
                </li>
                <li> 
                    List of placement coordinators tab, the admin can view the details of all the placement coordinators at once.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/8.webp" alt="List of placement coordinators tab, the admin can view the details of all the placement coordinators at once." />
                </li>
                <li> 
                    List of tasks tab, the admin can view list of all tasks at once.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/9.webp" alt="List of tasks tab, the admin can view list of all tasks at once." />
                </li>
                <li> Company details screen where 
                    <ul style="list-style-type:disc;">
                        <li> The admin or the coordinator can update the progress of the company. </li>
                        <li> The admin can edit details of the company, the admin can also add files like job description etc.</li>
                        <li> The admin can add or view Whatsapp group link with the company officials</li>
                        <li> The admin can send notification to all allotted coordinators at once.</li>
                        <li> The admin can add, edit or remove a task, where as the coordinator can only change the status of the task.</li>
                        <li> The admin can manage the contact details of the Point of contacts.</li>
                    </ul>
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/10.webp" alt="List of tasks tab, the admin can view list of all tasks at once." />
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/11.webp" alt="List of tasks tab, the admin can view list of all tasks at once." />
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/12.webp" alt="List of tasks tab, the admin can view list of all tasks at once." />
                </li>
                <li> 
                    This is the dashboard of a placement coordinator, where he/she can view Tasks Statistics and list of companies whose placement process is ongoing and also the ones whose placement process is completed.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/13.webp" alt="This is the dashboard of a placement coordinator, where he/she can view Tasks Statistics and list of companies whose placement process is ongoing and also the ones whose placement process is completed." />
                </li>
                <li> 
                    The coordinator can view all the allotted companies at once.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/14.webp" alt="The coordinator can view all the allotted companies at once." />
                </li>
                <li> 
                    The coordinator can change its status from available to unavailable and has to state a reason for it.
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/15.webp" alt="The coordinator can change its status from available to unavailable and has to state a reason for it." />
                </li>
                <li> 
                    The coordinator can change its password. 
                    <img class="img-fluid mb-3 mt-2" src="./assets/img/projects/Placement Management/screens/16.webp" alt="The coordinator can change its password. " />
                </li>
            </ol>
        <br>
        <br>
        <span class="text-theme fw-bold">Features under development</span>
        <br>
        <ul style="list-style-type:disc;">
            <li>A calendar to show which process is scheduled on which day.</li>
            <li>Students database on website.</li>
        </ul>
        <span class="text-theme fw-bold">Technologies used</span>
        <br>
        <ul style="list-style-type:disc;">
            <li>Frontend: HTML, CSS, Javascript, Boostrap.</li>
            <li>Backend: Django</li>
            <li>Hosting: AWS EC2</li>
        </ul>

        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://tpsw.ccanitd.in/" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </button>
`;
const uv_title = `UV Downloader is a video downloader app which allows users to download videos from various platforms like Youtube, Facebook, Instagram, Twitter, etc.`;
const uv_des = `

        UV stands for universal downloader. We all love to listen to music, some play it using Spotify some use Youtube, but almost all the music streaming platforms are filled with annoying ads and most of the songs are not available for offline download. People want to share some videos and media with our friends and family but they prefer sharing the original video instead of a link, but this is not possible for most of the platforms. 
        <br>
        <br>
        UV Downloader solves this problem by enabling users to download HD videos  and High quality audios at high speeds, users can download media from websites like Facebook, Instagram, Youtube, Reddit and many more. UV Downloader also provides a file system for users to navigate through their files and downloads. Users can also browse the web within the app and find the media they want to download. 
        <br>
        <br>
        <ul style="list-style-type:disc;">
            <li>The first version of this app was made using Javascript and Context API.</li>
            <li>The second version of this app was made using Javascript and Redux Core.</li>
            <li>The latest version of this app has Typescript enabled and uses Redux Toolkit.</li>
        </ul>
        <span class="fs-4 mt-3 d-block text-theme fw-bold text-center">First Version</span>
        The most difficult part of this project was finding the proper library with compatible version, initially while building this (I was using Javascript back then ) I faced a lot of bugs & errors, almost to a point where I almost gave up. React Native Fetch Blob may help you to download files via url but many times it fails and sometimes even download does not even start, so it was not an reliable option. Then I switched to React Native FS, and while installing this library I again got a lot of build fails, but eventually when this was ready to use, I found out that it’s the most reliable library for downloading files from the internet, it also has many options which enables the developer to build feature rich applications moreover its free and open source. Now the problem was how do I show that the download has started and its progress (react-native-fs gives you the download progress asynchronously), now the problem is I have to store and update this data from somewhere. So as at that time I was familiar with context api (which I will regret later). Now due to the frequent updation of the download status, the downloading file component was flickering, and when more downloads are added it started to flicker even more. So now I knew that using context api is not a good idea. This was the first version which was made using Javascript and Context API.<
        <span class="fs-4 mt-3 d-block text-theme fw-bold text-center">Second Version</span>
        Then I built a new branch and switched to redux, the code became more simpler and there was no flickering even though 10 files were getting downloaded at the same time. This was the second version of the application where I was using Javascript and Redux Core.<
        <span class="fs-4 mt-3 d-block text-theme fw-bold text-center">Latest Version</span>
        I could have stopped here but I wanted to solve one more problem, what youtube does is, it has audio and video (only the high quality ones) as separate files, till now I was showing only the lower quality video files (480p to 720p max) that have audio embedded in them, but now I had to change this, I decided to introduce another very important library to our application FFMPEG. What FFMPEG does is, it merges the video and audio into a single output file whose extension can chosen by the developer (I kept it to mp4 since it’s the most widely used video file format). Now the challenge was how to install FFMPEG because the documentation is not properly written, and I spent around 2 days just to install FFMPEG min version. Meanwhile I recently worked on Treklers passenger app which I made from scratch in Typescript, so I knew how beneficial Typescript is for this project. Then I rewrote the entire project in Typescript and installed Redux Toolkit and after all of this was done. I started working on Downloading the audio and video, merging them together and then deleting the source files. Typescript really helped here I faced no bugs while making this feature and thus the third and the latest version of the app is ready, which is written in Typescript and has Redux Toolkit for state management.

        <br>
        <br>

        <span class="text-theme fw-bold">Things to do:</span>
            <ul style="list-style-type:disc;">
                <li>Better UI/UX</li>
                <li>Add support to enable download from different websites</li>
            </ul>
        <span class="text-theme fw-bold">Technologies used</span>
            <ul style="list-style-type:disc;">
                <li>Frontend: React Native (Typescript)</li>
                <li>Backend: Flask</li>
            </ul>
                
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://github.com/rishav-jha-mech/UV-Plus-App" target="_blank" rel="noopener noreferrer">
                Visit Github
            </a>
        </button>
`;

const trek_title = `Treklers is a Taxi Booking App that allows users to book a cab and track the driver in real-time. It has several options live location and emergency calling.`;
const trek_des = `
                
        <span class="fw-bold d-block mb-1">Company: <a class="ms-1" href="https://capricontechnology.com/" target="_blank" rel="noopener noreferrer">Capricon</a></span>
        <span class="fw-bold d-block mb-2">Role: <span class="text-theme">Android Developer</span></span>

        <span class="fw-bold">Treklers</span> is a Taxi Booking App that allows users to book a cab and track the driver in real-time. It has several options live location and emergency calling. I built this project from scratch using Typescript in React Native.
        The app has over 50+ screens and is currently under development, it is about to be released in the soon.
        
        <span class="text-theme d-block mt-2 fw-bold">Technologies used</span>
        <ul style="list-style-type:disc;">
            <li>React Native</li>
            <li>Typescript</li>
        </ul>
`

// ADD PROJECTS

const webdev = [
    {
        name: "Placement_Management_System",
        label: "NIT DGP",
        modalStyle: 'modal-lg',
        title: pms_title,
        images: [
            {
                url: "./assets/img/projects/Placement Management/screens/1.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/2.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/3.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/4.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/5.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/6.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/7.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/8.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/9.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/10.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/11.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/12.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/13.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/14.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/15.webp",
                style: ""
            },
            {
                url: "./assets/img/projects/Placement Management/screens/16.webp",
                style: ""
            },
        ],
        link: "",
        description: pms_des,
    },
    {
        name: "Buzzpost",
        label: "Django",
        title: "Blogging website with a social media feel. Users can interact with other users and like and comment on their posts. Trending page for trending posts & users.",
        images: [
            {
                url: "./assets/img/projects/Buzzpost/1.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/2.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/3.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/4.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/5.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/6.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/7.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/8.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/9.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/10.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Buzzpost/11.webp",
                style: ''
            },
        ],
        link: "",
        description: `

        Buzzpost is a blogging website where users can post their blogs and connect with each other. 
        The website has the following pages and features 
        <br>
        <br>
        <ol>
            <li>Home page</li>
            <li>Login/Signup Page</li>
            <li>Trending page where the top 5 bloggers with highest blog views will be shown and top 10 trending blogs.</li>
            <li>Read blogs page where you can search blogs and you can sort the blogs by
                <ul style="list-style-type:disc;">
                    <li>Views</li>
                    <li>Likes</li>
                    <li>Blog length</li>
                    <li>Newer</li>
                    <li>Older</li>
                </ul>
            </li>
            <li>Search user screen where you can search for a user</li>
            <li>Search blog screen where you can search for a blog</li>
            <li>Feedback screen.</li>
            <li>My Blogs screen.</li>
            <li>Write a blog screen with rich text editor (Tiny MCE).</li>
            <li>Profile page.</li>
            <li>My profile page.</li>
            <li>Edit profile page.</li>
            <li>Blogs that can be liked and commented upon</li>
            <li>Comments which have an option to be liked and replied. </li>
        </ol>
        <br>
        <br>
        <span class="text-theme fw-bold">Things to be done:</span>
            <ul style="list-style-type:disc;">
                <li>Some APIs for the mobile app is to be made.</li>
                <li>UI/UX fixes.</li>
            </ul>
        <span class="text-theme fw-bold">Technologies used:</span>
            <ul style="list-style-type:disc;">
                <li>Frontend: HTML, CSS, Javascript</li>
                <li>Backend: Django</li>
                <li>Hosting: Heroku</li>
            </ul>
        
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://rj-freya.herokuapp.com" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </button>
        `,
    },
    {
        name: "SamVaad",
        label: "React",
        title: "It provides you with the latest news from all over the world in 7 different categories from different sources. This is my first project on React which i built from scratch.",
        images: [
            {
                url: "./assets/img/projects/Samvaad/web-poster.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Samvaad/1.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Samvaad/2.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Samvaad/3.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Samvaad/4.webp",
                style: ''
            },

        ],
        link: "",
        description: `
        Samvaad provides you with the latest news from all over the world in 7 different categories from different sources. You can get trending news from here. This was my first react project which I made from scratch. Learnt about how to pass props from parent to child components and how to call parent functions from child. The backend is made using Flask and python requests module calls NewsApi and then sends the data to the frontend. Since NewsApi has a limit of 100 requests per day, try catch mechanism can serve around 1500 requests per day.
        <br>
        <br>
        <span class="text-theme fw-bold">Things to do:</span>
            <ul style="list-style-type:disc;">
                <li>Caching mechanism to cache the news this will help the backend to serve even more requests.</li>
            </ul>
        <span class="text-theme fw-bold">Technologies used</span>
            <ul style="list-style-type:disc;">
                <li>Frontend: HTML, CSS, Javascript, React.</li>
                <li>Backend: Flask</li>
                <li>Hosting: Cloudflare pages</li>
            </ul>

                
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://samvaad.pages.dev" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </button>
        `,
    },
    {
        name: "K_Plus",
        label: "Freelance",
        title: "K Plus is a platform which provides free and paid courses to the students along with free resources and notes. It also has a custom admin panel for various operations.",
        images: [
            {
                url: "./assets/img/projects/K Plus/1.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/K Plus/2.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/K Plus/3.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/K Plus/4.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/K Plus/5.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/K Plus/6.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/K Plus/7.webp",
                style: ''
            },
        ],
        link: "",
        description: `
        K PLUS provides educational services from classes 5-12, B. Com/BBA /CA, CS, CMA FOUNDATION (online & offline). K<sub>2</sub>5 classes is the mentor and mentorship program and Krishna foundation is the social wing which aims to provide educational facilities to underprivileged students and empowering women via several training facilities.
        <br>
        <br>

        The website serves to show information about K Plus classes and has the following pages and features:
        <br>
        <br>

        <ol>
        <li>Landing Page for K Plus classes</li>
        <li>Landing Page for K<sub>2</sub>5 Classes</li>
        <li>Landing Page for Krishna Foundation</li>
        <li>Login Page </li>
        <li>Signup Page</li>
        <li>Dashboard for the students
            <ul style="list-style-type:disc;">
                <li>Home Tab where the student can see important notifications</li>
                <li>Free resources Tab where the student can watch download free resources</li>
                <li>Courses Tab where the student can preview and buy the courses</li>
                <li>Tests Tab</li>
                <li>Quiz Tab</li>
                <li>Account Settings
                    <ul>
                        <li>Update profile</li>
                        <li>Change password</li>
                    </ul>
                </li>
                <li>Feedback</li>
                <li>Contact office</li>
            </ul>
        </li>
        <li>Admin panel 
            <ul style="list-style-type:disc;">
                <li>To manage various links of forms added on the website</li>
                <li>Gallery (CRUD)</li>
                <li>Events (CRUD)</li>
                <li>Testimonials (CRUD)</li>
                <li>Careers (CRUD)</li>
                <li>Background (CRUD)</li>
                <li>What we do (CRUD)</li>
                <li>Our projects (CRUD)</li>
            </ul>
        </li>
        </ol>
        Initial version of the website was made using React for the frontend, but after considering the huge scale of the website we decided to switch to Django’s Jinja2 templating engine this made changing and developing new features for the website easier and quicker.
        
        <br>
        <br>
        
        
        <span class="text-theme fw-bold">Features under development:</span>
        <ul style="list-style-type:disc;">
            <li>Payment integration</li>
            <li>Tests and Quizes </li>
            <li>Educational Blogs</li>
        </ul>
        
        <span class="text-theme fw-bold">Things to Improve</span>
        <ul style="list-style-type:disc;">
            <li>UI/UX improvements</li>
            <li>Minified CSS and JS for faster loading</li>
            <li>Uniform design throughout the website</li>
        </ul>
        
        <span class="text-theme fw-bold">Technologies used:</span>
        <ul style="list-style-type:disc;">
            <li>Frontend:  HTML, CSS, Javascript, Bootstrap.</li>
            <li>Backend : Django, PostgreSQL (Database)</li>
            <li>Hosting: AWS</li>
        </ul>
        
        With the use of Google Lighthouse, SEO of the website is improved to an extent when you google “K Plus Classes” the first website you will see is the one made by us.
        
        

        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://www.kplusclasses.com" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </button>

        `,
    },
    {
        name: "Squid_Game",
        label: "Django",
        title: "Squid game theme website where users play and go through two elimination rounds. The first round being 'Green Light Red Light' and the second one is 'Paper Candy'.",
        images: [
            {
                url: "./assets/img/projects/Squid Game/1.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/2.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/3.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/4.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/5.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/6.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/7.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/8.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Squid Game/9.webp",
                style: ''
            },
        ],
        link: "",
        description: `
        Squid game themed website where users play and go through two elimination rounds. The first round being 'Green Light Red Light' and the second one is 'Paper Candy'. This website has been made with collective efforts of <a href="https://www.linkedin.com/in/bihan-saha-19598320a" target="_blank" rel="noopener noreferrer">Bihan Saha</a> (Framing the event) , <a href="https://www.linkedin.com/in/rishitashaw" target="_blank" rel="noopener noreferrer">Rishita Shaw</a> (Frontend Developer & Framing the event) and the rest of the Prakriti Team as an online event when classes were online.
        <br>
        <br>
        Each user will get a card just like the one they receive in the game post registering via google.
        <br>
        <br>
        <span class="text-theme fw-bold">Round 1  “Green Light Red Light” </span>The player has to turn on the camera and he has to move his head when the doll is not looking in order to move forward (distance travelled is shown on the screen). After sometime when the doll looks at the player, if the movement sensitivity meter reaches 100 then the user will die and he/she has to start all over again. The player will get 3 chances and if the player tries any mischievous activity that player will be labelled as a cheater. 
        <br>
        <br>
        <span class="text-theme fw-bold">Round 2 “Paper Candy” </span>The player has to cut out the given shape Heart, Crescent, Umbrella and Star within the given time, once the paper is ready the player has to upload the image on the website after which we will decide if the player is ready to be promoted to the next round or not. If the user is promoted to the next round then user is prompted to add his phone number after which we add them to the Whatsapp group of next round.
        <br>
        <br>
        <span class="text-theme fw-bold">Technologies used:</span>
        <ul style="list-style-type:disc;">
            <li>Frontend:  HTML, CSS, Javascript</li>
            <li>Backend: Django</li>
            <li>Hosting: AWS</li>
        </ul>

        It took us about a month to test and then successfully deploy this website, due to this the players faced no bugs/problems while playing. The event was successful and saw a footfall of<span class="text-theme fw-bold"> 300+ participants </span>.
        
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://github.com/prakritinitd/squid-game" target="_blank" rel="noopener noreferrer">
                Visit Github
            </a>
        </button>
        
        `
    },
    {
        name: "Treasures_at_Hogwarts",
        label: "Django",
        title: "Treasures at Hogwarts is a treasure hunt game where users have to find the hidden treasure by solving the riddles and clues and find the location given to them.",
        images: [
            {
                url: "./assets/img/projects/Treasures at Hogwarts/1.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Treasures at Hogwarts/2.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Treasures at Hogwarts/3.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Treasures at Hogwarts/4.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Treasures at Hogwarts/5.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Treasures at Hogwarts/6.webp",
                style: ''
            },
            {
                url: "./assets/img/projects/Treasures at Hogwarts/7.webp",
                style: ''
            },
        ],
        link: "",
        description: `
        Treasures at Hogwarts is an online-offline event, which has two rounds which involves the website.This website has been made with collective efforts of <a href="https://www.linkedin.com/in/bihan-saha-19598320a" target="_blank" rel="noopener noreferrer">Bihan Saha</a> (Framing the event) , <a href="https://www.linkedin.com/in/rishitashaw" target="_blank" rel="noopener noreferrer">Rishita Shaw</a> (Frontend, backend & Framing the event) and the rest of the Prakriti Team.
        <br>
        <br>
        <span class="text-theme fw-bold">First round:</span> The team will have to play Quidditch and grab the flying snitch, on clicking at the moving snitch the user will get one point, one team has total of 3 attempts and the final score will be shown on the leader board.
        <br>
        <br>
        <span class="text-theme fw-bold">Second round</span> The players will be given an image, they have to identify the location on our campus, take a selfie at that exact location and upload it on the website, from the backend we will verify the image and accept it or reject it,  if the picture is accepted then user gets another image and if not then he/she will get the same image along with the reason why their uploaded image was rejected.
        <br>
        <br>
        
        <span class="text-theme fw-bold">Technologies used:</span>
        <ul style="list-style-type:disc;">
            <li>Frontend:  HTML, CSS, Javascript</li>
            <li>Backend: Django</li>
            <li>Hosting: AWS</li>
        </ul>
        
        The whole website was made within 10 days from frontend to backend to deployment. The event was successful and saw a footfall of<span class="text-theme fw-bold"> 160+ participants </span>.

        
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://github.com/prakritinitd/Treasures-At-Hogwarts" target="_blank" rel="noopener noreferrer">
                Visit Github
            </a>
        </button>
        
        `
    },
]

const appdev = [
    {
        name: "Samvaad",
        label: "React Native",
        title: "Samvaad App brings you news from 50+ countries across 7 Categories from different sources. This is my first project on React Native which i built from scratch.",
        images: [
            {
                url: "./assets/img/projects/SamvaadApp/app-poster.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/SamvaadApp/1.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/SamvaadApp/2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/SamvaadApp/3.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/SamvaadApp/4.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/SamvaadApp/5.webp",
                style: 'h100p'
            }
        ],
        link: "",
        description: `
            
        Samvaad provides you with the latest news from all over the world in 7 different categories from different sources. You can get trending news from here. This was my first React Native project which I made from scratch. Learnt about how to pass props from parent to child components and how to call parent functions from child. The backend is made using Flask and python requests module calls NewsApi and then sends the data to the frontend. Since NewsApi has a limit of 100 requests per day, try catch mechanism can serve around 1500 requests per day.
        <br>
        <br>
        <span class="text-theme fw-bold">Things to do:</span>
            <ul style="list-style-type:disc;">
                <li>Caching mechanism to cache the news this will help the backend to serve even more requests.</li>
            </ul>
        <span class="text-theme fw-bold">Technologies used</span>
            <ul style="list-style-type:disc;">
                <li>Frontend: React Native (Javascript)</li>
                <li>Backend: Flask</li>
            </ul>
                
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://github.com/rishav-jha-mech/SamVaad-App" target="_blank" rel="noopener noreferrer">
                Visit Github
            </a>
        </button>

        `
    },
    {
        name: "UV_Downloader",
        title: uv_title,
        label: "React Native",
        images: [
            {
                url: "./assets/img/projects/UV Downloader/app-poster-1.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/app-poster-2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/1.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/3.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/4.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/5.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/6.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/UV Downloader/7.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/UV Downloader/8.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/UV Downloader/9.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/10.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/11.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/12.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/13.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/UV Downloader/14.webp",
                style: 'h100p'
            },
        ],
        link: "",
        description: uv_des
    },
    {
        name: "Buzzpost_Blogging_App",
        title: "Buzzpost is a blogging app which allows users to create their own blogs and share them with the world. It has all the features that are in the website.",
        label: "React Native",
        images: [
            {
                url: "./assets/img/projects/BuzzpostApp/app-poster.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/3.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/4.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/5.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/6.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/7.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/8.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/9.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/10.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/11.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/12.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/13.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/14.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/15.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/16.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/BuzzpostApp/17.webp",
                style: 'h100p'
            },
        ],
        link: "",
        description: `
            
        Buzzpost is a blogging app where users can post their blogs and connect with each other. 
        The app has the following screen and features 
        <br>
        <br>
        <ol>
            <li>Home screen</li>
            <li>Login/Signup screen</li>
            <li>Trending screen where the top 5 bloggers with highest blog views will be shown and top 10 trending blogs.</li>
            <li>Read blogs screen where you can search blogs and you can sort the blogs by
                <ul style="list-style-type:disc;">
                    <li>Views</li>
                    <li>Likes</li>
                    <li>Blog length</li>
                    <li>Newer</li>
                    <li>Older</li>
                </ul>
            </li>
            <li>Search user screen where you can search for a user</li>
            <li>Search blog screen where you can search for a blog</li>
            <li>Feedback screen.</li>
            <li>My Blogs screen.</li>
            <li>Write a blog screen with rich text editor.</li>
            <li>Profile screen.</li>
            <li>My profile screen.</li>
            <li>Edit profile screen.</li>
            <li>Blogs that can be liked and commented upon.</li>
            <li>Comments which have an option to be liked and replied. </li>
        </ol>
        <br>
        <br>
        <span class="text-theme fw-bold">Things to be done:</span>
            <ul style="list-style-type:disc;">
                <li>Making commenting feature.</li>
                <li>Complete API integration.</li>
            </ul>
        <span class="text-theme fw-bold">Technologies used:</span>
            <ul style="list-style-type:disc;">
                <li>Frontend: React Native (Javascript)</li>
                <li>Backend: Django</li>
                <li>Hosting: Heroku</li>
            </ul>
        
        <button class="btn btn-lg d-block my-4 mx-auto">
            <a href="https://rj-freya.herokuapp.com" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </button>

        `
    },
    {
        name: "Triunits",
        label: "Flutter",
        title: "Triunits is a cryptocurrency trading app which allows users to trade cryptocurrencies and earn money. It has charts and graphs to show the current market status.",
        images: [
            {
                url: "./assets/img/projects/Triunits/app-poster.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/3.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/4.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/5.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/6.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/7.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/8.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/9.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/10.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/11.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/12.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/13.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/14.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/15.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/16.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/17.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/18.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/19.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/20.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/21.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/22.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Triunits/23.webp",
                style: 'h100p'
            },
        ],
        link: "",
        description: `
        
        <span class="fw-bold d-block mb-1">Company: <a class="ms-1" href="https://capricontechnology.com/" target="_blank" rel="noopener noreferrer">Capricon</a></span>
        <span class="fw-bold d-block mb-3">Role: <span class="text-theme">Android Developer</span></span>

        <span class="fw-bold">Triunits</span> is a cryptocurrency trading app which allows users to trade cryptocurrencies and earn money. It has charts and graphs to show the current market status. The app is currently on Google Play Store. The goal of a developer while making this app is to keep the UI of the application minimal and easy to use. I have worked on many screens and also developed several screens from scratch. I also add the shimmering loading effect in various parts of the application for better User Experience. I also created a coin news API which scrapes data from the web, caches it and sends it to the app.
        
        <br>
        <span class="text-theme fw-bold">Technologies used</span>
            <ul style="list-style-type:disc;">
                <li>Flutter</li>
                <li>Flask</li>
                <li>Redis</li>
                <li>Python</li>
                <li>Dart</li>
            </ul>
        <div class="around">
            <a class="btn whiteBtn btn-lg d-block me-1 my-4 mx-auto" href="https://triunits.com/" target="_blank" rel="noopener noreferrer">
                    Visit Website
            </a>
            <a class="btn my-active btn-lg d-block ms-1 my-4 mx-auto" href="https://play.google.com/store/apps/details?id=com.triunits.android.triunits.triunits&hl=en&gl=US" target="_blank" rel="noopener noreferrer">
                Visit Play Store
            </a>
        </div>

        `
    },
    {
        name: "Tricket",
        label: "Flutter",
        title: "Tricket Tricket  is an innovative real-time fantasy cricket game that lets you enjoy your favorite fantasy sports without the need to create a team. Simply analyze the game ...",
        images: [
            {
                url: "./assets/img/projects/Tricket/app-poster.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Tricket/2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Tricket/3.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Tricket/4.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Tricket/5.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Tricket/6.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Tricket/7.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/Tricket/8.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/Tricket/9.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/Tricket/10.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/Tricket/11.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/Tricket/12.webp",
                style: 'h100p'
            },
        ],
        link: "",
        description: `
            
            <span class="fw-bold d-block mb-1">Company: <a class="ms-1" href="https://tricket.in" target="_blank" rel="noopener noreferrer">Helpen.In</a></span>
            <span class="fw-bold d-block mb-2">Role: <span class="text-theme ms-1">Flutter Developer</span></span>
            <span class="fw-bold">Tricket</span> is an innovative real-time fantasy cricket game that lets you enjoy your favorite fantasy sports without the need to create a team. Simply analyze the game, project the score of the next SPELL (a set of 4 or 5 overs), and join a Contest to compete against other players. You can play in real-time with the live match, just be sure to record your projections before the deadline (which is before the start of each over). The closer your projections are to the actual scores of the Spell of the live match, the more points you’ll earn and the higher your chances of topping the leaderboard and winning cash prizes. And the best part is that in just 15 minutes, you can play and get a winning result!. 
            <br>
            <span class="text-theme d-block mt-2 fw-bold">Technologies used</span>
            <ul style="list-style-type:disc;">
                <li>Flutter</li>
                <li>Dart</li>
            </ul>
            <p class="fw-bold my-2 text-center">The app has crossed over 10k downloads as of March 2023 on Google Play Store</p>

            <div class="between">
                <button class="btn whiteBtn btn-lg d-block my-4">
                    <a href="https://apps.apple.com/us/app/tricket-fantasy-cricket-app/id1667156965" target="_blank" rel="noopener noreferrer">
                       Visit App Store
                    </a>
                </button>
                <button class="btn my-active btn-lg d-block my-4">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Visit Play Store
                    </a>
                </button>
            </div>
            <div class="w-100">
                <button class="btn w-100 flex-1 btn-lg d-block">
                    <a href="https://tricket.in" target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </a>
                </button>
            </div>
        `,
    },
    {
        name: "Treklers",
        label: "React Native",
        title: trek_title,
        images: [
            {
                url: "./assets/img/projects/Treklers/app-poster.webp",
                style: 'h100p'
            },

            {
                url: "./assets/img/projects/Treklers/2.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/3.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/4.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/5.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/6.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/7.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/8.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/9.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/10.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/11.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/12.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/13.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/14.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/15.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/16.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/17.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/18.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/19.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/20.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/21.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/22.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/23.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/24.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/25.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/26.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/27.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/28.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/29.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/30.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/31.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/32.webp",
                style: 'h100p'
            },
            {
                url: "./assets/img/projects/Treklers/33.webp",
                style: 'h100p'
            },

        ],
        link: "",
        description: trek_des
    }
]

function addProject(parentElement, list) {

    parentElement.innerHTML = list.map((project) => {

        let name = `${project.name}`.replace(/_/g, " ");

        return `
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                <div class="project-item card rounded-5" data-ribbon="${project.label}" style="--d:6px;--f: 10px;--c:var(--theme-color)">
                    <div class="card-body">
                        <div class="project-image">
                            <img src="${project.images[0].url}" width="100%" height="100%" class="d-block ${project.images[0].style} w-100" alt="${name} 1">
                        </div>
                        <div class="project-description mt-4">
                            <h6 class="fw-bold">${name}</h6>
                            <p class="mt-3">${project.title}</p>
                                <div class="around">
                                    <button id="modalBtnReadMore${project.name}" class="btn pri d-block my-active" data-bs-toggle="modal" data-bs-target="#projectModal${project.name}">
                                        Read More
                                    </button>
                                    <button id="modalBtnViewScreens${project.name}" class="btn sec ms-2" data-bs-toggle="modal" data-bs-target="#viewScreensProjectModal${project.name}">
                                        View Screens
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <!-- Modal Description -->
            <div class="modal modal1 fade" id="projectModal${project.name}" tabindex="-1" aria-labelledby="projectModal${project.name}Label" aria-hidden="true">
                <div class="modal-dialog ${project.modalStyle} modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="projectModal${project.name}Label">${name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${project.images[0].url}" class="w-100 ${project.images[0].style}" alt="${name} 1">
                            <div class="mt-4 project-description">
                                ${project.description}
                            </div>
                        </div>
                        <!--<div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>-->
                    </div>
                </div>
            </div>


            <!-- MODAL VIEW SCREENS -->
            <div class="modal modal2 fade" id="viewScreensProjectModal${project.name}" tabindex="-1" aria-labelledby="viewScreensProject${project.name}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="viewScreensProject${project.name}Label">${name} Screens</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="viewScreensProject${project.name}" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    ${project.images.map((image, index) => {
            return (
                `<div class="carousel-item ${index == 0 ? 'active' : ''}">
                                                <img src="${image.url}" width="100%" height="100%" class="d-block ${image.style} w-100" alt="${name} 1">
                                            </div>`
            )
        }).join('')}
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#viewScreensProject${project.name}" data-bs-slide="prev">
                                    <span class="fa fa-angle-left text-theme fs-5" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#viewScreensProject${project.name}" data-bs-slide="next">
                                    <span class="fa fa-angle-right text-theme fs-5" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <!--<div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>-->
                    </div>
                </div>
            </div>

        `
    }).join('');

}

addProject(webdevContainer, webdev);
addProject(appdevContainer, appdev);
// ADD PROJECTS

// Toggle Projects
function toggleProject() {
    webBtn.classList.toggle("my-active");
    appBtn.classList.toggle("my-active");
    webdevContainer.classList.toggle("d-none");
    appdevContainer.classList.toggle("d-none");
}

// Portfolio
const portfolio = [

    {
        name: "Placement_Management_System",
        tagline: "Managing hassle-free placements",
        label: "NIT DGP",
        modal1Size: "modal-lg",
        images: [
            "./assets/img/projects/Placement Management/1.webp",
            "./assets/img/projects/Placement Management/2.webp",
            "./assets/img/projects/Placement Management/3.webp",
            "./assets/img/projects/Placement Management/4.webp",
            "./assets/img/projects/Placement Management/5.webp",
            "./assets/img/projects/Placement Management/6.webp",
            "./assets/img/projects/Placement Management/7.webp",
            "./assets/img/projects/Placement Management/8.webp",
            "./assets/img/projects/Placement Management/9.webp",
            "./assets/img/projects/Placement Management/10.webp",
            "./assets/img/projects/Placement Management/11.webp",
            "./assets/img/projects/Placement Management/12.webp",
        ],
        link: "",
        title: pms_title,
        description: pms_des,
    },
    {
        name: "UV_Downloader",
        tagline: "Download YouTube Videos",
        label: "React Native",
        images: [
            "./assets/img/projects/UV Downloader/app-poster-1.webp",
            "./assets/img/projects/UV Downloader/1.webp",
            "./assets/img/projects/UV Downloader/2.webp",
            "./assets/img/projects/UV Downloader/3.webp",
            "./assets/img/projects/UV Downloader/4.webp",
            "./assets/img/projects/UV Downloader/5.webp",
            "./assets/img/projects/UV Downloader/6.webp",
            "./assets/img/projects/UV Downloader/7.webp",
            "./assets/img/projects/UV Downloader/8.webp",
            "./assets/img/projects/UV Downloader/9.webp",
            "./assets/img/projects/UV Downloader/10.webp",
            "./assets/img/projects/UV Downloader/11.webp",
            "./assets/img/projects/UV Downloader/12.webp",
            "./assets/img/projects/UV Downloader/13.webp",
            "./assets/img/projects/UV Downloader/14.webp",
        ],
        link: "",
        title: uv_title,
        description: uv_des,
    },
    {
        name: "Treklers",
        tagline: "Booking rides made easy",
        label: "React Native",
        images: [
            "./assets/img/projects/Treklers/app-poster.webp",
            "./assets/img/projects/Treklers/2.webp",
            "./assets/img/projects/Treklers/3.webp",
            "./assets/img/projects/Treklers/4.webp",
            "./assets/img/projects/Treklers/5.webp",
            "./assets/img/projects/Treklers/6.webp",
            "./assets/img/projects/Treklers/7.webp",
            "./assets/img/projects/Treklers/8.webp",
            "./assets/img/projects/Treklers/9.webp",
            "./assets/img/projects/Treklers/10.webp",
            "./assets/img/projects/Treklers/11.webp",
            "./assets/img/projects/Treklers/12.webp",
            "./assets/img/projects/Treklers/13.webp",
            "./assets/img/projects/Treklers/14.webp",
            "./assets/img/projects/Treklers/15.webp",
            "./assets/img/projects/Treklers/16.webp",
            "./assets/img/projects/Treklers/17.webp",
            "./assets/img/projects/Treklers/18.webp",
            "./assets/img/projects/Treklers/19.webp",
            "./assets/img/projects/Treklers/20.webp",
            "./assets/img/projects/Treklers/21.webp",
            "./assets/img/projects/Treklers/22.webp",
            "./assets/img/projects/Treklers/23.webp",
            "./assets/img/projects/Treklers/24.webp",
            "./assets/img/projects/Treklers/25.webp",
            "./assets/img/projects/Treklers/26.webp",
            "./assets/img/projects/Treklers/27.webp",
            "./assets/img/projects/Treklers/28.webp",
            "./assets/img/projects/Treklers/29.webp",
            "./assets/img/projects/Treklers/30.webp",
            "./assets/img/projects/Treklers/31.webp",
            "./assets/img/projects/Treklers/32.webp",
            "./assets/img/projects/Treklers/33.webp",
        ],
        link: "",
        title: trek_title,
        description: trek_des,
    }

]
var swiper = new Swiper(".portfolio-swiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    disableOnInteraction: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


document.getElementById('portfolio-wrapper').innerHTML += portfolio.map((project) => {

    let name = `${project.name}`.replace(/_/g, " ");

    return `
    <div class="swiper-slide w-100">
        <div class="da-card">
            <div class="row px-0">
                <div class="col-12 col-lg-6">
                    <div class="img-container center">
                        <img src="${project.images[0]}" class="d-block poster" alt="Portfolio Rishav Jha ${name}">
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="description">
                        <h1 class="heading">${name}</h1>
                        <h6 class="subheading mb-4 text-muted">${project.tagline}</h6>
                        <p class="text fs-6">
                            ${project.title}
                        </p>
                    </div>
                    
                    <div class="around">
                        <button class="btn active" type="button" data-bs-toggle="modal" data-bs-target="#readMorePortfolio${project.name}">
                            <a>Read More</a>
                        </button>
                        <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#viewScreensPortfolio${project.name}">
                            <a>View Screens</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `

}).join('');

document.getElementById('portfolio-modals').innerHTML += portfolio.map((project) => {
    let name = `${project.name}`.replace(/_/g, " ");
    return `
    
    
    <!-- READ MORE MODAL -->
    <div class="modal modal1 fade" id="readMorePortfolio${project.name}" tabindex="-1" aria-labelledby="readMorePortfolio${project.name}Label" aria-hidden="true">
        <div class="modal-dialog ${project.modal1Size} modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="readMorePortfolio${project.name}Label">${name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${project.images[0]}" class="d-block mx-auto maxh400" alt="${name} 1">
                    <div class="mt-4 project-description">
                        ${project.description}
                    </div>
                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>-->
            </div>
        </div>
    </div>

    
    <!-- VIEW SCREENS MODAL -->
    <div class="modal modal2 fade" id="viewScreensPortfolio${project.name}" tabindex="-1" aria-labelledby="viewScreensPortfolio${project.name}Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="viewScreensPortfolio${project.name}Label">${name} Screens</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div id="xmenas${project.name}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${project.images.map((image, index) => {
                                if (index == 0) {
                                    return `
                                    <div class="carousel-item active">
                                        <img src="${image}" class="d-block mx-auto maxh400" alt="${name} ${index + 1}">
                                    </div>`
                                } else {
                                    return `
                                    <div class="carousel-item">
                                        <img src="${image}" class="d-block mx-auto maxh400" alt="${name} ${index + 1}">
                                    </div>`
                                }
                            }).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#xmenas${project.name}" data-bs-slide="prev">
                            <i class="icon-arrow-left" aria-hidden="true"></i>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#xmenas${project.name}" data-bs-slide="next">
                            <i class="icon-arrow-right" aria-hidden="true"></i>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>-->
            </div>
        </div>
    </div>



    `

}).join('')



var typingOptions = {
    strings: ['Full Stack Developer', 'App Developer', 'UI/UX Designer', 'Freelancer', 'Open Source Contributor',],
    typeSpeed: 80,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 700,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    showCursor: false,
    autoInsertCss: true,
};

var typed = new Typed('#whatido', typingOptions);


// MESSAGE FORM JAVASCRIPT
const fields = ['f-name', 'f-email', 'f-subject', 'f-message'];

function emptyValue(id) {
    document.getElementById(id).value = "";
}

function handleFormSubmit() {
    fields.forEach(id => emptyValue(id));
    Swal.fire(
        'Message Sent!',
        'Please wait for a while, I will get back to you soon.',
        'success'
    );
}
