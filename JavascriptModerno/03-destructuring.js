const user = {
  firstName: 'Patrick',
  lastName: 'Fischer',
  full_name: 'Nome completo',
  age: 33,
  instagram: '@tricks_n_meeples',
  skills: ['Back-end', 'Front-end', 'Mobile', 'SQL'],

};

// Destructuring
const { firstName, lastName, age, instagram, skills, full_name: fullName } = user;
const [primary, secondary, tertiary, quaternary] = skills;

console.log(fullName)