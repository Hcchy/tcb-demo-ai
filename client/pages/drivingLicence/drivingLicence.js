/* global getApp, Page */
Page({
    data: {},
    handleFinish(e) {
        console.log(e);
        if (!e.detail) { return }
        const [licenseId, name, nation, gender] = e.detail.items;
        this.setData({
            licenseId: licenseId.itemstring,
            name: name.itemstring,
            nation: nation.itemstring,
            gender: gender.itemstring,
        });
    },
});
