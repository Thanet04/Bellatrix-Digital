<template>
  <div>
    <Navber/>
    <div class="box-transection">
        <p class="text-tran">Transaction</p>
        <table class="table-data">
            <tr>
                <th>Product Id</th>
                <th>Time</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            <tr class="detail" v-for="(transaction, index) in trans" :key="index"> 
                <td>{{ transaction.transactionId }}</td>
                <td>{{ transaction.time }}</td>
                <td>{{ transaction.price }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.status }}</td>     
            </tr>
        </table>
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
            const url = 'http://localhost:8080/products';
            axios.get(url)
                .then(res => {
                    const transactions = res.data.map(product => product.productAccounts[0].transactions).flat();
                    this.trans = transactions;
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
    .text-tran {
        font-size: 24px;
        color: #000;
        padding: 50px 0 50px 50px;
    }
    .table-data {
        margin-left: 50px;
        border-bottom: 2px solid #DACFCF;
        background: linear-gradient(0deg, #F6F2F2 0%, #F6F2F2 100%), #F6F2F2;
    }
</style>
