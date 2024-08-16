function solution(strings, n) {
     return [...strings].sort((a, b) => {
         if (a[n].charCodeAt() !== b[n].charCodeAt()) {
             return a[n].charCodeAt() - b[n].charCodeAt();
         }
         
         const minLen = Math.min(a.length, b.length);
         for (let i = 0; i < minLen; i++) {
             if (a[i].charCodeAt() === b[i].charCodeAt()) continue;
             return a[i].charCodeAt() - b[i].charCodeAt();
         }
     });
}