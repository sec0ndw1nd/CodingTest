function solution(phone_number) {
    return Array.from({length: phone_number.length - 4}).map((_) => '*').concat(phone_number.slice(-4)).join('');
}