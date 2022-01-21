import { IGetPingResponse } from "../interfaces/get-ping/get-ping";
import { GetPingService } from "../services/get-ping/get-ping.service";

export default class GetPingAction {
    static invoke(): IGetPingResponse {
        return GetPingService.execute()
    }
}