   
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
*CLONE DIV WITH BUTTON CLICK
* */
function clone_html(to_clone){
    // var button = document.getElementById(btn);
    // var button = this;
    var elementToClone = document.getElementsByClassName(to_clone)[0];

    var newElement = elementToClone.cloneNode(true);
    elementToClone.parentNode.appendChild(newElement);
    console.log(newElement);
// Add the click event listener to the button
// button.addEventListener("click", cloneElement);
let the_inputs = newElement.querySelector('input');
the_inputs.value = "";
}
