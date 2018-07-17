const currentLikeList = {}

const counter = document.querySelector('#counter')
const incrementButton = document.getElementById('+')
const decrementButton = document.getElementById('-')

const likesList = document.querySelector('.likes')
const likeButton = document.getElementById('<3')

const commentList = document.querySelector('#list')
const addCommentButton = document.querySelector('#submit')
const commentInput = document.querySelector('input')

const pauseButton = document.querySelector('#pause')

const incrementCounter = () => (counter.innerHTML = Number.parseInt(counter.innerHTML) +1)

incrementButton.addEventListener('click',function (event) {
    counter.innerHTML = Number.parseInt(counter.innerHTML) +1
})

decrementButton.addEventListener('click', function (event) {
    counter.innerHTML = Number.parseInt(counter.innerHTML) - 1
})

likeButton.addEventListener('click',function (e) {
    // Update currentLikeList
    let currentTime = counter.innerText
    if (!!currentLikeList[currentTime]) { //time has been liked
        currentLikeList[currentTime]+=1
        likeListItem = document.getElementById(`likes-${currentTime}`)
        likeListItem.innerText = `${currentTime} has been liked ${currentLikeList[currentTime]} times`
    }else{
        currentLikeList[currentTime] = 1 //new time
        let newLikeListItem = document.createElement('li')
        newLikeListItem.id = `likes-${currentTime}`
        let t = document.createTextNode(`${currentTime} has been liked 1 time`)
        newLikeListItem.appendChild(t)
        likesList.appendChild(newLikeListItem)
    }
})

pauseButton.addEventListener('click', function (e) {

    if (pauseButton.innerText === "pause") {
        clearInterval(intervalID)
        pauseButton.innerText = "resume"
        incrementButton.disabled = true
        decrementButton.disabled = true 
        likeButton.disabled = true
        addCommentButton.disabled = true
    }
    else{
        intervalID = window.setInterval(incrementCounter, 1000);
        pauseButton.innerText = "pause"
        incrementButton.disabled = false
        decrementButton.disabled = false
        likeButton.disabled = false
        addCommentButton.disabled = false
    }
})


addCommentButton.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    let newComment = document.createElement('p')
    let commentText = document.createTextNode(commentInput.value)
    newComment.appendChild(commentText)
    commentInput.value = ""
    commentList.appendChild(newComment)
})

let intervalID = window.setInterval(incrementCounter, 1000);
