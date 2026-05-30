<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
const sideNavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Product', path: '/product' },
    { name: 'Order', path: '/order' },
    { name: 'Customer', path: '/customer' },
    { name: 'Setting', path: '/setting' },
];
</script>

<template>
    <main class="flex h-screen w-full flex-col overflow-hidden bg-neutral-900">
        <TopBar />
        <section class="flex flex-1 overflow-hidden">
            <slot />
        </section>
    </main>
</template>
