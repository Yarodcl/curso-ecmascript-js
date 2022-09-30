const user ={username: 'YarodCl', age: 34, country: 'CL'};
const { username, ...values} = user;
console.log(username);
console.log(values);