/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        this.setData({ plate: e.detail.items[0].itemstring });
    },
});
