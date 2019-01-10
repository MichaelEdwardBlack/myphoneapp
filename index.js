/**
 * Created by Michael Black on 1/10/2019 with help from the dev-ops students training
 */

const path = require('path')
const SansServer = require('sans-server')
const SansServerSwagger = require('sans-server-swagger')
const expressTranslator = require('sans-server-express')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/xhealth', function (req, res) {
	res.send('Excellent')
})

const api = SansServer()

api.use(SansServerSwagger({
	controllers: path.resolve(__dirname, './controllers'),
	swagger: path.resolve(__dirname, './swagger.json'),
	development: true,
	ignoreBasePath: false
}))

app.use(expressTranslator(api))

let port = process.env.PORT || 9072
app.listen(port, function () {
	console.log('Beginning myphoneapp server')
	console.log('	[INFO] Server running on port: ' + port)
	console.log('	[INFO] Controller path = ' + path.resolve(__dirname, './controllers'))
	console.log('	[INFO] Swagger path = ' + path.resolve(__dirname, './swagger.json'))
})
