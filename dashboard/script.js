let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
let currentPortfolio = JSON.parse(sessionStorage.getItem("currentPortfolio"));
let currentRequests;
let currentProperty;
const submitBtn = document.getElementById('user-submit-modal');
const userInput = document.getElementById('username-input');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const modal = document.getElementById('user-modal');
const propertyNameInput = document.getElementById('property-name');
const addressInput = document.getElementById('property-address');
const propertyTypeInput = document.getElementById('property-type');
const propertyPriorityInput = document.getElementById('priority');
const Propertymodal = document.getElementById('property-modal');
const submitPropertyBtn = document.getElementById('property-submit-modal');

//Incarca interfata pe load
window.onload = function() {
  if (currentUser.admin) {
    generateUsersUI();
  } else {
    generatePortfolioUI(currentUser.admin);
  }
};
loadUserData();

submitBtn.addEventListener('click', () => {
  createUser(nameInput.value, userInput.value, emailInput.value, passInput.value, modal);
});

submitPropertyBtn.addEventListener('click', () =>{
  createProperty(propertyNameInput.value, addressInput.value, propertyTypeInput.value, propertyPriorityInput.value)
})

const ticketSubject = document.getElementById('ticket-subject');
const ticketDescription = document.getElementById('ticket-description');
const ticketPriority = document.getElementById('ticket-priority');
const ticketStatus = document.getElementById('ticket-status');
const submitReqBtn = document.getElementById('tickets-submit-modal');

submitReqBtn.addEventListener('click', () => {
  createRequest(ticketSubject.value,ticketDescription.value, ticketPriority.value, ticketStatus.value) 
})

//functia care genereaza continutul HTML pentru Interfata de Admin
function generateUsersUI(){
  
  const menuBtn = document.querySelector('.active');
  menuBtn.textContent = "Users";
  
  const goBackBtnDiv = document.querySelector('.go-back-div');
  goBackBtnDiv.innerHTML = "";

  const h1 = document.querySelector('h1');
  h1.textContent = 'Users';

  const btnDiv = document.getElementById('btn-div');
  btnDiv.innerHTML = "";
  const addBtn = document.createElement('button');
  btnDiv.appendChild(addBtn);
  addBtn.id = "add-btn";
  addBtn.innerHTML = `<div class="circle-plus">+</div> Add User`

  const h2 = document.querySelector('.content-area h2');
  h2.textContent = 'Profiles';

  const searchBar = document.querySelector('#search-bar')
  searchBar.style.display = 'none';
  const input = document.querySelector('input');
  input.placeholder = "Search users";

  const tableDiv = document.getElementById('table-div');
  const table = document.querySelector('table');
  table.innerHTML = "";
  
  const talbeRow = document.createElement('tr');
  table.appendChild(talbeRow);

  const userTh = document.createElement('th');
  talbeRow.appendChild(userTh);
  userTh.textContent = 'Username';

  const nameTh = document.createElement('th');
  talbeRow.appendChild(nameTh);
  nameTh.textContent = 'Full Name';

  const emailTh = document.createElement('th');
  talbeRow.appendChild(emailTh);
  emailTh.textContent = 'Email';

  const passTh = document.createElement('th');
  talbeRow.appendChild(passTh);
  passTh.textContent = 'Password';

  const actionTh = document.createElement('th');
  talbeRow.appendChild(actionTh);
  actionTh.textContent = 'Action';
  
  const closeBtn = document.getElementById('user-close-modal');
  const modal = document.getElementById('user-modal');
  

  addBtn.addEventListener('click', () => modal.showModal());
  closeBtn.addEventListener('click', () => modal.close());
    
  

  loadUsers(table);
}

