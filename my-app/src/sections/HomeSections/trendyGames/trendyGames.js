import './trendyGames.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import got from './src/ghost-of-tushima.jpg';
import nioh2 from './src/nioh2.jpg';
import sekiro from './src/sekiro.jpg';
import er from './src/elden-ring.jpg';
import wl from './src/wo-long.jpg';
import ln from './src/little-nightmares.jpg';
import hl from './src/hogwart-legacy-deluxe-edition.jpg';
import bb from './src/bloodborne-endless-nocturne.jpg';
import t7 from './src/tekken7.jpg';

import rateTen from '../../GamesItemsPageSections/gamesDetails/src/rate-ten.png';
import rateNine from '../../GamesItemsPageSections/gamesDetails/src/rate-nine.png';
import rateEight from '../../GamesItemsPageSections/gamesDetails/src/rate-eight.png';

import ParallaxGhostOfTushima from './src/srcImports/ghostOfTushima/parallax.jpg';
import bannerImgGhostOfTushima from './src/srcImports/ghostOfTushima/banner-img.jpg';
import ss1GhostOfTushima from './src/srcImports/ghostOfTushima/screenshoot1.jpg';
import ss2GhostOfTushima from './src/srcImports/ghostOfTushima/screenshoot2.jpg';
import ss3GhostOfTushima from './src/srcImports/ghostOfTushima/screenshoot3.jpg';
import ss4GhostOfTushima from './src/srcImports/ghostOfTushima/screenshoot4.jpg';
import ss5GhostOfTushima from './src/srcImports/ghostOfTushima/screenshoot5.jpg';

import ParallaxNioh2 from './src/srcImports/nioh2/parallax.jpg';
import bannerImgNioh2 from './src/srcImports/nioh2/banner-img.jpg';
import ss1Nioh2 from './src/srcImports/nioh2/screenshoot1.jpg';
import ss2Nioh2 from './src/srcImports/nioh2/screenshoot2.jpg';
import ss3Nioh2 from './src/srcImports/nioh2/screenshoot3.jpg';
import ss4Nioh2 from './src/srcImports/nioh2/screenshoot4.jpg';
import ss5Nioh2 from './src/srcImports/nioh2/screenshoot5.jpg';

import ParallaxSekiro from './src/srcImports/sekiro/parallax.jpg';
import bannerImgSekiro from './src/srcImports/sekiro/banner-img.jpg';
import ss1Sekiro from './src/srcImports/sekiro/screenshoot1.jpg';
import ss2Sekiro from './src/srcImports/sekiro/screenshoot2.jpg';
import ss3Sekiro from './src/srcImports/sekiro/screenshoot3.jpg';
import ss4Sekiro from './src/srcImports/sekiro/screenshoot4.jpg';
import ss5Sekiro from './src/srcImports/sekiro/screenshoot5.jpg';

import ParallaxeldenRing from './src/srcImports/eldenRing/parallax.jpg';
import bannerImgeldenRing from './src/srcImports/eldenRing/banner-img.jpg';
import ss1eldenRing from './src/srcImports/eldenRing/screenshoot1.jpg';
import ss2eldenRing from './src/srcImports/eldenRing/screenshoot2.jpg';
import ss3eldenRing from './src/srcImports/eldenRing/screenshoot3.jpg';
import ss4eldenRing from './src/srcImports/eldenRing/screenshoot4.jpg';
import ss5eldenRing from './src/srcImports/eldenRing/screenshoot5.jpg';

import ParallaxwoLong from './src/srcImports/woLong/parallax.jpg';
import bannerImgwoLong from './src/srcImports/woLong/banner-img.jpg';
import ss1woLong from './src/srcImports/woLong/screenshoot1.jpg';
import ss2woLong from './src/srcImports/woLong/screenshoot2.jpg';
import ss3woLong from './src/srcImports/woLong/screenshoot3.jpg';
import ss4woLong from './src/srcImports/woLong/screenshoot4.jpg';
import ss5woLong from './src/srcImports/woLong/screenshoot5.jpg';

