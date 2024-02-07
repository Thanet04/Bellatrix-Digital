<template>
 <div>
    <div class="top-description">
      <p class="text-product">Product list</p>
      <div class="right-top-description">
        <button class="transection" @click="goTransection">Transection</button>
        <button class="create" @click="createProduct">Create</button>
        <input type="text" class="search" placeholder="Search">
      </div>
      </div>           
      <div v-if="createdProduct">
        <div class="add-product">
          <h1>Add new Product</h1>
          <p>Product code*</p>
          <input type="text"  v-model="id">
          <p>Name*</p>
          <input type="text" v-model="name">
          <p>Description*</p>
          <input type="text" v-model="description">
          <p>Cost Price*</p>
          <input type="number" v-model="buying_price">
          <p>Price*</p>
          <input type="number" v-model="selling_price">
          <p>Quantity*</p>
          <input type="number" v-model="amount">
          <div style="display: flex; justify-content: space-around;">
            <p>Unit*</p> 
            <p>Product Type*</p>
          </div>
          <div style="display: flex;">
              <select class="unitSelect" v-model="unit">
                <option value="pack">Pack</option>
                <option value="piece">Piece</option>
                <option value="box">Box</option>
              </select>
              <select class="typeSelect" v-model="type">
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
            <button class="cancel" @click="cancelproduct">Cancel</button>
            <button class="add" @click="addProduct">Add</button>
          </div>
        </div>
        <div class="show-image" v-show="selectedImage">
            <div class="close-show"><button @click="closeshow">Close</button></div>
            <div class="image-now">
              <img v-for="imagesrc in urlimage" :key="imagesrc.id_img" :src="imagesrc.url" @click="imageshow(imagesrc.url, imagesrc.id_img)" alt=""/>
            </div>
          </div>
      </div>
 </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      createdProduct: null,
      products: [],
      urlimage: [],
      selectedImage: false,
      backgroundImageUrl: '', // เพิ่มตัวแปรเก็บ URL ของภาพที่เลือก

    };
  },
  methods: {
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
  createProduct() {
    this.createdProduct = {
      name: '',
      picture: '',
      description: '',
      buying_price: '',
      selling_price: '',
      amount: '',
      unit: '',
      type: '',
    };
  },
  cancelproduct() {
    this.createdProduct = null;
  },
  addProduct() {
    const apiUrl = 'http://localhost:8080/product';
    const newProduct = {
      id: this.id,
      name: this.name,
      description: this.description,
      buying_price: this.buying_price,
      selling_price: this.selling_price,
      amount: this.amount,
      unit: this.unit,
      type: this.type,
      picture: this.backgroundImageUrl,
    };
    axios.post(apiUrl, newProduct)
      .then(response => {
      console.log('Product added successfully:', response.data);

      // ปิดส่วนเพิ่ม
      this.createdProduct = null;
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
    },
    goTransection() {
      this.$router.push({ name: 'Transection' });
    },
    
  },
  mounted() {
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
};
</script>

<style>
 .top-description{
        background: #F6F6F6;
        display: flex;
        justify-content: space-between;
        height: 52px;
        align-items: center;
        margin-bottom: 20px;
    }
    .text-product{
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Roboto;
        font-size: 20px;
        margin-left: 20px;
    }
    .create{
        cursor: pointer;
        border-radius: 3px;
        border: none;
        background: #4E8844;
        padding: 5px 10px 5px 10px;
        color: #FFF;
        margin-right: 30px;
    }
    .transection{
        cursor: pointer;
        border-radius: 3px;
        background: #8684E2;
        border: none;
        padding: 5px 10px 5px 10px;
        margin-right: 30px;
        color: #FFF;
    }
    .add-product{
      margin-left: 35%;
      margin-top: -10%;
      position: absolute;
      background: #FFF;
      border-radius: 30px;
      background: #FFF;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
      width: 400px;
      height: 800px;
    }
    .add-product h1{
      color: #000;
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;  
      font-size: 20px;
      padding: 10px;  
    }
    .add-product p{ 
      color: #000;
      margin-left: 50px;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 15px;
    }
    .add-product input{
      border-radius: 3px;
      border: 1px solid #C1C1C1;
      background: #FFF;
      width: 315px;
      height: 27px;
      margin-left: 50px;
      margin-bottom: 20px;
    }
    .image-data{
      border: 3px solid #c1c1c1;
      background-color: #FFF;
      background-size:cover;
      border-style: dashed;
      margin-left: 50px;
      height: 115px;
      width: 315px;
    }
    .clickupload {
      cursor: pointer;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .low-create{
      margin-left: 50px;
    }
    .cancel{
      cursor: pointer;
      border-radius: 3px;
      background: #F91414;  
      border: none;
      color: #FFF;
      width: 131px;
      height: 33px;
    }
    .add{
      cursor: pointer;
      border-radius: 3px;
      background: #000;
      border: none;
      color: #FFF;
      width: 131px;
      height: 33px;
      margin: 25px;
    }
    .unitSelect{
      width: 152px;
      height: 27px;
      margin-left: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .typeSelect{
      width: 152px;
      height: 27px;
      margin-left: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .show-image{
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: #FFF;
      border: 1px solid #c1c1c1;
      margin-left: 10%;
      width: 1000px;
      height: 500px;
      padding: 10px;
    }
    .close-show{
      align-self: flex-end;
      margin-top: 10px;
      margin-right: 10px;
    }
    .close-show button{
      cursor: pointer;
      color: #FFF;
      background-color: #F91414;
      border: none;
      border-radius: 5px;
      height: 30px;
      width: 80px;
    }
    .image-now {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
  }
    .image-now img{
      cursor: pointer;
      width: auto; 
      height: 150px;
      margin-bottom: 20px;
    }
</style>