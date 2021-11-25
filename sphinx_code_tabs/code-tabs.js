const onclick = function(event) {
	for (const book of document.querySelectorAll('div.code-tabs')) {
	  for (const page of book.children) {
	    if (page.hasAttribute('data-id')) {
	      page.classList.toggle('hidden', page.dataset.id != this.dataset.id);
			}
	  }
	}
};

window.addEventListener('load', function() {
  for (const book of document.querySelectorAll('div.code-tabs')) {
    let i = 0;
    let navbar = document.createElement('div');
		navbar.classList.add("code-tabs-menu");
		navbar.innerHTML = "•••";
    for (const page of book.children) {
      const button = document.createElement('div');
      page.setAttribute('data-id', i);
			button.setAttribute('data-id', i);
      button.onclick = onclick;
      button.innerText = page.getAttribute('data-title');
			button.classList.add("code-tabs-menu-button");
      page.classList.toggle('hidden', i != 0);
      navbar.appendChild(button);
      ++i;
    }
		book.prepend(navbar);
  }
}, false);
