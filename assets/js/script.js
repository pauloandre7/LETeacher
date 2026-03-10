const questionButtons = document.querySelectorAll('.btn-question');

questionButtons.forEach(btn => {
	
	btn.addEventListener('click', () => {

		// get the next eement in the tree
		const answer = btn.nextElementSibling;
		const icon = btn.querySelector('i');
		
		if (answer.classList.contains('answer--hide')){

			btn.classList.add('btn-question--expanded');
			answer.classList.replace('answer--hide', 'answer--show');

			icon.classList.replace('fa-caret-down', 'fa-caret-up');
		} else {
			btn.classList.remove('btn-question--expanded');
		
			// i will let this different replace logic just to ... idk
			answer.classList.remove("answer--show");
			answer.classList.add("answer--hide");

			icon.classList.remove("fa-caret-up");
			icon.classList.add("fa-caret-down");
		}
	});
});
