function greeter(person:string){
    return "hello ," + person
}

let user = "Jone"

document.body.innerHTML = greeter(user)

let num1:number = 1
let num2:number = 2
let sum = num1 + num2

let str1:string = '嘿嘿' 
let str2:string = 'hahah'
let str:string = str1+str2


declare function create(o:object|null):void
create({props:0})
create(null)

let obj:{name:string,age:number}
obj ={name:"张三",age:10}

function getName(name:string,age:number):void{
    
}
function getName1(name:string,age:number):string{
 return name + age
}



interface use{
    name:string,
    age:number
}
interface per{
    sex:number
}

// let person : use &per ={name:"张三",age:1,sex:0}


interface Person {
name: string,
age: number,
sex: number
isJob: boolean,
hobby: string[],
former: number,
formerName:[string,string,string]
}
let person:Person={
    name:'张三',
    age:15,
    sex:0,
    isJob:false,
    hobby:["1",'2'],
    former:3,
    formerName:["李四","王五","laoliu "]

}