const CONFIG = {
  whatsappNumber: "60123456789",
  email: "YOUR_EMAIL@example.com"
};
let lang = localStorage.getItem("oceanwayLang") || "zh";
const products = [{"code": "OW1087", "category": "kitchen", "name_zh": "厨房单冷水龙头", "name_en": "Kitchen Cold Faucet", "material": "201 Stainless Steel", "finish": "Gun Grey", "mount": "Deck Mounted", "desc_zh": "简约实用设计，适合厨房水槽、洗衣区及日常家用。", "desc_en": "A practical everyday faucet for kitchen sinks, laundry areas and residential use."}, {"code": "OW1089", "category": "kitchen", "name_zh": "厨房高弯水龙头", "name_en": "High Arc Kitchen Faucet", "material": "201 Stainless Steel", "finish": "Gun Grey", "mount": "Deck Mounted", "desc_zh": "高弯出水设计，提供更大的清洗空间，适合较深水槽。", "desc_en": "High-arc outlet provides more washing space and suits deeper kitchen sinks."}, {"code": "OW1091", "category": "kitchen", "name_zh": "厨房旋转水龙头", "name_en": "Swivel Kitchen Faucet", "material": "201 Stainless Steel", "finish": "Gun Grey", "mount": "Deck Mounted", "desc_zh": "可旋转出水管设计，方便多角度清洗与双槽使用。", "desc_en": "Swivel spout supports multi-angle washing and double-bowl sink use."}, {"code": "OW1003", "category": "kitchen", "name_zh": "墙式滚轮厨房水龙头", "name_en": "Wall Mounted Roller Faucet", "material": "201 Stainless Steel", "finish": "Gun Grey", "mount": "Wall Mounted", "desc_zh": "墙式安装与滚轮手柄设计，操作顺畅，适合厨房与洗衣区。", "desc_en": "Wall-mounted design with a smooth roller handle for kitchens and laundry areas."}, {"code": "OW1004", "category": "kitchen", "name_zh": "台式滚轮厨房水龙头", "name_en": "Deck Mounted Roller Faucet", "material": "201 Stainless Steel", "finish": "Gun Grey", "mount": "Deck Mounted", "desc_zh": "现代枪灰外观，台式安装，适合家用与商业厨房。", "desc_en": "Modern gun-grey finish with deck mounting for residential and commercial kitchens."}, {"code": "OW1012-GG", "category": "bidet", "name_zh": "双向增压喷枪龙头套装", "name_en": "Two-Way Pressure Bidet Set", "material": "Copper Body", "finish": "Gun Grey", "mount": "Wall Mounted", "desc_zh": "双向出水设计，配增压喷枪与喷枪架，适合浴室清洁。", "desc_en": "Two-way outlet with pressure bidet head and holder for everyday bathroom cleaning."}, {"code": "OW1012-SS", "category": "bidet", "name_zh": "双向增压喷枪龙头套装", "name_en": "Two-Way Pressure Bidet Set", "material": "Copper Body", "finish": "Stainless Silver", "mount": "Wall Mounted", "desc_zh": "亮银色双向套装，结合水龙头与喷枪功能，节省墙面空间。", "desc_en": "Silver two-way set combining faucet and bidet functions to save wall space."}, {"code": "OW7", "category": "drain", "name_zh": "40mm 加强型伸缩排水管", "name_en": "40mm Solid Flexible Trap", "material": "Reinforced Polymer", "finish": "White", "mount": "Basin / Sink", "desc_zh": "加强耐热设计，附 32mm 与 50mm 转换接头，适合多种排水安装。", "desc_en": "Heat-resistant reinforced trap with 32mm and 50mm adapters for flexible installation."}, {"code": "OW-SPA4", "category": "shower", "name_zh": "SPA 四功能增压花洒套装", "name_en": "SPA 4-Function Pressure Shower Set", "material": "ABS / Stainless Hose", "finish": "Sky Blue / Gun Grey", "mount": "Wall Mounted", "desc_zh": "四种出水模式，配 1.5 米增压软管，适合日常淋浴使用。", "desc_en": "Four spray modes with a 1.5m pressure hose for comfortable daily showering."}, {"code": "OW-304-TW", "category": "bidet", "name_zh": "SUS304 双向龙头带喷枪架", "name_en": "SUS304 Two-Way Faucet with Holder", "material": "SUS304", "finish": "Stainless Steel", "mount": "Wall Mounted", "desc_zh": "SUS304 不锈钢主体，双向出水并结合喷枪架设计。", "desc_en": "SUS304 stainless steel body with two-way outlet and integrated bidet holder."}, {"code": "OW-AV-GG", "category": "valve", "name_zh": "大流量角阀", "name_en": "Large Flow Angle Valve", "material": "Copper Body", "finish": "Gun Grey", "mount": "Wall Mounted", "desc_zh": "大流量通道设计，适合浴室、厨房及热水器进水连接。", "desc_en": "High-flow channel suitable for bathroom, kitchen and water-heater inlet connections."}, {"code": "OW-POP32", "category": "drain", "name_zh": "32mm 面盆弹跳下水器", "name_en": "32mm Basin Pop-Up Waste", "material": "Copper Core", "finish": "Chrome", "mount": "Basin", "desc_zh": "按压式开关，铜芯结构，适合标准 32mm 面盆排水口。", "desc_en": "Push-button operation with copper core for standard 32mm basin waste openings."}];

