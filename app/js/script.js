const $ = (selector) => document.querySelector(selector);

class Modal {
  constructor($container, $img, $title, $content, $button) {
    this.$container = $container;
    this.$img = $img;
    this.$title = $title;
    this.$content = $content;
    this.$button = $button;
    this.isVisible = false;
    this.addCloseModalEvent();
  }

  // Events added
  addCloseModalEvent() {
    window.addEventListener("click", (e) => {
      if (!this.isVisible) return;

      const isClickOnBtn = e.target.className.includes("modal__btn");
      const isClickOnContainer = e.target.className.includes("modal-container");
      if (isClickOnBtn || isClickOnContainer) this.closeModal();
    });
  }

  // Setters
  setTitle(title) {
    this.$title.textContent = title;
  }

  setContent(content) {
    this.$content.textContent = content;
  }

  setImg(imgUrl) {
    this.$img.src = imgUrl;
  }

  buildModal(title, content, imgUrl) {
    this.setTitle(title);
    this.setContent(content);
    this.setImg(imgUrl);
  }

  openModal(title, content, imgUrl) {
    this.buildModal(title, content, imgUrl);
    this.isVisible = true;
    this.$container.style.display = "flex";
  }

  closeModal() {
    this.isVisible = false;
    this.$container.style.display = "none";
  }
}

// Modal
const $modalContainer = document.querySelector(".modal-container");
const $modalImg = document.querySelector(".modal__img img");
const $modalTitle = document.querySelector(".modal__title");
const $modalContent = document.querySelector(".modal__content");
const $modalBtn = document.querySelector(".modal__btn");

const modal = new Modal(
  $modalContainer,
  $modalImg,
  $modalTitle,
  $modalContent,
  $modalBtn
);

const proyects = [
  {
    id: 1,
    name: "gsp cabo landing Page",
    link: "https://gspcabo.netlify.app/",
    thumbail: "./dist/assets/img/proyects/gspcabo.png",
    miniVideo: "./dist/assets/videos/gsplanding.mp4",
  },
  {
    id: 2,
    name: "Emoji App",
    link: "https://admiring-kalam-5cd446.netlify.app",
    thumbail: "./dist/assets/img/proyects/emojiapp.png",
    miniVideo: "./dist/assets/videos/emojiapp.mp4",
  },
  {
    id: 3,
    name: "Type And Type",
    link: "https://typing-applg.netlify.app",
    thumbail: "./dist/assets/img/proyects/typeandtype.png",
    miniVideo: "./dist/assets/videos/typeandtype.mp4",
  },
  {
    id: 4,
    name: "Planet fact",
    link: "https://planet-factss.netlify.app",
    thumbail: "./dist/assets/img/proyects/planetsSite.png",
    miniVideo: "./dist/assets/videos/planets.mp4",
  },

  {
    id: 5,
    name: "Linked List",
    link: "https://lista-enlazada.netlify.app",
    thumbail: "./dist/assets/img/proyects/linkedList.png",
    miniVideo: "./dist/assets/videos/linkedlist.mp4",
  },

  {
    id: 6,
    name: "GSP Form",
    link: "https://gsp-app-form.netlify.app/",
    thumbail: "./dist/assets/img/proyects/gspform.png",
    miniVideo: "./dist/assets/videos/gspform.mp4",
  },
];

const loadProyects = () => {
  let $proyectsContainer = document.querySelector(".proyects");

  let $proyectsLoaded = "";
  proyects.forEach(({ link, name, id, thumbail, miniVideo }) => {
    console.log(id);
    $proyectsContainer.innerHTML += `<a href="${link}" target="_blank" class="proyects__proyect" >
    <video class="video-${id}"> 
      <source src="${miniVideo}" type="video/mp4">
    </video>
    </a>
`;
  });
};

const addHoverToVideo = () => {
  proyects.forEach(({ id }) => {
    $(`.video-${id}`).addEventListener("mouseenter", function (e) {
      e.target.play();
      e.target.loop = true;
    });

    $(`.video-${id}`).addEventListener("mouseleave", function (e) {
      e.target.pause();
    });
  });
};

const sendData = (form) =>
  new Promise((resolve, reject) => {
    const email = "luislopez1099lg@gmail.com";
    const url = `https://formsubmit.co/ajax/${email}`;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const body = JSON.stringify(form);

    fetch(url, {
      method: "POST",
      headers,
      body,
    })
      .then((response) => {
        return response.ok
          ? response.json()
          : new Promise.reject("Oops! There was an error :(");
      })
      .then((data) => {
        data.success === "true";
        resolve(true);
      })
      .catch((error) => {
        reject(false);
      });
  });

const loadEmailSender = () => {
  const $form = document.querySelector(".contact-form");
  const $submitBtn = $form.submit_btn;

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    $submitBtn.value = "Sending...";

    const data = {
      name: $form.name.value,
      email: $form.email.value,
      message: $form.content.value,
    };
    sendData(data)
      .then(() => {
        modal.openModal(
          "Sent!",
          "your message was sent successfully",
          "./dist/assets/img/email.svg"
        );
        $form.reset();
      })
      .catch(() => {
        modal.openModal(
          "Error!",
          "There was an error :(",
          "./dist/assets/img/sadface.svg"
        );
      })
      .finally(() => {
        $submitBtn.value = "Submit";
      });
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  loadProyects();
  loadEmailSender();
  addHoverToVideo();
});
