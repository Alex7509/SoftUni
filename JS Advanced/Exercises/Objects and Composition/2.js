function solve(workerInfo) {

    if (workerInfo.dizziness === true) {
        workerInfo.levelOfHydrated = workerInfo.weight * workerInfo.experience * 0.1;
        workerInfo.dizziness = false;
    }
    return workerInfo;
}
solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})