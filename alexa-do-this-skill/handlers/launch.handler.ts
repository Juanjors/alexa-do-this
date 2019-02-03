
import { RequestHandler } from "ask-sdk-core";

export const LaunchHandler: RequestHandler = {
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