(function () {
  "use strict";

  var root = document.documentElement;
  var accents = ["gold", "cyan", "violet", "emerald"];
  var accentBtn = document.getElementById("accentBtn");
  var storedAccent = "gold";

  try {
    storedAccent = localStorage.getItem("polash-os:accent") || "gold";
  } catch (error) {}

  function setAccent(accent) {
    if (accents.indexOf(accent) < 0) accent = "gold";
    root.dataset.accent = accent;
    try {
      localStorage.setItem("polash-os:accent", accent);
    } catch (error) {}
  }

  setAccent(storedAccent);

  function notify(message) {
    var host = document.getElementById("toasts");
    if (!host) return;
    var node = document.createElement("div");
    node.className = "toast";
    node.textContent = message;
    host.appendChild(node);
    setTimeout(function () {
      node.style.opacity = "0";
      node.style.transform = "translateY(10px)";
      setTimeout(function () {
        node.remove();
      }, 260);
    }, 2200);
  }

  if (accentBtn) {
    accentBtn.addEventListener("click", function () {
      var current = accents.indexOf(root.dataset.accent || "gold");
      var next = accents[(current + 1) % accents.length];
      setAccent(next);
      notify(next === "gold" ? "Gold accent" : next.charAt(0).toUpperCase() + next.slice(1) + " accent");
    });
  }

  window.addEventListener("pointermove", function (event) {
    root.style.setProperty("--mx", event.clientX + "px");
    root.style.setProperty("--my", event.clientY + "px");
    var hero = document.querySelector(".hero-copy");
    if (hero) {
      var dx = (event.clientX / window.innerWidth - 0.5) * 16;
      var dy = (event.clientY / window.innerHeight - 0.5) * 12;
      hero.style.setProperty("--px", dx.toFixed(1) + "px");
      hero.style.setProperty("--py", dy.toFixed(1) + "px");
    }
  }, { passive: true });

  var animating = new WeakSet();

  function animateValue(node) {
    if (animating.has(node)) return;
    var raw = node.textContent.trim();
    var match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    var target = parseFloat(match[1]);
    if (!isFinite(target)) return;
    var suffix = match[2] || "";
    var start = 0;
    var started = performance.now();
    var duration = 520;
    animating.add(node);

    function frame(now) {
      var progress = Math.min(1, (now - started) / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      node.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        node.textContent = raw;
        animating.delete(node);
      }
    }
    requestAnimationFrame(frame);
  }

  ["statTools", "statFav", "statTasks", "statFocus", "todayTasks", "todayFocus", "todayFavs"].forEach(function (id) {
    var node = document.getElementById(id);
    if (!node || !("MutationObserver" in window)) return;
    var observer = new MutationObserver(function () {
      animateValue(node);
    });
    observer.observe(node, { childList: true, characterData: true, subtree: true });
  });

  window.addEventListener("hashchange", function () {
    var panels = document.querySelectorAll(".view-panel");
    panels.forEach(function (panel) {
      panel.classList.remove("view-enter");
      if (!panel.hidden) {
        void panel.offsetWidth;
        panel.classList.add("view-enter");
      }
    });
  });

  var view = document.getElementById("appView");
  var topButton = document.createElement("button");
  topButton.type = "button";
  topButton.className = "smart-top";
  topButton.setAttribute("aria-label", "Back to top");
  topButton.innerHTML = "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m6 14 6-6 6 6'/></svg>";
  document.body.appendChild(topButton);

  topButton.addEventListener("click", function () {
    if (view) view.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (view) {
    view.addEventListener("scroll", function () {
      topButton.classList.toggle("show", view.scrollTop > 320);
    }, { passive: true });
  }
})();
