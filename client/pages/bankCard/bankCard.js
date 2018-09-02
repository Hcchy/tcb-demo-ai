/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        if (!e.detail) { return }
        const [cardId, period] = e.detail.items;
        this.setData({
            cardId: cardId.itemstring,
            period: period.itemstring,
        });
    },
});