//Functia care genereaza interfata la logIn pentru utilizator
function generatePortfolioUI(admin){
  // const admin = false;
  let table;
  let contentArea = document.querySelector('.content-area');
  const backButton = document.createElement('button');
  const backButtonDiv = document.querySelector('.go-back-div');
  backButtonDiv.innerHTML = "";
  if(admin){
    table = document.querySelector('table');
    contentArea.appendChild(backButton);
    backButtonDiv.appendChild(backButton);
    backButton.innerText = "Go back"
    backButton.classList.add('go-back');
  } else {
    table = document.querySelector('table');
  }
 
  table.innerHTML = "";
  const menuBtn = document.querySelector('.active');
  menuBtn.textContent = "Portfolio";

  const btnDiv = document.getElementById('btn-div');
  btnDiv.innerHTML = "";
  const addBtn = document.createElement('button');
  btnDiv.appendChild(addBtn);
  addBtn.id = "add-btn";
  if(admin){
    addBtn.innerHTML = `<div class="circle-plus">+</div> Add Property`
  } else{
    addBtn.style.visibility = 'hidden';
  }
  
  const h1 = document.querySelector('h1');
  h1.textContent = 'Portfolio';

  const h2 = document.querySelector('.content-area h2');
  h2.textContent = `${currentPortfolio.username}'s Units`;

  const searchBar = document.querySelector('#search-bar')
  searchBar.style.display = 'none';
  const input = document.querySelector('input');
  input.placeholder = "Search properties";

  const tableDiv = document.getElementById('table-div');
  tableDiv.appendChild(table);
  
  const talbeRow = document.createElement('tr');
  table.appendChild(talbeRow);

  const propertyTh = document.createElement('th');
  talbeRow.appendChild(propertyTh);
  propertyTh.textContent = 'Property';

  const typeTh = document.createElement('th');
  talbeRow.appendChild(typeTh);
  typeTh.textContent = 'Type';

  const priorityTh = document.createElement('th');
  talbeRow.appendChild(priorityTh);
  priorityTh.classList.add('priority-column');
  priorityTh.textContent = 'Priority';

  const actionTh = document.createElement('th');
  talbeRow.appendChild(actionTh);
  actionTh.textContent = 'Action';

  const modal = document.getElementById('property-modal');
  const closeBtn = document.getElementById('property-close-modal');
  
  addBtn.addEventListener('click', () => modal.showModal());
  closeBtn.addEventListener('click', () => modal.close());
  backButton.addEventListener('click', () => generateUsersUI());
  
   sortArrayPriority(currentPortfolio.properties).forEach((e) =>{
    generateProperty(table, e.name, e.address, e.type, e.priority);
  })
}

