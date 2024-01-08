window.addEventListener("DOMContentLoaded", () => {
    loadprojects()
})

const projects = [
    {
        src: "./src/assets/images/projects/practibus.webp",
        title: "Practibus",
        description: "Practibus is an ecosystem of apps for bus for SJC. Driver , user and admin app. This is the user app.",
        url: "https://luis.lopez.live",
        tecnologies: ["React native", "Firebase", "MongoDB", "NodeJs"],
        color: "#186B82",
        inProcess: true
    },
    
    {
        src: "./src/assets/images/projects/nativefloral.webp",
        title: "Native Floral",
        description: "A business of a floral designer. This is the design of the website.",
        url: "https://luis.lopez.live",
        tecnologies: ["Wordpress", "Figma", "CSS"],
        color: "#676767",
        inProcess: true
    },
    {
        src: "./src/assets/images/projects/gsp.webp",
        title: "GSP landing page",
        description: "Landing page developed for promoting the Green Scholarship Program.",
        url: "https://gspcabo.netlify.app/",
        tecnologies: ["HTML", "CSS", "JavaScript"],
        color: "#226742",
    },

    
    {
        src: "./src/assets/images/projects/linkedList.webp",
        title: "Simple Linked List",
        description: "Linked List app developed for the Data Structures course in order to learn how it workds.",
        url: "https://lista-enlazada.netlify.app/",
        tecnologies: ["HTML", "CSS", "JavaScript"],
        color: "#272727",
    },

    
    
    {
        src: "./src/assets/images/projects/planets.webp",
        title: "Planest Facts",
        description: "Web app developed for learning React and consuming an API.",
        url: "https://planet-factss.netlify.app/",
        tecnologies: ["React", "Styledcomponents"],
        color: "#2E1A47",
    },

    {
        src: "./src/assets/images/projects/emoji.webp",
        title: "Emoji app",
        description: "Web app developed for learning React and animations.",
        url: "https://admiring-kalam-5cd446.netlify.app/",
        tecnologies: ["React", "Styledcomponents"],
        color: "#000000",
    }


]

const $projects = document.querySelector(".projects");

const getprojectElement = ({ src, title, description, url, tecnologies, color, inProcess }) => {

    const tecnologiesElement = tecnologies.map((tecnology) => {
        return `<span class="tecnology" style="color:${color};">${tecnology}</span>`
    }).join("")


    return `
    <figure class="project ${inProcess ? "project-inprocess" : ''}" style="background-image: url('${src}'); background-size: contain; &::before: linear-gradient(transparent 0%, ${color} 100%);">
    ${ inProcess ? '<span class="inprogress-chip"><img src="/src/assets/images/gear.webp" alt="gear icon"/> Work in Progress...</span>' : ''}
    
    
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
