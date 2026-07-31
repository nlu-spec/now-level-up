/* ==========================================================================
   Home FAQ section -- tabs + accordion
   Fully self-contained: does not depend on home.js, jQuery timing, or any
   other script on the page. Scoped entirely to .h-faq-box so it can never
   affect (or be affected by) FAQ/accordion markup elsewhere on the site.
   ========================================================================== */
(function () {
    "use strict";

    function init() {
        var faqBox = document.querySelector(".h-faq-box");
        if (!faqBox) return;

        /* ---------------- Tabs ---------------- */
        var tabs = Array.prototype.slice.call(faqBox.querySelectorAll(".faq-tab"));
        var panels = Array.prototype.slice.call(faqBox.querySelectorAll(".faq-tab-content"));

        function activateTab(tab) {
            if (!tab) return;
            var targetId = tab.getAttribute("data-target");
            var targetPanel = targetId ? document.getElementById(targetId) : null;

            tabs.forEach(function (t) {
                t.classList.toggle("active", t === tab);
            });
            panels.forEach(function (p) {
                p.classList.toggle("active", p === targetPanel);
            });
        }

        tabs.forEach(function (tab) {
            tab.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                activateTab(tab);
            });
        });

        // Make sure exactly one tab/panel is active on load, regardless of
        // what's in the markup (falls back to the first tab).
        if (tabs.length && !tabs.some(function (t) { return t.classList.contains("active"); })) {
            activateTab(tabs[0]);
        }

        /* ---------------- Accordion ---------------- */
        var headers = faqBox.querySelectorAll(".bl-hdn");

        headers.forEach(function (header) {
            var item = header.closest(".blog-cl");
            var content = item ? item.querySelector(".bl-cont") : null;
            var icon = header.querySelector(".bl-icon");
            if (!content) return;

            // Normalize initial state -- always start closed, regardless of
            // any CSS/inline-style left over from elsewhere.
            content.style.display = "none";
            if (icon) icon.classList.remove("active");

            header.addEventListener("click", function (e) {
                e.preventDefault();
                // Stop this click from ever reaching document, so it can't
                // double-fire alongside home.js's own delegated .bl-hdn
                // handler (which would toggle it open then immediately
                // closed again, looking like nothing happened).
                e.stopPropagation();

                var panel = header.closest(".blog-cl-box");
                var isOpen = content.style.display === "block";

                if (panel) {
                    panel.querySelectorAll(".bl-cont").forEach(function (c) {
                        c.style.display = "none";
                    });
                    panel.querySelectorAll(".bl-icon").forEach(function (ic) {
                        ic.classList.remove("active");
                    });
                }

                if (!isOpen) {
                    content.style.display = "block";
                    if (icon) icon.classList.add("active");
                }
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
