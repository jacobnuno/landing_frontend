<template>
    <div class="cookies-advice">
        <p v-if="show">
            {{ $t('message.cookiesLink.adviceMain') }}
            <router-link to="/cookies" target="_blank">
                {{ $t('message.cookiesLink.adiviceLink')}}
            </router-link>
            <button @click.native="show = false">
                Aceptar
            </button>
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: true
        }
     }
}
</script>

<style lang="scss">
.cookies-advice {

    background: var(--woonkly-light-blue);
    color: white;
    
}
</style>
