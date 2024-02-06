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
                            <td><img style="height: 65px; widtg: 40px;" :src="product.picture" alt=""></td>
                            <td v-text="product.name"></td>
                            <td v-text="product.selling_price"></td>
                            <td v-text="product.unit"></td>
                            <td v-text="product.type "></td>
                            <td v-text="product.amount"></td>
                            <td><img class="eidt-data" @click="editProduct(index)" src="../../public/image/pen.svg" alt=""></td>
                            <td><img class="delete-data" @click="confirmDelete(index)" src="../../public/image/delete.svg" alt=""></td>
                        </tr>
                    </table>
                    <div v-if="editedProduct !== null">
                    <form class="edited" @submit.prevent="updateProduct">
                     <!-- Add form fields for editing the product properties -->
                    <label for="editedName">Name</label>
                    <input v-model="editedProduct.name" id="editedName" required>
                    <label for="editedPrice">Price</label>
                    <input type="number" v-model="editedProduct.selling_price" id="editedPrice" required>
                    <label for="editedUnit">Unit</label>
                    <select id="unit" class="unitSelect" v-model="editedProduct.unit">
                        <option value="pack">Pack</option>
                        <option value="piece">Piece</option>
                        <option value="box">Box</option>
                    </select>
                    <label for="editedtype">Product Type</label>
                    <select id="type" class="typeSelect" v-model="editedProduct.type">
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="water">Water</option>
                     </select>
                    <label for="editedquantity">Quantity</label>
                    <input type="number" v-model="editedProduct.amount" id="editedQuantity" required>
                    <!-- Add other fields as needed -->
                    <button class="editsave" type="submit" @click="updateProduct">Save</button>
                    <button class="editcancel" @click="cancelEdit">Cancel</button>
                    </form>
                </div>
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
            products: [],
            editedProduct: null,
            editedIndex: null,
        };
    },
    methods: {
        getProduct() {
        const url = 'http://localhost:8080/products';   
        axios
            .get(url)
            .then(res => {
              this.productList = res.data; // อัปเดต productList ด้วยข้อมูลที่ได้รับจาก API
            })
            .catch(error => {
              console.error('Error fetching data from API:', error);
            })
        }, 
        confirmDelete(index) {
            const isConfirmed = window.confirm('Are you sure you want to delete this product?');
            if (isConfirmed) {
            this.deleteProduct(index);
            }
        },
         deleteProduct(index) {
         // การลบผลิตภัณฑ์ที่มีอยู่
         const productId = this.productList[index].id; 
            const url = `http://localhost:8080/product/${productId}`;

            axios
                .delete(url)
                .then(() => {
                    
                    this.productList.splice(index, 1);
                    console.log('ลบสำเร็จ');
                })
                .catch(error => {
                    console.error('เกิดข้อผิดพลาดในการลบผลิตภัณฑ์:', error);
                });
        },
        editProduct(index) {
            
            this.editedProduct = { ...this.productList[index] };
            this.editedIndex = index;
        },
         cancelEdit() {
             
            this.editedProduct = null;
            this.editedIndex = null;
        },
         updateProduct() {
            
            const url = `http://localhost:8080/product/${this.editedProduct.id}`;

             axios
                .put(url, this.editedProduct)
                .then(() => {
                
                this.$set(this.productList, this.editedIndex, { ...this.editedProduct });
                console.log('แก้ไขสำเร็จ');
                
                this.editedProduct = null;
                this.editedIndex = null;
                })
            .catch(error => {
                console.error('เกิดข้อผิดพลาดในการแก้ไขผลิตภัณฑ์:', error);
            });
         },
    },
    mounted() {
        this.getProduct(); 
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
    .edited input{
        margin-left: 10px;
        width: 100px;
    }
    #unitSelect,#typeSelect{
        margin-left: 10px;
    }
    .edited label,button{
        margin-left: 10px;
    }
    .editsave{
        background-color: green; border: none; color: #FFF; width: 60px; height: 25px; border-radius: 5px;
    }
    .editcancel{
        background-color: red; border: none; color: #FFF; width: 60px; height: 25px; border-radius: 5px;
    }
</style>