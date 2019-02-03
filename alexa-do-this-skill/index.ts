import * as Alexa from 'ask-sdk-core';
import { LaunchHandler } from './handlers/launch.handler';
import { SessionEndedHandler } from './handlers/sessionended.handler';

const skillBuilder: Alexa.BaseSkillBuilder = Alexa.SkillBuilders.custom();

export const handler = skillBuilder.addRequestHandlers(LaunchHandler, SessionEndedHandler).lambda();

    // .addRequestInterceptors(

    // )
    // .addErrorHandlers(ErrorHandlerIntent)