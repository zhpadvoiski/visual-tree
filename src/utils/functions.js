function A() {
	this.number = 10;
	this.show = () => {
		console.log(this.number);
	};
}
let a = new A();
let b = {
	number: 20,
	show: () => {
		console.log(this.number);
	},
};

console.log("a:", a);
console.log("b:", b);
