<script setup>
import {defineProps} from 'vue'

defineProps({
    bg: {
        type:String,
        default: 'bg-gray-100'
    }
})
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <!-- The slot element is a placeholder inside a web component that you can fill 
        with your own markup, which lets you create separate DOM trees and present them together. -->
        <slot></slot>
    </div>
</template>