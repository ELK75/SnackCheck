
function getFoodData(preferences, apiKey) {
    var intolerances = '';

    var veganVal = preferences['Vegan'];
    //console.log('vegan val' + veganVal);
    var lowFatVal = preferences['Low Fat'];
    //console.log('low fat val' + lowFatVal);
    var lowCarbVal = preferences['Low Carb'];
    //console.log(lowCarbVal);
    var highProteinVal = preferences['High Protein'];
    //console.log(highProteinVal);
    var noGlutenVal = preferences['No Gluten'];
    //console.log(noGlutenVal);
    var noDairyVal = preferences['No Dairy'];
    //console.log(noDairyVal);
    var peanutsVal = preferences['Peanuts'];
    //console.log(peanutsVal);
    var treeNutsVal = preferences['Tree Nuts'];
    //console.log(treeNutsVal);
    var shellFishVal = preferences['Shellfish'];
    //console.log(treeNutsVal);
    var eggsVal = preferences['Eggs'];
    //console.log(eggsVal);

    if(noDairyVal === true){
        intolerances = intolerances + 'Dairy,';
    }
    if(peanutsVal === true){
        intolerances = intolerances + 'Peanuts,';
    }
    if(treeNutsVal === true){
        intolerances = intolerances + 'Tree Nut,';
    }
    if(shellFishVal === true){
        intolerances = intolerances + 'Shellfish,';
    }
    if(eggsVal === true){
        intolerances = intolerances + 'Egg,';
    }
    if(noGlutenVal === true){
        intolerances = intolerances + 'Gluten,';
    }
    if(lowCarbVal===true){
        intolerances = intolerances + '&maxCarbs=50';
    }
    if(highProteinVal === true){
        intolerances = intolerances + '&minProtein=30';
    }
    if(lowFatVal === true){
        intolerances = intolerances + '&maxFat=16';
    }
    if(veganVal===true){
        intolerances = intolerances + '&diet=vegan';
    }

    console.log(intolerances);
    console.log(apiKey);
    let myJson;
    const request = async () => {
        const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?intolerances='+intolerances+'&apiKey='+apiKey);
        myJson = await response.json();
        console.log(myJson);
    }
    request();

    return myJson;
    // return json object
}

export default getFoodData;