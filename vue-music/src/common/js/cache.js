import storage from 'good-storage'

const SEARCH_KEY = '_search_'
const SEARCH_MAX_LEN = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200


const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200
function insertArray(arr, val, compare, maxLen) {  //插入缓存   localstorage
    const index = arr.findIndex(compare)
    if (index === 0) {
        return
    }
    if (index > 0) {
        arr.splice(index, 1)
    }
    arr.unshift(val) //插入第一个元素
    if (maxLen && arr.length > maxLen) {
        arr.pop() //删除最后一个元素
    }
}

function deleteFromArray(arr, compare) { //删除缓存
    const index = arr.findIndex(compare)
    if (index > -1) {
        arr.splice(index, 1)
    }
}

export function saveSearch(query) {
    let searches = storage.get(SEARCH_KEY, [])
    insertArray(searches, query, (item) => {
        return item === query
    }, SEARCH_MAX_LEN)
    storage.set(SEARCH_KEY, searches)
    return searches
}

export function deleteSearch(query) {
    let searches = storage.get(SEARCH_KEY, [])
    deleteFromArray(searches, (item) => {
        return item === query
    })
    storage.set(SEARCH_KEY, searches)
    return searches
}

export function clearSearch() {
    storage.remove(SEARCH_KEY)
    return []
}

export function loadSearch() {// 获取当前搜索历史列表的值
    return storage.get(SEARCH_KEY, [])
}

export function savePlay(song) {//写入缓存
    let songs = storage.get(PLAY_KEY, [])//获取这个数组，如果没有就默认空数组
    insertArray(songs, song, (item) => {
        return song.id === item.id
    }, PLAY_MAX_LEN)
    storage.set(PLAY_KEY, songs)//新数组缓存到本地
    return songs
}

export function loadPlay() {
    return storage.get(PLAY_KEY, [])
}
export function saveFavorite(song) {
    let songs = storage.get(FAVORITE_KEY, [])
    insertArray(songs, song, (item) => {
        return song.id === item.id
    }, FAVORITE_MAX_LEN)
    storage.set(FAVORITE_KEY, songs)
    return songs
}
export function deleteFavorite(song) {
    let songs = storage.get(FAVORITE_KEY, [])
    deleteFromArray(songs, (item) => {
        return item.id === song.id
    })
    storage.set(FAVORITE_KEY, songs)
    return songs
}
export function loadFavorite() {
    return storage.get(FAVORITE_KEY, [])
}