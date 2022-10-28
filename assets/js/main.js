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
            "./assets/img/projects/Placement Management/1.png",
            "./assets/img/projects/Placement Management/2.png",
            "./assets/img/projects/Placement Management/3.png",
            "./assets/img/projects/Placement Management/4.png",
            "./assets/img/projects/Placement Management/5.png",
            "./assets/img/projects/Placement Management/6.png",
            "./assets/img/projects/Placement Management/7.png",
            "./assets/img/projects/Placement Management/8.png",
            "./assets/img/projects/Placement Management/9.png",
            "./assets/img/projects/Placement Management/10.png",
            "./assets/img/projects/Placement Management/11.png",
            "./assets/img/projects/Placement Management/12.png",

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
        name: "K_Plus",
        label: "Freelance",
        images: [
            "https://cdn.dribbble.com/users/1814344/screenshots/11764514/media/304d17afbd44f98d5e2a85d616b97f67.png?compress=1&resize=400x300"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Squid_Game",
        label: "Django",
        images: [
            "https://miro.medium.com/max/1400/1*FhdkND7pJKXYhNC4ovxcQQ.png"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Treasures_at_Hogwarts",
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
        name: "UV_Downloader",
        label: "React Native",
        images: [
            "https://static.vecteezy.com/system/resources/thumbnails/000/208/995/small/eezy_07.jpg"
        ],
        link: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name: "Freya_Blogging_App",
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
                                            `<div class="carousel-item ${index == 0 ? 'active' : null}">
                                                    <img src="${image}" class="d-block w-100" alt="${name} 1">
                                                </div>`
                                            )
                                        })
                                    }
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
            "./assets/img/projects/Placement Management/1.png",
            "./assets/img/projects/Placement Management/2.png",
            "./assets/img/projects/Placement Management/3.png",
            "./assets/img/projects/Placement Management/4.png",
            "./assets/img/projects/Placement Management/5.png",
            "./assets/img/projects/Placement Management/6.png",
            "./assets/img/projects/Placement Management/7.png",
            "./assets/img/projects/Placement Management/8.png",
            "./assets/img/projects/Placement Management/9.png",
            "./assets/img/projects/Placement Management/10.png",
            "./assets/img/projects/Placement Management/11.png",
            "./assets/img/projects/Placement Management/12.png",
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
        delay: 3500,
        disableOnInteraction: true,
    },
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
                        <div id="${project.name}Portfolio" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${project.images.map((image, index) => {
                                    return (
                                        `<div class="carousel-item ${index == 0 ? 'active' : null}">
                                                <img src="${image}" class="d-block w-100" alt="Portfolio Rishav Jha ${name}">
                                            </div>`
                                        )
                                    })
                                }
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${project.name}Portfolio" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${project.name}Portfolio" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
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