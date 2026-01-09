(function () {
  const banner = document.createElement("div");
  banner.innerText = "⚠️ PLAYGROUND MODE – CANLI DEĞİL";

  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.zIndex = "99999";
  banner.style.padding = "6px 0";
  banner.style.textAlign = "center";
  banner.style.fontSize = "13px";
  banner.style.fontWeight = "600";
  banner.style.color = "#fff";
  banner.style.background =
    "repeating-linear-gradient(45deg,#ff9800,#ff9800 10px,#000 10px,#000 20px)";

  document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(banner);
    document.title = "⚠️ PLAYGROUND – Foraflora Map";
    console.warn("⚠️ PLAYGROUND MODE AKTİF");
  });
})();
