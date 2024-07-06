
import swaggerJSDoc from 'swagger-jsdoc';

//const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
openapi: '3.1.6',
info: {
title: 'Portfolio',
version: '1.0',
description: 'Portfolio API',
},
};

const options = {
swaggerDefinition,
apis: ['./routes/portfolio.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;