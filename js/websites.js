const displayWebsites = document.querySelector('.websites')

fetch('websites.json').then(function (response) {
    return response.json();
}).then(function (data) {
   //console.log(data)
    data.websites.forEach(function(websites) {
      displayWebsites.innerHTML += `
            <a href="http://www.activeconsideration.org" 
            target="_blank"><h4>${websites.website1}</h4></a>
            <br>
            <a href="#" 
            target="_blank"><h4>${websites.website2}</h4></a>
            <br>
            <a href="https://www.currymahal.net/gallery.html" 
            target="_blank"><h4>${websites.website3}</h4></a>
            <br>
            <a href="#" 
            target="_blank"><h4>${websites.website4}</h4></a>
            <br>
            <a href="#" 
            target="_blank"><h4>${websites.website5}</h4></a>
            <br>
            <a href="https://www.facebook.com/subudbookings/?locale=en_GB" 
            target="_blank"><h4>${websites.website6}</h4></a>
            <br>
            `
    })
})