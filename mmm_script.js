

var isstopped = 0;

function lmcTfy(dcv) {

if (isstopped == 0) {

if (dcv.message.split(" ")[0] == "!lmgtfy") {
  var lmgtfy = "http://lmgtfy.com/?q="; search = dcv.message.split("!lmgtfy ")[1]; search = search.replace(/ /g, "+");
  API.sendChat(lmgtfy + search)
}

if (dcv.message.split(" ")[0] == "!google") {
  var google = "http://google.com/?q="; search = dcv.message.split("!google ")[1]; search = search.replace(/ /g, "+");
  API.sendChat(google + search)
}

if (dcv.message.split(" ")[0] == "!idk") {
  
  API.sendChat("/shrug")
}
if (dcv.message.split(" ")[0] == "!isthisthekrustykrab") {
  
  API.sendChat("NO, THIS IS PATRICK")
}
if (dcv.message.split(" ")[0] == "!donger") {
  
  API.sendChat("/lenny")
}

if (dcv.message.split(" ")[0] == "!troll") {
  
  API.sendChat(":trollface:")
}

if (dcv.message.split(" ")[0] == "!thankmrskeletal") {
  
  API.sendChat("doot doot")
}

if (dcv.message.split(" ")[0] == "!mmmping") {
  
  API.sendChat("ponger donger ")
}
if (dcv.message.split(" ")[0] == "!gonger") {
API.sendChat("( ͡°╭͜ʖ╮͡° ) ")

}
//more important commands
if (dcv.message.split(" ")[0] == "!mmmver") {
  
  API.sendChat("/me Version 0.0.0.1 alpha testing")
}

if (dcv.message.split(" ")[0] == "!stop") {
  
  isstopped = 1;
  API.sendChat("/me stopped script :(");
}

}

}
API.on(API.CHAT, lmcTfy)
API.sendChat("The dankest script has loaded ( ͡° ͜ʖ ͡°)")
