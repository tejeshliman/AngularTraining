"use strict";
// This keyword Scopes
// Global this
function GlobalFunctionThisScope() {
    console.log("GlobalFunctionThisScope::", this);
}
GlobalFunctionThisScope();
// Const method this
const ConstFunctionThisScope = {
    myMethod() {
        console.log("ConstFunctionThisScope::", this);
    },
};
ConstFunctionThisScope.myMethod();
// class method this
class ClassForThisScope {
    myMethod() {
        console.log("ClassForThisScope::", this);
    }
}
const classForThisScopeObj = new ClassForThisScope();
classForThisScopeObj.myMethod();
//Exploring “this” with .call, .apply and .bind
// Object Litteral
const MyObj = {
    myMethod() {
        console.log("Object::", this);
    },
};
//MyObj.myMethod();
//Call need to pass params as comma separated, Apply need to pass parameters as Array
// Function
function MyFunction(arg1, arg2) {
    console.log("Funcion::", this, arg1, arg2);
}
MyFunction("arg1", "arg2");
MyFunction.call(MyObj, "arg1", "arg2");
MyFunction.apply(MyObj, ["arg1", "arg2"]);
// TypescriptFunction with rest parameters
function MyFunctionWithRestPar(...text) {
    console.log("Funcion::", this, text);
}
MyFunctionWithRestPar("arg1", "arg2");
MyFunctionWithRestPar.call(MyObj, "arg1", "arg2");
MyFunctionWithRestPar.apply(MyObj, ["arg1", "arg2"]);
const bindFunction = MyFunctionWithRestPar.bind(MyObj);
bindFunction("arg1", "arg2");
bindFunction("1", "3");
bindFunction("arg1", "arg2");
// Arrow Functions and Lexical Scope
class ArrayFunctionClass {
    myMethod() {
        const test = 123;
        // Sets this scope as scope of class
        console.log("1", this);
        setTimeout(function () {
            // Lexical scope - test is available becuase lexical scope in this new scope
            console.log(test);
            console.log("2", this);
        }, 0);
        setTimeout(() => {
            // with array function, it not binds the this to method so scope of this will not be changed. It does inherit this value
            console.log("3", this);
        }, 0);
    }
}
const instance = new ArrayFunctionClass();
instance.myMethod();
// Typing “this” and “noImplicitThis”
// Pass this type with first parameter
const elem = document.querySelector(".click");
function handleClick(eventName) {
    eventName.preventDefault();
    console.log(this.className);
}
elem === null || elem === void 0 ? void 0 : elem.addEventListener("click", handleClick, false);
//“typeof” Type Queries
typeof "";
console.log(typeof "");
const person = {
    name: "Todd",
    age: 25,
};
const PersonExm = {
    name: "John",
    age: 30,
};
console.log(PersonExm);
// inline type of
const PersonInlineTypeOfExm = {
    name: "John",
    age: 30,
};
console.log(PersonInlineTypeOfExm);
//“keyof” Index Type Queries
const keyofperson = {
    name: "Todd",
    age: 25,
};
//“keyof”, Generics and Lookup Types
function getProperty(obj, key) {
    return obj[key];
}
const personame = getProperty(person, "name");
console.log(personame);
const readonlyMappingClass = {
    name: "test",
    age: 25,
};
function freeze(person) {
    // Freeze will make all props as Readonly
    return Object.freeze(person);
}
const newObj = freeze(readonlyMappingClass);
console.log(newObj);
function freezeasGenerics(obj) {
    // Freeze will make all props as Readonly
    return Object.freeze(obj);
}
const newObj1 = freezeasGenerics(readonlyMappingClass);
console.log(newObj1);
function freezeasWithCustomReadonly(obj) {
    // Freeze will make all props as Readonly
    return Object.freeze(obj);
}
const newObj3 = freezeasWithCustomReadonly(readonlyMappingClass);
console.log(newObj3);
function updatePersonClass(person, prop) {
    return Object.assign(Object.assign({}, person), prop);
}
const em = {
    name: "todd",
    age: 30,
};
console.log(em);
const updated = updatePersonClass(em, { name: "John" });
console.log(updated);
function updatePersonClassWithPartial(person, prop) {
    return Object.assign(Object.assign({}, person), prop);
}
const updatedwith = updatePersonClassWithPartial(em, { name: "Leo" });
console.log(updatedwith);
const pickex = {
    name: "todd",
    age: 30,
};
console.log(pickex);
//“Record” Mapped Type
// with dictionary
let dictionary = {};
const songTrack = {
    current: "test",
    next: "7686",
};
dictionary[0] = songTrack;
//console.log(dictionary[0]);
// With Record
let recorddictionary = {};
const item = {
    current: "test",
    next: "7686",
};
recorddictionary[0] = item;
console.log(recorddictionary[0]);
// with typeof
let typeofrecorddictionary = {};
typeofrecorddictionary[0] = item;
console.log(typeofrecorddictionary[0]);
/* “typeof” and Type Guards  - If one type identified TS automatically idetify second type from pipe*/
function typeOFEX(bar) {
    if (typeof bar === "string") {
        console.log(bar.toUpperCase());
        return bar.toUpperCase();
    }
    console.log(bar.toFixed(2));
    return bar.toFixed(2);
}
typeOFEX("test");
typeOFEX(125.255);
//
class Song {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
}
function getSongDur(item) {
    if (typeof item.duration === "string") {
        return item.duration;
    }
    const { duration } = item;
    const min = Math.floor(duration / 60000);
    const sec = (duration / 1000) % 60;
    return `${min}:${sec}`;
}
const songDurFromString = getSongDur(new Song("test", "05:51"));
console.log(songDurFromString);
const songDurFromMS = getSongDur(new Song("test", 90000));
console.log(songDurFromMS);
/*  3 ways for function*/
class oneway {
    bar() { }
}
function twoway() { }
twoway.prototype.bar = function () { };
/* “instanceof” and Type Guards */
class Foo {
    bar() { }
}
const bar = new Foo();
console.log(Object.getPrototypeOf(bar) === Foo.prototype);
console.log(bar instanceof Foo);
class SongNew {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        this.kind = "song";
    }
}
class PlayLIst {
    constructor(name, songs) {
        this.name = name;
        this.songs = songs;
        this.kind = "playlist";
    }
}
function getItemName(item) {
    if (item.title) {
        return item.title;
    }
    return item.name;
}
const songNme = getItemName(new SongNew("mysong", 30000));
console.log("SongName", songNme);
const playlistName = getItemName(new PlayLIst("playlist1", [new SongNew("mysong2", 30000)]));
console.log("PlaylistName", playlistName);
/* Use Instaceof */
function getItemNameUsingInstance(item) {
    if (item instanceof SongNew) {
        return item.title;
    }
    return item.name;
}
console.log("SongName", getItemNameUsingInstance(new SongNew("mysong2", 30000)));
console.log("PlaylistName", getItemNameUsingInstance(new PlayLIst("playlist2", [new SongNew("mysong3", 30000)])));
/* User Defined Type Guards  */
// we can use only for return boolean not other types
function isSong(item) {
    return item instanceof SongNew;
}
function getItemNameUsinguserdefinedTypeGuard(item) {
    if (isSong(item)) {
        return item.title;
    }
    return item.name;
}
/* Literal Type Guards and “in” Operator */
const exists = "localStorage" in window;
console.log(exists);
const Inexp = "bar";
function isSongWithIn(item) {
    return "title" in item;
}
function getItemNameUsingKindStringLiteral(item) {
    if (item.kind === "song") {
        return item.title;
    }
    return item.name;
}
const myorder = {
    id: "ygdd",
    amount: 10,
    currency: "usd",
};
const withCard = Object.assign(Object.assign({}, myorder), { type: "stripe", card: "1111 5555 5555 6666", cvc: "123" });
const withPaypal = Object.assign(Object.assign({ type: "paypal" }, myorder), { email: "123@.com" });
console.log(withCard);
console.log(withPaypal);
// another way to merge object is Use Object Assign - It internally used &
const assigned = Object.assign({}, myorder, withCard);
console.log(assigned);
function checkout(payload) {
    if (payload.type === "stripe") {
        console.log(payload.card, payload.cvc);
    }
    if (payload.type === "paypal") {
        console.log(payload.email);
    }
}
checkout(withCard);
checkout(withPaypal);
const newArtist = {
    name: "abc",
    songs: 5,
    getSongs() {
        return this.songs;
    },
};
function artFactory({ name }) {
    return new ArtCreator(name);
}
class ArtCreator {
    constructor(name) {
        this.name = name;
    }
}
console.log(artFactory({ name: "todd" }));
/* Function Generics */
class List {
    constructor() {
        this.list = [];
    }
    addItem(item) {
        this.list.push(item);
    }
    getList() {
        return this.list;
    }
}
const list = new List();
list.addItem("test");
console.log(list.getList());
class mobile {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
list.addItem(new mobile("Redmi", 20000));
console.log(list.getList());
// Generics Example
class GenericListClass {
    constructor() {
        this.list = [];
    }
    addItem(item) {
        this.list.push(item);
    }
    getList() {
        return this.list;
    }
}
const genericList = new GenericListClass();
genericList.addItem(new mobile("Redmi", 20000));
console.log(genericList.getList());
//Below is actual implementation, In Js there will not be 2 function names with same name
function reverse(stringOrArray) {
    if (typeof stringOrArray === "string") {
        return stringOrArray.split("").reverse().join("");
    }
    return stringOrArray.slice().reverse();
}
console.log(reverse("Test"));
console.log(reverse(["11", "2"]));
/* Numeric Enums and Reverse Mappings */
var Sizes;
/* Numeric Enums and Reverse Mappings */
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes[Sizes["medium"] = 1] = "medium";
    Sizes[Sizes["large"] = 2] = "large";
})(Sizes || (Sizes = {}));
(function (Sizes) {
    Sizes[Sizes["extraLarge"] = 3] = "extraLarge";
})(Sizes || (Sizes = {}));
console.log(Sizes.medium);
console.log(Sizes[0]);
console.log(Sizes[Sizes.large], Sizes[Sizes.extraLarge]);
/*  String Enums and Inlining Members  */
var SizesString;
/*  String Enums and Inlining Members  */
(function (SizesString) {
    SizesString["Small"] = "small";
    SizesString["Medium"] = "medium";
    SizesString["Large"] = "large";
})(SizesString || (SizesString = {}));
//console.log(SizesString[SizesString.Small]);
let selected = SizesString.Small;
function updateSize(size) {
    selected = size;
}
console.log(selected);
updateSize(SizesString.Large);
console.log(selected);
/* DefinitelyTyped and @types */
/* DefinitelyTyped is a must have resource for any TypeScript developer. It’s essentially documentation (well, *.d.ts files) for most JavaScript packages available out there in the open source community.

This means when you next install a third-party package, you’ll also want to install the type declaration files as well. Doing so will open up typed-everything (autocompletion, spell checks, IDE support and so on). From jQuery and lodash through to front-end frameworks, you can be sure have the full power of TypeScript behind them.

It’s also a community-driven project, should ever need to send a PR (Pull Request) to add any new typings! */
/* To skip any files like test files . Files takes precedence then exclude then include */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2X3R5cGVzY3JpcHRfZXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Fkdl90eXBlc2NyaXB0X2V4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZCxTQUFTLHVCQUF1QjtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCx1QkFBdUIsRUFBRSxDQUFDO0FBRTFCLG9CQUFvQjtBQUNwQixNQUFNLHNCQUFzQixHQUFHO0lBQzdCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFDO0FBRUYsc0JBQXNCLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFbEMsb0JBQW9CO0FBQ3BCLE1BQU0saUJBQWlCO0lBQ3JCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQUVELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ3JELG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRWhDLCtDQUErQztBQUMvQyxrQkFBa0I7QUFDbEIsTUFBTSxLQUFLLEdBQUc7SUFDWixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUM7QUFFRixtQkFBbUI7QUFDbkIscUZBQXFGO0FBQ3JGLFdBQVc7QUFDWCxTQUFTLFVBQVUsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRCxVQUFVLENBQUMsTUFBTSxFQUFFLE1B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