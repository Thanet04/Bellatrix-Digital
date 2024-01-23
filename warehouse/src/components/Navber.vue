<template>
    <div>
      <div class="Navber">
        <img class="Logo" src="../../public/image/Logo oringo.png" alt="">
        <div class="right-nav">
          <p>About us</p>
          <router-link  style="text-decoration: none; color: black;" to="/Productlist"><p>Product List</p></router-link>
          <p>DashBoard</p>
          <router-link  style="text-decoration: none; color: black;" to="/Login"><button class="login">Login</button></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
    .Navber{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px;
      background: linear-gradient(180deg, #7FD2FF 0%, rgba(127, 210, 255, 0.00) 100%);
      height: 103px;
    }
    .Logo{
      width: 80px;
      height: 80px;
    }
    .right-nav{
      display: flex;
    }
    .right-nav p{  
      font-size: 24px; 
      margin: 0 50px 0 50px;
    }
    .login{
        border-radius: 20px;
        border: 1px solid #000;
        background: #FFF;
        font-size: 24px;
        width: 200px;
        height: 40px;
    }

  </style>