<template>
    <div class="column is-hidden-mobile is-3-tablet social-media">
        <a href="https://www.facebook.com/woonkly/" target="_blank">
            <fai :icon="['fab', 'facebook-f']" class="icons" />
        </a>
        <a href="https://twitter.com/WoonklyTV" target="_blank">
            <fai :icon="['fab', 'twitter']" class="icons" />
        </a>
        <a href="https://www.youtube.com/c/MrSantos" target="_blank">
            <fai :icon="['fab', 'youtube']" class="icons" />
        </a>
        <a :href="$t('message.woonklyTelegramLink')" target="_blank">
            <fai :icon="['fab', 'telegram-plane']" class="icons" />
        </a>
        <a href="https://github.com/Woonkly" target="_blank">
            <fai :icon="['fab', 'github']" class="icons" />
        </a>
        <a>
            <fai :icon="['fab', 'bitcoin']" class="icons" />
        </a>
        <a>
            <fai :icon="['fab', 'reddit']" class="icons" />
        </a>
        <a>
            <fai :icon="['fab', 'medium-m']" class="icons" />
        </a>
    </div>
</template>
<script>
export default {
  props: {}
};
</script>
<style lang="scss">
</style>