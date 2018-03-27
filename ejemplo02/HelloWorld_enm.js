if (typeof(dojo) != "undefined") {
  require(["dojo/domReady!"],function() {
    try {
        var waitFor = function(callback, elXpath, elXpathRoot, maxInter, waitTime) {
             if (!elXpathRoot) var elXpathRoot = dojo.body();
             if (!maxInter) var maxInter = 10000;              //number of intervals before expiring
             if (!waitTime) var waitTime = 1;                  //1000=1 seconds
             if (!elXpath) return;
             var waitInter = 0;                                // current interval
             var intId = setInterval(function() {
             if (++waitInter < maxInter && !dojo.query(elXpath,elXpathRoot).length) return;
             clearInterval(intId);
             if (waitInter >= maxInter) {
               console.log("****WAITFOR [" + elXpath + "] WATCH EXPIRED interval" + waitInter + " (max:" + waitInter + ")");
             }else {
              console.log("****WAITFOR [" + elXpath + "] WATCH TRIPPED AT interval" + waitInter + " (max:" + waitInter + ")");
              callback();
             }
         }, waitTime);
       };
       waitFor(function() { // wait for the required elements are rendered
           var thisUser=lconn.homepage.userName;  //this variable is defined byt the IBM Connections Homepage
            dojo.query("span.shareSome-title")[0].textContent = "Hello " + thisUser + "-";

           var updatesDescription=document.getElementById("asDesc");  //change the description
           var originalText=updatesDescription.textContent;
           updatesDescription.textContent="Hello Customizer:" + originalText;
           updatesDescription.style="color:#ff0000";
        }, ".lotusStreamTopLoading div.loaderMain.lotusHidden");
   } catch(e) {
      alert("Exception ocurred in helloWorld: " + e);   
   }
 });
}