import ParallaxlittleNightmares from './src/srcImports/littleNightmares/parallax.jpg';
import bannerImglittleNightmares from './src/srcImports/littleNightmares/banner-img.jpg';
import ss1littleNightmares from './src/srcImports/littleNightmares/screenshoot1.jpg';
import ss2littleNightmares from './src/srcImports/littleNightmares/screenshoot2.jpg';
import ss3littleNightmares from './src/srcImports/littleNightmares/screenshoot3.jpg';
import ss4littleNightmares from './src/srcImports/littleNightmares/screenshoot4.jpg';
import ss5littleNightmares from './src/srcImports/littleNightmares/screenshoot5.jpg';

import ParallaxhogwartsLegacy from './src/srcImports/hogwartsLegacy/parallax.jpg';
import bannerImghogwartsLegacy from './src/srcImports/hogwartsLegacy/banner-img.jpg';
import ss1hogwartsLegacy from './src/srcImports/hogwartsLegacy/screenshoot1.jpg';
import ss2hogwartsLegacy from './src/srcImports/hogwartsLegacy/screenshoot2.jpg';
import ss3hogwartsLegacy from './src/srcImports/hogwartsLegacy/screenshoot3.jpg';
import ss4hogwartsLegacy from './src/srcImports/hogwartsLegacy/screenshoot4.jpg';
import ss5hogwartsLegacy from './src/srcImports/hogwartsLegacy/screenshoot5.jpg';

import Parallaxbloodborne from './src/srcImports/bloodborne/parallax.jpg';
import bannerImgbloodborne from './src/srcImports/bloodborne/banner-img.jpg';
import ss1bloodborne from './src/srcImports/bloodborne/screenshoot1.jpg';
import ss2bloodborne from './src/srcImports/bloodborne/screenshoot2.jpg';
import ss3bloodborne from './src/srcImports/bloodborne/screenshoot3.jpg';
import ss4bloodborne from './src/srcImports/bloodborne/screenshoot4.jpg';
import ss5bloodborne from './src/srcImports/bloodborne/screenshoot5.jpg';

import Parallaxtekken7 from './src/srcImports/tekken7/parallax.jpg';
import bannerImgtekken7 from './src/srcImports/tekken7/banner-img.jpg';
import ss1tekken7 from './src/srcImports/tekken7/screenshoot1.jpg';
import ss2tekken7 from './src/srcImports/tekken7/screenshoot2.jpg';
import ss3tekken7 from './src/srcImports/tekken7/screenshoot3.jpg';
import ss4tekken7 from './src/srcImports/tekken7/screenshoot4.jpg';
import ss5tekken7 from './src/srcImports/tekken7/screenshoot5.jpg';

