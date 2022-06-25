<template>
  <div class="wrapper">
    <nav class="navbar">
      <div class="navbar__item navbar__logo"><img  src="@/assets/logo.svg" alt=""/></div>
      <router-link :class="$route.name === 'authorization' ? '_active' : ''" class="navbar__item" to="/">Авторизация</router-link>
      <router-link :class="$route.name === 'analytics' ? '_active' : ''" class="navbar__item" to="/analytics">Аналитика</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
  *{padding: 0;margin: 0;border: 0; font-family: 'Roboto', sans-serif;}
  *,*:before,*:after{-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
  body{min-height: 100%;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner{padding:0;border:0;}
  a,a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
  #app {
    min-height: 100vh;
}
  .wrapper {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .navbar {
    padding: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &__logo {
      max-width: 150px;
      & img {
        width: 100%;
      }
      @media (max-width: 500px) {
        max-width: unset;
        flex: 0 1 100%;
        text-align: center;
        & img {
          max-width: 100px;
        }
      }
    }
    &__item {
      font-size: 16px;
      line-height: 120%;
      padding: 5px 0px;
      margin: 0px 15px;
      color: #1B1B1C;
      position: relative;
      overflow: hidden;
      transition: 0.3s;
      &::before {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        background: #FF4402;
        transform: translateY(2px);
        opacity: 0;
        transition: 0.3s;
      }
      &:hover,
      &._active{
        color: #FF4402;
        &::before {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }

</style>
