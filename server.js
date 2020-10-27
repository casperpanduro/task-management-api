var express = require('express')
var app = express()
var port = 3000
const routes = require('./routes')

app.use(express.json());
app.use('/api', routes);

app.use((req, res, next) => {
	const err = new Error("Not found");
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	})
});

app.listen(port, () => {
  console.log(`Task management app listening at http://localhost:${port}`)
})