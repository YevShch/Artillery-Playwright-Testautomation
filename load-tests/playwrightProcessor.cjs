module.exports = {
  runPlaywrightTest: async function () {
    const { chromium } = require( '@playwright/test' );
    
    const { expect } = await import( 'chai' );

    const browser = await chromium.launch( { headless: true } );
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      // Step 1: Load the category page
      await page.goto( 'http://localhost:4000/kategori/kott-chark-och-fagel' );
      console.log( 'Page loaded: /kategori/kott-chark-och-fagel' );

      // Step 2: Click on the link with the text "Kyckling Hel Färsk Sverige"
      await page.locator( 'text=Kyckling Hel Färsk Sverige' ).click();
      console.log( 'Clicked on "Kyckling Hel Färsk Sverige" link.' );

      // // Step 3: Verify the product details
      const productDetails = page.locator( 'div.product-details' );
      // if ( !( await productDetails.isVisible() ) ) {
      //   throw new Error( 'Product details are not visible.' );
      // }

      // Verify that the heading exists
      const heading = await productDetails.locator( 'h2' ).textContent();
      console.log( 'Heading found:', heading );
      expect( heading ).to.equal( 'Kyckling Hel Färsk Sverige' );

      // Verify the description
      const description = await productDetails.locator( 'p:has-text("Beskrivning")' ).textContent();
      console.log( 'Description found:', description );
      expect( description ).to.include( 'Färsk hel kyckling från Sverige' );

      // Verify the image source
      const imageSrc = await productDetails.locator( 'img' ).getAttribute( 'src' );
      console.log( 'Image source:', imageSrc );
      expect( imageSrc ).to.equal( 'https://assets.axfood.se/image/upload/f_auto,t_500/02359715300003_C1L1_s02' );

    
      //Go to the Bröd & kakor category
      await page.locator( 'nav div:has(a:text("Bröd & Kakor"))' ).click();
      console.log( 'Clicked on "Bröd & Kakor".' );


      //Visit Product page for Vetekaka 24-pack
     const heading2 = page.getByRole( 'heading', { name: 'Vetekaka 24-pack' } );
      await heading2.click();
      console.log( 'Clicked on "Vetekaka 24-pack" heading.' );
      
      // Verify that the heading for Vetekaka exists
      const headingVetekaka = await productDetails.locator( 'h2' ).textContent();
      console.log( 'Heading found:', headingVetekaka );
      expect( headingVetekaka ).to.equal( 'Vetekaka 24-pack' );
      
      const productDetails2 = page.locator( 'div:has-text("Vetekaka 24-pack")' );

      const isVisible = await productDetails2.isVisible();
      console.log( 'Is product details visible:', isVisible );
      // expect( isVisible ).to.be.true; 


      // Click on Knäckebröd & Skorpor
      await page.locator( 'nav a:text("Knäckebröd & Skorpor")' ).click();
      console.log( 'Clicked on "Knäckebröd & Skorpor".' );
     

      //Visit Product page for Kardemumma Skorpor
      const heading3 = page.getByRole( 'heading', { name: 'Kardemumma Skorpor' } );
      await heading3.click();
      console.log( 'Clicked on "Kardemumma Skorpor.' );
      // Verify that the heading exists
      const headingKardemumma = await productDetails.locator( 'h2' ).textContent();
      console.log( 'Heading found:', headingKardemumma );
      expect( headingKardemumma ).to.equal( 'Kardemumma Skorpor' );


    } catch ( error ) {
      console.error( 'Error in Playwright test:', error );
    } finally {
      await browser.close();
    }
  },
};
