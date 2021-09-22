# Provide/Inject

`props` 可以将数据从父组件传递给子组件，子组件也可以继续把数据传递给它的子组件，但这会导致组件彼此关联，每个组件也会包含重复的代码。

考虑如下的组件树：

```
music-player - 音乐播放器
  music-list - 播放列表
    music-item - 歌曲信息及状态
      item-index - 序号
      play-status - 播放状态
      liked-status - 收藏状态
      ...
    music-item
    ...
  music-info - 正在播放的音乐信息
  music-lyrics - 歌词
  player-control - 播放器控制
```

如果要将正在播放和已收藏的歌曲信息在多个组件之间共享，将会需要在一层层组件间传递许多数据。

Vue 提供了 Provide/Inject 功能，用于向组件树内的其他节点共享数据：

music-player.vue:

```vue
<template>
  <div class="music-player">
    <music-list />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      musicList: this.list,
      current: this.current,
      play: this.play,
      toggleLiked: this.toggleLiked,
    };
  },
  data() {
    return {
      list: [],
      current: 0,
    };
  },
  computed: {
    nowPlaying() {
      if (this.list[this.current]) {
        return this.list[this.current];
      }

      return null;
    },
  },
  methods: {
    play(index) {
      console.log('play', index);
      this.current = index;
    },
    toggleLiked(id) {
      console.log('toggleLiked', id);
      for (let i = 0; i < this.list.length; i += 1) {
        if (this.list[i].id === id) {
          this.list[i].liked = !this.list[i].liked;
          break;
        }
      }
    },
  },
};
</script>
```

music-list.vue:

```vue
<music-item
    v-for="(item, index) of musicList"
    :key="item.id"
    :index="index"
    :data="item" />

<script>
inject: [
  'musicList',
  'current',
],
</script>
```

music-item.vue:

```vue
<template>
  <tr
      @dblclick="play(index)">
    <td>{{ index + 1 }}</td>
    <td>{{ index === current }}</td>
    <td
        @click="toggleLiked(data.id)">{{ data.liked }}</td>
    <td>{{ data.title }}</td>
    <td>{{ data.artist }}</td>
  </tr>
</template>

<script>
export default {
  inject: [
    'current',
    'play',
    'toggleLiked',
  ],
  props: {
    index: Number,
    data: Object,
  },
};
</script>
```

## provide

组件的 `provide` 选项用于向组件树内的其他节点共享数据：

```js
// 共享静态数据
provide: {
  appName: 'MusicPlayer',
},

// 共享组件内部数据（必须是返回对象的方法）
provide() {
  return {
    // 来自 data 的数据
    musicList: this.list,
    current: this.current,
    // 方法
    play: this.play,
    toggleLiked: this.toggleLiked,
  };
},
```

有两点需要注意：

1. 提供共享数据的组件并不知道哪些子组件使用了这些数据。
2. 默认情况下，数据是非相应式的。

## inject

组件的 `inject` 选项用于注入某个根节点共享的数据：

```js
inject: [
  'musicList',
  'current',
],
```

组件并不会知道注入的数据由哪个节点共享，只是不断向上层组件查找，直到找到共享的数据为止。

如果未找到共享的数据，会收到类似的警告：

>[Vue warn]: injection "musicList" not found. 

## 响应式的数据共享

由于 Provide/Inject 模式传递的数据并不是响应式的，所以在上面的例子中，双击列表播放其他曲目时，音乐列表中的“playing”状态并不会更新。

我们会在 [组合式 API] 部分学习响应式的数据共享。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/14.provide-inject>

在线预览: <https://codesandbox.io/s/vra-vue-14-provide-inject-e2v3n>

## 继续阅读

+ 上一节: [自定义事件](./emit.md)
+ 下一节:
