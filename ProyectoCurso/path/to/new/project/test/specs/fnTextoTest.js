describe('funciones de texto', () =>{

    // Variables globales
    let time = 2000

    it.only('demo -- AddValue', async () => { 
        await browser.url('https://demoqa.com/text-box')
        await browser.maximizeWindow()
        await browser.pause()

        //Assert
        await expect(browser).toHaveTitle('ToolsQA')

        // .addValue :: comprueba si en el input hay un texto y, le concatena el que le enviamos

        // Text Box --> input "Full NAME"
        await $('//*[@id="userName"]').addValue('juan');
        await $('//*[@id="userName"]').clearValue(); // limpiamos los campos
        await browser.pause(time)
        await $('//*[@id="userName"]').addValue('juan');
        await browser.pause(time)

        // Text Box --> input "eMail"
        await $('//*[@id="userEmail"]').addValue('juan@juan.com');
        await browser.pause(time)

        // Text Box --> input "currentAddress"
        await $('//*[@id="currentAddress"]').addValue('Direccion currentAddress XXXXXXXXX');
        await browser.pause(time)

        // setValue :: Obligamos a sobre-escribir un nuevo texto, estando y ya uno escrito
        // Text Box --> input "permanentAddress"
        await $('//*[@id="permanentAddress"]').addValue('Direccion permanentAddress XXXXXXXXX se va a sobreescribir este texto');
        await browser.pause(5000)
        await $('//*[@id="permanentAddress"]').setValue('Direccion permanentAddress XXXXXXXXX');
        await browser.pause(5000)

        // botón submit
        let btnSubmit = await $('//*[@id="submit"]');
        await btnSubmit.scrollIntoView() //baja con el scrool hacia la posición del evento 
        await browser.pause(time)
        await btnSubmit.click()
    });
});