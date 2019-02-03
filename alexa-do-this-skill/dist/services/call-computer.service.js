"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class CallComputerService {
    static callToComputer(url) {
        axios_1.default.post(url).then((Response) => {
        }).catch((Error) => {
        });
    }
}
exports.CallComputerService = CallComputerService;
//# sourceMappingURL=call-computer.service.js.map