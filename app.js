(function () {
  var data = window.PORTFOLIO;
  if (!data) return;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "class") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  // Hero
  var p = data.person;
  document.getElementById("person-name").textContent = p.name;
  document.getElementById("index-name").textContent = p.name;
  document.getElementById("headline").textContent = p.headline;
  document.getElementById("sub").textContent = p.sub;
  document.getElementById("method").textContent = data.method;
  var contact = document.getElementById("contact");
  if (p.email) contact.appendChild(el("span", { text: p.email }));
  if (p.linkedin) contact.appendChild(el("a", { href: p.linkedin, text: "LinkedIn" }));
  if (p.github) contact.appendChild(el("a", { href: p.github, text: "GitHub" }));
  document.getElementById("footer-name").textContent = p.name;

  // Index links
  var links = document.getElementById("index-links");
  data.projects.forEach(function (proj) {
    links.appendChild(el("a", { href: "#" + proj.slug, text: proj.name }));
  });

  // Capability map
  var caps = data.capabilities;
  var headRow = el("tr", null, [el("th", { scope: "col", text: "" })]);
  caps.forEach(function (c) { headRow.appendChild(el("th", { scope: "col", text: c.label })); });
  var tbody = el("tbody");
  data.projects.forEach(function (proj) {
    var row = el("tr", null, [el("th", { scope: "row" }, [el("a", { href: "#" + proj.slug, text: proj.name })])]);
    caps.forEach(function (c) {
      var has = proj.fde && proj.fde[c.key];
      var cell = el("td");
      if (has) {
        var cls = proj.design ? "dot designed" : "dot on";
        var lbl = proj.design ? "Design or product lead, code not reviewed" : "Shown in a build checked against code";
        cell.appendChild(el("span", { class: cls, title: lbl, "aria-label": lbl }));
      } else {
        cell.appendChild(el("span", { class: "sr", "aria-label": "Not shown", text: "" }));
      }
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  document.getElementById("map-table").appendChild(el("thead", null, [headRow]));
  document.getElementById("map-table").appendChild(tbody);

  // Case studies
  var root = document.getElementById("cases");
  var capLabel = {};
  caps.forEach(function (c) { capLabel[c.key] = c.label; });

  data.projects.forEach(function (proj) {
    var wrap = el("div", { class: "wrap" });

    // Head
    var kind = el("div", { class: "kind" }, [el("span", { class: "eyebrow", text: proj.kind })]);
    if (proj.live) kind.appendChild(el("a", { class: "live", href: proj.live, text: proj.liveLabel || proj.live }));
    var head = el("header", { class: "case-head" }, [
      kind,
      el("h2", { text: proj.name }),
      el("p", { class: "tagline", text: proj.tagline })
    ]);
    if (proj.designNote) head.appendChild(el("p", { class: "design-flag", text: proj.designNote }));
    wrap.appendChild(head);

    // Meta
    var chips = el("div", { class: "chips" });
    proj.stack.forEach(function (s) { chips.appendChild(el("span", { class: "chip", text: s })); });
    wrap.appendChild(el("dl", { class: "meta" }, [
      el("div", null, [el("dt", { text: "My role" }), el("dd", { text: proj.role })]),
      el("div", null, [el("dt", { text: "Client" }), el("dd", { text: proj.client })]),
      proj.stack.length ? el("div", null, [el("dt", { text: "Stack" }), el("dd", null, [chips, proj.stackNote ? el("p", { class: "stack-note", text: proj.stackNote }) : null])]) : null
    ]));

    // Facts
    if (proj.facts && proj.facts.length) {
      var facts = el("div", { class: "facts" });
      proj.facts.forEach(function (f) {
        facts.appendChild(el("div", { class: "fact" }, [el("b", { text: f.value }), el("span", { text: f.label })]));
      });
      wrap.appendChild(facts);
    }

    // Problem
    wrap.appendChild(el("section", { class: "block" }, [el("h3", { text: "The problem" }), el("p", { class: "prose", text: proj.problem })]));

    // Built
    var dl = el("dl", { class: "built" });
    proj.built.forEach(function (b) { dl.appendChild(el("div", null, [el("dt", { text: b[0] }), el("dd", { text: b[1] })])); });
    wrap.appendChild(el("section", { class: "block" }, [el("h3", { text: proj.builtLabel || (proj.design ? "What I designed" : "What I built") }), dl]));

    // Principle (design case studies)
    if (proj.principle) {
      wrap.appendChild(el("section", { class: "block" }, [el("h3", { text: "The design principle" }), el("blockquote", { class: "principle", text: proj.principle })]));
    }

    // Architecture and AI
    if (proj.architecture || proj.ai) {
      var two = el("div", { class: "two" });
      if (proj.architecture) {
        var ul1 = el("ul", { class: "list" });
        proj.architecture.forEach(function (t) { ul1.appendChild(el("li", { text: t })); });
        two.appendChild(el("section", { class: "block" }, [el("h3", { text: "Architecture" }), ul1]));
      }
      if (proj.ai) {
        var ul2 = el("ul", { class: "list" });
        proj.ai.forEach(function (t) { ul2.appendChild(el("li", { text: t })); });
        two.appendChild(el("section", { class: "block" }, [el("h3", { text: "AI and automation" }), ul2]));
      }
      wrap.appendChild(two);
    }

    // Ledger
    var names = { built: "Built", partial: "Partial", planned: "Planned", design: "Design", unclaimed: "Unclaimed" };
    var ledger = el("ul", { class: "ledger" });
    proj.status.forEach(function (s) {
      ledger.appendChild(el("li", null, [el("span", { class: "status " + s[0], text: names[s[0]] }), el("span", { text: s[1] })]));
    });
    wrap.appendChild(el("section", { class: "block" }, [el("h3", { text: "Built, partial and planned" }), ledger]));

    // Outcome
    wrap.appendChild(el("section", { class: "block" }, [el("h3", { text: "Outcome" }), el("p", { class: "outcome", text: proj.outcome })]));

    // FDE mapping
    var fde = el("ul", { class: "fde" });
    caps.forEach(function (c) {
      if (proj.fde && proj.fde[c.key]) fde.appendChild(el("li", null, [el("b", { text: c.label }), el("span", { text: proj.fde[c.key] })]));
    });
    wrap.appendChild(el("section", { class: "block" }, [el("h3", { text: "Relevant to FDE and AI product roles" }), fde]));

    // Screens
    if (proj.screens && proj.screens.length) {
      var wide = el("div", { class: "shots lead" });
      var phones = el("div", { class: "shots phones" });
      proj.screens.forEach(function (s) {
        var img = el("img", { src: s[0], alt: s[1], loading: "lazy", width: s[2] === "phone" ? "540" : "1400", height: s[2] === "phone" ? "1168" : "875" });
        var btn = el("button", { type: "button", "aria-label": "Enlarge: " + s[1] }, [img]);
        btn.addEventListener("click", function () { openShot(s[0], s[1]); });
        var fig = el("figure", { class: "shot" }, [btn, el("figcaption", { text: s[1] })]);
        (s[2] === "phone" ? phones : wide).appendChild(fig);
      });
      var sec = el("section", { class: "block" }, [el("h3", { text: "Screenshots" })]);
      if (proj.screensNote) sec.appendChild(el("p", { class: "shots-note", text: proj.screensNote }));
      if (wide.children.length) sec.appendChild(wide);
      if (phones.children.length) sec.appendChild(phones);
      wrap.appendChild(sec);
    }

    root.appendChild(el("article", { class: "case", id: proj.slug }, [wrap]));
  });

  // Lightbox
  var dlg = document.getElementById("lightbox");
  var dlgImg = document.getElementById("lightbox-img");
  var dlgCap = document.getElementById("lightbox-cap");
  function openShot(src, cap) {
    dlgImg.src = src; dlgImg.alt = cap; dlgCap.textContent = cap;
    if (dlg.showModal) dlg.showModal(); else window.open(src, "_blank");
  }
  document.getElementById("lightbox-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  // Highlight the current project in the index
  if ("IntersectionObserver" in window) {
    var anchors = links.querySelectorAll("a");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          anchors.forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id ? "true" : "false"); });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".case").forEach(function (c) { io.observe(c); });
  }
})();
