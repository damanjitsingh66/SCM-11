console.log("This is a script file");

const toggleSidebar = () => {
	
	if($(".sidebar").is(":visible")){
		//true
		//band karna hai
		
		$(".sidebar").css("display","none");
		$(".content").css("margin-left","0%")
		
		} else{
			//false
			//show krn hai
			$(".sidebar").css("display","block");
		$(".content").css("margin-left","20%");
		
		
	}
	
	
};