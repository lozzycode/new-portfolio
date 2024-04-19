const displayAbout = document.querySelector('.about')

fetch('about.json').then(function (response) {
    return response.json();
}).then(function (data) {
   //console.log(data)
    data.about.forEach(function(about) {
      displayAbout.innerHTML += `<ul>
            <li>Name: ${about.name}</li>
            <li>Occupation: ${about.occupation}</li>
            <li>Previous IT Roles: ${about.previousitroles}</li>
            <li>Qualifications: ${about.qualifications}</li>
            <li>Hobbies: ${about.hobbies}</li>
            </ul>`
    })
})