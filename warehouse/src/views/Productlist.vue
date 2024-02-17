<template>
  <div>
    <Navber />
    <div class="center-page">
      <Createproduct />
      <input
        type="text"
        v-model="searchQuery"
        class="search-product"
        placeholder="Search"
      />
      <div class="title-colum">
        <table>
          <tr class="title">
            <th>Product ID</th>
            <th>Images</th>
            <th>Name</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Product Type</th>
            <th>Quantity</th>
            <th>Transfer</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr
            class="detail"
            v-for="(product, index) in filteredProducts"
            :key="product.id"
          >
            <td v-text="product.id"></td>
            <td>
              <img
                style="height: 65px; widtg: 40px"
                @click="productaccount(product.id)"
                :src="product.picture"
                alt=""
              />
            </td>
            <td v-text="product.name"></td>
            <td v-text="product.selling_price"></td>
            <td v-text="product.unit"></td>
            <td v-text="product.type"></td>
            <td v-text="product.amount"></td>
            <td class="transfer">
              <button
                @click="
                  transferproduct(product.amount, product.unit, product.name,product.id)
                "
              >
                Transfer
              </button>
            </td>
            <td>
              <img
                class="edit-data"
                @click="editProduct(index)"
                src="../../public/image/pen.svg"
                alt=""
              />
            </td>
            <td>
              <img
                class="delete-data"
                @click="confirmDelete(index)"
                src="../../public/image/delete.svg"
                alt=""
              />
            </td>
          </tr>
        </table>
        <div v-if="editedProduct">
          <div class="EidtProduct">
            <h1>Edit Product</h1>
            <p>Product code*</p>
            <input type="number" v-model="editedProduct.id" />
            <p>Name*</p>
            <input type="text" v-model="editedProduct.name" />
            <p>Description*</p>
            <input type="text" v-model="editedProduct.description" />
            <p>Cost Price*</p>
            <input type="number" v-model="editedProduct.buying_price" />
            <p>Price*</p>
            <input type="number" v-model="editedProduct.selling_price" />
            <p>Quantity*</p>
            <input type="number" v-model="editedProduct.amount" />
            <div style="display: flex; justify-content: space-around">
              <p>Unit*</p>
              <p>Product Type*</p>
            </div>
            <div style="display: flex">
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
            <div
              class="image-data"
              :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
            >
              <img
                class="clickupload"
                @click="uploadimage"
                src="../../public/image/upload.svg"
                alt=""
              />
            </div>
            <div class="low-create">
              <p>Upload ภาพขนาด 395*296</p>
              <button class="editcancel" @click="cancelEdit">Cancel</button>
              <button class="editsave" @click="saveEdit">Save</button>
            </div>
          </div>
          <div class="show-image-page" v-show="selectedImage">
            <div class="close-show">
              <button @click="closeshow">Close</button>
            </div>
            <div class="image-now">
              <img
                v-for="imagesrc in urlimage"
                :key="imagesrc.id_img"
                :src="imagesrc.url"
                @click="imageshow(imagesrc.url, imagesrc.id_img)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="low-description">
        <p>Show</p>
        <input
          style="
            border-radius: 3px;
            width: 50px;
            height: 30px;
            border: none;
            text-align: center;
          "
          type="number"
          value="12"
          required="required"
        />
        <p>entries</p>
        <p>Showing 9 of entries</p>
      </div>
    </div>
  </div>
</template>

<script>
import Createproduct from "@/components/Createproduct.vue";
import axios from "axios";

