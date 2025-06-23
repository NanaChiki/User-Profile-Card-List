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
    if (profiles) profiles.append(innerFlex);
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
    innerFlex.classList.add('d-flex', 'align-items-center', 'col-md-7', 'col-10', 'm-1');

    // Card container
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('d-flex', 'col-12', 'profile-card');
    innerFlex.append(cardDiv);

    // Left info section of the card
    const leftInfo = document.createElement('div');
    leftInfo.classList = 'col-8','py-3';
    
    const nameTitle = document.createElement('h4');
    nameTitle.textContext = this.getFullName();

    leftInfo.append(
      nameTitle,
      this.createInfoBlock('Job', this.job),
      this.createInfoBlock('Skills', this.skills),
      this.createInfoBlock('Country', this.country)
    );

    // Create the right side of the card
    let rightInfo = document.createElement('div');
    rightInfo.classList.add('col-4', 'd-flex', 'justify-content-center', 'align-items-center');
    let div4 = document.createElement('div');

    let avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = this.avatarUrl;

    div4.append(avatar);
    rightInfo.append(div4);

    cardDiv.append(leftInfo, rightInfo);
    
    this.appendToProfileList(innerFlex);
  }
}

// Create employee instances 
const employee1 = new Employee("Kaiden", "Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
const employee2 = new Employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
const employee3 = new Employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

// Create an array of employees and map through it to create employee cards
const employees = [employee1, employee2, employee3];
employees.map(employee => employee.createEmployeeCard());