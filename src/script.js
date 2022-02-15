var product = [];
$(document).ready(function () {
  $("#update_product").hide();
  $(".error").hide();
  $(".success").hide();
  $("#para1").hide();
  $("#para2").hide();
  $("#para3").hide();
  $("#para4").hide();

  $("#add_product").on("click", function () {
    var psku = document.getElementById("product_sku").value;
    var pname = document.getElementById("product_name").value;
    var pprice = parseInt(document.getElementById("product_price").value);
    var pquantity = parseInt(document.getElementById("product_quantity").value);

    var product_details = {
      sku: psku,
      name: pname,
      price: pprice,
      quantity: pquantity,
    };
    if (psku == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#product_sku").css("border-color", "red");
      $("#para1").show().css("color", "red");
    } else if (pname == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#product_name").css("border-color", "red");
      $("#para2").show().css("color", "red");
      $("#para1").hide().css("color", "red");
    } else if (pprice == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#product_price").css("border-color", "red");
      $("#para3").show().css("color", "red");
      $("#para1").hide().css("color", "red");
      $("#para2").hide().css("color", "red");
      console.log("hiiii");
    } else if (pquantity == "") {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#product_quantity").css("border-color", "red");
      $("#para4").show().css("color", "red");
      $("#para3").hide().css("color", "red");
      $("#para1").hide().css("color", "red");
      $("#para2").hide().css("color", "red");
    } else if (!isNaN(pname)) {
      $(".error").show().fadeOut(3000);
      $(".success").hide();
      $("#product_name").css("border-color", "red");
    } else {
      $("#product_sku").css("border-color", "black");
      $("#product_price").css("border-color", "black");
      $("#product_quantity").css("border-color", "black");
      $("#product_name").css("border-color", "black");
      var flag = 0;
      for (let i = 0; i < product.length; i++) {
        if (psku == product[i].sku) {
          flag = 1;
        }
      }
      if (flag == 1) {
        alert("This is duplicate id ");
      } else {
        product.push(product_details);

        insertData(product);
        display();
      }
    }
  });
});

function insertData(product) {
  var psku = document.getElementById("product_sku").value;
  var pname = document.getElementById("product_name").value;
  var pprice = parseInt(document.getElementById("product_price").value);
  var pquantity = parseInt(document.getElementById("product_quantity").value);

  html = "<table>";
  for (var i = 0; i < product.length; i++) {
    html +=
      "<tr><td>" +
      product[i].sku +
      "</td><td>" +
      product[i].name +
      "</td><td>" +
      product[i].price +
      "</td><td>" +
      product[i].quantity +
      '</td><td><a href="#" class="edit"  >Edit </a> <a href="#">Delete</a></td></tr>';
  }
  html += "</table>";
  document.getElementById("product_list").innerHTML = html;
  $(".success").show();
  display();
}

function display() {
  html = "<table>";
  for (var i = 0; i < product.length; i++) {
    html +=
      "<tr><td>" +
      product[i].sku +
      "</td><td>" +
      product[i].name +
      "</td><td>" +
      product[i].price +
      "</td><td>" +
      product[i].quantity +
      '</td><td><a href="#" class="edit" onclick="u_edit(' +
      product[i].sku +
      ')">Edit </a> <a href="#" class="delete"  onclick="productdelete(' +
      product[i].sku +
      ')">Delete</a></td></tr>';
  }
  html += "</table>";
  document.getElementById("product_list").innerHTML = html;
}

function u_edit(x) {
  $("#add_product").hide();
  //$(".edit").click(function(){
  $("#update_product").show();
  $(".success").hide();
  //});

  document.getElementById("product_sku").value = x;

  for (var j = 0; j < product.length; j++) {
    if (product[j].sku == x) {
      $("product_sku").val(product[j].sku);
      $("product_name").val(product[j].name);
      $("product_price").val(product[j].price);
      $("product_quantity").val(product[j].quantity);
      //console.log(pname);
    }
  }
  display();
}

$("#update_product").click(function () {
  $("#update_product").hide();
  $("#add_product").show();
  var psku = document.getElementById("product_sku").value;
  var pname = document.getElementById("product_name").value;
  var pprice = document.getElementById("product_price").value;
  var pquantity = document.getElementById("product_quantity").value;

  if (psku == "") {
    $(".error").show().fadeOut(3000);
    $(".success").hide();
    $("#update_product").show();
    $("#para1").show().css("color", "red");
    $("#add_product").hide();
    return 0;
  } else if (pname == "") {
    $(".error").show().fadeOut(3000);
    $(".success").hide();
    $("#update_product").show();
    $("#add_product").hide();
    $("#para2").show().css("color", "red");
    $("#para1").hide().css("color", "red");
    return 1;
  } else if (pprice == "") {
    $(".error").show().fadeOut(3000);
    $(".success").hide();
    $("#update_product").show();
    $("#add_product").hide();
    $("#para3").show().css("color", "red");
    $("#para1").hide().css("color", "red");
    $("#para2").hide().css("color", "red");
    return 2;
  } else if (pquantity == "") {
    $(".error").show().fadeOut(3000);
    $(".success").hide();
    $("#update_product").show();
    $("#add_product").hide();
    $("#para4").show().css("color", "red");
    $("#para3").hide().css("color", "red");
    $("#para1").hide().css("color", "red");
    $("#para2").hide().css("color", "red");
    return 3;
  } else {
    var val1 = document.getElementById("product_sku").value;
    var val2 = document.getElementById("product_name").value;
    var val3 = document.getElementById("product_price").value;
    var val4 = document.getElementById("product_quantity").value;
    console.log(val2);
    for (var m = 0; m < product.length; m++) {
      if (product[m].sku == val1) {
        console.log(product[m].sku == val1);
        product[m].name = val2;
        product[m].price = val3;
        product[m].quantity = val4;
      }
    }
  }

  display();
});

//function delete()
function productdelete(m) {
  let text;
  if (confirm("sure!you want to delete this entry") == true) {
    for (var i = 0; i < product.length; i++) {
      if (product[i].sku == m) {
        product.splice(i, 1);
      }
    }
    display();
  } else {
    text = "You canceled!";
  }
}
//checking error
