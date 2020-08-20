'use strict'

var users = [];
var div_users = document.querySelector("#users");
var div_jannet = document.querySelector("#jannet");
var div_teacher = document.querySelector("#teacher");

setTimeout(() => {
    get_users().then(data => data.json())
        .then(users => {

            list_users(users.data);
            return get_jannet();

        }).then(data => data.json())
        .then(user => {
            setTimeout(() => {
                show_jannet(user.data);
            }, 2000);

            return get_info();
        }).then(data => {
            console.log(data);
            show_teacher(data);

        }).catch(error => {
            console.log(error);
        });
}, 2000);

function get_users() {
    return fetch('https://reqres.in/api/users');
}

function get_jannet() {
    return fetch('https://reqres.in/api/users/2')
}

function get_info() {

    var teacher = {
        name: 'maciel',
        age: '20',
        matter: 'Web design'

    }

    //Promise chining

    return new Promise((resolved, reject) => {
        var teacher_string = JSON.stringify(teacher);
        if (typeof(teacher_string) != 'string') {
            return reject('error');
        } else {
            return resolved(teacher_string);
        }
    });

}

function list_users(users) {
    users.map((users, i) => {
        let name = document.createElement('p');
        name.innerHTML = i + "-" + users.first_name + ' ' + users.last_name;
        div_users.append(name);
        document.querySelector('.loading').style.display = 'none';
    });
}

function show_teacher(teacher) {
    let name = document.createElement('p');
    let age = document.createElement('p');
    let matter = document.createElement('p');
    name.innerHTML = "Name-" + teacher.name;
    age.innerHTML = "Age-" + teacher.age;
    matter.innerHTML = "Matter-" + teacher.matter;
    div_teacher.appendChild(name);
    div_teacher.appendChild(age);
    div_teacher.appendChild(matter);
    document.querySelector('.teacher_loading').style.display = 'none';

}


function show_jannet(users) {
    console.log(users);
    let name = document.createElement('p');
    let avatar = document.createElement('img');
    name.innerHTML = "1-" + users.first_name + ' ' + users.last_name;
    div_jannet.appendChild(name);
    avatar.src = users.avatar;
    avatar.width = '200';
    div_jannet.appendChild(avatar);
    document.querySelector('.jannet_loading').style.display = 'none';

}