import React from "react";
import "./CardScroll.css"; // If you're using custom CSS
import { Link } from "react-router-dom";


const card1 = [
  { title: "Instagram", rating: "4.3", img: "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s128-rw", link: "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en" },
  { title: "YouTube", rating: "4.5", img: "https://play-lh.googleusercontent.com/6am0i3walYwNLc08QOOhRJttQENNGkhlKajXSERf3JnPVRQczIyxw2w3DxeMRTOSdsY=s128-rw", link: "https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en" },
  { title: "WhatsApp", rating: "4.6", img: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s128-rw", link: "https://play.google.com/store/apps/details?id=com.whatsapp&hl=en" },
  { title: "Facebook", rating: "4.2", img: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s128-rw", link: "https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en" },
  { title: "Your-App-Name", rating: "4.2", img: "Your-app-image", link: "/details" },

  { title: "Gmail", rating: "4.1", img: "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=s128-rw", link: "https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en" },
  { title: "Brave Private Web Browser, VPN", rating: "4.4", img: "https://play-lh.googleusercontent.com/aP7LHNpjMJJxoR8jRPPdVPlISDNNkFBKKmdODDp0uRNlL3YTugEdNEcHJgKBeRV8eeuU=s128-rw", link: "https://play.google.com/store/apps/details?id=com.brave.browser&hl=en" },
  { title: "ChatOn-AI Chat Bot ", rating: "4.8", img: "https://play-lh.googleusercontent.com/bk3DLi8flXHQkOn4B-R6y1ber8iOuHXUOMqTBpBtXLwiQlzbG44VBqai8iNtnm9aOns7=s128-rw", link: "https://play.google.com/store/apps/details?id=ai.chat.gpt.bot&hl=en" },
  { title: "Grammarly-AI Writing Assistant", rating: "3.5", img: "https://play-lh.googleusercontent.com/6Xe9DWiMC76daosOC80Im9gqe25Q9P55LxJIGPTLbcdFkMXOur4mk8jTVxoqOaiAvAG4=s128-rw", link: "https://play.google.com/store/apps/details?id=com.grammarly.android.keyboard&hl=en" },
  
];

const card2 = [
  
  { title: "Chrome", rating: "4.0", img: "https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc=s128-rw", link:"https://play.google.com/store/apps/details?id=com.android.chrome&hl=en" },
  { title: "Snapchat", rating: "4.3", img: "https://play-lh.googleusercontent.com/nC95iM2f4dXas2K5x-heZ_uUVH9oc-mnlQF9phleiU2Kfk_Z1Rmwrbwv0QOdwQ__T4A=s128-rw", link: "https://play.google.com/store/apps/details?id=com.snapchat.android&hl=en"},
  { title: "Spotify", rating: "4.6", img: "https://play-lh.googleusercontent.com/7ynvVIRdhJNAngCg_GI7i8TtH8BqkJYmffeUHsG-mJOdzt1XLvGmbsKuc5Q1SInBjDKN=s128-rw", link: "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en" },
  { title: "FaceApp: Perfect Face Editor", rating: "4.1", img: "https://play-lh.googleusercontent.com/wy7PeVendA2m-DZnkSZepPYA9BaYydp35NhUwiw-BWkqh7BwvTAYMnlox118MmE2mQ=s128-rw", link: "https://play.google.com/store/apps/details?id=io.faceapp&hl=en" },
  { title: "Alibaba.com", rating: "4.8", img: "https://play-lh.googleusercontent.com/KFJYjFdzWpxZxtZjvzaf5Db4Zn8wi8UUlnRJoVO2XUGckoy7xn_EQyktmZF9SbAN5p5k=s128-rw", link: "https://play.google.com/store/apps/details?id=com.alibaba.intl.android.apps.poseidon&hl=en" },
  { title: "Mercado", rating: "4.7", img: "https://play-lh.googleusercontent.com/FZ8RRQ1yTXJ63TG5IAerw356pBKlP9MUHyyqkmYCd6TcjgBelzpfyDuJTiy0_whhbxg=s128-rw", link: "https://play.google.com/store/apps/details?id=com.mercadolibre&hl=en" },
  { title: "Decathlon", rating: "4.8", img: "https://play-lh.googleusercontent.com/a2niI18Rs5GVwMe5AYlKL8_MefMfnGIHf7LAw3kl8Of1yjR2sgGzNVg6r-RUd8QFDzIG=s128-rw", link: "https://play.google.com/store/apps/details?id=com.evamall.evacustomer&hl=en" },
];
const card3= [
  { title: "Amazon Prime", rating: "4.4", img: "https://play-lh.googleusercontent.com/mZ6pRo5-NnrO9GMwFNrK5kShF0UrN5UOARVAw64_5aFG6NgEHSlq-BX5I8TEXtTOk9s=s128-rw", link: "https://play.google.com/store/apps/details?id=com.amazon.avod.thirdpartyclient&hl=en" },
  { title: "Netflix", rating: "4.5", img: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s128-rw", link: "https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en" },
  { title: "Sony LIV", rating: "4.7", img: "https://play-lh.googleusercontent.com/QtxELma_6y1jezI8QKqVtI8Tb0flMhPjIAzU-VSZ2jz7RwriCENXQk4M6MvUyVi5qg=s128-rw", link: "https://play.google.com/store/apps/details?id=com.sonyliv&hl=en" },
  { title: "FireFox", rating: "–", img: "https://play-lh.googleusercontent.com/zqsuwFUBwKRcGOSBinKQCL3JgfvOW49vJphq0ZF32aDgfqmuDyl-fEpx4Lxm4pRr7A=s128-rw", link: "https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en" },
  { title: "EasyCut", rating: "–", img: "https://play-lh.googleusercontent.com/aefUTg5lA84c0audowcXcj9NSwhKQNN9bqUwNHxk3wzeazKJbFvh-Y1RTCXgCRn9lSk=s128-rw", link: "https://play.google.com/store/search?q=easy%20cut&c=apps&hl=en" },
 
];
const card4 = [
  { title: "Gmail", rating: "4.1", img: "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=s128-rw", link: " " },
  { title: "Picsart , editors choice ", rating: "–", img: "https://play-lh.googleusercontent.com/WSEOsbT-CtdxmJ5q_ChABDyGqaiPOMqjRveVi524OS5C7M3Ccy9paoi4rrNzJu4ORhE=s128-rw", link: "https://play.google.com/store/apps/details?id=com.picsart.studio&hl=en" },
  { title: "X (Formerly Twitter", rating: "–", img: "https://play-lh.googleusercontent.com/A-Rnrh0J7iKmABskTonqFAANRLGTGUg_nuE4PEMYwJavL3nPt5uWsU2WO_DSgV_mOOM=s128-rw", link: "https://play.google.com/store/apps/details?id=com.twitter.android&hl=en" },
  { title: "Apple Music", rating: "4.4", img: "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE=s128-rw", link: "https://play.google.com/store/apps/details?id=com.apple.android.music&hl=en" },
  { title: "Music Player", rating: "4.8", img: "https://play-lh.googleusercontent.com/PdndnWPEaztvwVnYJh7GbSwDJ9xDJOwLonmx6klDL3uy0NE-X_YQttQ_z0166Wi1zsY=s128-rw", link: "https://play.google.com/store/apps/details?id=com.search.music.mp3.musicplayer&hl=en" },
  { title: "Redit:News , Views, Trends", rating: "4.4", img: "https://play-lh.googleusercontent.com/84GGDq1L9zw9cCKwNaW0mN_RgXCcg5yEn_3resl6M1kg-sT-GU4nBQqiJu-SQ6KAqA=s128-rw", link: "https://play-lh.googleusercontent.com/84GGDq1L9zw9cCKwNaW0mN_RgXCcg5yEn_3resl6M1kg-sT-GU4nBQqiJu-SQ6KAqA=s128-rw" },
];
const card5=[
  { title: "Myntra-Fashion Shopping App", rating: "4.8", img: "https://play-lh.googleusercontent.com/wpnNPYIrdHC3Q_bcFXGpwoMvFvvvQnZJHmFKzumq5ZTRZKIzfxURAUGOMqhPhVxnggY=s128-rw", link: "https://play.google.com/store/apps/details?id=com.myntra.android&hl=en" },
  { title: "Flipkart Online Shopping App", rating: "4.7", img: "https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n=s128-rw", link: "https://play.google.com/store/apps/details?id=com.flipkart.android&hl=en" },
  { title: "Amazon Shopping App", rating: "4.7", img: "https://play-lh.googleusercontent.com/urVIq3KHpF9hAm7FJpE2I4YlGfqMFpUdb5GMtQcASC1ODbWe1zuQFrF99ZPTELfE8wA=s128-rw", link: "https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en" },
  { title: "Alibaba.com", rating: "4.8", img: "https://play-lh.googleusercontent.com/KFJYjFdzWpxZxtZjvzaf5Db4Zn8wi8UUlnRJoVO2XUGckoy7xn_EQyktmZF9SbAN5p5k=s128-rw", link: "https://play.google.com/store/apps/details?id=com.alibaba.intl.android.apps.poseidon&hl=en" },
  { title: "Mercado", rating: "4.7", img: "https://play-lh.googleusercontent.com/FZ8RRQ1yTXJ63TG5IAerw356pBKlP9MUHyyqkmYCd6TcjgBelzpfyDuJTiy0_whhbxg=s128-rw", link: "https://play.google.com/store/apps/details?id=com.mercadolibre&hl=en" },
  { title: "Decathlon", rating: "4.8", img: "https://play-lh.googleusercontent.com/a2niI18Rs5GVwMe5AYlKL8_MefMfnGIHf7LAw3kl8Of1yjR2sgGzNVg6r-RUd8QFDzIG=s128-rw", link: "https://play.google.com/store/apps/details?id=com.evamall.evacustomer&hl=en" },
  { title: "LimeRoad", rating: "4.8", img: "https://play-lh.googleusercontent.com/tAs6vdG7EgeEULSWtwobrzLNPr4-bD7AAB8G4AwN6RFI7T_bSwxE0oxb4chgSEhz47U=s128-rw", link: "https://play.google.com/store/apps/details?id=com.shopping.limeroad&hl=en" },
  { title: "Trendyol", rating: "4.8", img: "https://play-lh.googleusercontent.com/LosPYfjaz1pOL-I3XCTroj4vQVxfsF5629nzPJM4pIj2KLaQuLbwmXUqV-I1RT5u9A=s128-rw", link: "https://play.google.com/store/apps/details?id=trendyol.com&hl=en " },
];
const card6 =[
  
  { title: "Bumble: Dating App", rating: "3.7", img: "https://play-lh.googleusercontent.com/tcdv5wPymQgUzdtCYkzKfbNm_SpcI3cZudImvvH570E7qjaXiuFSraDY1lgUj2bkTIM=s128-rw", link: "https://play.google.com/store/apps/details?id=com.bumble.app&hl=en" },
  { title: "Tinder Match Chat. Data.", rating: "4.0", img: "https://play-lh.googleusercontent.com/qimgg9SRFgp1S06iKTv5e0L8aziUhPYCE7Vn1YEylejPfOrrMkB5PdADQbsyPBLFy9Xe=s128-rw", link: "https://play.google.com/store/apps/details?id=com.tinder&hl=en" },
  { title: "happn: Dating App", rating: "4.0", img: "https://play-lh.googleusercontent.com/DDE8YDPYKatiNO8GLTDwNP7FvmmApAx5N4ow4gglmsZQtl9CXFrB793pvSkwHiiMKw=s128-rw", link: "https://play.google.com/store/apps/details?id=com.ftw_and_co.happn&hl=en" },
  { title: "Match: Dating App", rating: "4.3", img: "https://play-lh.googleusercontent.com/y6iCFBHUmbKyptLeu6d6QGwbMDIAYKM3zrkIMTjS88ot2v630Hu3bIXH1GLxGkz470e1=s128-rw", link: "https://play.google.com/store/apps/details?id=com.match.android.matchmobile&hl=en" },
  { title: "Feeld: Dating App ", rating: "4.4", img: "https://play-lh.googleusercontent.com/hAy8padxTbfN1ZZvfmL9tWxVpPEaur9S0xnu5HnFVajUwQIQf-CFalwraBgGGvCu77s=s128-rw", link: "https://play.google.com/store/apps/details?id=co.feeld&hl=en" },
  { title: "TanTan", rating: "4.2", img: "https://play-lh.googleusercontent.com/ySMcmCkXu2z1ASoWFeDYiOUj_1hhv4WrwYJos2Mw7CO6eCde6qxVEmbSOf0-fKBrD3-1=s128-rw", link: "https://play.google.com/store/apps/details?id=com.p1.mobile.putong&hl=en" },
  { title: "Her, Lesbian, bi, queer dating", rating: "3.5", img: "https://play-lh.googleusercontent.com/RiU-lgc-ju_D0DodDz9jkGn320RUJ8qpihy7Ah606QirvS7div-jNyLpri9Loqxl0s8=s128-rw", link: "https://play.google.com/store/apps/details?id=com.weareher.her&hl=en" },
  { title: "Lovely", rating: "4.7", img: "https://play-lh.googleusercontent.com/LyIFxe1YBvDG7Nw2X3S8PAnjkO9-elOewkvH9FMVz1VRpfJplBR-oxIHCbMWmZyYF8A=s128-rw", link: "https://play.google.com/store/apps/details?id=com.pinkapp&hl=en" },
  
];



const CardScroll = () => {
  return (
    <div className="card-title">
        <h2>Top Trending</h2>
    <div className="card-scroll-container">
      {card1.map((card, index) => (
        <Link to={card.link} className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </Link>
      ))}
    </div>

    <div className="card-scroll-container">
      {card2.map((card, index) => (
        <Link to={card.link} className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </Link>
      ))}
    </div>
    <h2>Recommended for you</h2>
    <div className="card-scroll-container">
      {card3.map((card, index) => (
        <Link to={card.link} className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </Link>
      ))}
    </div>
    <div className="card-scroll-container">
      {card4.map((card, index) => (
        <Link to={card.link} className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </Link>
      ))}
    </div>
    <h2>Shopping Section</h2>
    <div className="card-scroll-container">
      {card5.map((card, index) => (
        <Link to={card.link} className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </Link>
      ))}
    </div>
    <h2>Dating apps </h2>
    <div className="card-scroll-container">
      {card6.map((card, index) => (
        <Link to={card.link} className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </Link>
      ))}
    </div>
    <h2>Mixed</h2>
    <div className="card-scroll-container">
        
      {card5.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">
            {card.rating}
            <span className="material-icons star-icon">star</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardScroll;
