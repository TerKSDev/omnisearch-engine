<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
import SideFilter from '@/components/SideFilter.vue';
import ProductCard from '@/components/ProductCard.vue';
</script>

<template>
    <Layout>
        <SideFilter />
        <section
            class="flex w-full flex-1 flex-col gap-6 overflow-y-auto p-8 text-white max-w-[1440px] mx-auto min-h-full scrollbar-hidden"
        >
            <h1
                class="flex h-fit items-center gap-2 text-sm leading-none font-medium text-zinc-300"
            >
                <div class="animate-pulse text-indigo-500">•</div>
                Found 12 Results
            </h1>
            <div class="xl:grid-cols-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
                <ProductCard v-for="product in 12" :key="product" />
            </div>
        </section>
    </Layout>
</template>