function TrendyGames() {
    const [data] = useState({
      ghostOfTushima: {
        parallaxImage: ParallaxGhostOfTushima,
        gameImage: bannerImgGhostOfTushima,
        productName: 'Ghost of Tsushima',
        platformBackground: 'platform-ps',
        platformImage: 'icon-s icon-ps',
        platformName: 'Playstation',
        quntinityAvailable: 'In stock',
        userOnPage: '122',
        retailPrice: '295.47zł',
        discount: '-28%',
        price: '212.74zł',
        aboutGame: 'Ghost of Tsushima for PC is an award winning action adventure open world game, with a third-person player perspective. It is set in ancient feudal Japan, but the issues faced by the protagonist will be easily understood by Western, modern players. About the Game The games storyline is a 13th-century Japanese epic, with beautiful, detailed scenery including animals (songbirds including golden ones which lead you not-so-subtly when you get lost or distracted...',
        gameRate: rateTen,
        reviewsNumber: '241',
        developer: 'Sucker Punch Productions',
        publisher: 'Sony Interactive Entertainment',
        releaseDate: '20 August 2021',
        genreOne: 'Action',
        genreTwo: 'Adventure',
        video: 'https://player.vimeo.com/video/410362493?h=f1cab22df4&title=0&byline=0&portrait=0',
        screenshoot1: ss1GhostOfTushima,
        screenshoot2: ss2GhostOfTushima,
        screenshoot3: ss3GhostOfTushima,
        screenshoot4: ss4GhostOfTushima,
        screenshoot5: ss5GhostOfTushima,
        descriptionFirstApostrof: 'Discover the expanded Ghost of Tsushima experience in this, featuring all additional content released to date.',
        descriptionSecondApostrof: 'Uncover the hidden wonders of Tsushima in this open-world action adventure. Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats and develop stealth tactics to ambush enemies. Explore a new story on Iki Island.',
      },

      nioh2: {
        parallaxImage: ParallaxNioh2,
        gameImage: bannerImgNioh2,
        productName: 'Nioh 2: The Complete Edition',
        platformBackground: 'platform-ps',
        platformImage: 'icon-s icon-ps',
        platformName: 'Playstation',
        quntinityAvailable: 'In stock',
        userOnPage: '91',
        retailPrice: '264.63zł',
        discount: '-30%',
        price: '185.24zł',
        aboutGame: 'Nioh 2: The Complete Edition for PC is an action roleplaying game, in this release complete (as the name implies) with all previously released DLC for a compact download and gameplay experience. In the first game, players had to play as the Western Samurai, William Adams (based on a real historical character), but in this version, you can choose his appearance as a costume, if you like, being instead a Yokai, or mystical creature/ spirit from Japanese folklore. About the...',
        gameRate: rateTen,
        reviewsNumber: '144',
        developer: 'KOEI TECMO GAMES CO., LTD.',
        publisher: 'KOEI TECMO GAMES CO., LTD.',
        releaseDate: '5 February 2021',
        genreOne: 'Action',
        genreTwo: 'RPG',
        video: 'https://player.vimeo.com/video/806360713?h=ae9068f8df&byline=0&portrait=0',
        screenshoot1: ss1Nioh2,
        screenshoot2: ss2Nioh2,
        screenshoot3: ss3Nioh2,
        screenshoot4: ss4Nioh2,
        screenshoot5: ss5Nioh2,
        descriptionFirstApostrof: 'The character customisation is highly intricate with plenty of detailed choices and you can immediately return to the creation studio if you dont like the way your character looks in the rather different lighting of the game. This ensures that you have a character whose looks and clothing you are completely happy with, and you can even share a code that lets other players use your customisation as their characters.',
        descriptionSecondApostrof: 'Being a Yokai brings you powers you would not have as a human, and you can play as both, being Hide, a Shiftling, or half Yokai, half human hybrid. However, playing as a Yokai drains your Anima, so keep an eye on the health bars, and make sure you grab the soul core of any hostile Yokai you defeat. If you get it to a shrine quickly, you will harvest that Yokais powers and gain the ability to transform into them for a time. Elemental Guardian Spirits give you strength against certain element enemies with Burst Counters which are excellently offensive defensive moves, Places called Benevolent Graves bring you AI companions who can help you in battle, or you can summon three real life friends for three-players cooperative multiplayer mode, adding some real life quirkiness to your gameplay. Unusually for a second game in a series, Nioh2 is actually both the sequel and the prequel to the original, with the first part of gameplay occurring before the events in the original, and the latter portion dealing with subsequent events. The story begins in the late 1500s, and the players character, Hide, befriends a merchant, Tokichiro who is aiming to make his mark on history by selling Amrita (which is mysterious god/ spirit/ demon energy used as an informal currency) and Mumyo, the leader of one of the tribes, who has been alerted to strange goings-on and come to sort out the Yokai she holds responsible for everything that has gone wrong... The antagonist of the game, Kashin Koji, is a mysterious entity who harasses the party at every turn. He is from Hides past, and Hide must find out exactly who and what in order to restore harmony to the land. There are plenty of skills to learn, so beginners wont be tackling the harder levels too soon, but they will enjoy a satisfying growth arc as they master the levels. One skill to master as quickly as you can is Ki Pulse. At the end of an attack or combo, your stamina gauge turns white and refills quickly. By pressing at exactly the right moment, you can be back to full stamina in a trice, but you must press at the right time  too soon and youre only half filled, too late and you miss it completely. Should the latter happen, the stamina resets and you must wait for the bar to fill at the regular pace. Practice nabbing it at exactly the moment!',
      },

      sekiro: {
        parallaxImage: ParallaxSekiro,
        gameImage: bannerImgSekiro,
        productName: 'Sekiro: Shadows Die Twice - GOTY Edition (Xbox ONE / Xbox Series X|S) - Europe',
        platformBackground: 'platform-xbox',
        platformImage: 'icon-s icon-xbox',
        platformName: 'Xbox Series X|S',
        quntinityAvailable: 'In stock',
        userOnPage: '289',
        retailPrice: '242.05zł',
        discount: '-20%',
        price: '193.64zł',
        aboutGame: 'This Game of the Year Edition now includes bonus content*: - Reflection and Gauntlet of Strength - new boss challenge modes - Remnants - leave messages and recordings of your actions that other players can view and rate - 3 unlockable cosmetic skins Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Over 50 awards and nominations Carve your own clever path to vengeance in the critically acclaimed adventure from developer...',
        gameRate: rateTen,
        reviewsNumber: '195',
        developer: 'FromSoftware',
        publisher: 'Activision (Excluding Japan and Asia), FromSoftware (Japan), 方块游戏 (Asia)',
        releaseDate: '21 March 2019',
        genreOne: 'Action',
        genreTwo: 'Adventure',
        video: 'https://player.vimeo.com/video/522712063?h=01f8197c7a&title=0&byline=0&portrait=0',
        screenshoot1: ss1Sekiro,
        screenshoot2: ss2Sekiro,
        screenshoot3: ss3Sekiro,
        screenshoot4: ss4Sekiro,
        screenshoot5: ss5Sekiro,
        descriptionFirstApostrof: 'Carve your own clever path to vengeance in the critically acclaimed adventure from developer FromSoftware, creators of the Dark Souls series.',
        descriptionSecondApostrof: 'In Sekiro: Shadows Die Twice you are the one-armed wolf, a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation.',
      },

      eldenRing: {
        parallaxImage: ParallaxeldenRing,
        gameImage: bannerImgeldenRing,
        productName: 'Elden Ring Deluxe Edition - Europe',
        platformBackground: 'platform-pc',
        platformImage: 'icon-s icon-pc',
        platformName: 'Steam',
        quntinityAvailable: 'In stock',
        userOnPage: '471',
        retailPrice: '377.79zł',
        discount: '-16%',
        price: '317.34zł',
        aboutGame: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.• A Vast World Full of ExcitementA vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of...',
        gameRate: rateTen,
        reviewsNumber: '542',
        developer: 'FromSoftware, Inc',
        publisher: 'BANDAI NAMCO Entertainment, FromSoftware, Inc',
        releaseDate: '25 February 2022',
        genreOne: 'Action',
        genreTwo: 'RPG',
        video: 'https://player.vimeo.com/video/561725628?h=7fe852ed01&title=0&byline=0&portrait=0',
        screenshoot1: ss1eldenRing,
        screenshoot2: ss2eldenRing,
        screenshoot3: ss3eldenRing,
        screenshoot4: ss4eldenRing,
        screenshoot5: ss5eldenRing,
        descriptionFirstApostrof: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
        descriptionSecondApostrof: 'A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.',
      },

      woLong: {
        parallaxImage: ParallaxwoLong,
        gameImage: bannerImgwoLong,
        productName: 'Wo Long: Fallen Dynasty Digital Deluxe Edition (Xbox ONE / Xbox Series X|S)',
        platformBackground: 'platform-xbox',
        platformImage: 'icon-s icon-xbox',
        platformName: 'Xbox Series X|S',
        quntinityAvailable: 'In stock',
        userOnPage: '14',
        retailPrice: '304.88zł',
        discount: '-5%',
        price: '289.64zł',
        aboutGame: 'From the depths of darkness, a dragon soars. A new dark fantasy Three Kingdoms action RPG from Team NINJA, the developers of Nioh. 184 AD, Later Han Dynasty China. The land is overcome by chaos and destruction. The imperial dynasty that prospered for many years is now about to collapse. Wo Long: Fallen Dynasty is a dramatic, action-packed story of a nameless militia soldier fighting for survival in a dark fantasy version of the Later Han Dynasty where...',
        gameRate: rateEight,
        reviewsNumber: '27',
        developer: 'KOEI TECMO GAMES CO., LTD., KOEI TECMO GAMES',
        publisher: 'KOEI TECMO GAMES CO., LTD., CE-Asia(Asia), KOEI TECMO AMERICA',
        releaseDate: '3 March 2023',
        genreOne: 'Online Co-op',
        genreTwo: 'Action',
        video: 'https://player.vimeo.com/video/791855514?h=ee375260aa&byline=0&portrait=0',
        screenshoot1: ss1woLong,
        screenshoot2: ss2woLong,
        screenshoot3: ss3woLong,
        screenshoot4: ss4woLong,
        screenshoot5: ss5woLong,
        descriptionFirstApostrof: 'Wo Long: Fallen Dynasty is a dramatic, action-packed story of a nameless militia soldier fighting for survival in a dark fantasy version of the Later Han Dynasty where demons plague the Three Kingdoms. Players fight off deadly creatures and enemy soldiers using swordplay based on the Chinese martial arts, attempting to overcome the odds by awakening the true power from within.',
        descriptionSecondApostrof: 'Wo Long refers to a crouching dragon, and also refers to a hero or person of greatness who is not yet known. This is the story of officers, who will later become heroes, during their unknown period, and also the story of a protagonists rise from being a nobody.',
      },

      littleNightmares: {
        parallaxImage: ParallaxlittleNightmares,
        gameImage: bannerImglittleNightmares,
        productName: 'Little Nightmares Complete Edition',
        platformBackground: 'platform-pc',
        platformImage: 'icon-s icon-pc',
        platformName: 'Steam',
        quntinityAvailable: 'In stock',
        userOnPage: '72',
        retailPrice: '98.78zł',
        discount: '-82%',
        price: '17.78zł',
        aboutGame: 'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal. As you progress on your journey, explore the most disturbing dollhouse offering a prison to escape from and a playground full of secrets to discover. Reconnect with your inner child to unleash your imagination and find the way out!...',
        gameRate: rateNine,
        reviewsNumber: '27',
        developer: 'Tarsier Studios',
        publisher: 'BANDAI NAMCO Entertainment',
        releaseDate: '28 April 2017',
        genreOne: 'Single-player',
        genreTwo: 'Adventure',
        video: 'https://player.vimeo.com/video/319045181?h=4c49e0c6cc&byline=0&portrait=0',
        screenshoot1: ss1littleNightmares,
        screenshoot2: ss2littleNightmares,
        screenshoot3: ss3littleNightmares,
        screenshoot4: ss4littleNightmares,
        screenshoot5: ss5littleNightmares,
        descriptionFirstApostrof: 'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw a vast, mysterious vessel inhabited by corrupted souls looking for their next meal. As you progress on your journey, explore the most disturbing dollhouse offering a prison to escape from and a playground full of secrets to discover. Reconnect with your inner child to unleash your imagination and find the way out!',
      },

      hogwartsLegacy: {
        parallaxImage: ParallaxhogwartsLegacy,
        gameImage: bannerImghogwartsLegacy,
        productName: 'Hogwarts Legacy Deluxe Edition - Europe',
        platformBackground: 'platform-pc',
        platformImage: 'icon-s icon-pc',
        platformName: 'Steam',
        quntinityAvailable: 'In stock',
        userOnPage: '912',
        retailPrice: '337.80zł',
        discount: '-12%',
        price: '297.26zł',
        aboutGame: 'Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be. Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the...',
        gameRate: rateTen,
        reviewsNumber: '476',
        developer: 'Avalanche Software',
        publisher: 'Warner Bros. Games',
        releaseDate: '10 February 2023',
        genreOne: 'RPG',
        genreTwo: 'Single-player',
        video: 'https://player.vimeo.com/video/789268140?h=77f26f3b81&byline=0&portrait=0',
        screenshoot1: ss1hogwartsLegacy,
        screenshoot2: ss2hogwartsLegacy,
        screenshoot3: ss3hogwartsLegacy,
        screenshoot4: ss4hogwartsLegacy,
        screenshoot5: ss5hogwartsLegacy,
        descriptionFirstApostrof: 'Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.',
        descriptionSecondApostrof: 'Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it. Live the Unwritten.',
      },

      bloodborne: {
        parallaxImage: Parallaxbloodborne,
        gameImage: bannerImgbloodborne,
        productName: 'Bloodborne: Endless Nocturne',
        platformBackground: 'platform-ps',
        platformImage: 'icon-s icon-ps',
        platformName: 'Playstation',
        quntinityAvailable: 'In stock',
        userOnPage: '156',
        retailPrice: '115.70zł',
        discount: '-37%',
        price: '72.89zł',
        aboutGame: 'Hunt your nightmares. A lone traveller. A cursed town. A deadly mystery that swallows everything it touches. Face your fears as you enter the decaying city of Yharnam, a forsaken place ravaged by a terrible, all-consuming illness. Scour its darkest shadows, fight for your life with blades and guns and discover secrets that will make your blood run cold but just might save your skin...',
        gameRate: rateNine,
        reviewsNumber: '314',
        developer: 'FromSoftware, Inc.',
        publisher: 'Sony Interactive Entertainment Europe',
        releaseDate: '25 March 2015',
        genreOne: 'RPG',
        genreTwo: 'Action',
        video: 'https://player.vimeo.com/video/129003297?h=79a58074c5&title=0&byline=0&portrait=0',
        screenshoot1: ss1bloodborne,
        screenshoot2: ss2bloodborne,
        screenshoot3: ss3bloodborne,
        screenshoot4: ss4bloodborne,
        screenshoot5: ss5bloodborne,
        descriptionFirstApostrof: 'The game is played from a third-person perspective. Players control a customizable protagonist, and the gameplay is focused on strategic weapons-based combat and exploration.',
        descriptionSecondApostrof: 'Players battle varied enemies while using items such as trick weapons and firearms, exploring different locations, interacting with non-player characters, and unravelling the citys mysteries.',
      },

      tekken7: {
        parallaxImage: Parallaxtekken7,
        gameImage: bannerImgtekken7,
        productName: 'Tekken 7',
        platformBackground: 'platform-ps',
        platformImage: 'icon-s icon-ps',
        platformName: 'Playstation',
        quntinityAvailable: 'In stock',
        userOnPage: '194',
        retailPrice: '209.23zł',
        discount: '-87%',
        price: '27.20zł',
        aboutGame: 'Discover the epic conclusion of the Mishima clan and unravel the reasons behind each step of their ceaseless fight. Powered by Unreal Engine 4, TEKKEN 7 features stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals alike through innovative fight mechanics. Love, Revenge, Pride. Everyone has a reason to fight. Values are what define us and make us human, regardless of our strengths and weaknesses. There are no...',
        gameRate: rateEight,
        reviewsNumber: '157',
        developer: 'BANDAI NAMCO Studios Inc.',
        publisher: 'BANDAI NAMCO Entertainment',
        releaseDate: '1 June 2017',
        genreOne: 'Sports',
        genreTwo: 'Action',
        video: 'https://player.vimeo.com/video/180874113?h=fd73c54fd4&title=0&byline=0&portrait=0',
        screenshoot1: ss1tekken7,
        screenshoot2: ss2tekken7,
        screenshoot3: ss3tekken7,
        screenshoot4: ss4tekken7,
        screenshoot5: ss5tekken7,
        descriptionFirstApostrof: 'Discover the epic conclusion of the Mishima clan and unravel the reasons behind each step of their ceaseless fight. Powered by Unreal Engine 4, TEKKEN 7 features stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals alike through innovative fight mechanics.',
        descriptionSecondApostrof: 'Love, Revenge, Pride. Everyone has a reason to fight. Values are what define us and make us human, regardless of our strengths and weaknesses. There are no wrong motivations, just the path we choose to take.',
      },
    });

  return (
    <section className='section-wrapper-trendy'>
      <div className='headline'>
        <h2 className='headline-title'>Popular now!</h2>
        <div className='button'>View all</div>
      </div>
      <div className='games-container'>

        {/* Ghost of Tushima */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.ghostOfTushima }} className='game-cover'>
            <picture>
              <img src={got} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-28%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Ghost of Tushima</span>
              </div>
            </div>
            <div className='price'>212.74zł</div>
          </div>
        </div>

        {/* Nioh 2 */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.nioh2 }} className='game-cover'>
            <picture>
              <img src={nioh2} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-30%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Nioh 2: The Complete Edition</span>
              </div>
            </div>
            <div className='price'>185.24zł</div>
          </div>
        </div>

        {/* Sekiro */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.sekiro }} className='game-cover'>
            <picture>
              <img src={sekiro} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-20%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Sekiro: Shadows Die Twice - GOTY Edition Xbox ONE / Xbox Series X|S - Europe</span>
              </div>
            </div>
            <div className='price'>193.64zł</div>
          </div>
        </div>

        {/* Elden Ring */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.eldenRing }} className='game-cover'>
            <picture>
              <img src={er} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-16%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Elden Ring Deluxe Edition - Europe</span>
              </div>
            </div>
            <div className='price'>317.34zł</div>
          </div>
        </div>

        {/* Wo Long */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.woLong }} className='game-cover'>
            <picture>
              <img src={wl} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-5%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Wo Long: Fallen Dynasty Digital Deluxe Edition (Xbox ONE / Xbox Series X|S)</span>
              </div>
            </div>
            <div className='price'>289.64zł</div>
          </div>
        </div>

        {/* Little Nightmares*/}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.littleNightmares }} className='game-cover'>
            <picture>
              <img src={ln} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-82%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Little Nightmares Complete Edition</span>
              </div>
            </div>
            <div className='price'>17.78zł</div>
          </div>
        </div>

        {/* Hogwarts Legacy Deluxe Edition*/}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.hogwartsLegacy }} className='game-cover'>
            <picture>
              <img src={hl} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-12%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Hogwarts Legacy Deluxe Edition - Europe</span>
              </div>
            </div>
            <div className='price'>297.26zł</div>
          </div>
        </div>

        {/* Bloodborne Endless Nocturne */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.bloodborne }} className='game-cover'>
            <picture>
              <img src={bb} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-37%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Bloodborne Endless Nocturne</span>
              </div>
            </div>
            <div className='price'>72.89zł</div>
          </div>
        </div>

        {/* Tekken 7 */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tekken7 }} className='game-cover'>
            <picture>
              <img src={t7} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-87%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Tekken 7</span>
              </div>
            </div>
            <div className='price'>27.20zł</div>
          </div>
        </div>
      </div>
      <div className='splide-wrapper'>
        <Splide options={{
          breakpoints: {
            0: {
              fixedWidth: '20rem'
            },

            550: {
              fixedWidth: '25rem'
            },

            768: {
              fixedWidth: '30rem'
            },
          },
          mediaQuery: 'min',
          pagination: false,
          arrows: false,
          gap: '3rem',
          type: 'loop',
          padding: '5rem',
          focus: "center",
          autoplay: true,
          interval: 6000,
          speed: 1300,
        }}
          aria-label="game-slider"
        >
          {/* Ghost of Tushima */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.ghostOfTushima }} className='game-cover'>
                <picture>
                  <img src={got} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-28%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Ghost of Tushima</span>
                  </div>
                </div>
                <div className='price'>212.74zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Nioh 2 */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.nioh2 }} className='game-cover'>
                <picture>
                  <img src={nioh2} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-30%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Nioh 2</span>
                  </div>
                </div>
                <div className='price'>185.24zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Sekiro */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.sekiro }} className='game-cover'>
                <picture>
                  <img src={sekiro} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-20%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Sekiro</span>
                  </div>
                </div>
                <div className='price'>193.64zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Elden Ring */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.eldenRing }} className='game-cover'>
                <picture>
                  <img src={er} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-16%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Elden Ring</span>
                  </div>
                </div>
                <div className='price'>317.34zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Wo Long */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.woLong }} className='game-cover'>
                <picture>
                  <img src={wl} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-5%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Wo Long: Fallen Dynasty Digital Deluxe Edition (Xbox ONE / Xbox Series X|S)</span>
                  </div>
                </div>
                <div className='price'>289.64zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Little Nightmares*/}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.littleNightmares }} className='game-cover'>
                <picture>
                  <img src={ln} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-82%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Little Nightmares Complete Edition</span>
                  </div>
                </div>
                <div className='price'>17.78zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Hogwarts Legacy Deluxe Edition*/}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.hogwartsLegacy }} className='game-cover'>
                <picture>
                  <img src={hl} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-12%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Hogwarts Legacy Deluxe Edition - Europe</span>
                  </div>
                </div>
                <div className='price'>297.26zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Bloodborne Endless Nocturne */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.bloodborne }} className='game-cover'>
                <picture>
                  <img src={bb} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-37%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Bloodborne Endless Nocturne</span>
                  </div>
                </div>
                <div className='price'>72.89zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Tekken 7 */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tekken7 }} className='game-cover'>
                <picture>
                  <img src={t7} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-87%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Tekken 7</span>
                  </div>
                </div>
                <div className='price'>27.20zł</div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default TrendyGames;