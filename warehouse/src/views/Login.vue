<template>
  <div class="pagelogin">
    <div class="left-login" ><img style="padding: 20px;" src="../../public/image/Logo.png" alt=""></div>
    <div class="right-login">
        <p class="centerlogin">Login</p>
        <p>Username</p>
        <p>Password</p>
        <p>Login</p>
        <p>Guest</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .pagelogin{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .right-login{
       margin-right: 300px;
    }
    .left-login{
        background: #252625;
        height: 50%;
    }
    .centerlogin{
        color: #000;
        font-family: Roboto;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

</style>