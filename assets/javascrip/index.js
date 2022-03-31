var Search =  document.querySelector('.header__navbar-list-input');
function openSearch() {
   Search.style.display = "block";
}
function CloseSearch() {
    Search.style.display = "none";
 }


// login
document.write
function check() {
    var username = document.querySelector('.login_input-user').value;
    var password = document.querySelector('.login_input-pass').value;
    var Pcheck = document.querySelector('#check_login');
    var BtnLogin = document.querySelector('.check_login--btn');
    
    if(username == "" || password == ""){
        Pcheck.style = "background-color: #f8d7da; color: #721c24; border-color: #f5c6cb;";
        Pcheck.innerHTML = "Tên đăng nhập và mật khẩu không được để trống. Vui lòng kiểm tra lại!";
        BtnLogin.innerHTML = "X";
        return false;
    }
    else {
        Pcheck.style = "color: #856404; background-color: #fff3cd; border-color: #ffeeba;";
        Pcheck.innerHTML = "Không tìm thấy tài khoản của bạn. Vui lòng đăng kí tài khoản!";
        return true;
    }

}

// registry

function checkResgistry() {
   var Rname = document.querySelector("#resgistry_input-name").value;
   var REmail = document.querySelector("#resgistry_input-email").value;
   var Rpass1 = document.querySelector("#resgistry_input-pass1").value;
   var Rpass2 = document.querySelector("#resgistry_input-pass2").value;

   var Rsucsess = document.querySelector("#resSuscess");
   var Rcheck_1 = document.querySelector("#resCheck_1");
   var Rcheck_2 = document.querySelector("#resCheck_2");
   var Rcheck_3 = document.querySelector("#resCheck_3");
   var Rcheck_4 = document.querySelector("#resCheck_4");

   if(Rname == "")
   {
      Rcheck_1.innerHTML = "Vui lòng nhập tên đầy đủ!";
   }
   if(Rname != "")
   {
      Rcheck_1.innerHTML = "";
   }
   if(REmail == ""){
      Rcheck_2.innerHTML = "Vui lòng nhập Email";
   }
   if(REmail != "")
   {
      Rcheck_2.innerHTML = "";
   }
   if(Rpass1 == ""){
      Rcheck_3.innerHTML = "Mật khẩu không được để trống!";
   }
   if(Rpass1 != "")
   {
      Rcheck_3.innerHTML = "";
      if(Rpass1.length != 6)
      {
      Rcheck_3.innerHTML = "Mật khẩu tối đa 6 kí tự từ 0-9";
      }
   }
   if(Rpass2 == ""){
      Rcheck_4.innerHTML = "Nhập lại mật khẩu không được để trống!";
   }
   if(Rpass2 != "")
   {
      Rcheck_4.innerHTML = "";
        if(Rpass2.check != Rpass1)
         {
            Rcheck_4.innerHTML = "Nhập lại mật khẩu không đúng";
         }
         if(Rpass2 == Rpass1) {
            Rcheck_4.innerHTML = "";
         }
   }
   if(Rname != "" && REmail != "" && Rpass1 != "" && Rpass2 != "" && Rpass2 == Rpass1){
     
      Rsucsess.innerHTML = "Đăng kí thành công";
      Rsucsess.style = "color: red; margin-top: 10px; font-size: 2rem; font-weight: 400; text-align: center";  
   }

   
}