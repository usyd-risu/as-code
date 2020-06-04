//this is the part that filters out unneeded fields depending on whether you're getting a rescon or a class feedback form
var filt = function(){

  document.getElementById("myForm").style.display = "none";
  $("select.filterby").change(function(){
      //alert("The text has been changed.");
      var filters = $.map($("select.filterby").toArray(), function(e){
          return $(e).val();
      }).join(".");
      document.getElementById("myForm").style.display = "block";
      $("div#myForm").find("div").hide();
      $("div#myForm").find("div." + filters).show();
  });
}

// This is the part that generates the URL onclick="gen()"
var gen = function(){

      var type    = document.getElementById("tyID");
      var session = document.getElementById("sID");
      var trainer = document.getElementById("tID");
      var faculty = document.getElementById("fID");
      var linkbox = document.getElementById("myMessage");
      var url;
      //var str1 = "type is: "
      if (type.value === "0") {
        url = "please select whether your link is for a Class or a ResCon";
        url = url.replace(/ /gi, '');
      }
      else if (type.value === "1") {
        url = 'www.Class.com' + session.value + trainer.value + faculty.value;
        url = url.replace(/ /gi, '');
      }
      else if (type.value === "2") {
        url = 'www.ResCon.com' + session.value + trainer.value + faculty.value;
        url = url.replace(/ /gi, '');
      }

       linkbox.value = url;
       //console.log(type is: 'type.value);
       console.log(url);
  };

//document.getElementById("genbut").onclick = gen();
window.onload = filt();
