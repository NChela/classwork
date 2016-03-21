var submit = document.getElementById("submit");
submit.addEventListener('click', function(event) {
    

    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var i = 0; i < 100; i += 10) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    
    var message = document.getElementById("message");
    message.innerHTML = pass;
});



                                  

                 