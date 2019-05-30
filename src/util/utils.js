let utils = {
    store: {
        // 存储 cookie
        setCookie(name, value, iDay) {
            var oDate = new Date()
            oDate.setDate(oDate.getDate() + iDay)
            document.cookie = name + '=' + value + ';expires=' + oDate
        },

        // 获取 cookie
        getCookie(name) {
            var arr = document.cookie.split('; ')
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('=')
                if (arr2[0] === name) {
                    return arr2[1]
                }
            }
            return ''
        },
        // 删除 cookie
        removeCookie(name) {
            this.setCookie(name, 1, -1)
        },
        /**
         * 存储localStorage
         */
        setStore(name, content) {
            if (!name) return;
            if (typeof content !== 'string') {
                content = JSON.stringify(content);
            }
            window.localStorage.setItem(name, content);
        },
        /**
         * 获取localStorage
         */
        getStore(name) {
            if (!name) return;

            return JSON.parse(window.localStorage.getItem(name));
        },

        /**
         * 删除localStorage
         */
        removeStore(name) {
            if (!name) return;
            window.localStorage.removeItem(name);
        }
    }
}
export default utils



