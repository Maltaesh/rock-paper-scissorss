import { assertEquals } from "https://deno.land/std@0.212.0/assert/mod.ts";
import { Game } from "../classes/GameClass.ts";
import { ResultEnum } from "../enums/ResultEnum.ts";
import { MoveEnum } from "../enums/MoveEnum.ts";
import { Player } from "../types/PlayerType.ts";
import { Result } from "../types/ResultType.ts";

type TestData = {
    playerA: Player;
    playerB: Player;
    result: Result;
};

const drawTestData: TestData = {
    playerA: { name: "ATest", move: MoveEnum.Rock },
    playerB: { name: "BTest", move: MoveEnum.Rock },
    result: { type: ResultEnum.Draw },
};
Deno.test(function DrawTest() {
    assertEquals(
        Game.startRound(drawTestData.playerA, drawTestData.playerB).getResult(),
        drawTestData.result
    );
});

const playerAWinTestData: TestData = {
    playerA: { name: "A", move: MoveEnum.Rock },
    playerB: { name: "B", move: MoveEnum.Scissors },
    result: { type: ResultEnum.Winner, name: "A" },
};
Deno.test(function playerAWinTest() {
    assertEquals(
        Game.startRound(
            playerAWinTestData.playerA,
            playerAWinTestData.playerB
        ).getResult(),
        playerAWinTestData.result
    );
});

const playerBWinTestData: TestData = {
    playerA: { name: "A", move: MoveEnum.Paper },
    playerB: { name: "B", move: MoveEnum.Scissors },
    result: { type: ResultEnum.Winner, name: "B" },
};
Deno.test(function playerBWinTest() {
    assertEquals(
        Game.startRound(
            playerBWinTestData.playerA,
            playerBWinTestData.playerB
        ).getResult(),
        playerBWinTestData.result
    );
});
