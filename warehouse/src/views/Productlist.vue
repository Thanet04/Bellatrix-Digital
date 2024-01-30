<template>
<div>
      <Navber/>
        <div class="center-page">
                <Createproduct/>
                <div class="title-colum">
                    <table>
                        <tr class="title">
                            <th>Product Code</th>
                            <th>Images</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Unit</th>
                            <th>Product type</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <tr class="detail" v-for="(product, index) in productList" :key="index">
                            <td v-text="product.id"></td>
                            <td><img :src="product.picture" alt=""></td>
                            <td v-text="product.name"></td>
                            <td v-text="product.price"></td>
                            <td v-text="product.unit"></td>
                            <td v-text="product.productType"></td>
                            <td v-text="product.quantity"></td>
                            <td><img class="eidt-data" src="../../public/image/pen.svg" alt=""></td>
                            <td><img class="delete-data" @click="deleteProduct(index)" src="../../public/image/delete.svg" alt=""></td>
                        </tr>
                    </table>
                </div>
                <div class="low-description"> 
                    <p>Show</p>
                    <input style="border-radius: 3px; width: 50px; height: 30px; border: none; text-align: center;" type="number" value="12" required="required">
                    <p>entries</p>
                    <p>Showing 9 of entries</p>
                </div>  
        </div>
</div>
        
</template>

<script>

import Createproduct from '@/components/Createproduct.vue';
import axios from 'axios';

export default {
    data() {
        return {
            productList: [],
            createdProduct: null,
            products: []
        };
    },
    methods: {
        getProduct() {
        const url = 'http://localhost:8080/product';
        axios
            .get(url)
            .then(res => {
              this.productList = res.data; // Update the productList with the data received from the API
            })
            .catch(error => {
              console.error('Error fetching data from API:', error);
            })
        },
        deleteProduct(index) {
         // Your existing deleteProduct method
        }
    },
    mounted() {
        this.getProduct(); // Call getProduct when the component is mounted
    },
        components: { Createproduct }
};
</script>

<style>

    .body{
        background: #E5EAF9;
    } 
    .center-page{
        border-radius: 3px;
        background: #FFF;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
        margin: 100px;
        padding: 20px 50px 20px 50px;
    }
    .right-top-description button{
        padding-right: 50px;
    }
    .right-top-description input {
        padding: 5px 5px 5px 5px;
        padding-left: 30px; 
        background: url('../../public/image/search1.svg') no-repeat left center;
        background-size: 15px;
    }
    table {
        border-collapse: collapse;
        width: 1230px;
    }
    .title{
        background: #F9E3E3;
        height: 30px;
    }
    th, td {
        text-align: center;
        vertical-align: middle;
    }
    .detail {
        border-bottom: 2px solid #DACFCF;
        background: linear-gradient(0deg, #F6F2F2 0%, #F6F2F2 100%), #F6F2F2;
    }
    .low-description{
        display: flex;
        margin: 10px;
    }
    .low-description p{
        padding: 5px;
    }
</style>