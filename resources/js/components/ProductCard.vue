<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ChevronRight } from '@lucide/vue';
</script>

<template>
    <Link
        href="#"
        class="group flex flex-col gap-1 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-500/20"
    >
        <div
            class="aspect-video w-full overflow-hidden border-b border-neutral-700"
        >
            <img
                src="https://images.unsplash.com/photo-1778344396688-24d3e8a2a23b?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                alt="product image"
            />
        </div>
        <div class="flex min-w-0 flex-1 flex-col gap-5 p-3">
            <div class="flex flex-col items-start gap-1.5">
                <h1
                    class="line-clamp-2 text-base font-semibold leading-tight tracking-tight text-neutral-300 group-hover:text-white"
                >
                    Product Name
                </h1>
                <div class="flex items-center gap-2 text-xs text-zinc-300">
                    Found In:
                    <span
                        class="rounded-full bg-zinc-700 px-2 py-1 text-[10px] leading-none font-medium text-neutral-300 shadow-inner"
                        >Shopee</span
                    >
                </div>
            </div>
            <div
                class="mt-auto flex items-center justify-between gap-4 text-xs text-neutral-400"
            >
                <p class="group-hover:text-indigo-400">RM 1234 - RM 5678</p>
                <div class="flex items-center gap-1 group-hover:text-white">
                    View Details<ChevronRight
                        :size="12"
                        class="transition-all duration-300 group-hover:translate-x-0.5"
                    />
                </div>
            </div>
        </div>
    </Link>
</template>
