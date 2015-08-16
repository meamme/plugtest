var ver = ".0.0.1 alpha testing";
var stopscript = 0;

function scripts(mmm) {

if (stopscript == 0) {

if (mmm.message.split(" ")[0] == "!lmgtfy") {
  var lmgtfy = "http://lmgtfy.com/?q="; search = dcv.message.split("!lmgtfy ")[1]; search = search.replace(/ /g, "+");
  API.sendChat(lmgtfy + search)
}


//important commands
if (mmm.message.split(" ")[0] == "!stopscript") {
  
  API.sendChat("stopping script :(");
  stopscript = 1;
}

if (mmm.message.split(" ")[0] == "!mmmver") {
  
  API.sendChat(ver);
  
}
}
API.on(API.CHAT, scripts);
API.sendChat("The dankest script has loaded")
