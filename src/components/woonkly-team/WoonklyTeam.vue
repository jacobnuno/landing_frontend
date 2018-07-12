<template>
  <section id="woonkly-team" class="section">
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">Un equipo experto</h3>
    <p class="is-size-5 has-text-centered">Crear una gran idea, un excelente producto y una potente criptomoneda solo puede realizarse con un equipo de los mejores expertos en cada área.</p>
    <div class="columns is-mobile is-multiline">
      <w-team-member v-for="(m, index) in team" v-bind:key="index" :member="m" class="column is-half-mobile is-one-quarter-tablet"/>
    </div>
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">Inversores y Advisors</h3>
    <div class="columns is-mobile is-multiline">
      <w-team-member v-for="a in advisors" :key="a.name" :member="a" class="column"/>
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
          img: 'mateantohi.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/matei-antohi-18950865/'
          }
        },
        {
          name: 'David Leonardo',
          position: 'Dir. Operaciones',
          img: 'davidleonardo.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/davidleonardoc/'
          }
        },
        {
          name: 'Oscar Cardenas',
          position: 'CTO & Gerente de Blockchain',
          img: 'oscarcardenas.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/cardedeveloper/'
          }
        },
        {
          name: 'Derek Jones',
          position: 'Financial Blockchain Manager',
          img: 'derekjones.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/unitedcoin/'
          }
        },
        {
          name: 'Ghali El Kasri',
          position: 'Arquitecto de Blockchain',
          img: 'ghalielkasri.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/mohamed-el-ghali-el-kasri-61471114a/'
          }
        },
        {
          name: 'Ghita El Kasri',
          position: 'Blockchain financial arquitect',
          img: 'ghitaelkasri.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/ghita-el-kasri-81a6b185/'
          }
        },
        {
          name: 'Hassan Lahlou',
          position: 'Director Matemático de Blockchain',
          img: 'hassanlahlou.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/hassanlahlou/'
          }
        },
        {
          name: 'Sara Santos',
          position: 'Directora de Marketing',
          img: 'sarasantos.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/sarasc9/'
          }
        },
        {
          name: 'Carlos Pavia',
          position: 'Director desarrollo web',
          img: 'carlospavia.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/carlos-pavia-7517bb51/'
          }
        },
        {
          name: 'Jonathan Álvarez',
          position: 'Director Financiero',
          img: 'jonathanalvarez.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/jonathan-alvarez-592816bb/'
          }
        },
        {
          name: 'Shuberth Chi',
          position: 'Director tecnológico',
          img: 'shuberthchi.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/shuberth-chi-balam/'
          }
        }
      ],
      advisors: [
        {
          name: 'Rodrigo de la Peña',
          position: 'Inversor',
          img: 'rodrigodelapena.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/rodrigo-de-la-pe%C3%B1a-30a4b522/'
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
