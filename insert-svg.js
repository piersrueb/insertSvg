//  insert svg

const insertSvg = (elem) => {
	let t = document.querySelectorAll(elem)
	for (let i = 0; i < t.length; i++) {
		let cl = t[i].className;
		let file = t[i].dataset.svg;
		let xhr = new XMLHttpRequest;
		xhr.open('get', file, true);
		xhr.onreadystatechange = () => {
			if (xhr.readyState != 4) return;
			let svg = xhr.responseXML.documentElement;
			svg = document.importNode(svg, true);
			if(t[i].classList.contains('replace')){
				svg.setAttribute('class', cl);
				t[i].replaceWith(svg);
			} else {
				t[i].appendChild(svg);
			}
		};
		xhr.send();
	}
}

//  call it

insertSvg('.svg');
