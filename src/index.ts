
const minThreshold = 20;
const maxThreshold = 50;

const isValidLower = (items: number[], current: number, candidate: number): boolean => {
    const satisfiesMin = current - candidate >= minThreshold;
    const satisfiesMax = current - candidate <= maxThreshold;
    return satisfiesMin && satisfiesMax;
}

const isValidHigher = (items: number[], current: number, candidate: number): boolean => {
    const satisfiesMin = candidate - current >= minThreshold;
    const satisfiesMax = candidate - current <= maxThreshold;
    return satisfiesMin && satisfiesMax;
}

const filterCandidates = (items: number[], current: number): number[] => {
    return items.filter(
        candidate =>
            isValidLower(items, current, candidate) ||
            isValidHigher(items, current, candidate)
    );
}

const sample = (items: number[], current: number): number => {
    const candidates = filterCandidates(items, current);
    return candidates[Math.floor(Math.random() * candidates.length)];
}

const generateItems = (min: number, max: number, count: number): number[] => {
    const items = [];
    for (let i = 0; i < count; i++) {
        items.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return items;
}

const items = generateItems(1, 1000, 100)

let currentItem = 50
console.log(currentItem)

for (let i = 0; i < 25; i++) {
    currentItem = sample(items, currentItem)
    console.log(currentItem)
}