# Woonkly´s Official Landing

[![Woonkly](https://woonkly.com/img/email-assets/powered-by.png)](https://woonkly.com)

This is the awesome Woonkly's landing page.
We created this project because we want to let developers from all the globe to use it or modify it, according to their different preferences.

## Technologies you will need.
* [Vue.js](https://vuejs.org/) -  An open-source JavaScript framework for building user interfaces.
* [Vue CLI](https://github.com/vuejs/vue-cli) - Vue's developer tool.
* [vue-router](https://router.vuejs.org/) - Vue Router is the official router for Vue.js.
* [Bulma](https://bulma.io/) - An open-source CSS framwork based on Flexbox.
* [Sass](https://sass-lang.com/) - An extension of CSS. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.


## Running the project.
In order to run this project locally you must follow the next steps:

* Clone or download this repository
 https://github.com/Woonkly/landing_frontend.git
* Once downloaded in your local machine, run the following commands in your terminal:
 ````bash
 // Install dependencies
 $ npm install
 // Run dev server
 $ npm run server
 ````
*If you didn't change the default configuration the project starts at: http://localhost:8080/*

## How to modify the landing page.
If you want to modify the landing page, you must modify the components in the project according to your needs. We consider that  a good ICO landing page should have or show:
* An introduction.
* The current status of the ICO.
* The benefits of investing wiht us.
* Information about the ICO and the cryptocurrency.
* Statistics about the token distribution
* Enterprise's members.
* F.A.Q. section.

### Introduction.
The introduction needs to be clear and straight, it should explain to the user: What is the purpose of the ICO and what you are doing with the ICO. If you want to look for an example, you can find a template in the _WoonklyWhat.vue_ file, in the _src/components/_ directory.

### ICO´s Current Status.
This is a very important section, the page should display the current phase the ICO is, total amount of Woonks sold, phase's countdown, etc. If you want to look for an example, you can find a template in the _WoonklyIcoStatus.vue_ file, in the _src/components/_ directory.

### Benefits.
Here, you need to explain to the user why you are the best option to invest. Show them what makes your ICO unique and why you are the best option in the market. You can find a template in the _WoonklyBenefit.vue_ file, in the _src/components/woonkly-benefits/_ directory.

### ICO´s information.
It must contain all the information related to the ICO (important dates, investment methods, exchance rate, etc.). You can find a template in the _WoonklyAcquireToken.vue_ file, in the _src/components/_ directory.

### Statistics about the token distribution.
Statistics about how the token is used. You can find a template in the _WoonklyDistributionToken.vue_ file, in the _src/components/_ directory.

### Enterprise's Members
A list of the people responsable for the ICO. You can find a template in the _WoonklyTeamMembers.vue_ file, in the _src/components/woonkly-team/_ directory.


### F.A.Q. section
It is very important to clear user's doubts of the ICO, that is why you need a F.A.Q. section. You can find a template in the _WoonklyFaq.vue_ file, in the _src/components/_ directory.
