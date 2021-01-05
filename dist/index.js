"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post("/api/v1/user", (req, res) => {
    // tslint:disable-next-line:no-console
    console.log(req.body);
    res.send("User ID");
});
app.post("/api/v1/deal", (req, res) => {
    res.send("Deal Posted");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening on ${port}`);
});
//# sourceMappingURL=index.js.map