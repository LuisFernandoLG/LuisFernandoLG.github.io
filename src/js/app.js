window.addEventListener("DOMContentLoaded", () => {
    loadprojects()
})

const projects = [
    {
        src: "./src/assets/images/projects/my-attendance-list.png",
        title: "My Attendance List",
        description: "A QR code based attendance list for conferences or any other events.",
        url: "https://attendance-list-next.vercel.app/",
        tecnologies: ["Laravel", "TailwindCSS", "MySQL", "NextJs"],
        color: "#FACC15",
    },
    {
        src: "./src/assets/images/projects/home.webp",
        title: "Adventure Time API",
        description: "Adventure Time API is a RESTful API with Landing Page that provides data about the characters of the Adventure Time series.",
        url: "https://adventure-time-api-docs.vercel.app/",
        tecnologies: ["Laravel", "TailwindCSS", "MySQL", "Astro"],
        color: "#186B82",
    },
    {
        src: "./src/assets/images/projects/pianistAlex.jpeg",
        title: "Landing Page for a pianist",
        description: "Landing page to promote the work of a pianist in Cabo San Lucas.",
        url: "https://alexmacarthurmusic.com/",
        tecnologies: ["NextJs", "CSS"],
        color: "#000",
    },
    
    {
        src: "./src/assets/images/projects/no-borders-academy.png",
        title: "Landing Page for No Borders Academy",
        description: "Landing page for Music Academy in Cabo San Lucas.",
        url: "https://nobordersacademy.com/",
        tecnologies: ["Astro", "TailwindCSS"],
        color: "#1E40AF",
    },

    {
        src: "./src/assets/images/projects/gsp.webp",
        title: "GSP landing page",
        description: "Landing page developed for promoting the Green Scholarship Program.",
        url: "https://gspcabo.netlify.app/",
        tecnologies: ["HTML", "CSS", "JavaScript"],
        color: "#226742",
    },
]

const $projects = document.querySelector(".projects");

const getprojectElement = ({ src, title, description, url, tecnologies, color, inProcess }) => {

    const tecnologiesElement = tecnologies.map((tecnology) => {
        return `<span class="tecnology" style="color:${color};">${tecnology}</span>`
    }).join("")


    return `
    <figure class="project ${inProcess ? "project-inprocess" : ''}" style="background-image: url('${src}'); background-size: contain; &::before: linear-gradient(transparent 0%, ${color} 100%);">
    ${ inProcess ? '<span class="inprogress-chip"><img src="/src/assets/images/gear.webp" alt="gear icon"/> Work in Progress... 🛠️</span>' : ''}
    
    
    <div class="project__overlay" style="background: linear-gradient(transparent 0%, ${color} 100%);"></div>
    <a class=" project__title ${inProcess ? "project__title-inprogress" : ""}" href="${url}" target="_blank"> <img src="./src/assets/icons/world.svg" alt=${title}">${title}</a>
    <figcaption class="project__description">${description}</figcaption>
    <div class="tecnologies">
    ${tecnologiesElement}
    </div>
  </figure>
    `
}

const loadprojects = () => {
    const projectsElements = projects.map((project) => {
        return getprojectElement(project)
    }).join("")

    $projects.innerHTML = projectsElements
}
