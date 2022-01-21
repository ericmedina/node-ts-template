import { IGetPingResponse } from '../../interfaces/get-ping/get-ping'

export default class GetPingResponseDomain implements IGetPingResponse {
    running: boolean;
    constructor() {
        this.running = true
    }
}