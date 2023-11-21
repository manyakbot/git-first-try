let myPC = {
    monitor: {
        features: {
            name: 'acer',
            screenResolution: 1920,
            color: 'white',
        }
    },
    keyboard: {
        name: 'unknown',
        color: 'black',
    },
    mouse: {
        name: 'unknown',
        color: 'black',
        own: 'Middle School 9'
    },
    systemUnit: {
        components: {
            videoCard: 'Radeon 6900xt',
            ram: 32,
            motherboard: 'MSI b550',
            processor: 'AMD 5800',
            waterCooling: 'MSI',
            unitPower: 1000 + 'W',
            hardDisk: 'SSD ' + 1 + 'TB',
        }
    },
}

console.log(myPC);

let tryToArraySetObject = {
    name : ['Oleg', 'Dima', 'Stas'],
    age : [24, 24, 26],
    status: ['Handsome Boy', 'Goblin Boy', 'Lucky Boy'],
}
console.log(tryToArraySetObject.name[2]);