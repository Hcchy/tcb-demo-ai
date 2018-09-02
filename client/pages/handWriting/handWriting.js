/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        this.setData({ text: e.detail.data.items.map(item => item.itemstring).join(' ') });
    },
});
