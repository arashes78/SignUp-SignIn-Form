$(document).ready(function() {
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("cpassword");
  var email = document.getElementById("email");
  var username = document.getElementById("username");
  var lusername = document.getElementById("lusername");

  function validatePassword() {
    if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("رمز عبور مطابقت ندارد");
    } else {
      confirm_password.setCustomValidity("");
    }
  }

  function validateUsername() {
    let regExp = /^[0-9a-zA-Z]+$/;
    if (username.value == "") {
      username.setCustomValidity('نام کاربری را وارد کنید');
    } else if (username.value.match(regExp)) {
      username.setCustomValidity("");
    } else {
      username.setCustomValidity('فقط حروف انگلیسی مجاز است');
    }

  }

  function validateLUsername() {
    let regExp = /^[0-9a-zA-Z]+$/;
    if (lusername.value == "") {
      lusername.setCustomValidity('نام کاربری را وارد کنید');
    } else if (lusername.value.match(regExp)) {
      lusername.setCustomValidity("");
    } else {
      lusername.setCustomValidity('فقط حروف انگلیسی مجاز است');
    }

  }

  function validateEmail() {
    if (email.value == "") {
      email.setCustomValidity("ایمیل را به درستی وارد کنید");
    } else if (!email.value.includes("@")) {
      email.setCustomValidity("ایمیل باید شامل @ باشد");
    } else if (email.value.includes("@")) {
      var check = false;
      for (var i = email.value.indexOf("@"); i < email.value.length; i++) {
        if (email.value.charAt(i) == ".") {
          check = true;
          if (email.value.length - i - 1 >= 2) {
            email.setCustomValidity("");
          } else {
            email.setCustomValidity(
              "ایمیل باید شامل دامنه با حداقل دو حرف باشد"
            );
          }
        }
      }
      if (check == false) {
        email.setCustomValidity("ایمیل باید شامل دامنه باشد");
      }
    } else {
      email.setCustomValidity("");
    }
  }
  lusername.oninvalid = validateLUsername;
  lusername.onkeyup = validateLUsername;
  username.oninvalid = validateUsername;
  username.onkeyup = validateUsername;
  email.oninvalid = validateEmail;
  email.onkeyup = validateEmail;
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;

  $(".link").click(function() {
    $(".container").fadeOut(500);
    $(".wrapper").append(`<span class="terms">
    <h3>شرایط استفاده</h3>
    <p>این یک متن تستی برای پر کردن محتوای سایت است، که شما می توانی از آن در سایت خود
        برای کامل کردن متن نمونه استفاده کنید.این یک متن تستی برای پر کردن محتوای سایت
        است، که شما می توانی از آن در سایت خود برای کامل کردن متن نمونه استفاده کنید.
    </p>
    <h3>حریم خصوصی</h3>
    <p>این یک متن تستی برای پر کردن محتوای سایت است، که شما می توانی از آن در سایت خود
        برای کامل کردن متن نمونه استفاده کنید.
    </p>
    <h3>کپی رایت</h3>
    <p>این یک متن تستی برای پر کردن محتوای سایت است، که شما می توانی از آن در سایت خود
        برای کامل کردن متن نمونه استفاده کنید.این یک متن تستی برای پر کردن محتوای سایت
        است، که شما می توانی از آن در سایت خود برای کامل کردن متن نمونه استفاده کنید.این
        یک متن تستی برای پر کردن محتوای سایت است، که شما می توانی از آن در سایت خود برای
        کامل کردن متن نمونه استفاده کنید.
    </p>
    <h3>روش استفاده</h3>
    <p>این یک متن تستی برای پر کردن محتوای سایت است، که شما می توانی از آن در سایت خود
        برای کامل کردن متن نمونه استفاده کنید.این یک متن تستی برای پر کردن محتوای سایت
        است، که شما می توانی از آن در سایت خود برای کامل کردن متن نمونه استفاده کنید.این
        یک متن تستی برای پر کردن محتوای سایت است، که شما می توانی از آن در سایت خود برای
        کامل کردن متن نمونه استفاده کنید.این یک متن تستی برای پر کردن محتوای سایت است،
        که شما می توانی از آن در سایت خود برای کامل کردن متن نمونه استفاده کنید.
        </p>	<br>
        <span class="gg">
            <p><a class="reload" href="#" onclick="window.location.reload();"><Strong>متوجه شدم</Strong></a></p>
        </span>
</span>`);
  });

  $("#register__form").submit(function(event) {
    event.preventDefault();

    if ($(".switch").is(":checked")) {
      $(".container").fadeOut(500);
      $(".wrapper").append(
        '<h1  style="font-size: 50px;">ثبت نام با موفقیت انجام شد</h1>'
      );
    } else {
      window.alert("لطفا با شرایط موافقت کنید");
    }
  });

  $("#signin__form").submit(function(event) {
    event.preventDefault();
    $(".container").fadeOut(500);
    $(".wrapper").append('<h1  style="font-size: 50px;">وارد شدید</h1>');
  });
});
