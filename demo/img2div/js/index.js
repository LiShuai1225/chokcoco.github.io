(function (e, t) {
  var n = function (e) {
      return new n.prototype.init(e)
    },
    o = document.getElementById("img"),
    i = document.getElementById("toDiv"),
    r = document.getElementById("code"),
    a = document.getElementById("result");

  function d() {
    var e = document.getElementById("fileId1");
    if (typeof FileReader === "undefined") {
      document.write = "抱歉，你的浏览器不支持，请尝试使用高级浏览器"
    } else {
      e.addEventListener("change", g, false)
    }
  }

  function g() {
    var e = this.files[0];
    if (!/image\/\w+/.test(e.type)) {
      alert("文件必须为图片！");
      return false
    }
    var t = new FileReader;
    t.readAsDataURL(e);
    t.onload = function (e) {
      a.innerHTML = '<img id="img" src="' + this.result + '" alt=""/>';
      o = document.getElementById("img");
      n(o)
    }
  }
  n.prototype.getImgColor = function (e) {
    var t = e.width,
      n = e.height,
      o = document.createElement("canvas"),
      a = o.getContext("2d");
    o.width = t;
    o.height = n;
    a.drawImage(e, 0, 0, t, n);
    var d = a.getImageData(0, 0, t, n),
      g = d.data,
      l = g.length,
      m = [],
      u = 0;
    for (; u < l; u++) {
      if (u % 4 === 0) {
        var c = u / 4 % t,
          p = Math.floor(u / 4 / t),
          s = g[u],
          f = g[u + 1],
          h = g[u + 2],
          y = g[u + 3];
        m.push(c + 1 + "px " + (p + 1) + "px " + "rgba(" + s + "," + f +
          "," + h + "," + y + ")")
      }
    }
    i.style.marginBottom = n + 20 + "px";
    i.style.boxShadow = m.join();
    r.innerText = '<div style="width:1px;height:1px;box-shadow:' + m.join() +
      '">'
  };
  n.prototype.init = function (e) {
    this.getImgColor(e)
  };
  n.prototype.init.prototype = n.prototype;
  d()
})(window);
