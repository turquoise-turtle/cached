//v2
javascript:var xhttp=new XMLHttpRequest;xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(xhttp.responseText);t.archived_snapshots.closest&&(window.location.href=t.archived_snapshots.closest.url.replace("http://web","https://web"))}else window.location.href="http://webcache.googleusercontent.com/search?q=cache:"+window.location.href},xhttp.open("GET","https://new-tab-cors-server.herokuapp.com/wm/"+window.location.href,!0),xhttp.send();













/*partly from https://webapps.stackexchange.com/questions/65758/how-do-i-skip-404s-in-the-wayback-machine*/
/*the 'javascript:' thing turns it into a bookmarklet, remove for actual use */

//v1
javascript:var f = function(jsn){if (jsn.archived_snapshots.closest) {window.location.href=jsn.archived_snapshots.closest.url.replace('http://web', 'https://web');} else { window.location.href='http://webcache.googleusercontent.com/search?q=cache:' + window.location.href; /*alert('unfortunately there\'s no cached copy')*/}};var d = document,z=d.createElement('script'),b=d.body,l=d.location;z.setAttribute('src','https://archive.org/wayback/available?url='+encodeURIComponent(l.href)+'&callback=f');z.setAttribute('type', "application/javascript");b.appendChild(z);void(0);/*partly from https://webapps.stackexchange.com/questions/65758/how-do-i-skip-404s-in-the-wayback-machine*/


javascript:
var f = function(jsn){
	if (jsn.archived_snapshots.closest) {
		window.location.href=jsn.archived_snapshots.closest.url.replace('http://web', 'https://web');
	} else {
		window.location.href='http://webcache.googleusercontent.com/search?q=cache:' + window.location.href; 
		/*alert('unfortunately there\'s no cached copy')*/
	}
};
var d = document,z=d.createElement('script'),b=d.body,l=d.location;
z.setAttribute('src','https://archive.org/wayback/available?url='+encodeURIComponent(l.href)+'&callback=f');
z.setAttribute('type', "application/javascript");
b.appendChild(z);
void(0);


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// document.getElementById("demo").innerHTML = xhttp.responseText;
		var jsn = xhttp.response;
		if (jsn.archived_snapshots.closest) {
			window.location.href=jsn.archived_snapshots.closest.url.replace('http://web', 'https://web');
		} else {
			window.location.href='http://webcache.googleusercontent.com/search?q=cache:' + window.location.href; 
		}
	} else {
		window.location.href='http://webcache.googleusercontent.com/search?q=cache:' + window.location.href; 
	}
};
xhttp.open("GET", 'https://new-tab-cors-server.herokuapp.com/https://archive.org/wayback/available?url=' + encodeURIComponent(window.location.href), true);
xhttp.send();

//v1b
javascript:var f = function(jsn){if (jsn.archived_snapshots.closest) {window.location.href=jsn.archived_snapshots.closest.url.replace('http://web', 'https://web');} else { window.location.href='http://webcache.googleusercontent.com/search?q=cache:' + window.location.href; /*alert('unfortunately there\'s no cached copy')*/}};var d = document,z=d.createElement('script'),b=d.body,l=d.location;z.setAttribute('src','https://archive.org/wayback/available?url='+encodeURIComponent(l.href)+'&callback=f');b.appendChild(z);void(0);/*partly from https://webapps.stackexchange.com/questions/65758/how-do-i-skip-404s-in-the-wayback-machine*/
javascript:(function(){ document.body.innerHTML = '';var s = "\n\tbody {\n\t\tmargin: 0;\n\t}\n\tiframe {\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tborder: 0;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tz-index:99999;\n\t}\n";var y = document.createElement('style');y.innerText = s;document.body.appendChild(y);var x = document.createElement('iframe');x.src = window.atob('aHR0cHM6Ly92aWEuaHlwb3RoZXMuaXMv') + location.href;document.body.appendChild(x);document.title = location.href; })();