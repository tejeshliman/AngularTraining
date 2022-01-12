"use strict";
// // Array function examples
// const pizzas = [
//   {
//     name: "Large",
//     toppings: ["ExtraSauce", "Cheese", "Panner"],
//   },
// ];
// const mappedPizzas = pizzas.map((pizza, index) => {
//   return pizza.name.toUpperCase() + index;
// });
// const refmappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());
// //console.log(mappedPizzas);
// //console.log(refmappedPizzas);
// const pizza = {
//   name: "Medium",
//   getName: function () {
//     const self = this;
//     setTimeout(function () {
//       console.log(self);
//     }, 100);
//   },
// };
// const pizzaNew = {
//   name: "new",
//   getName: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 100);
//   },
// };
// const final = {
//   name: "Final",
//   getName: () => final.name,
// };
// console.log(pizza.getName());
// console.log(pizzaNew.getName());
// console.log(final.getName());
// // Default parameter Examples
// function mulltply(a: number, b: number = 2) {
//   return a * b;
// }
// console.log(mulltply(10, 5));
// console.log(mulltply(10));
// // Object literal examples
// const Exppizza = {
//   name: "Pepperni",
//   prize: 50,
//   getName() {
//     return this.name;
//   },
// };
// console.log(Exppizza.getName());
// const toppings = ["Cheese"];
// const order = { Exppizza, toppings };
// //console.log(order);
// function crateOrder(a: any, b: any) {
//   return { a, b };
// }
// console.log(crateOrder(Exppizza, toppings));
// // Reduce and Rest parameters (...)
// function Sumall(arr: Array<any>) {
//   return arr.reduce((prev: any, next: any) => prev + next);
// }
// const sum = Sumall([1, 2, 3]);
// console.log(sum);
// function SumallWithArr(...arr: any) {
//   return arr.reduce((prev: any, next: any) => prev + next);
// }
// const sumWithArr = SumallWithArr(1, 2);
// console.log(sumWithArr);
// function SumallWitDiff(message: string, ...arr: any) {
//   console.log(message);
//   return arr.reduce((prev: any, next: any) => prev + next);
// }
// const sumWithDiffPar = SumallWitDiff("test", 1, 2);
// console.log(sumWithDiffPar);
// // Array Spred operator
// const itEmpNames = ["emp1", "emp2"];
// const nonitEmpNames = ["emp3", "emp4"];
// const allEmpName = [...itEmpNames, ...nonitEmpNames];
// console.log(allEmpName);
// const allEmpNameReverse = [...nonitEmpNames, ...itEmpNames];
// console.log(allEmpNameReverse);
// // Object Spread Example
// const mobileStore = {
//   name: "MyMobile",
// };
// const brands = ["iPhone", "Redmi"];
// const finalMobileStore = {
//   ...mobileStore,
//   brands,
// };
// console.log(finalMobileStore);
// const mobileStoreWithObjectAssign = Object.assign({}, mobileStore, { brands });
// console.log(finalMobileStore, mobileStoreWithObjectAssign);
// //  Destructuring Arrays and Objects examples
// // const pizzaForObject = {
// //   name: "Pepperoni",
// //   toppings: ["pepperoni"],
// // };
// // function OrderPizza({ name, toppings }) {
// //   console.log(name, toppings);
// // }
// // function OrderPizzaWithRenameProps({
// //   name: pizzaName,
// //   toppings: pizzatoppings,
// // }) {
// //   console.log(pizzaName, pizzatoppings);
// // }
// // OrderPizza(pizzaForObject);
// // OrderPizzaWithRenameProps(pizzaForObject);
// // function OrderPizzaAsObject({ name: pizzaName, toppings: pizzatoppings }) {
// //   return {
// //     pizzaName,
// //     pizzatoppings,
// //   };
// // }
// // const { pizzaName } = OrderPizzaAsObject(pizzaForObject);
// // console.log(pizzaName);
// // // Array Destructuring
// // const brandNames = ["Iphone", "HTC", "Redmi"];
// // const [fisrt, second, third] = brandNames;
// // console.log(brandNames);
// // function logBrands([fisrt, second, third]) {
// //   console.log(fisrt, second, third);
// // }
// // logBrands([fisrt, second, third]);
// // Number types
// let pizzaCost: number = 25;
// const pizzaTopCost: number = 10;
// function calculatePrize(cost: number, TopCost: number): number {
//   return cost + 1.5 * TopCost;
// }
// const cost = calculatePrize(pizzaCost, pizzaTopCost);
// const costAsnum: number = calculatePrize(pizzaCost, pizzaTopCost);
// console.log(cost, costAsnum);
// console.log(`Cost: ${costAsnum}`);
// // String types
// const test: string = "pizza25";
// function normalize(code: string): string {
//   return code.toUpperCase();
// }
// console.log(normalize(test));
// const finaleMessage: string = `Final coupen code: ${normalize(test)}`;
// console.log(finaleMessage);
// // Boolean examles
// const orders: number = 2;
// function offerDisc(orders: number): boolean {
//   return orders >= 3;
// }
// if (offerDisc(orders)) {
//   console.log(`You have discount`);
// } else {
//   console.log(`add more than 3 orders to have discount`);
// }
// // ANy type example
// let coupen; // by default type is any
// coupen = 5;
// console.log(coupen);
// coupen = "Test";
// console.log(coupen);
// coupen = true;
// console.log(coupen);
// // Implicit vs Explicit Types
// // Ts uses inferred types internally by default as any
// let imlicictTest = "test";
// let explicittTest: string = "test";
// // Void type
// let selectedTop: string = "test";
// function voidexample(topping: string): void {
//   selectedTop = topping;
// }
// voidexample("newTest");
// console.log(selectedTop);
// //Pure function vs inpure function
// // pure just retuns results and impure mutate values
// // never example
// function onError(err: string): never {
//   throw new Error(err);
// }
// onError("Error Occureed");
// //Null, Undefined, Strict Null checks  : To make nullable var
// let Cop: string | null = "TestCop";
// function removeCop(): void {
//   Cop = null;
// }
// console.log(Cop);
// removeCop();
// console.log(Cop);
// // Union Types : we can use multiple types for a var using pipe | operator
// let pizzaSizeAsString: string = "small";
// function setpizzaSizeAsString(size: "small" | "medium" | "large"): void {
//   pizzaSizeAsString = size;
// }
// setpizzaSizeAsString("large");
// console.log(pizzaSizeAsString);
// let pizzaSizeAsNum: number = 1;
// function setpizzaSizeAsNum(size: 1 | 2 | 3): void {
//   pizzaSizeAsNum = size;
// }
// setpizzaSizeAsNum(3);
// console.log(pizzaSizeAsNum);
// // Function Types
// let Sumorder: (price: number, quanitity: number) => number;
// Sumorder = (x, y) => x * y;
// const sumO = Sumorder(10, 2);
// console.log(`Total Sum: ${sumO}`);
// // Function declaration and defination on one line
// let SumorderAsOnline: (price: number, quanitity: number) => number = (x, y) =>
//   x * y;
// const sumwithOneLineFunction = SumorderAsOnline(1, 2);
// console.log(`Total Sum: ${sumwithOneLineFunction}`);
// //Functions and Optional Arguments : add ? in parameter def
// let SumorderwithOptional: (price: number, quanitity?: number) => number;
// SumorderwithOptional = (x, y) => {
//   if (y) {
//     return x * y;
//   }
//   return x;
// };
// const sumorderwithOptional = SumorderwithOptional(1, 2);
// const sumorderwith1parl = SumorderwithOptional(1);
// console.log(
//   `Total Sum: ${sumorderwithOptional}, with Optional: ${sumorderwith1parl}`
// );
// //Typed Functions and Default Params
// let SumorderwithDefault: (price: number, quanitity?: number) => number;
// SumorderwithDefault = (x, y = 10) => {
//   return x * y;
// };
// const sumorderwithDefault = SumorderwithDefault(1);
// const sumorderwithoutDef = SumorderwithDefault(15, 2);
// console.log(`Total Sum by 1 para: ${sumorderwithDefault}`);
// console.log(`Total Sum all para: ${sumorderwithoutDef}`);
// //Object Types
// let pizzaObj: { name: string; price: number; getName(): string };
// pizzaObj = {
//   name: "test",
//   price: 20,
//   getName() {
//     return pizzaObj.name;
//   },
// };
// console.log(pizzaObj.getName());
// //Object Types as Onject on single
// let pizzaOneObj: { name: string; price: number; getName(): string } = {
//   name: "pizzaOneObj",
//   price: 20,
//   getName() {
//     return pizzaOneObj.name;
//   },
// };
// console.log(pizzaOneObj.getName());
// //Array Types and Generics
// let numArr: number[];
// numArr = [1, 2, 3];
// //Array as generic
// let strArr: Array<string>;
// strArr = ["One", "two"];
// //Tuple Types for Arrays
// let tuppleExp: [string, number, boolean?];
// tuppleExp = ["One", 20];
// tuppleExp = ["One", 20, true];
// //Type Aliases
// type Size = "small" | "medium";
// type Callback = (size: Size) => void;
// let PSize: Size = "medium";
// const selectize: Callback = (x) => {
//   PSize = x;
// };
// selectize("small");
// // Type Assertions
// type pizzaType = { name: string; price: number };
// const PizzaTypeExm = { name: "test", price: 20 };
// // Serizalize as Json
// const seriazlizeasJson = JSON.stringify(PizzaTypeExm);
// function getNameFromJson(obj: string) {
//   return (JSON.parse(obj) as pizzaType).name;
// }
// console.log(getNameFromJson(seriazlizeasJson));
// // Creating Interfaces
// interface pizzaInterface {
//   name: string;
//   sizes: string[];
// }
// let interfaceExp: pizzaInterface;
// interfaceExp = {
//   name: "test",
//   sizes: ["small", "large"],
// };
// function CreatePizza(name: string, sizes: string[]): pizzaInterface {
//   return {
//     name,
//     sizes,
//   };
// }
// interfaceExp = CreatePizza("testnew", ["small"]);
// console.log(interfaceExp);
// // Creating Interfaces with functions
// interface pizzaInterfaceWithFunc {
//   name: string;
//   sizes: string[];
//   getSizes(): string[];
// }
// let interfaceExpwithFun: pizzaInterfaceWithFunc;
// function CreatePizzaWithFun(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   } as pizzaInterfaceWithFunc;
// }
// interfaceExpwithFun = CreatePizzaWithFun("testnew", ["small"]);
// console.log(interfaceExpwithFun);
// //Extending Interfaces
// interface baseInterface {
//   sizes: string[];
// }
// interface childInterface extends baseInterface {
//   name: string;
//   getSizes(): string[];
// }
// let ExtendingInterfaceExp: childInterface;
// function CreatePizzaExtendingInterfaceExp(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   } as childInterface;
// }
// ExtendingInterfaceExp = CreatePizzaExtendingInterfaceExp("testnew", ["small"]);
// console.log(ExtendingInterfaceExp);
// //Interfaces and Optional Properties : toppings? declared as optional
// interface OptionalPropInterface {
//   name: string;
//   getSizes(): string[];
//   sizes: string[];
//   toppings?: number[];
// }
// let OptionalPropInterfaceExp: OptionalPropInterface;
// function CreatePizzaOptionalPropInterfaceExp(
//   name: string,
//   sizes: string[]
// ): OptionalPropInterface {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   };
// }
// OptionalPropInterfaceExp = CreatePizzaExtendingInterfaceExp("testnew", [
//   "small",
// ]);
// console.log(OptionalPropInterfaceExp);
// OptionalPropInterfaceExp.toppings = [1, 2];
// console.log(OptionalPropInterfaceExp);
// //Interfaces with IndexSignatures
// interface IndexSignaturesInterface {
//   name: string;
//   getSizes(): string[];
//   sizes: string[];
//   toppings?: number[];
//   [key: string]: any;
// }
// let IndexSignaturesInterfaceExp: IndexSignaturesInterface;
// function CreatePizzaIndexSignaturesInterface(
//   name: string,
//   sizes: string[]
// ): IndexSignaturesInterface {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   };
// }
// IndexSignaturesInterfaceExp = CreatePizzaIndexSignaturesInterface("testnew", [
//   "small",
// ]);
// IndexSignaturesInterfaceExp[1] = "xyz";
// console.log(IndexSignaturesInterfaceExp);
// // Classes and Constructors
// class PizzaClass {
//   name: string;
//   toppings: string[] = [];
//   constructor(name: string) {
//     this.name = name;
//   }
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// let pizzaObjExp: PizzaClass = new PizzaClass("Pepponary");
// pizzaObjExp.addToppings("tomato");
// console.log(pizzaObjExp);
// // Public and Private Members : by default are public
// class PizzaClassWithAccess {
//   public toppings: string[] = [];
//   constructor(private name: string) {}
//   //by default any var or func are public
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// let PizzaClassWithAccessExp = new PizzaClassWithAccess("Pepponary");
// pizzaObjExp.addToppings("tomato");
// console.log(PizzaClassWithAccessExp);
// //Readonly Members: only intialize while declaring
// class PizzaClassWReadonly {
//   public toppings: string[] = [];
//   constructor(readonly name: string) {}
// }
// let PizzaClassWReadonlysExp = new PizzaClassWReadonly("Pepponary");
// console.log(pizzaObjExp.name);
// //Setters and Getters (Accessors) : they are always public
// class Sizes {
//   constructor(public sizes: string[]) {}
//   get AvaialbleSizes() {
//     return this.sizes;
//   }
//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// const sizees = new Sizes(["small", "medium"]);
// //Getter
// console.log(sizees.AvaialbleSizes);
// //setter
// sizees.AvaialbleSizes = ["large", "medium"];
// console.log(sizees.AvaialbleSizes);
// // Classes inheritance
// class SizesBaseClass {
//   constructor(public sizes: string[]) {}
//   get AvaialbleSizes() {
//     return this.sizes;
//   }
//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// class PizzaChildClass extends SizesBaseClass {
//   toppings: string[] = [];
//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// let inheritanceObjExp: PizzaChildClass = new PizzaChildClass("Pepponary", [
//   "small",
//   "large",
// ]);
// inheritanceObjExp.addToppings("tomato");
// console.log(inheritanceObjExp);
// console.log(inheritanceObjExp.AvaialbleSizes);
// // Abstract Classes
// abstract class abstactClass {
//   constructor(public sizes: string[]) {}
//   get AvaialbleSizes() {
//     return this.sizes;
//   }
//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// class PizzaChildabstactClassClass extends abstactClass {
//   toppings: string[] = [];
//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// let abstactClassExp: PizzaChildabstactClassClass =
//   new PizzaChildabstactClassClass("Pepponary", ["small", "large"]);
// abstactClassExp.addToppings("tomato");
// console.log(abstactClassExp);
// console.log(abstactClassExp.AvaialbleSizes);
// // Protected Members and Inheritance
// abstract class ProtectedClass {
//   constructor(protected sizes: string[]) {}
//   get AvaialbleSizes() {
//     return this.sizes;
//   }
//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// class PizzaChildProtectedClass extends ProtectedClass {
//   toppings: string[] = [];
//   constructor(readonly name: string, sizes: string[]) {
//     super(sizes);
//   }
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
//   updateSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// let ProtectedClassExp: PizzaChildProtectedClass = new PizzaChildProtectedClass(
//   "Pepponary",
//   ["small", "large"]
// );
// ProtectedClassExp.addToppings("tomato");
// ProtectedClassExp.updateSizes(["medium"]);
// console.log(ProtectedClassExp);
// console.log(ProtectedClassExp.AvaialbleSizes);
// //Interface contracts with “implements”
// interface SizeInter {
//   AvaialbleSizes: string[];
// }
// abstract class SizesClass implements SizeInter {
//   constructor(protected sizes: string[]) {}
//   get AvaialbleSizes() {
//     return this.sizes;
//   }
//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// interface PizzaInterface extends SizeInter {
//   name: string;
//   toppings: string[];
//   addToppings(topping: string): void;
//   updateSizes(sizes: string[]): void;
// }
// class PizzaCClass extends SizesClass implements PizzaInterface {
//   toppings: string[] = [];
//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
//   updateSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }
// let pizzaCClassExm: PizzaCClass = new PizzaCClass("Pepponary", [
//   "small",
//   "large",
// ]);
// pizzaCClassExm.addToppings("tomato");
// console.log(pizzaCClassExm);
// console.log(pizzaCClassExm.AvaialbleSizes);
// //Static Properties and Methods
// class Coupens {
//   static allowed = ["One", "two"];
//   static createCopuen(perce: number) {
//     return `PIZZA_${perce}`;
//   }
// }
// console.log(Coupens.allowed);
// console.log(Coupens.createCopuen(10));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9leGFtcGxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlc2NyaXB0X2V4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLE1BQU07QUFDTixxQkFBcUI7QUFDckIsb0RBQW9EO0FBQ3BELE9BQU87QUFDUCxLQUFLO0FBRUwsc0RBQXNEO0FBQ3RELDZDQUE2QztBQUM3QyxNQUFNO0FBRU4sMkVBQTJFO0FBRTNFLCtCQUErQjtBQUUvQixrQ0FBa0M7QUFFbEMsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmLE9BQU87QUFDUCxLQUFLO0FBRUwscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2YsT0FBTztBQUNQLEtBQUs7QUFFTCxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQixLQUFLO0FBRUwsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUNuQyxnQ0FBZ0M7QUFFaEMsZ0NBQWdDO0FBQ2hDLGdEQUFnRDtBQUNoRCxrQkFBa0I7QUFDbEIsSUFBSTtBQUVKLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFFN0IsNkJBQTZCO0FBRTdCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsT0FBTztBQUNQLEtBQUs7QUFFTCxtQ0FBbUM7QUFFbkMsK0JBQStCO0FBRS9CLHdDQUF3QztBQUN4Qyx3QkFBd0I7QUFFeEIsd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQixJQUFJO0FBRUosK0NBQStDO0FBRS9DLHNDQUFzQztBQUV0QyxxQ0FBcUM7QUFDckMsOERBQThEO0FBQzlELElBQUk7QUFF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