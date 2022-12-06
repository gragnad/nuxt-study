<template>
    <div>
        <h1>product detail page</h1>

        <div>
            {{product}}
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
        console.log(params.id);

        const response = await insAxios.getProducts('/api/products', params.id);
        
        const product = response.data;

        return { product }
    }
}
</script>

<style>

</style>