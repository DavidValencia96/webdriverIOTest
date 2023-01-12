describe('WebDriverIO-001', () => {
    it('primera prueba', async () => {
        await browser.url('https://demoqa.com/')

        //Assert
        await expect(browser).toHaveTitle('ToolsQA')

    })
});

