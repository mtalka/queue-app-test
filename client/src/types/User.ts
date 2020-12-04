import { Queuer } from "./Queuer";

export interface User {
    id: number,
    userName: string,
    mail: string,
    queuers: Queuer[],
    // all auth stuff etc.
}