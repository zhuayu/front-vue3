// pc端设备屏幕最小宽度
export const PC_DEVICE_WIDTH = 1280

// catrgoray “全部” 选项
export const ALL_CATEGOARY_ITEM = {
  id: 'all',
  name: '全部'
}

// 默认分类数据
export const DEFAULT_CATEGOARS = [
  { id: 'web_app_icon', name: 'UI/UX', col: 1, urlname: 'web_app_icon' },
  { id: 'design', name: '平面', col: 1, urlname: 'design' },
  { id: 'illustration', name: '插画/漫画', col: 1, urlname: 'illustration' },
  { id: 'photography', name: '摄影', col: 2, urlname: 'photography' },
  { id: 'games', name: '游戏', urlname: 'games' },
  { id: 'anime', name: '动漫', urlname: 'anime' },
  {
    id: 'industrial_design',
    name: '工业设计',
    col: 2,
    urlname: 'industrial_design'
  },
  { id: 'architecture', name: '建筑设计', urlname: 'architecture' },
  { id: 'art', name: '人文艺术', urlname: 'art' },
  { id: 'home', name: '家居/家装', col: 1, urlname: 'home' },
  { id: 'apparel', name: '女装/搭配', col: 1, urlname: 'apparel' },
  { id: 'men', name: '男士/风尚', col: 2, urlname: 'men' },
  { id: 'modeling_hair', name: '造型/美妆', urlname: 'modeling_hair' },
  { id: 'diy_crafts', name: '手工/布艺', urlname: 'diy_crafts' },
  { id: 'food_drink', name: '美食', urlname: 'food_drink' },
  { id: 'travel_places', name: '旅行', urlname: 'travel_places' }
  // { id: 'wedding_events', name: '婚礼', col: 2, urlname: 'wedding_events' },
  // { id: 'kids', name: '儿童', urlname: 'kids' },
  // { id: 'pets', name: '宠物', urlname: 'pets' },
  // { id: 'quotes', name: '美图', urlname: 'quotes' },
  // { id: 'people', name: '明星', urlname: 'people' },
  // { id: 'beauty', name: '美女', urlname: 'beauty' },
  // { id: 'desire', name: '礼物', urlname: 'desire' },
  // { id: 'geek', name: '极客', urlname: 'geek' },
  // { id: 'data_presentation', name: '数据图', urlname: 'data_presentation' },
  // { id: 'cars_motorcycles', name: '汽车/摩托', urlname: 'cars_motorcycles' },
  // { id: 'film_music_books', name: '电影/图书', urlname: 'film_music_books' },
  // { id: 'tips', name: '生活百科', urlname: 'tips' },
  // { id: 'education', name: '教育', urlname: 'education' },
  // { id: 'sports', name: '运动', urlname: 'sports' },
  // { id: 'funny', name: '搞笑', urlname: 'funny' }
]

// 极简白
export const THEME_LIGHT = 'THEME_LIGHT'
// 极夜黑
export const THEME_DARK = 'THEME_DARK'
// 跟随系统
export const THEME_SYSTEM = 'THEME_SYSTEM'

export const DEFAULT_SCROLL_THEME = {
  dark: {
    track: {
      // 轨道颜色
      bgc: '#333',
      boxShadow: `inset 0 0 6px rgba(255,255,255,0.2)`
    },
    thumb: {
      // 滑块颜色
      bgc: '#333',
      boxShadow: `inset 0 0 6px rgba(255,255,255,.6)`
    }
  },
  light: {
    track: {
      // 轨道颜色
      bgc: '#fefefe',
      boxShadow: `inset 0 0 6px rgba(0,0,0,0.2)`
    },
    thumb: {
      // 滑块颜色
      bgc: '#fefefe',
      boxShadow: `inset 0 0 6px rgba(0,0,0,0.3)`
    }
  }
}

// 登录类型
export const LOGIN_TYPE_USERNAME = 'username'
export const LOGIN_TYPE_QQ = 'qq'
export const LOGIN_TYPE_WX = 'wx'

// 阿里oss配置
export const REGION = 'oss-cn-beijing'
export const BUCKET = 'imooc-front'
