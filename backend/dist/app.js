"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./util/middleware");
const app = express_1.default();
middleware_1.setUpMiddleware(app);
app.route('/')
    .get(function rootGetHandler(req, res) {
    res.status(200).send('API is running!');
});
exports.default = app;
//# sourceMappingURL=app.js.map