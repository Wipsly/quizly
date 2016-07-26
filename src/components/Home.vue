<template>
    <div class="row">
        <a v-link="'questionone'">
            <div class="col-md-3">
                <div class="well">
                    Question One
                </div>
            </div>
        </a>
        <div class="col-md-3">
            <div class="well">
                Question Two
            </div>
        </div>
        <div class="col-md-3">
            <div class="well">
                Question Three
            </div>
        </div>
        <div class="col-md-3">
            <div class="well">
                Question Four
            </div>
        </div>
    </div>
    {{ points }}
</template>

<script>
    import store from '../store/store'

    export default{
        data() {
            return {
                points: store.state.points
            }
        }
    }
</script>

