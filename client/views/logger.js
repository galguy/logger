Views.logger = function(){

	var seizerForm = [
		{ view:"radio", id:"duration", label:"Duration",value: 1, options:
			[
				{ value: "short", id: 1},
				{ value: "long", id: 2}
			]
		},
		{ view:"radio", id:"context", label:"Context", value: 1, options:
			[
				{ value: "not-lost", id: 1},
				{ value: "lost", id: 2}
			]
		},
		{
			view:"text",  value:'', id: "comment", label:"Comment" , width: window.innerWidth * 0.85},
		{
			view: "button", value: "Submit", width: window.innerWidth * 0.1, align: "center",
			click: function () {



				// Get value from form element
				var duration = $$("duration").getValue();
				var context = $$("context").getValue();
				var comment = $$("comment").getValue();
				var date = moment(new Date()).format('DD/MM/YY HH:mm:ss');

				// Insert a task into the collection
				Seizers.insert({
					duration: duration,
					context: context,
					comment: comment,
					createdAt:  date// current time
				});
				// Clear form
				$$("duration").setValue(1);
				$$("context").setValue(1);
				$$("comment").setValue("");
			}
		}
	];

	var loggerConfig = {
		rows:[
			{ view:"form", id: "seizerForm", scroll:false, width: window.innerWidth * 0.85, height: window.innerHeight * 0.91, elements: seizerForm }
		]
	};

	var logger = {
		cols: [
			loggerConfig
		]
	};


	return {
		$ui:{
			type:"wide", rows:[ logger]
		}
	};

}