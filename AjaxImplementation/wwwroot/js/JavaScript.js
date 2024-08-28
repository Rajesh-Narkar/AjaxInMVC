/// <reference path="../lib/jquery/dist/jquery.js" />
$(document).ready(function () {

    showProducts();
});

$("#btn").click(function () {
    $("#mymodal").modal('show');
    $("#savebtn").show();
    $("#updbtn").hide();
    clear();
    $("#exampleModalLabel").text("Add Products");
    $("#Pid").hide();
});

$("#close").click(function () {
    $("#mymodal").modal('hide');
});

$("#savebtn").click(function () {
    var obj = $("#myform").serialize();
    $.ajax({
        url: '/Products/AddProduct',
        type: 'Post',
        dataType: 'json',
        contentType: 'Appliction/x-www-form-urlencoded;charset=utf-8;',
        data: obj,
        success: function () {
            alert("Product Added Successfuly");
            showProducts();         
            $("#mymodal").modal('hide');
            clear();
        },
        error: function () {
            alert("Error");
        }
    });
});

function showProducts()
{
    $.ajax({
        url: '/Products/ShowProduct',
        type: 'Get',
        dataType: 'json',
        contentType: 'Application/json;charset=utf-8;',     
        success: function (result,sta,xhr) {
            var obj = '';
            $.each(result, function (index, item) {
                obj += "<tr>";
                obj += "<td>"+item.pid+"</td>";
                obj += "<td>" + item.pname + "</td>";
                obj += "<td>" + item.pcat + "</td>";
                obj += "<td>" + item.price + "</td>";
                obj += "<td><a class='btn btn-sm btn-danger' onclick='RemoveProducts(" + item.pid + ")'>Delete</a>||||<a class='btn btn-sm btn-success' onclick='EditProducts(" + item.pid +")'>Edit</a></td>";
                obj += "</tr>";
            });
            $("#tdata").html(obj);
        },
        error: function () {
            alert("Error");
        }
    });
}

function RemoveProducts(id) {

    if (confirm("Are you sure to delete this Record?")) {
        $.ajax({
            url: '/Products/DeleteProduct?prodid=' + id,

            success: function () {
                alert("Product Deleted Successfully");
                showProducts();
            },
            error: function () {
                alert("Error");
            }
        });
    } else
    {
        alert("No Issues");
    }   
}
function EditProducts(id) {   
        $.ajax({
            url: '/Products/UpdateProduct?prodid=' + id,

            success: function (response) {               
                $("#mymodal").modal('show');
                $("#Pid").val(response.pid);
                $("#Pname").val(response.pname);               
                $("#Pcat").val(response.pcat);
                $("#Price").val(response.price);
                $("#savebtn").hide();
                $("#updbtn").show();
                $("#exampleModalLabel").text("Edit Products");
                $("#Pid").show();
            },
            error: function () {
               
            }
        });
    
}

function clear() {
    $("#Pname").val('');
    $("#Pcat").val('');
    $("#Price").val('');
}
$("#updbtn").click(function () {
    var obj = $("#myform").serialize();
    $.ajax({
        url: '/Products/ModifyProduct',
        type: 'Post',
        dataType: 'json',
        contentType: 'Application/x-www-form-urlencoded;charset=utf-8;',
        data: obj,
        success: function () {
            alert("Product Updated Successfuly");
            showProducts();
            $("#mymodal").modal('hide');
            clear();
        },
        error: function () {
            alert("Error");
        }
    });
});

$("#srchbtn").click(function () {
    var search = $("#srch").val();
    $.ajax({
        url: '/Products/SearchProduct?searchp='+search,
        type: 'Get',
        dataType: 'json',
        contentType: 'Application/json;charset=utf-8;',
        success: function (result, sta, xhr) {
            var obj = '';
            $.each(result, function (index, item) {
                obj += "<tr>";
                obj += "<td>" + item.pid + "</td>";
                obj += "<td>" + item.pname + "</td>";
                obj += "<td>" + item.pcat + "</td>";
                obj += "<td>" + item.price + "</td>";
                obj += "<td><a class='btn btn-sm btn-danger' onclick='RemoveProducts(" + item.pid + ")'>Delete</a>||||<a class='btn btn-sm btn-success' onclick='EditProducts(" + item.pid + ")'>Edit</a></td>";
                obj += "</tr>";
            });
            $("#tdata").html(obj);
        },
        error: function () {
            alert("Error");
        }
    });
})

$("#htlbtn").click(function () {
    
    $.ajax({
        url: '/Products/HTL',
        type: 'Get',
        dataType: 'json',
        contentType: 'Application/json;charset=utf-8;',
        success: function (result, sta, xhr) {
            var obj = '';
            $.each(result, function (index, item) {
                obj += "<tr>";
                obj += "<td>" + item.pid + "</td>";
                obj += "<td>" + item.pname + "</td>";
                obj += "<td>" + item.pcat + "</td>";
                obj += "<td>" + item.price + "</td>";
                obj += "<td><a class='btn btn-sm btn-danger' onclick='RemoveProducts(" + item.pid + ")'>Delete</a>||||<a class='btn btn-sm btn-success' onclick='EditProducts(" + item.pid + ")'>Edit</a></td>";
                obj += "</tr>";
            });
            $("#tdata").html(obj);
        },
        error: function () {
            alert("Error");
        }
    });
})

$("#lthbtn").click(function () {
    
    $.ajax({
        url: '/Products/LTH',
        type: 'Get',
        dataType: 'json',
        contentType: 'Application/json;charset=utf-8;',
        success: function (result, sta, xhr) {
            var obj = '';
            $.each(result, function (index, item) {
                obj += "<tr>";
                obj += "<td>" + item.pid + "</td>";
                obj += "<td>" + item.pname + "</td>";
                obj += "<td>" + item.pcat + "</td>";
                obj += "<td>" + item.price + "</td>";
                obj += "<td><a class='btn btn-sm btn-danger' onclick='RemoveProducts(" + item.pid + ")'>Delete</a>||||<a class='btn btn-sm btn-success' onclick='EditProducts(" + item.pid + ")'>Edit</a></td>";
                obj += "</tr>";
            });
            $("#tdata").html(obj);
        },
        error: function () {
            alert("Error");
        }
    });
})


