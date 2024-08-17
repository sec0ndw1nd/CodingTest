function solution(name, yearning, photo) {
    const hash = {};
    for (let i = 0; i < name.length; i++) {
        hash[name[i]] = yearning[i];
    }
    return photo.map((names) => {
        return names.reduce((acc, curr) => acc += hash[curr] || 0, 0);
    })
}