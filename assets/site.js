// Lingua: italiano se il browser è in italiano, altrimenti inglese. Forzabile con ?lang=it / ?lang=en
(function () {
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = q || saved || ((navigator.language || "en").toLowerCase().indexOf("it") === 0 ? "it" : "en");
  function set(l) {
    document.body.dataset.lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll(".lang").forEach(function (b) { b.textContent = l === "it" ? "EN" : "IT"; });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  set(lang);
  document.querySelectorAll(".lang").forEach(function (b) {
    b.addEventListener("click", function () { set(document.body.dataset.lang === "it" ? "en" : "it"); });
  });
  document.querySelectorAll(".year").forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
