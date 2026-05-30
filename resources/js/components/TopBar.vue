<script setup lang="ts">
import { ShoppingCart, Menu } from '@lucide/vue';
import SearchBar from './SearchBar.vue';
</script>

<template>
    <header
        class="sticky top-0 flex h-16 w-full items-center justify-between gap-6 border-b border-neutral-700 bg-neutral-900 px-8"
    >
        <div class="flex items-center gap-4">
            <Menu class="h-6 w-6 text-zinc-500 md:hidden" />
            <div class="flex items-center gap-2.5">
                <div
                    class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500"
                >
                    <ShoppingCart class="text-white" :size="18" />
                </div>
                <h1 class="text-xl font-bold tracking-tight text-white">
                    OmniSearch <span class="text-indigo-500">Engine</span>
                </h1>
            </div>
        </div>

        <SearchBar />
    </header>
</template>
