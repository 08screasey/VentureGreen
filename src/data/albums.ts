import { type StaticImageData } from 'next/image';

import coverAnimal from '../../public/cover-art/animal.jpg';
import coverAsia from '../../public/cover-art/asia.jpg';
import coverCanada from '../../public/cover-art/canada.jpg';
import coverCatMotors from '../../public/cover-art/cat-motors.jpg';
import coverClient from '../../public/cover-art/client.jpg';
import coverClimate from '../../public/cover-art/climate.jpg';
import coverEurope from '../../public/cover-art/europe.jpg';
import coverGemma from '../../public/cover-art/gemma.jpg';
import coverLuna from '../../public/cover-art/luna.jpg';
import coverOceania from '../../public/cover-art/oceania.jpg';
import coverPortrait from '../../public/cover-art/portrait.jpg';
import coverSprout from '../../public/cover-art/sprout.jpg';
import coverTravel from '../../public/cover-art/travel.jpg';
import animals1 from '../../public/photos/animals/bird+hand-2.jpg';
import animals2 from '../../public/photos/animals/brad+cliffs+3.jpg';
import animals3 from '../../public/photos/animals/brown+snake-2.jpg';
import animals4 from '../../public/photos/animals/crab+1.jpg';
import animals5 from '../../public/photos/animals/dog+2.jpg';
import animals6 from '../../public/photos/animals/dog+photo+2.jpg';
import animals7 from '../../public/photos/animals/echidna+tassie.jpg';
import animals8 from '../../public/photos/animals/harley+17.jpg';
import animals9 from '../../public/photos/animals/harley+2.jpg';
import animals10 from '../../public/photos/animals/harley+3.jpg';
import animals11 from '../../public/photos/animals/harley+5.jpg';
import animals12 from '../../public/photos/animals/harley+6.jpg';
import animals13 from '../../public/photos/animals/harley+9.jpg';
import animals14 from '../../public/photos/animals/kangaroo.jpg';
import animals15 from '../../public/photos/animals/kookaburah+2.jpg';
import animals16 from '../../public/photos/animals/mbai+pay+7_1.jpg';
import animals17 from '../../public/photos/animals/nam+30.jpg';
import animals18 from '../../public/photos/animals/poppy.jpg';
import animals19 from '../../public/photos/animals/sheep+snowdon+2.jpg';
import animals20 from '../../public/photos/animals/sunset+pen+y+fan+6.jpg';
import animals21 from '../../public/photos/animals/wombat.jpg';
import catMotors1 from '../../public/photos/client/cat-motors/cat.jpg';
import catMotors2 from '../../public/photos/client/cat-motors/cat10.jpg';
import catMotors3 from '../../public/photos/client/cat-motors/cat11.jpg';
import catMotors4 from '../../public/photos/client/cat-motors/cat12.jpg';
import catMotors5 from '../../public/photos/client/cat-motors/cat13.jpg';
import catMotors6 from '../../public/photos/client/cat-motors/cat2.jpg';
import catMotors7 from '../../public/photos/client/cat-motors/cat3.jpg';
import catMotors8 from '../../public/photos/client/cat-motors/cat4.jpg';
import catMotors9 from '../../public/photos/client/cat-motors/cat5.jpg';
import catMotors10 from '../../public/photos/client/cat-motors/cat6.jpg';
import catMotors11 from '../../public/photos/client/cat-motors/cat7.jpg';
import catMotors12 from '../../public/photos/client/cat-motors/cat8.jpg';
import catMotors13 from '../../public/photos/client/cat-motors/cat9.jpg';
import climate1 from '../../public/photos/client/climate/climate.jpg';
import climate2 from '../../public/photos/client/climate/climate10.jpg';
import climate3 from '../../public/photos/client/climate/climate11.jpg';
import climate4 from '../../public/photos/client/climate/climate12.jpg';
import climate5 from '../../public/photos/client/climate/climate13.jpg';
import climate6 from '../../public/photos/client/climate/climate14.jpg';
import climate7 from '../../public/photos/client/climate/climate15.jpg';
import climate8 from '../../public/photos/client/climate/climate16.jpg';
import climate9 from '../../public/photos/client/climate/climate17.jpg';
import climate10 from '../../public/photos/client/climate/climate18.jpg';
import climate11 from '../../public/photos/client/climate/climate19.jpg';
import climate12 from '../../public/photos/client/climate/climate2.jpg';
import climate13 from '../../public/photos/client/climate/climate3.jpg';
import climate14 from '../../public/photos/client/climate/climate4.jpg';
import climate15 from '../../public/photos/client/climate/climate5.jpg';
import climate16 from '../../public/photos/client/climate/climate6.jpg';
import climate17 from '../../public/photos/client/climate/climate7.jpg';
import climate18 from '../../public/photos/client/climate/climate8.jpg';
import climate19 from '../../public/photos/client/climate/climate9.jpg';
import gemma12 from '../../public/photos/client/gemma/gem.jpg';
import gemma13 from '../../public/photos/client/gemma/gem1.jpg';
import gemma14 from '../../public/photos/client/gemma/gem10.jpg';
import gemma15 from '../../public/photos/client/gemma/gem11.jpg';
import gemma16 from '../../public/photos/client/gemma/gem12.jpg';
import gemma17 from '../../public/photos/client/gemma/gem13.jpg';
import gemma18 from '../../public/photos/client/gemma/gem14.jpg';
import gemma19 from '../../public/photos/client/gemma/gem15.jpg';
import gemma20 from '../../public/photos/client/gemma/gem16.jpg';
import gemma21 from '../../public/photos/client/gemma/gem17.jpg';
import gemma22 from '../../public/photos/client/gemma/gem18.jpg';
import gemma23 from '../../public/photos/client/gemma/gem19.jpg';
import gemma24 from '../../public/photos/client/gemma/gem2.jpg';
import gemma25 from '../../public/photos/client/gemma/gem20.jpg';
import gemma1 from '../../public/photos/client/gemma/gem21.jpg';
import gemma2 from '../../public/photos/client/gemma/gem22.jpg';
import gemma3 from '../../public/photos/client/gemma/gem23.jpg';
import gemma4 from '../../public/photos/client/gemma/gem24.jpg';
import gemma5 from '../../public/photos/client/gemma/gem25.jpg';
import gemma6 from '../../public/photos/client/gemma/gem3.jpg';
import gemma7 from '../../public/photos/client/gemma/gem4.jpg';
import gemma8 from '../../public/photos/client/gemma/gem5.jpg';
import gemma9 from '../../public/photos/client/gemma/gem6.jpg';
import gemma10 from '../../public/photos/client/gemma/gem8.jpg';
import gemma11 from '../../public/photos/client/gemma/gem9.jpg';
import luna1 from '../../public/photos/client/luna/Luna.jpg';
import luna2 from '../../public/photos/client/luna/Luna10.jpg';
import luna3 from '../../public/photos/client/luna/Luna11.jpg';
import luna4 from '../../public/photos/client/luna/Luna12.jpg';
import luna5 from '../../public/photos/client/luna/Luna13.jpg';
import luna6 from '../../public/photos/client/luna/Luna2.jpg';
import luna7 from '../../public/photos/client/luna/Luna3.jpg';
import luna8 from '../../public/photos/client/luna/Luna4.jpg';
import luna9 from '../../public/photos/client/luna/Luna5.jpg';
import luna10 from '../../public/photos/client/luna/Luna6.jpg';
import luna11 from '../../public/photos/client/luna/Luna7.jpg';
import luna12 from '../../public/photos/client/luna/Luna8.jpg';
import luna13 from '../../public/photos/client/luna/Luna9.jpg';
import sprout1 from '../../public/photos/client/sprout/sprout.jpg';
import sprout2 from '../../public/photos/client/sprout/sprout10.jpg';
import sprout3 from '../../public/photos/client/sprout/sprout11.jpg';
import sprout4 from '../../public/photos/client/sprout/sprout12.jpg';
import sprout5 from '../../public/photos/client/sprout/sprout13.jpg';
import sprout6 from '../../public/photos/client/sprout/sprout14.jpg';
import sprout7 from '../../public/photos/client/sprout/sprout15.jpg';
import sprout8 from '../../public/photos/client/sprout/sprout16.jpg';
import sprout9 from '../../public/photos/client/sprout/sprout17.jpg';
import sprout10 from '../../public/photos/client/sprout/sprout2.jpg';
import sprout11 from '../../public/photos/client/sprout/sprout3.jpg';
import sprout12 from '../../public/photos/client/sprout/sprout4.jpg';
import sprout13 from '../../public/photos/client/sprout/sprout5.jpg';
import sprout14 from '../../public/photos/client/sprout/sprout6.jpg';
import sprout15 from '../../public/photos/client/sprout/sprout7.jpg';
import sprout16 from '../../public/photos/client/sprout/sprout8.jpg';
import sprout17 from '../../public/photos/client/sprout/sprout9.jpg';
import portrait1 from '../../public/photos/portrait/portrait.jpg';
import portrait2 from '../../public/photos/portrait/portrait10.jpg';
import portrait3 from '../../public/photos/portrait/portrait11.jpg';
import portrait4 from '../../public/photos/portrait/portrait2.jpg';
import portrait5 from '../../public/photos/portrait/portrait3.jpg';
import portrait6 from '../../public/photos/portrait/portrait4.jpg';
import portrait7 from '../../public/photos/portrait/portrait5.jpg';
import portrait8 from '../../public/photos/portrait/portrait6.jpg';
import portrait9 from '../../public/photos/portrait/portrait7.jpg';
import portrait10 from '../../public/photos/portrait/portrait8.jpg';
import portrait11 from '../../public/photos/portrait/portrait9.jpg';
import asia1 from '../../public/photos/travel/asia/asia.jpg';
import asia2 from '../../public/photos/travel/asia/asia10.jpg';
import asia3 from '../../public/photos/travel/asia/asia11.jpg';
import asia4 from '../../public/photos/travel/asia/asia12.jpg';
import asia5 from '../../public/photos/travel/asia/asia13.jpg';
import asia6 from '../../public/photos/travel/asia/asia14.jpg';
import asia7 from '../../public/photos/travel/asia/asia15.jpg';
import asia8 from '../../public/photos/travel/asia/asia16.jpg';
import asia9 from '../../public/photos/travel/asia/asia18.jpg';
import asia10 from '../../public/photos/travel/asia/asia19.jpg';
import asia11 from '../../public/photos/travel/asia/asia2.jpg';
import asia12 from '../../public/photos/travel/asia/asia20.jpg';
import asia13 from '../../public/photos/travel/asia/asia21.jpg';
import asia14 from '../../public/photos/travel/asia/asia3.jpg';
import asia15 from '../../public/photos/travel/asia/asia4.jpg';
import asia16 from '../../public/photos/travel/asia/asia5.jpg';
import asia17 from '../../public/photos/travel/asia/asia6.jpg';
import asia18 from '../../public/photos/travel/asia/asia7.jpg';
import asia19 from '../../public/photos/travel/asia/asia8.jpg';
import asia20 from '../../public/photos/travel/asia/asia9.jpg';
import canada1 from '../../public/photos/travel/canada/Athabasca+falls+complete.jpg';
import canada2 from '../../public/photos/travel/canada/Athabasca+falls+sunswet+3.jpg';
import canada3 from '../../public/photos/travel/canada/Goat+Parker+Ridge.jpg';
import canada4 from '../../public/photos/travel/canada/Mandy+panorama+parker+ridge.jpg';
import canada5 from '../../public/photos/travel/canada/PF-new-32.jpg';
import canada6 from '../../public/photos/travel/canada/PF-new-4.jpg';
import canada7 from '../../public/photos/travel/canada/Peyto+Lake+5.jpg';
import canada8 from '../../public/photos/travel/canada/Peyto+Lake.jpg';
import canada9 from '../../public/photos/travel/canada/Pyramid+Mountain.jpg';
import canada10 from '../../public/photos/travel/canada/alex+6.jpg';
import canada11 from '../../public/photos/travel/canada/avalanche+jpeg.jpg';
import canada12 from '../../public/photos/travel/canada/canada.jpg';
import canada13 from '../../public/photos/travel/canada/canada2.jpg';
import canada14 from '../../public/photos/travel/canada/canada3.jpg';
import canada15 from '../../public/photos/travel/canada/canada4.jpg';
import canada16 from '../../public/photos/travel/canada/reflection+pyramid+1.jpg';
import canada17 from '../../public/photos/travel/canada/snow+2.jpg';
import canada18 from '../../public/photos/travel/canada/snow+4.jpg';
import canada19 from '../../public/photos/travel/canada/snow+7.jpg';
import europe1 from '../../public/photos/travel/europe/europe.jpg';
import europe2 from '../../public/photos/travel/europe/europe1.jpg';
import europe3 from '../../public/photos/travel/europe/europe10.jpg';
import europe4 from '../../public/photos/travel/europe/europe11.jpg';
import europe5 from '../../public/photos/travel/europe/europe12.jpg';
import europe6 from '../../public/photos/travel/europe/europe13.jpg';
import europe7 from '../../public/photos/travel/europe/europe14.jpg';
import europe8 from '../../public/photos/travel/europe/europe15.jpg';
import europe9 from '../../public/photos/travel/europe/europe16.jpg';
import europe10 from '../../public/photos/travel/europe/europe17.jpg';
import europe11 from '../../public/photos/travel/europe/europe18.jpg';
import europe12 from '../../public/photos/travel/europe/europe19.jpg';
import europe13 from '../../public/photos/travel/europe/europe2.jpg';
import europe14 from '../../public/photos/travel/europe/europe20.jpg';
import europe15 from '../../public/photos/travel/europe/europe21.jpg';
import europe16 from '../../public/photos/travel/europe/europe22.jpg';
import europe17 from '../../public/photos/travel/europe/europe23.jpg';
import europe18 from '../../public/photos/travel/europe/europe24.jpg';
import europe19 from '../../public/photos/travel/europe/europe25.jpg';
import europe20 from '../../public/photos/travel/europe/europe26.jpg';
import europe21 from '../../public/photos/travel/europe/europe27.jpg';
import europe22 from '../../public/photos/travel/europe/europe28.jpg';
import europe23 from '../../public/photos/travel/europe/europe3.jpg';
import europe24 from '../../public/photos/travel/europe/europe4.jpg';
import europe25 from '../../public/photos/travel/europe/europe5.jpg';
import europe26 from '../../public/photos/travel/europe/europe6.jpg';
import europe27 from '../../public/photos/travel/europe/europe7.jpg';
import europe28 from '../../public/photos/travel/europe/europe8.jpg';
import europe29 from '../../public/photos/travel/europe/europe9.jpg';
import oceania1 from '../../public/photos/travel/oceania/oceania.jpg';
import oceania2 from '../../public/photos/travel/oceania/oceania10.jpg';
import oceania3 from '../../public/photos/travel/oceania/oceania11.jpg';
import oceania4 from '../../public/photos/travel/oceania/oceania12.jpg';
import oceania5 from '../../public/photos/travel/oceania/oceania13.jpg';
import oceania6 from '../../public/photos/travel/oceania/oceania14.jpg';
import oceania7 from '../../public/photos/travel/oceania/oceania15.jpg';
import oceania8 from '../../public/photos/travel/oceania/oceania16.jpg';
import oceania9 from '../../public/photos/travel/oceania/oceania17.jpg';
import oceania10 from '../../public/photos/travel/oceania/oceania18.jpg';
import oceania11 from '../../public/photos/travel/oceania/oceania19.jpg';
import oceania12 from '../../public/photos/travel/oceania/oceania2.jpg';
import oceania13 from '../../public/photos/travel/oceania/oceania20.jpg';
import oceania14 from '../../public/photos/travel/oceania/oceania21.jpg';
import oceania15 from '../../public/photos/travel/oceania/oceania22.jpg';
import oceania16 from '../../public/photos/travel/oceania/oceania23.jpg';
import oceania17 from '../../public/photos/travel/oceania/oceania24.jpg';
import oceania18 from '../../public/photos/travel/oceania/oceania25.jpg';
import oceania19 from '../../public/photos/travel/oceania/oceania26.jpg';
import oceania20 from '../../public/photos/travel/oceania/oceania27.jpg';
import oceania21 from '../../public/photos/travel/oceania/oceania28.jpg';
import oceania22 from '../../public/photos/travel/oceania/oceania3.jpg';
import oceania23 from '../../public/photos/travel/oceania/oceania4.jpg';
import oceania24 from '../../public/photos/travel/oceania/oceania5.jpg';
import oceania25 from '../../public/photos/travel/oceania/oceania6.jpg';
import oceania26 from '../../public/photos/travel/oceania/oceania7.jpg';
import oceania27 from '../../public/photos/travel/oceania/oceania8.jpg';
import oceania28 from '../../public/photos/travel/oceania/oceania9.jpg';

