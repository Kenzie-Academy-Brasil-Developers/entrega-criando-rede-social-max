import { posts } from "./database.js";
import { suggestUsers } from "./database.js";
import { createModal } from "./modal.js";
import { render } from "./render.js";

function handleModal() {
  const modalController = document.querySelector('.modal__controller')
  const buttonPost = document.querySelectorAll('.button__post')

  for(let i = 0; i < buttonPost.length; i++) {
    const button = buttonPost[i]

    button.addEventListener('click', function(event) {
      modalController.innerHTML = ''
      
      console.log(event.target.dataset.clientId)

      const modalContent = createModal(event.target.dataset.clientId)

      modalController.appendChild(modalContent)

      modalController.showModal()

      closeModal()

    })
  }
}

function closeModal() {
  const closeButton = document.querySelector('.modal__close')
  const modalController = document.querySelector('.modal__controller')

  console.log(closeButton)

  closeButton.addEventListener('click', function() {
    modalController.close()
  })
}

render(posts, 1)
render(suggestUsers, 2)
handleModal()