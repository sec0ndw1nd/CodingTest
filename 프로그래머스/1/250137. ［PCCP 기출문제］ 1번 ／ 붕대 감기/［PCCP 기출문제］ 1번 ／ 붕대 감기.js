function solution(bandage, health, attacks) {
    const [t, heal, bonusHeal] = bandage;
    let currentHP = health;
    let currentIndex = 0;
    
    for (let i = 0; i < attacks.length; i++) {
        const [attackIndex, damage] = attacks[i];
        // 시전 성공 횟수
        const successCount = Math.floor((attackIndex-1 - currentIndex) / t);
        // 시전 성공 후 나머지 성공 횟수
        const restCount = (attackIndex-1 - currentIndex) % t;
        // 공격받기 전까지 회복됨
        currentHP += successCount * (t * heal + bonusHeal);
        currentHP += restCount * heal;
        // 최대체력 설정
        if (currentHP > health) currentHP = health;
        
        // 공격받음
        if (currentHP - damage <= 0) return -1;
        currentHP -= damage;
        
        // currentIndex 재설정
        currentIndex = attackIndex;
    }
    return currentHP;
}