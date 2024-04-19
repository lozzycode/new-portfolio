const displayContact = document.querySelector('.contact')

fetch('contact.json').then(function (response) {
    return response.json();
}).then(function (data) {
//    console.log(data);
    data.contact.forEach(function(contact) {
      displayContact.innerHTML += `<ul>
            <li>${contact.email}</li>
            <li>${contact.github}</li>
            <li>${contact.tel}</li>
            </ul>`
    })
})

document.querySelector('.form-grid').addEventListener('submit', handleSubmit);

function handleSubmit() {
  console.log('Form is submitting')
 
}

// function handleSubmit(e) {
//     console.log('Form is submitting')
//    // e.preventDefault()
//   }