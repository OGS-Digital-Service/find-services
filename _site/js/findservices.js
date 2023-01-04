document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("language-list").addEventListener('change', function () {
        window.location = this.value;
    });
    document.getElementById("language-list-footer").addEventListener('change', function () {
        window.location = this.value;
    });
})

if (window.innerWidth < 420){
    const serviceform = document.getElementById('servicesform')
        serviceform.addEventListener("focus",function(e){
          e.target.scrollIntoView();
        }, true) 
    }