//Functia care genereaza interfata pentru Requesturi
function generateRequestsUI(){
  // const admin = false;
  const table = document.querySelector('table');
  table.innerHTML = "";
  
  const backButton = document.createElement('button');
  const backButtonDiv = document.querySelector('.go-back-div');
  backButtonDiv.innerHTML = "";
  backButtonDiv.appendChild(backButton);
  backButton.innerText = "Go back"
  backButton.classList.add('go-back');

  const h1 = document.querySelector('h1');
  h1.textContent = 'Requests';

  const btnDiv = document.getElementById('btn-div');
  btnDiv.innerHTML = "";
  const addBtn = document.createElement('button');
  btnDiv.appendChild(addBtn);
  addBtn.id = "add-btn";
  addBtn.innerHTML = `<div class="circle-plus">+</div> Add Request`

  const h2 = document.querySelector('.content-area h2');
  h2.textContent = `Tickets - ${currentProperty.name}`;

  const searchBar = document.querySelector('#search-bar')
  searchBar.style.display = 'block';
  const input = document.querySelector('input');
  input.placeholder = "Search Tickets";
  input.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    currentRequests.forEach(request =>{
      const isVisible = 
        request.subject.toLowerCase().includes(value) || 
        request.description.toLowerCase().includes(value);
      request.tr.classList.toggle("hide", !isVisible);

    })
  })

  const tableDiv = document.getElementById('table-div');
  tableDiv.appendChild(table);
  
  const talbeRow = document.createElement('tr');
  table.appendChild(talbeRow);

  const SubjectTh = document.createElement('th');
  talbeRow.appendChild(SubjectTh);
  SubjectTh.textContent = 'Subject';

  const locationTh = document.createElement('th');
  talbeRow.appendChild(locationTh);
  locationTh.textContent = 'Location';

  const descriptionTh = document.createElement('th');
  talbeRow.appendChild(descriptionTh);
  descriptionTh.textContent = 'Description';

  const priorityTh = document.createElement('th');
  talbeRow.appendChild(priorityTh);
  priorityTh.classList.add('priority-column');
  priorityTh.textContent = 'Priority';

  const statusTh = document.createElement('th');
  talbeRow.appendChild(statusTh);
  statusTh.textContent = 'Status';

  const actionTh = document.createElement('th');
  talbeRow.appendChild(actionTh);
  actionTh.textContent = 'Action';

  const modal = document.getElementById('tickets-modal');
  const closeBtn = document.getElementById('tickets-close-modal');
  addBtn.addEventListener('click', () => modal.showModal());
  closeBtn.addEventListener('click', () => modal.close());
  backButton.addEventListener('click', () => generatePortfolioUI(currentUser.admin));

  currentRequests.forEach((e) =>{
    e.tr = generateRequests(table,e.subject ,e.name, e.address, e.description, e.priority, e.status,e.id);
  })
  
}


//functia care genereaza continutul pentru tabelul de la UsersUI
function generateUsers(parent, username, name, email, password){
  const tr = document.createElement("tr");
  parent.appendChild(tr);

  const userTd = document.createElement('td');
  tr.appendChild(userTd);
  userTd.textContent = username;

  const nameTd = document.createElement('td');
  tr.appendChild(nameTd);
  nameTd.textContent = name;

  const emailTd = document.createElement('td');
  tr.appendChild(emailTd);
  emailTd.textContent = email;

  const passTd = document.createElement('td');
  tr.appendChild(passTd);
  passTd.textContent = password;

  const actionTd = document.createElement('td');
  tr.appendChild(actionTd);
  actionTd.classList.add('action-row');
  actionTd.classList.add('user-action')
  const button = document.createElement('button');
  actionTd.appendChild(button);
  button.textContent = "Portfolio";
  button.setAttribute("data-username", username);

  button.addEventListener('click', () => loadPortfolio(button));
  // generatePortfolioUI(currentUser.admin)

  return tr;
}

//functia care genereaza continutul pentru tabelul din generatePropertyUI
function generateProperty(parent, propertyName, adress, type, priority){
  const tr = document.createElement("tr");
  parent.appendChild(tr);

  const propertyTd = document.createElement('td');
  tr.appendChild(propertyTd);
  const propertyNameP = document.createElement('p');
  const propertyAdressP = document.createElement('p');
  propertyTd.appendChild(propertyNameP);
  propertyTd.appendChild(propertyAdressP);
  propertyNameP.textContent = propertyName;
  propertyAdressP.textContent = adress; 

  const typeTd = document.createElement('td');
  tr.appendChild(typeTd);
  typeTd.textContent = type;

  const priorityTd = document.createElement('td');
  tr.appendChild(priorityTd);
  priorityTd.classList.add('priority-column');
  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('priority');
  priorityTd.appendChild(priorityDiv);
  const spanCircle = document.createElement('span');
  spanCircle.classList.add('circle-status');
  priorityDiv.appendChild(spanCircle);
  const priorityText = document.createTextNode('');
  priorityDiv.appendChild(priorityText);
  if(priority === 'low'){
    priorityDiv.classList.add('low');
    priorityText.textContent = 'Low';
  } else if(priority === 'medium'){
    priorityDiv.classList.add('medium');
    priorityText.textContent = 'Medium';
  } else {
    priorityDiv.classList.add('high');
    priorityText.textContent = 'High';
  }

  const actionTd = document.createElement('td');
  tr.appendChild(actionTd);
  actionTd.classList.add('action-row');
  actionTd.classList.add('portfolio-action')
  const requestbutton = document.createElement('button');
  actionTd.appendChild(requestbutton);
  requestbutton.setAttribute("data-property", propertyName.split(" ")[0]);
  requestbutton.textContent = "Tickets";
 
  requestbutton.addEventListener('click', () => loadRequests(requestbutton));
  requestbutton.addEventListener('click', () => {currentProperty = {
    name: propertyName,
    address: adress
  }
  console.log(currentProperty);
});

  return tr;
}

