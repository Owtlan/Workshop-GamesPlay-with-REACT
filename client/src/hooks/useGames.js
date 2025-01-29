import { useEffect, useState } from "react";
import gamesApi from '../api/games-api';
import gamesAPI from "../api/games-api";

export function useGetAllGames() {
    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getAll()

            setGames(result);
        })();
    }, [])

    return [games, setGames];

}


export function useGetOneGames(gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getOne(gameId);

            setGame(result)
        })();
    }, [gameId]);

    return [
        game,
        setGame,
    ];
}

export function useCreateGame() {
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData)


    return gameCreateHandler;
}

