Views.statistics = function(){

	var pie = Views["statistics.pie"]();
	var histogram = Views["statistics.histogram"]();

	return {
		$ui: {
			type:"space", rows:[
				pie,
				histogram
			]
		}
	};
};