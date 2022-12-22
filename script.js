let img1 = document.querySelector('.img-1');

let img2 = document.querySelector('.img-2');
let img3 = document.querySelector('.img-3');
let radio1 = document.querySelector('#radio-1');
let radio2 = document.querySelector('#radio-2');
let radio3 = document.querySelector('#radio-3');

radio1.addEventListener('click', function () {
    if (radio1.checked) {
        img1.classList.add('img-checked');
        img2.classList.remove('img-checked');
        img3.classList.remove('img-checked');
    }
});
radio2.addEventListener('click', function () {
    if (radio2.checked) {
        img2.classList.add('img-checked');
        img1.classList.remove('img-checked');
        img3.classList.remove('img-checked');
    }
});
radio3.addEventListener('click', function () {
    if (radio3.checked) {
        img3.classList.add('img-checked');
        img1.classList.remove('img-checked');
        img2.classList.remove('img-checked');
    }
});

let form = document.querySelector('.form-footer');
let input = document.querySelector('.form-input-footer');
let btnSend = document.querySelector('.btn-send');
let textArea = document.querySelector('.form-textarea-footer');
let radioForm1 = document.querySelector('.radio-one');
let radioForm2 = document.querySelector('.radio-two');


let req = document.querySelectorAll('._req');

let email = document.querySelector('.input-email');
let name1 = document.querySelector('.input-name');
let surname = document.querySelector('.input-surname');
let date = document.querySelector('.input-date-footer');


btnSend.addEventListener('click', function (event) {
    event.preventDefault();
    const resultForm = {
        name: [],
        surname: [],
        email: [],
        sex: [],
        date: [],
        message: []
    };
    const req = [name1, email, date];
    if (checkName(name1)) {
        if (checkEmail(email)) {
            if (date.value !== '') {
                removeRed(email);
                removeRed(date);
                removeRed(name1);
                for (let i = 0; i <= 5; i++) {
                    if (i == 0) {
                        resultForm[i] = 'name: ' + name1.value
                    } else if (i == 1) {
                        if (surname.value !== '') {
                            resultForm[i] = 'surname: ' + surname.value
                        } else {
                            resultForm[i] = 'surname: undefind'
                        }
                    } else if (i == 2) {
                        resultForm[i] = 'email: ' + email.value
                    } else if (i == 3) {
                        resultForm[i] = 'sex: ' + radioForm1.checked ? "Female" : "Male"
                    } else if (i == 4) {
                        resultForm[i] = date.value.split('-').reverse().join('.')
                    } else if (i == 5) {
                        if (textArea.value !== '') {
                            resultForm[i] = 'message: ' + textArea.value
                        } else {
                            resultForm[i] = 'message: undefined'
                        }
                    }
                    console.log(resultForm[i]);
                }
                form.classList.add('sending');
                form.innerHTML = 'Sending....';

            } else {
                alert('Date undefined. Fill all the filed with *')
                isReq();
            }
        } else {
            alert('Email field has unproperly value. Fill all the filed with *')
            isReq();
        }
    } else {
        alert('Name field has unproperly value. Fill all the filed with *')
        isReq();
    }
    function isReq() {
        for (let i = 0; i < req.length; i++) {
            if (checkEmail(email) !== true) {
                email.style.boxShadow = '0 0 8px rgba(177, 0, 0, 0.8)';
            }
            if (req[i].value === '') {
                req[i].style.boxShadow = '0 0 8px rgba(177, 0, 0, 0.8)';
            } else {
                req[i].style.boxShadow = 'none';
            }
        };
    };
    function removeRed(input) {
        return input.style.boxShadow = 'none';
    }
    function checkName(name) {
        return /[A-Za-zА-Яа-яёЁ1-90]+/g.test(name.value);
    }
    function checkEmail(email) {
        return /^\w+@\w{3,8}\.(com|ru)$/g.test(email.value);
    };
});

// let company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 600
//     }],

//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],

//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };

// function sumSalaries(departament) {
//     if (Array.isArray(departament)) {
//         return departament.reduce((acc, current) => acc + current.salary, 0)
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(departament)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum
//     }
// }
// console.log(sumSalaries(company))