//functia care genereaza continutul pentru tabelul de la RequestsUI
function generateRequests(parent, subject, propertyName, adress, description, priority, status, id){
  const tr = document.createElement("tr");
  parent.appendChild(tr);

  const subjectTd = document.createElement('td');
  tr.appendChild(subjectTd);
  subjectTd.textContent = subject;

  const propertyTd = document.createElement('td');
  tr.appendChild(propertyTd);
  const propertyNameP = document.createElement('p');
  const propertyAdressP = document.createElement('p');
  propertyTd.appendChild(propertyNameP);
  propertyTd.appendChild(propertyAdressP);
  propertyNameP.textContent = propertyName;
  propertyAdressP.textContent = adress; 

  const adressTd = document.createElement('td');
  tr.appendChild(adressTd);
  adressTd.textContent = description;

  const priorityTd = document.createElement('td');
  tr.appendChild(priorityTd);
  priorityTd.classList.add('priority-column');
  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('priority');
  priorityTd.appendChild(priorityDiv);
  const spanCircle = document.createElement('span');
  spanCircle.classList.add('circle-status');
  priorityDiv.appendChild(spanCircle);
  const priorityText = document.createTextNode('');
  priorityDiv.appendChild(priorityText);
  if(priority === 'low'){
    priorityDiv.classList.add('low');
    priorityText.textContent = 'Low';
  } else if(priority === 'medium'){
    priorityDiv.classList.add('medium');
    priorityText.textContent = 'Medium';
  } else {
    priorityDiv.classList.add('high');
    priorityText.textContent = 'High';
  }

  const statusTd = document.createElement('td');
  tr.appendChild(statusTd);
  statusTd.textContent = status.charAt(0).toUpperCase() + status.slice(1);

  const actionTd = document.createElement('td');
  tr.appendChild(actionTd);
  actionTd.classList.add('action-row');
  actionTd.classList.add('request-action');

  const editbutton = document.createElement('button');
  const checkButton = document.createElement('button');
  checkButton.setAttribute("data-id", id);
  actionTd.appendChild(checkButton);
  checkButton.textContent = "Solve";
  checkButton.addEventListener('click', () => solveTask(checkButton));

  actionTd.appendChild(editbutton);
  editbutton.textContent = "Edit";

  const modal = document.getElementById('edit-modal');
  const subjectInput = document.getElementById('edit-ticket-subject');
  const descriptionInput = document.getElementById('edit-ticket-description');
  const priorityInput = document.getElementById('edit-ticket-priority');
  const statusInput = document.getElementById('edit-ticket-status');
  const deleteRequestBtn = document.getElementById('delete-request-btn');
  const editRequestBtn = document.getElementById('edit-submit-modal');
  const closeModal = document.getElementById('edit-close-modal');

  editbutton.setAttribute("data-id", id);
  editbutton.addEventListener('click', () =>{
    subjectInput.value = subject;
    descriptionInput.value = description;
    priorityInput.value = priority;
    statusInput.value = status;
    editRequestBtn.removeAttribute("data-id");
    const newId = editbutton.getAttribute("data-id");
    editRequestBtn.setAttribute("data-id", newId);
    deleteRequestBtn.removeAttribute("data-id");
    deleteRequestBtn.setAttribute("data-id", newId);

  })

  

  editbutton.addEventListener('click', () => modal.showModal());
  closeModal.addEventListener('click', () => modal.close());


  return tr;
}

