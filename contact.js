const scriptURL = 'https://script.google.com/macros/s/AKfycbyhEP9NTOnfQShhBoEvImrIOm-2vD3UZGrPYRoKx2ArerRv5I3Gd1xot4fQXBmbk3V99g/exec'
const form = document.forms['Contact Form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})