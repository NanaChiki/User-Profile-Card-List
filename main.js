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

  createEmployeeCard() {
    let innerFlex = document.createElement('div');
    innerFlex.classList.add('d-flex', 'align-items-center', 'col-md-7', 'col-10', 'm-1');

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('d-flex', 'col-12', 'profile-card');
    innerFlex.append(cardDiv);

    // Create the left side of the card
    let leftInfo = document.createElement('div');
    leftInfo.classList.add('col-8','py-3');
    
    let div1 = document.createElement('div');
    div1.classList.add('py-2');
    let div2 = div1.cloneNode(true);
    let div3 = div1.cloneNode(true);

    let nameTitle = document.createElement('h4');
    nameTitle.innerHTML = this.getFullName();

    let employeeJob = document.createElement('p');
    employeeJob.innerHTML = 'Job: <br>' + this.job;

    let employeeSkills = document.createElement('p');
    employeeSkills.innerHTML = 'Skills: <br>' + this.skills;

    let employeeCountry = document.createElement('p');
    employeeCountry.innerHTML = 'Country: <br>' + this.country;

    div1.append(employeeJob);
    div2.append(employeeSkills);
    div3.append(employeeCountry);
    leftInfo.append(nameTitle, div1, div2, div3);

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

const employee1 = new Employee("Kaiden", "Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
const employee2 = new Employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
const employee3 = new Employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

employee1.createEmployeeCard();
employee2.createEmployeeCard();
employee3.createEmployeeCard();