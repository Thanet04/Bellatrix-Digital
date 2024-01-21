<template>
  <Navber/>
  <div class="center-page">
        <div class="top-description">
            <p class="text-product">Product list</p>
            <div class="right-top-description">
                <button class="create">Create</button>
                <input type="text" class="search" placeholder="Search">
            </div>
        </div>
        <div class="title-product">
            <p>Product Code</p>
            <p>Images</p>
            <p>Name</p>
            <p>Price</p>
            <p>Unit</p>
            <p>Product Type</p>
            <p>Quantity</p>                  
        </div>
        <div class="description">
            <div>
                <ul>
                    <li style="list-style: none;" v-for="(item, index) in items" :key="index">
                        {{ item }}
                    </li>
                    <li style="list-style: none;" v-for="(image, index) in images" :key="index">
                        <img :src="image.png" :alt="image.alt">
                    </li>
                    <li style="list-style: none;" v-for="(name, index) in names" :key="index">
                        {{ name }}
                    </li>
                    <li style="list-style: none;" v-for="(price, index) in prices" :key="index">
                        {{ price }}
                    </li>
                    <li style="list-style: none;" v-for="(unit, index) in units" :key="index">
                        {{ unit }}
                    </li>
                    <li style="list-style: none;" v-for="(producttype, index) in type" :key="index">
                        {{ producttype }}
                    </li>
                    <li style="list-style: none;" v-for="(Quantity, index) in quantity" :key="index">
                        {{ Quantity }}
                    </li>
                </ul>
            </div>
            <div class="edit-delete">
                <img src="../../public/image/pen.svg " alt="image.alt" >
                <img src="../../public/image/delete.svg" alt="image.alt" >
            </div>            
        </div>
    </div>
</template>

<script>

import imagesearch from '../../public/image/search1.svg'

export default {
    data() {
    return {
            searchimage:imagesearch ,
            items: ["E0123456", "E0123457", "E01234568", "E01234569", "E01234570"],
            images: [
            { png: "../../public/image/image-orage.png", alt: "Image 1" },
            { png: "../../public/image/image-orage.png", alt: "Image 2" },
            { png: "../../public/image/image-orage.png", alt: "Image 3" },
            { png: "../../public/image/image-orage.png", alt: "Image 4" },
            { png: "../../public/image/image-orage.png", alt: "Image 5" },
            ],
            names: ["Califonia Tomato","Califonia Tomato","Califonia Tomato","Califonia Tomato","Califonia Tomato"],
            prices: ["1$","11$","22.5$","32$","35$"],
            units: ["Piece","Pack","Box-24","Box-36","Box-40"],
            type: ["Vegetable","Vegetable","Vegetable","Vegetable","Vegetable"],
            quantity: ["36","25","34","5","2"],
            mage: [
            { src: "../../public/image/pen.svg", alt: "Pen Image" },
            { src: "../../public/image/pen.svg", alt: "Pen Image" },
            { src: "../../public/image/pen.svg", alt: "Pen Image" },
            { src: "../../public/image/pen.svg", alt: "Pen Image" },
            { src: "../../public/image/pen.svg", alt: "Pen Image" },           
            ],
            ment:[              
            { src: "../../public/image/delete.svg", alt: "Delete Image" },
            { src: "../../public/image/delete.svg", alt: "Delete Image" },
            { src: "../../public/image/delete.svg", alt: "Delete Image" },
            { src: "../../public/image/delete.svg", alt: "Delete Image" },           
            ]
        };
    }
};
</script>

<style>

    .body{
        background: #E5EAF9;
    }
    .top-description{
        background: #F6F6F6;
        display: flex;
        justify-content: space-between;
        height: 52px;
        align-items: center;
    }
    .text-product{
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        margin-left: 20px;
    }
    .create{
        border-radius: 3px;
        background: #4E8844;
        padding: 5px 10px 5px 10px;
        color: #FFF;
        margin-right: 30px;
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
    .title-product{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F9E3E3;
        padding: 5px 69px;
        margin-top: 30px;
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
    }
    .description{
        display: flex;
        justify-content: space-between;
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
    }
    .edit-delete{
        display: flex; 
        height: 20PX;
    }
    
</style>