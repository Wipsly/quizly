<template>
	 <a v-link="link">
            <div class="col-md-3">
                <div class="well">
                    {{ points }} 
                </div>
            </div>
        </a>
</template>

<script>
export default {
	props: ['points', 'link']
}
</script>