'use strict';

module.exports={
	GetAllTodos : GetAllTodos
}

function GetAllTodos(req, res, next){
	res.json([
		{
			todo_id: 0,
			todo: "Get some milk",
			author: "Jose",
			date_created: "2017-04-29 21:54:00",
			due_date: "2017-04-29 22:54:00",
			completed: false
		},
		{
			todo_id: 1,
			todo: "Get some eggs",
			author: "Jose",
			date_created: "2017-04-29 21:54:00",
			due_date: "2017-04-29 22:54:00",
			completed: false
		}
	])
}
