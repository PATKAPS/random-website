let settingsMenu = document.querySelector('.settings-box')
let menuButton = document.querySelector('.fa-solid.fa-bars.fa-xl')
let lightModeSwitch = document.querySelector('.switch')
let homeButton = document.querySelector('.fa-solid.fa-house-chimney.fa-xl')
let allParagraphs = document.querySelectorAll('p')


const menuDropDownShow = () => {
    settingsMenu.style.display = 'flex'
    menuButton.style.cursor = 'default'
}

const menuDropDownHide = () => {
    settingsMenu.style.display = 'none'
    menuButton.style.cursor = 'pointer'
}

const lightModeOn = () => {
    lightModeSwitch.style.justifyContent = 'flex-end'
    document.body.style.backgroundColor = 'white'
    document.querySelector('.fa-house-chimney').style.color = 'black'
    menuButton.style.color = 'black'
    document.querySelector('header').style.borderBottom = '1px solid black'
    settingsMenu.style.backgroundColor = 'white'
    settingsMenu.style.border = '1px solid black'
    allParagraphs.forEach((paragraph) => {
        paragraph.style.color = 'black'
    })
    lightModeSwitch.style.border = '.2rem solid black'
    document.querySelector('.circle').style.border = '1px solid black'
    document.querySelector('.circle').style.backgroundColor = 'black'
}

const lightModeOff = () => {
    lightModeSwitch.style.justifyContent = 'flex-start'
    document.body.style.backgroundColor = 'rgb(36, 36, 36)'
    document.querySelector('.fa-house-chimney').style.color = 'white'
    menuButton.style.color = 'white'
    document.querySelector('header').style.borderBottom = '1px solid white'
    settingsMenu.style.backgroundColor = 'rgb(36, 36, 36)'
    settingsMenu.style.border = '1px solid white'
    allParagraphs.forEach((paragraph) => {
        paragraph.style.color = 'white'
    })
    lightModeSwitch.style.border = '.2rem solid white'
    document.querySelector('.circle').style.border = '1px solid white'
    document.querySelector('.circle').style.backgroundColor = 'white'
}

menuButton.addEventListener('click', menuDropDownShow)

document.addEventListener('click', (event) => {
    if (!settingsMenu.contains(event.target) && !menuButton.contains(event.target)) {
        menuDropDownHide();
    }
})

lightModeSwitch.addEventListener('click', () => {
    if (lightModeSwitch.style.justifyContent === 'flex-end') {
        lightModeOff()
    } else {
        lightModeOn()
    }
})