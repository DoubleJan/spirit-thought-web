import { Method } from "axios";

import monitor from './monitor';

export declare interface NetWorkError {
  api: string
  method: Method
  error: Error
}

export default monitor;
