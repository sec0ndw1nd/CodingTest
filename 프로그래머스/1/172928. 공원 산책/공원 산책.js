function solution(park, routes) {
    const ePos = {x: null, y: null};
    for (let i = 0; i < park.length; i++) {
        const si = park[i].indexOf('S');
        if (si > -1) {
            ePos.x = si;
            ePos.y = i;
            break;
        }
    }
    
    for (let i = 0; i < routes.length; i++) {
        const [dir, dist] = routes[i].split(' ');
        let isContinue = false;
        if (dir === 'E') {
            if (!park[ePos.y]?.[ePos.x + +dist]) continue;
            for (let x = 1; x <= +dist; x++) {
                if (park[ePos.y][ePos.x + x] === 'X') {
                    isContinue = true;
                    break;
                };
            }
            if (!isContinue) ePos.x += +dist;            
        } else if (dir === 'W') {
            if (!park[ePos.y]?.[ePos.x + -dist]) continue;
            for (let x = 1; x <= +dist; x++) {
                if (park[ePos.y][ePos.x - x] === 'X') {
                    isContinue = true;
                    break;
                }
            }
            if (!isContinue) ePos.x += -dist;
        } else if (dir === 'S') {
            if (!park[ePos.y + +dist]?.[ePos.x]) continue;
            for (let y = 1; y <= +dist; y++) {
                if (park[ePos.y + y]?.[ePos.x] === 'X') {
                    isContinue = true;
                    break;
                }
            }
            if (!isContinue) ePos.y += +dist;
        } else if (dir === 'N') {
            if (!park[ePos.y + -dist]?.[ePos.x]) continue;
            for (let y = 1; y <= +dist; y++) {
                if (park[ePos.y - y]?.[ePos.x] === 'X') {
                    isContinue = true;
                    break;
                }
            }
            if (!isContinue) ePos.y += -dist;
        }
    }

    return [ePos.y, ePos.x];
}