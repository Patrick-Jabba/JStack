const user = {
  firstName: 'Patrick',
  lastName: 'Fischer',
  age: 33,
  instagram: '@tricks_n_meeples',
  skills: ['Back-end', 'Front-end', 'Mobile', 'SQL'],
  active: false,
};

/* Spread (espalhar) Operator: 
ao invés de passar propriedade  */
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
 active: true,
 
};

console.log({user});
console.log({updatedUser});