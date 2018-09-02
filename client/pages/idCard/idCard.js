/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        const { name, sex, id } = e.detail.data;
        this.setData({ name, sex, idCard: id });
    },
});
