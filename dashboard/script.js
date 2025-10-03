function generateUsersUI(){
  const menuBtn = document.querySelector('.active');
  menuBtn.textContent = "Users";
  
  const h1 = document.querySelector('h1');
  h1.textContent = 'Users';

  const addBtn = document.getElementById('add-btn');
  addBtn.innerHTML = `<div class="circle-plus">+</div> Add User`

  const h2 = document.querySelector('.content-area h2');
  h2.textContent = 'Profiles';

  const input = document.querySelector('input');
  input.placeholder = "Search users";

  const tableDiv = document.getElementById('table-div');
  const table = document.createElement('table');
  tableDiv.appendChild(table);
  
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

  generateUsers(table, "username", "name", "email", "password");

  generateUsers(table, "aaa", "sss", "ddd", "fff");


}

function generatePortfolioUI(){
  const admin = true;
  const table = document.querySelector('table');
  table.innerHTML = "";
  const menuBtn = document.querySelector('.active');
  menuBtn.textContent = "Portfolio";
  
  const h1 = document.querySelector('h1');
  h1.textContent = 'Portfolio';

  const addBtn = document.getElementById('add-btn');
  addBtn.innerHTML = `<div class="circle-plus">+</div> Add Property`

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
  
  generateProperty(table, 'aaaa', 'zzzzzzzzzzzzzz', 'studio', 'high');
  generateProperty(table, 'bbbb', 'zzzzzzzzzzzzzz', 'duplex', 'medium');
  generateProperty(table, 'cccc', 'zzzzzzzzzzzzzz', 'house', 'low');
}

function generateRequestsUI(){
  const admin = true;
  const table = document.querySelector('table');
  table.innerHTML = "";
  
  const h1 = document.querySelector('h1');
  h1.textContent = 'Requests';

  const addBtn = document.getElementById('add-btn');
  addBtn.innerHTML = `<div class="circle-plus">+</div> Add Request`

  const h2 = document.querySelector('.content-area h2');
  h2.textContent = 'Tickets';

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

  generateRequests(table, 'subject', 'propertyName', 'adress', 'description', "high", 'solved')
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

  button.addEventListener('click', () => generatePortfolioUI())

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
  const editbutton = document.createElement('button');
  actionTd.appendChild(requestbutton);
  actionTd.appendChild(editbutton);
  requestbutton.textContent = "Portfolio";
  editbutton.textContent = "Edit";

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
  actionTd.classList.add('portfolio-action')
  const checkButton = document.createElement('button');
  const editbutton = document.createElement('button');
  actionTd.appendChild(checkButton);
  actionTd.appendChild(editbutton);
  checkButton.textContent = "Solve";
  editbutton.textContent = "Edit";

  return tr;
}
generateUsersUI();