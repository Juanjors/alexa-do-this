import Axios from 'axios';

export class CallComputerService {

    public static callToComputer(url: string) {

        Axios.post(url).then((Response) => {

        }).catch((Error) => {

        });
    }

}