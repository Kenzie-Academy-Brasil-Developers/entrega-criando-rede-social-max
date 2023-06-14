import { handleModal } from "./index.js"

export function render(arrayDatabase, typeList) {
  const listPosts = document.querySelector(".main-list__posts")
  const listSuggestions = document.querySelectorAll(".main-list__suggestions")

  if (typeList === 1) {
    listPosts.innerHTML = ""
  } else {
    listSuggestions.forEach((listSuggestion) => {
      listSuggestion.innerHTML = ""
    })
  }

  arrayDatabase.forEach((arrayRender) => {
    const card = createCard(arrayRender, typeList)

    if (typeList === 1) {
      listPosts.appendChild(card)
    } else {
      listSuggestions.forEach((listSuggestion) => {
        const clonedCard = card.cloneNode(true)
        listSuggestion.appendChild(clonedCard)

        const buttonSuggestionClick = clonedCard.querySelector(".button__suggestion")
        buttonSuggestionClick.addEventListener("click", function () {
          toggleButton(buttonSuggestionClick)
        })
      })
    }

  })

  if (typeList === 1) {
    handleModal()
  }
}


function createCard(userArray, typeList) {
  if (typeList === 1) {
    const listPosts = document.createElement("li")
    const userContainer = document.createElement("section")
    const userDesc = document.createElement("div")
    const imgUser = document.createElement("img")
    const nameUser = document.createElement("h2")
    const stackUser = document.createElement("p")
    const titlePost = document.createElement("h3")
    const textPost = document.createElement("p")
    const buttonsContainer = document.createElement("div")
    const buttonPost = document.createElement("button")
    const heartContainerDiv = document.createElement("div")
    const heartPost = document.createElement("img")
    const numberHearts = document.createElement("p")

    listPosts.classList.add("list__posts")
    userContainer.classList.add("desc-user__container")
    userDesc.classList.add("user__desc")
    imgUser.classList.add("user__img")

    imgUser.src = userArray.img
    nameUser.innerText = userArray.user
    stackUser.innerText = userArray.stack

    titlePost.innerText = userArray.title
    textPost.innerText = userArray.text

    buttonsContainer.classList.add("post-button__container")
    buttonPost.classList.add("button__post")
    heartContainerDiv.classList.add("heart__container")
    heartPost.classList.add("post__heart")

    heartPost.src = "./src/assets/img/heart-grey.png"
    heartPost.alt = "heart-grey"
    buttonPost.innerText = "Abrir Post"
    buttonPost.dataset.clientId = userArray.id
    numberHearts.innerText = `${userArray.likes}`

    listPosts.append(userContainer, titlePost, textPost, buttonsContainer)
    userContainer.append(imgUser, userDesc)
    userDesc.append(nameUser, stackUser)
    buttonsContainer.append(buttonPost, heartContainerDiv)
    heartContainerDiv.append(heartPost, numberHearts)

    heartContainerDiv.addEventListener("click", function () {
      if (heartPost.src.includes("heart-grey")) {
        heartPost.src = "./src/assets/img/heart-red.png"
        heartPost.alt = "heart-red"
        userArray.likes++
      } else {
        heartPost.src = "./src/assets/img/heart-grey.png"
        heartPost.alt = "heart-grey"
        userArray.likes--
      }
      numberHearts.textContent = userArray.likes
    })

    return listPosts
  } else {
    const listSuggestion = document.createElement("li")
    const userContainer = document.createElement("section")
    const userDesc = document.createElement("div")
    const imgUser = document.createElement("img")
    const nameUser = document.createElement("h2")
    const stackUser = document.createElement("p")
    const buttonSuggestion = document.createElement("button")

    listSuggestion.classList.add("list__suggestions")
    userContainer.classList.add("desc-user__container")
    userDesc.classList.add("user__desc")
    imgUser.classList.add("user__img")
    buttonSuggestion.classList.add("button__suggestion")

    imgUser.src = userArray.img
    nameUser.innerText = userArray.user
    stackUser.innerText = userArray.stack
    buttonSuggestion.innerText = "Seguir"
    buttonSuggestion.clientid = userArray.id

    listSuggestion.append(userContainer, buttonSuggestion)
    userContainer.append(imgUser, userDesc)
    userDesc.append(nameUser, stackUser)

    const buttonSuggestionClick = listSuggestion.querySelector(".button__suggestion")

    buttonSuggestionClick.addEventListener("click", function () {
      toggleButton(buttonSuggestionClick)
    })

    return listSuggestion
  }
}

const toggleButton = (button) => {
  if (button.innerText === "Seguir") {
    button.innerText = "Seguindo"
    button.classList.add("seguindo__suggestion")
    button.classList.remove("button__suggestion")
  } else {
    button.innerText = "Seguir"
    button.classList.remove("seguindo__suggestion")
    button.classList.add("button__suggestion")
  }
}

