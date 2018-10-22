"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const jsonParser = express_1.default.json;
exports.setUpMiddleware = function establishGlobalMiddlewareQueue(app) {
    app.use(cors_1.default());
    app.use(helmet_1.default());
    app.use(jsonParser());
    app.use(morgan_1.default('dev'));
};
//# sourceMappingURL=middleware.js.map