// Make a store for the "cart"

export default {

  // You must define the name of the individual store
  name: "points",

  // The state of the point
  state: {
    points: 45
  },

  hundred() {
    this.state.points = this.state.points +100
  }

}