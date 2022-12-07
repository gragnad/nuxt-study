<template>
  <div class="app">
    <main>

        <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
        
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

        <div class="cart-wrapper">
          <button class="btn" @click="moveToCartPage">Go to Cart</button>
        </div>
    </main>
  </div>
</template>

<script>
import insAxios from "../api/index"
import SearchInput from "../components/SerchInput.vue"

export default {
  components: { SearchInput },
  data() {
        return {
            products: [],
            searchKeyword: '',
        };
    },
  async created() {
    const response = await insAxios.getProducts('/api/products', null);
    const products = [];
    if(response.data !== undefined) {
        response.data.products.forEach(item => {
            item.imageUrl = item.imageUrl + '?random=' + Math.random();
            products.push(item);
        });
    }
    this.products = products;
  },
  methods: {
    moveToDetailPage(id) {
      console.log(id);
      this.$router.push('detail/' + id);
    },

    updateSearchKeyword(keyword) {
      this.searchKeyword = keyword;
    },

    async searchProducts() {
      const params = {'keyword': this.searchKeyword};
      console.log(params);
      const response = await insAxios.getQuery('/api/products', params);
      console.log('search keyword res : ' + response.data);
    },

    moveToCartPage() {
      this.$router.push('/cart');
    }
  }
}
</script>



