<template>
  <section id="woonkly-team" class="section">
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">Un equipo experto</h3>
    <p class="is-size-5 has-text-centered">Crear una gran idea, un excelente producto y una potente criptomoneda solo puede realizarse con un equipo de los mejores expertos en cada área.</p>
    <div class="columns is-mobile is-multiline">
      <w-team-member v-for="(m, index) in team" v-bind:key="index" :member="m" class="column is-half-mobile is-one-quarter-tablet"/>
    </div>
  </section>
</template>

<script>
import wTeamMember from '@/components/woonkly-team/WoonklyTeamMember'

export default {
  data () {
    return {
      team: [
        {
          name: 'Mr. Santos',
          position: 'Presidente & CEO',
          img: 'mrsantos.jpg',
          links: {
            twitter: 'https://twitter.com/mrsantosyoutube',
            youtube: 'https://www.youtube.com/channel/UCo3hRG_jF6lAVzOUh_UM5Sg',
            linkedin: 'https://mx.linkedin.com/in/danielsantos3'
          }
        },
        {
          name: 'Matei Antohi',
          position: 'Co-Fundador',
          img: 'mateiantohi.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/matei-antohi-18950865/'
          }
        }
      ]
    }
  },
  components: {
    wTeamMember
  }
}
</script>


<style lang="scss">
#woonkly-team {
  background: var(--woonkly-black-blue);
}
</style>
