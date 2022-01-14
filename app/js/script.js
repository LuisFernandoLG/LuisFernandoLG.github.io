const proyects = [
  {
    id: 1,
    name: "gsp cabo landing Page",
    link: "https://gspcabo.netlify.app/",
    thumbail: "./dist/assets/img/proyects/gspcabo.png",
  },
  {
    id: 2,
    name: "Emoji App",
    link: "https://admiring-kalam-5cd446.netlify.app",
    thumbail: "./dist/assets/img/proyects/emojiapp.png",
  },
  {
    id: 3,
    name: "Type And Type",
    link: "https://typing-applg.netlify.app",
    thumbail: "./dist/assets/img/proyects/typeandtype.png",
  },
  {
    id: 4,
    name: "Planet fact",
    link: "https://planet-factss.netlify.app",
    thumbail: "./dist/assets/img/proyects/planetsSite.png",
  },

  {
    id: 5,
    name: "Linked List",
    link: "https://lista-enlazada.netlify.app",
    thumbail: "./dist/assets/img/proyects/linkedList.png",
  },

  {
    id: 6,
    name: "GSP Form",
    link: "https://admiring-kalam-5cd446.netlify.app",
    thumbail: "./dist/assets/img/proyects/gspform.png",
  },
];

const loadProyects = () => {
  let $proyectsContainer = document.querySelector(".proyects");

  let $proyectsLoaded = "";
  proyects.forEach(({ link, name, id, thumbail }) => {
    $proyectsLoaded += `<a href="${link}" target="_blank" class="proyects__proyect" >
		<img src="${thumbail}" alt="${name}" />
    <span className="github_link">Github</span>
    </a>
`;
  });

  $proyectsContainer.innerHTML = $proyectsLoaded;
};

window.addEventListener("DOMContentLoaded", (event) => {
  loadProyects();
});
