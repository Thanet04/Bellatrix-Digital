<template>
  <div>
      <Navber/> 
      <img class="imagehome" src="../../public/image/backgroudhome.svg" alt="">
      <div class="datatext">
        <h1>ระบบการจัดการสินค้าคืออะไร ?</h1>
        <p>{{text1}}
        </p>
        <h1>ระบบจัดการอัพเดทสินค้าแบบ Real Time</h1>
        <div class="imagebox" >
          <p>
            {{text2}}
        </p>
        <img src="../../public/image/box.png" alt="">
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name:'HomeView',
  data(){
    return{
      text1: 'ระบบการจัดการคลังสินค้า คือ ระบบซอฟต์แวร์ที่ช่วยเพิ่มความสะดวกสบายต่อผู้ใช้งานและเพิ่มประสิทธิภาพการจัดการคลังให้มีประสิทธิภาพมากยิ่งขึ้น โดยคนทั่วไปจะรู้จักในชื่อ “ระบบ WMS” (Warehouse Management System) หรือ ระบบบริหารจัดการคลังสินค้า ซึ่งระบบ WMS มี 3 ขั้นตอนที่เป็นหัวใจหลัก คือ 1.การรับสินค้า 2.การเก็บสินค้า และ 3.การเบิกสินค้า นอกจากนี้ ระบบ WMS จะช่วยในส่วนของการจัดการ Stock สินค้า การรับเข้าการย้ายและนำออกสินค้า การส่งออเดอร์ออกจากคลังสินค้า การเชื่อมต่อระหว่างระบบ Internal อื่นๆขององค์กร เช่น ระบบERPเพื่อช่วยให้องค์กรมีการจัดการคลังสินค้าที่เป็นระบบมากยิ่งขึ้นและช่วยเพิ่มขีดความสามารถในเชิงธุรกิจขององค์กรอีกด้วยครับ',
      text2: 'จัดการอัพเดทสินค้าที่คงเหลืออยู่แบบตลอดเวลาเพื่อให้คุณได้เตรียมพร้อมสำหรับขายตลอดเวลา'
    }
  },
}
</script>

<style>
  .imagehome{
    width: 100%;
  }
  .datatext{
    margin: 100px;
  }
  h1{
    color: #000;
    font-family: Roboto;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .datatext p{
    margin-top: 50px;
    margin-bottom: 100px ;
    color: #000;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .imagebox{
    display: flex;
    justify-content: space-around;
  }
</style>