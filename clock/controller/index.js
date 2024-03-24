/*
* @Author: lenovo
* @Date:   2024-02-04 00:00:04
* @Last Modified by:   lenovo
* @Last Modified time: 2024-02-04 18:47:11
*/

function update(){
	// date related information : https://stackoverflow.com/questions/221294/how-do-i-get-a-timestamp-in-javascript
	let date = new Date();
	let dateFormat = { 
		year: 'numeric', 
		month: 'numeric', 
		day: 'numeric',
		hour: 'numeric',
		minute:'numeric',
		second:'numeric'
	};
	let body = document.getElementById('clock');
	//https://codedamn.com/news/javascript/how-to-convert-timestamp-to-date-in-javascript 
	body.innerText = date.toLocaleString('en-US',dateFormat);
	// console.log(body);
}

setInterval(update,1000);