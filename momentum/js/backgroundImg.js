const images = [
  "https://images.unsplash.com/photo-1625976927996-a50b023a23d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1715&q=80",
  "https://images.unsplash.com/photo-1625990943295-6b06dbca7948?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
  "https://images.unsplash.com/photo-1626013607276-6fad3985a1a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1625959007780-6531d85798c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1625918328402-327e34637d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

const backImg = document.querySelector(".backgroundImg");
const bgimg = document.createElement("img");

const ranImg = images[Math.floor(Math.random() * images.length)];

bgimg.src = `${ranImg}`;

backImg.appendChild(bgimg);
