// const person = {
//     name: 'Adnan',
//     age: 30,
//     location: {
//         city: 'Bangkok',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}`);

// const {city, temp} = person.location;

// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Midnights Children',
//     author: 'Salman Rushdie',
//     published: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-pub' } = book.published;

// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'London', 'Middlesex', '19147'];

// const [ street, city, state, zip] = address

const item =[`Coffee (hot)`, '$2.00', '$2.50', '$2.75'];

const [ coffeeType, small, medium, large] = item;

console.log(`A medium ${coffeeType} costs ${medium}`);