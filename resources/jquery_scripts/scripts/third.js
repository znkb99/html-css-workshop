$(document).ready(function (){  // do not delete 
// ----------------------------------------------------------------------------



// third version

$("button").click(function() {
	if ($("textarea").val() == "") {
		alert("No comment was written.");
	} else {
		var new_comment = "<p>";
		var comment_text = $("textarea").val();
		new_comment += comment_text;
		new_comment += "</p>";
		$(".comments").append(new_comment);
		$("textarea").val("");
	}
});




// ----------------------------------------------------------------------------
}); // do not delete; this closes (document).ready function 
