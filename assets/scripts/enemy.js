function generateNewEnemy() {
    enemy = {}
    generateNewEnemy(enemy)
    return enemy;
}

function generateNewName(enemy) {
    let firstName = "Newgeant";
    let title = "the Newcomer";
    enemy.name = firstName + title;
}

function setEnemyHealth(enemy, health) {
    enemy.health = health;
}

function damageEnemy(enemy, damage) {
    enemy.health -= damage;
}