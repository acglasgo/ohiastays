const HOST_TO_FOLDER = {
  "ohiastays.com": "root",
  "www.ohiastays.com": "root",
  "lakeway.ohiastays.com": "lakeway",
  "chelan.ohiastays.com": "chelan",
  "austin.ohiastays.com": "austin",
  "sagecliffe.ohiastays.com": "sagecliffe",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const folder = HOST_TO_FOLDER[url.hostname] ?? "root";

    const rewritten = new URL(request.url);
    rewritten.pathname = `/${folder}${url.pathname}`;

    return env.ASSETS.fetch(new Request(rewritten.toString(), request));
  },
};
