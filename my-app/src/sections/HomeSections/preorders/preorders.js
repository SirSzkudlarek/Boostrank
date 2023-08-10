import './preorders.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import d4 from './src/diablo4.jpg';
import tww from './src/total-war-warhammer.jpg';
import lotr from './src/lotr-gollum.jpg';
import sk from './src/skull-bones.jpg';
import dad from './src/dragon-age-dreadwolf.jpg';
import tes from './src/tes-nec.jpg';

import rateTen from '../../GamesItemsPageSections/gamesDetails/src/rate-ten.png';
import rateNine from '../../GamesItemsPageSections/gamesDetails/src/rate-nine.png';
import rateEight from '../../GamesItemsPageSections/gamesDetails/src/rate-eight.png';
import rateSeven from '../../GamesItemsPageSections/gamesDetails/src/rate-seven.png';
import rateTwo from '../../GamesItemsPageSections/gamesDetails/src/rate-two.png';

import Parallaxdiablo4 from './src/srcImports/diablo4/parallax.jpg';
import bannerImgdiablo4 from './src/srcImports/diablo4/banner-img.jpg';
import ss1diablo4 from './src/srcImports/diablo4/screenshoot1.jpg';
import ss2diablo4 from './src/srcImports/diablo4/screenshoot2.jpg';
import ss3diablo4 from './src/srcImports/diablo4/screenshoot3.jpg';
import ss4diablo4 from './src/srcImports/diablo4/screenshoot4.jpg';
import ss5diablo4 from './src/srcImports/diablo4/screenshoot5.jpg';

import Parallaxtww3Fotcd from './src/srcImports/tww3Fotcd/parallax.jpg';
import bannerImgtww3Fotcd from './src/srcImports/tww3Fotcd/banner-img.jpg';
import ss1tww3Fotcd from './src/srcImports/tww3Fotcd/screenshoot1.jpg';
import ss2tww3Fotcd from './src/srcImports/tww3Fotcd/screenshoot2.jpg';
import ss3tww3Fotcd from './src/srcImports/tww3Fotcd/screenshoot3.jpg';
import ss4tww3Fotcd from './src/srcImports/tww3Fotcd/screenshoot4.jpg';
import ss5tww3Fotcd from './src/srcImports/tww3Fotcd/screenshoot5.jpg';

import ParallaxlotrGollum from './src/srcImports/lotrGollum/parallax.jpg';
import bannerImglotrGollum from './src/srcImports/lotrGollum/banner-img.jpg';
import ss1lotrGollum from './src/srcImports/lotrGollum/screenshoot1.jpg';
import ss2lotrGollum from './src/srcImports/lotrGollum/screenshoot2.jpg';
import ss3lotrGollum from './src/srcImports/lotrGollum/screenshoot3.jpg';
import ss4lotrGollum from './src/srcImports/lotrGollum/screenshoot4.jpg';
import ss5lotrGollum from './src/srcImports/lotrGollum/screenshoot5.jpg';

import ParallaxskullAndBones from './src/srcImports/skullAndBones/parallax.jpg';
import bannerImgskullAndBones from './src/srcImports/skullAndBones/banner-img.jpg';
import ss1skullAndBones from './src/srcImports/skullAndBones/screenshoot1.jpg';
import ss2skullAndBones from './src/srcImports/skullAndBones/screenshoot2.jpg';
import ss3skullAndBones from './src/srcImports/skullAndBones/screenshoot3.jpg';
import ss4skullAndBones from './src/srcImports/skullAndBones/screenshoot4.jpg';
import ss5skullAndBones from './src/srcImports/skullAndBones/screenshoot5.jpg';

import ParallaxdragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/parallax.jpg';
import bannerImgdragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/banner-img.jpg';
import ss1dragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/screenshoot1.jpg';
import ss2dragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/screenshoot2.jpg';
import ss3dragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/screenshoot3.jpg';
import ss4dragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/screenshoot4.jpg';
import ss5dragonAgeDreadwolf from './src/srcImports/dragonAgeDreadwolf/screenshoot5.jpg';

import ParallaxtesNecrom from './src/srcImports/tesNecrom/parallax.jpg';
import bannerImgtesNecrom from './src/srcImports/tesNecrom/banner-img.jpg';
import ss1tesNecrom from './src/srcImports/tesNecrom/screenshoot1.jpg';
import ss2tesNecrom from './src/srcImports/tesNecrom/screenshoot2.jpg';
import ss3tesNecrom from './src/srcImports/tesNecrom/screenshoot3.jpg';
import ss4tesNecrom from './src/srcImports/tesNecrom/screenshoot4.jpg';
import ss5tesNecrom from './src/srcImports/tesNecrom/screenshoot5.jpg';

