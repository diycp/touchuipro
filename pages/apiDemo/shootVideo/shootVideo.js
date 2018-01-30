var sourceType = [['camera'], ['album'], ['camera', 'album']]
var camera = [['front'], ['back'], ['front', 'back']]
var duration = Array.apply(null, { length: 60 }).map(function (n, i) {
  return i + 1
})
export default {
  data () {
    return {
      sourceTypeIndex: 2,
      sourceType: ['拍摄', '相册', '拍摄或相册'],
      cameraIndex: 2,
      camera: ['前置', '后置', '前置或后置'],
      durationIndex: 59,
      duration: duration.map(function (t) { return t + '秒' }),
      src: ''
    }
  },
  methods: {
    sourceTypeChange: function (e) {
      this.setData({
        sourceTypeIndex: e.detail.value
      })
    },
    cameraChange: function (e) {
      this.setData({
        cameraIndex: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        durationIndex: e.detail.value
      })
    },
    chooseVideo: function () {
      var that = this
      ui.chooseVideo({
        sourceType: sourceType[this.$data.sourceTypeIndex],
        camera: camera[this.$data.cameraIndex],
        maxDuration: duration[this.$data.durationIndex],
        success: function (res) {
          that.setData({
            src: res.tempFilePath
          })
        }
      })
    }
  }
}
