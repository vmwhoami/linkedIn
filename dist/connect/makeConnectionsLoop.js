"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btnCollector_1 = require("./btnCollector");
const goToNextPage_1 = require("./goToNextPage");
const makeConnectionsLoop = async (page) => {
    while (true) {
        let loopResult = await (0, btnCollector_1.default)(page);
        return loopResult ? await (0, goToNextPage_1.default)(page, loopResult) : null;
    }
};
exports.default = makeConnectionsLoop;
