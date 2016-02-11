Views.logger = function(){

	var logger = {
		cols:[
			{ header:"Logger", body:{
				id:"t1", view:"reactive", template: "logger"}
			}
		]
	};


	return {
		$ui:{
			type:"wide", rows:[ logger]
		}
	};

}