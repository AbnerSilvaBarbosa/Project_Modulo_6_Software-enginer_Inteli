import express from "express"

import Log4js from "log4js"

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import userRouter from "./routes/user.js";
import { resetSeason } from "./scripts/resetSeason.js";
import { health } from "./modules/health/health.js"

import { user } from "./modules/user/user.js"


const app = express()

//configuring logger
Log4js.configure({
  appenders: {
    multi: {
      type: "multiFile",
      base: "logs/",
      property: "categoryName",
      extension: ".log",
    },
  },
  categories: {
    default: { appenders: ["multi"], level: "debug" },
  },
});

const logger = Log4js.getLogger("server");
logger.info("Starting server");

app.use(express.json())

app.use('/health', health.loadRoutes)

app.use('/user', user.loadRoutes)

setInterval(() => { resetSeason() }, 10000);

const options = {
  swaggerDefinition: {
    info: {
      title: "API",
      description: "API information",
      constact: {
        name: "TINAM APP developers",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },

    servers: ["http://localhost:3000"],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/v1/user", userRouter);

app.listen(3000, () => {
  console.log("Running on http://localhost:3000")
})

export default app