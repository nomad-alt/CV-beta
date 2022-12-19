const educationList = document.querySelector(".educationList");
const employmentList = document.querySelector(".employmentList");

fetch("/json/cv.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    data.education.forEach((edu) => {
      educationList.innerHTML += `
            <h3>${edu.heading}</h3>
            <li>${edu.text}</li>`;
    });

    data.employment.forEach((emp) => {
      employmentList.innerHTML += `
            <h3>${emp.heading}</h3>
            <li>${emp.text}</li>`;
    });
  });

const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
});
