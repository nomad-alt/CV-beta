const educationList = document.querySelector('.educationList')
const employmentList = document.querySelector('.employmentList')

fetch("/json/cv.json") 
    .then((response) => { 
        if (response.ok) { 
          return response.json(); 
        } else { 
          throw new Error("NETWORK RESPONSE ERROR"); 
        } 
      }) 
       .then(data => { 
       data.education.forEach(edu => {
            educationList.innerHTML += `
            <h3>${edu.heading}</h3>
            <li>${edu.text}</li>`;

        });

        data.employment.forEach(emp => {
            employmentList.innerHTML += `
            <h3>${emp.heading}</h3>
            <li>${emp.text}</li>`;
      });
    })

function toggleMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}