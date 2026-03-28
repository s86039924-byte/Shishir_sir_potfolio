const http = require("http");
const fs = require("fs");
const path = require("path");

const DIST_DIR = path.join(__dirname, "dist");

function getPort() {
  const args = process.argv.slice(2);
  let cliPort = null;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "-p" || arg === "--port") {
      cliPort = args[i + 1];
      i += 1;
      continue;
    }
    if (arg.startsWith("--port=")) {
      cliPort = arg.split("=")[1];
    }
  }

  const rawPort = cliPort || process.env.PORT || "3000";
  const parsed = Number.parseInt(rawPort, 10);
  return Number.isNaN(parsed) ? 3000 : parsed;
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".svg":
      return "image/svg+xml";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType(filePath) });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || "/", "http://localhost");
  let decodedPathname;
  try {
    decodedPathname = decodeURIComponent(requestUrl.pathname);
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad Request");
    return;
  }

  const normalizedPath = path.normalize(decodedPathname).replace(/^[/\\]+/, "");
  const safePath = normalizedPath.replace(/^(\.\.[/\\])+/, "");
  const requestedPath = path.join(DIST_DIR, safePath);
  const resolvedRequestedPath = path.resolve(requestedPath);
  const resolvedDistDir = path.resolve(DIST_DIR);

  if (
    resolvedRequestedPath !== resolvedDistDir &&
    !resolvedRequestedPath.startsWith(`${resolvedDistDir}${path.sep}`)
  ) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(requestedPath, (statErr, stats) => {
    if (!statErr && stats.isFile()) {
      sendFile(res, requestedPath);
      return;
    }

    if (!statErr && stats.isDirectory()) {
      const indexPath = path.join(requestedPath, "index.html");
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (!indexErr && indexStats.isFile()) {
          sendFile(res, indexPath);
        } else {
          sendFile(res, path.join(DIST_DIR, "index.html"));
        }
      });
      return;
    }

    sendFile(res, path.join(DIST_DIR, "index.html"));
  });
});

const port = getPort();
server.listen(port, "0.0.0.0", () => {
  console.log(`Serving dist on port ${port}`);
});
