// typeList se refere se é o post = '1' ou o suggestion = '2' 
export function render(arrayDatabase, typeList) {
    const listPosts = document.querySelector('.list__posts')
    const listSuggestions = document.querySelector('.main-list__suggestions')

    if (typeList == 1) {
        listPosts.innerHTML = ''
    } else {
        listSuggestions.innerHTML = ''
    }

    for (let i = 0; i < arrayDatabase.length; i++) {
        const userArray = arrayDatabase[i]

        const card = createCard(userArray, typeList)

        console.log(card) // REMOVER ##################################

        if (typeList == 1) {
            listPosts.appendChild(card)
        } else {
            listSuggestions.appendChild(card)
        }

    }
}

function createCard(userArray, typeList) {
    if (typeList == 1) {
        const listPosts = document.createElement('li')
        const userContainer = document.createElement('section')
        const userDesc = document.createElement('div')
        const imgUser = document.createElement('img')
        const nameUser = document.createElement('h2')
        const stackUser = document.createElement('p')
        const titlePost = document.createElement('h3')
        const textPost = document.createElement('p')
        const buttonsContainer = document.createElement('div')
        const buttonPost = document.createElement('button')
        const heartPost = document.createElement('img')
        const numberHearts = document.createElement('p')

        listPosts.classList.add('list__posts')
        userContainer.classList.add('desc-user__container')
        userDesc.classList.add('user__desc')
        imgUser.classList.add('user__img')


        imgUser.src = userArray.img
        nameUser.innerText = userArray.user
        stackUser.innerText = userArray.stack

        titlePost.innerText = userArray.title
        textPost.innerText = userArray.text

        buttonsContainer.classList.add('post-button__container')
        buttonPost.classList.add('button__post')
        heartPost.classList.add('post__heart')

        heartPost.src = './src/assets/img/heart-grey.png'
        buttonPost.innerText = 'Abrir Post'
        buttonPost.dataset.clientId = userArray.id
        numberHearts.innerText = `${userArray.likes}`

        listPosts.append(userContainer, titlePost, textPost, buttonsContainer)
        userContainer.append(imgUser, userDesc)
        userDesc.append(nameUser, stackUser)
        buttonsContainer.append(buttonPost, heartPost, numberHearts)

        return listPosts

    } else {
        const listSuggestion = document.createElement('li')
        const userContainer = document.createElement('section')
        const userDesc = document.createElement('div')
        const imgUser = document.createElement('img')
        const nameUser = document.createElement('h2')
        const stackUser = document.createElement('p')
        const buttonSuggestion = document.createElement('button')

        listSuggestion.classList.add('list__suggestions')
        userContainer.classList.add('desc-user__container')
        userDesc.classList.add('user__desc')
        imgUser.classList.add('user__img')
        buttonSuggestion.classList.add('button__suggestion')

        imgUser.src = userArray.img
        nameUser.innerText = userArray.user
        stackUser.innerText = userArray.stack
        buttonSuggestion.innerText = 'Seguir'

        listSuggestion.append(userContainer, buttonSuggestion)
        userContainer.append(imgUser, userDesc)
        userDesc.append(nameUser, stackUser)

        return listSuggestion
    }

}