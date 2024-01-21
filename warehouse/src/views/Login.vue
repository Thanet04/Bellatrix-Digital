<template>
    <div class="pagelogin">
      <div class="left-login"><img style="padding: 20px;" src="../../public/image/Logo.png" alt=""></div>
      <div class="right-login">
        <p class="centerlogin">Login</p>
        <input type="text" class="username" placeholder="Username">
        <input type="text" class="password" placeholder="Password">
        <button class="botton-login">Login</button>
        <button class="botton-guest">Guest</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    // Enable scrolling before destroying the component
    document.body.style.overflow = '';
  },
  }
  </script>
  
  <style>

  .pagelogin {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
  }
  
  .right-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  
  .left-login {
    background: #252625;
    width: 50%;
    height: 100%;
    flex-shrink: 0;
  }
  
  .centerlogin {
    color: #000;
    font-family: Roboto;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 120px;
  }
  
  .username, .password {
    border-radius: 20px;
    border: 1px solid #000;
    padding: 10px 250px 10px 20px;
    margin-bottom: 100px;
    background: #FFF;
    color: #000;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  
  .botton-login, .botton-guest {
    border-radius: 20px;
    border: 1px solid #000;
    padding: 10px 100px 10px 100px;
    margin-bottom: 50px;
    background: #FFF;
    color: #000;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  </style>
  