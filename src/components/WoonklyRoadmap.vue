<template>
  <section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.25 } }" id="woonkly-roadmap" class="section">
    <div class="container">
      <!-- progress-bar decoration svg  -->
      <img id="progress-bar" src="/img/sections/roadmap/progress.svg" alt="Roadmap">
      <div class="title is-uppercase is-size-1-desktop is-size-5-mobile has-text-centered">{{$t('message.milestonesAndObjectives')}}</div>

      <!-- background circles decoration svg  -->
      <img class="background-circle" id="bg-c1" src="/img/icons/gradient-circle1.svg" alt="circle">
      <img class="background-circle" id="bg-c2" src="/img/icons/gradient-circle1.svg" alt="circle">
      <img class="background-circle" id="bg-c3" src="/img/icons/gradient-circle1.svg" alt="circle">
      <img class="background-circle" id="bg-c4" src="/img/icons/gradient-circle1.svg" alt="circle">
      <img class="background-circle" id="bg-c5" src="/img/icons/gradient-circle1.svg" alt="circle">
      <img class="background-circle" id="bg-c6" src="/img/icons/gradient-circle1.svg" alt="circle">
      <img id="bg-line-1" src="/img/icons/ilustracion.svg">

      <!-- Roadmap begins -->
      <div id="roadmap">
        <!-- iteration of the object roadmap -->
        <!-- "i" is for iterate the object roadmap and "index" is for iterate the object by columns-->
        <template v-for="(index, i) in (1, Math.ceil(roadmap.length/2))">
          <div :key="index" class="columns is-mobile">
            <div class="column is-half is-aligned-to-right" :class="{small: i%2 === 0}">
                <!-- roadmap's left column graphics creation -->

                <span><img class="roadmap-circle" :src="getCircleImg(roadmap[i*2].date)" alt="Done circle"></span>
                <img class="roadmap-line" :src="getLineImg(roadmap[i*2].date)" alt="Done line">
                <div class="data-container">
                    <h3 class="roadmap-title is-uppercase is-bold is-size-7-mobile">
                        {{$t(roadmap[i * 2].title)}}
                    </h3>
                    <p class="roadmap-description is-size-7-mobile">
                        {{$t(roadmap[i * 2].description)}}
                    </p>
                </div>
            </div>
            <!-- roadmap's right column graphics creation -->
            <div v-if="roadmap[i * 2 + 1]" class="column is-half is-aligned-to-left" :class="{small: i%2 === 0}">
                <img class="roadmap-line" :src="getLineImg(roadmap[i*2+1].date)" alt="Done line">
                <span><img class="roadmap-circle" :src="getCircleImg(roadmap[i*2+1].date)" alt="Done circle"></span>
                <div class="data-container">
                    <h3 class="roadmap-title is-uppercase is-bold is-size-7-mobile">
                        {{$t(roadmap[i * 2 + 1].title)}}
                    </h3>
                    <p class="roadmap-description is-size-7-mobile">
                        {{$t(roadmap[i * 2 + 1].description)}}
                    </p>
                </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            roadmap: [
              // months start at 0
              { title: 'message.roadMapMilestones[0].title', description: 'message.roadMapMilestones[0].description', date: new Date(2017, 0, 1) },
              { title: 'message.roadMapMilestones[1].title', description: 'message.roadMapMilestones[1].description', date: new Date(2017, 5, 1) },
              { title: 'message.roadMapMilestones[2].title', description: 'message.roadMapMilestones[2].description', date: new Date(2018, 0, 1) },
              { title: 'message.roadMapMilestones[3].title', description: 'message.roadMapMilestones[3].description', date: new Date(2018, 1, 1) },
              { title: 'message.roadMapMilestones[4].title', description: 'message.roadMapMilestones[4].description', date: new Date(2018, 2, 1) },
              { title: 'message.roadMapMilestones[5].title', description: 'message.roadMapMilestones[5].description', date: new Date(2018, 2, 1) },
              { title: 'message.roadMapMilestones[6].title', description: 'message.roadMapMilestones[6].description', date: new Date(2018, 3, 1) },
              { title: 'message.roadMapMilestones[7].title', description: 'message.roadMapMilestones[7].description', date: new Date(2018, 4, 1) },
              { title: 'message.roadMapMilestones[8].title', description: 'message.roadMapMilestones[8].description', date: new Date(2018, 6, 1) },
              { title: 'message.roadMapMilestones[9].title', description: 'message.roadMapMilestones[9].description', date: new Date(2018, 8, 1) },
              { title: 'message.roadMapMilestones[10].title', description: 'message.roadMapMilestones[10].description', date: new Date(2019, 0, 1) },
            ]
        }
    },
    methods: {
        visibilityChanged (isVisible, entry) {
            if (isVisible) {
            this.$emit('currentSectionChanged', 'WoonklyRoadmap')
            }
        },
        // return the actual date
        taskIsDone(date) {
            return new Date().getTime() > date.getTime()
        },
        // gets the proper circle of a Date
        // (date is in the past) ? green color : blue color
        getCircleImg(date){
            return this.taskIsDone(date)?
                '/img/sections/roadmap/done-circle.svg' :
                '/img/sections/roadmap/normal-circle.svg'
        },
        // gets the proper line of a Date
        // (date is in the past) ? green color : blue color
        getLineImg(date){
            return this.taskIsDone(date)?
                '/img/sections/roadmap/done-line.svg' :
                '/img/sections/roadmap/normal-line.svg'
        }
    }
})
</script>


