//export default + anonymous function
var reps = 0;
var sets = 0;

function incrementSets() {
    sets++;
}

function incrementReps() {
    reps++;
}

function getSets() {
    return sets;
}

function getReps() {
    return reps;
}

function resetSets() {
    sets = 0;
}

function resetReps() {
    reps = 0;
}

function resetAll() {
    sets = 0;
    reps = 0;
}

export { incrementSets, incrementReps, getSets, getReps, resetSets, resetReps, resetAll };