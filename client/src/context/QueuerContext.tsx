import { Queuer } from '../types/Queuer';
import { createContext } from "react";

const defaultContext: Queuer[] = [];
export const QueuerContext = createContext(defaultContext);

export const fetchQueuers = (): Promise<Queuer[]> => {
    return fetch("http://localhost:8000/queuers").then((res) => res.json());
}