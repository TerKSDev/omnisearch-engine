<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Layout from '@/layout/BackendLayout.vue';

// 定義全管道聚合平台的基礎數據
const systemInfo = {
    name: 'OmniSearch Platform',
    version: 'v1.0.0',
    status: 'SYSTEM_READY',
    location: 'KUALA LUMPUR',
};
</script>

<template>
    <Layout>
        <Head title="Welcome to OmniSearch">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <main
            class="flex min-h-screen w-full flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]"
        >
            <div
                class="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0"
            >
                <main
                    class="animate-fade-in flex w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-lg lg:max-w-4xl lg:flex-row"
                >
                    <div
                        class="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-16 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                    >
                        <div
                            class="mb-6 flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="h-2 w-2 rounded-full bg-blue-500"
                                ></div>
                                <span
                                    class="text-sm font-bold tracking-tight"
                                    >{{ systemInfo.name }}</span
                                >
                            </div>
                            <span
                                class="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 dark:bg-zinc-800"
                            >
                                {{ systemInfo.version }}
                            </span>
                        </div>

                        <h1 class="mb-2 text-lg font-medium tracking-tight">
                            全管道數據聚合與庫存監控大腦
                        </h1>
                        <p class="mb-6 text-[#706f6c] dark:text-[#A1A09A]">
                            已成功串聯 Laravel 核心骨架與 Vue 3 (TypeScript)
                            前端。系統支援多平台數據清洗、異步排程監控以及嚴格的庫存防超賣鎖機制。
                        </p>

                        <div class="mb-8 space-y-3">
                            <div
                                class="rounded border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800/50 dark:bg-[#1e1e1d]"
                            >
                                <div
                                    class="mb-0.5 font-medium text-blue-600 dark:text-blue-400"
                                >
                                    ➔ 聚合比價引擎 (Search Aggregator)
                                </div>
                                <p
                                    class="text-xs text-zinc-500 dark:text-zinc-400"
                                >
                                    允許用戶一鍵檢索 Shopee、Lazada
                                    等主流電商平台，進行實時數據交叉比對與價格追蹤。
                                </p>
                            </div>

                            <div
                                class="rounded border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800/50 dark:bg-[#1e1e1d]"
                            >
                                <div
                                    class="mb-0.5 font-medium text-emerald-600 dark:text-emerald-400"
                                >
                                    ➔ 企業級實時庫存 (ERP Core)
                                </div>
                                <p
                                    class="text-xs text-zinc-500 dark:text-zinc-400"
                                >
                                    內建多型關聯資料表，精確記錄每一筆入庫、出庫與自動化爬蟲同步的異步流水日誌。
                                </p>
                            </div>
                        </div>

                        <div
                            class="flex items-center justify-between border-t border-zinc-100 pt-2 font-mono text-xs text-zinc-400 dark:border-zinc-800"
                        >
                            <div>
                                DB_STATUS:
                                <span class="text-emerald-500">CONNECTED</span>
                            </div>
                            <div>LOC: {{ systemInfo.location }}</div>
                        </div>
                    </div>

                    <div
                        class="relative -mb-px aspect-[335/364] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]"
                    >
                        <slot v-if="true">
                            <div
                                class="pointer-events-none absolute inset-0 flex items-center justify-center text-7xl font-bold text-[#f53003]/10 selection:bg-transparent dark:text-[#FF4433]/5"
                            >
                                ERP
                            </div>
                        </slot>

                        <div
                            class="absolute right-4 bottom-4 font-mono text-[10px] text-[#F53003]/40 dark:text-[#FF4433]/40"
                        >
                            POWERED BY INERTIA
                        </div>
                    </div>
                </main>
            </div>
        </main>
    </Layout>
</template>
