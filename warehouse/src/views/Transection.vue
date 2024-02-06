<template>
  <div>
    <Navber/>
    <div class="box-transection">
        <p class="text-tran">Transection</p>
        <table class="table-data">
            <tr>
                <th>Product Id</th>
                <th>Data</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
            </tr>
            <tr class="detail" v-for="(transection, index) in trans" :key="index"> 
                <th v-text="transection.id"></th>
                <th v-text="transection.time"></th>
                <th v-text="transection.product_account_id"></th>
                <th v-text="transection.status"></th>
            </tr>
        </table>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
    .box-transection{
        margin: 100px;
        background: #FFF;
        border-radius: 3px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
        height: 750px;
    }
    .text-tran{
        font-size: 24px;
        color: #000;
        padding: 50px 0 50px 50px;
    }
    .table-data{
        margin-left: 50px;
        border-bottom: 2px solid #DACFCF;
        background: linear-gradient(0deg, #F6F2F2 0%, #F6F2F2 100%), #F6F2F2;
    }
</style>