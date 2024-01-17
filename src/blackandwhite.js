/* src/blackandwhite.js */
/*  */

//var firstParagraph = document.querySelector("p")
//firstParagraph.classList.add("baw_ip9_e99785r")
function BlackAndWhite(options){
    
    let _this = this;
    let defaultOptions = {
        container: ".blackandwhite"
    }
    options = {...defaultOptions, ...options};
    
    this.init = function() {
        
        /*var elements_bw = document.querySelector(options.container);
		elements_bw.classList.add("baw_ip9_e99785r"); */
		
		document.querySelectorAll(options.container).forEach((element_app, index) => {
            // console.log(slide);
            console.log("Poniendo clase al elemento "+options.container+" indice: "+index);
            element_app.classList.add("baw_ip9_e99785r");
            /*slides[index] = slide;
            slides[index].style = "display:none";
            slides[index].className += " too-slide-single-slide too-slide-fade";
            */
        });
        //document.querySelector(options.container).className += " too-slide-slider-container";
        /* document.querySelectorAll(options.slidesClass).forEach((slide, index) => {
            // console.log(slide);
            slides[index] = slide;
            slides[index].style = "display:none";
            slides[index].className += " too-slide-single-slide too-slide-fade";
        }); */
        
    }

    this.init();
    
}