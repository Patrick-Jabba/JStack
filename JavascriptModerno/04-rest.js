const user = {
  firstName: 'Patrick',
  lastName: 'Fischer',
  full_name: 'Nome completo',
  age: 33,
  instagram: '@tricks_n_meeples',
  skills: ['Back-end', 'Front-end', 'Mobile', 'SQL'],

};

// Rest (resto do objeto) Operator
const { skills, ...restoUser } = user;
const [primary, secondary,...restoSkills] = skills;

console.log(restoUser, restoSkills)