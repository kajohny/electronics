let blocks = ["laptops", "smartphones", "television_sets", "fridges"];
blocks.forEach(block => {
    let element = document.getElementById(block + '-button');
    element.onclick = function (event) {
        let modelName = document.getElementById(block + '-input').value;
        let price = getPrice(block);
        let resultBlock = document.getElementById(block + '-result');
        resultBlock.innerHTML = "";
        fetch('http://localhost:3000/' + block)

        
            .then(response => response.json())
            .then(resource => {
                let result = resource.filter(el => {
                    let modelNameResult = true; 
                    let priceResult = true;
                    if (modelName.trim()) {
                        modelNameResult = el.modelName.toLowerCase().indexOf(modelName.trim().toLowerCase()) !== (-1);
                    }
                    if (price !== null) {
                        priceResult = el.price >= price[0] && el.price <= price[1];
                    }
                    return modelNameResult && priceResult;
                });

                result.forEach(resultItem => {
                    resultBlock.innerHTML += resultItem.id + ". " 
                        + "Model ID: " + resultItem.modelId + " | " 
                        + " Model: " + resultItem.modelName + " | "
                        + " Price: " + resultItem.price + "<br><br> ";
                })
            })
    }
})

function getPrice(block) {
    let radioButtons = document.getElementsByClassName(block + "-price");
    let price = null;
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            price = radioButtons[i].value.split("-");
        }
    }
    return price;
}
