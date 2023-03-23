function component() {
    return {
        rows: [],
        add_row: function () {
            this.rows.push({ qty: 0 });
        },
        remove_row: function (index) {
            this.rows.splice(index, 1);
        },
    };
}
