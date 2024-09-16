export type addToDoFunc = (text: string) => void;
export type removeToDoFunc<T> = (toDo: T) => void;
export type generateIdFunc = () => number;
