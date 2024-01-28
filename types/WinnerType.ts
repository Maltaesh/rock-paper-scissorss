import { ResultEnum } from "../enums/ResultEnum.ts";
import { Player } from "./PlayerType.ts";

export type Winner = { type: ResultEnum.Winner } & Omit<Player, "move">;
