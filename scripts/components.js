
// thx stackoverflow - code below based on https://stackoverflow.com/a/31837264/15204995
// now with less JQuery since I'm a vanilla purist!
{
    var extractURL = /[^\/]*$/;
    var postprocessors = {

        /** 
         * The postprocessor for the navbar.
         * It finds the page we're on and perma-highlights it.
         * @param {Element} self - imported navbar
         */
        navbar: function(self){
            var pages = self.querySelector("#pages");
            
            var url = window.location.href.match(extractURL)[0]; // I'd be a fool to recompute this repeatedly in the for loop

            url == "" ? url = "index.html" : 0; // fix bug that's been here for ages

            for(var i=0; i<pages.children.length, i++;){
                var page = pages.children[i];
                // check normal links
                var type = page.getAttribute("class");
                var null_safety_patch = page.getAttribute("href")
                if( type==null && null_safety_patch && null_safety_patch.match(extractURL)[0] == url ){ // null safety
                    page.classList.add("cwd");
                    return; // there can only be one
                }

                // check dropdowns
                if( type!=null ){
                    var subpages = page.querySelector(".dropdown-content").children;
                    var header = page.querySelector(".dropdown-head");
                    var headerhref = header.querySelector("a")
                    var null_safety_patch = headerhref.getAttribute("href")
                    if( headerhref != null && null_safety_patch && null_safety_patch.match(extractURL)[0] == url ){
                        header.classList.add("cwd");
                        return;
                    }

                    for(var j=0; j<subpages.length, j++;){
                        var subpage = subpages[j];
                        var null_safety_patch = subpage.getAttribute("href")
                        if( null_safety_patch && null_safety_patch.match(extractURL)[0] == url ){
                            subpage.classList.add("cwd");
                            header.classList.add("cwd");
                            return; // there can only be one
                        }
                    }
                }
            }
            updateCSS();
        },

        /** 
         * The postprocessor for any e2 code.
         * It loads code from github and syntax highlights it.
         * @param {Element} oldSelf - imported navbar
         */
        e2code: function(oldSelf){

            var self = document.createElement('section'); // change it to a section first
            self.innerHTML = oldSelf.innerHTML;
            self.classList.add('code-container')
            oldSelf.replaceWith(self);
            e2_syntax_highlight(self);

        }

    };


    var includes = document.querySelectorAll("component");
    $.each(includes, function () {
        var name = this.getAttribute("class");
        var file = this.getAttribute("src");
        var self = this; // horrible
        $(this).load(file, 
            function(){ postprocessors[name](self); }    
        );
    });
}