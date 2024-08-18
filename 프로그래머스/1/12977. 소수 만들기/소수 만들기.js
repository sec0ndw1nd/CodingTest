function solution(nums) {
    let result = 0;
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j < nums.length-1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                const sqrtSum = Math.floor(Math.sqrt(sum));
                let len = 0;
                let isSosu = true;
                for (let z = 2; z <= sqrtSum; z++) {
                    if (!(sum % z)) {
                        isSosu = false;
                        break;
                    }
                }
                if (isSosu) result++;
            }
        }
    }
    return result;
}