"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Modal=function(){function e(t,n,a,i,o){_classCallCheck(this,e),this.$container=t,this.$img=n,this.$title=a,this.$content=i,this.$button=o,this.isVisible=!1,this.addCloseModalEvent()}return _createClass(e,[{key:"addCloseModalEvent",value:function(){var e=this;window.addEventListener("click",(function(t){if(e.isVisible){var n=t.target.className.includes("modal__btn"),a=t.target.className.includes("modal-container");(n||a)&&e.closeModal()}}))}},{key:"setTitle",value:function(e){this.$title.textContent=e}},{key:"setContent",value:function(e){this.$content.textContent=e}},{key:"setImg",value:function(e){this.$title.src=e}},{key:"buildModal",value:function(e,t,n){this.setTitle(e),this.setContent(t),this.setImg(n)}},{key:"openModal",value:function(e,t,n){this.buildModal(e,t,n),this.isVisible=!0,this.$container.style.display="flex"}},{key:"closeModal",value:function(){this.isVisible=!1,this.$container.style.display="none"}}]),e}(),$modalContainer=document.querySelector(".modal-container"),$modalImg=document.querySelector(".modal__img"),$modalTitle=document.querySelector(".modal__title"),$modalContent=document.querySelector(".modal__content"),$modalBtn=document.querySelector(".modal__btn"),imgEmailUrl="./dist/assets/img/email.svg",modal=new Modal($modalContainer,$modalImg,$modalTitle,$modalContent,$modalBtn),proyects=[{id:1,name:"gsp cabo landing Page",link:"https://gspcabo.netlify.app/",thumbail:"./dist/assets/img/proyects/gspcabo.png"},{id:2,name:"Emoji App",link:"https://admiring-kalam-5cd446.netlify.app",thumbail:"./dist/assets/img/proyects/emojiapp.png"},{id:3,name:"Type And Type",link:"https://typing-applg.netlify.app",thumbail:"./dist/assets/img/proyects/typeandtype.png"},{id:4,name:"Planet fact",link:"https://planet-factss.netlify.app",thumbail:"./dist/assets/img/proyects/planetsSite.png"},{id:5,name:"Linked List",link:"https://lista-enlazada.netlify.app",thumbail:"./dist/assets/img/proyects/linkedList.png"},{id:6,name:"GSP Form",link:"https://admiring-kalam-5cd446.netlify.app",thumbail:"./dist/assets/img/proyects/gspform.png"}],loadProyects=function(){var e=document.querySelector(".proyects"),t="";proyects.forEach((function(e){var n=e.link,a=e.name,i=(e.id,e.thumbail);t+='<a href="'.concat(n,'" target="_blank" class="proyects__proyect" >\n\t\t<img src="').concat(i,'" alt="').concat(a,'" />\n    </a>\n')})),e.innerHTML=t},sendData=function(e){var t="https://formsubmit.co/ajax/".concat("luislopez1099lg@gmail.com"),n=JSON.stringify(e);fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:n}).then((function(e){return e.ok?e.json():new Promise.reject("Oops! There was an error :(")})).then((function(e){e.success,console.log(e),modal.openModal("¡Mensaje envíado!","Tu mensaje fue recibido, gracias",imgEmailUrl)})).catch((function(e){console.log(e)}))},loadEmailSender=function(){var e=document.querySelector(".contact-form");e.addEventListener("submit",(function(t){t.preventDefault();var n={name:e.name.value,email:e.email.value,message:e.content.value};sendData(n)}))};window.addEventListener("DOMContentLoaded",(function(e){loadProyects(),loadEmailSender()}));
//# sourceMappingURL=script.js.map