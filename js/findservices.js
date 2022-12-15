document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("language-list").addEventListener('change', function () {
        window.location = this.value;
    });
    document.getElementById("language-list-footer").addEventListener('change', function () {
        window.location = this.value;
    });
})