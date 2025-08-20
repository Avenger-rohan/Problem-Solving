function Passed(name,age){
this.name=name
this.age=age
return `${name} ${age}`

}
let result= new Passed("john",12)
console.log(result);
