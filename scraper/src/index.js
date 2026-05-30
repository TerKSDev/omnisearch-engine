import { scrapeShopee } from './shopee.js';
import { scrapeLazada } from './lazada.js';

async function main() {
    const keyword = 'iPhone 15'; // 測試關鍵字

    console.log(`=== OmniSearch Engine 爬蟲啟動 ===`);
    console.log(`目標搜尋: "${keyword}"\n`);

    // 同時啟動多個平台的爬蟲 (Parallel execution)
    // 這樣速度會快很多，如果怕被 ban 也可以改成循序執行 (await shopee... await lazada...)
    const [shopeeResults, lazadaResults] = await Promise.all([
        scrapeShopee(keyword),
        scrapeLazada(keyword)
    ]);

    console.log('\n=== 爬取結果總結 ===');
    const allResults = [...shopeeResults, ...lazadaResults];
    
    console.log(`共找到 ${allResults.length} 筆商品:`);
    console.log(allResults);
    
    // 未來您可以在這裡加上將 allResults 存入資料庫，
    // 或者透過 API 打回給 Laravel 後端的程式碼
}

main();
