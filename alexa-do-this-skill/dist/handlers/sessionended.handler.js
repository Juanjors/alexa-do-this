"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEndedHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request}`);
        return handlerInput.responseBuilder.speak("Adiós!").getResponse();
    },
};
//# sourceMappingURL=sessionended.handler.js.map