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
    document.getElementsByClassName('menu-btn-1')[0].classList.toggle("active");
    menu.classList.toggle("tog-h");
    main.classList.toggle("d-none");
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
        name: "Placement Management System",
        label: "NIT DGP",
        images: [
            "https://static.vecteezy.com/system/resources/previews/008/516/784/non_2x/developer-coding-website-illustration-concept-vector.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Freya",
        label: "Django",
        images: [
            "https://thumbs.dreamstime.com/b/modern-d-illustration-ui-design-web-development-application-coding-programming-laptop-concept-pink-background-vector-230177687.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "SamVaad",
        label: "React",
        images: [
            "https://img.freepik.com/premium-vector/website-programming-coding-web-development-coding-3d-vector-illustrations_594024-93.jpg?w=2000"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "K Plus",
        label: "Freelance",
        images: [
            "https://cdn.dribbble.com/users/1814344/screenshots/11764514/media/304d17afbd44f98d5e2a85d616b97f67.png?compress=1&resize=400x300"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Squid Game",
        label: "Django",
        images: [
            "https://miro.medium.com/max/1400/1*FhdkND7pJKXYhNC4ovxcQQ.png"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treasures at Hogwarts",
        label: "Django",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52RchcLlWmKgoZ6SovgSWTHqdiYDjgxyDHLJF6Hp3XbtRodcDx50xFKbu7-quYgh69Kk&usqp=CAU"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

const appdev = [
    {
        name: "SamVaad",
        label: "React Native",
        images: [
            "https://static.vecteezy.com/system/resources/previews/000/247/824/original/vector-beautiful-landscape-illustration.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "UV Downloader",
        label: "React Native",
        images: [
            "https://static.vecteezy.com/system/resources/thumbnails/000/208/995/small/eezy_07.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Freya Blogging App",
        label: "React Native",
        images: [
            "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=2000"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Triunits",
        label: "Flutter",
        images: [
            "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2361/posts/36065/image/what_is_illustration_example_illustrator.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Tricket",
        label: "Flutter",
        images: [
            "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treklers",
        label: "React Native",
        images: [
            "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
]

function addProject(parentElement, list) {
    parentElement.innerHTML = list.map((project) => {
        return `
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                <div class="project-item card rounded-5" data-ribbon="${project.label}" style="--d:6px;--f: 10px;--c:var(--theme-color)">
                    <div class="card-body">
                        <div class="project-image">
                            <img class="w-100" src="${project.images[0]}" alt="${project.name} Images">
                        </div>
                        <div class="project-description mt-4">
                            <h6 class="fw-bold">${project.name}</h6>
                            <p class="mt-3">${project.description}</p>
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
}
addProject(webdevContainer, webdev);
addProject(appdevContainer, appdev);
// ADD PROJECTS

// Toggle Projects
function toggleProject() {
    webBtn.classList.toggle("active");
    appBtn.classList.toggle("active");
    webdevContainer.classList.toggle("d-none");
    appdevContainer.classList.toggle("d-none");
}

// Portfolio
const portfolio = [

    {
        name: "Placement Management System",
        label: "NIT DGP",
        images: [
            "https://static.vecteezy.com/system/resources/previews/008/516/784/non_2x/developer-coding-website-illustration-concept-vector.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "UV Downloader",
        label: "React Native",
        images: [
            "https://static.vecteezy.com/system/resources/thumbnails/000/208/995/small/eezy_07.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treklers",
        label: "React Native",
        images: [
            "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png"
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
    cursor: "pointer",
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.getElementById('portfolio-wrapper').innerHTML += portfolio.map((project) => {
    return `
    <div class="swiper-slide w-100">
        <div class="da-card">
            <div class="row px-0">
                <div class="col-12 col-md-6">
                    <div class="img-container center">
                        <img  class="w-100" src="${project.images[0]}" alt="Portfolio Rishav Jha ${project.name}">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="description">
                        <h1 class="heading">${project.name}</h1>
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
