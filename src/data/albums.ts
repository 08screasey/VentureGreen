export type Image = { src: string; alt: string; height: number; width: number };
export type Album = { images: Image[]; header: string; subheader?: string; quote?: string; coverArt: Image };
export type Collection = { coverArt: Image; header: string; albums: Record<string, Album> };

const PORTRAIT_ALBUM: Album = {
    header: 'Portrait',
    coverArt: {
        src: '/cover-art/portrait.jpg',
        width: 944,
        height: 998,
        alt: '',
    },
    images: [
        {
            src: '/photos/portrait/portrait.jpg',
            width: 1600,
            height: 998,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait10.jpg',
            width: 1600,
            height: 939,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait11.jpg',
            width: 1600,
            height: 1076,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait2.jpg',
            width: 1380,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait3.jpg',
            width: 1334,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait4.jpg',
            width: 1200,
            height: 1276,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait5.jpg',
            width: 1200,
            height: 1497,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait6.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait7.jpg',
            width: 1200,
            height: 1497,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait8.jpg',
            width: 1200,
            height: 1517,
            alt: '',
        },
        {
            src: '/photos/portrait/portrait9.jpg',
            width: 1600,
            height: 1137,
            alt: '',
        },
    ],
};

const ANIMAL_ALBUM: Album = {
    header: 'Animal',
    coverArt: {
        src: '/cover-art/animal.jpg',
        width: 948,
        height: 1075,
        alt: '',
    },
    images: [
        {
            src: '/photos/animals/bird+hand-2.jpg',
            width: 1308,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/animals/brad+cliffs+3.jpg',
            width: 1200,
            height: 1315,
            alt: '',
        },
        {
            src: '/photos/animals/brown+snake-2.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: '/photos/animals/crab+1.jpg',
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: '/photos/animals/dog+2.jpg',
            width: 1200,
            height: 1505,
            alt: '',
        },
        {
            src: '/photos/animals/dog+photo+2.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/animals/echidna+tassie.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/animals/harley+17.jpg',
            width: 1077,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/animals/harley+2.jpg',
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: '/photos/animals/harley+3.jpg',
            width: 1600,
            height: 987,
            alt: '',
        },
        {
            src: '/photos/animals/harley+5.jpg',
            width: 1600,
            height: 1151,
            alt: '',
        },
        {
            src: '/photos/animals/harley+6.jpg',
            width: 1600,
            height: 897,
            alt: '',
        },
        {
            src: '/photos/animals/harley+9.jpg',
            width: 1486,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/animals/kangaroo.jpg',
            width: 1121,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/animals/kookaburah+2.jpg',
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: '/photos/animals/mbai+pay+7_1.jpg',
            width: 1600,
            height: 1075,
            alt: '',
        },
        {
            src: '/photos/animals/nam+30.jpg',
            width: 1200,
            height: 1491,
            alt: '',
        },
        {
            src: '/photos/animals/poppy.jpg',
            width: 1600,
            height: 1130,
            alt: '',
        },
        {
            src: '/photos/animals/sheep+snowdon+2.jpg',
            width: 1399,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/animals/sunset+pen+y+fan+6.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: '/photos/animals/wombat.jpg',
            width: 1500,
            height: 1200,
            alt: '',
        },
    ],
};

// Clients

