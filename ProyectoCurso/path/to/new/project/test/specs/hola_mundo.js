// describe('WebDriverIO-001', () => {
//     it('primera prueba', async () => {
//         await browser.url('https://demoqa.com/')
//         browser.maximizeWindow() 
//         browser.pause()

//         //Assert
//         await expect(browser).toHaveTitle('ToolsQA')
//     });


//     it('Segundo ejercecio toHaveURL', async () => {
//         await browser.url('https://demoqa.com/elements')
//         browser.maximizeWindow()
//         browser.pause(1500)

//         //Assert
//         await expect(browser).toHaveUrl('https://demoqa.com/elements') // dato coincide
//     });


//     it('Tercer ejercecio toHaveUrlContaining', async () => {
//         await browser.url('https://demoqa.com/elements')
//         browser.maximizeWindow()
//         browser.pause(1500)

//         //Assert
//         await expect(browser).toHaveUrlContaining('demoqa.com') // validamos que la url contiene una parte del texto
//     });

//     it('Cuarto ejercecio toHaveTitleContaining', async () => {
//         await browser.url('https://demoqa.com/elements')
//         browser.maximizeWindow()
//         browser.pause(1500)

//         //Assert
//         await expect(browser).toHaveTitleContaining('Tools') // validamos que el titulo contiene una parte del texto
//     });

//     it('Quinto ejercecio toHaveTitleContaining == Error', async () => {
//         await browser.url('https://demoqa.com/elements')
//         browser.maximizeWindow()
//         browser.pause(1500)

//         //Assert
//         await expect(browser).toHaveTitleContaining('Toolss') // validamos que el titulo contiene una parte del texto
//     });
// });


