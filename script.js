const tosts = document.getElementById('tosts')
const button = document.getElementById('button')

let msg = ['message 1', 'message 2', 'message 3', 'message 4']

button.addEventListener('click', createNotification)

function createNotification() {
    const tost = document.createElement('div')
    tost.innerText = msg[Math.floor(Math.random() * msg.length)]
    tost.classList.add('tost')
    tosts.appendChild(tost)
    setTimeout(() => {
        tost.remove()
    }, 3000)
    console.log('Enna than aachu!!')
}