
var saveDataToLocal = {
    save: function (key, data, time = 1) {
        var type = Object.prototype.toString.call(data)
        if (type !== '[object String]') {
            data = JSON.stringify(data)
        }
       return new Promise((resolve)=>{
            localStorage.setItem(key, data)
            var milliseconds = new Date().getTime() + time * 24 * 60 *60
            localStorage.setItem(key + 'time', milliseconds)
            resolve({code:0})
        })
    },
    get: function (key) {
        var nowMilliSeconds = new Date().getTime()
        var keyMilliSeconds = Number(localStorage.getItem(key + 'time'))
        if (nowMilliSeconds < keyMilliSeconds) {
            return localStorage.getItem(key)
        } else {
            localStorage.removeItem(key)
            return ''
        }
    }
}

export default saveDataToLocal