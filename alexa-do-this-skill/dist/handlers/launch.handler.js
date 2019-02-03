"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../data/constants");
exports.LaunchHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(constants_1.Constants.WELCOME)
            .withSimpleCard(constants_1.Constants.WELCOME, constants_1.Constants.WELCOME)
            .reprompt(constants_1.Constants.WELCOME)
            .getResponse();
    },
};
//# sourceMappingURL=launch.handler.js.map