export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.buysimplethings.org") {
      url.hostname = "buysimplethings.org";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 308);
    }
    if (url.pathname === "/about" || url.pathname === "/about/") {
      return Response.redirect(new URL("/#about", request.url), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
