
var selectClass = {

	el: {
		iconResults: 'iconResults',
		select: 'select',
		iconMath: '<i class="fa fa-calculator" aria-hidden="true"></i>',
		iconScience: '<i class="fa fa-flask" aria-hidden="true"></i>'
	},

	init: function() {
		selectClass.modifyIcon();
	},

	modifyIcon: function() {

		$(selectClass.el.select).change(function() {
	    	
	    	var clickItem = $(this)
	                    	.find('option:selected')
	                     	.parent()
	                    	.attr("id");
	    
	       if (clickItem == "math") {
	       		$(this).prev('.'+selectClass.el.iconResults).remove();
		   		$('<span />')
		   			.attr('class', selectClass.el.iconResults)
		   			.append(selectClass.el.iconMath)
		   			.insertBefore(this)
		   			.parent();
		    }
		    if (clickItem == "science") {
		       	$(this).prev('.'+selectClass.el.iconResults).remove();
		       	$('<span  />')
		       		.attr('class', selectClass.el.iconResults)
		   			.append(selectClass.el.iconScience)
		   			.insertBefore(this)
		   			.parent();
		    }
    	});	
	}
}

selectClass.init();