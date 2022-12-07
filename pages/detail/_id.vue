<template>
    <div>
        <h1>product detail page</h1>
        
        <div class="container">
            <div class="container">
                <img class="product-image" :src="product.imageUrl" :alt="product.name">

            </div>

            <dir class="side-panel">
                <p class="name">{{product.name}}</p>
                <p class="price">{{product.price}}</p>

                <button type="button" @click="addTocart">Add to Cart</button>
            </dir>
        </div>
    </div>
</template>

<script>
import insAxios from "../../api/index"

export default {
    created() {
        console.log(this.$route)
    },
    async asyncData({params}) {

        const response = await insAxios.getProducts('/api/products', params.id);
        
        const product = response.data;

        return { product }
    },
    methods: {
        addTocart() {
            this.$store.commit('addCartItem', this.product);

            this.$router.push('/cart');
        }
    },
}
</script>

<style>


</style>