const GEMMA_ALBUM: Album = {
    header: 'Gemma: Aerial',
    subheader: `Tucked away in an old church building, there are people dancing in the shadows. The circus community at
        Cardiff’s No Fit State houses extraordinary talents. The outer structure has retained it’s appearance,
        and a peek through the wooden door shows that the high ceilings in this space are being used to their
        full potential. Whether its hanging from a trapeze or hand-standing tall, this place is teeming with
        strength, grace and precision. Gemma is a combination of all 3.`,
    coverArt: {
        src: '/cover-art/gemma.jpg',
        width: 900,
        height: 1061,
        alt: '',
    },
    images: [
        {
            src: '/photos/client/gemma/gem.jpg',
            width: 1123,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem1.jpg',
            width: 1048,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem10.jpg',
            width: 983,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem11.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem12.jpg',
            width: 1200,
            height: 1446,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem13.jpg',
            width: 1200,
            height: 1435,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem14.jpg',
            width: 1132,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem15.jpg',
            width: 1129,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem16.jpg',
            width: 973,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem17.jpg',
            width: 1200,
            height: 1415,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem18.jpg',
            width: 1160,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem19.jpg',
            width: 1050,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem2.jpg',
            width: 1063,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem20.jpg',
            width: 1025,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem21.jpg',
            width: 943,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem22.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem23.jpg',
            width: 866,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem24.jpg',
            width: 1054,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem25.jpg',
            width: 996,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem3.jpg',
            width: 1030,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem4.jpg',
            width: 1475,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem5.jpg',
            width: 1200,
            height: 1435,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem6.jpg',
            width: 1200,
            height: 1580,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem8.jpg',
            width: 1160,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/gemma/gem9.jpg',
            width: 1070,
            height: 1600,
            alt: '',
        },
    ],
};

