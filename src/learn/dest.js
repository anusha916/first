/*const x=8
x=x+" "
console.log(typeof x)//string
x=x-2
console.log(x)//6*/

//creating a object
/*let employee={
    ename:'anusha',
    eid:'aa4552',
}
//destructuring
const {ename,eid}=employee
console.log(ename)
//logs anusha
console.log(eid)
//logs aa4552*/
let counter=countthevalues();
let counter1=countthevalues();
function countthevalues()
{
    return{
    count:0,
    increment:function(){
        this.count++;
    }
}
}
counter.increment();
counter1.increment();
console.log(counter1);

