const EndpointBuilder = require("./lib/endpoint_builder.js");
const { routes } = require("./constants/routes.js");
const { URL } = require("./constants/url.js");
const FetchClass = require("./lib/fetch_class.js");

const eb = new EndpointBuilder(URL, routes);
const fetch = new FetchClass();

describe("EndpointBuilder", () => {
  it("should return correct url", () => {
    expect(eb.setRoute("comments").addParam(1).build()).toEqual(
      "https://dummyjson.com/comments/1"
    );
  });
});

describe("create test", () => {
  it("Will create data on server (POST)", async () => {
    const url = eb.setRoute("comments").addParam("add").build();
    const data = {
      body: "This makes all sense to me!",
      postId: 3,
      userId: 5,
    };

    const response = await fetch.post(url, data);

    expect(response.data.id).toEqual(341);
  });

  it("Will throw an error", async () => {
    const url = eb.setRoute("comments").addParam("add").build();

    const response = await fetch.post(url, {});
    expect(response.response.status).toEqual(400);
  });
});

describe("read test", () => {
    it("will have correct data", async () => {
        const url = eb.setRoute("comments").addParam(1).build();
        const response = await fetch.get(url);
        expect(response.data.id).toEqual(1);
    });

    it("will have throw error since no comment with id 341 exists", async () => {
        const url = eb.setRoute("comments").addParam(341).build();
        const response = await fetch.get(url);
        expect(response.response.status).toEqual(404);
    })
});

describe("update test", () => {
  it("Will update data on server (PUT)", async () => {
    const url = eb.setRoute("comments").addParam(1).build();
    const data = {
      body: "Messi is the real G.O.A.T.",
    };

    const response = await fetch.put(url, data);
    expect(response.data.body).toEqual(data.body);
  });

  it("Will update something that doesn't exist", async () => {
    const url = eb.setRoute("comments").addParam(341).build();
    const data = {
      body: "Messi is the real G.O.A.T.",
    };
    const response = await fetch.put(url, data);
    expect(response.response.status).toEqual(404);
  });
});

describe("delete test", () => {
  it("Will delete data on server (DELETE)", async () => {
    const url = eb.setRoute("comments").addParam(1).build();
    const response = await fetch.delete(url);
    expect(response.data.isDeleted).toEqual(true);
  });

  it("Will delete something that doesn't exist", async () => {
    const url = eb.setRoute("comments").addParam(341).build();
    const response = await fetch.delete(url);
    expect(response.response.status).toEqual(404);
  });
});
