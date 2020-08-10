document.write("<style>");
document.write("#ui_loader{position:fixed;z-index:900000;width:100%;height:100%;background: #4f5861;padding:10px;text-align:center;top:0px;left:0px;background: rgba(245, 245, 245, 1);-webkit-transition: all 100ms ease-in-out;-moz-transition: all 100ms ease-in-out;-o-transition: all 100ms ease-in-out;transition: all 100ms ease-in-out;}");
document.write("#ui_loader .spinner{width: 60px;height: 60px;position:fixed;z-index:9000;top:50%;left:50%;margin-top:-30px;margin-left:-30px;box-sizing: border-box;border: solid 3px transparent;border-top-color: rgb(34,130,248);border-left-color: rgb(34,130,248);border-radius: 50%;margin-bottom:15px;-webkit-animation: anamation-spinner 600ms linear infinite;animation: anamation-spinner 600ms linear infinite;}");
document.write("@-webkit-keyframes anamation-spinner { 0%{ -webkit-transform: rotate(0deg); } 100%{ -webkit-transform: rotate(360deg); } }");
document.write("@keyframes anamation-spinner { 0%{ transform: rotate(0deg); } 100%{ transform: rotate(360deg); } }");
document.write(".show{ display:block; }");
document.write(".hide{ display:none; }");
document.write("</style>");
document.write("<div id='ui_loader' class='show'><div class='name'>Loading...</div><div class='spinner'></div></div>");

function createClass(name,rules){
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if(!(style.sheet||{}).insertRule){
    (style.styleSheet || style.sheet).addRule(name, rules);
  }else{
    style.sheet.insertRule(name+"{"+rules+"}",0);
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function getMetatag(name,default){
  if (document.querySelector('meta[name="' + name + '"]')){
    return document.querySelector('meta[name="' + name + '"]').content;
  }else{
    return default;
  }
}

function uiCreateRender(mode){
  var property_radius=getMetatag("ui-radius","5");
  createClass('.whatever',"background-color: green;");

  if (mode=="light"){

  }
  if (mode=="dark"){

  }
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      uiCreateRender("dark");
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
      uiCreateRender("light");
    }
  }, 10);
});

window.addEventListener("pageshow", pageShown, false);
window.addEventListener("beforeunload", pageHidden, false);
window.addEventListener("pagehide", pageHidden, false);

function pageShown(evt) {
	if (evt.persisted) {
		//pageshow event handler called.  The page was just restored from the Page Cache (eg. From the Back button.)
    document.getElementById("ui_loader").classList.add("hide");
    document.getElementById("ui_loader").classList.remove("show");
	} else {
		//pageshow event handler called for the initial load.  This is the same as the load event.
    document.getElementById("ui_loader").classList.add("hide");
    document.getElementById("ui_loader").classList.remove("show");
	}
}

function pageHidden(evt) {
	if (evt.persisted){
    //Loaded when the page is left but user may come back
    document.getElementById("ui_loader").classList.add("show");
    document.getElementById("ui_loader").classList.remove("hide");
	} else {
		//pagehide event handler called for page destruction.  This is the same as the unload event.
    document.getElementById("ui_loader").classList.add("show");
    document.getElementById("ui_loader").classList.remove("hide");
	}
}
