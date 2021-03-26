/* Taking control of the container   */
const main = document.getElementById('root');
/* Styling elements */
main.style.display = 'flex';
main.style.alignItems = 'center';
main.style.justifyContent = 'center';
main.style.height = '100vh';

/* Creating the needed elements */
const textInput = document.createElement('input');
const submitButton = document.createElement('button');
const header = document.createElement('h1');
const backToIndex = document.createElement('button');
/* This function is responsible for rendering the input*/
function showInput() {
	main.append(textInput);
	main.append(submitButton);
	textInput.value = '';
	textInput.focus();
	submitButton.textContent = 'Go';
	submitButton.addEventListener('click', showText);
}
/* this function is responsible for rendering the input value */
const showText = () => {
	//Appending Elements to the DOM
	main.append(header);
	main.append(backToIndex);
	//Updating Elements
	backToIndex.textContent = 'index';
	header.textContent = textInput.value;
	header.style.padding = '10px';
	//Removing Elements from the DOM
	main.removeChild(textInput);
	main.removeChild(submitButton);

	backToIndex.addEventListener('click', back);
};
/* this function is responsible for reRendering the input menu when you click on the text */
const back = () => {
	main.removeChild(backToIndex);
	main.removeChild(main.firstChild);
	showInput();
};
/* Executing the function showInput() on load  */
showInput();
