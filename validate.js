const email = document.querySelector('input[type="email"]')
const submit = document.querySelector('input[type="submit"]')
const errorMessage = document.querySelector('.email-error')

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

submit.addEventListener('click', (e) => {
  e.preventDefault()
  errorMessage.style.display = 'none'
  if (!regex.test(email.value)) {
    errorMessage.style.display = 'block'
  }
})
