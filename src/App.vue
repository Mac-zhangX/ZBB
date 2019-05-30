<template>
  <div id="app">
      <v-header></v-header>
      <router-view/>
      <v-footer></v-footer>
      <v-copyright></v-copyright>
      <v-login></v-login>
  </div>
</template>

<script>
  import copyright from "@/components/Copyright";
  import footer from "@/components/Footer";
  import header from "@/components/Header";
  import login from "@/components/Login";
export default {
  name: 'App',
    components : {
      "v-copyright" : copyright,
      "v-footer" : footer,
      "v-header" : header,
      "v-login" : login,
    },
    watch: {
        '$route' () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}

</script>

<style>
    @import "./assets/css/reset.css";
    .el-message{
        z-index: 10002 !important;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    width: 100%;
}
* {
  box-sizing: border-box
}
body{
    background: #FFF;
    padding-top: .6rem;
}
img{
    max-height: 100%;
    max-width: 100%;
}
    html{

        font-size: 100px !important;
    }
    .container{
        padding: 0;
    }

    @media (min-width: 1200px) {
        .container{
            width: 12rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .container{
            width: 9.92rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .container{
            width: 7.68rem;
        }
    }
    @media (max-width: 767px) {
        .container{
            padding: 0 .2rem;
        }
    }

</style>
