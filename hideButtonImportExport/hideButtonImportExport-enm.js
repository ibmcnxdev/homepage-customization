// ==UserScript==
//
// @name         remove member import/export buttons
// @version      0.1
// @description  *** PROTOTYPE CODE *** 
// @author       vodo22
//
// ==/UserScript==


if(typeof(dojo) != "undefined") {
    require(["dojo/domReady!"], function(){
    try {
        // utility function to let us wait for a specific element of the page to load...
        var waitFor = function(callback, elXpath, elXpathRoot, maxInter, waitTime) {
            if(!elXpathRoot) var elXpathRoot = dojo.body();
            if(!maxInter) var maxInter = 10000;  // number of intervals before expiring
            if(!waitTime) var waitTime = 1;  // 1000=1 second
            if(!elXpath) return;
            var waitInter = 0;  // current interval
            var intId = setInterval( function(){
                if( ++waitInter<maxInter && !dojo.query(elXpath,elXpathRoot).length) return;

                clearInterval(intId);
                if( waitInter >= maxInter) {
                    console.log("**** WAITFOR ["+elXpath+"] WATCH EXPIRED!!! interval "+waitInter+" (max:"+maxInter+")");
                } else {
                    console.log("**** WAITFOR ["+elXpath+"] WATCH TRIPPED AT interval "+waitInter+" (max:"+maxInter+")");
                    callback();
                }
            }, waitTime);
        };

        // here we use waitFor to wait on the .lotusStreamTopLoading div.loaderMain.lotusHidden element
        // before we proceed to customize the page...
        waitFor( function(){
                    // wait until the "loading..." node has been hidden
                    // indicating that we have loaded content.
                    i=0;
                    console.log("DO IT");
                    dojo.query(".lotusBtn", "memberAddButton").forEach(function(node) {
                        i=i+1;
                        console.log(i);
                        if(i>3) {
                          dojo.place("<span></span>", node, "replace");
                        }
                    });

              },
              ".lotusContent div.lotusBtnContainer");

  } catch(e) {
      alert("Exception occurred in community-members: " + e);
  }
});
}
