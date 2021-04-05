const navSlide = () => {
  const navToggle = document.querySelector("#navToggle");
  const menu = document.querySelector("#menu");
  const navLinksFadeIn = document.querySelectorAll(".navLinks li");


  navToggle.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full')
    navLinksFadeIn.forEach(link => {
      link.classList.toggle('fadeIn');
    });

  });

}

navSlide()


// const faqToggle = document.querySelectorAll(".faqToggle");
// const faq = document.querySelectorAll(".faq")
//
//   faqToggle.addEventListener('click', () => {
//     faq.forEach(question => {
//       question.classList.toggle("hidden");
//     })
//   })

// var accordions = document.getElementsByClassName("accordion");
//
// for (var i = 0; i < accordions.length; i++) {
//   accordions[i].onclick = function() {
//     var content = this.nextElementSibling;
//
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   }
// }

// var accordions = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < accordions.length; i++) {
//   accordions[i].addEventListener("click", function() {
//   for (var j = 0; j < accordions.length; j++) {
//                 accordions[j].classList.remove("max-h-0")
//                 accordions[j].nextElementSibling.style.maxHeight = null;
//             }
//     this.classList.toggle("max-h-0");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

var accordions = document.getElementsByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function(evnt) {
    const currClassList = evnt.target.classList;
    if (currClassList.contains('max-h-0')) {
        evnt.target.classList.remove("max-h-0");
        var content = evnt.target.nextElementSibling;
        content.style.maxHeight = null;
    } else {
      for (var j = 0; j < accordions.length; j++) {
           accordions[j].classList.remove("max-h-0")
           accordions[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("max-h-0");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });
}
