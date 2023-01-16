describe('Template de WebDriverIO', () =>{
    
    // Variables globales
    let time = 2000

    it('test-template-001', async () => { 
        await browser.url('')
        await browser.maximizeWindow()
        await browser.pause()

        //Assert
        await expect(browser).toHaveTitle('')
    });
});