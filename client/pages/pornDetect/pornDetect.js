/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        const { confidence } = e.detail.data;
        this.setData({ confidence: `${confidence}%` });
    },
});
