window.onload = function() {
    const initPerson = personGenerator.getPerson();
    const firstName = initPerson.firstName;
    const gender = initPerson.gender;
    const work = initPerson.profession;
    const randomDate = initPerson.randomDate;
    const surnameName = (gender == 'Мужчина') ? `${initPerson.surnameName}` : `${initPerson.surnameName}a`;
    const middleName = (gender == 'Мужчина') ? `${initPerson.middleName}ич` : `${initPerson.middleName}на`
    document.getElementById('firstNameOutput').innerText = `${firstName}`;
    document.getElementById('surnameOutput').innerText = `Фамилия ${surnameName}`;
    document.getElementById('genderOutput').innerText = `пол ${gender}`;
    document.getElementById('birthYearOutput').innerText = `Дата рождения ${randomDate}`;
    document.getElementById('birthYearOutput').innerText = `Дата рождения ${randomDate}`;
    document.getElementById('middleNameOutput').innerText = `${middleName}`;
    document.getElementById('workOutput').innerText = `Профессия ${work}`;


};