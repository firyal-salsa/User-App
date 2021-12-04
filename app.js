require("dotenv/config")
const express = require('express');
const server = express();
const PORT = 9000
const morgan = require("morgan")
const mongoose = require('mongoose');
const main = require('./src/main');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
    
server.use(morgan("dev"))
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use(main);

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
			},
		],
	},
	apis: ["./main/*.js"],
};

const specs = swaggerJsDoc(options);

server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
    
mongoose
    .connect('mongodb://27017', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Connection to db`)
            console.log(`Service running on port ${PORT}`)
        })
    })
    .catch(() => {
        console.log("Gagal connection database")
    })
