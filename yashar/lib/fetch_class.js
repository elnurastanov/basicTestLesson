class FetchClass {
  async get(url) {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return { data, response };
  }

  async post(url, body) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return { data, response };
  }

  async put(url, body) {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return { data, response };
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return { data, response };
  }
}

module.exports = FetchClass;
