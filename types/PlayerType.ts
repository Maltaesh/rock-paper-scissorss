import { MoveEnum } from "../enums/MoveEnum.ts";

export type Player = {
    name: Capitalize<string>;
    move: MoveEnum;
};
