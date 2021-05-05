const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    middleName: `{
        "count": 8,
        "list": {
            "id_1": "Александров",
            "id_2": "Констонтинов",
            "id_3": "Алексеев",
            "id_4": "Владимиров",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Степанов",
            "id_8": "Федоров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNamefemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Ирина",
            "id_4": "Виолетта",
            "id_5": "Дарья",
            "id_6": "Ксения",
            "id_7": "Евгения",
            "id_8": "Александра",
            "id_9": "Екатерина",
            "id_10": "Юля"
        }
    }`,
    genderJson: `{
        "count": 2,
        "list": {
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Врач",
            "id_2": "Менеджер",
            "id_3": "Дизайнер",
            "id_4": "Швея",
            "id_5": "Горничная",
            "id_6": "Косметолог",
            "id_7": "Визажист",
            "id_8": "Водитель трамвая",
            "id_9": "Кассир",
            "id_10": "Повар"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Пожарный",
            "id_2": "Военный",
            "id_3": "Полицейский",
            "id_4": "Строитель",
            "id_5": "Мастер",
            "id_6": "Слесарь",
            "id_7": "Сварщик",
            "id_8": "Водитель маршутки",
            "id_9": "Оператор ТУ",
            "id_10": "Механик Водитель БМП"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },
    randomJson: function(objJson) {

        return this.randomValue(objJson);

    },
    randomDate: function() {
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01-01-1970'
        var date2 = date2 || new Date().toLocaleDateString()
        date1 = new Date(date1).getTime()
        date2 = new Date(date2).getTime()
        if (date1 > date2) {
            return new Date(getRandomArbitrary(date2, date1)).toLocaleDateString()
        } else {
            return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()

        }
    },


    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomJson(this.genderJson);
        if (this.person.gender == 'Мужчина') {
            this.person.firstName = this.randomJson(this.firstNameMaleJson);
            this.person.profession = this.randomJson(this.professionMaleJson);
        } else {
            this.person.firstName = this.randomJson(this.firstNamefemaleJson);
            this.person.profession = this.randomJson(this.professionFemaleJson);

        }
        this.person.middleName = this.randomJson(this.middleName);
        this.person.surnameName = this.randomJson(this.surnameJson);
        this.person.randomDate = this.randomDate();
        return this.person;
    }
};