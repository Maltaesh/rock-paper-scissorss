import { match } from "ts-pattern";
import { MoveEnum } from "../enums/MoveEnum.ts";
import { ResultEnum } from "../enums/ResultEnum.ts";
import { Player } from "../types/PlayerType.ts";
import { Result } from "../types/ResultType.ts";

export class Game {
    private constructor(private playerA: Player, private playerB: Player) {}

    public static startRound = (playerA: Player, playerB: Player) =>
        new Game(playerA, playerB);

    public static formatResults = (results: Result) =>
        match(results)
            .with(
                { type: ResultEnum.Winner },
                (winner) => `The winner is ${winner.name}`
            )
            .otherwise(() => "It's a draw");

    public getPlayers = () => `${this.playerA.name} vs ${this.playerB.name}`;

    public getResult = () =>
        match(this.resolveRound())
            .returnType<Result>()
            .with({ type: ResultEnum.Winner }, (winner) => winner)
            .with({ type: ResultEnum.Draw }, (looser) => looser)
            .exhaustive(); // can be replaced with .otherwise((looser) => looser), so .exhaustive() won't be needed;

    private resolveRound = () =>
        match([this.playerA.move, this.playerB.move])
            .returnType<Result>()
            .with(
                [MoveEnum.Rock, MoveEnum.Scissors],
                [MoveEnum.Paper, MoveEnum.Rock],
                [MoveEnum.Scissors, MoveEnum.Paper],
                () => ({
                    type: ResultEnum.Winner,
                    name: this.playerA.name,
                })
            )
            .with(
                [MoveEnum.Rock, MoveEnum.Paper],
                [MoveEnum.Paper, MoveEnum.Scissors],
                [MoveEnum.Scissors, MoveEnum.Rock],
                () => ({
                    type: ResultEnum.Winner,
                    name: this.playerB.name,
                })
            )
            .with(
                [MoveEnum.Rock, MoveEnum.Rock],
                [MoveEnum.Paper, MoveEnum.Paper],
                [MoveEnum.Scissors, MoveEnum.Scissors],
                () => ({
                    type: ResultEnum.Draw,
                })
            )
            .exhaustive(); // can be replaced with .otherwise(() => "Draw"), so .exhaustive() won't be needed;
}
