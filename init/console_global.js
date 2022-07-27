console.log("Hello world");
console.error(new Error('에러 메시지'));
const arr = [
    {name: 'John Doe', email: 'john@mail.com'},
    {name: 'Jeremy Go', email: 'jeremy@mail.com'}
];
console.table(arr);
const obj = {
    students: {
        grade1: {class1:{}, class:{}},
        grade2: {class1:{}, class:{}},
        teachers: ['John Doe', 'Jeremy Go']
    }
}

console.dir(obj, {depth:1, color:true});

console.time('time for for-loop');

for(let i=0; i<99999;i++){

}
console.timeEnd('time for for-loop')