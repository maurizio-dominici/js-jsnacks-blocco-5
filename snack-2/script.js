const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

const namePerson = people.map((person) => person.name);
console.table(namePerson);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
