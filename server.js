const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let buttonClicks = 0;

app.prepare().then(() => {
  // 建立 HTTP 伺服器
  const server = createServer((req, res) => {
    // 若請求 URL 以 "/socket.io" 開頭，NEXT不處理，因為不是HTTP請求
    if (req.url.startsWith("/socket.io")) return;
    // 解析 URL，parse是node內建的url function
    const parsedUrl = parse(req.url, true);
    // NEXT function
    handle(req, res, parsedUrl);
  });

  // 建立 Socket.IO 伺服器
  const io = new Server(server);

  // io.on 伺服器端事件監聽器
  io.on("connection", (socket) => {
    //socket.on 客戶端事件監聽器
    socket.on("buttonClick", () => {
      buttonClicks++;
      if (buttonClicks === 3) {
        io.emit("hideButton");
      }
    });

    socket.on("disconnect", () => {
      buttonClicks--;
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

// QQ:記得server沒有支援tsx只有支援js
