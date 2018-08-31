<template>
  <article class="woonkly-member">
    <figure class="image">
      <div class="w-member-image">
        <img class="is-rounded" :src="`/img/team/${member.img}`" :alt="`${member.name} ${memberPosition}`">
      </div>
      <figcaption class="has-text-centered">
        <span class="w-name is-size-5">{{member.name}}</span>
        <span class="w-positon is-size-7 has-text-weight-light">{{memberPosition}}</span>
      </figcaption>
    </figure>
    <div v-if="member.links" class="icons is-flex">
      <a v-if="member.links.youtube" :href="member.links.youtube" target="_blank">
        <fai :icon="['fab', 'youtube']"/>
      </a>
      <a v-if="member.links.twitter" :href="member.links.twitter" target="_blank">
        <fai :icon="['fab', 'twitter']"/>
      </a>
      <a v-if="member.links.linkedin" :href="member.links.linkedin" target="_blank">
        <fai :icon="['fab', 'linkedin']"/>
        </a>
    </div>
  </article>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faYoutube, faTwitter, faLinkedin)

export default {
  computed: {
    memberPosition () {
      return this.$t(this.member.position)
    }
  },
  props: {
    member: Object
  }
}
</script>

<style lang="scss">
.woonkly-member {
  margin-top: 3em;
  .image {
    .w-member-image {
      position: relative;
      margin: 0 7.5%;
      width: 85%;
      border-radius: 50%;
      animation: member-glowing 600ms ease infinite alternate;

      // Image circles
      &::before, &::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        z-index: 1;
      }

      // Outer circle
      &::before {
        left: -0.75em;
        top: -0.75em;
        right: -0.75em;
        bottom: -0.75em;
        border: 2px var(--woonkly-light-blue) solid;
      }

      // Inner circle
      &::after {
        left: -0.2em;
        top: -0.2em;
        right: -0.2em;
        bottom: -0.2em;
        border: 1px var(--woonkly-light-blue) solid;
      }

      img {
        position: relative;
        z-index: 10;
        transition: transform 450ms cubic-bezier(.68,-0.55,.27,1.55);
        transform: rotate(0);
        &:hover {
          transform: rotate(15deg);
        }
      }
    }
    figcaption {
      margin-top: 1.4em;
      line-height: 1;
      
      .w-name, .w-position {
        display: block;
      }
    }
  }
  .icons {
    justify-content: space-around;
    padding: 0 1em;
    a {
      color: var(--woonkly-light-blue);
      transition: transform 300ms linear;
      &:hover, &:focus {
        transform: scale(1.1);
      }
    }
  }
}

@keyframes member-glowing {
  0% {
    box-shadow: 0px 0px 0px 15px var(--woonkly-light-blue-quarter-opacity);
  }
  100% {
    box-shadow: 0px 0px 30px 17px var(--woonkly-light-blue-quarter-opacity);
  }
}
</style>
