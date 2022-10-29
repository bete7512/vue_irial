<template >
    <div class="h-screen container bg-slate-600 mx-auto flex justify-center items-center">
        <div class="inline-flex">
            Body {{props.bed}}
        </div>
    </div>
</template>
<script setup >
import { defineProps } from 'vue';
const props = defineProps({
    bed:{
        type:Number,
        required: true
    }
})
</script>
<style >
    
</style>