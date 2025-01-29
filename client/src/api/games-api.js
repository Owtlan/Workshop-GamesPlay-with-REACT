import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    console.log(result);
    const games = Object.values(result);


    return games;
}


export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)

export const create = (gameData) => request.post(`${BASE_URL}`, gameData);

export const remove = (gameId) => request.del(`${BASE_URL}/${gameId}`);

const gamesAPI = {
    getAll,
    getOne,
    create,
    remove,
}

export default gamesAPI;