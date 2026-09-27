// Mobile off-canvas drawer, shared by the tutorial viewer and every guide.
//
// Below the lg breakpoint the sidebar is parked off-canvas and opened by the
// hamburger button in each page's mobile top bar. At lg and above there is no
// drawer at all — the sidebar is a static column and this file does nothing.
//
// The panel's position and visibility live in site.css; this file only owns
// state (which class is on which element), focus management, and the scroll
// lock. It is inert on pages with no drawer markup, so the hub can load it
// harmlessly and every page can use one identical script tag.
(function () {
    'use strict';

    var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    var DESKTOP = '(min-width: 1024px)';

    function setup() {
        var drawer = document.querySelector('aside[data-drawer]');
        var backdrop = document.getElementById('drawer-backdrop');
        var toggles = document.querySelectorAll('[data-drawer-toggle]');
        if (!drawer || !toggles.length) return;

        var lastFocused = null;

        function isOpen() {
            return drawer.classList.contains('is-open');
        }

        function open(trigger) {
            // Prefer the button that was actually activated: a pointer tap does
            // not focus a button in every browser, so document.activeElement
            // can still be <body> here and focus would return nowhere.
            lastFocused = trigger || document.activeElement;
            drawer.classList.add('is-open');
            if (backdrop) backdrop.classList.add('is-open');
            document.body.classList.add('drawer-open');
            toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'true'); });
            // Move focus into the panel so a keyboard or screen-reader user
            // lands where the drawer just appeared.
            var first = drawer.querySelector(FOCUSABLE);
            if (first) first.focus();
        }

        function close(restoreFocus) {
            if (!isOpen()) return;
            drawer.classList.remove('is-open');
            if (backdrop) backdrop.classList.remove('is-open');
            document.body.classList.remove('drawer-open');
            toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
            if (restoreFocus && lastFocused && typeof lastFocused.focus === 'function') {
                lastFocused.focus();
            }
            lastFocused = null;
        }

        toggles.forEach(function (t) {
            t.setAttribute('aria-expanded', 'false');
            t.addEventListener('click', function (e) {
                e.preventDefault();
                if (isOpen()) close(true); else open(t);
            });
        });

        if (backdrop) {
            backdrop.addEventListener('click', function () { close(true); });
        }

        // Any navigation from inside the drawer dismisses it. In the tutorial
        // viewer a lesson link re-renders in place without a page load, so
        // without this the drawer would stay open over the new lesson.
        drawer.addEventListener('click', function (e) {
            if (e.target.closest('a[href]')) close(false);
        });

        document.addEventListener('keydown', function (e) {
            if (!isOpen()) return;

            if (e.key === 'Escape') {
                e.preventDefault();
                close(true);
                return;
            }

            if (e.key !== 'Tab') return;

            // Trap Tab inside the open panel.
            var items = Array.prototype.filter.call(
                drawer.querySelectorAll(FOCUSABLE),
                function (el) { return el.offsetParent !== null; }
            );
            if (!items.length) return;
            var first = items[0];
            var last = items[items.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });

        // Rotating to landscape or widening past lg turns the drawer back into
        // a static column; drop the open state so the scroll lock goes with it.
        var mq = window.matchMedia(DESKTOP);
        var onChange = function (e) { if (e.matches) close(false); };
        if (mq.addEventListener) mq.addEventListener('change', onChange);
        else if (mq.addListener) mq.addListener(onChange);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();
