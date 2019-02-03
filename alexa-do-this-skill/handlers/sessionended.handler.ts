
import { RequestHandler } from "ask-sdk-core";

export const SessionEndedHandler: RequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';

    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request}`);

        return handlerInput.responseBuilder.speak("Adiós!").getResponse();
    },
};