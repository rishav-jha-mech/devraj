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

// ADD PROJECTS

const webdev = [
    {
        name: "Placement_Management_System",
        label: "NIT DGP",
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
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Buzzpost",
        label: "Django",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "SamVaad",
        label: "React",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "K_Plus",
        label: "Freelance",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Squid_Game",
        label: "Django",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treasures_at_Hogwarts",
        label: "Django",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

const appdev = [
    {
        name: "Samvaad",
        label: "React Native",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "UV_Downloader",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Buzzpost_Blogging_App",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Triunits",
        label: "Flutter",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Tricket",
        label: "Flutter",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treklers",
        label: "React Native",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
                            <div id="${project.name}Fade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    ${project.images.map((image, index) => {
                                        return (
                                            `<div class="carousel-item ${index == 0 ? 'active' : ''}">
                                                <img src="${image.url}" width="100%" height="100%" class="d-block ${image.style} w-100" alt="${name} 1">
                                            </div>`
                                        )
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="project-description mt-4">
                            <h6 class="fw-bold">${name}</h6>
                            <p class="mt-3">${project.description}</p>
                            <div class="around">
                                <button class="btn my-active">
                                    <a href="${project.link}" target="_blank">View Project</a>
                                </button>
                                <button class="btn">
                                    <a href="${project.link}" target="_blank">View Code</a>
                                </button>
                            </div>
                        </div>
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
        label: "NIT DGP",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "UV Downloader",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treklers",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
                <div class="col-12 col-md-6">
                    <div class="img-container center">
                        <div id="${project.name}Portfolio" class="carousel carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${project.images.map((image, index) => {
                                        return (
                                            `<div class="carousel-item ${index == 0 ? 'active' : ''}">
                                                <img src="${image}" class="d-block w-100" alt="Portfolio Rishav Jha ${name}">
                                            </div>`
                                        )
                                    })
                                        }
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${project.name}Portfolio" data-bs-slide="prev">
                                <span class="fa fa-angle-left text-theme fs-5" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${project.name}Portfolio" data-bs-slide="next">
                                <span class="fa fa-angle-right text-theme fs-5" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="description">
                        <h1 class="heading">${name}</h1>
                        <h6 class="subheading mb-4 text-muted">Lorem ipsum dolor sit amet.</h6>
                        <p class="text fs-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt blanditiis iure! 
                        </p>
                    </div>
                    <div class="around">
                        <button class="btn active">
                            <a href="${project.link}" target="_blank">View Project</a>
                        </button>
                        <button class="btn">
                            <a href="${project.link}" target="_blank">View Code</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}).join('');


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


// var x = ''
// for (let index = 2; index < 34; index++) {
//     x+=`cwebp -q 75 ${index}.png -o ${index}.webp && rm ${index}.png\n`
// }
// console.log(x)