export type Image = { src: StaticImageData; alt: string; height: number; width: number };
export type Album = { images: Image[]; header: string; subheader?: string; quote?: string; coverArt: Image };
export type Collection = { coverArt: Image; header: string; albums: Record<string, Album> };

const PORTRAIT_ALBUM: Album = {
    header: 'Portrait',
    coverArt: {
        src: coverPortrait,
        width: 944,
        height: 998,
        alt: '',
    },
    images: [
        {
            src: portrait1,
            width: 1600,
            height: 998,
            alt: '',
        },
        {
            src: portrait2,
            width: 1600,
            height: 939,
            alt: '',
        },
        {
            src: portrait3,
            width: 1600,
            height: 1076,
            alt: '',
        },
        {
            src: portrait4,
            width: 1380,
            height: 1200,
            alt: '',
        },
        {
            src: portrait5,
            width: 1334,
            height: 1200,
            alt: '',
        },
        {
            src: portrait6,
            width: 1200,
            height: 1276,
            alt: '',
        },
        {
            src: portrait7,
            width: 1200,
            height: 1497,
            alt: '',
        },
        {
            src: portrait8,
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: portrait9,
            width: 1200,
            height: 1497,
            alt: '',
        },
        {
            src: portrait10,
            width: 1200,
            height: 1517,
            alt: '',
        },
        {
            src: portrait11,
            width: 1600,
            height: 1137,
            alt: '',
        },
    ],
};

