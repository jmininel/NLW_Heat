import { Request, Response} from "express";
import { CreateMessageService } from "../service/CreateMessageService";
import { GetLast3MessagesService } from "../service/GetLast3MessagesService";



class Get3LastMessagesController {
     async handle(request: Request , response: Response) {
       const service = new GetLast3MessagesService();

       const result = await service.execute();

       return response.json(result);
            
      }
    }

export { Get3LastMessagesController }