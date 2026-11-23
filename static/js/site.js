(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  root.classList.add("js");

  
  const store = {
    get: (key) => localStorage.getItem(`ford-${key}`) ?? localStorage.getItem(`supersport-${key}`),
    set: (key, value) => localStorage.setItem(`ford-${key}`, value)
  };

  const mustangModels = [
    { name: "2028 Ford Mustang GTD 1901 Edition", generation: "7th Gen", imageFile: "2028-Ford-Mustang-GTD-1901-Edition-001-1080.jpg" },
    { name: "2026 Ford Mustang GTD Liquid Carbon", generation: "7th Gen", imageFile: "2026-Ford-Mustang-GTD-Liquid-Carbon-004-1080.jpg" },
    { name: "2026 Ford Mustang Dark Horse SC", generation: "7th Gen", imageFile: "2026-Ford-Mustang-Dark-Horse-SC-001-1080.jpg" },
    { name: "2025 Ford Mustang GTD Spirit of America", generation: "7th Gen", imageFile: "2025-Ford-Mustang-GTD-Spirit-of-America-001-1080.jpg" },
    { name: "2025 Ford Mustang GTD", generation: "7th Gen", imageFile: "2025-Ford-Mustang-GTD-002-1080.jpg" },
    { name: "2024 Ford Mustang GT", generation: "7th Gen", imageFile: "2024-Ford-Mustang-GT-001-1080.jpg" },
    { name: "2022 Ford Mustang Shelby GT500", generation: "6th Gen", imageFile: "2022-Ford-Mustang-Shelby-GT500-011-1080.jpg" },
    { name: "2021 Ford Mustang Mach 1", generation: "6th Gen", imageFile: "2021-Ford-Mustang-Mach-1-014-1080.jpg" },
    { name: "2020 Ford Mustang Shelby GT500", generation: "6th Gen", imageFile: "2020-Ford-Mustang-Shelby-GT500-011-1080.jpg" },
    { name: "2020 Ford Mustang Shelby GT350R", generation: "6th Gen", imageFile: "2020-Ford-Mustang-Shelby-GT350R-003-1080.jpg" },
    { name: "2020 Ford Mustang Cobra Jet 1400 Concept", generation: "6th Gen", imageFile: "2020-Ford-Mustang-Cobra-Jet-1400-Concept-003-1080.jpg" },
    { name: "2019 Ford Shelby Mustang GT350", generation: "6th Gen", imageFile: "2019-Ford-Mustang-Shelby-GT350-005-1080.jpg" },
    { name: "2019 Ford Mustang Bullitt", generation: "6th Gen", imageFile: "2019-Ford-Mustang-Bullitt-007-1080.jpg" },
    { name: "2018 Ford Mustang GT Performance Pack Level 2", generation: "6th Gen", imageFile: "2018-Ford-Mustang-GT-Performance-Pack-Level-2-001-1080.jpg" },
    { name: "2018 Ford Mustang GT", generation: "6th Gen", imageFile: "2018-Ford-Mustang-GT-011-1080.jpg" },
    { name: "2018 Ford Eagle Squadron Mustang GT", generation: "6th Gen", imageFile: "2018-Ford-Eagle-Squadron-Mustang-GT-003-1080.jpg" },
    { name: "2016 Ford Shelby Mustang GT350R", generation: "6th Gen", imageFile: "2016-Ford-Mustang-Shelby-GT350R-001-1080.jpg" },
    { name: "2016 Ford Shelby Mustang GT350 ‘Ole Yeller’", generation: "6th Gen", imageFile: "2016-Ford-Shelby-GT350-Mustang-Ole-Yeller-003-1080.jpg" },
    { name: "2016 Ford Shelby Mustang GT350", generation: "6th Gen", imageFile: "2016-Ford-Mustang-Shelby-GT350-001-1080.jpg" },
    { name: "2016 Ford Mustang GT4", generation: "6th Gen", imageFile: "2016-Ford-Mustang-GT4-001-1080.jpg" },
    { name: "2016 Ford Mustang Cobra Jet", generation: "6th Gen", imageFile: "2016-Ford-Mustang-Cobra-Jet-001-1080.jpg" },
    { name: "2015 Ford Mustang GT Convertible", generation: "6th Gen", imageFile: "2015-Ford-Mustang-GT-Convertible-001-1080.jpg" },
    { name: "2015 Ford Mustang GT Apollo Edition", generation: "6th Gen", imageFile: "2015-Ford-Mustang-GT-Apollo-Edition-004-1080.jpg" },
    { name: "2015 Ford Mustang GT", generation: "6th Gen", imageFile: "2015-Ford-Mustang-GT-003-1080.jpg" },
    { name: "2015 Ford Mustang 50 Year Limited Edition", generation: "6th Gen", imageFile: "2015-Ford-Mustang-50-Year-Limited-Edition-001-1080.jpg" },
    { name: "2014 Ford Shelby Mustang GT500", generation: "5th Gen", imageFile: "2014-Ford-Shelby-GT500-001-1080.jpg" },
    { name: "2014 Ford Mustang", generation: "5th Gen", imageFile: "2014-Ford-Mustang-001-1080.jpg" },
    { name: "2013 Ford Shelby Mustang GT500 Cobra", generation: "5th Gen", imageFile: "2013-Ford-Mustang-Shelby-GT500-Cobra-001-1080.jpg" },
    { name: "2013 Ford Mustang Boss 302", generation: "5th Gen", imageFile: "2013-Ford-Mustang-Boss-302-001-1080.jpg" },
    { name: "2012 Ford Mustang GT", generation: "5th Gen", imageFile: "2012-Ford-Mustang-GT-001-1080.jpg" },
    { name: "2012 Ford Mustang Boss 302 Laguna Seca", generation: "5th Gen", imageFile: "2012-Ford-Mustang-Boss-302-Laguna-Seca-001-1080.jpg" },
    { name: "2012 Ford Mustang Boss 302", generation: "5th Gen", imageFile: "2012-Ford-Mustang-Boss-302-006-1080.jpg" },
    { name: "2010 Ford Shelby Mustang GT500", generation: "5th Gen", imageFile: "2010-Ford-Shelby-GT500-003-1080.jpg" },
    { name: "2010 Ford Mustang", generation: "5th Gen", imageFile: "2010-Ford-Mustang-002-1080.jpg" },
    { name: "2008 Ford Shelby Mustang GT500KR", generation: "5th Gen", imageFile: "2008-Ford-Shelby-Mustang-GT500KR-005-1080.jpg" },
    { name: "2006 Ford Mustang Giugiaro Concept", generation: "5th Gen", imageFile: "2006-Ford-Mustang-Giugiaro-Concept-003-1080.jpg" },
    { name: "2005 Ford Mustang GT", generation: "5th Gen", imageFile: "2005-Ford-Mustang-GT-001-1080.jpg" },
    { name: "2003 Ford Mustang Mach 1", generation: "4th Gen", imageFile: "2003-Ford-Mustang-Mach-1-001-1080.jpg" },
    { name: "2001 Ford Mustang Bullitt GT", generation: "4th Gen", imageFile: "2001-Ford-Mustang-GT-001-1080.jpg" },
    { name: "1987 Ford Mustang GT", generation: "3rd Gen", imageFile: "1987-Ford-Mustang-GT-002-1080.jpg" },
    { name: "1986 Ford Mustang SVO", generation: "3rd Gen", imageFile: "1986-Ford-Mustang-SVO-001-1080.jpg" },
    { name: "1971 Ford Mustang Mach 1", generation: "1st Gen", imageFile: "1971-Ford-Mustang-Mach-1-001-1080.jpg" },
    { name: "1970 Ford Mustang Boss 302", generation: "1st Gen", imageFile: "1970-Ford-Mustang-Boss-302-005-1080.jpg" },
    { name: "1969 Ford Mustang Boss 429", generation: "1st Gen", imageFile: "1969-Ford-Mustang-Boss-429-001-1080.jpg" },
    { name: "1969 Ford Mustang Boss 302", generation: "1st Gen", imageFile: "1969-Ford-Mustang-Boss-302-004-1080.jpg" },
    { name: "1968 Ford Mustang GT Bullitt", generation: "1st Gen", imageFile: "1968-Ford-Mustang-GT-Bullitt-004-1080.jpg" },
    { name: "1967 Ford Shelby Mustang GT500", generation: "1st Gen", imageFile: "1967-Ford-Shelby-Mustang-GT500-003-1080.jpg" },
    { name: "1966 Ford Shelby Mustang GT350", generation: "1st Gen", imageFile: "1965-Ford-Shelby-Mustang-GT350-001-1080.jpg" },
    { name: "1965 Ford Mustang Fastback", generation: "1st Gen", imageFile: "1965-Ford-Mustang-Fastback-001-1080.jpg" }
  ];

  const generationSources = {
    "1st Gen": "https://en.wikipedia.org/wiki/Ford_Mustang_(first_generation)",
    "3rd Gen": "https://en.wikipedia.org/wiki/Ford_Mustang_(third_generation)",
    "4th Gen": "https://en.wikipedia.org/wiki/Ford_Mustang_(fourth_generation)",
    "5th Gen": "https://en.wikipedia.org/wiki/Ford_Mustang_(fifth_generation)",
    "6th Gen": "https://en.wikipedia.org/wiki/Ford_Mustang_(sixth_generation)",
    "7th Gen": "https://en.wikipedia.org/wiki/Ford_Mustang_(seventh_generation)"
  };

  const cars = [
    { id: "ford-mustang-1965", name: "Ford Mustang 289 (1965)", brand: "Ford", category: "Mustang", generation: "1st Gen", year: "1965", engine: "4.7L (289) V8", power: "271 hp", speed: "6.6s", description: "The original pony car turned a compact two-door into an American performance icon. Its 289 V8, long hood and optional fastback body established the formula that defined generations of Mustang.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/1965_Ford_Mustang_2D_Hardtop_Front.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Mustang_(first_generation)", tech: ["289 HiPo", "World's Fair Debut", "Live Rear Axle"] },
    { id: "ford-torino-1969", name: "Ford Torino Cobra Jet (1969)", brand: "Ford", category: "Classics", year: "1969", engine: "7.0L (428) Cobra Jet V8", power: "375 hp", speed: "6.0s", description: "Ford's intermediate Torino combined straight-line pace with period muscle-car styling. The Cobra Jet 428 delivered Ram-Air response for a car built around high-speed drag-strip performance.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/1970_ford_torino_cobra_sportsroof_chiolero.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Torino", tech: ["428 Cobra Jet", "Ram Air", "Fastback"] },
    { id: "ford-falcon-1971", name: "Ford Falcon XY GTHO (1971)", brand: "Ford", category: "Classics", year: "1971", engine: "5.8L (351) V8", power: "300 hp", speed: "6.0s", description: "The XY GTHO Phase III became Australia's most celebrated muscle sedan. Ford racing development, the 351 Cleveland V8 and Bathurst success gave it a defining place in Australian motorsport.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Falcon_XY_GTHO_%2814951352747%29.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Falcon_(Australia)", tech: ["Phase III", "Bathurst Winner", "351 Cleveland"] },
    { id: "ford-rs200-1985", name: "Ford RS200 (1985)", brand: "Ford", category: "Rally", year: "1985", engine: "1.8L Turbo I4", power: "250 hp", speed: "6.0s", description: "Built for Group B rallying, the RS200 used a mid-mounted turbo engine and advanced all-wheel-drive layout. Its compact composite body and explosive acceleration made it a homologation icon.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/White_Ford_RS200.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_RS200", tech: ["Group B", "Mid-Engine", "All-Wheel Drive"] },
    { id: "ford-sierra-1986", name: "Ford Sierra RS Cosworth (1986)", brand: "Ford", category: "Classics", year: "1986", engine: "2.0L Turbo I4", power: "227 hp", speed: "6.5s", description: "The Sierra RS Cosworth brought Ford's turbocharged YB engine and motorsport aerodynamics to the road. The rear wing, hood louvers and competition links made it an unmistakable eighties performance car.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/1986_Ford_Sierra_RS_Cosworth_2.0_%281%29.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Sierra", tech: ["YB Turbo", "Whale Tail", "Homologation Special"] },
    { id: "ford-gt90-1995", name: "Ford GT90 Concept (1995)", brand: "Ford", category: "Concepts", year: "1995", engine: "4.0L Quad-Turbo V12", power: "720 hp", speed: "3.8s", description: "The GT90 was a dramatic design and engineering concept that previewed Ford's future supercar ambitions. Its quad-turbocharged V12 and carbon-fibre construction targeted exceptional concept-era performance.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/1995_Ford_GT90_Petersen_Automotive_Museum.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_GT90", tech: ["Concept Study", "Quad-Turbo V12", "Carbon Fibre"] },
    { id: "ford-gt-2017", name: "Ford GT (2017)", brand: "Ford", category: "Performance", year: "2017", engine: "3.5L Twin-Turbo V6", power: "660 hp", speed: "3.0s", description: "A modern carbon-fibre supercar developed with a clear Le Mans purpose, the Ford GT uses a twin-turbo EcoBoost V6, active aerodynamics and a low, race-derived cockpit to compete at the highest level.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_GT_2018_and_Ford_GT_1968_at_Legendy_2019_in_Prague_%28cropped%29.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_GT", tech: ["EcoBoost V6", "Carbon MonoCell", "Le Mans 2016 Win"] },
    { id: "ford-mustang-gt-2021", name: "Ford Mustang GT (2021)", brand: "Ford", category: "Mustang", generation: "6th Gen", year: "2021", engine: "5.0L V8", power: "480 hp", speed: "4.2s", description: "The sixth-generation Mustang GT pairs naturally aspirated V8 performance with modern chassis technology. Selectable drive modes, available MagneRide suspension and everyday usability broaden its appeal.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Mustang_VII_GT_Rutesheimer_Autoschau_2025_DSC_9234.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Mustang", tech: ["V8 N/A", "MagneRide", "Line Lock"] },
    { id: "ford-mustang-dark-horse", name: "2024 Ford Mustang Dark Horse", brand: "Ford", category: "Mustang", generation: "7th Gen", year: "2024", engine: "5.0L V8", power: "500 hp", speed: "3.9s", description: "The Mustang Dark Horse is Ford's track-focused seventh-generation performance model. Revised V8 hardware, aerodynamic upgrades and available track equipment sharpen it beyond the standard GT.", image: "/static/images/mustang/2024-Ford-Mustang-Dark-Horse-005-1080.jpg", source: "https://en.wikipedia.org/wiki/Ford_Mustang_(seventh_generation)", tech: ["Dark Horse", "Tremec Manual", "Track-Focused"] },
    { id: "ford-mach-e-2023", name: "Ford Mustang Mach-E GT (2023)", brand: "Ford", category: "Electric", year: "2023", engine: "Dual Electric Motors", power: "480 hp", speed: "3.5s", description: "The Mustang Mach-E GT brings electric all-wheel-drive performance to the Mustang name. Instant torque, rapid charging capability and dual-motor all-wheel drive prioritize acceleration and modern practicality.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Ford_Mustang_Mach-E_Standard_Range_Front.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Mustang_Mach-E", tech: ["Dual-Motor AWD", "Performance Edition", "Fast Charging"] },
    { id: "ford-f150-raptor-2014", name: "Ford F-150 SVT Raptor (2014)", brand: "Ford", category: "Trucks & SUVs", year: "2014", engine: "6.2L V8", power: "411 hp", speed: "6.5s", description: "The first-generation SVT Raptor was designed around high-speed off-road travel rather than conventional pickup behavior. Long-travel suspension, terrain modes and reinforced hardware separated it from ordinary F-150s.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/FORD_F-150_SVT_RAPTOR_China.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_F-150", tech: ["SVT Raptor", "Fox Racing Shox", "Terrain Management"] },
    { id: "ford-bronco-2021", name: "Ford Bronco (2021)", brand: "Ford", category: "Trucks & SUVs", year: "2021", engine: "2.3L EcoBoost I4", power: "300 hp", speed: "6.0s", description: "The revived Bronco blends removable-body freedom with serious off-road hardware. Locking differentials, G.O.A.T. drive modes and available Sasquatch equipment support demanding trail use.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Bronco_%286th_generation%29_Outer_Banks_1X7A0384.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Bronco", tech: ["G.O.A.T. Modes", "Removable Doors", "Sasquatch Package"] },
    { id: "ford-ranger-raptor-2023", name: "Ford Ranger Raptor (2023)", brand: "Ford", category: "Trucks & SUVs", year: "2023", engine: "3.0L Twin-Turbo V6", power: "405 hp", speed: "5.6s", description: "The Ranger Raptor is Ford's performance midsize pickup, tuned for fast and technical off-road terrain. A twin-turbo V6 and long-travel Fox suspension give it a focused desert-racing character.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Ranger_Raptor_-_20231003-P1003802.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Ranger", tech: ["Fox Live Valve", "Baja Mode", "3.0 EcoBoost"] },
    { id: "ford-explorer-st-2024", name: "Ford Explorer ST (2024)", brand: "Ford", category: "Trucks & SUVs", year: "2024", engine: "3.0L Twin-Turbo V6", power: "400 hp", speed: "5.6s", description: "The Explorer ST adds Ford Performance tuning to a practical three-row SUV. Its twin-turbo V6, sport calibration and stronger brakes deliver a more urgent family-vehicle experience.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Explorer_%28sixth_generation%29_IMG_6063.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Explorer", tech: ["ST Tuned", "Sport Mode", "Seven Seats"] },
    { id: "ford-edge-st-2019", name: "Ford Edge ST (2019)", brand: "Ford", category: "Trucks & SUVs", year: "2019", engine: "2.7L Twin-Turbo V6", power: "335 hp", speed: "5.6s", description: "The Edge ST applied Ford's performance-SUV formula to the mid-size Edge. A twin-turbo V6, all-wheel drive and sport-tuned suspension provide a faster, firmer alternative to the standard range.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Edge_SEL_EcoBoost_AWD_2.0L_front_4.6.19.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Edge", tech: ["ST Sport Mode", "All-Wheel Drive", "Performance Brakes"] },
    { id: "ford-focus-rs-2017", name: "Ford Focus RS (2017)", brand: "Ford", category: "Performance", year: "2017", engine: "2.3L EcoBoost I4", power: "350 hp", speed: "4.5s", description: "The Focus RS brought rally-inspired turbocharged performance to Ford's compact hatchback. Drift Mode, torque vectoring and all-wheel drive made it one of the most distinctive hot hatches of its era.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Focus_RS_Mk_III_DSC_8314.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Focus", tech: ["Drift Mode", "All-Wheel Drive", "Recaro Seats"] },
    { id: "ford-fiesta-st-2019", name: "Ford Fiesta ST (2019)", brand: "Ford", category: "Performance", year: "2019", engine: "1.5L EcoBoost I3", power: "197 hp", speed: "6.5s", description: "The Fiesta ST packages an energetic turbocharged engine and compact dimensions into an everyday performance hatch. Mechanical differential assist, crisp steering and a playful chassis helped define its character.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Fiesta_ST_MK7_Facelift_1X7A5778.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Fiesta", tech: ["EcoBoost 3-Cylinder", "Limited-Slip Diff", "Performance Packs"] },
    { id: "ford-puma-st-2021", name: "Ford Puma ST (2021)", brand: "Ford", category: "Performance", year: "2021", engine: "1.5L EcoBoost I3", power: "200 hp", speed: "6.5s", description: "The Puma ST adapts Ford's small hot-hatch formula to a compact crossover. A turbocharged three-cylinder engine, electronic limited-slip differential and chassis tuning deliver sharp everyday handling.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Puma_ST_1X7A0331.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Puma", tech: ["Ford Performance", "eLSD", "Cobra Seats"] },
    { id: "ford-fpv-gt-2013", name: "Ford FPV GT (2013)", brand: "Ford", category: "Performance", year: "2013", engine: "5.0L Supercharged V8", power: "422 hp", speed: "5.0s", description: "The Australian-built FPV GT paired muscular fastback styling with a supercharged Miami V8. It represents Ford Performance Vehicles' final generation and the long local tradition of V8 sedans.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/FPV_FG_GT.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Performance_Vehicles", tech: ["Miami V8", "Australian Muscle", "Bathurst Heritage"] },
    { id: "ford-mondeo-2019", name: "Ford Mondeo ST-Line (2019)", brand: "Ford", category: "Sedans", year: "2019", engine: "2.0L EcoBoost I4", power: "240 hp", speed: "6.7s", description: "The Mondeo ST-Line adds a sportier exterior and chassis character to Ford's mid-size family sedan. Turbocharged EcoBoost power and advanced driver-assistance features support long-distance comfort.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Mondeo_Turnier_2.0_EcoBlue_ST-Line_%28V%2C_Facelift%29_%E2%80%93_f_18042021.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Mondeo", tech: ["ST-Line", "EcoBoost", "Adaptive Cruise"] },
    { id: "ford-fusion-sport-2017", name: "Ford Fusion Sport (2017)", brand: "Ford", category: "Sedans", year: "2017", engine: "2.7L Twin-Turbo V6", power: "325 hp", speed: "5.3s", description: "The Fusion Sport was Ford's all-wheel-drive performance sedan. Its twin-turbo V6, sport calibration and refined cabin delivered strong acceleration without the footprint of a traditional muscle car.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Fusion", tech: ["2.7L EcoBoost", "All-Wheel Drive", "Sport Suspension"] },
    { id: "ford-taurus-sho-2010", name: "Ford Taurus SHO (2010)", brand: "Ford", category: "Sedans", year: "2010", engine: "3.5L Twin-Turbo V6", power: "365 hp", speed: "5.4s", description: "The third-generation Taurus SHO revived Ford's performance-sedan badge with an EcoBoost twin-turbo V6 and all-wheel drive. It emphasized understated speed, all-season traction and a spacious cabin.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2010_Ford_Taurus_SHO_--_09-07-2009.jpg?width=900", source: "https://en.wikipedia.org/wiki/Ford_Taurus", tech: ["SHO Return", "EcoBoost AWD", "Piano Black Trim"] }
  ];

  const modelSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const providedMustangCars = mustangModels
    .filter((model) => model.name !== "2024 Ford Mustang Dark Horse")
    .map((model) => {
      const slug = modelSlug(model.name);
      return {
        id: `mustang-${slug}`,
        name: model.name,
        brand: "Ford",
        category: "Mustang",
        generation: model.generation,
        year: model.name.slice(0, 4),
        engine: "Not provided",
        power: "Not provided",
        speed: "Not provided",
        image: `/static/images/mustang/${model.imageFile || `${slug}.jpg`}`,
        source: generationSources[model.generation],
        tech: [model.generation]
      };
    });
  cars.push(...providedMustangCars);

  const curatedDescriptions = {
    "ford-torino-1969": "Ford's intermediate Torino combined straight-line pace with period muscle-car styling. The Cobra Jet 428 delivered Ram-Air response for a car built around high-speed drag-strip performance.",
    "ford-falcon-1971": "The XY GTHO Phase III became Australia's most celebrated muscle sedan. Ford racing development, the 351 Cleveland V8 and Bathurst success gave it a defining place in Australian motorsport.",
    "ford-rs200-1985": "Built for Group B rallying, the RS200 used a mid-mounted turbo engine and advanced all-wheel-drive layout. Its compact composite body and explosive acceleration made it a homologation icon.",
    "ford-sierra-1986": "The Sierra RS Cosworth brought Ford's turbocharged YB engine and motorsport aerodynamics to the road. The rear wing, hood louvers and competition links made it an unmistakable eighties performance car.",
    "ford-gt90-1995": "The GT90 was a dramatic design and engineering concept that previewed Ford's future supercar ambitions. Its quad-turbocharged V12 and carbon-fibre construction targeted exceptional concept-era performance.",
    "ford-gt-2017": "A modern carbon-fibre supercar developed with a clear Le Mans purpose, the Ford GT uses a twin-turbo EcoBoost V6, active aerodynamics and a low, race-derived cockpit to compete at the highest level.",
    "ford-mustang-gt-2021": "The sixth-generation Mustang GT pairs naturally aspirated V8 performance with modern chassis technology. Selectable drive modes, available MagneRide suspension and everyday usability broaden its appeal.",
    "ford-mustang-dark-horse": "The Mustang Dark Horse is Ford's track-focused seventh-generation performance model. Revised V8 hardware, aerodynamic upgrades and available track equipment sharpen it beyond the standard GT.",
    "ford-mach-e-2023": "The Mustang Mach-E GT brings electric all-wheel-drive performance to the Mustang name. Instant torque, rapid charging capability and dual-motor all-wheel drive prioritize acceleration and modern practicality.",
    "ford-f150-raptor-2014": "The first-generation SVT Raptor was designed around high-speed off-road travel rather than conventional pickup behavior. Long-travel suspension, terrain modes and reinforced hardware separated it from ordinary F-150s.",
    "ford-bronco-2021": "The revived Bronco blends removable-body freedom with serious off-road hardware. Locking differentials, G.O.A.T. drive modes and available Sasquatch equipment support demanding trail use.",
    "ford-ranger-raptor-2023": "The Ranger Raptor is Ford's performance midsize pickup, tuned for fast and technical off-road terrain. A twin-turbo V6 and long-travel Fox suspension give it a focused desert-racing character.",
    "ford-explorer-st-2024": "The Explorer ST adds Ford Performance tuning to a practical three-row SUV. Its twin-turbo V6, sport calibration and stronger brakes deliver a more urgent family-vehicle experience.",
    "ford-edge-st-2019": "The Edge ST applied Ford's performance-SUV formula to the mid-size Edge. A twin-turbo V6, all-wheel drive and sport-tuned suspension provide a faster, firmer alternative to the standard range.",
    "ford-focus-rs-2017": "The Focus RS brought rally-inspired turbocharged performance to Ford's compact hatchback. Drift Mode, torque vectoring and all-wheel drive made it one of the most distinctive hot hatches of its era.",
    "ford-fiesta-st-2019": "The Fiesta ST packages an energetic turbocharged engine and compact dimensions into an everyday performance hatch. Mechanical differential assist, crisp steering and a playful chassis helped define its character.",
    "ford-puma-st-2021": "The Puma ST adapts Ford's small hot-hatch formula to a compact crossover. A turbocharged three-cylinder engine, electronic limited-slip differential and chassis tuning deliver sharp everyday handling.",
    "ford-fpv-gt-2013": "The Australian-built FPV GT paired muscular fastback styling with a supercharged Miami V8. It represents Ford Performance Vehicles' final generation and the long local tradition of V8 sedans.",
    "ford-mondeo-2019": "The Mondeo ST-Line adds a sportier exterior and chassis character to Ford's mid-size family sedan. Turbocharged EcoBoost power and advanced driver-assistance features support long-distance comfort.",
    "ford-fusion-sport-2017": "The Fusion Sport was Ford's all-wheel-drive performance sedan. Its twin-turbo V6, sport calibration and refined cabin delivered strong acceleration without the footprint of a traditional muscle car.",
    "ford-taurus-sho-2010": "The third-generation Taurus SHO revived Ford's performance-sedan badge with an EcoBoost twin-turbo V6 and all-wheel drive. It emphasized understated speed, all-season traction and a spacious cabin."
  };

  cars.forEach((car) => {
    if (!car.description) car.description = curatedDescriptions[car.id] || `${car.name} is part of Ford's ${car.category.toLowerCase()} collection. This model entry is presented with locally available specifications and a source for further reference.`;
  });

  // Secondary metadata line for cards, e.g. "Mustang • 271 HP" or "Rally • 1985".
  const carMeta = (car, fallbackCategory = "") => {
    if (!car) return fallbackCategory;
    const detail = car.power && car.power !== "Not provided" ? car.power.replace(/\bhp\b/i, "HP") : car.year;
    return `${car.category} • ${detail}`;
  };

  // Muted item counts next to each sidebar category.
  const categoryCounts = cars.reduce((counts, car) => {
    counts[car.category] = (counts[car.category] || 0) + 1;
    return counts;
  }, {});
  document.querySelectorAll(".brand-filter").forEach((button) => {
    const category = button.dataset.category;
    const total = category === "All" ? cars.length : (categoryCounts[category] || 0);
    let counter = button.querySelector(".brand-count");
    if (!counter) {
      counter = document.createElement("span");
      counter.className = "brand-count";
      counter.setAttribute("aria-hidden", "true");
      button.append(counter);
    }
    counter.textContent = String(total);
  });

  // Theme persistence
  const savedTheme = store.get("theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const theme = savedTheme || preferredTheme;
  root.dataset.theme = theme;

  const updateThemeButtons = () => {
    document.querySelectorAll(".theme-toggle").forEach((button) => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      button.setAttribute("aria-label", `Switch to ${next} theme`);
    });
  };
  updateThemeButtons();

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      store.set("theme", root.dataset.theme);
      updateThemeButtons();
    });
  });

  // Persistent sound toggle. On the home page it controls the hero video;
  // elsewhere it enables subtle Web Audio interface feedback.
  let audioContext = null;
  let soundEnabled = store.get("sound") === "true";

  const playInterfaceTone = (frequency = 220) => {
    if (!soundEnabled) return;
    if (!audioContext) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioContext = new AudioContextClass();
    }
    if (audioContext.state === "suspended") audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.025, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.08);
  };

  const heroVideo = document.querySelector(".hero-video");
  const introVideo = document.querySelector(".intro-video");
  const hero = document.querySelector(".hero");
  const skipIntro = document.querySelector(".intro-skip");
  const introAudioToggle = document.querySelector(".intro-audio-toggle");
  let introSoundEnabled = Boolean(introVideo) && !reduceMotion;
  let enableIntroSoundOnGesture = null;
  let introFinished = !hero || !introVideo || reduceMotion;
  const setIntroSound = (enabled) => {
    introSoundEnabled = enabled;
    if (introVideo) {
      introVideo.muted = !enabled;
      if (enabled) introVideo.volume = 1;
    }
    if (introAudioToggle) {
      introAudioToggle.setAttribute("aria-pressed", String(enabled));
      introAudioToggle.setAttribute("aria-label", enabled ? "Turn intro sound off" : "Turn intro sound on");
    }
  };
  const clearIntroSoundGesture = () => {
    if (!enableIntroSoundOnGesture) return;
    window.removeEventListener("pointerdown", enableIntroSoundOnGesture);
    window.removeEventListener("touchstart", enableIntroSoundOnGesture);
    window.removeEventListener("keydown", enableIntroSoundOnGesture);
    enableIntroSoundOnGesture = null;
  };
  if (introVideo) {
    setIntroSound(introSoundEnabled);
  }
  const syncHeroVideoSound = () => {
    if (heroVideo) heroVideo.muted = !soundEnabled || !introFinished;
  };
  syncHeroVideoSound();
  let clearIntroScrollListeners = () => {};

  const finishIntro = () => {
    if (introFinished) return;
    introFinished = true;
    document.body.classList.remove("intro-locked");
    clearIntroScrollListeners();
    hero.classList.remove("intro-pending");
    hero.classList.add("intro-finished");
    introVideo.pause();
    if (skipIntro) skipIntro.hidden = true;
    if (introAudioToggle) introAudioToggle.hidden = true;
    clearIntroSoundGesture();
    soundEnabled = introSoundEnabled;
    store.set("sound", String(soundEnabled));
    updateSoundButtons();
    syncHeroVideoSound();
    if (heroVideo && soundEnabled) {
      const playback = heroVideo.play();
      if (playback) playback.catch(() => {});
    }
  };

  if (hero && introVideo) {
    if (reduceMotion) {
      hero.classList.add("intro-finished");
      introVideo.pause();
      if (skipIntro) skipIntro.hidden = true;
      if (introAudioToggle) introAudioToggle.hidden = true;
    } else {
      hero.classList.add("intro-pending");
      document.body.classList.add("intro-locked");
      introVideo.addEventListener("ended", finishIntro, { once: true });
      introVideo.addEventListener("error", finishIntro, { once: true });
      skipIntro?.addEventListener("click", finishIntro);
      introAudioToggle?.addEventListener("click", () => {
        clearIntroSoundGesture();
        setIntroSound(!introSoundEnabled);
        if (introVideo.paused) {
          const playback = introVideo.play();
          if (playback) playback.catch(() => {});
        }
      });
      enableIntroSoundOnGesture = (event) => {
        if (event.target === introAudioToggle || introAudioToggle?.contains(event.target)) return;
        if (event.target === skipIntro || skipIntro?.contains(event.target)) return;
        if (event.type === "keydown" && !["ArrowDown", "End", "PageDown", " "].includes(event.key)) return;
        if (!introSoundEnabled) setIntroSound(true);
        clearIntroSoundGesture();
      };
      window.addEventListener("pointerdown", enableIntroSoundOnGesture, { passive: true });
      window.addEventListener("touchstart", enableIntroSoundOnGesture, { passive: true });
      window.addEventListener("keydown", enableIntroSoundOnGesture);

      let scrollAttempts = 0;
      let touchStartY = null;
      let wheelGestureActive = false;
      let wheelIdleTimer = 0;
      const registerScrollAttempt = () => {
        scrollAttempts += 1;
        if (scrollAttempts === 1) {
          if (skipIntro) {
            skipIntro.textContent = "Scroll again to skip";
            skipIntro.setAttribute("aria-label", "Scroll once more to skip the intro");
            skipIntro.classList.add("is-armed");
          }
        } else {
          finishIntro();
        }
      };
      const handleIntroWheel = (event) => {
        event.preventDefault();
        if (event.deltaY > 0 && !wheelGestureActive) {
          wheelGestureActive = true;
          registerScrollAttempt();
        }
        window.clearTimeout(wheelIdleTimer);
        wheelIdleTimer = window.setTimeout(() => {
          wheelGestureActive = false;
        }, 600);
      };
      const handleIntroTouchStart = (event) => {
        touchStartY = event.touches.length === 1 ? event.touches[0].clientY : null;
      };
      const handleIntroTouchEnd = (event) => {
        if (touchStartY === null || event.changedTouches.length === 0) return;
        const swipeUp = touchStartY - event.changedTouches[0].clientY > 48;
        touchStartY = null;
        if (swipeUp) registerScrollAttempt();
      };
      const handleIntroKeydown = (event) => {
        if (!["ArrowDown", "End", "PageDown", " "].includes(event.key)) return;
        if (event.target instanceof Element && event.target.closest("button, a, input, select, textarea")) return;
        event.preventDefault();
        if (!event.repeat) registerScrollAttempt();
      };
      const clearScrollListeners = () => {
        window.removeEventListener("wheel", handleIntroWheel);
        window.removeEventListener("touchstart", handleIntroTouchStart);
        window.removeEventListener("touchend", handleIntroTouchEnd);
        window.removeEventListener("keydown", handleIntroKeydown);
        window.clearTimeout(wheelIdleTimer);
      };
      clearIntroScrollListeners = clearScrollListeners;
      window.addEventListener("wheel", handleIntroWheel, { passive: false });
      window.addEventListener("touchstart", handleIntroTouchStart, { passive: true });
      window.addEventListener("touchend", handleIntroTouchEnd, { passive: true });
      window.addEventListener("keydown", handleIntroKeydown);

      const playback = introVideo.play();
      if (playback) playback.catch(() => {
        setIntroSound(false);
        const mutedPlayback = introVideo.play();
        if (mutedPlayback) mutedPlayback.catch(finishIntro);
      });
    }
  }

  const updateSoundButtons = () => {
    document.querySelectorAll(".sound-toggle").forEach((button) => {
      button.setAttribute("aria-pressed", String(soundEnabled));
      button.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
    });
  };
  updateSoundButtons();

  document.querySelectorAll(".sound-toggle").forEach((button) => {
    button.addEventListener("click", async () => {
      soundEnabled = !soundEnabled;
      store.set("sound", String(soundEnabled));
      if (heroVideo) {
        syncHeroVideoSound();
        if (soundEnabled && introFinished) {
          try { await heroVideo.play(); } catch { /* The browser may require another playback gesture. */ }
        }
      }
      updateSoundButtons();
      playInterfaceTone(320);
    });
  });

  document.querySelectorAll(".brand-filter, .favorites-filter, .view-button").forEach((button) => {
    button.addEventListener("click", () => playInterfaceTone(180));
  });

  // Scroll progress and compact navigation
  const progress = document.querySelector(".progress-bar span");
  const navbar = document.querySelector(".navbar");
  let scrollTicking = false;

  const updateScroll = () => {
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollRange > 0 ? window.scrollY / scrollRange : 0;
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 80);
    scrollTicking = false;
  };
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  updateScroll();

  // Mobile navigation
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("modal-open", open);
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("modal-open");
      });
    });
  }

  // Reveal observer and active section tracker
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = Array.from(entry.target.parentElement?.querySelectorAll(".reveal") || []);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.max(0, index) * 70}ms`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const sectionLinks = [...document.querySelectorAll(".nav-link")];
  if (sectionLinks.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    }, { threshold: [0.25, 0.55] });
    document.querySelectorAll("header[id], section[id], footer[id]").forEach((section) => sectionObserver.observe(section));
  }

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  // Custom cursor and magnetic elements
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (finePointer && dot && ring) {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px)`;
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX - ring.offsetWidth / 2}px, ${ringY - ring.offsetHeight / 2}px)`;
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    document.querySelectorAll("a, button, [role='button']").forEach((element) => {
      element.addEventListener("mouseenter", () => ring.classList.add("hover"));
      element.addEventListener("mouseleave", () => ring.classList.remove("hover"));
    });

    document.querySelectorAll(".magnetic").forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        if (reduceMotion) return;
        const rect = element.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      });
      element.addEventListener("mouseleave", () => {
        element.style.transform = "";
      });
    });
  }

  // Mouse spotlight and 3D tilt
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const px = x / rect.width;
        const py = y / rect.height;
        card.style.setProperty("--mouse-x", `${px * 100}%`);
        card.style.setProperty("--mouse-y", `${py * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${(px - 0.5) * 5}deg) translateY(-3px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  // Brand filtering with animated layout transitions
  const brandFilters = document.querySelectorAll(".brand-filter");
  const brandTitle = document.querySelector("#brand-title");
  const carCount = document.querySelector("#car-count");
  const searchInput = document.querySelector("#car-search");
  const sortSelect = document.querySelector("#car-sort");
  const grid = document.querySelector("#car-grid");
  const mustangGenerations = document.querySelector("#mustang-generations");
  const generationEmpty = document.querySelector("#generation-empty");
  const generationGrids = new Map();
  const generationLabels = {
    "1st Gen": "1st Generation",
    "3rd Gen": "3rd Generation",
    "4th Gen": "4th Generation",
    "5th Gen": "5th Generation",
    "6th Gen": "6th Generation",
    "7th Gen": "7th Generation"
  };
  if (mustangGenerations) {
    Object.entries(generationLabels).forEach(([generation, label]) => {
      const section = document.createElement("section");
      section.className = "generation-section";
      section.dataset.generation = generation;
      const heading = document.createElement("h2");
      heading.textContent = label;
      const count = document.createElement("span");
      count.className = "generation-count";
      const generationId = `mustang-${generation.toLowerCase().replace(/\s+/g, "-")}-cars`;
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "generation-toggle";
      toggle.textContent = "⌃";
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-controls", generationId);
      toggle.setAttribute("aria-label", `Hide ${label} cars`);
      const header = document.createElement("header");
      header.className = "generation-heading";
      header.append(heading, count, toggle);
      const generationGrid = document.createElement("div");
      generationGrid.className = "car-grid generation-grid";
      generationGrid.id = generationId;
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(expanded));
        toggle.setAttribute("aria-label", `${expanded ? "Hide" : "Show"} ${label} cars`);
        toggle.textContent = expanded ? "⌃" : "⌄";
        section.classList.toggle("is-collapsed", !expanded);
      });
      section.append(header, generationGrid);
      mustangGenerations.append(section);
      generationGrids.set(generation, generationGrid);
    });
  }

  const existingCarIds = new Set([...document.querySelectorAll(".car-card")].map((card) => card.dataset.carId));
  if (grid) {
    cars.filter((car) => car.generation && !existingCarIds.has(car.id)).forEach((car) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "car-card reveal visible";
      card.dataset.category = car.category;
      card.dataset.carId = car.id;
      card.dataset.generation = car.generation;
      card.setAttribute("aria-label", `View ${car.name} details`);

      const media = document.createElement("span");
      media.className = "card-media";
      const image = document.createElement("img");
      image.src = car.image;
      image.alt = car.name;
      image.loading = "lazy";
      image.decoding = "async";
      const index = document.createElement("span");
      index.className = "card-index";
      index.textContent = String(cars.indexOf(car) + 1).padStart(2, "0");
      media.append(image, index);

      const copy = document.createElement("span");
      copy.className = "card-copy";
      const title = document.createElement("strong");
      title.textContent = car.name;
      const meta = document.createElement("span");
      meta.className = "card-meta";
      meta.textContent = carMeta(car);
      copy.append(title, meta);
      card.append(media, copy);
      grid.append(card);
    });
  }

  const carCards = [...document.querySelectorAll(".car-card")];
  let activeCategory = "All";
  let favoritesOnly = false;
  let catalogOrder = [...carCards];
  const favorites = new Set(JSON.parse(store.get("favorites") || "[]"));
  const compared = new Set();

  const placeholderImage = "/static/images/mustang/mustang-placeholder.svg";
  const setImageSource = (img, source) => {
    img.dataset.placeholderApplied = "";
    img.addEventListener("error", () => {
      if (img.dataset.placeholderApplied) return;
      img.dataset.placeholderApplied = "true";
      img.src = placeholderImage;
    }, { once: true });
    img.src = source;
  };
  const revealImage = (img) => {
    if (!img) return;
    const showImage = () => img.classList.add("loaded");
    const showPlaceholder = () => {
      if (img.dataset.placeholderApplied) return;
      img.dataset.placeholderApplied = "true";
      img.addEventListener("load", showImage, { once: true });
      img.src = placeholderImage;
    };
    if (img.complete) {
      if (img.naturalWidth > 0) showImage();
      else showPlaceholder();
      return;
    }
    img.addEventListener("load", showImage, { once: true });
    img.addEventListener("error", showPlaceholder, { once: true });
  };

  // Attach per-card discovery actions and load local placeholders for missing images.
  carCards.forEach((card, index) => {
    const car = cars.find((item) => item.id === card.dataset.carId);
    const img = card.querySelector("img");
    if (car) {
      img.alt = car.name;
      if (car.generation) card.dataset.generation = car.generation;
      if (img.getAttribute("src") !== car.image) img.src = car.image;
      revealImage(img);
    }

    const copy = card.querySelector(".card-copy");
    let meta = copy?.querySelector(".card-meta");
    if (copy && !meta) {
      meta = document.createElement("span");
      meta.className = "card-meta";
      copy.append(meta);
    }
    if (meta) meta.textContent = carMeta(car, card.dataset.category);

    const actions = document.createElement("span");
    actions.className = "card-actions";
    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "card-action favorite-action";
    favoriteButton.dataset.carId = card.dataset.carId;
    favoriteButton.title = "Save to favorites";
    favoriteButton.setAttribute("aria-label", "Save to favorites");
    favoriteButton.textContent = "♡";
    const compareButton = document.createElement("button");
    compareButton.type = "button";
    compareButton.className = "card-action compare-action";
    compareButton.dataset.carId = card.dataset.carId;
    compareButton.title = "Add to comparison";
    compareButton.setAttribute("aria-label", "Add to comparison");
    compareButton.textContent = "+";
    actions.append(favoriteButton, compareButton);
    card.append(actions);

    if (favorites.has(card.dataset.carId)) {
      favoriteButton.classList.add("active");
      favoriteButton.textContent = "♥";
    }
  });

  const filterCars = (category) => {
    activeCategory = category;
    applyCatalog();
  };

  const applyCatalog = () => {
    const showGenerations = activeCategory === "Mustang" && mustangGenerations;
    if (grid) grid.hidden = Boolean(showGenerations);
    if (mustangGenerations) mustangGenerations.hidden = !showGenerations;
    if (generationEmpty) generationEmpty.hidden = true;
    const renderOrder = showGenerations && sortSelect?.value === "index"
      ? [...catalogOrder].sort((a, b) => {
        const carA = cars.find((item) => item.id === a.dataset.carId);
        const carB = cars.find((item) => item.id === b.dataset.carId);
        return Number(carB.year) - Number(carA.year);
      })
      : catalogOrder;
    renderOrder.forEach((card) => {
      const destination = showGenerations && card.dataset.category === "Mustang"
        ? generationGrids.get(card.dataset.generation) || grid
        : grid;
      destination?.append(card);
    });

    let visibleCount = 0;
    const visibleCards = new Set();
    const query = searchInput?.value.trim().toLowerCase() || "";
    carCards.forEach((card) => {
      const car = cars.find((item) => item.id === card.dataset.carId);
      const matchesCategory = activeCategory === "All" || card.dataset.category === activeCategory;
      const matchesSearch = !query || `${car?.name || ""} ${card.dataset.category} ${car?.generation || ""}`.toLowerCase().includes(query);
      const matchesFavorite = !favoritesOnly || favorites.has(card.dataset.carId);
      const visible = matchesCategory && matchesSearch && matchesFavorite;
      card.classList.remove("visible");
      if (visible) {
        card.classList.remove("is-hidden");
        visibleCards.add(card);
        visibleCount += 1;
        requestAnimationFrame(() => card.classList.add("visible"));
      } else {
        card.style.transitionDuration = "180ms";
        card.style.opacity = "0";
        card.style.transform = "scale(.96)";
        window.setTimeout(() => {
          card.classList.add("is-hidden");
          card.style.opacity = "";
          card.style.transform = "";
          card.style.transitionDuration = "";
        }, reduceMotion ? 0 : 180);
      }
    });
    if (showGenerations) {
      generationGrids.forEach((generationGrid) => {
        const section = generationGrid.closest(".generation-section");
        const visibleInGeneration = [...generationGrid.querySelectorAll(".car-card")].filter((card) => visibleCards.has(card)).length;
        if (section) {
          section.hidden = visibleInGeneration === 0;
          const count = section.querySelector(".generation-count");
          if (count) count.textContent = `${visibleInGeneration} ${visibleInGeneration === 1 ? "model" : "models"}`;
        }
      });
      if (generationEmpty) generationEmpty.hidden = visibleCount > 0;
    }
    if (brandTitle) brandTitle.textContent = activeCategory === "All" ? (favoritesOnly ? "Favorites" : "All Cars") : activeCategory;
    if (carCount) carCount.textContent = `${visibleCount} ${visibleCount === 1 ? "vehicle" : "vehicles"}`;
  };

  brandFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      brandFilters.forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");
      filterCars(filter.dataset.category);
    });
  });

  searchInput?.addEventListener("input", applyCatalog);

  sortSelect?.addEventListener("change", () => {
    const mode = sortSelect.value;
    // "1,600 hp" must not be parsed with a bare parseInt — digits only.
    const horsepower = (value) => parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;
    const sorted = [...carCards].sort((a, b) => {
      const carA = cars.find((item) => item.id === a.dataset.carId);
      const carB = cars.find((item) => item.id === b.dataset.carId);
      if (mode === "name") return carA.name.localeCompare(carB.name);
      if (mode === "year-desc") return Number(carB.year) - Number(carA.year);
      if (mode === "year-asc") return Number(carA.year) - Number(carB.year);
      if (mode === "power") return horsepower(carB.power) - horsepower(carA.power);
      if (mode === "speed") {
        const speedA = parseFloat(carA.speed);
        const speedB = parseFloat(carB.speed);
        if (!Number.isFinite(speedA)) return Number.isFinite(speedB) ? 1 : 0;
        if (!Number.isFinite(speedB)) return -1;
        return speedA - speedB;
      }
      return carCards.indexOf(a) - carCards.indexOf(b);
    });
    catalogOrder = sorted;
    applyCatalog();
  });

  document.querySelectorAll(".view-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".view-button").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      const listView = button.dataset.view === "list";
      grid?.classList.toggle("list-view", listView);
      generationGrids.forEach((generationGrid) => generationGrid.classList.toggle("list-view", listView));
    });
  });

  const favoritesFilter = document.querySelector("#favorites-filter");
  const favoriteCount = document.querySelector("#favorite-count");
  const syncFavorites = () => {
    if (favoriteCount) favoriteCount.textContent = String(favorites.size);
    store.set("favorites", JSON.stringify([...favorites]));
  };
  syncFavorites();

  favoritesFilter?.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    favoritesFilter.classList.toggle("active", favoritesOnly);
    favoritesFilter.setAttribute("aria-pressed", String(favoritesOnly));
    applyCatalog();
  });

  // Minimal floating pill toast for favorite / compare feedback.
  const toast = document.querySelector("#toast");
  const toastText = document.querySelector("#toast-text");
  let toastTimer = 0;
  let toastHideTimer = 0;
  const showToast = (message) => {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    window.clearTimeout(toastHideTimer);
    requestAnimationFrame(() => toast.classList.add("show"));
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
      toastHideTimer = window.setTimeout(() => { toast.hidden = true; }, 320);
    }, 2200);
  };

  document.querySelectorAll(".favorite-action").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const carId = button.dataset.carId;
      if (favorites.has(carId)) favorites.delete(carId);
      else favorites.add(carId);
      button.classList.toggle("active", favorites.has(carId));
      button.textContent = favorites.has(carId) ? "♥" : "♡";
      syncFavorites();
      showToast(favorites.has(carId) ? "Added to Favorites" : "Removed from Favorites");
      if (favoritesOnly) applyCatalog();
    });
  });

  const compareTray = document.querySelector("#compare-tray");
  const compareCount = document.querySelector("#compare-count");
  const compareOpen = document.querySelector("#compare-open");
  const updateCompareTray = () => {
    if (!compareTray) return;
    compareTray.hidden = compared.size === 0;
    if (compareCount) compareCount.textContent = `${compared.size} selected`;
    if (compareOpen) compareOpen.disabled = compared.size < 2;
  };

  document.querySelectorAll(".compare-action").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const carId = button.dataset.carId;
      if (compared.has(carId)) compared.delete(carId);
      else if (compared.size < 3) compared.add(carId);
      else {
        button.animate([{ transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "none" }], { duration: 220 });
        showToast("Compare is full — 3 cars max");
        return;
      }
      button.classList.toggle("active", compared.has(carId));
      button.textContent = compared.has(carId) ? "✓" : "+";
      updateCompareTray();
      showToast(compared.has(carId)
        ? `Added to Compare (${compared.size})`
        : `Removed from Compare (${compared.size})`);
    });
  });

  document.querySelector("#compare-clear")?.addEventListener("click", () => {
    compared.clear();
    document.querySelectorAll(".compare-action").forEach((button) => {
      button.classList.remove("active");
      button.textContent = "+";
    });
    updateCompareTray();
    showToast("Comparison cleared");
  });

  compareOpen?.addEventListener("click", () => {
    if (compared.size < 2 || !modal) return;
    const selected = [...compared].map((id) => cars.find((car) => car.id === id)).filter(Boolean);
    previousFocus = compareOpen;
    const modalImage = document.querySelector("#modal-image");
    setImageSource(modalImage, selected[0].image);
    modalImage.alt = selected.map((car) => car.name).join(" and ");
    document.querySelector("#modal-index").textContent = `${selected.length}`;
    document.querySelector("#modal-brand").textContent = "Side-by-side comparison";
    document.querySelector("#modal-title").textContent = "Performance";
    document.querySelector("#modal-engine").textContent = selected.map((car) => `${car.name}: ${car.engine}`).join(" / ");
    document.querySelector("#modal-power").textContent = selected.map((car) => `${car.name}: ${car.power}`).join(" / ");
    document.querySelector("#modal-year").textContent = selected.map((car) => `${car.name}: ${car.year}`).join(" / ");
    document.querySelector("#modal-speed").textContent = selected.map((car) => `${car.name}: ${car.speed}`).join(" / ");
    document.querySelector("#modal-description").textContent = selected.map((car) => car.description).join(" ");
    document.querySelector("#modal-tech").replaceChildren(...selected.flatMap((car) => car.tech.slice(0, 2).map((tech) => {
      const span = document.createElement("span");
      span.textContent = `${car.name}: ${tech}`;
      return span;
    })));
    document.querySelector("#modal-source").href = selected[0].source;
    document.querySelector("#modal-source").textContent = "View first vehicle on Wikipedia ↗";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  });

  // Dynamic project preview drawer
  const modal = document.querySelector("#car-modal");
  let previousFocus = null;

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    previousFocus?.focus();
  };

  const openModal = (carId) => {
    const car = cars.find((item) => item.id === carId);
    if (!car || !modal) return;
    previousFocus = document.activeElement;
    const modalImage = document.querySelector("#modal-image");
    setImageSource(modalImage, car.image);
    modalImage.alt = car.name;
    document.querySelector("#modal-index").textContent = String(cars.indexOf(car) + 1).padStart(2, "0");
    document.querySelector("#modal-brand").textContent = `${car.brand} · ${car.category}${car.generation ? ` · ${car.generation}` : ""}`;
    document.querySelector("#modal-title").textContent = car.name;
    document.querySelector("#modal-engine").textContent = car.engine;
    document.querySelector("#modal-power").textContent = car.power;
    document.querySelector("#modal-year").textContent = car.year;
    document.querySelector("#modal-speed").textContent = car.speed;
    document.querySelector("#modal-description").textContent = car.description;
    document.querySelector("#modal-source").href = car.source;
    document.querySelector("#modal-source").textContent = "View on Wikipedia ↗";
    document.querySelector("#modal-tech").replaceChildren(...car.tech.map((tech) => {
      const span = document.createElement("span");
      span.textContent = tech;
      return span;
    }));
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  };

  carCards.forEach((card) => card.addEventListener("click", () => openModal(card.dataset.carId)));
  modal?.querySelector(".modal-close")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("open")) closeModal();
  });

  // Clipboard feedback for any element marked with data-copy
  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.addEventListener("click", async () => {
      const value = element.dataset.copy;
      const feedback = element.querySelector(".copy-feedback");
      try {
        await navigator.clipboard.writeText(value);
        if (feedback) {
          feedback.textContent = "Copied";
          window.setTimeout(() => { feedback.textContent = ""; }, 1600);
        } else {
          element.setAttribute("aria-label", "Copied");
          window.setTimeout(() => element.removeAttribute("aria-label"), 1600);
        }
      } catch {
        if (feedback) feedback.textContent = "Copy unavailable";
      }
    });
  });
})();