const ANIMAL_ALBUM: Album = {
    header: 'Animal',
    coverArt: {
        src: coverAnimal,
        width: 948,
        height: 1075,
        alt: '',
    },
    images: [
        {
            src: animals1,
            width: 1308,
            height: 1200,
            alt: '',
        },
        {
            src: animals2,
            width: 1200,
            height: 1315,
            alt: '',
        },
        {
            src: animals3,
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: animals4,
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: animals5,
            width: 1200,
            height: 1505,
            alt: '',
        },
        {
            src: animals6,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: animals7,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: animals8,
            width: 1077,
            height: 1600,
            alt: '',
        },
        {
            src: animals9,
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: animals10,
            width: 1600,
            height: 987,
            alt: '',
        },
        {
            src: animals11,
            width: 1600,
            height: 1151,
            alt: '',
        },
        {
            src: animals12,
            width: 1600,
            height: 897,
            alt: '',
        },
        {
            src: animals13,
            width: 1486,
            height: 1200,
            alt: '',
        },
        {
            src: animals14,
            width: 1121,
            height: 1600,
            alt: '',
        },
        {
            src: animals15,
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: animals16,
            width: 1600,
            height: 1075,
            alt: '',
        },
        {
            src: animals17,
            width: 1200,
            height: 1491,
            alt: '',
        },
        {
            src: animals18,
            width: 1600,
            height: 1130,
            alt: '',
        },
        {
            src: animals19,
            width: 1399,
            height: 1200,
            alt: '',
        },
        {
            src: animals20,
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: animals21,
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
        src: coverGemma,
        width: 900,
        height: 1061,
        alt: '',
    },
    images: [
        {
            src: gemma1,
            width: 1123,
            height: 1600,
            alt: '',
        },
        {
            src: gemma2,
            width: 1048,
            height: 1600,
            alt: '',
        },
        {
            src: gemma3,
            width: 983,
            height: 1600,
            alt: '',
        },
        {
            src: gemma4,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: gemma5,
            width: 1200,
            height: 1446,
            alt: '',
        },
        {
            src: gemma6,
            width: 1200,
            height: 1435,
            alt: '',
        },
        {
            src: gemma7,
            width: 1132,
            height: 1600,
            alt: '',
        },
        {
            src: gemma8,
            width: 1129,
            height: 1600,
            alt: '',
        },
        {
            src: gemma9,
            width: 973,
            height: 1600,
            alt: '',
        },
        {
            src: gemma10,
            width: 1200,
            height: 1415,
            alt: '',
        },
        {
            src: gemma11,
            width: 1160,
            height: 1600,
            alt: '',
        },
        {
            src: gemma12,
            width: 1050,
            height: 1600,
            alt: '',
        },
        {
            src: gemma13,
            width: 1063,
            height: 1600,
            alt: '',
        },
        {
            src: gemma14,
            width: 1025,
            height: 1600,
            alt: '',
        },
        {
            src: gemma15,
            width: 943,
            height: 1600,
            alt: '',
        },
        {
            src: gemma16,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: gemma17,
            width: 866,
            height: 1600,
            alt: '',
        },
        {
            src: gemma18,
            width: 1054,
            height: 1600,
            alt: '',
        },
        {
            src: gemma19,
            width: 996,
            height: 1600,
            alt: '',
        },
        {
            src: gemma20,
            width: 1030,
            height: 1600,
            alt: '',
        },
        {
            src: gemma21,
            width: 1475,
            height: 1200,
            alt: '',
        },
        {
            src: gemma22,
            width: 1200,
            height: 1435,
            alt: '',
        },
        {
            src: gemma23,
            width: 1200,
            height: 1580,
            alt: '',
        },
        {
            src: gemma24,
            width: 1160,
            height: 1600,
            alt: '',
        },
        {
            src: gemma25,
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
        src: coverCatMotors,
        width: 800,
        height: 929,
        alt: '',
    },
    images: [
        {
            src: catMotors1,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: catMotors2,
            width: 1153,
            height: 1600,
            alt: '',
        },
        {
            src: catMotors3,
            width: 1600,
            height: 1055,
            alt: '',
        },
        {
            src: catMotors4,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: catMotors5,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: catMotors6,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: catMotors7,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: catMotors8,
            width: 1279,
            height: 1600,
            alt: '',
        },
        {
            src: catMotors9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: catMotors10,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: catMotors11,
            width: 1600,
            height: 1203,
            alt: '',
        },
        {
            src: catMotors12,
            width: 1600,
            height: 1153,
            alt: '',
        },
        {
            src: catMotors13,
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
        src: coverClimate,
        width: 900,
        height: 990,
        alt: '',
    },
    images: [
        {
            src: climate1,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate2,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate3,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate4,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate5,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate6,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate7,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate8,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate10,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate11,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate12,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: climate13,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate14,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate15,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate16,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate17,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate18,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: climate19,
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
        src: coverLuna,
        width: 900,
        height: 1125,
        alt: '',
    },
    images: [
        {
            src: luna1,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: luna2,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: luna3,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: luna4,
            width: 1239,
            height: 1600,
            alt: '',
        },
        {
            src: luna5,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: luna6,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: luna7,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: luna8,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: luna9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: luna10,
            width: 1600,
            height: 1099,
            alt: '',
        },
        {
            src: luna11,
            width: 1600,
            height: 932,
            alt: '',
        },
        {
            src: luna12,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: luna13,
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
        src: coverSprout,
        width: 800,
        height: 1000,
        alt: '',
    },
    images: [
        {
            src: sprout1,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout2,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout3,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout4,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: sprout5,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout6,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout7,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout8,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout10,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout11,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout12,
            width: 1600,
            height: 1046,
            alt: '',
        },
        {
            src: sprout13,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout14,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout15,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout16,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: sprout17,
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
        src: coverAsia,
        width: 897,
        height: 1085,
        alt: '',
    },
    images: [
        {
            src: asia1,
            width: 1600,
            height: 1198,
            alt: '',
        },
        {
            src: asia2,
            width: 1200,
            height: 1504,
            alt: '',
        },
        {
            src: asia3,
            width: 1600,
            height: 991,
            alt: '',
        },
        {
            src: asia4,
            width: 1600,
            height: 1014,
            alt: '',
        },
        {
            src: asia5,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia6,
            width: 1600,
            height: 983,
            alt: '',
        },
        {
            src: asia7,
            width: 1200,
            height: 1501,
            alt: '',
        },
        {
            src: asia8,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia10,
            width: 1600,
            height: 1198,
            alt: '',
        },
        {
            src: asia11,
            width: 1600,
            height: 1033,
            alt: '',
        },
        {
            src: asia12,
            width: 1600,
            height: 1009,
            alt: '',
        },
        {
            src: asia13,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia14,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia15,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia16,
            width: 1600,
            height: 1198,
            alt: '',
        },
        {
            src: asia17,
            width: 1600,
            height: 1087,
            alt: '',
        },
        {
            src: asia18,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: asia19,
            width: 1600,
            height: 1016,
            alt: '',
        },
        {
            src: asia20,
            width: 1200,
            height: 1505,
            alt: '',
        },
    ],
};

const CANADA_ALBUM: Album = {
    header: 'Canada',
    coverArt: {
        src: coverCanada,
        width: 1000,
        height: 1250,
        alt: '',
    },
    images: [
        {
            src: canada1,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: canada2,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: canada3,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: canada4,
            width: 1600,
            height: 858,
            alt: '',
        },
        {
            src: canada5,
            width: 1600,
            height: 863,
            alt: '',
        },
        {
            src: canada6,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: canada7,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: canada8,
            width: 1600,
            height: 667,
            alt: '',
        },
        {
            src: canada9,
            width: 2500,
            height: 3125,
            alt: '',
        },
        {
            src: canada10,
            width: 1600,
            height: 951,
            alt: '',
        },
        {
            src: canada11,
            width: 1600,
            height: 987,
            alt: '',
        },
        {
            src: canada12,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: canada13,
            width: 1189,
            height: 1600,
            alt: '',
        },
        {
            src: canada14,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: canada15,
            width: 1280,
            height: 1600,
            alt: '',
        },
        {
            src: canada16,
            width: 1600,
            height: 1044,
            alt: '',
        },
        {
            src: canada17,
            width: 1600,
            height: 898,
            alt: '',
        },
        {
            src: canada18,
            width: 1600,
            height: 1197,
            alt: '',
        },
        {
            src: canada19,
            width: 1280,
            height: 1600,
            alt: '',
        },
    ],
};

const OCEANIA_ALBUM: Album = {
    header: 'Oceania',
    coverArt: {
        src: coverOceania,
        width: 900,
        height: 950,
        alt: '',
    },
    images: [
        {
            src: oceania1,
            width: 1600,
            height: 1064,
            alt: '',
        },
        {
            src: oceania2,
            width: 1200,
            height: 1502,
            alt: '',
        },
        {
            src: oceania3,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania4,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania5,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania6,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: oceania7,
            width: 1600,
            height: 1052,
            alt: '',
        },
        {
            src: oceania8,
            width: 1200,
            height: 1495,
            alt: '',
        },
        {
            src: oceania9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania10,
            width: 1200,
            height: 1499,
            alt: '',
        },
        {
            src: oceania11,
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: oceania12,
            width: 1600,
            height: 1074,
            alt: '',
        },
        {
            src: oceania13,
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: oceania14,
            width: 1200,
            height: 1511,
            alt: '',
        },
        {
            src: oceania15,
            width: 1600,
            height: 1195,
            alt: '',
        },
        {
            src: oceania16,
            width: 1600,
            height: 1081,
            alt: '',
        },
        {
            src: oceania17,
            width: 1051,
            height: 1600,
            alt: '',
        },
        {
            src: oceania18,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: oceania19,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania20,
            width: 1200,
            height: 1499,
            alt: '',
        },
        {
            src: oceania21,
            width: 1600,
            height: 1145,
            alt: '',
        },
        {
            src: oceania22,
            width: 1200,
            height: 1414,
            alt: '',
        },
        {
            src: oceania23,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania24,
            width: 1200,
            height: 1500,
            alt: '',
        },
        {
            src: oceania25,
            width: 1600,
            height: 1185,
            alt: '',
        },
        {
            src: oceania26,
            width: 1600,
            height: 1167,
            alt: '',
        },
        {
            src: oceania27,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: oceania28,
            width: 1200,
            height: 1349,
            alt: '',
        },
    ],
};

const EUROPE_ALBUM: Album = {
    header: 'Europe',
    coverArt: {
        src: coverEurope,
        width: 970,
        height: 1067,
        alt: '',
    },
    images: [
        {
            src: europe1,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe2,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe3,
            width: 1600,
            height: 1199,
            alt: '',
        },
        {
            src: europe4,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe5,
            width: 1200,
            height: 1499,
            alt: '',
        },
        {
            src: europe6,
            width: 1200,
            height: 1498,
            alt: '',
        },
        {
            src: europe7,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe8,
            width: 1600,
            height: 958,
            alt: '',
        },
        {
            src: europe9,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe10,
            width: 1287,
            height: 1200,
            alt: '',
        },
        {
            src: europe11,
            width: 1200,
            height: 1496,
            alt: '',
        },
        {
            src: europe12,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: europe13,
            width: 1200,
            height: 1414,
            alt: '',
        },
        {
            src: europe14,
            width: 1200,
            height: 1505,
            alt: '',
        },
        {
            src: europe15,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe16,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe17,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe18,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe19,
            width: 1067,
            height: 1600,
            alt: '',
        },
        {
            src: europe20,
            width: 1600,
            height: 1052,
            alt: '',
        },
        {
            src: europe21,
            width: 1200,
            height: 1502,
            alt: '',
        },
        {
            src: europe22,
            width: 1200,
            height: 1480,
            alt: '',
        },
        {
            src: europe23,
            width: 1600,
            height: 1153,
            alt: '',
        },
        {
            src: europe24,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe25,
            width: 1600,
            height: 1065,
            alt: '',
        },
        {
            src: europe26,
            width: 1481,
            height: 1200,
            alt: '',
        },
        {
            src: europe27,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe28,
            width: 1600,
            height: 1067,
            alt: '',
        },
        {
            src: europe29,
            width: 1200,
            height: 1500,
            alt: '',
        },
    ],
};

// Album Collections

const TRAVEL_COLLECTION: Collection = {
    header: 'Travel',
    coverArt: { src: coverTravel, width: 900, height: 1128, alt: '' },
    albums: { oceania: OCEANIA_ALBUM, asia: ASIA_ALBUM, europe: EUROPE_ALBUM, canada: CANADA_ALBUM },
};
const CLIENT_COLLECTION: Collection = {
    header: 'Client',
    coverArt: { src: coverClient, height: 1198, width: 900, alt: '' },
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
