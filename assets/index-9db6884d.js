(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();(()=>{const l=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),e=document.querySelector(".js-close-menu"),d=document.querySelector(".mobile-nav"),t=()=>{const o=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!o),l.classList.toggle("is-open")};r.addEventListener("click",t),e.addEventListener("click",t),d.addEventListener("click",o=>{o.target.className==="mobile-nav-link"&&t()}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(l.classList.remove("is-open"),r.setAttribute("aria-expanded",!1))})})();const p=document.querySelectorAll("[data-modal-open]"),f=document.querySelectorAll("[data-modal-close]"),y=document.querySelectorAll("[data-modal-backdrop]");let s;p.forEach(l=>{l.addEventListener("click",r=>{const e=r.target.dataset.modalOpen;s=document.querySelector(`[data-modal=${e}]`),console.log(s),m()})});const m=function(){s.classList.toggle("is-hidden"),s.classList.contains("is-hidden")?document.body.style.overflow="visible":document.body.style.overflow="hidden"};f.forEach(l=>{l.addEventListener("click",m)});y.forEach(l=>{l.addEventListener("click",r=>r.target.hasAttribute("data-modal-backdrop")?m():null)});new Swiper(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},slidesPerView:1,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}});const g=document.querySelectorAll(".products-link"),a=document.querySelector("[data-modal=products]"),u=a.querySelector(".product-modal-image"),c=document.querySelectorAll(".product-modal-stats-item"),n=document.querySelectorAll(".product-modal-stats-item-value");g.forEach(l=>{l.addEventListener("click",r=>{if(r.target.id==="ice-cream-btn"){a.querySelector(".product-modal-title").textContent="Chocolate icecream",u.className="product-modal-image";for(let e=0;e<c.length;e++)c[e].style.borderColor="#aec6a5",n[e].style.backgroundColor="#aec6a5",n[e].style.boxShadow="0px 6px 20px rgba(10, 136, 23, 0.25)"}if(r.target.id==="ice-coffe-btn"){a.querySelector(".product-modal-title").textContent="Ice Coffee",u.className="product-modal-image-coffee";for(let e=0;e<c.length;e++)c[e].style.borderColor="#efd478",n[e].style.backgroundColor="#efd478",n[e].style.boxShadow="0px 6px 20px var(--yellow-underlay)"}if(r.target.id==="ice-milkshake-btn"){a.querySelector(".product-modal-title").textContent="Milkshakes",u.className="product-modal-image-milkshakes",console.log(a);for(let e=0;e<c.length;e++)c[e].style.borderColor="#d6936d",n[e].style.backgroundColor="#d6936d",n[e].style.boxShadow="0px 6px 20px var(--brown-underlay)"}})});