import type { SubjectNotes } from "./types";

export const GEOGRAPHY: SubjectNotes = {
  id: "geography",
  name: "Geography",
  code: "0460",
  color: "bg-green-600",
  chapters: [
    {
      number: 1,
      title: "Population and Settlement",
      intro: "Population geography studies the distribution, density, growth, and movement of human populations. Understanding why people are unevenly distributed across the Earth, why populations grow at different rates, and why people migrate from one place to another is fundamental to explaining patterns of development, urbanisation, and resource pressure. Settlement geography examines why towns and cities form where they do, how they grow, and what problems their growth creates.",
      subheadings: [
        {
          title: "Population Distribution and Density",
          body: "Population distribution describes where people live across the Earth's surface. It is extremely uneven — about 90% of the world's population lives in the Northern Hemisphere, and vast areas such as the Sahara Desert, the Amazon rainforest, Siberia, and Antarctica are nearly empty. Population density is the number of people per unit area (usually per km²): density = total population / total area. High density areas (over 200 per km²) include river valleys (Nile, Ganges), coastal plains, and industrial cities. Low density areas include mountains, polar regions, deserts, and equatorial rainforests. Physical factors affecting distribution include: climate (temperate climates with reliable rainfall and moderate temperatures are most favourable; extreme cold, heat, or aridity discourage settlement); relief (flat, low-lying land is easier to farm, build on, and access than steep mountains); soil (fertile soils in river floodplains and volcanic regions attract agricultural settlement); water supply (proximity to rivers and reliable rainfall is essential for farming and drinking water). Human factors include: economic opportunities (jobs in industry, commerce, and services attract people to cities); historical factors (cities that developed as ports, trading centres, or administrative capitals continue to grow); political factors (government policies can encourage or force population movement to particular regions).",
          groups: [
            {
              subTitle: "Contrasting population densities",
              bullets: [
                "**Densely populated — the Nile Valley**: The Nile River provides water for irrigation in an otherwise arid desert. The fertile silt-rich floodplain supports intensive agriculture. Egypt's population of 100+ million is almost entirely concentrated in the 4% of the country that is the Nile Valley and Delta.",
                "**Sparsely populated — the Sahara Desert**: Extreme aridity (less than 250 mm of rain per year), high temperatures (over 50°C in summer), and poor soils make permanent large-scale settlement impossible. Only oases with groundwater access support small communities.",
                "**Densely populated — Bangladesh**: Flat, low-lying fertile delta, tropical monsoon climate with reliable rainfall, long history of rice cultivation, and high natural population growth have produced one of the world's highest population densities (~1,100 per km²).",
                "**Sparsely populated — Canadian Shield**: Thin acidic soils over ancient crystalline rock, long harsh winters, short growing season, and remoteness from markets make this vast area economically unattractive for settlement despite rich mineral resources."
              ]
            }
          ],
          recap: [
            "Define the term population density and explain how it is calculated. [2]",
            "Explain two physical factors and two human factors that affect where people choose to live. [8]",
            "Compare the population distribution of one densely populated region with one sparsely populated region you have studied. [6]",
            "Explain why river valleys tend to have high population densities. [3]"
          ]
        },
        {
          title: "Population Growth and the Demographic Transition Model",
          body: "The global population reached 8 billion in 2022 and continues to grow, though growth rates vary enormously between regions. Population growth rate = (birth rate - death rate) + net migration, expressed as a percentage. The Demographic Transition Model (DTM) describes how populations change as countries develop economically, moving through four stages. Stage 1 (pre-industrial): very high birth rates and very high death rates — population is stable but low. Disease, famine, and infant mortality keep death rates high; children provide labour and old-age security, keeping birth rates high. Stage 2 (early industrial): death rates fall rapidly (due to medical improvements, better sanitation, and food supply) while birth rates remain high — rapid population growth occurs. This is the pattern in many Sub-Saharan African countries today. Stage 3 (late industrial): birth rates fall as urbanisation increases (children become expensive rather than economically beneficial), education of women improves, contraception becomes available, and infant mortality falls reducing the need for large families. Stage 4 (post-industrial): low birth rates and low death rates — population growth nearly zero. This is the pattern in Western Europe, Japan, and North America. Some countries (Germany, Japan) are approaching or entering a potential Stage 5 with birth rates below replacement level, causing population decline.",
          groups: [
            {
              subTitle: "Causes of high birth rates in Stage 2 countries",
              bullets: [
                "**Children as economic assets**: In agricultural societies, children provide farm labour from a young age and support aging parents — large families are economically rational.",
                "**High infant mortality**: Parents have many children knowing some will die before adulthood. As child survival improves, families need fewer births to achieve the same surviving family size.",
                "**Lack of education and family planning**: Limited access to contraception and lack of education about family planning, particularly for women, keeps birth rates high.",
                "**Cultural and religious factors**: In some societies, large families confer social status. Some religious traditions discourage contraception. These cultural norms are slow to change even as economic conditions improve."
              ]
            }
          ],
          recap: [
            "Describe the changes in birth rate and death rate that occur between Stage 2 and Stage 3 of the Demographic Transition Model. [4]",
            "Explain why death rates fall rapidly in Stage 2 of the DTM. [4]",
            "Explain why birth rates begin to fall in Stage 3 of the DTM. [4]",
            "What problems might a country in Stage 4 of the DTM face due to low population growth? [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Natural Environments",
      intro: "Physical geography examines the natural processes that shape the Earth's surface — the movement of rivers, the work of glaciers, coastal processes, and the formation of distinctive landscapes. For Cambridge IGCSE Geography, students must understand the processes operating in fluvial (river), glacial, and coastal environments, and the human responses to the hazards and opportunities these environments present. Process-landform linkages — understanding how a process produces a specific landform — are the core of examination answers.",
      subheadings: [
        {
          title: "River Processes and Landforms",
          body: "Rivers erode, transport, and deposit material as they flow from their source to their mouth, creating distinctive landforms at each stage. Erosion processes are: hydraulic action (the force of moving water against the riverbed and banks, compressing air in cracks, weakening the rock); abrasion (the sandpaper effect of sediment carried by the river grinding against the bed and banks — the most effective erosion process); attrition (sediment particles colliding with each other, breaking into smaller, rounder pieces as they are transported); solution (soluble minerals in rock, particularly limestone, are dissolved in the slightly acidic river water). Transport processes are: traction (large boulders rolled along the riverbed by fast-flowing water); saltation (medium particles bounced along the bed); suspension (fine sediment carried within the water column, giving turbid rivers their brown colour); solution (dissolved minerals transported in the water itself). Deposition occurs when the river's velocity falls below the critical velocity needed to transport a given particle size. Landforms: in the upper course, V-shaped valleys and waterfalls form where rivers have steep gradients and high erosive energy. A waterfall forms where resistant rock overlies less resistant rock — the softer rock is undercut, the resistant caprock collapses, and the waterfall retreats upstream, leaving a gorge. In the lower course, the valley floor widens into a floodplain. Meanders migrate across the floodplain by erosion of the outer bend (river cliff) and deposition on the inner bend (slip-off slope or point bar). Over time, meanders become so curved that the river cuts through the neck, abandoning the loop as an oxbow lake.",
          groups: [
            {
              subTitle: "Waterfall formation — step by step",
              bullets: [
                "**Step 1**: River flows over a band of hard resistant rock (e.g. granite) overlying softer rock (e.g. limestone). The hard rock is more resistant to erosion than the soft rock beneath.",
                "**Step 2**: Hydraulic action and abrasion erode the softer rock faster, undercutting the hard caprock, forming a notch.",
                "**Step 3**: The unsupported hard caprock overhangs and eventually collapses into the plunge pool.",
                "**Step 4**: The process repeats — the waterfall retreats upstream over time. The abandoned valley downstream of the waterfall becomes a steep-sided gorge.",
                "**Example**: Niagara Falls on the US-Canada border has retreated approximately 11 km upstream over 12,000 years, leaving a gorge behind it."
              ]
            }
          ],
          recap: [
            "Describe the process of hydraulic action and explain how it contributes to river erosion. [3]",
            "Explain with the aid of a diagram how a waterfall forms and retreats upstream. [6]",
            "Explain how a meander develops and how an oxbow lake is eventually formed. [5]",
            "Distinguish between the four processes of river transport. [4]"
          ]
        }
      ]
    }
  ]
};
