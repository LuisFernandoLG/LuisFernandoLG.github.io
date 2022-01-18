"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var $=function(e){return document.querySelector(e)},Modal=function(){function e(t,n,i,s,a){_classCallCheck(this,e),this.$container=t,this.$img=n,this.$title=i,this.$content=s,this.$button=a,this.isVisible=!1,this.addCloseModalEvent()}return _createClass(e,[{key:"addCloseModalEvent",value:function(){var e=this;window.addEventListener("click",(function(t){if(e.isVisible){var n=t.target.className.includes("modal__btn"),i=t.target.className.includes("modal-container");(n||i)&&e.closeModal()}}))}},{key:"setTitle",value:function(e){this.$title.textContent=e}},{key:"setContent",value:function(e){this.$content.textContent=e}},{key:"setImg",value:function(e){this.$img.src=e}},{key:"buildModal",value:function(e,t,n){this.setTitle(e),this.setContent(t),this.setImg(n)}},{key:"openModal",value:function(e,t,n){this.buildModal(e,t,n),this.isVisible=!0,this.$container.style.display="flex"}},{key:"closeModal",value:function(){this.isVisible=!1,this.$container.style.display="none"}}]),e}(),$modalContainer=document.querySelector(".modal-container"),$modalImg=document.querySelector(".modal__img img"),$modalTitle=document.querySelector(".modal__title"),$modalContent=document.querySelector(".modal__content"),$modalBtn=document.querySelector(".modal__btn"),modal=new Modal($modalContainer,$modalImg,$modalTitle,$modalContent,$modalBtn),proyects=[{id:1,name:"gsp cabo landing Page",link:"https://gspcabo.netlify.app/",thumbail:"./dist/assets/img/proyects/gspcabo.png",miniVideo:"./dist/assets/videos/gsplanding.mp4"},{id:2,name:"Emoji App",link:"https://admiring-kalam-5cd446.netlify.app",thumbail:"./dist/assets/img/proyects/emojiapp.png",miniVideo:"./dist/assets/videos/emojiapp.mp4"},{id:3,name:"Type And Type",link:"https://typing-applg.netlify.app",thumbail:"./dist/assets/img/proyects/typeandtype.png",miniVideo:"./dist/assets/videos/typeandtype.mp4"},{id:4,name:"Planet fact",link:"https://planet-factss.netlify.app",thumbail:"./dist/assets/img/proyects/planetsSite.png",miniVideo:"./dist/assets/videos/planets.mp4"},{id:5,name:"Linked List",link:"https://lista-enlazada.netlify.app",thumbail:"./dist/assets/img/proyects/linkedList.png",miniVideo:"./dist/assets/videos/linkedlist.mp4"},{id:6,name:"GSP Form",link:"https://gsp-app-form.netlify.app/",thumbail:"./dist/assets/img/proyects/gspform.png",miniVideo:"./dist/assets/videos/gspform.mp4"}],loadProyects=function(){var e=document.querySelector(".proyects");proyects.forEach((function(t){var n=t.link,i=t.name,s=t.id,a=(t.thumbail,t.miniVideo);console.log(s),e.innerHTML+='<a href="'.concat(n,'" target="_blank" class="proyects__proyect">\n    <video class="video-').concat(s,' " muted> \n      <source src="').concat(a,'" type="video/mp4">\n    </video>\n    <div class="texts-content">\n    <h3 class="title">').concat(i,'</h3>\n    <p clasS="description">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus corrupti eius molestias iusto voluptates assumenda eum sint veniam consequuntur?</p>\n    </div>\n    </a>\n')}))},addHoverToVideo=function(){proyects.forEach((function(e){var t=e.id;$(".video-".concat(t)).addEventListener("mouseenter",(function(e){e.target.play(),e.target.loop=!0})),$(".video-".concat(t)).addEventListener("mouseleave",(function(e){e.target.pause()}))}))},sendData=function(e){return new Promise((function(t,n){var i="https://formsubmit.co/ajax/".concat("luislopez1099lg@gmail.com"),s=JSON.stringify(e);fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:s}).then((function(e){return e.ok?e.json():new Promise.reject("Oops! There was an error :(")})).then((function(e){e.success,t(!0)})).catch((function(e){n(!1)}))}))},loadEmailSender=function(){var e=document.querySelector(".contact-form"),t=e.submit_btn;e.addEventListener("submit",(function(n){n.preventDefault(),t.value="Sending...";var i={name:e.name.value,email:e.email.value,message:e.content.value};sendData(i).then((function(){modal.openModal("Sent!","your message was sent successfully","./dist/assets/img/email.svg"),e.reset()})).catch((function(){modal.openModal("Error!","There was an error :(","./dist/assets/img/sadface.svg")})).finally((function(){t.value="Submit"}))}))};window.addEventListener("DOMContentLoaded",(function(e){loadProyects(),loadEmailSender(),addHoverToVideo()}));
//# sourceMappingURL=script.js.map