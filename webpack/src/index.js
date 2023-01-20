"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const $links = document.getElementById("links");
const $name = document.querySelector("h1");
const data = {
    name: "Santiago Velásquez",
    nickname: "santyvano",
    description: "Apasionado por la el web development y el aprendizaje autonomo",
    avatar: "webpack\public\img\santy.jpg",
    social: [
        {
            name: "twitter",
            url: "https://twitter.com/",
            username: "",
        },
        {
            name: "instagram",
            url: "https://instagram.com/",
            username: "",
        },
    ],
    links: [
        {
            name: "blog",
            url: "https://example.com/",
            color: "red",
            emoji: "📖",
        },
        {
            name: "podcast",
            url: "https://example.com/",
            color: "yellow",
            emoji: "💬",
        },
    ],
    footer: "Made with Love on Colombia",
};
const main = () => {
    let name = document.createTextNode(data === null || data === void 0 ? void 0 : data.name);
    let links = data === null || data === void 0 ? void 0 : data.links.map((network) => {
        return `
    <div class="bg-${network.color}-200 px-4 py-5 w-full flex justify-between">
      <a class="text-sm font-bold text-${network.color}-600 text-center hover:text-${network.color}-800 cursor-pointer"
        href="${network.url}" target="_blank">
        ${network.name}
      </a>
      <span>${network.emoji}</span>
    </div>`;
    }).join("");
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links === null || $links === void 0 ? void 0 : $links.appendChild(newItem);
    $name === null || $name === void 0 ? void 0 : $name.appendChild(name);
};
main();
