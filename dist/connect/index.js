"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connecterMethod_1 = require("./connecterMethod");
const goToNextPage_1 = require("./goToNextPage");
const connect = async (page) => {
    while (true) {
        const children = await btnCollector(page);
        await (0, connecterMethod_1.default)(children, page);
        await (0, goToNextPage_1.default)(page);
    }
};
exports.default = connect;
