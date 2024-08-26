function solution(id_list, report, k) {
    const _report = Array.from(new Set(report));
    const reportInfoMap = new Map();
    const reportedCountMap = new Map();
    
    for (let i = 0; i < _report.length; i++) {
        const [from, to] = _report[i].split(' ');
        if (!reportInfoMap.has(from)) reportInfoMap.set(from, []);
        const prevInfo = reportInfoMap.get(from);
        prevInfo.push(to);
        reportedCountMap.set(to, (reportedCountMap.get(to) || 0) + 1);
    }
    
    return id_list.map((userId) => {
        const targets = reportInfoMap.get(userId);
        return targets?.map((id) => reportedCountMap.get(id)).filter((v) => v >= k).length || 0;
    })
}