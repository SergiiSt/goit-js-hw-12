import{i as a,S as d}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const f="43847470-26a4b647964be33653231b3f4",m="https://pixabay.com/api/",h=o=>{const e=new URLSearchParams({key:f,q:o,image_type:"all",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${e}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},p=o=>o.map(e=>`<div class="card">
        <a href='${e.largeImageURL}'><img
        src='${e.webformatURL}'
        alt= '${e.tags}'
        width="360"
        height="152"
      /></a>
      <div>
      <ul class="card-list">
        <li>
          Likes
          <span>${e.likes}</span>
        </li>
        <li>
          Views
          <span>${e.views}</span>
        </li>
        <li>
          Comments
          <span>${e.comments}</span>
        </li>
        <li>
          Downloads
          <span>${e.downloads}</span>
        </li>
      </ul>
      </div>
    </div>`).join(" "),u=document.querySelector(".search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");u.reset();function y(o){o.preventDefault();const e=o.target.elements.searchQuery.value.trim();if(c.innerHTML="",!e)return a.info({message:"The search field must not be empty",position:"topCenter",timeout:2500});l.classList.remove("is-hidden"),h(e).then(s=>{s.total===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),c.innerHTML=p(s.hits),new d(".js-gallery a",{captionsData:"alt",captionDelay:"250"})}).catch(s=>console.log(s)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}u.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
