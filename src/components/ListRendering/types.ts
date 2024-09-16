export type toDo = { id: number; text: string };

export type addToDoFunc = (text: string) => void;
export type removeToDoFunc = (toDo: toDo) => void;
export type generateIdFunc = () => number;
