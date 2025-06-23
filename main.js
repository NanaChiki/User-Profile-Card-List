// Description: This code creates a list of employee profile cards with their details and appends them to the DOM
class Employee {
  constructor(firstName, lastName, job, skills, country, avatarUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skills = skills;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  appendToProfileList(innerFlex) {
    const profiles = document.getElementById('profiles');
    if (profiles) {
      profiles.append(innerFlex);
    } else {
      console.warn('Element with id "profiles" not found. Please ensure it exists in the HTML.');
    }
  }

  createInfoBlock(label, value) {
    const div = document.createElement('div');
    div.classList.add('py-2');
    const p = document.createElement('p');
    p.innerHTML = `<strong>${label}:</strong><br>${value}`;
    div.append(p);
    return div;
  }

  // Create the employee card and append it to the element with id 'profiles'
  createEmployeeCard() {
    // Main card wrapper
    const innerFlex = document.createElement('div');
    innerFlex.classList.add('d-flex', 'align-items-center', 'col-md-7', 'col-10', 'my-2');

    // Card container
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('d-flex', 'col-12', 'profile-card');
    innerFlex.append(cardDiv);

    // Left info section of the card
    const leftInfo = document.createElement('div');
    leftInfo.classList.add('col-8','py-3');
    
    const nameTitle = document.createElement('h3');
    nameTitle.textContent = this.getFullName();

    leftInfo.append(
      nameTitle,
      this.createInfoBlock('Job', this.job),
      this.createInfoBlock('Skills', this.skills),
      this.createInfoBlock('Country', this.country)
    );

    // Right info section of the card with avatar
    const rightInfo = document.createElement('div');
    rightInfo.classList.add('col-4', 'd-flex', 'justify-content-center', 'align-items-center');
    // let div4 = document.createElement('div');

    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = this.avatarUrl;
    avatar.alt = `${this.firstName} ${this.lastName}'s avatar`;

    rightInfo.append(avatar);

    cardDiv.append(leftInfo, rightInfo);
    
    this.appendToProfileList(innerFlex);
  }
}

// Create employee instances 
const employees = [
  new Employee("Kaiden", "Herman", "Software Engineer", 
    "C++, C#, Java, PHP, JavaScript, Python",
    "United States", 
    "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
  ),
  new Employee("Elizabeth", "Dunn", "Accountant", 
    "Excel, Word, Quickbooks", 
    "England", 
    "https://randomuser.me/api/portraits/women/76.jpg"
  ),
  new Employee("Duan", "Moreno", "Teacher",  
    "Working with children, History, Word", 
    "Argentina", 
    "https://randomuser.me/api/portraits/med/men/93.jpg"
  )
];
// Render all employee cards
employees.forEach(employee => employee.createEmployeeCard());