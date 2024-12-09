module.exports = {
  runOrdinaryBuyerTest: async function () {
    const { chromium } = await import( '@playwright/test' );
    const { expect } = await import( 'chai' );

    const logCustom = ( metric ) => {
      // Use Artillery to log metrics
      if ( global.artillery && global.artillery.logCustom ) {
        global.artillery.logCustom( metric );
      }
    };

    async function measureAction ( name, action ) {
      const start = Date.now();
      await action();
      const duration = Date.now() - start;
      console.log( `${ name } completed in ${ duration } ms` );
      logCustom( { name, duration } );
    }

    const browser = await chromium.launch( { headless: true } );
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      const globalTimeout = 180000; // 180 seconds
      page.setDefaultTimeout( globalTimeout );

      // Load the category page
      await measureAction( 'Load category page', async () => {
        await page.goto( 'http://localhost:4000/kategori/kott-chark-och-fagel' );
      } );

      await measureAction( 'Expand category menu', async () => {
        await page.getByRole( 'link', { name: 'Kött, chark & fågel' } )
          .locator( '..' )
          .getByRole( 'button' )
          .click();
      } );

      await measureAction( 'Navigate to Fågel', async () => {
        await page.getByRole( 'link', { name: 'Fågel', exact: true } ).click();
      } );

      
      await measureAction( 'Sort products', async () => {
        await page.getByLabel( 'Sortera:' ).selectOption( 'name-asc' );
      } );

      await measureAction( 'Click on Ankbröst Barbarie Fryst Frankrike', async () => {
        await page.getByText( 'Ankbröst Barbarie Fryst Frankrike' ).click();
      } );

      await measureAction( 'Verify product details', async () => {
        const productDetails = page.locator( 'div.product-details' );
        const heading = await productDetails.locator( 'h2' ).textContent();
        expect( heading ).to.equal( 'Ankbröst Barbarie Fryst Frankrike' );

        const description = await productDetails.locator( 'p:has-text("Ingredienser")' ).textContent();
        expect( description ).to.include( 'Fryst Ankbröst (100%)' );

        const imageSrc = await productDetails.locator( 'img' ).getAttribute( 'src' );
        expect( imageSrc ).to.equal(
          'https://d2rfo6yapuixuu.cloudfront.net/h6d/h1f/8857373736990/02375801300009.jpg_master_axfood_400'
        );
      } );

      // Go to the PP "Italiensk Olivmix"
      await measureAction( 'Navigate to Delikatesschark', async () => {
        await page.getByRole( 'link', { name: 'Delikatesschark' } ).click();
      } );

      await measureAction( 'Navigate to Inläggningar', async () => {
        await page.getByRole( 'link', { name: 'Inläggningar' } ).click();
      } );

      await measureAction( 'Sort products by compareprice', async () => {
        await page.getByLabel( 'Sortera:' ).selectOption( 'compareprice-asc' );
      } );

      await measureAction( 'Click on Italiensk Olivmix', async () => {
        await page.getByText( 'Italiensk Olivmix' ).click();
      } );

      // Go to "Mejeri" category and to the PP "Original"
      await measureAction( 'Go to Mejeri category', async () => {
        await page.getByRole( 'link', { name: 'Mejeri, ost & ägg' } ).click();
      } );
      await measureAction( 'Go to Ost category', async () => {
        await page.getByRole( 'link', { name: 'Ost', exact: true } ).click();
      } );
      await measureAction( 'Go to Färskost category', async () => {
        await page.getByRole( 'link', { name: 'Färskost' } ).click();
      } );
      await measureAction( 'Click on Original product', async () => {
        await page.getByRole( 'heading', { name: 'Original', exact: true } ).click();
      } );
    

      // Go to the "Bröd" category >> PP "Källarfranska"
      await measureAction( 'Go to Bröd category', async () => {
        await page.getByRole( 'link', { name: 'Bröd' } ).click();
      } );
      await measureAction( 'Sort products by price', async () => {
        await page.getByLabel( 'Sortera:' ).selectOption( 'price-asc' );
      } );
      await measureAction( 'Click on Källarfranska product', async () => {
        await page.getByRole( 'heading', { name: 'Källarfranska' } ).click();
      } );
      

      // Go to the "Skafferi" category >> PP "Extra Virgin Olivolja"
      await measureAction( 'Go to Skafferi category', async () => {
        await page.getByRole( 'link', { name: 'Skafferi' } ).click();
      } );
      await measureAction( 'Go to Olja & vinäger category', async () => {
        await page.getByRole( 'link', { name: 'Olja & vinäger' } ).click();
      } );
      await measureAction( 'Go to Olivolja category', async () => {
        await page.getByRole( 'link', { name: 'Olivolja', exact: true } ).click();
      } );
      await measureAction( 'Sort products by name', async () => {
        await page.getByLabel( 'Sortera:' ).selectOption( 'name-asc' );
      } );
      await measureAction( 'Click on Extra Virgin Olivolja product', async () => {
        await page.getByRole( 'heading', { name: 'Extra Virgin Olivolja', exact: true } ).click();
      } );
    

   
      console.log( 'Shopping completed!' );
    } catch ( error ) {
      console.error( 'Error in Playwright test:', error );
    } finally {
      await browser.close();
    }
  },
};
