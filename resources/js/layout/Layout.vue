<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
const sideNavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Product', path: '/product' },
    { name: 'Order', path: '/order' },
    { name: 'Customer', path: '/customer' },
    { name: 'Setting', path: '/setting' },
];
</script>

<template>
    <main class="flex min-h-screen w-full overflow-hidden">
        <aside
            class="flex h-screen flex-col gap-4 w-64 rounded-r border-r border-zinc-800 bg-neutral-900"
        >
            <h1 class="p-6 text-xl font-bold text-white">OmniSearch ERP</h1>
            <nav class="flex flex-col gap-1 text-white">
                <Link
                    v-for="item in sideNavItems"
                    v-bind:key="item.name"
                    :href="item.path"
                    class="text-sm text-zinc-300 transition hover:text-white"
                >
                    {{ item.name }}
                </Link>
            </nav>
        </aside>

        <section class="flex min-h-screen flex-1 overflow-y-auto p-8">
            <slot />
        </section>
    </main>
</template>
