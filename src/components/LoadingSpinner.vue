<template>
    <div class="vld-parent">
        <!-- <img class="splash" src="@/assets/img/splash-screen.png" alt=""> -->
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    </div>
</template>
 
<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },5000)
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }
        }
    }
</script> 
<style lang="scss" scoped>

.splash{
    position: fixed;
    justify-self: center;
    // height: 100vh;
    // width: 100vw;
    z-index: 100;
    top:10%;
    left: 6%;
}

</style>