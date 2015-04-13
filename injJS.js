document.body.style.backgroundImage = "url('http://i.imgur.com/LmuELPV.jpg')";
var bklink;
function cb() {
bklink = prompt("link for bkimg");
if (bklink == ""){
document.getElementById("tp-room").style.backgroundImage="url('http://i.imgur.com/LmuELPV.jpg')";
} else {
document.getElementById("tp-room").style.backgroundImage="url(" + bklink + ")";
}
addChat("<a style='color:#ececec;'>Background changed.</a>");
document.getElementById("tp-room").style.max-width="80%";
document.getElementById("tp-room").style.max-height="80%";
}

function hb() {

document.getElementById("tp-room").style.backgroundImage="";
addChat("<a style='color:#ececec;'>Background turned off.</a>");

}


document.getElementById("twitter-menu").innerHTML="<button onclick='cb()'><div style='size='20px' '>background</div></button><br><button onclick='hb()'><div style='size='20px' '>background</div></button>";
document.getElementById("facebook-menu").innerHTML="";



//Stolen from Igor's script <3//
function addChat(text, color, state, size) {
	var chat = $('#chat-messages'),
		a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;

	if (color == undefined)
		color = "#9fee00";

	if (state){
		chat.append("<div class='update percentage-update' style='border-left: double 6px " + color + "';'><center><span class='antitroll-text' style='color: " + color + "; " + si + "'>" + text + "<br></span></center></div>");
	}else{
		chat.append("<div class='update percentage-update' style=''><center><span class='antitroll-text' style='color: " + color + "; " + si + "'>" + text + "<br></span></center></div>");
	}

	if (size){
		var si = "font-size: 11px;";
	}else{
		var si = "";
	}

	if (a)
		chat.scrollTop(chat[0].scrollHeight);
	if (chat.children().length >= 512)
		chat.children().first().remove();
}

addChat("<a style='color:#ececec;'>Bender's thing was started.</a>");