<script setup lang="ts">
import { SlidersHorizontal } from '@lucide/vue';
import { ref } from 'vue';

const selectedPlatforms = ref<string[]>(['shopee']); // 預設選擇 Shopee
</script>

<template>
    <section
        class="hidden md:flex h-full w-64 flex-col border-r border-neutral-800 bg-neutral-900 overflow-hidden"
    >
        <div class="flex items-center justify-between p-4 px-5">
            <h1 class="text-base font-semibold text-white flex items-center gap-2">
                <SlidersHorizontal :size="16" class="text-indigo-500" />
                Filters
            </h1>
            <button class="text-zinc-400 hover:text-white text-xs hover:underline underline-offset-4 cursor-pointer transition-all duration-300">
                Clear All
            </button>
        </div>
        
        <div class="h-px bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 mx-5" />
        
        <div class="flex-1 overflow-y-auto overflow-x-hidden p-5">
            <div class="flex flex-col gap-4">
                <h2 class="font-medium text-xs text-zinc-100">Platform</h2>
                
                <!-- 選項列表 -->
                <div class="flex flex-col gap-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" value="shopee" v-model="selectedPlatforms" class="w-4 h-4 rounded accent-indigo-500 cursor-pointer bg-neutral-800 border-neutral-600 focus:ring-indigo-500/20" />
                        <span class="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Shopee</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" value="lazada" v-model="selectedPlatforms" class="w-4 h-4 rounded accent-indigo-500 cursor-pointer bg-neutral-800 border-neutral-600 focus:ring-indigo-500/20" />
                        <span class="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Lazada</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" value="tiktok" v-model="selectedPlatforms" class="w-4 h-4 rounded accent-indigo-500 cursor-pointer bg-neutral-800 border-neutral-600 focus:ring-indigo-500/20" />
                        <span class="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">TikTok</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" value="playstore" v-model="selectedPlatforms" class="w-4 h-4 rounded accent-indigo-500 cursor-pointer bg-neutral-800 border-neutral-600 focus:ring-indigo-500/20" />
                        <span class="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Play Store</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" value="appstore" v-model="selectedPlatforms" class="w-4 h-4 rounded accent-indigo-500 cursor-pointer bg-neutral-800 border-neutral-600 focus:ring-indigo-500/20" />
                        <span class="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">App Store</span>
                    </label>
                </div>
            </div>
        </div>
    </section>
</template>
