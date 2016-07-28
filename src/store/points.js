export default {

  // You must define the name of the individual store
  name: "points",

  // The state of the point
  state: {
    points: 0,
    questions: {
      'first': {
    		'question': 'First Question'
    	},
    	'second': {
    		'question': 'Second Question'
    	}
    }
  },

  hundred() {
    this.state.points = this.state.points +100
  }
}