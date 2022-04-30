"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btnCollector_1 = require("./btnCollector");
const goToNextPage_1 = require("./goToNextPage");
const makeConnectionsLoop = async (page) => {
    while (true) {
        await (0, btnCollector_1.default)(page);
        await (0, goToNextPage_1.default)(page);
    }
};
exports.default = makeConnectionsLoop;
