import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelA = imagePanel(IMG, [
  {
    src: "econ6-container-port.webp",
    alt: "A busy deep-water port at dusk with stacked shipping containers in many colours, gantry cranes lifting one container onto a huge vessel, and trucks moving along the quay",
    caption: "Trade is what specialisation makes possible",
  },
  {
    src: "econ6-textile-workshop.webp",
    alt: "A large garment factory floor with rows of sewing machines and mostly young women workers, bolts of fabric stacked at the end of the aisle",
    caption: "An MNC brings jobs, machines and export earnings",
  },
]);

const panelB = imagePanel(IMG, [
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

const panelC = imagePanel(IMG, [
  {
    src: "econ6-fx-board.webp",
    alt: "A currency exchange office window with an illuminated board of exchange rates against several world currencies, a traveller holding a passport at the counter",
    caption: "Floating rates move with demand and supply",
  },
  {
    src: "econ6-trade-ledger.webp",
    alt: "An open account book on a desk with two ruled columns of handwritten figures, one column clearly larger than the other, a calculator and pen resting on the page",
    caption: "Exports minus imports is the heart of the account",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "International Trade and Globalisation",
  intro: `Every question in this chapter has a winner and a loser: exporters against importers, consumers against domestic producers, the host country against the home country. Name both sides and the marks follow.\n\nLearn the four current-account components in order — they are a guaranteed place to score.`,
  subheadings: [
    {
      title: "Specialisation and Free Trade",
      body: `### Producing What You Are Best At

**Specialisation by country** is when a country concentrates on producing the goods and services it can make **most efficiently**, then trades for the rest. The basis is either the **best resource allocation** (it has the land, climate, skills or capital for it) or **low-cost production** relative to other countries.

**Free trade** is trade with **no government restrictions** — no tariffs, quotas or embargoes between countries.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Advantages and disadvantages of both",
          bullets: [
            "**Specialisation advantages**: higher output and productivity, lower unit costs, a wider range of goods for consumers, better use of a country's resources, and more export income.",
            "**Specialisation disadvantages**: **dependence on other countries** for essentials, vulnerability if demand for the specialised good falls, structural unemployment in the industries given up, and possible exploitation of workers or the environment.",
            "**Free trade advantages**: lower prices and greater choice, larger markets for firms, competition that drives efficiency and innovation, cheaper imports of raw materials, and the growth of export jobs.",
            "**Free trade disadvantages**: infant and declining industries are exposed to foreign competition and close, domestic jobs are lost, tax revenue from tariffs disappears, over-dependence on imports threatens security, and a race to the bottom on standards can follow.",
          ],
        },
      ],
    },
    {
      title: "Globalisation, Multinationals and Protection",
      body: `### The World Getting Smaller

**Globalisation** is the **increasing integration of the world's economies** through growing trade in goods and services, cross-border investment, and the movement of people, technology and information.

Its **causes**: falling or rising **trade restrictions**, falling **transport costs**, falling **communication costs** (internet, mobile, containerisation), and the **movement of multinational companies (MNCs)** seeking cheaper labour, resources, markets or taxes.

Its **effects** run on six channels the syllabus names: **international trade**, **competition**, **the environment**, **migration**, **income distribution**, and **economic development**.`,
      figure: panelB,
      groups: [
        {
          subTitle: "MNCs, and the four methods of protection",
          bullets: [
            "**MNCs benefit the host country** with jobs, training, tax revenue, technology transfer, infrastructure and export earnings. **They may harm it** by repatriating profits, crowding out local firms, repatriating decisions, exploiting cheap labour, damaging the environment, and wielding political influence.",
            "**MNCs benefit the home country** with repatriated profits, cheaper imports, and a larger global market for its own products; they **harm it** when jobs and production move abroad.",
            "**Tariff**: a tax on imports, raising their price and generating revenue. **Import quota**: a physical limit on quantity. **Subsidy**: help to domestic producers so they can undercut imports. **Embargo**: a total ban on trade in a good or with a country.",
            "**Reasons to restrict trade**: protect **infant (sunrise) industries**, protect **declining (sunset) industries**, protect **strategic industries** (food, energy, defence), **avoid dumping** (foreign sales below cost), **reduce a current account deficit**, **raise tax revenue**, **restrict demerit goods**, and **promote environmental sustainability**.",
            "**Consequences**: domestic consumers pay more and choose less, domestic producers gain protection and may become inefficient, government earns tariff revenue, trading partners retaliate with their own restrictions, export industries lose markets, and world trade shrinks.",
          ],
        },
      ],
    },
    {
      title: "Exchange Rates and the Current Account",
      body: `### The Price of a Currency

A **foreign exchange rate** is the price of one currency in terms of another. Currencies are bought and sold because of **trade in goods and services**, **speculation**, **government intervention in currency markets**, **payments of profit, interest and dividends between countries**, **workers' remittances**, and **investment in capital goods between countries**.

A **floating exchange rate** is set by demand and supply in that market with no government fixing. An **appreciation** is a rise in its value (it buys more foreign currency); a **depreciation** is a fall.`,
      figure: panelC,
      groups: [
        {
          subTitle: "What moves the rate, and what the rate moves",
          bullets: [
            "Rate **fluctuations** are caused by: changes in demand for **exports and imports**, changes in the **interest rate** (higher rates attract speculative funds, raising demand for the currency), and **speculation** itself.",
            "**Appreciation** makes imports cheaper and exports dearer: export volumes and export jobs fall, import-competing firms gain, inbound tourists find the country expensive, and inflation eases. **Depreciation** does the reverse — exports and tourism gain, imports and imported inflation rise.",
            "The **current account** has four components: **trade in goods** (visible), **trade in services** (invisible: tourism, shipping, banking, insurance), **primary income** (investment profits, interest, dividends, and workers' earnings abroad), and **secondary income** (transfers: remittances, aid, donations, EU-style budget contributions).",
            "**Balance on the current account = credits (receipts) minus debits (payments)**. A **surplus** means receipts exceed payments; a **deficit** means payments exceed receipts. Calculate each section first, then add them.",
            "**Deficit causes**: strong domestic demand for imports, uncompetitive exports, an appreciated currency, high oil or food prices, profits repatriated by MNCs, and more tourism spending abroad than inbound.",
            "**Deficit consequences**: lower GDP and jobs in export industries, possible depreciation and imported inflation, borrowing or reserve depletion, and pressure for protection — though cheap imports benefit consumers. A surplus shows competitiveness but can invite retaliation, appreciation, and a perception that the country under-consumes.",
            "**Policies for balance of payments stability**: expenditure-switching (depreciation, tariffs, quotas, subsidies for exporters), expenditure-reducing (contractionary fiscal and monetary policy), supply-side measures to raise export competitiveness, and trading agreements. Each has a cost — protection invites retaliation, and deflationary policy sacrifices jobs.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "**Depreciation** (currency) is not the same as **diminishing returns** or the depreciation of capital machines. Say the currency in words every time.",
            "Services go in **trade in services**, while income from investments abroad belongs in **primary income** — putting cruise-ship receipts in the wrong line is a classic error.",
            "A tariff raises **government revenue**; a quota does not, unless the government sells the licences.",
            "Higher interest rates usually **appreciate** a currency in the short run because of speculation, even though they also cut imports.",
            "Globalisation is not simply more trade — it is integration through trade, investment, movement of people and information.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_6 = chapterSix;
