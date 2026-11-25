import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelTrade = imagePanel(IMG, [
  {
    src: "econ6-container-port.webp",
    alt: "A busy deep-water port at dusk with stacked shipping containers in many colours, gantry cranes lifting one container onto a huge vessel, and trucks moving along the quay",
    caption: "Trade is what specialisation makes possible",
  },
]);

const panelGlobalisation = imagePanel(IMG, [
  {
    src: "econ6-textile-workshop.webp",
    alt: "A large garment factory floor with rows of sewing machines and mostly young women workers, bolts of fabric stacked at the end of the aisle",
    caption: "An MNC brings jobs, machines and export earnings",
  },
  {
    src: "econ6-customs-inspection.webp",
    alt: "A customs officer in a high-visibility jacket inspecting sealed pallets of imported goods at a warehouse loading dock, clipboard in hand and a scanner on a crate",
    caption: "Tariffs and quotas are the tools of protection",
  },
  {
    src: "econ6-cargo-warehouse.webp",
    alt: "An air-freight warehouse with pallets of parcels under bright lights, a cargo aircraft door open at the far end and workers moving goods on trolleys",
    caption: "Cheap transport and communication built globalisation",
  },
]);

const panelFx = imagePanel(IMG, [
  {
    src: "econ6-fx-board.webp",
    alt: "A currency exchange office window with an illuminated board of exchange rates against several world currencies, a traveller holding a passport at the counter",
    caption: "Floating rates move with demand and supply",
  },
]);

