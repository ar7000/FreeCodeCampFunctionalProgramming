var globalTitle = "Winter Is Coming";

function urlSlug(title) {

    return title.split(/[^a-zA-Z0-9]/).map(x => x.toLowerCase()).filter(x => x != "").join('-');

}

var winterComing = urlSlug(globalTitle);