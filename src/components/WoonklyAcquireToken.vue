<template>
    <section id="woonkly-ac-token" class="section">

        <div class="container-tkn">
            <img src="/img/icons/linea_luz.svg" class="linealuz-tkn">
            <h3 class="title is-4 has-text-centered">ADQUIRIR TOKENS</h3>
        </div>

        <div class="columns">
            <div class="column is-5 cl-a">

                <p class="text-tkn">
                    Con el objetivo de premiar la atención de las
                    personas cuando ven vídeos o interactúan con
                    el contenido , hemos creado nuestra
                    criptomoneda, llamada “woonk”. Los creadores
                    de contenido y anunciantes pueden comprar
                    woonks para repartirlos entre las personas que
                    vean, compartan e interactuen con su contenido. 
                    Estas son las fases de la Oferta
                    inicial de nuestra criptomoneda:
                </p>

                <br>

                <ul>
                    <li v-for="(list, listIndex) in lists" :key="listIndex" class="list-tkn">
                        <img src="/img/icons/group.svg" class="img-tkn">
                        <div class="des-tkn">
                            <h1 class="title is-6">{{list.title}}</h1>
                            {{list.content}}
                        </div>
                    </li>
                </ul>

            </div>
            
            <div class="column is-7 cl-b">
                <ul>
                    <li v-for="(list, listIndex) in lists_two" :key="listIndex" class="list-tkn">
                        <img src="/img/icons/group.svg" class="img-tkn">
                        <div class="des-tkn">
                            <h1 class="title is-6">{{list.title}}</h1>
                            {{list.content}}
                        </div>
                    </li>
                </ul>
            </div>
                

        </div>

        
        
        <img src="/img/icons/linea_luz.svg" class="linealuzz-tkn">
        <img src="/img/icons/ilustracion.svg" class="ilustracion-tkn">

    </section>
</template>

<script>
export default {
    data(){
        return{
            lists: [
                {
                    title: '1 Mayo-1 Junio:', 
                    content: `Venta privada para suscriptores de
                    Mr. Santos en Youtube (50%
                    Bonus)`
                },
                {
                    title: '1 Junio-1 Julio:',
                    content: `Venta privada
                    para suscriptores de otros
                    canales de Youtube (40%
                    Bonus)`
                },
                {
                    title:'1 Julio- 1 Septiembre:',
                    content: `Venta
                    privada (Capitales de Emiratos
                    Árabes, Hong Kong y Europa)
                    (30% Bonus)`
                },
                {
                    title: '1 Septiembre-1 Octubre:',
                    content: `ICO Fase 1 (20% Bonus)`
                },
                {
                    title: '1 Octubre- 1 Noviembre:',
                    content: `ICO Fase 2 (10% Bonus)`
                },
                {
                    title: '1 Noviembre- 31 Diciembre:',
                    content: `ICO Fase 3 (0% Bonus)`
                }
                             
            ],

            lists_two: [
                {
                    title: 'Inicio',
                    content: `1 Mayo 2018`
                },   
                {
                    title: 'Número de Woonks a la venta',
                    content: `3,000,000,000 (30%)`
                },
                {
                    title: 'Final de la ICO',
                    content: `31 Diciembre 2018`
                },
                {
                    title: 'Tasa de cambio',
                    content: `1 ETH = 50,000 Woonks`
                },
                {
                    title: 'Métodos de inversión aceptados',
                    content: `ETH (BTC, LTC, DASH próximamente)`
                },
                {
                    title: 'Inversión mínima',
                    content: `0.01 ETH`
                }
            ]
        }
    }
};
</script>

<style lang="scss" scope>
#woonkly-ac-token {
  background: #0a0830;
  .extended-brief {
    margin-top: 1.5em;
  }
}



/*Responsive*/
/*.grid{
    display: grid;
    grid-template-columns: [xl-start] 1fr 1.5rem [md-start] minmax(0, 640px) [md-end] 1.5rem 1fr [xl-end];
    grid-gap: 5px;
}

.grid * {grid-column: md;}
.grid-xl * {grid-column: md;}*/