const panelAccount = imagePanel(IMG, [
  {
    src: "econ6-trade-ledger.webp",
    alt: "An open account book on a desk with two ruled columns of handwritten figures, one column clearly larger than the other, a calculator and pen resting on the page",
    caption: "Receipts minus payments is the heart of the account",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "International Trade and Globalisation",
  intro: `Every question in this chapter has a winner and a loser: exporters against importers, consumers against domestic producers, the host country against the home country. Name both sides and the marks follow.\n\nLearn the four current-account components in order — they are a guaranteed place to score.`,
  subheadings: [
    {
      title: "6.1 Specialisation and free trade",
      body: `### Producing What You Are Best At

**Specialisation by country** is when a country concentrates on producing the goods and services it can make **most efficiently** and trades for the rest. The basis for it is either the **best allocation of its resources** (the land, climate, skills or capital it has) or **low-cost production** relative to other countries.

**Free trade** is trade with **no government restrictions** — no tariffs, quotas or embargoes between countries.

Output from **one worker-hour** makes the gain visible:

| Country | Rice (kg) | Cloth (m) |
| --- | ---: | ---: |
| A | 6 | 2 |
| B | 3 | 4 |

If each country splits its worker-hour between both goods, the world produces **4.5 kg of rice and 3 m of cloth**. If **A takes rice and B takes cloth**, the two together produce **6 kg and 4 m** — more of both from the same labour.`,
      figure: panelTrade,
      groups: [
        {
          subTitle: "Advantages and disadvantages of both",
          bullets: [
            "**Specialisation advantages**: higher output and productivity, lower unit costs, a wider range of goods for consumers, better use of a country's resources, and more export income.",
            "**Specialisation disadvantages**: **dependence on other countries** for essentials, vulnerability if world demand for the specialised good falls, structural unemployment in the industries given up, and possible exploitation of workers or the environment.",
            "**Free trade advantages**: lower prices and greater choice, larger markets for firms, competition that drives efficiency and innovation, cheaper raw materials, and growth in export jobs.",
            "**Free trade disadvantages**: infant and declining industries are exposed and may close, domestic jobs are lost, tariff revenue disappears, over-dependence on imports threatens security, and standards can be raced downward.",
            "**Trap:** specialisation raises total output but not automatically every worker's income. Say who loses as well as who gains.",
          ],
        },
      ],
    },
    {
      title: "6.2 Globalisation and trade restrictions",
      body: `### The World Getting Smaller

**Globalisation** is the **increasing integration of the world's economies** through growing trade in goods and services, cross-border investment, and the movement of people, technology and information. It is not simply more trade.

Its **causes**: changes in **trade restrictions**, changes in **transport costs**, changes in **communication costs** (internet, mobile, containerisation), and the **movement of multinational companies (MNCs)** seeking cheaper labour, resources, markets or taxes.

Its **effects** run on the six channels the syllabus names: **international trade, competition, the environment, migration, income distribution, and economic development**.`,
      figure: panelGlobalisation,
      groups: [
        {
          subTitle: "The six channels, and the role of MNCs",
          bullets: [
            "**International trade** — volumes rise as barriers and freight costs fall, and goods cross borders as components rather than finished products.",
            "**Competition** — domestic firms face foreign rivals, rewarding the efficient and squeezing the rest, while consumers gain lower prices.",
            "**The environment** — more shipping and output means more pollution and resource use, though technology also spreads cleaner methods.",
            "**Migration** — jobs and MNCs move people, filling labour shortages in host countries while draining skills from origin countries.",
            "**Income distribution** — skilled workers and investors gain most, while low-skilled workers in high-cost countries can lose, so inequality can widen within a country even as it narrows between countries.",
            "**Economic development** — market access, capital and know-how can lift a poor country, but only where infrastructure and education let it use them.",
            "**MNCs benefit the host country** with jobs, training, tax revenue, technology transfer, infrastructure and export earnings; they **harm it** by repatriating profits, crowding out local firms, taking decisions abroad, exploiting cheap labour, damaging the environment and wielding political influence.",
            "**MNCs benefit the home country** with repatriated profits, cheaper imports and a larger world market; they **harm it** when jobs and production move offshore.",
          ],
        },
        {
          subTitle: "The four methods of protection, eight reasons, and the costs",
          bullets: [
            "**Tariff**: a tax on imports, which raises their price and generates government revenue.",
            "**Import quota**: a physical limit on the quantity that may be imported, which raises the domestic price and helps whoever holds the licences.",
            "**Subsidy**: assistance to domestic producers so they can undercut imports; it costs the treasury rather than the consumer directly.",
            "**Embargo**: a total ban on trade in a good or with a country, the strongest measure and the one that invites retaliation fastest.",
            "**Reasons for restricting trade**: protect **infant (sunrise) industries**, protect **declining (sunset) industries**, protect **strategic industries** such as food, energy and defence, **avoid dumping** (foreign sales below cost), **reduce a current account deficit**, **raise tax revenue**, **restrict demerit goods**, and **promote environmental sustainability**.",
            "**Consequences for the home country**: consumers pay more and choose less, domestic producers are shielded and may grow inefficient, government earns tariff revenue, and protected jobs are saved — at the cost of higher input prices for everyone downstream.",
            "**Consequences for trading partners**: their exports and jobs fall, they may **retaliate** with restrictions of their own, world trade shrinks, and relations strain.",
            "**Trap:** a tariff raises **government revenue**; a quota does not, unless the government sells the licences.",
          ],
        },
      ],
    },
    {
      title: "6.3 Foreign exchange rates",
      body: `### The Price of a Currency

A **foreign exchange rate** is the **price of one currency in terms of another**, written as dollars per pound or pesos per dollar.

Currencies are bought and sold for six examinable reasons: **trade in goods and services**, **speculation**, **government intervention in currency markets**, **payments of profit, interest and dividends between countries**, **workers' remittances**, and **investment in capital goods between countries**.

A **floating exchange rate** is set by demand and supply in that market with no government fixing. An **appreciation** is a rise in the currency's value, so it buys more foreign currency; a **depreciation** is a fall.`,
      figure: panelFx,
      groups: [
        {
          subTitle: "How the rate is determined, and what moves it",
          bullets: [
            "The **demand for a currency** comes from foreigners who need it to buy this country's exports, invest here, or speculate; it slopes down. The **supply** comes from residents who need foreign currency to buy imports or invest abroad; it slopes up.",
            "The **equilibrium exchange rate** is where those two curves cross — the same logic as Topic 2, with the price of the currency on the vertical axis and quantity of it on the horizontal.",
            "**Fluctuations** are caused by changes in demand for **exports and imports**, changes in the **rate of interest** (higher rates attract speculative funds, raising demand for the currency), and **speculation** itself.",
            "**Appreciation** makes imports cheaper and exports dearer: export volumes and export jobs fall, import-competing firms gain, inbound tourists find the country expensive, and imported inflation eases.",
            "**Depreciation** does the reverse: exports and tourism gain, import prices and imported inflation rise, and foreign debt costs more to repay.",
            "Trace a depreciation in order: the currency falls, exports become cheaper for foreign buyers, export volumes and jobs rise, import-competing firms win home customers — but fuel and raw materials cost more, so costs and prices rise too.",
            "**Trap:** **depreciation** of a currency is not the depreciation of machines or diminishing returns. Name the currency every time.",
          ],
        },
      ],
    },
    {
      title: "6.4 Current account of the balance of payments",
      body: `### Four Lines, One Balance

The **current account** records a country's transactions with the rest of the world in four components, always in this order: **trade in goods** (visible trade), **trade in services** (invisible trade: tourism, shipping, banking, insurance), **primary income** (investment profits, interest, dividends and workers' earnings abroad), and **secondary income** (transfers: remittances, aid, donations and budget contributions).

**Balance on the current account = credits (receipts) minus debits (payments)**. A **surplus** means receipts exceed payments; a **deficit** means payments exceed receipts.

Calculate each section first, then add the four balances — the syllabus asks for the components, not only the total.`,
      figure: panelAccount,
      groups: [
        {
          subTitle: "Worked calculation, causes and consequences",
          bullets: [
            "Work one, in billions of dollars: goods **exports 400, imports 500** gives **-100**; services **receipts 150, payments 90** gives **+60**; primary income **-20**; secondary income **-10**.",
            "Add the four: **-100 + 60 - 20 - 10 = -70**, so the current account is in **deficit of 70 billion dollars** — and the goods gap, not the transfers, is what to blame.",
            "**Deficit causes**: strong domestic demand for imports, uncompetitive exports, an appreciated currency, high oil or food prices, profits repatriated by MNCs, and more tourism spending abroad than inbound.",
            "**Surplus causes**: the mirror image — a competitive export sector, a weak currency, high saving, and large income receipts from overseas assets.",
            "**Consequences of a deficit**: lower **GDP** and jobs in export industries, a likely **depreciation** and imported **inflation**, borrowing or reserve depletion, and pressure for protection — while consumers enjoy cheap imports.",
            "**Consequences of a surplus**: jobs in export industries and reserve accumulation, but retaliation from partners, upward pressure on the **exchange rate**, and a sense that the country under-consumes.",
            "**Policies for balance of payments stability**: expenditure-switching (depreciation, tariffs, quotas, subsidies for exporters), expenditure-reducing (contractionary fiscal and monetary policy), supply-side measures to raise export competitiveness, and trading agreements.",
            "**Effectiveness**: switching policies risk retaliation and inflation, reducing policies sacrifice jobs and growth, and supply-side measures take years.",
            "**Trap:** services belong in **trade in services**, while income from investments abroad belongs in **primary income**. Putting cruise-ship receipts in the wrong line is a classic error.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_6 = chapterSix;
