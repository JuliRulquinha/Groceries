let Fruit = 
    {
        "name": String,
        "imgUrl": "",
        "description": String
    }
  
    function createFruit(name, imgUrl, description)
    {
        //^1. Assign desired values as parameters 
        //^2. Parameters become now the value of each property of the object "Fruit"
        return {

            name,
            imgUrl,
            description

        }
    }



let fruitBasket = [createFruit("Apricot",`https://cdn.britannica.com
    /36/160636-050-B1DC5C0A/Laetrile-apricot-pits.jpg`,
    `Similar in shape to a peach, the fruit is nearly smooth, 
    round to oblong in some varieties, 
    and somewhat flattened but with little 
    to no hairiness when ripe. Its flesh is 
    typically a rich yellow to yellowish orange.`), 
    createFruit("Banana",`https://static.libertyprim.com/files
        /familles/banane-large.jpg?1569271725`,`Bananas are long, curved fruits with smooth skin 
        that are usually yellow, but can also be green, red, 
        or purple depending on the variety. 
        They are about 7 to 9 inches long and 2 to 3 inches in diameter.`), 
        createFruit("Strawberry",`"https://www.collinsdictionary.
            com/images/full/strawberry_227472010.jpg"`
        ,`Strawberries are soft, sweet, and juicy red berries that grow on low-flowering plants. 
        They have tiny edible seeds that cover their surface and are 
        the enlarged ends of the plant's stamen.`
        )];


function showStatusOfFruit()
{
    // 1. Get the object in fruit basket.
    // 2. Alert its stats when the user clicks on the corresponding div.
    

}