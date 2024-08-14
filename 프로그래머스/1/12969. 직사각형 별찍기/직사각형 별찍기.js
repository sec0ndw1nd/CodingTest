process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [len, cnt] = data.split(" ");
    for (let i = 0; i < cnt; i++) {
        console.log('*'.repeat(len));
    }
});