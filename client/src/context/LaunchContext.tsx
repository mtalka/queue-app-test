import { Launch } from './../types/Launch';
import { createContext } from "react";

const defaultContext: Launch = {} as unknown as Launch;
export const LaunchContext = createContext(defaultContext);

export const fetchLaunch = (): Promise<Launch> => {
    return fetch("http://localhost:8000/launches/1").then((res) => res.json());
}