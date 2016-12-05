$(document).ready(function(){
    var btn = $('.open').click(function() {
   			var parent = this.parentNode;
   			var items = parent.getElementsByClassName('result-item');
   			var page = parent.getElementsByClassName('pagination');
   			for(var i = 0; i < items.length; i++) {
   				items[i].style.display = "block";
   			}
   			page[0].style.display = "block";
   			this.style.display = "none";
   		});
  });