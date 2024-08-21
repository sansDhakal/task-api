# task-api
RESTful API to manage task API

API Endpoints
GET /tasks : Retrieve all tasks.
GET /tasks/:id : Retrieve a specific task by ID.
GET /tasks/status/:status : Retrieve tasks of given status.
POST /tasks: Add a new task with a name, status.
PUT /tasks/:id : Update a specific task by ID.
PATCH /tasks/:id : Patch a specific task by ID.
DELETE /tasks/:id : Delete a specific task by ID.

Implements middleware  handle error and validate input.
Created or updated tasks must have both name and status.
Tasks are stored locally in a JSON file.
Implements search functionality via id and status.

