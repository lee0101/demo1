import { playMode } from 'common/js/config'
import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache'
const state = {
    singer: {},
    playing: false, //是否播放
    fullScreen: false,//是否全屏
    playlist: [], //播放列表
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,//当前播放歌曲
    disc: {},
    topList: {},
    searchHistory: loadSearch(),
    playHistory: loadPlay(),
    favoriteList: loadFavorite()

}

export default state