function Preorders() {
  const [data] = useState({
    diablo4: {
      parallaxImage: Parallaxdiablo4,
      gameImage: bannerImgdiablo4,
      productName: 'Diablo IV (Xbox ONE / Xbox Series X|S) - Europe',
      platformBackground: 'platform-xbox',
      platformImage: 'icon-s icon-xbox',
      platformName: 'Xbox Series X|S',
      quntinityAvailable: 'In stock',
      userOnPage: '666',
      retailPrice: '366.30zł',
      discount: '-9%',
      price: '333.33zł',
      aboutGame: 'Diablo® IV - Standard Edition includes: - Diablo® IV for Xbox One / Xbox Series X|S - Inarius Wings & Inarius Murloc Pet in Diablo® III* - Amalgam of Rage Mount in World of Warcraft®* - Umber Winged Darkness Cosmetics Set in Diablo Immortal®* Diablo® IV is the next-gen action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish Dungeons, and legendary loot. Embark on the campaign solo or with friends, meeting...',
      gameRate: rateNine,
      reviewsNumber: '333',
      developer: 'Blizzard Entertainment Inc.',
      publisher: 'Blizzard Entertainment Inc.',
      releaseDate: '6 June 2023',
      genreOne: 'Hack&Slash',
      genreTwo: 'Adventure',
      video: 'https://player.vimeo.com/video/447974266?h=fbb32f547b&title=0&byline=0&portrait=0',
      screenshoot1: ss1diablo4,
      screenshoot2: ss2diablo4,
      screenshoot3: ss3diablo4,
      screenshoot4: ss4diablo4,
      screenshoot5: ss5diablo4,
      descriptionFirstApostrof: 'Diablo IV is the next-gen action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish Dungeons, and legendary loot. Embark on the campaign solo or with friends, meeting memorable characters through beautifully dark settings and a gripping story, or go rogue through an expansive End Game and shared world where players will meet in towns to trade, team up to battle World Bosses, or descend into PVP zones to test their skills against other players - no lobbies necessary - with cross-play and cross-progression on all available platforms.',
      descriptionSecondApostrof: 'This is only the beginning for Diablo IV, with new events, stories, seasons, rewards, and more looming on the horizon.',
    },

    tww3Fotcd: {
      parallaxImage: Parallaxtww3Fotcd,
      gameImage: bannerImgtww3Fotcd,
      productName: 'Total War: Warhammer III - Forge of the Chaos Dwarfs',
      platformBackground: 'platform-pc',
      platformImage: 'icon-s icon-pc',
      platformName: 'Steam',
      quntinityAvailable: 'In stock',
      userOnPage: '126',
      retailPrice: '134zł',
      discount: '-32%',
      price: '91.12zł',
      aboutGame: 'The Forge of the Chaos Dwarfs campaign pack introduces a new brutal race, the Chaos Dwarfs, into Total War: WARHAMMER III, usable in both the Realm of Chaos and Immortal Empires campaigns. Expand, exploit, and dominate the Warhammer world as Astragoth Ironhand, Drazhoath the Ashen, and Zhatan the Black, collectively boasting unique campaign mechanics, objectives, and units that only the evil minds of the Chaos Dwarfs could forge. With their own...',
      gameRate: rateSeven,
      reviewsNumber: '16',
      developer: 'CREATIVE ASSEMBLY, Feral Interactive',
      publisher: 'SEGA',
      releaseDate: '13 April 2023',
      genreOne: 'Strategy',
      genreTwo: 'Single-player',
      video: 'https://player.vimeo.com/video/722875788?h=0710fbc4c4',
      screenshoot1: ss1tww3Fotcd,
      screenshoot2: ss2tww3Fotcd,
      screenshoot3: ss3tww3Fotcd,
      screenshoot4: ss4tww3Fotcd,
      screenshoot5: ss5tww3Fotcd,
      descriptionFirstApostrof: 'The Forge of the Chaos Dwarfs campaign pack introduces a new brutal race, the Chaos Dwarfs, into Total War: WARHAMMER III, usable in both the Realm of Chaos and Immortal Empires campaigns.',
      descriptionSecondApostrof: 'Expand, exploit, and dominate the Warhammer world as Astragoth Ironhand, Drazhoath the Ashen, and Zhatan the Black, collectively boasting unique campaign mechanics, objectives, and units that only the evil minds of the Chaos Dwarfs could forge. With their own frightful agenda to pursue, they do not engage with the Ursun storyline in the Realm of Chaos campaign.',
    },

    lotrGollum: {
      parallaxImage: ParallaxlotrGollum,
      gameImage: bannerImglotrGollum,
      productName: 'The Lord of the Rings: Gollum',
      platformBackground: 'platform-ps',
      platformImage: 'icon-s icon-ps',
      platformName: 'Playstation',
      quntinityAvailable: 'In stock',
      userOnPage: '36',
      retailPrice: '282.13zł',
      discount: '-52%',
      price: '135.42zł',
      aboutGame: 'The Lord of the Rings: Gollum™ is an official adaptation based on the literary works of J.R.R. Tolkien. He`s got nothing more to lose… How far will he go to retrieve his Precious? Taking place in parallel to the events described in The Fellowship of the Ring ™, The Lord of the Rings: Gollum is an action-adventure game and an epic interactive experience. You play as the enigmatic Gollum on his perilous journey and find out how he outwitted the most powerful characters in...',
      gameRate: rateTwo,
      reviewsNumber: '9',
      developer: 'Daedalic Entertainment',
      publisher: 'Daedalic Entertainment',
      releaseDate: '25 May 2023',
      genreOne: 'RPG',
      genreTwo: 'Adventure',
      video: 'https://player.vimeo.com/video/712252781?h=56d5659a11&byline=0&portrait=0',
      screenshoot1: ss1lotrGollum,
      screenshoot2: ss2lotrGollum,
      screenshoot3: ss3lotrGollum,
      screenshoot4: ss4lotrGollum,
      screenshoot5: ss5lotrGollum,
      descriptionFirstApostrof: 'The Lord of the Rings: Gollum is an official adaptation based on the literary works of J.R.R. Tolkien. He`s got nothing more to lose… How far will he go to retrieve his Precious? Taking place in parallel to the events described in The Fellowship of the Ring , The Lord of the Rings: Gollum is an action-adventure game and an epic interactive experience. You play as the enigmatic Gollum on his perilous journey and find out how he outwitted the most powerful characters in Middle-earth.',
      descriptionSecondApostrof: 'Tortured by his split personality, he can be vicious and wicked as Gollum, yet friendly and cautious as Smeagol. It`s up to you to decide which of his personalities will triumph in the difficult moral choices that will dictate the future of your precarious alliances.',
    },

    skullAndBones: {
      parallaxImage: ParallaxskullAndBones,
      gameImage: bannerImgskullAndBones,
      productName: 'Skull and Bones Xbox Series X|S',
      platformBackground: 'platform-xbox',
      platformImage: 'icon-s icon-xbox',
      platformName: 'Xbox Series X|S',
      quntinityAvailable: 'In stock',
      userOnPage: '17',
      retailPrice: '271.04zł',
      discount: '-17%',
      price: '224.96zł',
      aboutGame: 'Enter the perilous paradise of Skull and Bones™ inspired by the Indian Ocean during the Golden Age of Piracy, as you overcome the odds and rise from an outcast to an infamous pirate. - Grow your infamy to gain access to more resources and opportunities as you take on riskier contracts to gain the most loot. - Craft up to 12 ships and customize them with a variety of weapons and armor to maximize your chances for success. - Be wary in this untamed open world inspired b...',
      gameRate: rateEight,
      reviewsNumber: '13',
      developer: 'Ubisoft',
      publisher: 'Ubisoft',
      releaseDate: '2023',
      genreOne: 'Cooperation',
      genreTwo: 'Adventure',
      video: 'https://player.vimeo.com/video/734629970?h=64b994b25b&title=0&byline=0&portrait=0',
      screenshoot1: ss1skullAndBones,
      screenshoot2: ss2skullAndBones,
      screenshoot3: ss3skullAndBones,
      screenshoot4: ss4skullAndBones,
      screenshoot5: ss5skullAndBones,
      descriptionFirstApostrof: 'Enter the perilous paradise of Skull and Bones inspired by the Indian Ocean during the Golden Age of Piracy, as you overcome the odds and rise from an outcast to an infamous pirate.',
      descriptionSecondApostrof: 'Grow your infamy to gain access to more resources and opportunities as you take on riskier contracts to gain the most loot.',
    },

    dragonAgeDreadwolf: {
      parallaxImage: ParallaxdragonAgeDreadwolf,
      gameImage: bannerImgdragonAgeDreadwolf,
      productName: 'Dragon Age: Dreadwolf',
      platformBackground: 'platform-pc',
      platformImage: 'icon-s icon-pc',
      platformName: 'Steam',
      quntinityAvailable: 'In stock',
      userOnPage: '35',
      retailPrice: '373.14zł',
      discount: '-12%',
      price: '328.36zł',
      aboutGame: 'Solas, the Dread Wolf. Some say he might be an ancient elven god, but some say not. Others say a betrayer of his people…or a savior who now seeks to rescue them at the cost of your world. His motives are inscrutable and his methods sometimes questionable, earning him a reputation as something of a trickster deity—a player of dark and dangerous games. Whether you`re new to Dragon Age™ stories or you`ve experienced them all, using Solas`s namesake no doubt suggest...',
      gameRate: rateNine,
      reviewsNumber: '16',
      developer: 'BioWare',
      publisher: 'Electronic Arts',
      releaseDate: '2023',
      genreOne: 'RPG',
      genreTwo: 'Adventure',
      video: 'https://www.youtube.com/embed/W7x685DxMcw',
      screenshoot1: ss1dragonAgeDreadwolf,
      screenshoot2: ss2dragonAgeDreadwolf,
      screenshoot3: ss3dragonAgeDreadwolf,
      screenshoot4: ss4dragonAgeDreadwolf,
      screenshoot5: ss5dragonAgeDreadwolf,
      descriptionFirstApostrof: 'Solas, the Dread Wolf. Some say he might be an ancient elven god, but some say not. Others say a betrayer of his people…or a savior who now seeks to rescue them at the cost of your world. His motives are inscrutable and his methods sometimes questionable, earning him a reputation as something of a trickster deity—a player of dark and dangerous games.',
      descriptionSecondApostrof: 'Whether you`re new to Dragon Age stories or you`ve experienced them all, using Solas`s namesake no doubt suggests a spectrum of endless possibilities on where things may go. But at the core of this, like every past game, is you. If you`re new to Dragon Age, you have no need to worry about not having met our antagonist just yet. He`ll properly introduce himself when the time is right, but we did hint at his return when we announced',
    },

    tesNecrom: {
      parallaxImage: ParallaxtesNecrom,
      gameImage: bannerImgtesNecrom,
      productName: 'The Elder Scrolls Online Upgrade: Necrom',
      platformBackground: 'platform-pc',
      platformImage: 'icon-s icon-pc',
      platformName: 'Steam',
      quntinityAvailable: 'In stock',
      userOnPage: '56',
      retailPrice: '188.08zł',
      discount: '-27%',
      price: '137.30zł',
      aboutGame: 'Begin a unique adventure filled with the unparalleled storytelling and deep lore of The Elder Scrolls. Journey to Tamriel - a living, breathing, fantasy universe of magnitude, where your choices shape your experience. Battle, loot, craft, steal or role-play as an archer, mage, merchant, scholar or warrior. Play solo or with friends and combine equipment and abilities to suit your own play style. No game subscription required - buy once, play anytime.NECROM**...',
      gameRate: rateEight,
      reviewsNumber: '37',
      developer: 'Zenimax Online Studios',
      publisher: 'Bethesda Softworks',
      releaseDate: '5 June 2023',
      genreOne: 'MMO',
      genreTwo: 'Adventure',
      video: 'https://www.youtube.com/embed/sbXQadoQmYw',
      screenshoot1: ss1tesNecrom,
      screenshoot2: ss2tesNecrom,
      screenshoot3: ss3tesNecrom,
      screenshoot4: ss4tesNecrom,
      screenshoot5: ss5tesNecrom,
      descriptionFirstApostrof: 'Begin a unique adventure filled with the unparalleled storytelling and deep lore of The Elder Scrolls. Journey to Tamriel - a living, breathing, fantasy universe of magnitude, where your choices shape your experience. Battle, loot, craft, steal or role-play as an archer, mage, merchant, scholar or warrior. Play solo or with friends and combine equipment and abilities to suit your own play style. No game subscription required - buy once, play anytime.',
      descriptionSecondApostrof: 'The Prince of Fate holds secrets too dangerous for mortals or Daedra to comprehend. Now hidden yet turbulent powers threaten Hermaeus Mora`s realm of Apocrypha and if the Daedric Prince`s secret is uncovered, it could unravel all of reality.',
    },
  });
  return (
    <section className='section-wrapper-bestseller'>
      <div className='headline'>
        <h2 className='headline-title'>Pre-orders</h2>
        <div className='button'>View All</div>
      </div>
      <div className='games-container'>

        {/* Diablo IV */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.diablo4 }} className='game-cover'>
            <picture>
              <img src={d4} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-9%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Diablo IV Xbox ONE / Xbox Series X|S - Europe</span>
              </div>
            </div>
            <div className='price'>333.33zł</div>
          </div>
        </div>

        {/* Total War Warhammer */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tww3Fotcd }} className='game-cover'>
            <picture>
              <img src={tww} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-32%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Total War: Warhammer III - Forge of the Chaos Dwarfs</span>
              </div>
            </div>
            <div className='price'>91.12zł</div>
          </div>
        </div>

        {/* The Lord of the Rings: Gollum */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.lotrGollum }} className='game-cover'>
            <picture>
              <img src={lotr} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-52%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>The Lord of the Rings: Gollum</span>
              </div>
            </div>
            <div className='price'>135.42zł</div>
          </div>
        </div>

        {/* Skull and Bones */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.skullAndBones }} className='game-cover'>
            <picture>
              <img src={sk} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-17%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Skull and Bones Xbox Series X|S</span>
              </div>
            </div>
            <div className='price'>224.96zł</div>
          </div>
        </div>

        {/* Dragon Age: Dreadwolf */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.dragonAgeDreadwolf }} className='game-cover'>
            <picture>
              <img src={dad} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-12%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>Dragon Age: Dreadwolf</span>
              </div>
            </div>
            <div className='price'>328.36zł</div>
          </div>
        </div>

        {/* The Elder Scrolls Online Upgrade: Necrom */}
        <div className='game'>
          <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tesNecrom }} className='game-cover'>
            <picture>
              <img src={tes} className='game-img' alt='test'></img>
            </picture>
            <div className='discount'>-27%</div>
          </Link>
          <div className='information'>
            <div className='text'>
              <div className='name'>
                <span className='title'>The Elder Scrolls Online Upgrade: Necrom</span>
              </div>
            </div>
            <div className='price'>137.30zł</div>
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
          {/* Diablo IV */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.diablo4 }} className='game-cover'>
                <picture>
                  <img src={d4} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-9%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Diablo IV Xbox ONE / Xbox Series X|S - Europe</span>
                  </div>
                </div>
                <div className='price'>333.33zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Total War: Warhammer III - Forge of the Chaos Dwarfs */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tww3Fotcd }} className='game-cover'>
                <picture>
                  <img src={tww} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-32%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Total War: Warhammer III - Forge of the Chaos Dwarfs</span>
                  </div>
                </div>
                <div className='price'>91.12zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* The Lord of the Rings: Gollum */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.lotrGollum }} className='game-cover'>
                <picture>
                  <img src={lotr} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-52%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>The Lord of the Rings: Gollum</span>
                  </div>
                </div>
                <div className='price'>135.42zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Skull and Bones */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.skullAndBones }} className='game-cover'>
                <picture>
                  <img src={sk} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-17%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Skull and Bones Xbox Series X|S</span>
                  </div>
                </div>
                <div className='price'>224.96zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* Dragon Age: Dreadwolf */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.dragonAgeDreadwolf }} className='game-cover'>
                <picture>
                  <img src={dad} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-12%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>Dragon Age: Dreadwolf</span>
                  </div>
                </div>
                <div className='price'>328.36zł</div>
              </div>
            </div>
          </SplideSlide>

          {/* The Elder Scrolls Online Upgrade: Necrom */}
          <SplideSlide>
            <div className='game'>
              <Link to='/TheLegendOfZeldaTotk' state={{ data: data.tesNecrom }} className='game-cover'>
                <picture>
                  <img src={tes} className='game-img' alt='test'></img>
                </picture>
                <div className='discount'>-27%</div>
              </Link>
              <div className='information'>
                <div className='text'>
                  <div className='name'>
                    <span className='title'>The Elder Scrolls Online Upgrade: Necrom</span>
                  </div>
                </div>
                <div className='price'>137.30zł</div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Preorders;