import { posts } from "./database.js"

export function createModal(clientId) {
    let client = {}

    for (let i = 0; i < posts.length; i++) {

        if (clientId == posts[i].id) {
            client = posts[i]
        }
    }

    const modalContainer = document.createElement('section')
    const topContainer = document.createElement('section')
    const userContainer = document.createElement('section')
    const userDesc = document.createElement('div')
    const imgUser = document.createElement('img')
    const nameUser = document.createElement('h2')
    const stackUser = document.createElement('p')
    const closeButton = document.createElement('button')
    const postContainer = document.createElement('div')
    const titlePost = document.createElement('h4')
    const textPost = document.createElement('p')

    modalContainer.classList.add('modal__container')
    topContainer.classList.add('modal-top_container')
    userContainer.classList.add('desc-user__container')
    userDesc.classList.add('user__desc')
    closeButton.classList.add('modal__close')
    imgUser.classList.add('user__img')

    imgUser.src = client.img
    nameUser.innerText = client.user
    stackUser.innerText = client.stack
    closeButton.innerText = 'X'

    postContainer.classList.add('modal-post__container')

    titlePost.innerText = client.title
    textPost.innerText = client.text

    modalContainer.append(topContainer, postContainer)
    topContainer.append(userContainer, closeButton)
    userContainer.append(imgUser, userDesc)
    userDesc.append(nameUser, stackUser)
    postContainer.append(titlePost, textPost)

    return modalContainer
}