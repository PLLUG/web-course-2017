## JavaScript pt.2

### Functions

```js
function sum(x, y) {
	return x + y;
}

sum(2, 3);

let addOne = function(x) {
	return x + 1;
};

let arrowFunc = x => x + 1;

// function context

function outer() {
	console.log(this);

	var self = this;

	let inner = function() {
		console.log(self === this); // false
	};

	function outer() {
		let self = this;
		let inner = () => {
			console.log(self === this); // true
		};
	}
}

// function 
function fparam(x) {}

function fparam1(x=0) {}

function fparam2(...x) {
	console.log(x); // [1, 2, 3]
}

fparam2(1, 2, 3);

```

## Classes

```js
class Person {
	constructor(firstName, lastName) {
		Object.assign(this, {
			firstName,
			lastName
		});
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(fullName) {
		[
			this.firstName,
			this.lastName
		] = fullName.split(' ');
	}
}

let p = new Person("Ivan", "Lavriv");

p.firstName // Ivan

p.lastName // Lavriv

p.fullName // Ivan Lavriv

p.fullName = "Test User";

class Employee extends Person {
	constructor(firstName, lastName, job) {
		super(firstName, lastName);
		this.job = job;
		this.salary = 1000;
		this.bonus = 0.5;
	}

	get totalSalary() {
		return this.salary + this.salary * this.bonus;
	}
}

let e = Employee("Test", "User", "Engineer");

e.totalSalary // 1500

```

### Objects

```js
let obj = {
	x: {},
	y: 2
}

obj.x // 1
obj.y // 2

obj.x = 2;

obj['x'] = 3;

Object.defineProperty(obj, 'z', {
	writable: false,
	value: 5
});

obj.z = 3;

let p = {};

let proxyObj = new Proxy(p, {
	defineProperty(obj, key, value) {
		if(key === "age" && value < 18) {
			throw new Error("Sorry!!!");
		}
		obj[key] = value;
	}
});

proxyObject.age = 15;

let {x, y, "bla-bla": blaBla} = {x: 1, y: 1, "bla-bla": 3};


let x1 = 1, y1 = 1;

let obj = {x1, y1};

```
