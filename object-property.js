const student = [
    {id:12, name:'shahin'},
    {id:21, name:'faisal'},
    {id:23 , name:'sakib'},
    {id:22 , name:"shorif"}
]
// const output = [];
// const idH = [];
// for (let i = 0; i < student.length; i++) {
//     const action = [];
//     const element = student[i];
//     const result = element.name;
//     const id = element.id;
//     idH.push(id);
//     output.push(result);
// // }
// console.log(output);
// console.log(idH);

// const names = student.map(s => s.name);
// console.log(names);

// const ids = student.map(s => s.id);
// console.log(ids);

// const bigger = student.filter(s => s.id > 21);
// console.log(bigger);

const biggerOne = student.find (s => s.id > 20 );
console.log(biggerOne);