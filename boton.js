document.getElementById('startcar').onclick = function lightOn() {
    var x = document.getElementById('light');
    if (x.style.background !== 'gold') {
        x.style.background = 'gold';
        getnav;
        

    } else {
        x.style.background = 'black';
        getnav;

      }
    }
  var getnav = document.getElementById("myDropdown").classList.toggle("show");  
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      // var content = this.nextElementSibling;
      var content = this.previousElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }