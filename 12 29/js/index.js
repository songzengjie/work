//1、Object构造函数模式
// var p = new Object()
// p.name = 'Tom'
// p.age = 18
// p.setName = function (name) {
//     this.name = name
// }
//2、对象字面量模式
// var a = {
//     name: 'Tom',
//     age: 18,
//     setName: function (name) {
//         this.name = name
//     }
// }
//3、工厂模式

// function createPerson(name, age) {
//     var obj = {
//         name: name,
//         age: age,
//         setName: function (name) {
//             this.name = name
//         }
//     }
//     return obj
// }
// var p1 = createPerson('Tom', 18)
//4、自定义构造函数模式
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.setName = function (name) {
//         this.name = name
//     }
// }

// var p1 = new Person('Tom', 18)
//5、构造函数+原型的组合模式
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.setName = function (name) {
//     this.name = name
// }

// var p1 = new Person('Tom', 18)