const editRequestBtn = document.getElementById('edit-submit-modal');
const subjectInput = document.getElementById('edit-ticket-subject');
const descriptionInput = document.getElementById('edit-ticket-description');
const priorityInput = document.getElementById('edit-ticket-priority');
const statusInput = document.getElementById('edit-ticket-status');
const deleteRequestBtn = document.getElementById('delete-request-btn');

deleteRequestBtn.removeEventListener('click', deleteRequest);
deleteRequestBtn.addEventListener('click', deleteRequestHandler);

editRequestBtn.removeEventListener('click', editRequestHandler);
editRequestBtn.addEventListener('click', editRequestHandler);
function editRequestHandler(){
    const id = editRequestBtn.getAttribute("data-id");
    editRequest(subjectInput.value, descriptionInput.value, priorityInput.value, statusInput.value, id)
    }

function deleteRequestHandler(){
  deleteRequest(deleteRequestBtn)
}

const logoutIcon = document.getElementById('logout-icon');
logoutIcon.addEventListener('click', () => window.location.href = "../log_in_page/index.html");

//functia care returneaza array-ul cu userii de pe server
function loadUsers(parent){
  let rows = document.querySelectorAll('tr');
  for(let i = 1; i < rows.length; i++){
    rows[i].innerHTML = "";
  }
  fetch("http://127.0.0.1:3000/loadUsers")
    .then(response => response.json())
    .then(data => {
      if (!Array.isArray(data.users)) {
        alert("Datele primite nu sunt valide.");
        return;
      }

      data.users.forEach((e) => {
        if(e.admin){
          return
        }
        generateUsers(parent, e.user, e.name, e.email, e.password);
      });

    })
    .catch(error => alert('Eroare la încărcarea utilizatorilor: ' + error));   
}

//functia care returneaza array-ul cu porprietatile de pe server
function loadPortfolio(button){
  let username;
  if(button){
    username = button.getAttribute('data-username');
  } else{
    username = currentPortfolio.username;
  }

  fetch(`http://127.0.0.1:3000/loadPortfolio/${username}`)
    .then(response => response.json())
    .then(data => {
      currentPortfolio = data.portfolio;
      generatePortfolioUI(currentUser.admin)
    })
    .catch(error => console.error('Error:', error));   
}

function loadRequests(button){
  if(button){
    property = button.getAttribute('data-property');
  } else{
    property = currentProperty.name
  }
  
  username = currentPortfolio.username;

  fetch(`http://127.0.0.1:3000/loadRequests/${username}/${property}`)
    .then(response => response.json())
    .then(data => { 
      currentRequests = sortArrayPriority(data.requests);
      generateRequestsUI();
      
    })
}

//functia care creeaza utilizatorul pe server
function createUser(name, user, email, password,modal){
  if(validateUser(email)){
    const newUser = {
    name,
    user,
    email,
    password,
    admin: false,
    id: crypto.randomUUID().slice(0, 8)
    }
    
    fetch("http://127.0.0.1:3000/createUser", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ content: newUser })
    })
      .then(response => response.json())
      .then(data => {
        loadUsers(document.querySelector('table'));
        modal.close();
        showPopup(data.message, data.status)
        document.getElementById('username-input').value = "";
        document.getElementById('name-input').value = "";
        document.getElementById('email-input').value = "";
        document.getElementById('password-input').value = "";
      })
      .catch(error => alert('Error creating your account:' + error))

  }
  
}

//functia de validare a emailului
function validateUser(email){
  let valid;
  const regex = /\S+@\S+\.\S+/;
  if(regex.test(email)){
    valid = true; 
  } else{
    showPopup('Invalid email. Please try again!','error')
    valid = false;
  }
  return valid;
  
}

