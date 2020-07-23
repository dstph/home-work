class human{
	constructor(){};
	getFirstName(){
		if(!this.firstName){
			return this.firstName = prompt('write first name?');
		} else{
			return this.firstName;
		}
	}
	getLastName(){
		if(!this.lastName){
			return this.lastName = prompt('write last name?');
		} else{
			return this.lastName;
		}
	}
}
let employee = new human,
	ul = document.createElement('ul');

document.body.appendChild(ul);

Object.defineProperty(employee, 'getUser', {
	value: function() {
	 console.log(this.getFirstName() + " " + this.getLastName());
	},
	writable: true
} );

Object.defineProperty(employee, 'renderUser', {
	value: function() {
		for(key in this){
			let li = document.createElement('li');
			li.innerText = this[key];
			ul.appendChild(li);
		}
	},
} );

let user = Object.create(employee);
user.getUser();
user.renderUser();