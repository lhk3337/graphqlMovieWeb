export const people = [
  { id: "0", name: "holim", age: 20, gender: "male" },
  { id: "1", name: "Alex", age: 30, gender: "male" },
  { id: "2", name: "Lindsay", age: 30, gender: "female" },
  { id: "3", name: "Nathan", age: 25, gender: "male" },
  { id: "4", name: "Christine", age: 30, gender: "female" },
  { id: "5", name: "Kate", age: 24, gender: "female" },
];

export const getById = (id) => {
  const filterPeople = people.filter((person) => id === person.id);
  return filterPeople[0];
};
