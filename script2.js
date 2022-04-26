const meuArray = [30, 45, 54, 5, 223, 2548, 7]

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return[...mySet];
}

console.log(valoresUnicos (meuArrey));