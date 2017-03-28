class App {
	init() {
		document.querySelector('#dialog-button')
			.addEventListener(
				'click', 
				this.openCreateDialog, false);
	}

	async openCreateDialog() {
		let dialog = new AddTodoDialog();
		let text = await dialog.open();
		let el = document.createElement('li');
		el.innerText = text;
		document.querySelector('#todos').appendChild(el);
	}
}

class AddTodoDialog {
	constructor() {
		this.container = document.body;
		this.template = `
			<div class="dialog">
				<div><input name="todo" /></div>
				<div class="buttons">
					<button id="cancel">Cancel</button>
					<button id="save">Save</button>
				</div>
			</div>
		`;
	}

	open() {
		return new Promise((resolve, reject) => {
			let el = document.createElement('div');
			el.classList.add('dialog-container');
			el.innerHTML = this.template;

			el.querySelector('#cancel').addEventListener('click', () => {
				reject({ 'cancel': true });
				this.container.removeChild(el);
			});

			el.querySelector('#save').addEventListener('click', () => {
				resolve(el.querySelector('input').value);
				this.container.removeChild(el);
			});

			this.container.appendChild(el);
		});
	}
}

window.onload = () => {
	new App().init();
};