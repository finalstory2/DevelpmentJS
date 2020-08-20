'use strict'

var users = [];
var div_users = document.querySelector("#users");
var div_jannet = document.querySelector("#jannet");

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
        });
}, 2000);

function get_users() {
    return fetch('https://reqres.in/api/users');
}

function get_jannet() {
    return fetch('https://reqres.in/api/users/2')
}

function list_users(users) {
    users.map((users, i) => {
        let name = document.createElement('p');
        name.innerHTML = i + "-" + users.first_name + ' ' + users.last_name;
        div_users.append(name);
        document.querySelector('.loading').style.display = 'none';
    });
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