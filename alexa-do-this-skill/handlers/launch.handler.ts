
import { RequestHandler } from "ask-sdk-core";
import { Constants } from "../data/constants";

export const LaunchHandler: RequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {

        return handlerInput.responseBuilder
            .speak(Constants.WELCOME)
            .withSimpleCard(Constants.WELCOME, Constants.WELCOME)
            .reprompt(Constants.WELCOME)
            .getResponse();
    },
};