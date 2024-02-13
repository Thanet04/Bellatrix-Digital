<template>
  <div>
    <Navber/>
    <div class="box-transection">
        <div class="text-id" style="display: flex; ">
            <p>Product ID : </p>
            <p>Unit : </p>
        </div>
        <table class="table-data">
            <tr>
                <th>Transaction Id</th>
                <th>Time</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
         <tr class="detail" v-for="transaction in trans" :key="transaction.transactionId" > 
                <td>{{ transaction.transactionId}}</td>
                <td>{{ transaction.time }}</td>
                <td>{{ transaction.price }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.status }}</td>     
           
         </tr>
        </table>
        <div class="text-row" style="display: flex; justify-content: flex-end;">
        <p>Total : </p>
        <p>Remain Quantity: </p>
        <p>Profit : </p>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            trans: [],
        };
    },
    methods: {
        getTransactions() {
            const url = 'http://localhost:8080/product/'+this.$route.params.id;
            axios.get(url)
                .then(res => {
                    console.log(res.data)
                    this.trans = res.data.productAccounts[0].transactions
                    console.log(this.trans.transactionId)

                })
                .catch(error => {
                    console.error('Error fetching data from API:', error);
                });
        },
    },
    mounted() {
        this.getTransactions();
    },
}
</script>

<style>
    .box-transection {
        margin: 100px;
        background: #FFF;
        border-radius: 3px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
        height: 750px;
    }
    .title-colum{
        margin: 50px 0 50px 0;
    }   
    .table-data {
        margin-left: 50px;
        border-bottom: 2px solid #DACFCF;
        background: linear-gradient(0deg, #F6F2F2 0%, #F6F2F2 100%), #F6F2F2;
    }
    .text-id p,.text-row p{
        font-size: 18px;
        font-family: Roboto;
        padding: 20px;
    }
    .text-row{
        margin-right: 20px; 
    }
</style>
