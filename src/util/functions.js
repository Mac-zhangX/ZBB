import utils from './utils';

/**
 * 判断登录状态
 */
export function isLogin() {
    let userInfo = utils.store.getStore('userInfo');
    if(!userInfo) return false;
    return true;
}