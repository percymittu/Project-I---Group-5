function signupvalidation(){
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// to remove the whitespaces
	
	const usernameinput = username.value.trim();
	const emailinput = email.value.trim();
	const passwordinput = password.value.trim();
	const password2input = password2.value.trim();
	
// setting custom validation through javascript
	if(usernameinput === '') {
		setErrormsg(username, 'Please enter username');
	} else {
		setSuccess(username);
	}
	
	
	if(emailinput === '') {
		setErrormsg(email, 'Please enter email');
	} else if (!isEmail(emailinput)) {
		setErrormsg(email, 'Please Enter a valid Email');
	} else {
		setSuccess(email);
	}
	
	if(passwordinput === '') {
		setErrormsg(password, 'Password cannot be blank');
	} 
	
	else if(passwordinput != "" && passwordinput !== password2input) {
		setErrormsg(password2, 'Passwords you entered does not match');
	}
	else {
		setSuccess(password);
		setSuccess(password2);
	}
	
	
}

function setErrormsg(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//we can directly give the validation in html file in pattern but here we have called a function isEmail to check the given email id is valid or not.
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




}

function loginvalidation(){

	const form = document.getElementById('form');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	
	
	form.addEventListener('submit', e => {
		e.preventDefault();
		
		checkInputs();
	});
	
	function checkInputs() {
		//  to remove the whitespaces
		
		
		const emailinput = email.value.trim();
		const passwordinput = password.value.trim();
		
		// setting custom validation through javascript
		if(emailinput === ''){
			setErrormsg(email, 'Please enter Email');
		} 
        else
	    {
			setSuccess(email);
		}
		
		if(passwordinput === '') {
			setErrormsg(password, 'Please enter password');
		} 
		else {
			setSuccess(password);
			
		}
		
		
	}
	
	function setErrormsg(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
	}
	
	function setSuccess(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	}
		//we can directly give the validation in html file in pattern but here we have called a function isEmail to check the given email id is valid or not.
	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}
	

}

function forgotuservalidation(){

	const form = document.getElementById('form');
	const email = document.getElementById('email');
	
	
	
	form.addEventListener('submit', e => {
		e.preventDefault();
		
		checkInputs();
	});
	
	function checkInputs() {
		// to remove the whitespaces
		
		
		const emailinput = email.value.trim();
		
		
		if(emailinput === ''){

			setErrormsg(email, 'Please enter Email');
		} 
		else if (!isEmail(emailinput)) {
			setErrormsg(email, 'Please Enter a valid Email');
		} else {
			setSuccess(email);
		}
        
		
		
	}
	
	function setErrormsg(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
	}
	
	function setSuccess(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	}
		
	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}
	

}

function forgotpasswordvalidation(){

const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// to remove the whitespaces
	
	const passwordinput = password.value.trim();
	const password2input = password2.value.trim();
	

	
	
	if(passwordinput === '') {
		setErrormsg(password, 'Password cannot be blank');
	} 
	
	else if(passwordinput != "" && passwordinput !== password2input) {
		setErrormsg(password2, 'Passwords you entered does not match');
	}
	else {
		setSuccess(password);
		setSuccess(password2);
	}
	
	
}

function setErrormsg(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



}

