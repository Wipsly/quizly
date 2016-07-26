<template>
    <div class="container">
        <div class="jumbotron">
            <h1>Is this a good Solution?</h1>
            <p><a class="btn btn-success btn-lg" @click="hundred">Right</a> <a class="btn btn-danger btn-lg">Wrong</a></p>
        </div>
    </div>
</template>

<script>
    import store from '../../store/store'

    export default{
        data() {
            return {
                points: store.state.points
            }
        }
    }
</script>