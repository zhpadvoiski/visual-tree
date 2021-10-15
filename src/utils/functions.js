function A() {
	this.number = 10;
	this.show = () => {
		console.log(this.number);
	};
}

let b = {
	number: 20,
	show: () => {
		console.log(this.number);
	},
};
