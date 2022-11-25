function validation(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;

    if(username==""){
        arlet("Username không được bỏ trống");
        return false;
    }
    if (password.length < 6){
        arlet("Password không được ít hơn 6 ký tự");
        return false;
    }
}