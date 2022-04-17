"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlModifier_1 = require("./urlModifier");
const makeConnectionsLoop_1 = require("./makeConnectionsLoop");
const connect = async (page, url, connectOptions) => {
    const modified = (0, urlModifier_1.default)(url, connectOptions);
    await page.goto(modified);
    await (0, makeConnectionsLoop_1.default)(page);
};
exports.default = connect;
