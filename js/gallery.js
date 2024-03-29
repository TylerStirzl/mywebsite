function commercialProjects() {
    // Change header
    document.getElementById('projectsDisplayTitle').innerHTML = "Commercial Projects";

    // hide all
    hideTypes();

    // populate type1
    populateTypes("commercialProject");
}

function residentialProjects() {
    document.getElementById('projectsDisplayTitle').innerHTML = "Residential Projects";

    // hide all
    hideTypes();

    // populate type1
    populateTypes("residentialProject");
}

function allProjects(){
    document.getElementById('projectsDisplayTitle').innerHTML = "All Projects";

    populateTypes("commercialProject");
    populateTypes("residentialProject");
}

function hideTypes(){
    var commercialProjectArray = document.getElementsByClassName('commercialProject');
    var residentialProjectArray = document.getElementsByClassName('residentialProject');

    for (let x = 0; x < commercialProjectArray.length; x++) {
        commercialProjectArray[x].style.display = "none";
    }

    for (let x = 0; x < residentialProjectArray.length; x++) {
        residentialProjectArray[x].style.display = "none";
    }
}

function populateTypes(typeName){
    var types = document.getElementsByClassName(typeName);

    for (let x = 0; x < types.length; x++) {
        types[x].style.display = "block";
    }
}