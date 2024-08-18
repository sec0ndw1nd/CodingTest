function solution(nums) {
    const pickLen = nums.length / 2;
    const filtered = Array.from(new Set(nums));
    if (filtered.length <= pickLen) return filtered.length;
    return pickLen;
}