let aqAddButtonOb;
let weAddButtonOb;
let projectAddButtonOb;
function addNewAQField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('aqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter Here");
  if (aq) {
    aq.appendChild(newNode);
  }
}

function addNewWEField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter Here");
  we.appendChild(newNode);
}

function addNewProject() {
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('project');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter Here");
  projects.appendChild(newNode);
}

function generateResume() {
  document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;
  document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
  document.getElementById("aboutT").innerHTML = document.getElementById("aboutField").value;
  document.getElementById("linkedinT").innerHTML = document.getElementById("linkedinField").value;
  document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
  document.getElementById("gmailT").innerHTML = document.getElementById("gmailField").value;
  document.getElementById("skillsT").innerHTML = document.getElementById("skillsField").value;
  /* Image 
  let fileInput = document.getElementById("imgField");
  if (fileInput.files.length > 0) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      document.getElementById("imgT").src = reader.result;
    }
  }*/
  /* Academic Qualification */
  let aqs = document.getElementsByClassName("aqField");
  let str1 = '';
  for(let e of aqs){
    str1 += `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;
  /* Work Experience */
  let wes = document.getElementsByClassName("weField");
  let str2 = '';
  for(let e of wes){
    str2 += `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str2;
  /* Projects */
  let proj = document.getElementsByClassName("project");
  let str3 = '';
  for(let e of proj){
    str3 += `<li>${e.value}</li>`;
  }
  document.getElementById("projectT").innerHTML = str3;

  document.getElementById("resume-form").style.display = 'none';
  document.getElementById("resume-template").style.display = 'block';

  /* storing in local storage */
  localStorage.setItem("nameField", document.getElementById("nameField").value);
  localStorage.setItem("contactField", document.getElementById("contactField").value);
  localStorage.setItem("aboutField", document.getElementById("aboutField").value);
  localStorage.setItem("linkedinField", document.getElementById("linkedinField").value);
  localStorage.setItem("githubField", document.getElementById("githubField").value);
  localStorage.setItem("gmailField", document.getElementById("gmailField").value);
  localStorage.setItem("skillsField", document.getElementById("skillsField").value);
  aqs = document.getElementsByClassName("aqField");
  let aqData = [];
  for (let e of aqs) {
    value = e.value.trim();
    if (value !== "") {
      aqData.push(value);
    }
  }
  localStorage.setItem("aqField", JSON.stringify(aqData));
  wes = document.getElementsByClassName("weField");
  let weData = [];
  for (let e of wes) {
    value = e.value.trim();
    if (value !== "") {
      weData.push(value);
    }
  }
  localStorage.setItem("weField", JSON.stringify(weData));
  proj = document.getElementsByClassName("project");
  let projectData = [];
  for (let e of proj) {
    value = e.value.trim();
    if (value !== "") {
      projectData.push(value);
    }
  }
  localStorage.setItem("projectField", JSON.stringify(projectData));
}

window.onload = function() {
  document.getElementById("nameField").value = localStorage.getItem("nameField");
  document.getElementById("contactField").value = localStorage.getItem("contactField");
  document.getElementById("aboutField").value = localStorage.getItem("aboutField");
  document.getElementById("linkedinField").value = localStorage.getItem("linkedinField");
  document.getElementById("githubField").value = localStorage.getItem("githubField");
  document.getElementById("gmailField").value = localStorage.getItem("gmailField");
  document.getElementById("skillsField").value = localStorage.getItem("skillsField");
  let aqStoredData = JSON.parse(localStorage.getItem("aqField"));
  let aqContainer = document.getElementById("aq");
  if (aqStoredData) {
    if (aqStoredData.length > 0) {
      aqStoredData.forEach(function (aqValue) {
        if(aqValue !== ""){
          let newNode = document.createElement('textarea');
          newNode.classList.add('form-control');
          newNode.classList.add('aqField');
          newNode.classList.add('mt-2');
          newNode.setAttribute("rows", "3");
          newNode.value = aqValue;
          aqContainer.appendChild(newNode);
        }
      });
    }
  }
  let weStoredData = JSON.parse(localStorage.getItem("weField"));
  let weContainer = document.getElementById("we");
  if (weStoredData) {
    if (weStoredData.length > 0) {
      weStoredData.forEach(function (weValue) {
        if(weValue !== ""){
          let newNode = document.createElement('textarea');
          newNode.classList.add('form-control');
          newNode.classList.add('weField');
          newNode.classList.add('mt-2');
          newNode.setAttribute("rows", "3");
          newNode.value = weValue;
          weContainer.appendChild(newNode);
        }
      });
    }
  }
  let projectStoredData = JSON.parse(localStorage.getItem("projectField"));
  let projectContainer = document.getElementById("projects");
  if (projectStoredData) {
    if (projectStoredData.length > 0) {
      projectStoredData.forEach(function (projectValue) {
        if(projectValue !== ""){
          let newNode = document.createElement('textarea');
          newNode.classList.add('form-control');
          newNode.classList.add('project');
          newNode.classList.add('mt-2');
          newNode.setAttribute("rows", "3");
          newNode.value = projectValue;
          projectContainer.appendChild(newNode);
        }
      });
    }
  }
}

function printResume() {
  window.print();
}

function clearForm() {
  if(confirm("Do you want to delete all the details")){
    localStorage.clear();
    window.location.reload(true);
  }
}

function backToForm() {
  document.getElementById("resume-form").style.display = 'block';
  document.getElementById("resume-template").style.display = 'none';
}