// Adds the .js mime to URLs, so that Rails fires the correct respond_to respons.
var mimeifyUrl = function(url){
	if (/\.js/.test(url)){
		return url
	} else if (/\?/.test(url)) {
		return url.replace('?', '.js?')
	} else {
		return url + '.js'
	}
}

// The default jQuery#load function does not seem to honor the beforeSend in the ajaxSetup above.
$.fn.railsLoad = function(location){
  var self = this;
  $.ajax({
    url: mimeifyUrl(location),
    complete: function(response, status){
      $(self).html(response.responseText);
    }
  });
}

// A function passed to the jQuery function - $(function()) - shorthand for $(document).ready(). Runs it on window.onload (which is the same as <body onload="foo()">)
$(function(){
  
  // All will_paginate entities in the DOM gets ajaxified with livequery (http://ozmm.org/posts/ajax_will_paginate_jq_style.html)
  $('div.pagination a').livequery('click', function() {
    $('#main').railsLoad(this.href);
    return false;
  });
  
  // Ajaxifying the comment entry form. We need dataType: script for jQuery to eval the returned js.
  //$('#new_comment').ajaxForm({dataType: 'script'});
  $('#new_comment').livequery(function(){
    $(this).ajaxForm({dataType: 'script'});
  });
})