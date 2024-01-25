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
                            <td>{{ product.productCode }}</td>
                            <td><img src="../../public/image/image-tomato.svg" alt=""></td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.unit }}</td>
                            <td>{{ product.productType }}</td>
                            <td>{{ product.quantity }}</td>
                            <td><img src="../../public/image/pen.svg" alt=""></td>
                            <td><img src="../../public/image/delete.svg" alt=""></td>
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
import imagesearch from '../../public/image/search1.svg'

export default {
    data() {
        return {
            productList: [
                {
                    productCode: '123',
                    image: '../../public/image/image-tomato.svg',
                    name: 'Tomato',
                    price: '1$',
                    unit: 'Piece',
                    productType: 'Vegetable',
                    quantity: 50
                },
                {
                    productCode: '234',
                    image: '../../public/image/image-tomato.svg',
                    name: 'Tomato',
                    price: '11$',
                    unit: 'Pack',
                    productType: 'Vegetable',
                    quantity: 20
                },
                {
                    productCode: '345',
                    image: '../../public/image/image-tomato.svg',
                    name: 'Tomato',
                    price: '21$',
                    unit: 'Pack',
                    productType: 'Vegetable',
                    quantity: 30
                },
            ],
            createdProduct: null,
            products: []
        };
    },
    methods: {
        createProduct() {
            // จำลองการสร้างผลิตภัณฑ์
            const newProduct = {
                name: 'New Product'
            };
            // เพิ่มผลิตภัณฑ์ใหม่ในรายการผลิตภัณฑ์
            this.products.push(newProduct);
            // กำหนดค่าให้ createdProduct เพื่อแสดงผล
            this.createdProduct = newProduct;
        }
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