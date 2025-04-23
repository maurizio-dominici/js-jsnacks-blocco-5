const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

const marcoStudent = students
  .find((beginner) => beginner.name === "Marco Lanci")
  .map((beginner) => beginner.class);

// ^SECONDO METODO
// -- .find((beginner) => beginner.name === "Marco Lanci")
// -- ?.class

console.log(marcoStudent);

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