function setLanguage(next) {
  lang = next;
  localStorage.setItem("oceanwayLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  document.querySelectorAll("[data-zh]").forEach(el => {
    el.textContent = el.dataset[lang] || el.textContent;
  });
  document.querySelectorAll(".lang-switch").forEach(btn => btn.textContent = lang === "zh" ? "EN" : "中文");
}

document.querySelectorAll(".lang-switch").forEach(btn => btn.addEventListener("click", () => setLanguage(lang === "zh" ? "en" : "zh")));
document.querySelectorAll(".mobile-menu").forEach(btn => btn.addEventListener("click", () => document.querySelector(".main-nav")?.classList.toggle("open")));

document.addEventListener("click", e => {
  const link = e.target.closest(".wa-link");
  if (!link) return;
  e.preventDefault();
  const msg = encodeURIComponent(link.dataset.message || "Hi OceanWay");
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, "_blank");
});

const search = document.getElementById("productSearch");
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".product-card");
let activeFilter = new URLSearchParams(location.search).get("category") || "all";
function applyFilter() {
  const q = (search?.value || "").toLowerCase().trim();
  let shown = 0;
  cards.forEach(card => {
    const matchCat = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchSearch = !q || card.dataset.code.includes(q) || card.textContent.toLowerCase().includes(q);
    card.hidden = !(matchCat && matchSearch);
    if (!card.hidden) shown++;
  });
  document.getElementById("emptyState")?.toggleAttribute("hidden", shown !== 0);
  filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === activeFilter));
}
filterBtns.forEach(btn => btn.addEventListener("click", () => { activeFilter = btn.dataset.filter; applyFilter(); }));
search?.addEventListener("input", applyFilter);
if (cards.length) applyFilter();

const waForm = document.getElementById("waForm");
waForm?.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(waForm);
  const text = [
    "Hi OceanWay, I would like to make an enquiry.",
    `Name/Company: ${f.get("name") || "-"}`,
    `Type: ${f.get("type") || "-"}`,
    `Model: ${f.get("model") || "-"}`,
    `Quantity: ${f.get("quantity") || "-"}`,
    `Delivery Area: ${f.get("area") || "-"}`,
    `Message: ${f.get("message") || "-"}`
  ].join("\n");
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
});

const detail = document.getElementById("productDetail");
if (detail) {
  const code = new URLSearchParams(location.search).get("code") || products[0].code;
  const p = products.find(x => x.code === code) || products[0];
  detail.innerHTML = `
    <div class="detail-image"><img src="assets/images/${p.code}.svg" alt="${p.name_en}"></div>
    <div class="detail-info">
      <span class="eyebrow">${p.code}</span>
      <h1 data-zh="${p.name_zh}" data-en="${p.name_en}">${lang==="zh"?p.name_zh:p.name_en}</h1>
      <p data-zh="${p.desc_zh}" data-en="${p.desc_en}">${lang==="zh"?p.desc_zh:p.desc_en}</p>
      <div class="spec-table">
        <div class="spec-row"><span data-zh="型号" data-en="Model">型号</span><b>${p.code}</b></div>
        <div class="spec-row"><span data-zh="材质" data-en="Material">材质</span><b>${p.material}</b></div>
        <div class="spec-row"><span data-zh="颜色" data-en="Finish">颜色</span><b>${p.finish}</b></div>
        <div class="spec-row"><span data-zh="安装方式" data-en="Installation">安装方式</span><b>${p.mount}</b></div>
      </div>
      <a class="btn primary wa-link" href="#" data-message="Hi OceanWay, I would like to enquire about ${p.code}." data-zh="WhatsApp 询价" data-en="Enquire on WhatsApp">WhatsApp 询价</a>
    </div>`;
}

setLanguage(lang);
