function solution(wallpaper) {
    const result = Array(4).fill(-1);

    for (let i = 0; i < wallpaper.length; i++) {
        let start = wallpaper[i].indexOf('#');
        if (start < 0) continue;
        
        if (result[0] === -1) result[0] = i;
        result[2] = i + 1;
        let end = wallpaper[i].lastIndexOf('#');
        
        if (result[1] === -1 || (result[1] !== -1 && result[1] > start)) {
            result[1] = start;
        }
        
        if (result[3] === -1 || (result[3] !== -1 && result[3] - 1 < end)) {
            result[3] = end + 1;
        }
    }

    return result;
}