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
                        <tr class="detail" @click="productaccount" v-for="(product, index) in productList" :key="index">
                            <td v-text="product.id"></td>
                            <td><img style="height: 65px; widtg: 40px;" :src="product.picture" alt=""></td>
                            <td v-text="product.name"></td>
                            <td v-text="product.selling_price"></td>
                            <td v-text="product.unit"></td>
                            <td v-text="product.type "></td>
                            <td v-text="product.amount"></td>
                            <td><img class="edit-data" @click="editProduct(index)" src="../../public/image/pen.svg" alt=""></td>
                            <td><img class="delete-data" @click="confirmDelete(index)" src="../../public/image/delete.svg" alt=""></td>
                        </tr>
                    </table>
                    <div v-if="editedProduct">
                        <div class="EidtProduct">
                        <h1>Edit Product</h1>
                        <p>Product code*</p>
                        <input type="number"  v-model="editedProduct.id">
                        <p>Name*</p>
                        <input type="text" v-model="editedProduct.name">
                        <p>Description*</p>
                        <input type="text" v-model="editedProduct.description">
                        <p>Cost Price*</p>
                        <input type="number" v-model="editedProduct.buying_price">
                        <p>Price*</p>
                        <input type="number" v-model="editedProduct.selling_price">
                        <p>Quantity*</p>
                        <input type="number" v-model="editedProduct.amount">
                        <div style="display: flex; justify-content: space-around;">
                            <p>Unit*</p> 
                            <p>Product Type*</p>
                        </div>
                        <div style="display: flex;">
                            <select class="unitSelect" v-model="editedProduct.unit">
                                <option value="pack">Pack</option>
                                <option value="piece">Piece</option>
                                <option value="box">Box</option>
                            </select>
                            <select class="typeSelect" v-model="editedProduct.type">
                                <option value="vegetables">Vegetables</option>
                                <option value="fruits">Fruits</option>
                                <option value="water">Water</option>
                            </select>
                        </div>
                        <div class="image-data" :style="{backgroundImage: 'url(' + backgroundImageUrl  + ')'}">
                            <img class="clickupload" @click="uploadimage" src="../../public/image/upload.svg" alt="">
                        </div>  
                        <div class="low-create">
                            <p>Upload ภาพขนาด 395*296</p>
                                <button class="editcancel" @click="cancelEdit">Cancel</button>
                                <button class="editsave" @click="saveEdit">Save</button>
                        </div>
                        </div>
                        <div class="show-image-page" v-show="selectedImage">
                            <div class="close-show"><button @click="closeshow">Close</button></div>
                             <div class="image-now">
                            <img v-for="imagesrc in urlimage" :key="imagesrc.id_img" :src="imagesrc.url" @click="imageshow(imagesrc.url, imagesrc.id_img)" alt=""/>
                        </div>
                    </div>
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
            products: [],
            selectedImage: false,
            backgroundImageUrl: '', // เพิ่มตัวแปรเก็บ URL ของภาพที่เลือก
            editedProduct: null,
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
        uploadimage() {
            this.selectedImage = true; 
        },
        closeshow(){
            this.selectedImage = false;
        },
        imageshow(url,id_img) {
            console.log(url)
            console.log(id_img)
            console.log(this)
            this.selectedImage = id_img;
            this.backgroundImageUrl = url; // เก็บ URL ของภาพที่เลือก
        },
        editProduct(index) {
            // Set editedProduct to a copy of the product data
            this.editedProduct = { ...this.productList[index] };
        },
        cancelEdit() {
            this.editedProduct = null;
        },
        saveEdit() {     
            const url = `http://localhost:8080/product/`+ this.editedProduct.id;
             // ส่งข้อมูลผ่าน PUT request ไปยังเซิร์ฟเวอร์
            axios.put(url, this.editedProduct)
            .then(response => {
                // การจัดการเมื่อรับข้อมูลเรียบร้อย
                console.log('Product data updated successfully:', response.data);
                // รีเซ็ต editedProduct เป็นค่า null เพื่อซ่อนแบบฟอร์มแก้ไข
                 this.editedProduct = null;
            })
            .catch(error => {
                // การจัดการเมื่อเกิดข้อผิดพลาด
                console.error('Error updating product data:', error);
            });
        },
    },
    mounted() {
        this.getProduct();
        axios
            .get("http://localhost:8080/api/pictures")
            .then((response) => {
                this.imageUrl = response.data;
                this.urlimage = this.imageUrl;
                console.log(this.urlimage);
                console.log(this.urlimage[0].url);
            })
            .catch((error) => {
                console.error("API error:", error);
            }); 
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
    .EidtProduct{
        margin-left: 35%;
        margin-top: -35%;
        position: absolute;
        background: #FFF;
        border-radius: 30px;
        background: #FFF;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
        width: 400px;
        height: 800px;
    }
    .EidtProduct h1{
      color: #000;
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;  
      font-size: 20px;
      padding: 10px;  
    }
    .EidtProduct p{ 
      color: #000;
      margin-left: 50px;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 15px;
    }
    .EidtProduct input{
      border-radius: 3px;
      border: 1px solid #C1C1C1;
      background: #FFF;
      width: 315px;
      height: 27px;
      margin-left: 50px;
      margin-bottom: 20px;
    }
    .edit-data,.delete-data{
        cursor: pointer;
    }
    .editsave{
        cursor: pointer;
        background-color: green; 
        border: none; color: #FFF; 
        width: 100px; 
        height: 30px; 
        border-radius: 5px;
        margin-left: 50px;
    }
    .editcancel{
        cursor: pointer;
        background-color: red;
        border: none;
        color: #FFF;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        margin-left: 30px;
    }
    .show-image-page{
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: #FFF;
      border: 1px solid #c1c1c1;
      margin-top: -30%;
      margin-left: 10%;
      width: 1000px;
      height: 500px;
      padding: 10px;
    }
</style>