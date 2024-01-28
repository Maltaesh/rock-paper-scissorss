## Rock, Paper, Scissors Game

This repository was created to explore the functionality of the [ts-pattern](https://github.com/gvergnaud/ts-pattern) library . It consists of the following directories:

1. **classes**: Contains the `Game` class responsible for the "Rock, Paper, Scissors" game engine.
2. **enums**: Contains enums storing values responsible for moves available in the game (`MoveEnum`) and the game result (`ResultEnum`).
3. **types**: Stores TypeScript types necessary for correctly typing the game process, such as `PlayerType`, `ResultType`, `DrawType`, `WinnerType`.
4. **tests**: Contains a set of tests to verify the correctness of the game logic.

The runtime environment used is Deno (v1.39.4). To run the tests, use the command `deno test`.

### Installation and Usage

1. Clone this repository to your local machine ([Deno](https://docs.deno.com/runtime/manual) 1.39.4 is needed).
2. Navigate to the root directory of the repository.
3. Run `deno test` command to execute the tests and verify the functionality of the "Rock, Paper, Scissors" game.
