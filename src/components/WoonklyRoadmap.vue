<template>
    <section id="woonkly-roadmap" class="section">
        <div class="container">
            <img id="progress-bar" src="/img/sections/roadmap/progress.svg" alt="Roadmap">
            <div class="title is-uppercase is-size-1-desktop is-size-5-mobile has-text-centered">Logros y objetivos</div>

            <img class="background-circle" id="bg-c1" src="/img/icons/gradient-circle1.svg" alt="circle">
            <img class="background-circle" id="bg-c2" src="/img/icons/gradient-circle1.svg" alt="circle">
            <img class="background-circle" id="bg-c3" src="/img/icons/gradient-circle1.svg" alt="circle">
            <img class="background-circle" id="bg-c4" src="/img/icons/gradient-circle1.svg" alt="circle">
            <img class="background-circle" id="bg-c5" src="/img/icons/gradient-circle1.svg" alt="circle">
            <img class="background-circle" id="bg-c6" src="/img/icons/gradient-circle1.svg" alt="circle">
            <img id="bg-line-1" src="/img/icons/ilustracion.svg">

            <!-- Roadmap begins -->
            <div id="roadmap">
                <template v-for="(index, i) in (1, Math.ceil(roadmap.length/2))">
                    <div :key="index" class="columns is-mobile">
                        <div class="column is-half is-aligned-to-right" :class="{small: i%2 === 0}">
                            <img class="roadmap-circle" :src="getCircleImg(roadmap[i*2].date)" alt="Done circle">
                            <img class="roadmap-line" :src="getLineImg(roadmap[i*2].date)" alt="Done line">
                            <div class="data-container">
                                <h3 class="roadmap-title is-uppercase is-bold">
                                    {{ roadmap[i * 2].title }}
                                </h3>
                                <p class="roadmap-description">
                                    {{ roadmap[i * 2].description }}
                                </p>
                            </div>
                        </div>
                        <div v-if="roadmap[i * 2 + 1]" class="column is-half is-aligned-to-left" :class="{small: i%2 === 0}">
                            <img class="roadmap-line" :src="getLineImg(roadmap[i*2+1].date)" alt="Done line">
                            <img class="roadmap-circle" :src="getCircleImg(roadmap[i*2+1].date)" alt="Done circle">
                            <div class="data-container">
                                <h3 class="roadmap-title is-uppercase is-bold">
                                    {{ roadmap[i * 2 + 1].title }}
                                </h3>
                                <p class="roadmap-description">
                                    {{ roadmap[i * 2 + 1].description }}
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
                { title: "Enero 2017", description: "Entrada en la incubadora de Startups Fitec1 e inversión de 75,000USD", date: new Date(2017, 0, 1) },
                { title: "Junio 2017", description: "Creación primer MVP", date: new Date(2017, 4, 1) },
                { title: "Enero 2018", description: "Ganador aceleración mejor Startup Plug and Play Silicon Valley LATAM 2018", date: new Date(2018, 0, 1) },
                { title: "Febrero 2018", description: "Aceleración en Tecnológico de Monterrey de Guadalajara", date: new Date(2018, 1, 1) },
                { title: "Marzo 2018", description: "Preparación de ICO", date: new Date(2018, 2, 1) },
                { title: "Abril 2018", description: "Creación de plataforma ICO, Token ERC20 y Smart contracts.", date: new Date(2018, 3, 1) },
                { title: "Mayo 2018", description: "Comienza la Pre-venta de tokens y se lanza la versión beta 1.0", date: new Date(2018, 4, 1) },
                { title: "Julio 2018", description: "Comienza la venta privada a inversores y fondos de inversión de capital riesgo (VCs)", date: new Date(2018, 6, 1) },
                { title: "Septiembre 2018", description: "Preparación de ICO", date: new Date(2018, 8, 1) },
                { title: "Enero 2019", description: "Finaliza la ICO y el \"woonk\" es listado en exchanges", date: new Date(2019, 0, 1) },
                { title: "Marzo 2019", description: "Comienza la Pre-venta de tokens y se lanza la versión beta 1.0", date: new Date(2019, 2, 1) },
            ]
        }
    },
    methods: {
        taskIsDone(date) {
            return new Date().getTime() > date.getTime()
        },
        getCircleImg(date){
            return this.taskIsDone(date)? 
                '/img/sections/roadmap/done-circle.svg' :
                '/img/sections/roadmap/normal-circle.svg'
        },
        getLineImg(date){
            return this.taskIsDone(date)? 
                '/img/sections/roadmap/done-line.svg' : 
                '/img/sections/roadmap/normal-line.svg'
        }
    }
})
</script>


<style lang="scss">
    #woonkly-roadmap{
        background-color: #0a0830;
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
</style>
