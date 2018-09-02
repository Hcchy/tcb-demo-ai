/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        console.log(e);
        if (!e.detail) { return }
        const [registerId, name, addr, period] = e.detail.items;
        this.setData({
            registerId: registerId.itemstring,
            name: name.itemstring,
            addr: addr.itemstring,
            period: period.itemstring,
        });
    },
});
