/**
 * blackandwhite - Easy package.json exports.
 * 
 * Author: Jack Rojas +51930222760 [jack @ internet.com.pe
 * Website: https://internet.pe/
 * Licensed under the MIT License.
 */

function BlackAndWhite(options){
    let _this = this;
    let defaultOptions = {
        container: ".blackandwhite"
    }
    options = {...defaultOptions, ...options};
    this.init = function() {
		document.querySelectorAll(options.container).forEach((element_app, index) => {
            //console.log("Poniendo clase al elemento "+options.container+" indice: "+index);
            element_app.classList.add("baw_ip9_e99785r");
        });
    }
    this.init();
}