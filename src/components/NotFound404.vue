<template>
    <section id="error404" class="columns is-multiline is-mobile">
       
        <div id="left" class="column is-6-tablet is-10-mobile is-offset-1-mobile">
           
            <div id="message">
                <span id="m1">Ops!</span>
                <span id="m2">Something is not working right.</span>
                <span id="m3">Please try again soon.</span>
                <button id="btn" type="button" class="button is-rounded has-text-weight-semibold" name="button">BACK TO HOME</button>
            </div>
    
            <img id="bb1_l" src='/img/icons/gradient-circle1.svg'>
            <img id="bb2_l" src='/img/icons/gradient-circle1.svg'>
                
        </div>


        <div id="right" class="column is-6-tablet is-10-mobile is-offset-1-mobile">
           <img id="big-circle" src='/img/icons/Circulo.svg'>
           <img id="infinite" src='/img/icons/infinite.svg'>
        </div>
        
            
    </section>
</template>

<script>
    export default {
        //name: 'not 5found',   
    }
</script>

<style lang="scss">
    #error404{
        background: var(--woonkly-black-blue);
        position: relative; 
    }
    #left{
        min-height: 300px;
        order:2;
        position: relative;

    }
    #message{
        position: absolute;
        max-width: 308px;
    }
    #bb1_l{
        position: absolute;
        width:3.5em;
        top:30%;
        right:15%;
    }
    #bb2_l{
        display:none;
    }
    #btn{
        height: 30%;
        border:none;
        font-size: .8em;
        color: white;
        background: linear-gradient(to right, #0284B9 1%, #00d3ff);
        box-shadow: 0px 12px 44px 12px rgba(2,132,185,0.46);
        font-weight: normal;
        position:absolute;
        bottom:-45%;
        left:1%;
    }
    #m1{
        color:#00D7FD;
        font-size: 2.4em;
        display:inline-block;
    }
    #m2{
        color: #00D7FD;
        font-size: 1.1em;
        display:inline-block;
        font-weight: lighter;
    }
    #m3{
        color: #00D7FD;
        font-size: 1.1em;
        display:inline-block;
        font-weight: lighter;
    }
    #right{
        min-height: 380px;
        order:1;
        position: relative;
    }
     #infinite{
        position:absolute;
        max-width: 279px;
        top:35%;
        -webkit-animation: 5s float_animation infinite;
    }
    #big-circle{
        position: absolute;
        max-width: 287px;
        top:37%;
    }
    

    // changes the css properties if the size of the screen is equal or bigger than a tablet
    @media only screen and (min-width: 769px) {
        
        #error404{
            height:100vh;
            width:100%;
        }

        #left{
           order:1;
            #message{
                position: absolute;
                top:35%;
                left:20%;
                max-width:456px;
                #m1{
                    font-size: 4em;
                }
                #m2{
                    font-size: 1.8em;
                }
                #m3{
                    font-size: 1.8em;
                }
                #btn{
                    height: 25%;
                    border:none;
                    color: white;
                    background: linear-gradient(to right, #0284B9 1%, #00d3ff);
                    box-shadow: 0px 12px 44px 12px rgba(2,132,185,0.46);
                    font-weight: normal;
                    position:absolute;
                    bottom:-45%;
                    left:7%;
                }
                
            }
            #bb1_l{
                position: absolute;
                width:10em;
                top:8%;
                left:13%;
            }
            #bb2_l{
                display: inline;
                position: absolute;
                width:4em;
                bottom: 7%;
                left:20%;
            }
        }

        #right{
            order:2;
            display:inline-block;
            #big-circle{
                position: absolute;
                max-width: 60%;
                
            }
            #infinite{
                position:absolute;
                max-width: 70%;
                top: 20%;
                right:32%;
                -webkit-animation: 5s float_animation infinite;
            }
        }
    }

    @-webkit-keyframes float_animation{
        0%{
            -webkit-transform: translateY(0em);
        }
        50%{
            -webkit-transform: translateY(-4em);
        }
        100%{
            -webkit-transform: translateY(0em);
        }
    }

   


</style>



