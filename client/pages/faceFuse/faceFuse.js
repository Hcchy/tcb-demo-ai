/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        console.log(e.detail);
    },
});
