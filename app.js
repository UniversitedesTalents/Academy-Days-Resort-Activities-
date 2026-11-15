"use strict";
(() => {
 const data=window.RESORT_ACTIVITIES;
 function card(a,small=false){
  const article=document.createElement('article');article.className=small?'free-card':'activity-card';article.dataset.id=a.id;
  if(a.image){const photo=document.createElement('div');photo.className='photo-wrap';const img=document.createElement('img');img.src=a.image;img.alt=a.alt||a.title;img.loading='lazy';img.width=800;img.height=500;photo.append(img);if(!small){const time=document.createElement('span');time.className='time';time.textContent=data.start + '–' + (a.end || data.end);photo.append(time)}article.append(photo)}
  const body=document.createElement('div');body.className='card-body';
  const fields=small?[['h3','',a.title],['p','description',a.description]]:[['p','category',a.category],['h3','',a.title],['p','tagline',a.tagline],['p','description',a.description],['p','card-detail',a.detail]];
  fields.forEach(([tag,cls,text])=>{const el=document.createElement(tag);el.className=cls;el.textContent=text;body.append(el)});article.append(body);return article;
 }
 data.activities.forEach(a=>document.querySelector('#activityGrid').append(card(a)));
 data.freeActivities.forEach(a=>document.querySelector('#freeGrid').append(card(a,true)));
})();
