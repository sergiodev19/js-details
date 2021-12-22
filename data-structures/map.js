const obj = {
  name: 'Seroj',
  age: 26,
  job: 'backend'
};

const entries = [
  [ 'name', 'Seroj' ],
  [ 'age', 26 ],
  [ 'job', 'backend' ]
];

// console.log(Object.entries(obj));
// console.log(entries);
// console.log(Object.fromEntries(entries));

const users = [
  { name: 'Vaxik', amount: 16 },
  { name: 'Alik', amount: 16 },
  { name: 'Gevor', amount: 16 },
  { name: 'Alik', amount: 16 },
  { name: 'Vaxik', amount: 16 },
  { name: 'Vardan', amount: 16 }
];

const map = new Map({ name: 'Vaxik', amount: 16 });

// users.forEach(user => {
//   let mapUser = map.get(user);

//   if (mapUser) {
//     map.set(user, { name: mapUser. })
//   }
// });