const CAT_MOTORS_ALBUM: Album = {
    header: 'Cat Motors',
    subheader: `Based in Chiang Mai, Cat Motors are a motorbike rental company who were set up by travellers with the
    goal of allowing other travellers easy access to explore the beautiful mountain regions surrounding
    Chiang Mai Province. With a primary focus on safety for travellers they spend around 30% of profits on
    bike maintenance alone.`,
    quote: 'Created by travellers, for travellers',
    coverArt: {
        src: '/cover-art/cat-motors.jpg',
        width: 800,
        height: 929,
        alt: '',
    },
    images: [
        {
            src: '/photos/client/cat-motors/cat.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat10.jpg',
            width: 1153,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat11.jpg',
            width: 1600,
            height: 1055,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat12.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat13.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat2.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat3.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat4.jpg',
            width: 1279,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat5.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat6.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat7.jpg',
            width: 1600,
            height: 1203,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat8.jpg',
            width: 1600,
            height: 1153,
            alt: '',
        },
        {
            src: '/photos/client/cat-motors/cat9.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
    ],
};

const CLIMATE_GALLERY: Album = {
    header: 'Strike For Climate 2019: Nelson, BC',
    subheader: `The September strike for climate, organised mainly by the Friday’s for Future movement, was the largest
    Strike For Climate on record. It saw people of all ages out on the street, pleading for change,
    demanding it. In Nelson, BC an estimated number of 1,500-2,000 (20% of total population) citizens joined
    the march, lead by the youth organisation. With the highest %percentage of attendees Per Capita in
    Canada, Nelson has set its sights on a sustainable future.`,
    coverArt: {
        src: '/cover-art/climate.jpg',
        width: 900,
        height: 990,
        alt: '',
    },
    images: [
        {
            src: '/photos/client/climate/climate.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate10.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate11.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate12.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate13.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate14.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate15.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate16.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate17.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate18.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate19.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate2.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate3.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate4.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate5.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate6.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate7.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate8.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/climate/climate9.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
    ],
};

const LUNA_GALLERY: Album = {
    header: 'Luna & The Moon',
    subheader: `In the quiet mountain town of Jasper, Alberta Luna & The Moon became more than just an idea. Filled with
creative motivation, Olivia crafted her ideas into reality, and each one is carefully hand-made with the
love of an independent artist. These scrunchies and headbands are made with 100% organic materials,
sourced from within Canada as much as possible. They are a perfect gift for anyone, and great to hold
your hair in place while you do your morning sun salutations.`,
    coverArt: {
        src: '/cover-art/luna.jpg',
        width: 900,
        height: 1125,
        alt: '',
    },
    images: [
        {
            src: '/photos/client/luna/Luna.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna10.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna11.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna12.jpg',
            width: 1239,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna13.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna2.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna3.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna4.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna5.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna6.jpg',
            width: 1600,
            height: 1099,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna7.jpg',
            width: 1600,
            height: 932,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna8.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/luna/Luna9.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
    ],
};

const SPROUT_ALBUM: Album = {
    header: 'Sprout Plant-Based Eatery',
    subheader: `Tucked away on Ward street lies Nelson’s very first vegan eatery. This bright, cosy cafe has you leaving
satisfied and even healthier than when you walked in. If it’s Poke-bowls or doughnuts you’re after, this
cafe has it all. With a new breakfast offer to tempt you in for a morning bite, it was time for some
fresh images to showcase the mouth-watering bowls and wraps down at Sprout. If you’re in Nelson stick
Wing Wednesday in your calendar, join the community for a bowl of cauliflower wings and a vegan beer or
three!`,
    coverArt: {
        src: '/cover-art/sprout.jpg',
        width: 800,
        height: 1000,
        alt: '',
    },
    images: [
        {
            src: '/photos/client/sprout/sprout.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout10.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout11.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout12.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout13.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout14.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout15.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout16.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout17.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout2.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout3.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout4.jpg',
            width: 1600,
            height: 1046,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout5.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout6.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout7.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout8.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/client/sprout/sprout9.jpg',
            width: 1600,
            height: 785,
            alt: '',
        },
    ],
};

// Travel

const ASIA_ALBUM: Album = {
    header: 'Asia',
    coverArt: {
        src: '/cover-art/asia.jpg',
        width: 897,
        height: 1085,
        alt: '',
    },
    images: [
        {
            src: '/photos/travel/asia/asia.jpg',
            width: 1600,
            height: 1198,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia10.jpg',
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia11.jpg',
            width: 1600,
            height: 991,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia12.jpg',
            width: 1600,
            height: 1014,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia13.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia14.jpg',
            width: 1600,
            height: 983,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia15.jpg',
            width: 1200,
            height: 1501,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia16.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia18.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia19.jpg',
            width: 1600,
            height: 1198,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia2.jpg',
            width: 1600,
            height: 1033,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia20.jpg',
            width: 1600,
            height: 1009,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia21.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia3.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia4.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia5.jpg',
            width: 1600,
            height: 1198,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia6.jpg',
            width: 1600,
            height: 1087,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia7.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia8.jpg',
            width: 1600,
            height: 1016,
            alt: '',
        },
        {
            src: '/photos/travel/asia/asia9.jpg',
            width: 1200,
            height: 1505,
            alt: '',
        },
    ],
};

const CANADA_ALBUM: Album = {
    header: 'Canada',
    coverArt: {
        src: '/cover-art/canada.jpg',
        width: 1000,
        height: 1250,
        alt: '',
    },
    images: [
        {
            src: '/photos/travel/canada/Athabasca+falls+complete.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Athabasca+falls+sunswet+3.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Goat+Parker+Ridge.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Mandy+panorama+parker+ridge.jpg',
            width: 1600,
            height: 858,
            alt: '',
        },
        {
            src: '/photos/travel/canada/PF-new-32.jpg',
            width: 1600,
            height: 863,
            alt: '',
        },
        {
            src: '/photos/travel/canada/PF-new-4.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Peyto+Lake+5.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Peyto+Lake.jpg',
            width: 1600,
            height: 667,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Pyramid+Mountain.jpg',
            width: 2500,
            height: 3125,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Untitled Export/canada.jpg',
            width: 1600,
            height: 951,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Untitled Export/canada2.jpg',
            width: 1600,
            height: 987,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Untitled Export/canada3.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/canada/Untitled Export/canada4.jpg',
            width: 1189,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/canada/alex+6.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/canada/avalanche+jpeg.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/canada/reflection+pyramid+1.jpg',
            width: 1600,
            height: 1044,
            alt: '',
        },
        {
            src: '/photos/travel/canada/snow+2.jpg',
            width: 1600,
            height: 898,
            alt: '',
        },
        {
            src: '/photos/travel/canada/snow+4.jpg',
            width: 1600,
            height: 1197,
            alt: '',
        },
        {
            src: '/photos/travel/canada/snow+7.jpg',
            width: 1280,
            height: 1600,
            alt: '',
        },
    ],
};

const OCEANIA_ALBUM: Album = {
    header: 'Oceania',
    coverArt: {
        src: '/cover-art/oceania.jpg',
        width: 900,
        height: 950,
        alt: '',
    },
    images: [
        {
            src: '/photos/travel/oceania/oceania.jpg',
            width: 1600,
            height: 1064,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania10.jpg',
            width: 1200,
            height: 1502,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania11.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania12.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania13.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania14.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania15.jpg',
            width: 1600,
            height: 1052,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania16.jpg',
            width: 1200,
            height: 1495,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania17.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania18.jpg',
            width: 1200,
            height: 1499,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania19.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania2.jpg',
            width: 1600,
            height: 1074,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania20.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania21.jpg',
            width: 1200,
            height: 1511,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania22.jpg',
            width: 1600,
            height: 1195,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania23.jpg',
            width: 1600,
            height: 1081,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania24.jpg',
            width: 1051,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania25.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania26.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania27.jpg',
            width: 1200,
            height: 1499,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania28.jpg',
            width: 1600,
            height: 1145,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania3.jpg',
            width: 1200,
            height: 1414,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania4.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania5.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania6.jpg',
            width: 1600,
            height: 1185,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania7.jpg',
            width: 1600,
            height: 1167,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania8.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/oceania/oceania9.jpg',
            width: 1200,
            height: 1349,
            alt: '',
        },
    ],
};

const EUROPE_ALBUM: Album = {
    header: 'Europe',
    coverArt: {
        src: '/cover-art/europe.jpg',
        width: 970,
        height: 1067,
        alt: '',
    },
    images: [
        {
            src: '/photos/travel/europe/europe.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe1.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe10.jpg',
            width: 1600,
            height: 1199,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe11.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe12.jpg',
            width: 1200,
            height: 1499,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe13.jpg',
            width: 1200,
            height: 1498,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe14.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe15.jpg',
            width: 1600,
            height: 958,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe16.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe17.jpg',
            width: 1287,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe18.jpg',
            width: 1200,
            height: 1496,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe19.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe2.jpg',
            width: 1200,
            height: 1414,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe20.jpg',
            width: 1200,
            height: 1505,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe21.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe22.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe23.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe24.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe25.jpg',
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe26.jpg',
            width: 1600,
            height: 1052,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe27.jpg',
            width: 1200,
            height: 1502,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe28.jpg',
            width: 1200,
            height: 1480,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe3.jpg',
            width: 1600,
            height: 1153,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe4.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe5.jpg',
            width: 1600,
            height: 1065,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe6.jpg',
            width: 1481,
            height: 1200,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe7.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe8.jpg',
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: '/photos/travel/europe/europe9.jpg',
            width: 1200,
            height: 1500,
            alt: '',
        },
    ],
};

// Album Collections

const TRAVEL_COLLECTION: Collection = {
    header: 'Travel',
    coverArt: { src: '/cover-art/travel.jpg', width: 900, height: 1128, alt: '' },
    albums: { oceania: OCEANIA_ALBUM, asia: ASIA_ALBUM, europe: EUROPE_ALBUM, canada: CANADA_ALBUM },
};
const CLIENT_COLLECTION: Collection = {
    header: 'Client',
    coverArt: { src: '/cover-art/client.jpg', height: 1198, width: 900, alt: '' },
    albums: {
        'cat-motors': CAT_MOTORS_ALBUM,
        sprout: SPROUT_ALBUM,
        'luna-and-the-moon': LUNA_GALLERY,
        'climate-strike': CLIMATE_GALLERY,
        gemma: GEMMA_ALBUM,
    },
};

export const PHOTOGRAPHY_COLLECTIONS = {
    travel: TRAVEL_COLLECTION,
    client: CLIENT_COLLECTION,
    portrait: PORTRAIT_ALBUM,
    animal: ANIMAL_ALBUM,
};
