<template>
  <div class="app">
    <main>
      <div>
            <input type="text"/>
        </div>

        <div>
            <ul>
                <li v-for="product in products" :key="product.id" class="item flex"
                  @click="moveToDetailPage(product.id)">
                    {{product}}
                    <img class="product-image" :src="product.imageUrl" :alt="product.name">
                    <p>{{product.name}}</p>
                    <span>{{product.price}}</span>
                </li>
            </ul>
        </div>

    </main>
  </div>
</template>

<script>
import insAxios from "../api/index"

export default {
  components: {},
  data() {
        return {
            products: [],
        };
    },
  async created() {
    const response = await insAxios.getProducts('/api/products', null);
    const products = [];
    if(response.data !== undefined) {
        response.data.products.forEach(item => {
            products.push(item);
        });
    }
    this.products = products;
  },
  methods: {
    moveToDetailPage(id) {
      console.log(id);
      this.$router.push('detail/' + id);
    }
  }
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


