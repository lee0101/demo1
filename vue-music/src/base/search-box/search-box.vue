<template>
    <div class="search-box">
        <i class="icon-search"></i>
        <input ref="query" v-model="query" class="box" :placeholder="placeholder" />
        <i @click="clear" v-show="query" class="icon-dismiss"></i>
    </div>
</template>
<script type="text/ecmascript-6">
import { debounce } from 'common/js/util'
export default {
    props: {
        placeholder: {
            type: String,
            default: '搜索歌曲、歌手'
        }
    },
    data() {
        return {
            query: ''
        }
    },
    methods: {
        clear() {
            this.query = ''
        },
        setQuery(query) {
            this.query = query
        },
        blur() { //手机状态下  滑动搜索结果    去掉搜索框的blur 效果  这样键盘不会显示
            this.$refs.query.blur()
        }
    },
    created() { // 多次 不停搜素，取一个延时效果这样可以提高效率  
        this.$watch('query', debounce((newQuery) => {
            this.$emit('query', newQuery) //一旦搜索框的  搜索query 变化会对外派发一个事件
        }, 200))
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    background: $color-highlight-background
    border-radius: 6px
    .icon-search
      font-size: 24px
      color: $color-background
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-highlight-background
      color: $color-text
      font-size: $font-size-medium
      outline: 0
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-background
</style>