   
/**************************************
 * Universal Functions 
 **************************************/
 function isValidEmail(email) {
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return EmailRegex.test(email);
} 

 $('.alpha_only, .alpha').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-z]/g,'') ); }
);
$('.alpha_space_only, .alpha_space').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-z ]/g,'') ); }
 );
 $('.alpha_space_dash_only, .alpha-space').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-z -]/g,'') ); }
 );
$('.numeric_only, .numeric, .numbers_only').bind('keyup blur',function(){ 
   var node = $(this);
   node.val(node.val().replace(/[^0-9]/g,'') ); }
);
$('.alpha_numeric_only, .alpha_numeric').bind('keyup blur',function(){ 
   var node = $(this);
   node.val(node.val().replace(/[^a-z0-9]/g,'') ); }
);
$('.alpha_numeric_dash, .no_special_chars').bind('keyup blur',function(){ 
   var node = $(this);
   node.val(node.val().replace(/[^a-z0-9 -]/g,'') ); }
);

/**
SCOLL TO MIDDLE(Insted of all the way to top)
**/
function scroll_middle(id){
  document.getElementById(id).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  }); 
}


    

/* *
*JAVASCRIPT: CLONE DIV WITH BUTTON CLICK
* */
function clone_html(to_clone){// ADD THIS TO BUTTON NOCLICK
    // var button = document.getElementById(btn);
    // var button = this;
    var elementToClone = document.getElementsByClassName(to_clone)[0];

    var newElement = elementToClone.cloneNode(true);
    elementToClone.parentNode.appendChild(newElement);
    console.log('cloned');
// Add the click event listener to the button
// button.addEventListener("click", cloneElement);
let the_inputs = newElement.querySelector('input');
the_inputs.value = "";
}

 


/***
 * CHECK EMAIL IS VALID
 * **/
function ValidateEmail(input,response_div) {

    var validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!input.value.match(validRegex)) {
        // alert("Invalid email address!");
        this.focus();
        jQuery(response_div).html("Invalid Email. Please provide a valid email address.");
        //jQuery(submit).attr("disabled", true);
        return false;
    } else {
        jQuery('#email_response').html("");
        //jQuery(submit).removeAttr('disabled');
    }

}



/***
 * CHECK CURRENT PAGE IS
 * **/
function current_page_is(the_page) {
    var currentURL = window.location.href;
    console.log('current URL is: '+currentURL);
    if(the_page == currentURL){
        return true;
    }else{
        return false;
    }
}




/* * * ====================================================================================================
 * * * * JQUERY
 * * ======================================================================================================*/



(function($) {
    $(document).ready(function() {
       
/***
 * AJAX FUNCTION FOR ONE RESPONSE
 * **/
function _AJAX_function_1(target, admin_ajax_url, action, type, data, data_type) {
    //let admin_ajax_url = siteAjax();
    // console.log(new Date());
    jQuery.ajax({
        url: admin_ajax_url + '?action=' + action,
        type: type,
        dataType: data_type,
        data: data,
        beforeSend: function(xhr) {
            $(target).html('<div> Loading, Please wait...! </div>');
            $(target).find('div').attr('id', 'loader').show();
        },
    }).done(function(response) { 
            $(target).html(response.result);
        // console.log(new Date());
        // loader.hide();
    }); //ajax done
}

/***
 * AJAX FUNCTION FOR TWO RESPONSES
 * **/
function _AJAX_function_2(target_1,target_2,admin_ajax_url, action, type, data, data_type) {
    //let admin_ajax_url = siteAjax();
    // console.log(new Date());
    jQuery.ajax({
        url: admin_ajax_url + '?action=' + action,
        type: type,
        dataType: data_type,
        data: data,
        beforeSend: function(xhr) {
            $(target_1).html('<div> Loading, Please wait...! </div>');
            $(target_1).find('div').attr('id', 'loader').show();
            $(target_2).html('<div> Loading, Please wait...! </div>');
            $(target_2).find('div').attr('id', 'loader').show();
        },
    }).done(function(response) { 
        $(target_1).html(response.result_1);
        $(target_2).html(response.result_2);
        // console.log(new Date());
        // loader.hide();
    }); //ajax done
}

/***
 * AJAX FUNCTION FOR THREE RESPONSES
 * **/
function _AJAX_function_3(target_1,target_2,target_3,admin_ajax_url, action, type, data, data_type) {
    //let admin_ajax_url = siteAjax();
    // console.log(new Date());
    jQuery.ajax({
        url: admin_ajax_url + '?action=' + action,
        type: type,
        dataType: data_type,
        data: data,
        beforeSend: function(xhr) {
            $(target_1).html('<div> Loading, Please wait...! </div>');
            $(target_1).find('div').attr('id', 'loader').show();
            $(target_2).html('<div> Loading, Please wait...! </div>');
            $(target_2).find('div').attr('id', 'loader').show();
            $(target_3).html('<div> Loading, Please wait...! </div>');
            $(target_3).find('div').attr('id', 'loader').show();
        },
    }).done(function(response) { 
        $(target_1).html(response.result_1);
        $(target_2).html(response.result_2);
        $(target_3).html(response.result_3);
        // console.log(new Date());
        // loader.hide();
    }); //ajax done
}
 
/* *
* SELF PROVOKING CLONE/REMOVE DIV WITH BUTTON CLICK
* */
        (function clone_and_remove() {           
            console.log('HELP:: parent: .clone_remove_this, add_remove: .clone_trigger, .remove_trigger');
            $(document).on('click', '.clone_trigger', function() {
                let its_parent = $(this).closest('.clone_remove_this');
                its_parent.clone().insertAfter(its_parent).find("input[type=text], textarea").val("");
            });

            $(document).on('click', '.remove_trigger', function() {
                let its_parent = $(this).closest('.clone_remove_this');
                if ($('.clone_remove_this').length > 1) {
                    its_parent.remove();
                }
            });
         })();
       
       
       
    });
})(jQuery);




/***|FOR BOOTSTRAP 5 APPLY CLASS 'active' to current menu item|***/
document.addEventListener('DOMContentLoaded', function() {
  var currentItem = document.querySelector('li.current-menu-item');
  currentItem.classList.add('active');
});
