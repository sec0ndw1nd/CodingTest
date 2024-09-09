function solution(video_len, pos, op_start, op_end, commands) {
    let [vLen, current, opStart, opEnd] = [video_len, pos, op_start, op_end].map((v) => {
        const [mm, ss] = v.split(':');
        return mm * 60 + +ss;
    });
    if (current >= opStart && current <= opEnd) current = opEnd;
    
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'prev') {
            current = current - 10 > 0 ? current - 10 : 0;
        }
        else if (commands[i] === 'next') {
            current = current + 10 < vLen ? current + 10 : vLen;
        }
        
        if (current >= opStart && current <= opEnd) current = opEnd;
    }
    
    const mm = ('' + Math.floor(current / 60)).padStart(2, '0');
    const ss = ('' + current % 60).padStart(2, '0');
    return mm + ':' + ss;
}