module.exports = {
  runOrdinaryBuyerTest: async function () {
    const { chromium } = require( '@playwright/test' );
    const { expect } = await import( 'chai' );

    const browser = await chromium.launch( { headless: true } );
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      //Load the category page
      await page.goto( 'http://localhost:4000/kategori/kott-chark-och-fagel' );
      console.log( 'Page loaded: /kategori/kott-chark-och-fagel' );

      await page.getByRole( 'link', { name: 'Kött, chark & fågel' } ).locator( '..' ).getByRole( 'button' ).click();
      await page.getByRole( 'link', { name: 'Fågel', exact:true } ).click();


      // Go to the PP "Ankbröst Barbarie Fryst Frankrike"
      await page.getByLabel( 'Sortera:' ).selectOption( 'name-asc' ); 
      await page.getByText( 'Ankbröst Barbarie Fryst Frankrike' ).click();
      console.log( 'Clicked on "Ankbröst Barbarie Fryst Frankrike"' );

      // Verify the product details
      const productDetails = page.locator( 'div.product-details' );
      // if ( !( await productDetails.isVisible() ) ) {
      //   throw new Error( 'Product details are not visible.' );
      // }
      const heading = await productDetails.locator( 'h2' ).textContent();
      console.log( 'Heading found:', heading );
      expect( heading ).to.equal( 'Ankbröst Barbarie Fryst Frankrike' );

      const description = await productDetails.locator( 'p:has-text("Ingredienser")' ).textContent();
      console.log( 'Description found:', description );
      expect( description ).to.include( 'Fryst Ankbröst (100%)' );

      const imageSrc = await productDetails.locator( 'img' ).getAttribute( 'src' );
      expect( imageSrc ).to.equal( 'https://d2rfo6yapuixuu.cloudfront.net/h6d/h1f/8857373736990/02375801300009.jpg_master_axfood_400' );
      console.log( 'Product verification completed successfully.'  );


     // Go to the PP "Italiensk Olivmix"
      await page.getByRole( 'link', { name: 'Delikatesschark' } ).click();
      await page.getByRole( 'link', { name: 'Inläggningar'} ).click();
      await page.getByLabel( 'Sortera:' ).selectOption( 'compareprice-asc' ); 
      await page.getByText( 'Italiensk Olivmix' ).click();
      console.log( 'Clicked on "Italiensk Olivmix"' );

     // Go to the PP "Tomat Klass"
      await page.getByRole( 'link', { name: 'Frukt & Grönt' } ).click();
      await page.getByRole( 'link', { name: 'Grönsaker' } ).click();
      await page.getByRole( 'link', { name: 'Tomater' } ).click();
      await page.getByRole( 'heading', { name: 'Tomat Klass' } ).click();
      console.log( 'Clicked Tomater Klass' );
      

     // Go to "Mejeri" category and to the PP "Original"
      await page.getByRole( 'link', { name: 'Mejeri, ost & ägg' } ).click();
      await page.getByRole( 'link', { name: 'Ost', exact:true } ).click();
      await page.getByRole( 'link', { name: 'Färskost' } ).click();
      await page.getByRole( 'heading', { name: 'Original', exact:true } ).click();
      console.log( 'Clicked on Filadelphia "Original"' );

     // Go to the "Bröd" category >> PP "Källarfranska "
      await page.getByRole( 'link', { name: 'Bröd' } ).click();
      await page.getByLabel( 'Sortera:' ).selectOption( 'price-asc' ); 
      await page.getByRole( 'heading', { name: 'Källarfranska' } ).click();
      console.log( 'Clicked on "Källarfranska"' );

     // Go to the "Skafferi" category >> PP "Extra Virgin Olivolja"
      await page.getByRole( 'link', { name: 'Skafferi' } ).click();
      await page.getByRole( 'link', { name: 'Olja & vinäger' } ).click();
      await page.getByRole( 'link', { name: 'Olivolja', exact:true } ).click();
      await page.getByLabel( 'Sortera:' ).selectOption( 'name-asc' ); 
      await page.getByRole( 'heading', { name: 'Extra Virgin Olivolja', exact:true } ).click();
      console.log( 'Clicked on "Extra Virgin Olivolja"' );

      console.log( 'Shopping completed!' );
    } catch ( error ) {
      console.error( 'Error in Playwright test:', error );
    } finally {
      await browser.close();
    }
  },
};
