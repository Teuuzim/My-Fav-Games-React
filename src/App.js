import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    href: "https://www.twitch.tv/directory/category/call-of-duty-warzone",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-144x192.jpg",
    alt: "Imagem do jogo Call of duty Warzone",
  },
  {
    href: "https://www.twitch.tv/directory/category/red-dead-redemption-2",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-144x192.jpg",
    alt: "Imagem do Red dead Redemption 2",
  },
  {
    href: "https://www.twitch.tv/directory/category/ragnarok-online",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-144x192.jpg",
    alt: "Imagem do jogo Ragnarok",
  },
  {
    href: "https://www.twitch.tv/directory/category/grand-theft-auto-v",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    alt: "Imagem do jogo Grand Theft Auto V",
  },
];
const channelListData = [
  {
    href: "https://www.twitch.tv/tabacudofps",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/26daf6fe-5fe3-41a4-98bf-07c4424e85ee-profile_image-70x70.png",
    alt: "Imagem do TABACUDO",
  },
  {
    href: "https://www.twitch.tv/ruyterpoubel",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/02df689e-cd32-4195-afc9-3d1106cfac53-profile_image-70x70.png",
    alt: "Imagem do Ruyter",
  },
  {
    href: "https://www.twitch.tv/n4nofps",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/a918aa8b-427e-4bdc-9271-5cf63c5035a5-profile_image-70x70.png",
    alt: "Imagem do Nano",
  },
  {
    href: "https://www.twitch.tv/rocketseat_oficial",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/32092d00-2638-422d-8a24-c609354e8a9d-profile_image-70x70.png",
    alt: "Imagem da RocketSeat",
  },
];
const socialListData = [
  {
    href: "https://www.instagram.com/matheeusvaz",
    img: "/assets/instagram.svg",
    alt: "Instagram do teuzin",
  },
  {
    href: "https://www.linkedin.com/in/matheus-vaz-1a3a2021a/",
    img: "/assets/linkedin.svg",
    alt: "Linkedin do teuzin",
  },
  {
    href: "https://www.github.com/Teuuzim",
    img: "/assets/github.svg",
    alt: "Github do teuzin",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais gosto de jogar"
          className="games-list"
        >
          {gamesListData.map((item) => {
            return <ListItem href={item.href} img={item.img} alt={item.alt} />;
          })}
        </Section>
        <Section
          title="Canais de Streams"
          subtitle="Lista de canais que assito"
          className="channel-list"
        >
          {channelListData.map((item) => {
            return <ListItem href={item.href} img={item.img} alt={item.alt} />;
          })}
        </Section>
        <Section
          title="Minhas Redes Sociais"
          subtitle="Se conecte comigo nas Redes Sociais"
          className="social-list"
        >
          {socialListData.map((item) => {
            return <ListItem href={item.href} img={item.img} alt={item.alt} />;
          })}
        </Section>
      </main>
    </div>
  );
}
