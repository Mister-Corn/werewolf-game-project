import winston from "winston";
import { Logger } from "winston";
import { ENVIRONMENT } from "./secrets";

// `Logger only refers to a type but is being used as a value here.`
// Not sure how to fix this, so for now I will disable type checking for this.
// Suspect there's a missing lib file?
declare const Logger: any;

const logger = new (Logger/*type error being thrown here*/)({
    transports: [
        new (winston.transports.Console)({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
        new (winston.transports.File)({ filename: "debug.log", level: "debug"})
    ]
});

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;

