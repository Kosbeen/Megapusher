window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('active')
    })

    document.querySelectorAll('.nav-list-link').forEach(function(el) {
        el.addEventListener('click',function(event) {
            console.log(event)
            event.target.classList.toggle('sunshine')
        })
    })
})
    window.onload = function () {
    var checkboxes = document.querySelectorAll('[role="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
      var cb = new Checkbox(checkboxes[i]);
      cb.init();
    }