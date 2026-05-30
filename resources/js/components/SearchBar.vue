<script setup lang="ts">
import { Search } from '@lucide/vue';
</script>

<template>
    <div
        class="group flex h-9 items-center gap-1 rounded-xl border border-transparent bg-neutral-800 px-4 transition-all duration-300 focus-within:scale-105 focus-within:border-indigo-500 focus-within:bg-neutral-900 focus-within:ring-2 focus-within:ring-indigo-500/20"
    >
        <Search class="text-zinc-300" :size="14" />
        <input
            class="min-w-64 bg-transparent p-2 py-1 text-sm text-zinc-300 outline-none placeholder:text-zinc-500"
            placeholder="Search the product you want..."
        />
    </div>
</template>
