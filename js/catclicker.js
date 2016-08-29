
$(document).ready(function() 
	{
		var catclickcount = 0;
        $('.catphoto').click(function() {
            catclickcount = catclickcount + 1;  
            $('#catcount').text(catclickcount);   
        });    

        $("#catname1").text("Yoda cat");
        
        $("#catname2").text("Darth wader")
    });