// nav bar scroll effect
const header = document.querySelector('header')

// window is the entire browsing window, bigger than document
window.addEventListener('scroll', () => {
    /* waits for event 'scroll' to activate
    window.scrollY is scrolling vertically on Y-axis. if user scrolls up to 50 px,
    add 'scrolled' property from CSS to header, else remove.
    at the very top of the page, scrollY is zero */
    if (window.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

// .hero-title
const typingText = document.querySelector('#typing-text-span')

// titles to loop through
const titles = [
    "Aspiring Software Developer",
    "Python Programmer",
    "JavaScript Modder",
    "Problem Solver",
    "C++ Enthusiast",
    "Tech Explorer"
]

let titleIndex = 0
let letterIndex = 0
let isDeleting = false

function type() {
    /* does the typing */

    // get current title
    const currentTitle = titles[titleIndex]

    // checks whether typing or deleting
    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, letterIndex - 1)
        letterIndex--
    } else {
        typingText.textContent = currentTitle.substring(0, letterIndex + 1)
        letterIndex++
    }

    // checks if finished typing the whole title
    if (!isDeleting && letterIndex === currentTitle.length) {
        // pause at the end and then start deleting
        isDeleting = true
        setTimeout(type, 1500) // wait 1.5s and call the function again
        return
    }

    // checks if finished deleting
    if (isDeleting && letterIndex === 0) {
        // move to the next title
        isDeleting = false
        titleIndex = (titleIndex + 1) % titles.length
        setTimeout(type, 500)
        return
    }

    // continue typing or delete next letter
    const speed = isDeleting ? 50 : 100
    setTimeout(type, speed)
}

setTimeout(type, 1000)

/* SCROLL ANIMAITON */

// all elements to animate
const animatedElements = document.querySelectorAll(
    '.hero-content-div, .about-content-div, .skill-category-div, .project-card-article, .contact-content-div, .footer-content-div'
)
console.log('Animated elements found:', animatedElements.length)

// add 'hidden' class to all at once
animatedElements.forEach(function(element) {
    element.classList.add('hidden')
})

// creating observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        console.log('Observer triggered:', entry.target, 'intersecting:', entry.isIntersecting)

        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden')
            entry.target.classList.add('visible')
        } else {
            // Element is going out of view, hide it again
            entry.target.classList.remove('visible')
            entry.target.classList.add('hidden')
        }
    })
}, {threshold: 0.1})

// tell observer to watch all elements
animatedElements.forEach(function(element) {
    observer.observe(element)
})

/* CONTACT FORM */
const contactForm = document.querySelector('#contact-form')

contactForm.addEventListener('submit', event => {
    event.preventDefault() // prevent page from refreshing when pressed submit

    // getting values from each field
    const username = document.querySelector('#name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const message = document.querySelector('#message').value.trim()

    // validate
    if (username === '' || email === '' || message === '') {
        showMessage('Please fill in all fields!', 'error')
        return
    }

    if (!email.includes('@')) {
        showMessage('Please enter a valid email!', 'error')
        return
    }

    // all is well
    showMessage(`Thanks ${username} I'll get back to you soon 🚀`, 'success')
    contactForm.reset()
})

// HELPER FUNCITON - SHOW MESSAGE
function showMessage(text, type) {
    // creating a new div element
    const messageDiv = document.createElement('div')
    messageDiv.textContent = text
    messageDiv.className = `form-message ${type}`

    // inserting it before submit button
    const submitButton = document.querySelector('#contact-form .btn')
    contactForm.insertBefore(messageDiv, submitButton)

    // removing after 4 secs
    setTimeout(() => {
        messageDiv.remove()
    }, 4000)
}

// HAMBURGER MENU
const hamburger = document.querySelector('#hamburger-button')
const navMenu = document.querySelector('nav ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('open')
})

// closing menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('open')
    })
})

// nav bar scroll effect
const header = document.querySelector('header')

// window is the entire browsing window, bigger than document
window.addEventListener('scroll', () => {
    /* waits for event 'scroll' to activate
    window.scrollY is scrolling vertically on Y-axis. if user scrolls up to 50 px,
    add 'scrolled' property from CSS to header, else remove.
    at the very top of the page, scrollY is zero */
    if (window.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

// .hero-title
const typingText = document.querySelector('#typing-text-span')

// titles to loop through
const titles = [
    "Aspiring Software Developer",
    "Python Programmer",
    "JavaScript Modder",
    "Problem Solver",
    "C++ Enthusiast",
    "Tech Explorer"
]

let titleIndex = 0
let letterIndex = 0
let isDeleting = false

function type() {
    /* does the typing */

    // get current title
    const currentTitle = titles[titleIndex]

    // checks whether typing or deleting
    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, letterIndex - 1)
        letterIndex--
    } else {
        typingText.textContent = currentTitle.substring(0, letterIndex + 1)
        letterIndex++
    }

    // checks if finished typing the whole title
    if (!isDeleting && letterIndex === currentTitle.length) {
        // pause at the end and then start deleting
        isDeleting = true
        setTimeout(type, 1500) // wait 1.5s and call the function again
        return
    }

    // checks if finished deleting
    if (isDeleting && letterIndex === 0) {
        // move to the next title
        isDeleting = false
        titleIndex = (titleIndex + 1) % titles.length
        setTimeout(type, 500)
        return
    }

    // continue typing or delete next letter
    const speed = isDeleting ? 50 : 100
    setTimeout(type, speed)
}

setTimeout(type, 1000)

/* SCROLL ANIMAITON */

// all elements to animate
const animatedElements = document.querySelectorAll(
    '.hero-content-div, .about-content-div, .skill-category-div, .project-card-article, .contact-content-div, .footer-content-div'
)
console.log('Animated elements found:', animatedElements.length)

// add 'hidden' class to all at once
animatedElements.forEach(function(element) {
    element.classList.add('hidden')
})

// creating observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        console.log('Observer triggered:', entry.target, 'intersecting:', entry.isIntersecting)

        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden')
            entry.target.classList.add('visible')
        } else {
            // Element is going out of view, hide it again
            entry.target.classList.remove('visible')
            entry.target.classList.add('hidden')
        }
    })
}, {threshold: 0.1})

// tell observer to watch all elements
animatedElements.forEach(function(element) {
    observer.observe(element)
})

/* CONTACT FORM */
const contactForm = document.querySelector('#contact-form')

contactForm.addEventListener('submit', event => {
    event.preventDefault() // prevent page from refreshing when pressed submit

    // getting values from each field
    const username = document.querySelector('#name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const message = document.querySelector('#message').value.trim()

    // validate
    if (username === '' || email === '' || message === '') {
        showMessage('Please fill in all fields!', 'error')
        return
    }

    if (!email.includes('@')) {
        showMessage('Please enter a valid email!', 'error')
        return
    }

    // all is well
    showMessage(`Thanks ${username} I'll get back to you soon 🚀`, 'success')
    contactForm.reset()
})

// HELPER FUNCITON - SHOW MESSAGE
function showMessage(text, type) {
    // creating a new div element
    const messageDiv = document.createElement('div')
    messageDiv.textContent = text
    messageDiv.className = `form-message ${type}`

    // inserting it before submit button
    const submitButton = document.querySelector('#contact-form .btn')
    contactForm.insertBefore(messageDiv, submitButton)

    // removing after 4 secs
    setTimeout(() => {
        messageDiv.remove()
    }, 4000)
}

// HAMBURGER MENU
const hamburger = document.querySelector('#hamburger-button')
const navMenu = document.querySelector('nav ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('open')
})

// closing menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('open')
    })
})
