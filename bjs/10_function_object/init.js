window.onload = function() {
    const initPerson = personGenerator.getPerson();
    const firstName = initPerson.firstName;
    const gender = initPerson.gender;
    const randomDate = initPerson.randomDate;
    const surnameName = (gender == 'Мужчина') ? `${initPerson.surnameName}` : `${initPerson.surnameName}a`;
    document.getElementById('firstNameOutput').innerText = `${firstName}`;
    document.getElementById('surnameOutput').innerText = `Фамилия ${surnameName}`;
    document.getElementById('genderOutput').innerText = `пол ${gender}`;
    document.getElementById('birthYearOutput').innerText = `Дата рождения ${randomDate}`;

};