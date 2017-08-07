function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export function shuffle(arr) {
    //混编一个数组（随机播放）
    let _arr = arr.slice() //切割拷贝
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

export function debounce(func, delay) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}