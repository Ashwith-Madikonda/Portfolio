import express from "express";
import cors from "cors";
import portfolio from "./routes/portfolio.js";
import SwaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Serve Swagger documentation
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));


//API Routes
app.use("/portfolio", portfolio);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});