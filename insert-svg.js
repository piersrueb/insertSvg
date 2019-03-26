//  insert svg
//  usage:
//  <div class="svg" data-svg="img/cta.svg"></div>

const insertSvg = (elem) => {
	let t = document.getElementsByClassName(elem)
	for (let i = 0; i < t.length; i++) {
		let file = t[i].dataset.svg;
		let xhr = new XMLHttpRequest;
		xhr.open('get', file, true);
		xhr.onreadystatechange = () => {
			if (xhr.readyState != 4) return;
			let svg = xhr.responseXML.documentElement;
			svg = document.importNode(svg, true);
			t[i].appendChild(svg);
		};
		xhr.send();
	}
}
insertSvg('svg');
