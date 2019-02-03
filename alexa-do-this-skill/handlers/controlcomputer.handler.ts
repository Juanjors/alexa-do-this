import { RequestHandler } from 'ask-sdk-core';
import { IntentRequest } from 'ask-sdk-model'
import { CallComputerService } from '../services/call-computer.service';
import { Constants } from '../data/constants';

export const ControlComputerHandler: RequestHandler = {
    canHandle(handlerInput) {
        const request = <IntentRequest>handlerInput.requestEnvelope.request;
        console.log(JSON.stringify(request));
        return request.type === "IntentRequest" && (request.intent.name === 'ShutdownIntent' || request.intent.name === 'StopShutdownIntent');
    },
    handle(handlerInput) {
        const url = 'http://78.30.40.3:8080/';
        const request = <IntentRequest>handlerInput.requestEnvelope.request;
        let response: string = '';
        console.log("Se procede a envíar una petición a el ordenador...");

        switch (request.intent.name) {
            case 'ShutdownIntent':
                CallComputerService.callToComputer(`${url}/shutdown`);
                response = Constants.SHUTDOWN;
                break;

            case 'StopShutdownIntent':
                response = Constants.STOP_SHUTDOWN;
                CallComputerService.callToComputer(`${url}/stopshutdown`);
                break;
        }


        return handlerInput.responseBuilder
            .speak(response)
            .withSimpleCard(response, response)
            .getResponse();
    },
};