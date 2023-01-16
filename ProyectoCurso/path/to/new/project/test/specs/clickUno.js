describe('Elementos tipo click', () =>{
    it.only('demo-1-click', async () => { 
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(2500)

        //Assert
        await expect(browser).toHaveTitle('ToolsQA')

        // XPath DIV card "Elements" pag principal 
        $('//*[@id="app"]/div/div/div[2]/div/div[1]').click()
        await browser.pause(1500)
        
        // Xpath element -> "text Box"
        $('//*[@id="item-0"]').click()
        await browser.pause(1500)

    });

    it('demo-2-doble-click', async () => { 
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(2000)

        //Assert title
        // await expect(browser).toHaveTitle('ToolsQA')

        // XPath DIV card "Elements" pag principal 
        let cardElement = await $("//div[@class='category-cards']/div[@class='card mt-4 top-card']/div[.='Elements']");
        await cardElement.scrollIntoView() // se mueve hacia el elemento con el scroll
        await cardElement.click()
        await browser.pause(2000)
        
        // Xpath element -> "text Box"
        let btnButtons= await $("//span[.='Buttons']");
        await btnButtons.scrollIntoView() // se mueve hacia el elemento con el scroll
        await btnButtons.click()
        await browser.pause(1000)


        // Xpath element -> text Box  -->  btn "Double click me"
        let btnDoubleClickMe = await $("//button[@id='doubleClickBtn']");
        await btnDoubleClickMe.scrollIntoView() // se mueve hacia el elemento con el scroll
        await btnDoubleClickMe.doubleClick()
        await browser.pause(4000)
        
        let textContaining = await $("//p[@id='doubleClickMessage']")
        //Assert text 
        await expect(textContaining).toHaveText('You have done a double click') // se valida que aparezca el texto XXXXXX
        await browser.pause(2000)

    });

    it('demo-3-IsClickable', async () => { 
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)


        // XPath DIV card "Elements" pag principal 
        let cardElement = await $("//div[@class='category-cards']/div[@class='card mt-4 top-card']/div[.='Elements']");
        await cardElement.scrollIntoView() // se mueve hacia el elemento con el scroll
        await cardElement.click()
        await browser.pause(1000)
        
        // Xpath element -> "check Box"
        let btnCheckBox= await $("//span[.='Check Box']");
        await btnCheckBox.scrollIntoView() // se mueve hacia el elemento con el scroll
        await btnCheckBox.click()
        await browser.pause(1000)


        // Xpath element -> check Box 
        let btnCheck = await $('//*[@id="tree-node"]/ol/li/span/label/span[1]');
        let mb = await btnCheck.isClickable();
        console.log("El boton es clickable: " + mb)

        if(mb == true){
            console.log("Entro en condicion if == true")

            await btnCheck.scrollIntoView() // se mueve hacia el elemento con el scroll
            await browser.pause(1000)
            await btnCheck.click()
            await browser.pause(2000)

            
            let textContaining = await $("//span[.='home']")
            //Assert text 
            await expect(textContaining).toHaveText('home') // se valida que aparezca el texto XXXXXX
            await browser.pause(2000)

            
        } else{
            console.log("No se puede dar click")
        }
        
        

    });

    it('demo-4-waitClickable', async () => { 
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)


        // XPath DIV card "Elements" pag principal 
        let cardElement = await $("//div[@class='category-cards']/div[@class='card mt-4 top-card']/div[.='Elements']");
        await cardElement.scrollIntoView() // se mueve hacia el elemento con el scroll
        await cardElement.click()
        await browser.pause(1000)
        
        // Xpath element -> "check Box"
        let btnCheckBox= await $("//span[.='Check Box']");
        await btnCheckBox.scrollIntoView() // se mueve hacia el elemento con el scroll
        await btnCheckBox.click()
        await browser.pause(1000)


        // Xpath element -> check Box 
        let btnCheck = await $('//*[@id="tree-node"]/ol/li/span/label/span[12]');
        let mb = await btnCheck.waitForClickable({timeout:10000, timeoutMsg:'No se encontro el elemento'}); // validar un tiempo y comprobrar si encontro el elemento
        console.log("El boton es clickable: " + mb)

    });

    // aqui vamos https://www.udemy.com/course/master-en-webdriverio-testing-qa-nivel-basico-en-espanol/learn/lecture/29911806#overview
    it('demo-5-waitClickable', async () => { 
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(1000)


        // XPath DIV card "Elements" pag principal 
        let cardElement = await $("//div[@class='category-cards']/div[@class='card mt-4 top-card']/div[.='Elements']");
        await cardElement.scrollIntoView() // se mueve hacia el elemento con el scroll
        await cardElement.click()
        await browser.pause(1000)
        
        // Xpath element -> "check Box"
        let btnCheckBox= await $("//span[.='Check Box']");
        await btnCheckBox.scrollIntoView() // se mueve hacia el elemento con el scroll
        await btnCheckBox.click()
        await browser.pause(1000)


        // Xpath element -> check Box 
        let btnCheck = await $('//*[@id="tree-node"]/ol/li/span/label/span[12]');
        let mb = await btnCheck.waitForClickable({timeout:10000, timeoutMsg:'No se encontro el elemento'}); // validar un tiempo y comprobrar si encontro el elemento
        console.log("El boton es clickable: " + mb)

    });

});