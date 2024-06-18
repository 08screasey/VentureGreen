export type Image = { src: string; alt?: string };
export type Album = { images: Image[]; header: string; subheader?: string; quote?: string; coverArt: Image };

const PORTRAIT_ALBUM: Album = {
    header: 'Portrait',
    coverArt: { src: '/images/cover-art/portrait.jpg' },
    images: [
        { src: '/images/photos/portrait/portrait.jpg' },
        { src: '/images/photos/portrait/portrait2.jpg' },
        { src: '/images/photos/portrait/portrait3.jpg' },
        { src: '/images/photos/portrait/portrait4.jpg' },
        { src: '/images/photos/portrait/portrait5.jpg' },
        { src: '/images/photos/portrait/portrait6.jpg' },
        { src: '/images/photos/portrait/portrait7.jpg' },
        { src: '/images/photos/portrait/portrait8.jpg' },
        { src: '/images/photos/portrait/portrait9.jpg' },
        { src: '/images/photos/portrait/portrait10.jpg' },
        { src: '/images/photos/portrait/portrait11.jpg' },
    ],
};

const ANIMAL_ALBUM: Album = {
    header: 'Animal',
    coverArt: { src: '/images/cover-art/animal.jpg' },
    images: [
        { src: '/images/photos/animals/bird+hand-2.jpg' },
        { src: '/images/photos/animals/brad+cliffs+3.jpg' },
        { src: '/images/photos/animals/brown+snake-2.jpg' },
        { src: '/images/photos/animals/crab+1.jpg' },
        { src: '/images/photos/animals/dog+2.jpg' },
        { src: '/images/photos/animals/dog+photo+2.jpg' },
        { src: '/images/photos/animals/echidna+tassie.jpg' },
        { src: '/images/photos/animals/harley+17.jpg' },
        { src: '/images/photos/animals/harley+2.jpg' },
        { src: '/images/photos/animals/harley+3.jpg' },
        { src: '/images/photos/animals/harley+5.jpg' },
        { src: '/images/photos/animals/harley+6.jpg' },
        { src: '/images/photos/animals/harley+9.jpg' },
        { src: '/images/photos/animals/kangaroo.jpg' },
        { src: '/images/photos/animals/kookaburah+2.jpg' },
        { src: '/images/photos/animals/mbai+pay+7_1.jpg' },
        { src: '/images/photos/animals/nam+30.jpg' },
        { src: '/images/photos/animals/poppy.jpg' },
        { src: '/images/photos/animals/sheep+snowdon+2.jpg' },
        { src: '/images/photos/animals/sunset+pen+y+fan+6.jpg' },
        { src: '/images/photos/animals/wombat.jpg' },
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
    coverArt: { src: '/images/cover-art/gemma.jpg' },
    images: [
        { src: '/images/photos/client/gemma/gem1.jpg' },
        { src: '/images/photos/client/gemma/gem10.jpg' },
        { src: '/images/photos/client/gemma/gem11.jpg' },
        { src: '/images/photos/client/gemma/gem12.jpg' },
        { src: '/images/photos/client/gemma/gem13.jpg' },
        { src: '/images/photos/client/gemma/gem14.jpg' },
        { src: '/images/photos/client/gemma/gem15.jpg' },
        { src: '/images/photos/client/gemma/gem16.jpg' },
        { src: '/images/photos/client/gemma/gem17.jpg' },
        { src: '/images/photos/client/gemma/gem18.jpg' },
        { src: '/images/photos/client/gemma/gem19.jpg' },
        { src: '/images/photos/client/gemma/gem2.jpg' },
        { src: '/images/photos/client/gemma/gem20.jpg' },
        { src: '/images/photos/client/gemma/gem21.jpg' },
        { src: '/images/photos/client/gemma/gem22.jpg' },
        { src: '/images/photos/client/gemma/gem23.jpg' },
        { src: '/images/photos/client/gemma/gem24.jpg' },
        { src: '/images/photos/client/gemma/gem25.jpg' },
        { src: '/images/photos/client/gemma/gem3.jpg' },
        { src: '/images/photos/client/gemma/gem4.jpg' },
        { src: '/images/photos/client/gemma/gem5.jpg' },
        { src: '/images/photos/client/gemma/gem6.jpg' },
        { src: '/images/photos/client/gemma/gem8.jpg' },
        { src: '/images/photos/client/gemma/gem9.jpg' },
    ],
};

const CAT_MOTORS_ALBUM: Album = {
    header: 'Cat Motors',
    subheader: `Based in Chiang Mai, Cat Motors are a motorbike rental company who were set up by travellers with the
    goal of allowing other travellers easy access to explore the beautiful mountain regions surrounding
    Chiang Mai Province. With a primary focus on safety for travellers they spend around 30% of profits on
    bike maintenance alone.`,
    quote: 'Created by travellers, for travellers',
    coverArt: { src: '/images/cover-art/cat-motors.jpg' },
    images: [
        { src: '/images/photos/client/cat-motors/cat.jpg' },
        { src: '/images/photos/client/cat-motors/cat10.jpg' },
        { src: '/images/photos/client/cat-motors/cat11.jpg' },
        { src: '/images/photos/client/cat-motors/cat12.jpg' },
        { src: '/images/photos/client/cat-motors/cat13.jpg' },
        { src: '/images/photos/client/cat-motors/cat2.jpg' },
        { src: '/images/photos/client/cat-motors/cat3.jpg' },
        { src: '/images/photos/client/cat-motors/cat4.jpg' },
        { src: '/images/photos/client/cat-motors/cat5.jpg' },
        { src: '/images/photos/client/cat-motors/cat6.jpg' },
        { src: '/images/photos/client/cat-motors/cat7.jpg' },
        { src: '/images/photos/client/cat-motors/cat8.jpg' },
        { src: '/images/photos/client/cat-motors/cat9.jpg' },
    ],
};

const CLIMATE_GALLERY: Album = {
    header: 'Strike For Climate 2019: Nelson, BC',
    subheader: `The September strike for climate, organised mainly by the Friday’s for Future movement, was the largest
    Strike For Climate on record. It saw people of all ages out on the street, pleading for change,
    demanding it. In Nelson, BC an estimated number of 1,500-2,000 (20% of total population) citizens joined
    the march, lead by the youth organisation. With the highest %percentage of attendees Per Capita in
    Canada, Nelson has set its sights on a sustainable future.`,
    coverArt: { src: '/images/cover-art/climate.jpg' },
    images: [
        { src: '/images/photos/client/climate/climate.jpg' },
        { src: '/images/photos/client/climate/climate10.jpg' },
        { src: '/images/photos/client/climate/climate11.jpg' },
        { src: '/images/photos/client/climate/climate12.jpg' },
        { src: '/images/photos/client/climate/climate13.jpg' },
        { src: '/images/photos/client/climate/climate14.jpg' },
        { src: '/images/photos/client/climate/climate15.jpg' },
        { src: '/images/photos/client/climate/climate16.jpg' },
        { src: '/images/photos/client/climate/climate17.jpg' },
        { src: '/images/photos/client/climate/climate18.jpg' },
        { src: '/images/photos/client/climate/climate19.jpg' },
        { src: '/images/photos/client/climate/climate2.jpg' },
        { src: '/images/photos/client/climate/climate3.jpg' },
        { src: '/images/photos/client/climate/climate4.jpg' },
        { src: '/images/photos/client/climate/climate5.jpg' },
        { src: '/images/photos/client/climate/climate6.jpg' },
        { src: '/images/photos/client/climate/climate7.jpg' },
        { src: '/images/photos/client/climate/climate8.jpg' },
        { src: '/images/photos/client/climate/climate9.jpg' },
    ],
};

const LUNA_GALLERY: Album = {
    header: 'Luna & The Moon',
    subheader: `In the quiet mountain town of Jasper, Alberta Luna & The Moon became more than just an idea. Filled with
creative motivation, Olivia crafted her ideas into reality, and each one is carefully hand-made with the
love of an independent artist. These scrunchies and headbands are made with 100% organic materials,
sourced from within Canada as much as possible. They are a perfect gift for anyone, and great to hold
your hair in place while you do your morning sun salutations.`,
    coverArt: { src: '/images/cover-art/luna.jpg' },
    images: [
        { src: '/images/photos/client/luna/Luna.jpg' },
        { src: '/images/photos/client/luna/Luna10.jpg' },
        { src: '/images/photos/client/luna/Luna11.jpg' },
        { src: '/images/photos/client/luna/Luna12.jpg' },
        { src: '/images/photos/client/luna/Luna13.jpg' },
        { src: '/images/photos/client/luna/Luna2.jpg' },
        { src: '/images/photos/client/luna/Luna3.jpg' },
        { src: '/images/photos/client/luna/Luna4.jpg' },
        { src: '/images/photos/client/luna/Luna5.jpg' },
        { src: '/images/photos/client/luna/Luna6.jpg' },
        { src: '/images/photos/client/luna/Luna7.jpg' },
        { src: '/images/photos/client/luna/Luna8.jpg' },
        { src: '/images/photos/client/luna/Luna9.jpg' },
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
    coverArt: { src: '/images/cover-art/sprout.jpg' },
    images: [
        { src: '/images/photos/client/sprout/sprout.jpg' },
        { src: '/images/photos/client/sprout/sprout10.jpg' },
        { src: '/images/photos/client/sprout/sprout11.jpg' },
        { src: '/images/photos/client/sprout/sprout12.jpg' },
        { src: '/images/photos/client/sprout/sprout13.jpg' },
        { src: '/images/photos/client/sprout/sprout14.jpg' },
        { src: '/images/photos/client/sprout/sprout15.jpg' },
        { src: '/images/photos/client/sprout/sprout16.jpg' },
        { src: '/images/photos/client/sprout/sprout17.jpg' },
        { src: '/images/photos/client/sprout/sprout2.jpg' },
        { src: '/images/photos/client/sprout/sprout3.jpg' },
        { src: '/images/photos/client/sprout/sprout4.jpg' },
        { src: '/images/photos/client/sprout/sprout5.jpg' },
        { src: '/images/photos/client/sprout/sprout6.jpg' },
        { src: '/images/photos/client/sprout/sprout7.jpg' },
        { src: '/images/photos/client/sprout/sprout8.jpg' },
        { src: '/images/photos/client/sprout/sprout9.jpg' },
    ],
};

// Travel

const ASIA_ALBUM: Album = {
    header: 'Asia',
    coverArt: { src: '/images/cover-art/asia.jpg' },
    images: [
        { src: '/images/photos/travel/asia/asia.jpg' },
        { src: '/images/photos/travel/asia/asia10.jpg' },
        { src: '/images/photos/travel/asia/asia11.jpg' },
        { src: '/images/photos/travel/asia/asia12.jpg' },
        { src: '/images/photos/travel/asia/asia13.jpg' },
        { src: '/images/photos/travel/asia/asia14.jpg' },
        { src: '/images/photos/travel/asia/asia15.jpg' },
        { src: '/images/photos/travel/asia/asia16.jpg' },
        { src: '/images/photos/travel/asia/asia18.jpg' },
        { src: '/images/photos/travel/asia/asia19.jpg' },
        { src: '/images/photos/travel/asia/asia2.jpg' },
        { src: '/images/photos/travel/asia/asia20.jpg' },
        { src: '/images/photos/travel/asia/asia21.jpg' },
        { src: '/images/photos/travel/asia/asia3.jpg' },
        { src: '/images/photos/travel/asia/asia4.jpg' },
        { src: '/images/photos/travel/asia/asia5.jpg' },
        { src: '/images/photos/travel/asia/asia6.jpg' },
        { src: '/images/photos/travel/asia/asia7.jpg' },
        { src: '/images/photos/travel/asia/asia8.jpg' },
        { src: '/images/photos/travel/asia/asia9.jpg' },
    ],
};

const CANADA_ALBUM: Album = {
    header: 'Canada',
    coverArt: { src: '/images/cover-art/canada.jpg' },
    images: [
        { src: '/images/photos/travel/canada/Athabasca+falls+complete.jpg' },
        { src: '/images/photos/travel/canada/Athabasca+falls+sunswet+3.jpg' },
        { src: '/images/photos/travel/canada/Goat+Parker+Ridge.jpg' },
        { src: '/images/photos/travel/canada/Mandy+panorama+parker+ridge.jpg' },
        { src: '/images/photos/travel/canada/PF-new-32.jpg' },
        { src: '/images/photos/travel/canada/PF-new-4.jpg' },
        { src: '/images/photos/travel/canada/Peyto+Lake+5.jpg' },
        { src: '/images/photos/travel/canada/Peyto+Lake.jpg' },
        { src: '/images/photos/travel/canada/Pyramid+Mountain.jpg' },
        { src: '/images/photos/travel/canada/Untitled Export/canada.jpg' },
        { src: '/images/photos/travel/canada/Untitled Export/canada2.jpg' },
        { src: '/images/photos/travel/canada/Untitled Export/canada3.jpg' },
        { src: '/images/photos/travel/canada/Untitled Export/canada4.jpg' },
        { src: '/images/photos/travel/canada/avalanche+jpeg.jpg' },
        { src: '/images/photos/travel/canada/reflection+pyramid+1.jpg' },
        { src: '/images/photos/travel/canada/snow+2.jpg' },
        { src: '/images/photos/travel/canada/snow+4.jpg' },
        { src: '/images/600/snow+7.jpg' },
    ],
};

const OCEANIA_ALBUM: Album = {
    header: 'Oceania',
    coverArt: { src: '/images/cover-art/oceania.jpg' },
    images: [
        { src: '/images/photos/travel/oceania/oceania.jpg' },
        { src: '/images/photos/travel/oceania/oceania10.jpg' },
        { src: '/images/photos/travel/oceania/oceania11.jpg' },
        { src: '/images/photos/travel/oceania/oceania12.jpg' },
        { src: '/images/photos/travel/oceania/oceania13.jpg' },
        { src: '/images/photos/travel/oceania/oceania14.jpg' },
        { src: '/images/photos/travel/oceania/oceania15.jpg' },
        { src: '/images/photos/travel/oceania/oceania16.jpg' },
        { src: '/images/photos/travel/oceania/oceania17.jpg' },
        { src: '/images/photos/travel/oceania/oceania18.jpg' },
        { src: '/images/photos/travel/oceania/oceania19.jpg' },
        { src: '/images/photos/travel/oceania/oceania2.jpg' },
        { src: '/images/photos/travel/oceania/oceania20.jpg' },
        { src: '/images/photos/travel/oceania/oceania21.jpg' },
        { src: '/images/photos/travel/oceania/oceania22.jpg' },
        { src: '/images/photos/travel/oceania/oceania23.jpg' },
        { src: '/images/photos/travel/oceania/oceania24.jpg' },
        { src: '/images/photos/travel/oceania/oceania25.jpg' },
        { src: '/images/photos/travel/oceania/oceania26.jpg' },
        { src: '/images/photos/travel/oceania/oceania27.jpg' },
        { src: '/images/photos/travel/oceania/oceania28.jpg' },
        { src: '/images/photos/travel/oceania/oceania3.jpg' },
        { src: '/images/photos/travel/oceania/oceania4.jpg' },
        { src: '/images/photos/travel/oceania/oceania5.jpg' },
        { src: '/images/photos/travel/oceania/oceania6.jpg' },
        { src: '/images/photos/travel/oceania/oceania7.jpg' },
        { src: '/images/photos/travel/oceania/oceania8.jpg' },
        { src: '/images/photos/travel/oceania/oceania9.jpg' },
    ],
};

const EUROPE_ALBUM: Album = {
    header: 'Europe',
    coverArt: { src: '/images/cover-art/europe.jpg' },
    images: [
        { src: '/images/photos/travel/europe/europe.jpg' },
        { src: '/images/photos/travel/europe/europe1.jpg' },
        { src: '/images/photos/travel/europe/europe10.jpg' },
        { src: '/images/photos/travel/europe/europe11.jpg' },
        { src: '/images/photos/travel/europe/europe12.jpg' },
        { src: '/images/photos/travel/europe/europe13.jpg' },
        { src: '/images/photos/travel/europe/europe14.jpg' },
        { src: '/images/photos/travel/europe/europe15.jpg' },
        { src: '/images/photos/travel/europe/europe16.jpg' },
        { src: '/images/photos/travel/europe/europe17.jpg' },
        { src: '/images/photos/travel/europe/europe18.jpg' },
        { src: '/images/photos/travel/europe/europe19.jpg' },
        { src: '/images/photos/travel/europe/europe2.jpg' },
        { src: '/images/photos/travel/europe/europe20.jpg' },
        { src: '/images/photos/travel/europe/europe21.jpg' },
        { src: '/images/photos/travel/europe/europe22.jpg' },
        { src: '/images/photos/travel/europe/europe23.jpg' },
        { src: '/images/photos/travel/europe/europe24.jpg' },
        { src: '/images/photos/travel/europe/europe25.jpg' },
        { src: '/images/photos/travel/europe/europe26.jpg' },
        { src: '/images/photos/travel/europe/europe27.jpg' },
        { src: '/images/photos/travel/europe/europe28.jpg' },
        { src: '/images/photos/travel/europe/europe3.jpg' },
        { src: '/images/photos/travel/europe/europe4.jpg' },
        { src: '/images/photos/travel/europe/europe5.jpg' },
        { src: '/images/photos/travel/europe/europe6.jpg' },
        { src: '/images/photos/travel/europe/europe7.jpg' },
        { src: '/images/photos/travel/europe/europe8.jpg' },
    ],
};

// Album Collections

const TRAVEL_ALBUMS = {
    header: 'Travel',
    coverArt: { src: '/images/cover-art/travel.jpg' },
    albums: [OCEANIA_ALBUM, ASIA_ALBUM, EUROPE_ALBUM, CANADA_ALBUM],
};
const CLIENT_ALBUMS = {
    header: 'Client',
    coverArt: { src: '/images/cover-art/client.jpg' },
    albums: [CAT_MOTORS_ALBUM, SPROUT_ALBUM, LUNA_GALLERY, CLIMATE_GALLERY, GEMMA_ALBUM],
};

export const PHOTOGRAPHY_COLLECTIONS = [TRAVEL_ALBUMS, CLIENT_ALBUMS, PORTRAIT_ALBUM, ANIMAL_ALBUM];