export default {
  data() {
    return {
      productList: [],
      products: [],
      productFilter: [],
      productNew: [],
      model: {
        newProduct: {
                      name: "food",
                      type: "vegetables",
                      picture:
                        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      unit: "pack",
                      description: "my i fater u",
                      amount: 10,
                      buying_price: 10.0,
                      selling_price: 10.0,
                    },
                oldProduct: {
                      name: "food",
                      type: "vegetables",
                      picture:
                        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      unit: "box",
                      description: "my i fater u",
                      amount: 10,
                      buying_price: 10.0,
                      selling_price: 10.0,
                    },
        newProduct1: {
                      name: "food",
                      type: "vegetables",
                      picture:
                        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      unit: "piece",
                      description: "my i fater u",
                      amount: 10,
                      buying_price: 10.0,
                      selling_price: 10.0,
                    },
                oldProduct1: {
                      name: "food",
                      type: "vegetables",
                      picture:
                        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      unit: "pack",
                      description: "my i fater u",
                      amount: 10,
                      buying_price: 10.0,
                      selling_price: 10.0,
                    },
      },
      selectedImage: false,
      backgroundImageUrl: "", // เพิ่มตัวแปรเก็บ URL ของภาพที่เลือก
      editedProduct: null,
      searchQuery: "",
    };
  },
  methods: {
    getProduct() {
      const url = "http://localhost:8080/products";
      axios
        .get(url)
        .then((res) => {
          this.productList = res.data; // อัปเดต productList ด้วยข้อมูลที่ได้รับจาก API
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    },
    confirmDelete(index) {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );
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
          console.log("ลบสำเร็จ");
        })
        .catch((error) => {
          console.error("เกิดข้อผิดพลาดในการลบผลิตภัณฑ์:", error);
        });
    },
    uploadimage() {
      this.selectedImage = true;
    },
    closeshow() {
      this.selectedImage = false;
    },
    imageshow(url, id_img) {
      console.log(url);
      console.log(id_img);
      console.log(this);
      this.selectedImage = id_img;
      this.backgroundImageUrl = url; // เก็บ URL ของภาพที่เลือก
      this.editedProduct.picture = url;
    },
    editProduct(index) {
      this.editedProduct = { ...this.productList[index] };
    },
    cancelEdit() {
      this.editedProduct = null;
    },
    saveEdit() {
      const url = `http://localhost:8080/product/` + this.editedProduct.id;
      axios
        .put(url, this.editedProduct)
        .then((response) => {
          console.log("Product data updated successfully:", response.data);
          this.editedProduct = null;
        })
        .catch((error) => {
          // การจัดการเมื่อเกิดข้อผิดพลาด
          console.error("Error updating product data:", error);
        });
    },
    productaccount(id) {
      console.log("click");
      this.$router.push("/productaccount/" + id);
    },
    transferproduct(amount, unit, name,id) {
      console.log("click");
      if (amount <= 0) {
        alert("Product can not be transferred");
      } else {
        if (unit == "box") {
          
          
          axios.get("http://localhost:8080/products").then((res) => {
            this.productFilter = res.data.filter(
              (Product) => Product.name == name && Product.unit == "pack"
            );
            axios
            .get("http://localhost:8080/product/" + this.productFilter[0].id)
            .then((res) => {
              this.productNew = res.data;
              
              console.log(this.productNew.amount);
              
              axios.put("http://localhost:8080/product/" + id, this.model.oldProduct).then((res) => {
                      this.model.oldProduct = res.data;
                      this.model.oldProduct = {
                          name: this.productNew.name,
                          type: this.productNew.type,
                          picture:this.productNew.picture ,
                          unit: "box",
                          description: this.productNew.description,
                          amount: amount-1,
                          buying_price: this.productNew.buying_price,
                          selling_price: this.productNew.selling_price,
                        };
                    })




                axios.put(
                    "http://localhost:8080/product/" + this.productNew.id,
                    this.model.newProduct
                  )
                  .then((res) => {
                    this.model.newProduct = res.data;
                    this.model.newProduct = {
                      name: this.productNew.name,
                      type: this.productNew.type,
                      picture:this.productNew.picture ,
                      unit: "pack",
                      description: this.productNew.description,
                      amount: this.productNew.amount += 10,
                      buying_price: this.productNew.buying_price,
                      selling_price: this.productNew.selling_price,
                    };

                  console.log(this.productNew.amount);
                
                  })
                  .catch((error) => {
                    console.error("Error updating product:", error);

                  });
              });
          });
        } else if (unit == "pack") {
          axios.get("http://localhost:8080/products").then((res) => {
            this.productFilter = res.data.filter(
              (Product) => Product.name == name && Product.unit == "piece"
            );
            axios
            .get("http://localhost:8080/product/" + this.productFilter[0].id)
            .then((res) => {
              this.productNew = res.data;
              
              console.log(this.productNew.amount);
              
              axios.put("http://localhost:8080/product/" + id, this.model.oldProduct1).then((res) => {
                      this.model.oldProduct1 = res.data;
                      this.model.oldProduct1 = {
                          name: this.productNew.name,
                          type: this.productNew.type,
                          picture:this.productNew.picture ,
                          unit: "pack",
                          description: this.productNew.description,
                          amount: amount-1,
                          buying_price: this.productNew.buying_price,
                          selling_price: this.productNew.selling_price,
                        };
                    })

                axios.put(
                    "http://localhost:8080/product/" + this.productNew.id,
                    this.model.newProduct1
                  )
                  .then((res) => {
                    this.model.newProduct1 = res.data;
                    this.model.newProduct1 = {
                      name: this.productNew.name,
                      type: this.productNew.type,
                      picture:this.productNew.picture ,
                      unit: "piece",
                      description: this.productNew.description,
                      amount: this.productNew.amount += 10,
                      buying_price: this.productNew.buying_price,
                      selling_price: this.productNew.selling_price,
                    };

                  console.log(this.productNew.amount);
                
                  })
                  .catch((error) => {
                    console.error("Error updating product:", error);

                  });
              });
          });
       
        }
      }
    },
  },

  mounted() {
    this.productList.forEach((Product) => {
      axios.get("http://localhost:8080/products").then((res) => {
        this.productFilter.push({
          name: Product.name,
          unit: Product.unit,
          id: Product.id,
        });
      });
    });
    console.log(this.productFilter);



    

  
    

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
  computed: {
    filteredProducts() {
      return this.productList.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  components: { Createproduct },
};
</script>

<style>
.body {
  background: #e5eaf9;
}
.center-page {
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  margin: 100px;
  padding: 20px 50px 20px 50px;
}
.right-top-description button {
  padding-right: 50px;
}
.right-top-description {
  margin-right: 220px;
}
.search-product {
  position: absolute;
  right: 180px;
  top: 235px;
  padding: 5px 5px 5px 5px;
  padding-left: 30px;
  background: url("../../public/image/search1.svg") no-repeat left center;
  background-size: 15px;
}
table {
  border-collapse: collapse;
  width: 1230px;
}
.title {
  background: #f9e3e3;
  height: 30px;
}
th,
td {
  text-align: center;
  vertical-align: middle;
}
.detail {
  border-bottom: 2px solid #dacfcf;
  background: linear-gradient(0deg, #f6f2f2 0%, #f6f2f2 100%), #f6f2f2;
}
.low-description {
  display: flex;
  margin: 10px;
}
.low-description p {
  padding: 5px;
}
.EidtProduct {
  position: absolute;
  margin-left: 35%;
  top: 15%;
  position: absolute;
  background: #fff;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 800px;
}
.EidtProduct h1 {
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  padding: 10px;
  margin-top: 25px;
}
.EidtProduct p {
  color: #000;
  margin-left: 50px;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 15px;
}
.EidtProduct input {
  border-radius: 3px;
  border: 1px solid #c1c1c1;
  background: #fff;
  width: 315px;
  height: 27px;
  margin-left: 50px;
  margin-bottom: 20px;
}
.edit-data,
.delete-data {
  cursor: pointer;
}
.editsave {
  cursor: pointer;
  background-color: green;
  border: none;
  color: #fff;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin-left: 50px;
}
.editcancel {
  cursor: pointer;
  background-color: red;
  border: none;
  color: #fff;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin-left: 30px;
}
.show-image-page {
  position: absolute;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  border: 1px solid #c1c1c1;
  top: 300px;
  margin-left: 10%;
  width: 1000px;
  height: 500px;
  padding: 10px;
}
.transfer button {
  border: none;
  border-radius: 10px;
  height: 25px;
  width: 100px;
  background-color: #a5e5ff;
}
</style>
