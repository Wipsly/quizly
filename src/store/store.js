var store = {}

export default store

store.state = {
    points: 100
}

hundred: function () {
    this.state.points = this.state.points +100;
}
