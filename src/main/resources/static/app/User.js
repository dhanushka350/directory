$('#saveUser').click(function (n) {
    console.log("Add User Called");
    USER.addNewUser();
    n.preventDefault();
});
$('#loginButton').click(function (n) {
    USER.UserLogin();
    n.preventDefault();
});
$('#user_status').click(function (n) {
    USER.LoginReset();
    n.preventDefault();
});
// $("#password").keyup(function () {
//     // USER.UserNameCheck();
//     USER.UserLogin();
// });
$("#mobile").keyup(function () {
    USER.UserContactCheck();
});

var admins = 0;
var online = 0;
var branches = 0;
var USER = {
    UserLogin: function () {
        var e = {};
        e["name"] = $('#name').val();
        e["password"] = $('#password').val();

        var d = JSON.stringify(e);
        console.log("HO: " + d);
        $.ajax({
            url: '/api/rest/system_user/login',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                if (data === "wrong entry") {
                    noty(
                        {
                            text: 'wrong user name or password.',
                            layout: 'topRight',
                            type: 'error'
                        }
                    );
                } else if (data === "already in") {
                    noty(
                        {
                            text: "seems like " + $('#name').val() + " is already logged in. \n didn't you log out last time? \n for the security reasons you will not be able to login again \n contact your administrator for more details",
                            layout: 'topRight',
                            type: 'error'
                        }
                    );
                } else if (data === "error") {
                    noty(
                        {
                            text: "seems like server did not receiving your login details.  \n please call the developers.",
                            layout: 'topRight',
                            type: 'error'
                        }
                    );
                } else {
                    $.session.remove("Logged_User");
                    $.session.set("Logged_User", $('#name').val());
                    window.location.replace(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'Login failed! \n status -' + textStatus,
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {
                noty(
                    {
                        text: 'Please wait..',
                        layout: 'topRight',
                        type: 'information'
                    }
                );
            }
        });
    },
    LoginReset: function () {
        var e = {};
        e["name"] = $('#status_mobile').val();

        var d = JSON.stringify(e);
        $.ajax({
            url: '/system/user/api/user/reset/login',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                if (data == true) {
                    noty(
                        {
                            text: 'Successfully updated. \n User will be able to login now.',
                            layout: 'topLeft',
                            type: 'information'
                        }
                    );
                    $('#status_mobile').val("");
                } else {
                    noty(
                        {
                            text: 'Please check mobile number and try again',
                            layout: 'topRight',
                            type: 'error'
                        }
                    );
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'Resetting function not working! \n status -' + errorThrown,
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {
            }
        });
    },
    UserNameCheck: function () {
        var e = {};
        e["name"] = $('#user_name').val();

        var d = JSON.stringify(e);
        $.ajax({
            url: '/system/user/api/user/name/check',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                if (data === "AVAILABLE") {
                    noty(
                        {
                            text: 'This user name already exist.. \n try deference one.',
                            layout: 'topLeft',
                            type: 'warning'
                        }
                    );
                    document.getElementById("saveUser").setAttribute('disabled', 'disabled');
                } else if (data === "OK") {
                    document.getElementById("saveUser").removeAttribute('disabled');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'user name check not working! \n status -' + errorThrown,
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {
            }
        });
    },
    UserContactCheck: function () {
        var e = {};
        e["name"] = $('#mobile').val();

        var d = JSON.stringify(e);
        $.ajax({
            url: '/system/user/api/user/contact/check',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                if (data === "AVAILABLE") {
                    document.getElementById("update_status-update").removeAttribute('hidden');
                } else if (data === "OK") {
                    document.getElementById("update_status-update").setAttribute('hidden', 'hidden');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'user contact check not working! \n status -' + errorThrown,
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {
            }
        });
    },
    addNewUser: function () {
        console.log("okkk Add User called.....");

        var e = {};
        e["name"] = $('#user_name').val();
        e["password"] = $('#password').val();
        e["contact"] = $('#mobile').val();
        e["role"] = $("#role").val();
        e["lastLogin"] = "not logged in yet";
        e["active"] = 0;
        e["store"] = $("#store").val();

        var d = JSON.stringify(e);
        console.log("HO: " + d);
        $.ajax({
            url: 'system/user/admin-api/add/staff/member',
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                $('#user_name').val("");
                $('#password').val("");
                $('#mobile').val("");
                USER.allStores();
                USER.allRoles();
                noty({
                    text: "User " + data.name + " Successfully Added.. User will active when his/her first login attempt. ",
                    layout: 'topRight',
                    type: 'success'
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'User registration failed!\n it seems some unexpected error in server.',
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {

            }
        });
    },
    allRoles: function () {
        $.ajax({
            url: "/system/user/admin-api/get/user/roles",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    noty(
                        {
                            text: 'Please add some user roles!\n can not find any roles in database.',
                            layout: 'topRight',
                            type: 'error'
                        }
                    );
                }
                for (var i = 0; i < data.length; i++) {
                    $('#role').append($('<option>', {
                        value: data[i].id,
                        text: data[i].role
                    }));
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'Error!\n can not load use roles \n refresh page and try again.',
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {

            }
        });
    },
    allStores: function () {
        $.ajax({
            url: "/stores/api/get/user/roles",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    noty(
                        {
                            text: 'Please add some stores first!\n can not find any stores in database.',
                            layout: 'topRight',
                            type: 'error'
                        }
                    );
                }
                for (var i = 0; i < data.length; i++) {
                    $('#store').append($('<option>', {
                        value: data[i].id,
                        text: data[i].storeName
                    }));
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'Error!\n can not load use stores \n refresh page and try again.',
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {

            }
        });
    },
    allUsers: function () {
        $('#tbl_store_user tbody tr td').remove();
        $.ajax({
            url: "/stores/api/get/stores/with/user/count",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    $('#tbl_store_user').append('<tr>\n\
                               <td colspan=9><p align="center">No records found in your database\n\
                               </p></td>\n\
                               </tr>');
                } else {
                    for (var i = 0; i < data.length; i++) {
                        $('#tbl_store_user').append('<tr>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].store + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].userCount + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].email + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].storeType + '</td>\n\
                                    </tr>');

                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'Error!\n can not load store user table. \n try again with refreshing page.',
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {

            }
        });
    },
    allUserlist: function () {

        $('#tbl_user tbody tr td').remove();
        var active = "";
        $.ajax({
            url: "/system/user/admin-api/get/table/data",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    $('#tbl_user').append('<tr>\n\
                               <td colspan=9><p align="center">No records found in your database\n\
                               </p></td>\n\
                               </tr>');
                } else {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].active == 0) {
                            active = "inactive";
                        } else if (data[i].active == 1) {
                            online++;
                            active = "active";
                            if (data[i].role === "ADMIN") {
                                admins++;
                            } else {
                                branches++;
                            }
                        }

                        $('#tbl_user').append('<tr>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].name + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].role + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].store + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + data[i].lastLogin + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: center">' + active + '</td>\n\
                                    </tr>');

                    }
                }
                online = online + " Online";
                admins = admins + " Admins Active";
                branches = branches + " Staff Active";
                $("#online_users").html('<i class="icon-user"></i>' + online);
                $("#online_admins").html('<i class="icon-people"></i>' + admins);
                $("#online_branchs").html('<i class="icon-people"></i>' + branches);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                noty(
                    {
                        text: 'Error!\n can not load store user table. \n try again with refreshing page.',
                        layout: 'topRight',
                        type: 'error'
                    }
                );
            },
            beforeSend: function (xhr) {

            }
        });
    },
}