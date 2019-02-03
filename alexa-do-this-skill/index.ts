import * as Alexa from 'ask-sdk-core';
import { LaunchHandler } from './handlers/launch.handler';
import { SessionEndedHandler } from './handlers/sessionended.handler';
import { ControlComputerHandler } from './handlers/controlcomputer.handler';


const skillBuilder: Alexa.BaseSkillBuilder = Alexa.SkillBuilders.custom();

export const handler = skillBuilder.addRequestHandlers(LaunchHandler, SessionEndedHandler, ControlComputerHandler).lambda();

    // .addRequestInterceptors(

    // )
    // .addErrorHandlers(ErrorHandlerIntent)