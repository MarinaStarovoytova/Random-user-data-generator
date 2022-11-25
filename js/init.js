let initPerson;

let dataGeneration = function() {
    initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
    document.querySelector('#dayBirth').innerText = initPerson.dayBirth + ' ';
    document.querySelector('#monthBirth').innerText = initPerson.monthBirthString + ' ';
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear + ' ' +  'года рождения';
    document.querySelector('#genderOutput').innerText = initPerson.gender + ',';
};

let clear = function() {
    initPerson = personGenerator.clear();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
    document.querySelector('#dayBirth').innerText = initPerson.dayBirth;
    document.querySelector('#monthBirth').innerText = initPerson.monthBirthString;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
};

generation.addEventListener('click', dataGeneration);
clearingData.addEventListener('click', clear);
window.onload = clear;


