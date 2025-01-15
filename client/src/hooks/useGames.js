import { useEffect, useState } from "react";
import gamesApi from '../api/games-api';

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