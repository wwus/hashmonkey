const LATEST_API_VERSION = "0.2.0";
var apiVersions = {};
apiVersions["0.2.0"] = {
  VERSION: "0.2.0",
  getViewLink: function(pageData) {
    var urlData = {
      version: this.VERSION,
      compressed: false,
      body: pageData,
    };
    const hashObject = b64.encode(JSON.stringify(urlData));
    return `https://esrvx.github.io/urlshare/#${hashObject}`;
  },
  decode: function(urlData) {
    return urlData.body;
  },
}
apiVersions["0.0.1"] = {
  VERSION: "0.0.1",
  getViewLink: function(pageData) {
    return `https://esrvx.github.io/urlshare/#${b64.encode(pageData)}`;
  },
}
