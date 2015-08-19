

var isstopped = 0;
var usertoggle = 0;
var waittime = 1000;

document.getElementById("facebook-menu").innerHTML="<a style='color:red' onclick='clickbutton()'  href='#'>togg is off</a>"

function lmcTfy(mmm) {

if (isstopped == 0) {
 if (usertoggle == 1) {
//search functions
if (mmm.message.split(" ")[0] == "!lmgtfy") {
  var lmgtfy = "http://lmgtfy.com/?q="; search = mmm.message.split("!lmgtfy ")[1]; search = search.replace(/ /g, "+");
  API.sendChat(lmgtfy + search)
}

if (mmm.message.split(" ")[0] == "!google") {
  var google = "http://google.com/?q="; search = mmm.message.split("!google ")[1]; search = search.replace(/ /g, "+");
  API.sendChat(google + search)
}

//fun stuff
if (mmm.message.split(" ")[0] == "!idk") {
  
  API.sendChat("/shrug")
}
if (mmm.message.split(" ")[0] == "!isthisthekrustykrab") {
  
  API.sendChat("NO, THIS IS PATRICK")
}
if (mmm.message.split(" ")[0] == "!donger") {
  
  API.sendChat("/lenny")
  
}

if (mmm.message.split(" ")[0] == "!troll") {
  
  API.sendChat(":trollface:")
}

if (mmm.message.split(" ")[0] == "!thankmrskeletal") {
  
  API.sendChat("doot doot")
}

if (mmm.message.split(" ")[0] == "!mmmping") {
  
  API.sendChat("ponger donger ")
}
if (mmm.message.split(" ")[0] == "!gonger") {
API.sendChat("( ͡°╭͜ʖ╮͡° )")

}


//more important commands
if (mmm.message.split(" ")[0] == "!mmmver") {
  
  API.sendChat("/me Version 0.0.0.1 alpha testing")
}




//end
}
}
}
API.on(API.CHAT, lmcTfy)

API.sendChat("The dankest script has loaded ( ͡° ͜ʖ ͡°)")


API.on(API.CHAT_COMMAND, callback);

function callback(value) {

if (isstopped == 0) {
    if (value == "/toggleuser") {
	
	if (usertoggle == 1)
	{
	usertoggle = 0;
	document.getElementById("facebook-menu").innerHTML="<a style='color:red' onclick='clickbutton()' href='#'>togg is off</a>"	
	} else {
	usertoggle = 1;
	document.getElementById("facebook-menu").innerHTML="<a style='color:#ffffff' onclick='clickbutton()' href='#'>togg is on</a>"
	}
	
		
	}
if (value == "/stop") {
  
  isstopped = 1;
  API.sendChat("/me stopped script :(");
}

if (value == "/katy") {
	
	API.sendChat("hi every1 im new!!!!!!! holds up spork my name is katy but u can call me t3h PeNgU1N oF d00m!!!!!!!!"); 
	setTimeout(waittime);
	API.sendChat("lol…as u can see im very random!!!! thats why i came here, 2 meet random ppl like me _… im 13 years old (im mature 4 my age tho!!)");
	setTimeout(waittime);
	API.sendChat("i like 2 watch invader zim w/ my girlfreind (im bi if u dont like it deal w/it) its our favorite tv show!!! bcuz its SOOOO random!!!!");
	setTimeout(waittime);
	API.sendChat("shes random 2 of course but i want 2 meet more random ppl =) like they say the more the merrier!!!!");
	setTimeout(waittime);
	API.sendChat("lol…anyways i hope 2 make alot of freinds here so give me lots of commentses!!!!");
	setTimeout(waittime);
	API.sendChat("DOOOOOMMMM!!!!!!!!!!!!!!!! <--- me bein random again _^ hehe…toodles!!!!!");


}

}
//end ifstopped

}

function clickbutton() {
	if (usertoggle == 1)
	{
	usertoggle = 0;
	document.getElementById("facebook-menu").innerHTML="<a style='color:red'  onclick='clickbutton()' href='#'>togg is off</a>"	
	} else {
	usertoggle = 1;
	document.getElementById("facebook-menu").innerHTML="<a style='color:#ffffff'  onclick='clickbutton()' href='#'>togg is on</a>"
	}
}
