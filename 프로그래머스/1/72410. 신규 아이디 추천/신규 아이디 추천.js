function solution(new_id) {
    const step1To6 = new_id
        .toLowerCase()
        .replace(/[^\w\-\.]/g, '')
        .replace(/(\.+)/g, '.')
        .replace(/^\.|\.$/, '')
        .replace(/^$/, 'a')
        .replace(/^(.{0,14})([^\.]).*/, '$1$2');
    return step1To6.length > 2 ? step1To6 : step1To6.padEnd(3, step1To6.at(-1))
}