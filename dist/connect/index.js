"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btnCollector_1 = require("./btnCollector");
const connecterMethod_1 = require("./connecterMethod");
const goToNextPage_1 = require("./goToNextPage");
const connect = async (page) => {
    while (true) {
        const children = await (0, btnCollector_1.default)(page);
        await (0, connecterMethod_1.default)(children, page);
        await (0, goToNextPage_1.default)(page);
    }
};
exports.default = connect;
