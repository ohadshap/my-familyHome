

const eventOptions = function(){

    window.onhashchange = function() {
        if (window.innerDocClick) {
            window.innerDocClick = false;
        } else {
            if (window.location.hash != '#undefined') {
                goBack();
            } else {
                history.pushState("", document.title, window.location.pathname);
                location.reload();
            }
        }
    }
    
    
    
    
    window.addEventListener('popstate', function(event) {
    
        const r = confirm("האם ברצונך לצאת מהאתר?");
    
        if (r == true) {
            history.back();
            window.location = document.referrer 
            // Stay on the current page.
            history.pushState(null, null, window.location.pathname);
        }
    
        history.pushState(null, null, window.location.pathname);
    
    }, false);


}

export default eventOptions