"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchHandler = {
    canHandle(handlerInput) {
        return true; //handlerInput.requestEnvelope.request.type === 'IntentRequest'
        //&& handlerInput.requestEnvelope.request.intent.name === 'DoThisIntent'
    },
    handle(handlerInput) {
        const speechText = "¡Hola mundo!";
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(speechText, speechText)
            .getResponse();
    },
};
//# sourceMappingURL=launch.handler.js.map