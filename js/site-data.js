/*
  Site content — all editorial text, links and portfolio items live here.
  Page layout and behaviour live in js/main.js; colours, fonts and spacing in css/style.css.
*/
window.SITE = {
  title: "Andrés Alegría | Data Graphics",

  // Main navigation (About and Services exist but are not linked, as on the Squarespace site)
  nav: [
    { label: "Portfolio", href: "index.html", page: "portfolio" },
    { label: "FAQs", href: "faqs.html", page: "faqs" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],

  social: [
    { label: "Behance", href: "https://www.behance.net/andres-alegria", text: "Bē" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/graphicsinscience", text: "in" }
  ],

  // Contact form: there is no backend, so submissions go to Web3Forms (web3forms.com),
  // which emails them on. The access key belongs in client-side code and is public.
  // hiddenFields: extra values posted with the form; subject and from_name shape the email you receive
  // email: fallback that opens the visitor's email app when endpoint is empty
  contactForm: {
    endpoint: "https://api.web3forms.com/submit",
    hiddenFields: {
      access_key: "00aaceb8-6230-4448-8030-af61e3e7e9cb",
      subject: "New message from graphicsinscience.com",
      from_name: "graphicsinscience.com"
    },
    email: "",
    heading: "Get in touch.",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send",
    mailSubject: "Website enquiry",
    successMessage: "Thank you! Your message has been sent.",
    errorMessage: "Sorry, something went wrong. Please try again later.",
    notConnectedMessage: "This form is not connected yet."
  },

  footer: {
    title: "Andrés Alegría | Data Graphics"
  },

  // ---------- Portfolio (home page) ----------
  home: {
    marquee: ["Information Design", "Cartography", "QGIS", "Tableau", "R Studio", "Graphic Design", "Layout", "Mapbox", "Illustrator", "StoryMaps"],
    intro: [
      `<p>Hello. I’m Andrés Alegría, a visual science communicator. My work blends graphic design skills with an academic background in ecology, where I first applied research data to influence nature conservation policies and support stakeholder engagement through out Central America. I’m a tree hugger :-)</p>`,
      `<p>Whether you need a data-driven map, a clear infographic, or a full interactive visualization, I offer design services tailored to researchers, NGOs, and media organizations. Feel free to get in touch. You can also explore my <strong>portfolio below</strong> to see examples of past work.</p>`
    ],
    // Section edge shapes: points are [x in %, y from 0 (top) to 1 (bottom)] across the section's bottom edge
    introDivider: { height: "6vw", points: [[0, 0.142], [3.55, 0], [78.7, 1], [100, 0.15]] },
    contactDivider: { height: "6vw", points: [[0, 0.953], [3.55, 1], [28.6, 0], [100, 0.95]] }
  },

  // Carousels, in page order. Captions accept HTML (e.g. a link).
  portfolio: [
    {
      id: "maps",
      title: "Maps",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.942], [23.6, 0], [98.75, 1], [100, 0.95]] },
      items: [
        {
          src: "images/portfolio/maps/2026_014_AA_Brazil_Jaguar_v3_With_IT.jpg",
          width: 1500, height: 1200,
          alt: "Map showing the distribution of wolf packs in northeastern California, with ten packs marked including Whaleback, Harvey, Ashpan, Ice Cave, Ishi, Tunnison, Lassen, Bayem Seyo, Diamond, and Yowlumni. Main road network depicted in orange.",
          caption: "1"
        },
        {
          src: "images/portfolio/maps/2025_83_AA_Brazil_RockFormation_v3.jpg",
          width: 1500, height: 1200,
          alt: "Map of Brazil showing protected areas and Indigenous Territories in light green, the Tocantins River Basin in pink, and the Tocantins River, Araguaia River, and mouth of the Tocantins River. There is a label indicating a 35 km strip of Pedral do Lourenço to be blasted for a natural rock barrier. Text explains the Brazilian plan to blast 35 km of Pedral do Lourenço on the Tocantins River to enable boats to pass during dry season, with sources listed as WDPA and LandMark 2024. Scale bars for 500 km and 500 miles are at the bottom right.",
          caption: "2"
        },
        {
          src: "images/portfolio/maps/2025_78_AA_Brazil_Eucalyptus_v2.gif",
          width: 1350, height: 1080,
          alt: "Map showing eucalyptus plantation areas in Mato Grosso do Sul, Brazil, with locations labeled as Ribas do Rio Pardo, Água Clara, Selvíria, Três Lagoas, and Brasilândia. The map highlights the increase in plantation area from 2010 to 2023 and shows the Paraná River.",
          caption: "3"
        },
        {
          src: "images/portfolio/maps/2025_95_AA_Panama_Darien_v3.jpg",
          width: 1500, height: 1200,
          alt: "Map of the Darien Gap region highlighting areas in Panama and Colombia, showing the Darien National Park in Panama, parts of the Comarca Emberá Wounaan and Guna Yala regions, and the main road network.",
          caption: "4"
        },
        {
          src: "images/portfolio/maps/2025_104_AA_Brazil_Karipuna_v3_Map.jpg",
          width: 1500, height: 1200,
          alt: "Map of the Karipuna Indigenous Territory in Rondônia, Brazil, showing tree cover loss from January 2019 to July 2025 in pink, main road network in yellow, and a house recently built by an invader marked with a dot. The map indicates over 10,000 hectares impacted by illegal activities, with a scale of 20 km. The map source is Google Earth and Global Forest Watch.",
          caption: "5"
        },
        {
          src: "images/portfolio/maps/2025_61_AA_Chimpanzee_v1.jpg",
          width: 1500, height: 1200,
          alt: "Map showing the geographic range of four subspecies of common chimpanzee. Red for Pan troglodytes verus across Guinea, Sierra Leone, Liberia, and Côte d'Ivoire. Orange for P. troglodytes ellioti in Cameroon. Yellow for P. troglodytes troglodytes across Gabon, Equatorial Guinea, Cameroon, Sao Tome and Principe, and parts of Congo. Purple for P. troglodytes schweinfurthii covering Uganda, Rwanda, Burundi, Tanzania, and parts of Congo. Gray indicates protected areas.",
          caption: "6"
        },
        {
          src: "images/portfolio/maps/2025_70_AA_Ecuador_v5.jpg",
          width: 1500, height: 1200,
          alt: "Map of indigenous lands within the Cuyabeno Wildlife Reserve in Ecuador, highlighting disputed indigenous territories in yellow, indigenous territories in grey with diagonal lines, and protected areas in dark green. The map also shows neighboring countries, including Colombia, Peru, and Ecuador, with a small globe icon indicating the Northern Ecuadorian Amazon.",
          caption: "7"
        },
        {
          src: "images/portfolio/maps/2025_85_AA_Thailand_MaeLaLuang_v3.jpg",
          width: 1500, height: 1200,
          alt: "Map highlighting the Mae La Noi district in northern Thailand and the Mae La Luang River, with proposed fluoride mine locations and main road network, warning about contamination risks.",
          caption: "8"
        },
        {
          src: "images/portfolio/maps/2025_75_AA_Brazil_Bioceanic_Railway_v7.jpg",
          width: 1500, height: 1200,
          alt: "Map showing a planned railway corridor connecting Chancay Port in Peru to Ilhéus in Brazil, passing through Cusco, Rio Branco, Porto Velho, Lucas do Rio Verde, and Mara Rosa, with different lines indicating existing and planned railways in South America.",
          caption: "9"
        },
        {
          src: "images/portfolio/maps/2025_92_AA_CITES_Leopards_Map_v2.jpg",
          width: 1500, height: 1200,
          alt: "Map showing global trade flow of leopards based on permits issued between 2000 and 2024, with major hotspots in South Africa, Zimbabwe, and Namibia, and the US as a top importer, sourced from CITES.",
          caption: "10"
        },
        {
          src: "images/portfolio/maps/2025_76_AA_DRC_New_Oil_Blocks_v3.jpg",
          width: 1500, height: 1200,
          alt: "Map of the Democratic Republic of Congo showing new oil exploration blocks, existing protected areas, and the Kinshasa-Kivu Green Corridor project area, with label for Kinsasha and Muanda along the coastline.",
          caption: "11"
        },
        {
          src: "images/portfolio/maps/2025_113_AA_Nashulai_v2.jpg",
          width: 1500, height: 1200,
          alt: "Map showing the Nashulai Maasai Conservancy in Kenya, its protected areas, and its boundaries within the Greater Serengeti-Mara Ecosystem, with main roads and the Kenya-Tanzania border indicated.",
          caption: "12"
        },
        {
          src: "images/portfolio/maps/2025_65_AA_DRC_v1_EN.jpg",
          width: 1500, height: 1200,
          alt: "Map of the Democratic Republic of the Congo showing protected areas, national parks, and regions with rebel control, including Virunga, Kahuzi-Biega, Upemba, and other parks, with a legend and inset globe indicating location in Africa.",
          caption: "13"
        },
        {
          src: "images/portfolio/maps/2026_003_AA_ChinaVessels_v10_Viz_8.jpg",
          width: 1500, height: 1200,
          alt: "Map showing Belize with a focus on the Spanish Lookout Mennonites' wildlife corridor. It depicts protected areas, proposed conservation areas, an active quarry, an older quarry, and areas cleared by Mennonites. Main roads are marked, and scale bars are provided.",
          caption: "14"
        },
        {
          src: "images/portfolio/maps/2025_19_Nepal_Elephants_v2.jpg",
          width: 1500, height: 1000,
          alt: "Map of Nepal showing protected areas, road network, traditional elephant migration route, and key locations such as Shuklaphanta, Bardia National Park, Chitwan National Park, Kathmandu, Sundar Haricha, and Bahundangi. The map includes a small inset world map highlighting Nepal's location.",
          caption: "15"
        },
        {
          src: "images/portfolio/maps/2025_60_AA_Monkeyfarms_v4.jpg",
          width: 1500, height: 1200,
          alt: "Map of Southeast Asia showing suspected locations of monkey breeding farms in Cambodia, Vietnam, and Laos, with a legend listing farm names and numbers, protected areas in green, and a smuggling point marked with an orange circle.",
          caption: "16"
        },
        {
          src: "images/portfolio/maps/2025_59_AA_Thailand_Dugongs_v4.jpg",
          width: 1500, height: 1200,
          alt: "Map showing dugong migration paths along Thailand's west coast, from Myanmar to Malaysia, passing through Phang Nga Bay, Phuket, Krabi, Trang, Koh Libong, and oil spill marked areas, highlighting Hat Chao Mai Marine National Park in yellow. Small icons of dugongs are present along the paths.",
          caption: "17"
        },
        {
          src: "images/portfolio/maps/2025_128_AA_Thailand_NitrogenDioxide_v2_Compressed.gif",
          width: 1350, height: 1080,
          alt: "Map",
          caption: "18"
        }
      ]
    },
    {
      id: "charts",
      title: "Charts",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.246], [37.8, 1], [87.9, 0], [100, 0.242]] },
      items: [
        {
          src: "images/portfolio/charts/2025_91_AA_CITES_Leopards_Chart_v3.jpg",
          width: 1500, height: 1200,
          alt: "A graph showing the number of international permits issued for trade leopards over 25 years, categorized by permit type, with a significant decline in permits issued since 2014.",
          caption: "1"
        },
        {
          src: "images/portfolio/charts/2025_96_AA_ClimateBancking_v5-02.jpg",
          width: 1500, height: 1200,
          alt: "Bar chart comparing fossil fuel financing by top 10 banks in 2023 and 2024, with percentage increases at the top. JPMorgan Chase had the highest 2024 investment, followed by Bank of America and Citigroup. The chart shows green bars for 2023 investments and dark bars for 2024 investments, with dollar amounts on the y-axis.",
          caption: "2"
        },
        {
          src: "images/portfolio/charts/2025_160_AA_CBD_Finance_v3_CopyEdited.jpg",
          width: 1500, height: 1200,
          alt: "Bar chart depicting fossil fuel financing trends from 2021 to 2024, showing financing amounts in billions of dollars, with the highest in 2021 at $922 billion and the lowest in 2023 at $707 billion. 2024 financing is projected at $869 billion, with an increase of over $162 billion from 2023.",
          caption: "3"
        },
        {
          src: "images/portfolio/charts/2025_96_AA_ClimateBancking_v5-03.jpg",
          width: 1500, height: 1200,
          alt: "Line graph showing cumulative fossil fuel financing from 2016 to 2024, reaching $7.9 trillion in 2024, with data points labeled each year and a background overlay of US dollar bills.",
          caption: "4"
        },
        {
          src: "images/portfolio/charts/2025_104_AA_Brazil_Karipuna_v3_PT_Chart.jpg",
          width: 1500, height: 1200,
          alt: "Graph showing deforestation of Indigenous Karipuna land from 2014 to 2024, with peaks in 2017, 2018, and 2022. Notable events: 2022 peak marked as the highest deforestation point, and notes indicating that Lula's presidency in 2023 resulted in deforestation remaining in decline, with a federal operation removing invaders in 2024.",
          caption: "5"
        }
      ]
    },
    {
      id: "dashboards",
      title: "Dashboards",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.312], [51.7, 1], [76.75, 0], [100, 0.309]] },
      items: [
        {
          src: "images/portfolio/dashboards/1739517558747.gif",
          width: 800, height: 800,
          alt: "Map illustrating moves to curtail bottom trawling in European Marine Protected Areas from 2023 to 2025, showing MPAs, EEA zones, and policy advocacy points.",
          caption: "1"
        },
        {
          src: "images/portfolio/dashboards/1734085544489.jpeg",
          width: 800, height: 800,
          alt: "Line charts showing global methane emission projections from 1990 to 2050, and main human sources of methane by sector (agriculture, energy, industrial, waste) with filters for country, region, and subregion.",
          caption: "2"
        },
        {
          src: "images/portfolio/dashboards/1734626854137.gif",
          width: 800, height: 800,
          alt: "Map of Africa showing protected areas, with filters by country, governance, and designation status, and a legend indicating extent in square kilometers for terrestrial and marine/costal areas.",
          caption: "3"
        },
        {
          src: "images/portfolio/dashboards/1736430176113.gif",
          width: 800, height: 800,
          alt: "Infographic showing extreme weather events of 2024, with icons representing storms, floods, landslides, wildfires, droughts, extreme temperatures, and glacial floods, and data on global and North country impacts.",
          caption: "4"
        }
      ]
    },
    {
      id: "schematics",
      title: "Schematics",
      theme: "white", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.986], [1.05, 1], [26.1, 0], [100, 0.983]] },
      items: [
        {
          src: "images/portfolio/schematics/schematics-05.jpg",
          width: 1500, height: 1200,
          alt: "Diagram showing the co-production and evolution of knowledge systems over time, with three stages labeled (a), (b), and (c). Each stage features stylized plant-like structures representing independently available knowledge systems, with an overlay of co-produced knowledge at the top, and an arrow indicating the trajectory of knowledge systems over time.",
          caption: "1"
        },
        {
          src: "images/portfolio/schematics/schematics-04.jpg",
          width: 1500, height: 1200,
          alt: "Flowchart illustrating governance of the ocean, coasts, and cryosphere under a changing climate, showing levels from local to global, including organizations, governments, indigenous bodies, and global institutions.",
          caption: "2"
        },
        {
          src: "images/portfolio/schematics/schematics-03.jpg",
          width: 1500, height: 1200,
          alt: "",
          caption: "3"
        },
        {
          src: "images/portfolio/schematics/schematics-07.jpg",
          width: 1500, height: 1200,
          alt: "Diagram showing effects of climate change on ocean ecosystems and biogeochemical processes, including impacts on canyon, slope, and seamount ecosystems, with labels for different ocean zones, features, and effects.",
          caption: "4"
        },
        {
          src: "images/portfolio/schematics/schematics-06.jpg",
          width: 1500, height: 1200,
          alt: "Diagram of glacier and ice sheet processes, showing ice flow, melting, calving, and sea level changes with color-coded elements and symbols.",
          caption: "5"
        },
        {
          src: "images/portfolio/schematics/schematics-02.jpg",
          width: 1500, height: 1200,
          alt: "Diagram illustrating human impacts and knowledge gaps in the deep sea, including activities like fishing, oil extraction, pollution, and mining affecting different benthic zones, with sections on environmental stratification, ecosystem services, and governance institutions.",
          caption: "6"
        },
        {
          src: "images/portfolio/schematics/schematic-1.jpg",
          width: 1500, height: 1200,
          alt: "Diagram illustrating the cycle from deforestation to climate impacts, emphasizing how community conservation efforts and sustainable infrastructure can mitigate deforestation, restore ecosystems, and reduce climate change effects.",
          caption: "7"
        }
      ]
    },
    {
      id: "storymaps",
      title: "StoryMaps",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.246], [37.8, 1], [87.9, 0], [100, 0.242]] },
      items: [
        {
          src: "images/portfolio/storymaps/StoryMap_1.png",
          width: 1500, height: 867,
          alt: "1",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://india.mongabay.com/2025/11/quarries-devour-buffer-forests-of-western-ghats-after-sand-mining-ban/\">Full story here</a>"
        },
        {
          src: "images/portfolio/storymaps/ScrollyMap_2.png",
          width: 1500, height: 870,
          alt: "2",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://news.mongabay.com/2025/09/cambodian-irrigation-dam-construction-threatens-riverine-communities-in-the-cardamoms/\">Full story here</a>"
        },
        {
          src: "images/portfolio/storymaps/ScrollyMap_1.png",
          width: 1500, height: 868,
          alt: "3",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://news.mongabay.com/custom-story/2025/09/satellite-images-reveal-oil-project-surge-in-ugandan-park-and-wetland/\">Full story here</a>"
        },
        {
          src: "images/portfolio/storymaps/Screenshot_2026-03-24_at_12.47.04.jpg",
          width: 1500, height: 680,
          alt: "Interactive StoryMap",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/\">Full story here</a>"
        },
        {
          src: "images/portfolio/storymaps/Scrolly.png",
          width: 1500, height: 874,
          alt: "Scrolly preview",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://india.mongabay.com/2026/05/what-a-coastal-zoning-map-leaves-out-explained-through-maps/\">Full story here</a>"
        }
      ]
    },
    {
      id: "3d-maps",
      title: "3D Interactive Maps",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.246], [37.8, 1], [87.9, 0], [100, 0.242]] },
      items: [
        {
          video: "images/portfolio/3d-maps/Marianas.mp4",
          poster: "images/portfolio/3d-maps/Marianas-poster.jpg",
          width: 800, height: 620,
          alt: "1",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://news.mongabay.com/2025/12/deep-sea-mining-interests-raise-alarms-among-mariana-trench-communities/\">Full story here</a>"
        },
        {
          video: "images/portfolio/3d-maps/Honduras.mp4",
          poster: "images/portfolio/3d-maps/Honduras-poster.jpg",
          width: 640, height: 576,
          alt: "2",
          caption: "<a target=\"_blank\" rel=\"noopener\" href=\"https://honduras.pubpub.org\">Full story here</a>"
        }
      ]
    },
    {
      id: "layouts",
      title: "Layouts",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.001], [75.05, 1], [100, 0.004]] },
      items: [
        {
          src: "images/portfolio/layouts/Portfolio_-01.jpg",
          width: 1500, height: 1200,
          alt: "An open magazine showing articles about fisheries and underwater exploration, with the cover page titled \"LA OLA\" featuring an underwater photo of a fishing scene and a fish.",
          caption: "1"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-02.jpg",
          width: 1500, height: 1200,
          alt: "An open magazine , with a person in a white coat and wide-brimmed hat on the cover, another page featuring a colorful topographic map of the northern coast of Honduras. ",
          caption: "2"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-06.jpg",
          width: 1500, height: 1200,
          alt: "Stack of newspapers on an orange background, with headlines about Honduras, artificial reefs, and fishing, featuring images of a beach, a fish, and people at the beach.",
          caption: "3"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-08.jpg",
          width: 1500, height: 1200,
          alt: "A handbook titled 'Handbook for Authors' has a graphic of a hand holding a leaf with a circular patterned background, and features the logos of IPCC and the Intergovernmental Panel on Climate Change.",
          caption: "4"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-07.jpg",
          width: 1500, height: 1200,
          alt: "Brochure titled 'Guia Metodologica para evaluar el desarrollo de las zonas de recuperación pesquera en ecosistemas marinos del Caribe Hondureño' with a graphic of a fish tank with fish and a grid chart, dated May 2018, authored by Andre Alvarado, with CEM logo.",
          caption: "5"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-14.jpg",
          width: 1500, height: 1200,
          alt: "Three pink booklets titled \"How to Adapt to a Changing Climate: Summary for All\" with icons related to climate change on the cover.",
          caption: "6"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-10.jpg",
          width: 1500, height: 1200,
          alt: "Brochure for artisanal fisheries in Guanjá, displaying text and diagrams about the area's marine resources and management policies.",
          caption: "7"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-03.jpg",
          width: 1500, height: 1200,
          alt: "Brochure about fishing licenses, showing various ID cards, fish images, and information on artisanal and industrial fishing licenses in Spanish.",
          caption: "8"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-04.jpg",
          width: 1500, height: 1200,
          alt: "Open brochure with blue background, yellow and white text, and images of people and a landscape. The brochure discusses a municipal strategic development plan.",
          caption: "9"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-05.jpg",
          width: 1500, height: 1200,
          alt: "Two folded pamphlets on pink background, one titled \"Ley de la PESA\" in Spanish, with a picture of a man holding a spear, and the other with visible text in Spanish.",
          caption: "10"
        },
        {
          src: "images/portfolio/layouts/Portfolio_-09.jpg",
          width: 1500, height: 1200,
          alt: "A tri-fold brochure about hammerhead sharks, highlighting conservation efforts, identification guides, and regional regulations. The front features an image of a hammerhead shark swimming underwater.",
          caption: "11"
        }
      ]
    },
    {
      id: "peer-reviewed",
      title: "Peer-reviewed",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.161], [63.05, 1], [88.1, 0], [100, 0.158]] },
      items: [
        {
          src: "images/portfolio/peer-reviewed/1733307062760.jpeg",
          width: 1500, height: 1501,
          alt: "Open magazine or journal page titled \"Progress and gaps in climate change adaptation in coastal cities across the globe\" with charts and graphs about climate risks and vulnerabilities.",
          caption: "1"
        },
        {
          src: "images/portfolio/peer-reviewed/1733306697481.jpeg",
          width: 1500, height: 1501,
          alt: "Page from academic journal titled 'The tragedy of climate change science' with a graph showing responses by science to climate change since 1970, and indicators of adverse change.",
          caption: "2"
        },
        {
          src: "images/portfolio/peer-reviewed/1733307273965.jpeg",
          width: 1500, height: 1501,
          alt: "Open publication of a scientific article titled 'A global assessment of factors and their roles in climate change adaptation' with colorful pie charts and data visualizations on climate adaptation by region and actor type.",
          caption: "3"
        },
        {
          src: "images/portfolio/peer-reviewed/1733396318491.jpeg",
          width: 1500, height: 1501,
          alt: "Scientific article titled 'Towards an IPCC Atlas for comprehensive climate change risk assessments' with maps and diagrams about climate risk, exposure, and response, and authors listed below the title.",
          caption: "4"
        },
        {
          src: "images/portfolio/peer-reviewed/1733475367753.jpeg",
          width: 1500, height: 1501,
          alt: "A magazine page from the Journal of Environmental Management discussing how declining snow cover affects winter tourism and the potential adaptation strategies, including artificial snow-making and alternative winter activities.",
          caption: "5"
        },
        {
          src: "images/portfolio/peer-reviewed/1735909753001.jpeg",
          width: 800, height: 800,
          alt: "Map of Africa highlighting six countries with numbered icons and descriptions of artificial intelligence applications in agriculture: Ghana (yield prediction), Nigeria (smart irrigation), Ethiopia (agricultural extension), Kenya (crop disease detection), Rwanda (AI and IoT integration), South Africa (livestock monitoring).",
          caption: "6"
        },
        {
          src: "images/portfolio/peer-reviewed/_linkedin-09.jpg",
          width: 1500, height: 1500,
          alt: "Example of graphics in this paper.",
          caption: "7"
        }
      ]
    },
    {
      id: "ipcc",
      title: "Distilling complex datasets, examples from the IPCC",
      theme: "light", // "light" or "white" section background
      divider: { height: "2vw", points: [[0, 0.768], [19.25, 0], [94.4, 1], [100, 0.776]] },
      items: [
        {
          src: "images/portfolio/ipcc/ipcc-06.jpg",
          width: 1500, height: 1620,
          alt: "Map of Sweden showing reindeer herding areas with a list of factors affecting indigenous reindeer livelihood, weather condition impacts, effects on people and animals, and land pressure effects, with icons indicating impacts and their severity.",
          caption: "1"
        },
        {
          src: "images/portfolio/ipcc/ipcc-08.jpg",
          width: 1500, height: 1620,
          alt: "A chart showing projected changes in risk levels of pluvial flooding, extreme heat, and meteorological drought across 65 European cities over mid and far future periods. The chart uses colored dots and shaded areas to indicate risk levels, population size, and European regions.",
          caption: "2"
        },
        {
          src: "images/portfolio/ipcc/ipcc-05.jpg",
          width: 1500, height: 1620,
          alt: "A detailed infographic showing the relationship between sea level rise and flooding in Venice from 1900 to 2020. The upper section illustrates rising relative sea levels, flood events, and significant water management milestones. The middle section projects future sea level rises with confidence ranges and milestones for lagoon closures. The lower section visualizes projected sea level rises in Venice with confidence intervals. The right side features a satellite map of Venice highlighting key features like the city center, lagoon, barrier islands, and inlets connecting to the sea, with annotations explaining flood prevention infrastructure.",
          caption: "3"
        },
        {
          src: "images/portfolio/ipcc/ipcc-07.jpg",
          width: 1500, height: 1620,
          alt: "A detailed chart titled 'Rapid assessment of relative risk by sector and climate hazard for North America,' showing levels of risk for various sectors and hazards using colored squares to indicate risk levels, with legend indicating purple for very high, red for high, yellow for moderate, and white for not applicable or not assessed.",
          caption: "4"
        },
        {
          src: "images/portfolio/ipcc/ipcc-04.jpg",
          width: 1500, height: 1620,
          alt: "Map and charts illustrating climate risks to hydropower and irrigation in Africa, including distribution of hydropower plants, correlation of river flows, capacity, forecast revenues, and irrigation data for major river basins like Congo, Nile, Zambezi, Niger, and Senegal.",
          caption: "5"
        },
        {
          src: "images/portfolio/ipcc/ipcc-03.jpg",
          width: 1500, height: 1620,
          alt: "A detailed infographic explaining how climate change impacts food security through water issues, divided into three sections. The first section shows a timeline of food production loss events from 1970 to 2013, highlighting an increase in drought-related and other climate-related events. The second section projects the rise of land and population affected by droughts from 2006 to 2099. The third section compares impacts across regions and water systems on crop yield and water quality, with various symbols indicating positive or negative influences and confidence levels.",
          caption: "6"
        },
        {
          src: "images/portfolio/ipcc/ipcc-02.jpg",
          width: 1500, height: 1620,
          alt: "A detailed infographic showing the impacts of climate change on ecosystems and human systems worldwide, divided into sections for impacts on ecosystems and human systems, with various geographic regions and categories.",
          caption: "7"
        },
        {
          src: "images/portfolio/ipcc/ipcc-09.jpg",
          width: 1500, height: 1620,
          alt: "Chart illustrating risk management options in society, categorized by risk type such as coastal systems, ecosystems, infrastructure, health, food security, water security, peace, and migration, with color-coded confidence levels and governance responsibilities.",
          caption: "8"
        },
        {
          src: "images/portfolio/ipcc/ipcc-13.jpg",
          width: 1500, height: 1620,
          alt: "Graph titled 'Global aggregate economic impact estimates by global warming level' showing multiple charts. The first four show estimated percentage loss in global GDP relative to global temperature increase, using different modeling methods: statistical, structural, meta-analyses, and AR5 methods. The fifth chart shows global average temperature change over time at different warming levels, with projections for near 2000s, mid-2050s, and long 2090s, color-coded by warming levels from 1.9°C to 5.8°C.",
          caption: "9"
        },
        {
          src: "images/portfolio/ipcc/ipcc-10.jpg",
          width: 1500, height: 1620,
          alt: "A chart displaying the urban adaptation gap to current climate risks across different regions and adaptation actions, with categories including Africa, Asia, Australasia, the Americas, Europe, North America, and Small Islands. The chart compares high and lower income exposure populations and shows adaptation measures for flood, storm, heatwaves, water, and food security.",
          caption: "10"
        },
        {
          src: "images/portfolio/ipcc/ipcc-11.jpg",
          width: 1500, height: 1620,
          alt: "Diagram illustrating how European regions are connected through financial linkages that distribute flood damage costs to other parts of the world. The diagram shows arcs from Europe to regions worldwide, with bubbles representing costs in millions of USD, highlighting the impact of flood risks and adaptation levels.",
          caption: "11"
        },
        {
          src: "images/portfolio/ipcc/ipcc-12.jpg",
          width: 1500, height: 1620,
          alt: "A scientific chart showing projected global temperature change from 1950 to 2100 under different scenarios, with risk levels for climate concerns indicated by color-coded bars representing very high, high, moderate, and undetectable risks. The chart also lists reasons for concern related to climate impacts, such as systems threatened and impacts magnitude.",
          caption: "12"
        }
      ]
    }
  ],

  // ---------- FAQs ----------
  faqs: {
    title: "FAQs",
    items: [
      {
        question: "Can you design publication-ready figures, maps, and data visualizations for my scientific paper or environmental story?",
        answer: [
          `Yes. I specialize in publication-ready figures and maps for scientific articles, reports, and environmental journalism. I regularly work with climate, ecology, conservation and social–environmental datasets and know how to translate complex results into clear, accurate visual stories.`,
          `For scientific publications, I follow journal guidelines (size, resolution, color profiles, typography) and deliver editable vector files (typically PDF, SVG, AI, or EPS) plus high-resolution PNGs or TIFFs for submission systems. For media outlets, I adapt the same graphics to work well both on screen and in print, including variations for social media or story headers when needed.`,
          `I can help with maps, charts, infographics, schematics, and multi-panel figures – from first sketch to final layout – so that your visuals are both scientifically robust and visually consistent with your paper, report, or article.`
        ]
      },
      {
        question: "I already have my data (spreadsheets, R scripts, or GIS files) or preliminary graphics. How can you help me turn it into clear, accurate graphics?",
        answer: [
          `Most of my projects start exactly like this: you already have the data and analysis, and perhaps a few graphic outputs, you need help turning them into clear, story-driven visuals.`,
          `You can send me spreadsheets, R/Python outputs, GIS layers (QGIS, shapefiles, GeoPackage, GeoJSON), or dashboard exports. I first review the material and ask a few targeted questions about your key message, audience, and constraints (journal guidelines, report format, platform, etc.). Then I propose a set of visual options: which charts or maps make sense, which comparisons to highlight, and how to simplify without losing scientific nuance.`,
          `From there I create design drafts – for example, map layouts in QGIS/Mapbox, charts based on your data, or schematic diagrams summarizing your framework or methods. You stay in control of the analysis and interpretation; I focus on visual clarity, accessibility, and accurate representation of your results. Final files are delivered in formats you can directly use in manuscripts, presentations, StoryMaps, or web articles.`
        ]
      },
      {
        question: "How do you work in terms of pricing, timelines, and remote collaboration with clients across the world?",
        answer: [
          `I work with clients internationally, so almost all of my projects are remote. We usually start with a short call or email exchange where you describe your project, share sample material (data, draft figures, article outline), and tell me about your deadlines and target outlet (journal, report, media story, etc.).`,
          `Pricing depends on scope and complexity: for small, well-defined tasks (for example, polishing a single figure or map) I often propose a fixed price; for larger projects (a full set of figures, a report layout, or an interactive piece) I estimate based on expected days of work. In every case, you receive a clear quote before we start, with what’s included (number of figures, feedback rounds, file formats).`,
          `For collaboration, I’m flexible: we can work via email, shared folders, or your preferred project tools. I send drafts at key stages so you can comment, and we iterate until the visuals match both your scientific standards and your communication goals. I’m based in Germany (CET), but I regularly coordinate with teams across different time zones.`
        ]
      }
    ]
  },

  // ---------- Contact ----------
  contact: {
    intro: [
      `<p>I enjoy translating scientific information into clear and visually engaging graphics. I usually collaborate with researchers, scientists and journalists covering environmental conservation topics such as fisheries, biodiversity and climate change.</p>`,
      `<p>Feel free to get in touch —I’d be glad to discuss how we can bring your project to life.</p>`
    ],
    divider: { height: "2vw", points: [[0, 0.953], [3.55, 1], [28.6, 0], [100, 0.95]] }
  },

  // ---------- About (not in the navigation) ----------
  about: {
    title: "About",
    text: [
      `<p>Hello. I’m a graphic designer specializing in visual science communication, with extensive experience creating data-driven graphics. My work blends graphic design skills with an academic background in ecology, where I first applied research data to influence nature conservation policies and support stakeholder engagement through out Central America. I’m a tree hugger :-)</p>`,
      `<p>Whether you need a data-driven map, a clear infographic, or a full interactive visualization, I offer design services tailored to researchers, NGOs, and media organizations. Feel free to get in touch —I’d be glad to discuss how we can bring your project to life. You can also explore my <a href="index.html#section-maps"><strong>portfolio below</strong></a> to see examples of past work.</p>`
    ],
    photo: {
      src: "images/about/AndresAlegria_photo.png",
      width: 1000, height: 1000,
      alt: "Photo of Andres Alegria during a presentation at Mongabay event."
    }
  },

  // ---------- Services (not in the navigation) ----------
  services: {
    title: "Services",
    html: `
      <p><strong>Need support?</strong> We can help you design clear, professional and accessible graphics to communicate your research.</p>
      <p><strong>For your next paper</strong></p>
      <ul>
        <li>Figures</li>
        <li>Maps</li>
        <li>Graphical abstracts</li>
        <li>Social media threads</li>
        <li>Journal covers</li>
        <li>Page layouts</li>
        <li>Figure feedback</li>
      </ul>
      <p><strong>For your next conference</strong></p>
      <ul>
        <li>Posters</li>
        <li>Presentation slides</li>
        <li>Logos</li>
        <li>Infographics</li>
      </ul>`
  }
};
