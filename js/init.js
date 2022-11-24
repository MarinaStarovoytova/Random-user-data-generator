let initPerson;

let dataGeneration = function() {
    initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('dayBirth').innerText = initPerson.dayBirth + ' ';
    document.getElementById('monthBirth').innerText = initPerson.monthBirthString + ' ';
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear + ' ' +  'года рождения';
    document.getElementById('genderOutput').innerText = initPerson.gender + ',';
};

let clear = function() {
    initPerson = personGenerator.clear();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('dayBirth').innerText = initPerson.dayBirth;
    document.getElementById('monthBirth').innerText = initPerson.monthBirthString;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('genderOutput').innerText = initPerson.gender;
};

generation.addEventListener('click', dataGeneration);
clearingData.addEventListener('click', clear);
window.onload = clear;


