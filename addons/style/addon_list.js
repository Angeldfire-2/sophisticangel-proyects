const addonsList = document.getElementById("addonsList");

export function insertAddonList(content_addons) {
    Object.values(content_addons).forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "";
        div.appendChild(img);
        const hasExtras = item.extra && item.extra.length > 0;
        const isNew = item.new === true;
        if (hasExtras || isNew) {
            const main = document.createElement("main");
            main.className = "extra-div";
            const h2 = document.createElement("h2");
            h2.textContent = item.name;
            main.appendChild(h2);
            if (hasExtras) {
                item.extra.forEach(text => {
                    const h5 = document.createElement("h5");
                    h5.textContent = text;
                    main.appendChild(h5);
                });
            }
            if (isNew) {
                const h6 = document.createElement("h6");
                h6.className = "new";
                h6.textContent = "New";
                main.appendChild(h6);
            }
            div.appendChild(main);
        } else {
            const h2 = document.createElement("h2");
            h2.textContent = item.name;
            div.appendChild(h2);
        }
        a.appendChild(div);
        addonsList.appendChild(a);
    });
}