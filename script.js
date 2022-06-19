"use strict";

//.img1 is image to click on it
// garden - whole div to show
// to show .garden .hidden
//to close .close-products

//////////////////////////////////////////////////////////////// OUR PRODUCTS ///////////////////////////////////////////////////////////////
//Garden image
const gardenImg = document.querySelector(".img-1");
const gardenInfo = document.querySelector(".garden");

//Balcony image
const balconyImg = document.querySelector(".img-2");
const balconyInfo = document.querySelector(".balcony");

//Indoor image
const indoorImg = document.querySelector(".img-3");
const indoorInfo = document.querySelector(".indoor");

//Common--------------
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-products");

//Garden
const openGarden = function () {
  gardenInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeGarden = function () {
  gardenInfo.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Balcony
const openBalcony = function () {
  balconyInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeBalcony = function () {
  balconyInfo.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Indoor
const openIndoor = function () {
  indoorInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeIndoor = function () {
  indoorInfo.classList.add("hidden");
  overlay.classList.add("hidden");
};

gardenImg.addEventListener("click", openGarden);
close.addEventListener("click", closeGarden);
overlay.addEventListener("click", closeGarden);

balconyImg.addEventListener("click", openBalcony);
close.addEventListener("click", closeBalcony);
overlay.addEventListener("click", closeBalcony);

indoorImg.addEventListener("click", openIndoor);
close.addEventListener("click", closeIndoor);
overlay.addEventListener("click", closeIndoor);

//////////////////////////////////////////////////////////////// TESTIMONIALS ///////////////////////////////////////////////////////////////

// const testimonials = [
//   { id: 1, fullName: "The Bings family", img: "imgpeople-1.jpg", text: },
//   {},
//   {},
//   {},
// ];
