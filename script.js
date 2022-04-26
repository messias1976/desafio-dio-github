function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Erik', 'Admin');
usuarios.set('Marcelo', 'User');
usuarios.set('Mirela', 'Admin');

console.log(getAdimns(usuarios));
