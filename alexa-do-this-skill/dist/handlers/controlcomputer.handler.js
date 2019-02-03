"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_computer_service_1 = require("../services/call-computer.service");
const constants_1 = require("../data/constants");
exports.ControlComputerHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        console.log(JSON.stringify(request));
        return request.type === "IntentRequest" && (request.intent.name === 'ShutdownIntent' || request.intent.name === 'StopShutdownIntent');
    },
    handle(handlerInput) {
        const url = 'http://78.30.40.3:8080/';
        const request = handlerInput.requestEnvelope.request;
        let response = '';
        console.log("Se procede a envíar una petición a el ordenador...");
        switch (request.intent.name) {
            case 'ShutdownIntent':
                call_computer_service_1.CallComputerService.callToComputer(`${url}/shutdown`);
                response = constants_1.Constants.SHUTDOWN;
                break;
            case 'StopShutdownIntent':
                response = constants_1.Constants.STOP_SHUTDOWN;
                call_computer_service_1.CallComputerService.callToComputer(`${url}/stopshutdown`);
                break;
        }
        return handlerInput.responseBuilder
            .speak(response)
            .withSimpleCard(response, response)
            .getResponse();
    },
};
//# sourceMappingURL=controlcomputer.handler.js.map