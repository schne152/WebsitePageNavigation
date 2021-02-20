# WebsitePageNavigation
Using DOM and AJAX to load html partials to avoid reloading entire page upon navigation. Additionally reduces html redundancy across all pages of a site.

You must run from a server. Loading directly to browser will produce 'Cross-Origin Request Blocked' error.
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp

For simplicity, I used node.js. Here is a guide: https://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server.
I recommend using the command http-server -c-1 if you want the server to display any file modifications.
