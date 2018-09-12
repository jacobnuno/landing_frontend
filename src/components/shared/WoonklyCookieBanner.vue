<template>
  <transition name="hide-cookies">
    <div id="w-cookie-wrapper" v-if="!isOk">
      <div class="actual-content has-text-white">
        <p>
          {{$t('message.cookiesUseText')}}
          <router-link to="/cookies">
            {{$t('message.readMore')}}
          </router-link>
        </p>
        <button @click="acceptCookies" class="button is-primary is-medium">OK</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WoonklyCookies',
  data () {
    return {
      isOk: true
    }
  },
  methods: {
    acceptCookies () {
      this.isOk = true
      // Check if localStorage is defined
      if (typeof(Storage) === 'undefined') return false
      localStorage.setItem("cookiesAccepted", "true");
    },
    checkLocalStorage () {
      // Check if localStorage is defined
      if (typeof(Storage) === 'undefined') return false
      
      this.isOk = !!localStorage.getItem("cookiesAccepted")
    }
  },
  mounted () {
    this.checkLocalStorage()
  }
}
</script>

<style lang="scss">
#w-cookie-wrapper {
  position: fixed;
  z-index: 3000;
  top: unset;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);

  .actual-content {
    max-width: 960px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    .button {
      width: 90%;
      margin: 0 5%;
    }

    & > p {
      padding: 6px 16px;
      text-align: justify;
    }
  }
}

@media screen and (min-width: 768px) {
  #w-cookie-wrapper {
    .actual-content {
      flex-direction: row;

      .button {
        width: unset;
        margin: initial;
      }
    }
  }
}

.hide-cookies-enter-active, .hide-cookies-leave-active {
  transition: opacity .3s, transform .5s;
}
.hide-cookies-enter, .hide-cookies-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
</style>

