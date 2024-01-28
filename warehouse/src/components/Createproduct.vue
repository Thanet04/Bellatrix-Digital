<template>
 <div>
    <div class="top-description">
      <p class="text-product">Product list</p>
      <div class="right-top-description">
        <button class="transection">Transection</button>
        <button class="create" @click="createProduct">Create</button>
        <input type="text" class="search" placeholder="Search">
      </div>
      </div>           
      <div v-if="createdProduct">
        <div class="add-product">
          <h1>Add new Product</h1>
          <p>Product code*</p>
          <input type="text">
          <p>Name*</p>
          <input type="text">
          <p>Description*</p>
          <input type="text">
          <p>Cost Price*</p>
          <input type="number">
          <p>Price*</p>
          <input type="number">
          <p>Quantity*</p>
          <input type="number">
          <div style="display: flex; justify-content: space-around;">
            <p>Unit*</p> 
            <p>Product Type*</p>
          </div>
          <div style="display: flex;">
              <select class="unitSelect">
                <option value="pack">Pack</option>
                <option value="piece">Piece</option>
                <option value="box">Box</option>
              </select>
              <select class="typeSelect">
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="water">Water</option>
              </select>
            </div>
          <div>
            <input type="file" @change="handleFileUpload" accept="image/*" style="width: 315px; height: 116px;;">
            <p>Upload ภาพขนาด 395*296</p>
          </div>
          <div class="low-create">
            <button class="cancel" @click="cancelproduct">Cancel</button>
            <button class="add" @click="addProduct">Add</button>
          </div>
        </div>
      </div>
 </div>
</template>

<script>
  
export default {
  data() {
    return {
          createdProduct: null, // เก็บข้อมูลผลิตภัณฑ์ที่สร้าง
          products: [], // เก็บข้อมูลผลิตภัณฑ์ทั้งหมด
          imageUrl: null,
      
        };
    },
    methods: {
    createProduct() {
      // จำลองการสร้างผลิตภัณฑ์
      const newProduct = {
        productCode:'',
        name: '',
        description: '',
        costprice:'',
        price:'',
        quantity:'',
        unit:'',
        producttype:'',
        imageUrl:'',
        // รายละเอียดอื่น ๆ ของผลิตภัณฑ์
      };

      // เพิ่มผลิตภัณฑ์ใหม่ในรายการผลิตภัณฑ์
      this.products.push(newProduct);

      // กำหนดค่าให้ createdProduct เพื่อแสดงผล
      this.createdProduct = newProduct;
    },
    cancelproduct(){
      this.createdProduct = null;
    },
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
        border-radius: 3px;
        border: none;
        background: #4E8844;
        padding: 5px 10px 5px 10px;
        color: #FFF;
        margin-right: 30px;
    }
    .transection{
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
    .low-create{
      margin-left: 50px;
    }
    .cancel{
      border-radius: 3px;
      background: #F91414;  
      border: none;
      color: #FFF;
      width: 131px;
      height: 33px;
    }
    .add{
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
</style>