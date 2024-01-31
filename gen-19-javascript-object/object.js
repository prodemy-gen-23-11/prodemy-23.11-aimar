//Uji coba object input dengan readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let testObject = {
    name: 'Ucup',
    city: 'Cianjur',
    semester: 8
};

function inputUpdate (){
    rl.question('property yang ingin diubah: ', (property) => {
        rl.question('value baru untuk ${property}: ', (value) => {
            testObject[property] = value;

            console.log('updated object: ', testObject);
            rl.close();
        })
    })
}
inputUpdate();