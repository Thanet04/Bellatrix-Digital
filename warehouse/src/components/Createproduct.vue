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
          <input type="text">
          <p>Price*</p>
          <input type="text">
          <p>Quantity*</p>
          <input type="text">
          <div>
            <div>
              <p>Unit</p>
              
            </div>
          </div>
          <input type="image" src="" alt="">
          <p>Upload ภาพขนาด 395*296</p>
          <div>
            <button>cancel</button>
            <button>Add</button>
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
        };
    },
    methods: {
    createProduct() {
      // จำลองการสร้างผลิตภัณฑ์
      const newProduct = {
        name: 'New Product',
        // รายละเอียดอื่น ๆ ของผลิตภัณฑ์
      };

      // เพิ่มผลิตภัณฑ์ใหม่ในรายการผลิตภัณฑ์
      this.products.push(newProduct);

      // กำหนดค่าให้ createdProduct เพื่อแสดงผล
      this.createdProduct = newProduct;
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
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
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
    }
</style>