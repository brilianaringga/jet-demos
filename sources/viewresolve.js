import {JetApp, JetView, EmptyRouter } from "webix-jet";

webix.ready(() => {
	const app = new JetApp({
		start:		"/top/start",
		views: {
			"start" : "area.list"
		},
		debug:true
	});


	app.render();
});