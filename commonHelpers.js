import{a as b,S as P,i as m}from"./assets/vendor-9a8cfc74.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const y=r=>r.map(e=>`<div class="card">
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
    </div>`).join(" "),w="43847470-26a4b647964be33653231b3f4",S="https://pixabay.com/api/",f=15;async function g(r,e=1){return(await b.get(S,{params:{key:w,q:r,image_type:"all",orientation:"horizontal",safesearch:!0,page:e,per_page:f}})).data}const a=document.querySelector(".search-form"),p=document.querySelector(".js-gallery"),i=document.querySelector(".js-loader"),n=document.querySelector(".load-more-js");a.reset();let l="",c=1,d=0;const L=new P(".js-gallery a",{captionsData:"alt",captionDelay:"250"}),E=async r=>{if(r.preventDefault(),l=r.target.elements.searchQuery.value.trim(),p.innerHTML="",n.classList.add("is-hidden"),!l)return m.info({message:"The search field must not be empty",position:"topCenter",timeout:2500});c=1;try{i.classList.remove("is-hidden");const{hits:e,totalHits:o}=await g(l,c);if(o===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.reset(),i.classList.add("is-hidden");return}p.insertAdjacentHTML("beforeend",y(e)),L.refresh(),i.classList.add("is-hidden"),d=Math.ceil(o/f),d>1&&n.classList.remove("is-hidden")}catch{i.classList.add("is-hidden"),a.reset()}a.reset()};a.addEventListener("submit",E);const M=()=>{const o=document.querySelector(".card:last-child").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},v=async r=>{try{i.classList.remove("is-hidden"),c+=1;const{hits:e,totalHits:o}=await g(l,c);if(p.insertAdjacentHTML("beforeend",y(e)),L.refresh(),M(),i.classList.add("is-hidden"),d=Math.ceil(o/f),c<d)n.classList.remove("is-hidden");else{n.classList.add("is-hidden"),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.removeEventListener("click",v);return}}catch{i.classList.add("is-hidden"),a.reset();return}};n.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
