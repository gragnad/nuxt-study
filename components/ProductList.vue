<template>
    <div class="app">
        <h1>ProductList</h1>

        <div>
            <input type="text"/>
        </div>

        <div>
            <ul>
                <li v-for="product in products" :key="product.id" class="item flex">
                    {{product}}
                    <img class="product-image" :src="product.imageUrl" :alt="product.name">
                    <p>{{product.name}}</p>
                    <p>{{product.price}}</p>
                </li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
        };
    },
    async created() {
    const response = await axios.get('/api/products');
    const products = [];
    if(response.data !== undefined) {
        response.data.products.forEach(item => {
            products.push(item);
        });
    }
    this.products = products;
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}

.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>