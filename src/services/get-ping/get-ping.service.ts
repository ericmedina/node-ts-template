import GetPingResponseDomain from '../../domains/get-ping/get-ping-response.domain'
import { IGetPingResponse } from '../../interfaces/get-ping/get-ping'

export class GetPingService {
    static execute(): IGetPingResponse {
        return new GetPingResponseDomain()
    }
}