<template>
    <div class="container">
        <div class="jumbotron">
            <h1>Is this a good Solution?</h1>
            <p><a class="btn btn-success btn-lg" @click="hundred" v-link="'/'">Right</a> <a class="btn btn-danger btn-lg" v-link="'/'">Wrong</a></p>
        </div>
    </div>
</template>

<script>
export default {
	methods:{
    	hundred() {
      		this.$action('points:hundred')
    }  
  }
}
</script>
