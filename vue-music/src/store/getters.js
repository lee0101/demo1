export const singer = state => state.singer   //歌曲

export const playing = state => state.playing  //是否播放

export const fullScreen = state => state.fullScreen  //是否全屏

export const playlist = state => state.playlist  //播放歌曲列表

export const sequenceList = state => state.sequenceList  //随机  顺序 播放

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex   //播放的第几个

export const currentSong = (state) => {    //播放的第几个歌曲
    return state.playlist[state.currentIndex] || {}
}
export const disc = state => state.disc

export const topList = state => state.topList//排行 歌曲详情页

export const searchHistory = state => state.searchHistory //搜索历史

export const playHistory = state => state.playHistory //播放历史

export const favoriteList = state => state.favoriteList//我最喜欢的

