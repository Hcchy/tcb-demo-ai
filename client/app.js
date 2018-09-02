// app.js
App({
    onLaunch: function () {
        wx.cloud.init({
            env: '',
            traceUser: true
        });
    },
});