//functia care creeaza proprietatea pe server
function createProperty(name, address, type, priority){
    const newProperty = {
    name,
    address,
    type,
    priority
    }
    
    let username = currentPortfolio.username;
    
    fetch(`http://127.0.0.1:3000/createProperty/${username}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ content: newProperty })
    })
      .then(response => response.json())
      .then(data => {
        if(data.status === "success"){
          showPopup(data.message, data.status);
          loadPortfolio();
          propertyNameInput.value = "";
          addressInput.value = "";
          propertyTypeInput.value = "";
          Propertymodal.close();
        }else{
          showPopup(data.message, data.status);
        }
        
       
      })
      .catch(error => alert('Error creating your account:' + error))

}

function createRequest(subject,description, priority, status){
  const nameP = currentProperty.name;
  const address = currentProperty.address;
  const newRequest = {
    subject,
    name: nameP,
    address,
    description,
    priority,
    status
    }
    
  let username = currentPortfolio.username;
    
  fetch(`http://127.0.0.1:3000/createRequest/${username}/${nameP}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ content: newRequest })
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'success'){
          showPopup(data.message, data.status);
          loadRequests();
          ticketSubject.value = "";
          ticketDescription.value = "";
          document.getElementById('tickets-modal').close();
        } else{
          showPopup(data.message, data.status);
        }
        
      })
      .catch(error => alert('Error creating your request:' + error))

}

function loadUserData(){
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');

  userName.textContent = currentUser.user;
  userEmail.textContent = currentUser.email;
}

function editRequest(subject, description, priority, status,id){
  const nameP = currentProperty.name;
  const editRequest = {
    subject,
    description,
    priority,
    status,
    id
    }
    
  let username = currentPortfolio.username;
    
  fetch(`http://127.0.0.1:3000/editRequest/${username}/${nameP}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ content: editRequest })
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === "success"){
          showPopup(data.message, data.status);
          loadRequests();
          document.getElementById('edit-modal').close();
        }else{
          showPopup(data.message, data.status);
        }
       
      })
      .catch(error => alert('Error creating your account:' + error))

}

function deleteRequest(button){
  const id = button.getAttribute("data-id");
  let username = currentPortfolio.username;
  const nameP = currentProperty.name;
    
  fetch(`http://127.0.0.1:3000/deleteTask/${username}/${nameP}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ content: id })
      })
      .then(response => response.json())
      .then(data => {
        showPopup(data.message, data.status)
        document.getElementById('edit-modal').close();
        loadRequests();
      })
      .catch(error => alert('Error creating your account:' + error))

}

function solveTask(button){
  const id = button.getAttribute("data-id");
  let username = currentPortfolio.username;
  const nameP = currentProperty.name;
  
  fetch(`http://127.0.0.1:3000/solveTask/${username}/${nameP}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ content: id })
      })
      .then(response => response.json())
      .then(() => {
        loadRequests();
      })
      .catch(error => alert('Error creating your account:' + error))
}

function showPopup(message, status) {
  const container = document.getElementById("popupContainer");

  // Create a new popup element
  const popup = document.createElement("div");
  popup.classList.add("popupMessage");
  popup.textContent = message;
  popup.classList.add(status)

  container.appendChild(popup);

  // Show animation
  setTimeout(() => popup.classList.add("show"), 10);

  // Auto-remove after 5s
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 8000);

  // Keep only last 6 visible popups
  const popups = container.querySelectorAll(".popupMessage");
  if (popups.length > 6) {
    popups[0].remove();
  }
}

function sortArrayPriority(array){
  const priorities = { high: 1, medium: 2, low: 3 };

  const sortedArray = array.sort((a, b) => {
  return priorities[a.priority] - priorities[b.priority];
});
  return sortedArray
}