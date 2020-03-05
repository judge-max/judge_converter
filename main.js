function addLink() {
	let ids = $(`#number`)[0].value.split(' ');
	let tioj = [], cf = [];
	
	/*
	Regex for judges:
	TIOJ:  [1-2]\d{3} 
	  CF:  (\d{1,4})([A-Z]\d*)
	????:
	*/
	const TIOJREG = /[1-2]\d{3}/g, CFREG = /(\d{1,4})([A-Z]\d*)/g;
	let obj

	for(let id of ids) {
		if(id.match(TIOJREG)) tioj.push(id);
		if(id.match(CFREG)){
			obj = {
				round: id.split(CFREG)[1],
				pid: id.split(CFREG)[2]
			};
			cf.push(obj);
		}
	}
	let href = '', url = '';
	for(let id of tioj) {
		href += `<br><a href="https://tioj.ck.tp.edu.tw/problems/${id}.html">TIOJ: ${id}</a>`;
		url +=           `<br>https://tioj.ck.tp.edu.tw/problems/${id}.html`;
	}
	for(let obj of cf) {
		href += `<br><a href="https://codeforces.com/problemset/problem/${obj.round}/${obj.pid}">CF: ${obj.round + obj.pid}</a>`;
		url +=           `<br>https://codeforces.com/problemset/problem/${obj.round}/${obj.pid}`;
	}
	$(`#href_block`).append(href);
	$(`#url_block`).append(url);
	$(`#number`)[0].value = '';
}