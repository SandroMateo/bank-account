function Account(name,password) {
  this.name = name;
  this.password = password;
  this.balances = [];
}

function Balance(deposit, withdrawal) {
  this.balance = 0;
  this.deposit = deposit;
  this.withdrawal = withdrawal
}

Balance.prototype.sum = function() {
  this.balance = this.deposit - this.withdrawal;
}
var Profile = {};
$(document).ready(function() {
  $("form#register").submit(function(event) {
    var name = $("#input-name").val();
    var password = $("#input-password").val();
    Profile = new Account(name,password);
    $("form#register").slideUp();
    $("form#log-in").fadeIn(3000);
    event.preventDefault();
  });
  $("form#log-in").submit(function(event) {
    event.preventDefault();
    var name1 = $("#login-name").val();
    var password1 = $("#login-password").val();
    if(password1 === Profile.password && name1 === Profile.name)
    {
      $("#bank-form").show();
    }
    else
    {
      $("#login-password").val("");
      alert("Name or Password are Incorrect");
    }
  });
  $("#bank-form").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    var deposit = parseFloat($("#deposit").val());
    var withdrawal = parseFloat($("#withdrawal").val());
    var newBalance = new Balance(deposit, withdrawal)
    newBalance.sum();

    Profile.balances.push(newBalance);

    $(".name").text(Profile.name);
    $(".money").text(Profile.balances[0].balance);
  });
});
