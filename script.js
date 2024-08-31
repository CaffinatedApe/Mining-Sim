let resources = 0;
let toolLevel = 1;
let upgradeCost = 10;

const rock = document.getElementById('rock');
const resourcesDisplay = document.getElementById('resources');
const toolLevelDisplay = document.getElementById('toolLevel');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const upgradeBtn = document.getElementById('upgradeBtn');

rock.addEventListener('click', () => {
    resources += toolLevel;
    resourcesDisplay.textContent = resources;
});

upgradeBtn.addEventListener('click', () => {
    if (resources >= upgradeCost) {
        resources -= upgradeCost;
        toolLevel++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        resourcesDisplay.textContent = resources;
        toolLevelDisplay.textContent = toolLevel;
        upgradeCostDisplay.textContent = upgradeCost;
    }
    upgradeBtn.disabled = resources < upgradeCost;
});

setInterval(() => {
    upgradeBtn.disabled = resources < upgradeCost;
}, 100);
