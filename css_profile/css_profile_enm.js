if (typeof (dojo) != "undefined") {
    require(["dojo/domReady!"], function () {
        try {
            dojo.place(
               "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/profiles/css_profile_enm.css?repoName=homepage-customization\"></link>",
				dojo.doc.head,
				"last"
            );
        } catch (e) {
            alert('exception occurred : ' + e);
        }
    });
}
