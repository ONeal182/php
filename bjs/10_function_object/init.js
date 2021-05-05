window.onload = function() {
    const runGenElement = document.getElementById("runGen");
    const clearGenElement = document.getElementById("clearGen");

    let goGen = () => {
        let initPerson = personGenerator.getPerson();
        let firstName = initPerson.firstName;
        let gender = initPerson.gender;
        let work = initPerson.profession;
        let randomDate = initPerson.randomDate;
        let surnameName = (gender == 'Мужчина') ? `${initPerson.surnameName}` : `${initPerson.surnameName}a`;
        let middleName = (gender == 'Мужчина') ? `${initPerson.middleName}ич` : `${initPerson.middleName}на`;
        document.getElementById('firstNameOutput').innerText = `${firstName}`;
        document.getElementById('surnameOutput').innerText = `Фамилия ${surnameName}`;
        document.getElementById('genderOutput').innerText = `пол ${gender}`;
        document.getElementById('birthYearOutput').innerText = `Дата рождения ${randomDate}`;
        document.getElementById('middleNameOutput').innerText = `${middleName}`;
        document.getElementById('workOutput').innerText = `Профессия ${work}`;
    }

    let clearGen = () => {
        document.getElementById('firstNameOutput').innerText = ` `;
        document.getElementById('surnameOutput').innerText = `Фамилия `;
        document.getElementById('genderOutput').innerText = `пол `;
        document.getElementById('birthYearOutput').innerText = `Дата рождения `;
        document.getElementById('middleNameOutput').innerText = ``;
        document.getElementById('workOutput').innerText = `Профессия `;
    }

    goGen();

    runGenElement.addEventListener('click', function() {
        goGen();

    })
    clearGenElement.addEventListener('click', function() {
        clearGen();

    })

};