function loadXmlDoc(docName) {
 let xHttp;
 if (window.XMLHttpRequest) {
  xHttp = new XMLHttpRequest();
 } else {
  xHttp = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xHttp.open("GET", docName, false);
 xHttp.setRequestHeader("Content-Type", "text/xml");
 xHttp.send();
 return xHttp.responseXML;
}
