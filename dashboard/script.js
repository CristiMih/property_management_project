const currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
console.log(currentUser.admin);


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

  generateUsers(table, "jdoe", "John Doe", "jdoe@example.com", "pass1234");
  generateUsers(table, "amaria", "Ana Maria Popescu", "	ana.maria@email.com", "securePass");

}

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
  h2.textContent = 'Units';

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
  backButton.addEventListener('click', () => generateUsersUI(currentUser.admin));
  generateProperty(table, 'Magnolia Villa', '1425 Willow Creek Rd, Austin, TX 78704', 'Residential', 'high');
  generateProperty(table, 'Central Tower', '500 Market St, San Francisco, CA 94105', 'Commercial', 'medium');
  generateProperty(table, 'Green Cottage', '88 Pine Hollow Ln, Asheville, NC 28803', 'Residential', 'low');
}

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
  h2.textContent = 'Tickets - Magnolia Villa';

  const input = document.querySelector('input');
  input.placeholder = "Search Tickets";

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


  generateRequests(table,'No hot water', 'Magnolia Villa', '1425 Willow Creek Rd, Austin, TX 78704', 'Boiler not working', "high", 'unsolved');
  generateRequests(table,'Locked entrance', 'Magnolia Villa', '1425 Willow Creek Rd, Austin, TX 78704', `Main door won't open`, "high", 'unsolved');
  generateRequests(table,'Broken light bulb', 'Magnolia Villa', '1425 Willow Creek Rd, Austin, TX 78704', 'Boiler not working', "low", 'unsolved');
}



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

  button.addEventListener('click', () => generatePortfolioUI(currentUser.admin))

  return tr;
}

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
  requestbutton.textContent = "Tickets";
  // if(admin){
  //   const editbutton = document.createElement('button');
  //   actionTd.appendChild(editbutton);
  //    editbutton.textContent = "Edit";
  // }
 

  requestbutton.addEventListener('click', () => generateRequestsUI());

  return tr;
}


function generateRequests(parent, subject, propertyName, adress, description, priority, status){
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
  statusTd.textContent = status;

  const actionTd = document.createElement('td');
  tr.appendChild(actionTd);
  actionTd.classList.add('action-row');
  actionTd.classList.add('request-action');

  const editbutton = document.createElement('button');
  const checkButton = document.createElement('button');
  actionTd.appendChild(checkButton);
  checkButton.textContent = "Solve";

  actionTd.appendChild(editbutton);
  editbutton.textContent = "Edit";

  const modal = document.getElementById('edit-modal');
  const closeModal = document.getElementById('edit-close-modal');

  editbutton.addEventListener('click', () => modal.showModal());
  closeModal.addEventListener('click', () => modal.close());

  return tr;
}

if(currentUser.admin){
  generateUsersUI(currentUser.admin);
  
}else{
  generatePortfolioUI(currentUser.admin);
}

const logoutIcon = document.getElementById('logout-icon');
logoutIcon.addEventListener('click', () => window.location.href = "../log_in_page/index.html");

