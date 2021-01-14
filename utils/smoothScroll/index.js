export default (element, target, duration) => {
    target = Math.round(target)
    duration = Math.round(duration)

    if (duration < 0) {
        return Promise.resolve()
    }
    if (duration === 0) {
        element.scrollLeft = target
        return Promise.resolve()
    }

    const startTime = Date.now()
    const endTime = startTime + duration

    const startLeft = element.scrollLeft
    const distance = target - startLeft

    const smoothStep = function (start, end, point) {
        if (point <= start) { return 0 }
        if (point >= end) { return 1 }
        const x = (point - start) / (end - start)
        return x * x * (3 - 2 * x)
    }

    return new Promise(function (resolve, reject) {
        let previousLeft = element.scrollLeft
        const scrollFrame = () => {
            if (element.scrollLeft !== previousLeft) {
                resolve()
                return
            }
            const now = Date.now()
            const point = smoothStep(startTime, endTime, now)
            const frameLeft = Math.round(startLeft + (distance * point))
            element.scrollLeft = frameLeft

            if (now >= endTime) {
                resolve()
                return
            }

            if (element.scrollLeft === previousLeft &&
                    element.scrollLeft !== frameLeft) {
                resolve()
                return
            }
            previousLeft = element.scrollLeft
            setTimeout(scrollFrame, 0)
        }

        setTimeout(scrollFrame, 0)
    })
}
