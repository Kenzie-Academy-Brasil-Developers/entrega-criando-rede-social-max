import { posts, users } from './database.js'
import { suggestUsers } from './database.js'
import { closeModal, closeModalOutlineClick, createModal } from './modal.js'
import { render } from './render.js'

export const handleModal = () => {
  const modalController = document.querySelector('.modal__controller')
  const buttonPost = document.querySelectorAll('.button__post')

  buttonPost.forEach((button) => {
    button.addEventListener('click', (event) => {
      modalController.innerHTML = ''

      const modalContent = createModal(event.target.dataset.clientId)

      modalController.appendChild(modalContent)

      modalController.showModal()

      closeModal()
      closeModalOutlineClick()
    })
  })
}

const insertPost = () => {
  const buttonForm = document.querySelector('.button__form')
  const inputTitle = document.querySelector('.input__form')
  const inputText = document.querySelector('.text__form')
  const validationMessages = document.querySelector('.validation-message')

  buttonForm.addEventListener('click', (event) => {
    const clientId = Number(event.target.dataset.clientId)

    event.preventDefault()

    if (inputTitle.value === '' || inputText.value === '') {
      validationMessages.style.display = 'block'
      validationMessages.textContent = 'Por favor, preencha todos os campos.'
      return
    }

    let newValue = {}
    const userSearch = users.find((user) => user.id === clientId)

    newValue.user = userSearch.user
    newValue.stack = userSearch.stack
    newValue.img = userSearch.img
    newValue.title = inputTitle.value
    newValue.text = inputText.value
    newValue.id = posts.length + 1
    newValue.likes = 0
    posts.push(newValue)

    validationMessages.style.display = 'none'

    inputTitle.value = ''
    inputText.value = ''
    render(posts, 1)
  })
}

render(posts, 1)
render(suggestUsers, 2)
insertPost()
