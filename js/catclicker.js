
$(document).ready(function() 
	{
		var catclickcount = 0;
        $('#catphoto').click(function() {
            catclickcount = catclickcount + 1;  
            $('#catcount').text(catclickcount);   
        });    
    });