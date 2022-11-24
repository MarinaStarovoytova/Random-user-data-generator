const personGenerator = {
    surnameJson: `{  
        "count": 16,
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
    firstNameMaleJson: `{
        "count": 11,
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
            "id_10": "Андрей",
            "id_11": "Серкан"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Инна",
            "id_3": "Лилия",
            "id_4": "Алина",
            "id_5": "Раиса",
            "id_6": "Римма",
            "id_7": "Регина",
            "id_8": "Ольга",
            "id_9": "Эда",
            "id_10": "Наталья"
        }
    }`,
    patronymicJson: `{
        "count": 9,
        "list": {     
            "id_1": "Сергеев",
            "id_2": "Романов",
            "id_3": "Александров",
            "id_4": "Иванов",
            "id_5": "Дмитриев",
            "id_6": "Андреев",
            "id_7": "Тарасов",
            "id_8": "Геннадиев",
            "id_9": "Михайлов"
        }
    }`,
    professionJson: `{
        "forMale":{
           "count":7,
           "list":{
              "id_1":"Инженер",
              "id_2":"Пожарный",
              "id_3":"Полицейский",
              "id_4":"Веб-разработчик",
              "id_5":"Повар",
              "id_6":"Хирург",
              "id_7":"Каскадёр"
           }
        },
        "forFemale":{
           "count":5,
           "list":{
              "id_1":"Дизайнер",
              "id_2":"Стюардесса",
              "id_3":"Стилист",
              "id_4":"Маркетолог",
              "id_5":"Фитнес-тренер"
           }
        }
     }`,
     monthBirthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) { // имя 
        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }

    },

     randomSurname: function(gender) { // фамилия 
        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'a';
        } else {
            return this.randomValue(this.surnameJson);
        }
        
    },

    randomDayBirth: function () { // день
        
        let day = new Date(this.person.birthYear, this.person.monthBirthNumber, 0).getDate();
        return this.randomIntNumber(day,1);
    },

    getStringMonthBirth: function (monthBirthNumber) { // месяц
        const obj = JSON.parse(this.monthBirthJson);
        const prop = `id_${monthBirthNumber}`;  // this = personGenerator
        return obj.list[prop];
    },
    

    randomBirthYear: function() { // год рождения
        
        return this.randomIntNumber(max = 2002, min = 1950);

    },

    randomGender: function() { // муж/жен
        
        return this.randomIntNumber() % 2 == 0 ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomPatronymic: function(gender) { // отчество
    
        return gender == this.GENDER_MALE ? this.randomValue(this.patronymicJson) + 'ич' : this.randomValue(this.patronymicJson) + 'на';
    },

    randomProfession: function(gender) { // профессия

        return gender == this.GENDER_MALE ? this.randomValue(JSON.stringify(JSON.parse(this.professionJson).forMale)) : this.randomValue(JSON.stringify(JSON.parse(this.professionJson).forFemale));
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);

        this.person.birthYear = this.randomBirthYear();
        this.person.monthBirthNumber = this.randomIntNumber(12,1);
        this.person.monthBirthString = this.getStringMonthBirth(this.person.monthBirthNumber);
        // this.person.monthBirth = this.randomMonthBirth();
        this.person.dayBirth = this.randomDayBirth();

        return this.person;
    },

    clear: function () {
        this.person = {};
        this.person.gender = '';
        this.person.firstName = '';
        this.person.surname = '';
        this.person.patronymic = '';
        this.person.profession = '';

        this.person.birthYear = '';
        this.person.monthBirthNumber = '';
        this.person.monthBirthString = '';
        // this.person.monthBirth = this.randomMonthBirth();
        this.person.dayBirth = '';

        return this.person;
    }
};
