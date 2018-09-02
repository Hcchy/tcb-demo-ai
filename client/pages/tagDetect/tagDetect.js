/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        const { tags } = e.detail;
        this.setData({ tags });
    },
});
