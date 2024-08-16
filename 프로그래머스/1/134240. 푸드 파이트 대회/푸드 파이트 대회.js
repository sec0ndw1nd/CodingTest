function solution(food) {
    const foods = food.map((v, i) => (i + '').repeat(Math.floor(v / 2)));
    
    return foods.concat([0], [...foods].reverse()).join('');
}