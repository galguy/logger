Views.seizers = function(){
	var proxy = webix.proxy("meteor", Seizers);

	//datatable
	var table = {
		view:"datatable",
		id:"dtable", select:true, multiselect:true,
		editable:true, editaction:"dblclick",
		columns:[{
			id:"createdAt", editor:"text", fillspace:1
		},{
			id:"duration", editor:"text", fillspace:1
		},{
			id:"context", editor:"text", fillspace:1
		},{
			id:"comment", editor:"text", fillspace:1
		}],
		url: 	proxy,
		save:   proxy
	};

	var toolbar = {
		view:"toolbar",
		elements:[
			{ view:"label", label:"Dbl-Click to edit any row"},
			{ view:"button", value:"Add", width:100, click:function(){
				var row = $$("dtable").add({ name:"", author:"" });
				$$("dtable").editCell(row, "name")
			}},
			{ view:"button", value:"Remove", width:100, click:function(){
				var id = $$("dtable").getSelectedId();
				if (id)
					$$("dtable").remove(id);
				else
					webix.message("Please select any row first");
			}}
		]
	};

	return {
		rows:[toolbar, table]
	};

}