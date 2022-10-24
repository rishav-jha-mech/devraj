const menu = document.getElementById("nav-list");
const main = document.getElementById("main");
const eduBtn = document.getElementById("educ-btn");
const workBtn = document.getElementById("work-btn");
const eduContainer = document.getElementById("educ-container");
const workContainer = document.getElementById("work-container");
const aboutContainer = document.getElementById("about");
const skillsContainer = document.getElementById("skills");
const frontEndContainer = document.getElementById("front-end");
const backEndContainer = document.getElementById("back-end");
const AppDevContainer = document.getElementById("app-dev");
const devOpsContainer = document.getElementById("dev-ops");

function log(params) {
    console.log(params);
}
function kPrettyPrint(params) {
    console.log(JSON.stringify(params, null, 4));
}

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("tog-h");
    main.classList.toggle("d-none");
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


// Animate Progress

var animateProgress = true;
var animateSkills = true;

const progressAnimationListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= (skillsContainer.offsetTop - 300)) {
        if (animateProgress) {
            animateProgressF();
            animateProgress = false;
            clearInterval(skillAnimationListener);
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
//#region - start of - number counter animation
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