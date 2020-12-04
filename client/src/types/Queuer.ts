export interface Queuer {
    id: number,
    launchId: number,
    isActiveQueuer: boolean,
    queueJoinDate: Date,
    queueDone: boolean,
}