Views.app = function(){
	var header = {
		type:"header", template:app.config.name
	};

	var menu = {
		view:"menu", id:"app:menu", 
		width:180, layout:"y", select:true,
		template:"<span class='webix_icon fa-#icon#'></span> #value# ",
		data:[
			{ value:"Statistics", 		id:"statistics",
				href:"/app/statistics", 	icon:"envelope-o" },
			{ value:"Seizers", 			id:"seizers",
				href:"/app/seizers", 		icon:"briefcase" },
			{ value:"Logger",		id:"logger",
				href:"/app/logger", 	icon:"cog" }
		]
	};

	var ui_ = {
		type:"line", cols:[
			{ type:"clean", css:"app-left-panel",
				padding:10, margin:20, borderless:true, rows: [ header, menu ]},
			{ rows:[ { height:10}, 
				{ type:"clean", css:"app-right-panel", padding:4, rows:[
					{ $subview:true } 
				]}
			]}
		]
	};

	var ui = {
		view: "tabview",
		cells: [
			{
				header: "Logger",
				body: Views.logger()
			},
			{
				header: "Data",
				body: {}
			},
			{
				header: "Admin",
				body: {}
			}
		]
	};


	return {
		$ui: ui,
		$menu: "app:menu"
	};
};