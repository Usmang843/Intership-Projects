function Route(name, htmlName, defaultRoute){
    try {
        if(!name || !htmlName){
            throw 'error: name and htmlName param are manditory'
        }
        this.constructor(name, htmlName, defaultRoute)
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    defaultRoute: undefined,
    constructor: function(name, htmlName, defaultRoute){
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute
    },
    isActiveRoute: function (hashedPath){
        return hashedPath.replace('#', '') === this.name;
    }
}