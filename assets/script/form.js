function Send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var body = "Name:" + name + "<br/> Email:" + email + "<br/> Phone:" + phone + "<br/> Message:" + message;

    console.log(body);
    Email.send({
        SecureToken : "e19ec44b-bef3-41a9-92f3-6d499b14d708",
        To : 'sharmabicky519@gmail.com',
        From : "askbicd@gmail.com",
        Subject : "From Portfolio",
        Body : body
    }).then(
      message => {
        if(message=='OK'){
          swal("Submitted", "I will contact to you soon", "success");
        }
        else{
          swal("Something worng", "I will contact to you soon", "error");
        }
      }
    );
}