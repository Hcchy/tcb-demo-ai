/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        const data = e.detail.data;
        this.setData({
            text: data.map(({ item, value }) => `${item}: ${value}`).join('\n')
        });
    },
});