@media (min-width: 320px) and (max-width: 640px) {
  
    .list-tkn {
        display: flex;
        align-items: center;
        margin: 20px 20px 0px 20px;
        text-align: left;
        position: relative;
        
    }

    .img-tkn{
        width:30px;
        top:0px;
        position: absolute;
    }

    .text-tkn{
        font-size: 1em;
        margin: 20px;
        text-align: justify;
    }

    .des-tkn{
        font-size: 1.1em;
        margin-left: 30px;
    }

    .container-tkn{
        align-items: center;
        margin-bottom: 50px;
        margin-top: 50px;
    }

    .linealuz-tkn{
        position: absolute;
        transform: translate(-35%, -50%);
        z-index: 1;
        width:40%;
    }

    .ilustracion-tkn{
        position: absolute;
        transform: translate( 130%, -90%);
        z-index: 2;
        width:40%;
    }
    .linealuzz-tkn{
        position: absolute;
        transform: translate(105%, -220%);
        z-index: 3;
        width:45%;
    }
  
}

@media (min-width: 641px) and (max-width: 767px) {
  
    .list-tkn {
        display: flex;
        align-items: center;
        margin: 20px 20px 0px 20px;
        text-align: left;
        position: relative;
        
    }

    .img-tkn{
        width:30px;
        top:0px;
        position: absolute;
    }

    .text-tkn{
        font-size: 1em;
        margin: 20px;
        text-align: justify;
    }

    .des-tkn{
        font-size: 1.1em;
        margin-left: 30px;
    }

    .container-tkn{
        align-items: center;
        margin-bottom: 50px;
        margin-top: 50px;
    }

    .linealuz-tkn{
        position: absolute;
        transform: translate(-35%, -50%);
        z-index: 1;
        width:40%;
    }

    .ilustracion-tkn{
        position: absolute;
        transform: translate( 120%, -90%);
        z-index: 2;
        width:45%;
    }
    .linealuzz-tkn{
        position: absolute;
        transform: translate(105%, -150%);
        z-index: 3;
        width:45%;
    }
  
}

@media (min-width: 768px) and (max-width: 1024px) {

    .linealuz-tkn{
        position: absolute;
        transform: translate(-20%, -10%);
        z-index: 1;
        width:30%
    }

    .ilustracion-tkn{
        position: absolute;
        transform: translate( 175%, -100%);
        z-index: 2;
        width:40%;
    }
    .linealuzz-tkn{
        position: absolute;
        transform: translate(205%, -80%);
        z-index: 3;
        width:20%;
    }

    .text-tkn{
        font-size: 1em;
        //margin: 60px 60px 20px 140px;
        margin-left: 30px;
        text-align: justify;
        //padding: 30px 50px 30px 50px;
    }

    .list-tkn {
        display: flex;
        align-items: center;
        //margin: 10px 60px 20px;
        margin: 5px;
        //padding: 30px 10px 30px 10px;
        text-align: left;
        position: relative;
    }

    .img-tkn{
        width:30px;
        top:0px;
        position: absolute;
    }

    .des-tkn{
        font-size: 1em;
        margin-left: 30px;
    }

    .cl-a{
        margin: 50px 5px 0px 100px;
    }
    .cl-b{
        margin: 70px 0px 0px 0px;
    }

    .title{
        font-size: 4em;
    }

    /*.cont{
        -webkit-column-count: 2; 
        -moz-column-count: 2; 
        column-count: 2;
        margin: 50px 50px 0px 80px;
        //column-gap: 50px 100px 50px 300px;
    }*/

}

@media (min-width: 1025px) {
  
   .linealuz-tkn{
        position: absolute;
        transform: translate(-20%, -10%);
        z-index: 1;
        width:20%
    }

    .ilustracion-tkn{
        position: absolute;
        transform: translate( 175%, -100%);
        z-index: 2;
        width:35%;
    }
    .linealuzz-tkn{
        position: absolute;
        transform: translate(190%, -60%);
        z-index: 3;
        width:20%;
    }

    .text-tkn{
        font-size: 1.2em;
        //margin: 60px 60px 20px 140px;
        margin-left: 30px;
        text-align: justify;
        //padding: 30px 50px 30px 50px;
    }

    .list-tkn {
        display: flex;
        align-items: center;
        //margin: 10px 60px 20px;
        margin: 5px;
        //padding: 30px 10px 30px 10px;
        text-align: left;
        position: relative;
    }

    .img-tkn{
        width:30px;
        top:0px;
        position: absolute;
    }

    .des-tkn{
        font-size: 1.1em;
        margin-left: 30px;
        margin-bottom: 10px;
    }

    .cl-a{
        margin: 50px 5px 0px 100px;
    }
    .cl-b{
        margin: 70px 0px 0px 0px;
    }

    .title{
        font-size: 4em;
    }
  
  
}

</style>

