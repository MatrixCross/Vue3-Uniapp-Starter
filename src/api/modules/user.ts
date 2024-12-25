import http from '../http'

function login(account: string, pwd: string) {
  return http.post('user/login', {
    account,
    pwd,
  })
}

/**
 * 获取验证码
 * @param phone 手机号
 */
function getCode(phone: string): Promise<{ num: number }> {
  return http.get('random/code', {
    params: {
      phone,
    },
    // 接口报错时提示
    errorMessage: '获取验证码失败',
  })
}
export default {
  login,
  getCode,
}
