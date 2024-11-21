const { test, chromium } = require( '@playwright/test' );

module.exports = {
  runPlaywrightTest: async function () {
    const browser = await chromium.launch( { headless: true } );
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      await page.goto( 'http://localhost:4000/kategori/kott-chark-och-fagel' );
      console.log( 'Page loaded' );

      // // await page.locator( 'text=Kyckling Hel Sverige' ).click();
      const heading = page.getByRole( 'heading', { name: 'Kyckling Hel Färsk Sverige' } );
      await heading.click();

      // // await page.locator( 'text=Kött, chark & fågel' ).click();
      // const link = page.getByRole( 'link', { name: 'Kött, chark & fågel' } );
      // await link.click();

      // // await page.locator( 'text=Fågel' ).click();
      // const link2 = page.getByRole( 'link', { name: 'Fågel' } );
      // await link2.click();

      // // await page.locator( 'text=Färsk fågel' ).click();
      // const link3 = page.getByRole( 'link', { name: 'Färsk fågel' } );
      // await link3.click();

      // await page.locator( 'button#>' ).click();

      // // await page.locator( 'text=Kyckling Hel Sverige' ).click();
      // const heading = page.getByRole( 'heading', { name: 'Kyckling Hel Färsk Sverige' } );
      // await heading.click();

      // // await page.locator( 'text=Frukt & Grönt' ).click();
      // const link4 = page.getByRole( 'link', { name: 'Kött, chark & fågel' } );
      // await link4.click();


      // await page.waitForSelector( 'a[href="/kategori/kott-chark-och-fagel"]', { timeout: 60000 } );
      // await page.waitForSelector( 'a[href="/kategori/kott-chark-och-fagel/fagel"]', { timeout: 60000 } );
      // await page.waitForSelector( 'a[href="/kategori/kott-chark-och-fagel/fagel/farsk-fagel"]', { timeout: 60000 } );


      // await page.waitForSelector( 'a[href="/kategori/kott-chark-och-fagel/fagel"]' );
      // await page.click( 'a[href="/kategori/kott-chark-och-fagel/fagel"]' );

      // const isVisible = await page.isVisible( 'a[href="/kategori/kott-chark-och-fagel/fagel"]' );
      // if ( !isVisible ) {
      //   console.error( 'Element not found: a[href="/kategori/kott-chark-och-fagel/fagel"]' );
      // }


      // await page.waitForSelector( 'a[href="/kategori/kott-chark-och-fagel/fagel/farsk-fagel"]' );
      // await page.click( 'a[href="/kategori/kott-chark-och-fagel/fagel/farsk-fagel"]' );
    
      // await page.locator( 'button#>' ).click();

    
      const title = await page.title();
      console.log( `Page title is: ${ title }` );
    } catch ( error ) {
      console.error( 'Error in Playwright test:', error );
    } finally {
      await browser.close();
    }
  },
};


// const { test, chromium } = require( '@playwright/test' );

// module.exports = {
//   runPlaywrightTest: async function () {
//     const browser = await chromium.launch( { headless: true } );
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     try {
//       console.log( 'Navigating to the page...' );
//       await page.goto( 'http://localhost:4000/kategori/kott-chark-och-fagel' );
//       await page.waitForLoadState( 'networkidle' );
//       console.log( 'Page http://localhost:4000/kategori/kott-chark-och-fagel loaded.' );

//       console.log( 'Checking if element is visible...' );
//       const isVisible = await page.isVisible( 'a[href="/kategori/kott-chark-och-fagel/fagel"]' );
//       if ( !isVisible ) {
//         console.error( 'Element not found: a[href="/kategori/kott-chark-och-fagel/fagel"]' );
//         return;
//       }

//       console.log( 'Clicking on Fågel link...' );
//       await page.click( 'a[href="/kategori/kott-chark-och-fagel/fagel"]' );

//       console.log( 'Waiting for next link...' );
//       await page.waitForSelector( 'a[href="/kategori/kott-chark-och-fagel/fagel/farsk-fagel"]', { timeout: 60000 } );
//       await page.click( 'a[href="/kategori/kott-chark-och-fagel/fagel/farsk-fagel"]' );

//       console.log( 'Performing further actions...' );
//       await page.locator( 'button#>' ).click();

//       const title = await page.title();
//       console.log( `Page title is: ${ title }` );
//     } catch ( error ) {
//       console.error( 'Error in Playwright test:', error );
//     } finally {
//       await browser.close();
//     }
//   },
// };
