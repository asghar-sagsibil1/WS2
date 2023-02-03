function posts(module){var txt=$("input").val();var ag="";var smm=""
if(module.includes("Discord")){var webhoo=document.getElementById("webhook").value;var usernam=document.getElementById("username").value;var messag=document.getElementById("message").value;var amoun=document.getElementById("amount").value;}else if(module.includes("AccountGen")){var txt=document.getElementById("Gens").value;ag="ag";}
else if(module.includes("SMM")){var txt=document.getElementById("services").value;var usernam=document.getElementById("username").value;ag="ag";}else if(module.includes("IP2Host")){var txt=document.getElementById("IP").value;}else if(module.includes("Host2IP")){var txt=document.getElementById("host").value;}
else if(module.includes("Minecraft")){var txt=document.getElementById("username").value;;}
else if(module.includes("Nmap")){var txt=document.getElementById("IP").value;}
else if(module.includes("Proxy")){var txt=document.getElementById("Type").value;alert(txt);}
else if(module.includes("Skype")){var txt=document.getElementById("username").value;}
else if(module.includes("Cloudflare")){var txt=document.getElementById("host").value;}
else if(module.includes("GeoIP")){var txt=document.getElementById("IP").value;}
else if(module.includes("whois")){var txt=document.getElementById("domain").value;}
else if(module.includes("getheaders")){var txt=document.getElementById("domain").value;}
else if(module.includes("searcharchive")){var txt=document.getElementById("data").value;}
else{var webhoo="";var usernam="";var messag="";var amoun="";}
if(ag=="ag"){var cap="nul";}else{var cap=grecaptcha.getResponse();}
var element=document.getElementById("after");var newElement='<img src="../images/v2.png" class="ld ld-flip-h" id="loader" width="50" height="30"style="padding-top:10px;padding-bottom:5px;"/>';element.insertAdjacentHTML('afterend',newElement)
$.ajax({url:'../inc/lib/Main.php',type:'POST',data:{mod:module,inputselect:txt,webhook:webhoo,username:usernam,message:messag,amount:amoun,'g-recaptcha-response':cap},success:function(data){var myobj=document.getElementById("loader");myobj.remove();var element=document.getElementById("after");var newElement=data;element.insertAdjacentHTML('afterend',newElement)
grecaptcha.reset();}});}