
import '@/styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return <div>
 
  <Component {...pageProps} />
 
  </div>
}
