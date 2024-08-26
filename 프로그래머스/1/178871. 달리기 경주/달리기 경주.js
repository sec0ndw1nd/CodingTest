function solution(players, callings) {
    const hash = {};
    const _players = [...players];
    _players.forEach((p, i) => hash[p] = i);
    
    for (let i = 0; i < callings.length; i++) {
        const iCalledPlayer = hash[callings[i]];
        const frontPlayer = _players[iCalledPlayer - 1];
        const iFrontPlayer = hash[frontPlayer];
        [_players[iCalledPlayer - 1], _players[iCalledPlayer]] 
            = [_players[iCalledPlayer], _players[iCalledPlayer - 1]];
        [hash[callings[i]], hash[frontPlayer]] = [hash[frontPlayer], hash[callings[i]]];
    }
    
    return _players;
}