class EndpointBuilder {
    params = []

    constructor(url, routes) {
        this.url = url;
        this.routes = routes;
    }

    setRoute(route) {
        this.params.push(this.routes[route]);
        return this;
    }

    addParam(param) {
        this.params.push(param);
        return this
    }

    build() {
        const result = this.url + this.params.join("/");
        this.params = [];
        return result;
    }
}

module.exports = EndpointBuilder