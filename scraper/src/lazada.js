import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

export async function scrapeLazada(keyword) {
    console.log(`[Lazada] 準備搜尋關鍵字: ${keyword}`);
    
    const browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled'
        ]
    });

    try {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        console.log('[Lazada] 正在前往首頁...');
        await page.goto('https://www.lazada.com.my/', { waitUntil: 'networkidle2' });

        console.log('[Lazada] 抵達目標頁面，開始抓取資料！');
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        return [
            { name: `[Lazada] 測試商品 1 - ${keyword}`, price: 'RM 120' },
            { name: `[Lazada] 測試商品 2 - ${keyword}`, price: 'RM 180' }
        ];

    } catch (error) {
        console.error('[Lazada] 爬蟲發生錯誤:', error);
        return [];
    } finally {
        await browser.close();
    }
}
