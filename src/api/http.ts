import un from '@uni-helper/uni-network'

const instance = un.create({
  // Web 侧可以通过 vite.config.js 中的 proxy 配置，指定代理
  // 小程序APP里需写完整路径，如 https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release
  // 可使用条件编译,详见 https://uniapp.dcloud.io/tutorial/platform.html#preprocessor
  // #ifdef H5
  baseUrl: import.meta.env.VITE_APP_REQUEST_BASE_URL,
  // #endif
  // #ifndef H5
  // @ts-ignore
  baseURL: 'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
  // #endif
  timeout: 6000,
  headers: { 'X-Custom-Header': 'foobar' }
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    // 请求前做些什么
    const { method, params } = config
    // 附带鉴权的token
    const headers: any = {
      token: uni.getStorageSync('token')
    }
    // 不缓存get请求
    if (method === 'get') {
      headers['Cache-Control'] = 'no-cache'
    }
    // delete请求参数放入body中
    if (method === 'delete') {
      headers['Content-type'] = 'application/json;'
      Object.assign(config, {
        data: params,
        params: {}
      })
    }

    return {
      ...config,
      headers
    }
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */

instance.interceptors.response.use(
  // @ts-ignore
  (v) => {
    // 2xx 范围内的状态码都会触发该函数
    // 下面改成适合你的项目的接口处理逻辑
    // @ts-ignore
    if (v.data?.code === 401) {
      uni.removeStorageSync('token')
      // alert('即将跳转登录页。。。', '登录过期')
      // setTimeout(redirectHome, 1500)
      return v.data
    }

    // @ts-ignore
    if ((v.status || v.statusCode) === 200) {
      return v.data
    }
    // alert(v.statusText, '网络错误')
    return Promise.reject(v) as Record<string, any>
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
