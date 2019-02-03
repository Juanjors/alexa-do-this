"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Alexa = __importStar(require("ask-sdk-core"));
const launch_handler_1 = require("./handlers/launch.handler");
const sessionended_handler_1 = require("./handlers/sessionended.handler");
const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder.addRequestHandlers(launch_handler_1.LaunchHandler, sessionended_handler_1.SessionEndedHandler).lambda();
// .addRequestInterceptors(
// )
// .addErrorHandlers(ErrorHandlerIntent)
//# sourceMappingURL=index.js.map