<style lang="scss">

    body, html{
        overflow-x: hidden;
    }

    #woonkly-roadmap{
        background-color: var(--woonkly-black-blue);
        background-image: url('/img/backgrounds/BACKGROUND 5_2.png');
        background-position: bottom;
        background-position-y: 650px;
        background-repeat: no-repeat;
    }

    #progress-bar{
        width: 5px;
        position: absolute;
        margin: auto;
        left: 50%;
    }

    #progress-bar, #roadmap{
        margin-top: 75px;
    }

    .is-aligned-to-left{
        text-align: left;
        .roadmap-circle{
            margin-left: -70px;
        }
        .data-container{
            margin-right: auto;
        }
    }
    .is-aligned-to-right{
        text-align: right;
        .roadmap-circle{
            margin-right: -60px;
        }
        .data-container{
            margin-left: auto;
        }
    }

    .is-aligned-to-right > span::after {
        content: "";
        border-radius: 38px;
        margin-left: -52px;
        z-index: -2;
        position: absolute;
        animation: 2.3s glowEffect infinite;
    }

    .is-aligned-to-left > span::after {
        content: "";
        border-radius: 38px;
        margin-left: 21px;
        z-index: -2;
        position: absolute;
        animation: 3s glowEffect infinite;
    }

    @keyframes glowEffect {
        0%  { box-shadow: 9px 16px 63px 16px #cdf7c2; }
        50% { box-shadow: 9px 16px 63px 20px #cdf7c2; }
        100%{ box-shadow: 9px 16px 63px 16px #cdf7c2; }
    }

    @keyframes miniGlowEffect {
        0%  { box-shadow: 9px 16px 63px 6px #cdf7c2; }
        50% { box-shadow: 9px 16px 63px 10px #cdf7c2; }
        100%{ box-shadow: 9px 16px 63px 6px #cdf7c2; }
    }

    .roadmap-line{
        width: 260px;
        min-height: 2px;
    }

    #roadmap{
        .roadmap-line, .roadmap-circle, .column, .columns{
            z-index: 5;
        }
    }

    .background-circle{
        width: 75px;
        height: 75px;
        position: absolute;
    }

    #bg-c1{
        top: 14%;
        left: 23%;
        width: 31px;
    }

    #bg-c2{
        right: 26%;
        top: 33%;
    }

    #bg-c3{
        left: 3%;
        top: 50%;
        opacity: 0.5;
    }

    #bg-c4{
        right: 31%;
        top: 67%;
        opacity: 0.4;
        width: 25px;
    }

    #bg-c5{
        right: 21%;
        top: 78%;
        opacity: 0.6;
        width: 35px;
    }

    #bg-c6{
        left: 31%;
        top: 92%;
        opacity: 0.8;
        width: 32px;
    }

    #bg-line-1{
        width: 355px;
        position: absolute;
        top: 10%;
        right: 0%;
        opacity: 0.65;
        @media screen and (max-width: 892px){
            right: -20%;
        }
        @media screen and (max-width: 466px){
            right: -40%;
        }
    }


    .roadmap-circle{
        width: 220px;
        margin: -132px;
    }

    .roadmap-title{
        margin-bottom: 10px;
    }

    .roadmap-description{
        font-size: 0.85rem;
    }

    .small{
        .roadmap-line{
            width: 175px;
        }
        &.is-aligned-to-right{
            .roadmap-circle{
                margin-right: -60px;
            }
        }
        &.is-aligned-to-left{
            .roadmap-circle{
                margin-left: -70px;
            }
        }
    }

    .data-container{
        max-width: 165px;
        padding: 25px;
        font-weight: lighter;
    }

    .is-bold{
        font-weight: bolder;
    }

    @media screen and (max-width: 768px) {
        .roadmap-line{
            width: 160px;
        }

        .small{
            .roadmap-line{
                width: 75px;
            }
        }
    }

    @media screen and (max-width: 572px){
        .roadmap-circle {
            width: 119px;
            margin: -70px;
        }

        .roadmap-line{
            width: 75px;
        }

        .is-aligned-to-left{
            span::after{
                margin-left: 7px;
                animation: 3s miniGlowEffect infinite;
            }
            .roadmap-circle{
                margin-left: -35px;
            }
        }
        .is-aligned-to-right{
            span::after{
                margin-left: -38px;
                animation: 3s miniGlowEffect infinite;
            }
            .roadmap-circle{
                margin-right: -30px;
            }
        }
        .small{
            .roadmap-line{
                width: 55px;
            }
            &.is-aligned-to-right{
                .roadmap-circle{
                    margin-right: -35px;
                }
            }
            &.is-aligned-to-left{
                .roadmap-circle{
                    margin-left: -40px;
                }
            }
        }
    }
</style>
