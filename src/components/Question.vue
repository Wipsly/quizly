<template>
	<h1>{{ question }}</h1>
	<p><a class="btn btn-success btn-lg" @click="hundred" v-link="'/'">Right</a> <a class="btn btn-danger btn-lg" v-link="'/'">Wrong</a></p>
</template>

<script>
export default {
	props: ['question'],

	methods:{
    	hundred() {
      		this.$action('points:hundred')
    	}  
	}
}	
</script>