function solution(sizes) {
    let [minW, minH] = [0, 0];
    sizes.map(([...size]) => {
        const [w, h] = size.sort((a, b) => b - a);
        minW = Math.max(w, minW);
        minH = Math.max(h, minH);
    });
    return minW * minH;
}