"use client";

import { useEffect } from "react";
import { useDeviceStore } from "@/providers/device-store-provider";
import MobileBanner from "./MobileBanner";
import WideBanner from "./WideBanner";
import Footer from "./Footer";
import styles from "./index.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
  const { isMobile, setIsMobile, setIsAndroid, setIsIOS } = useDeviceStore(
    (state) => state
  );

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const checkDevice = () => {
      const mobileDevice =
        /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );

      setIsMobile(mobileDevice);
    };

    const checkOS = () => {
      if (/android/i.test(userAgent)) {
        return setIsAndroid(true);
      }

      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return setIsIOS(true);
      }

      return;
    };

    checkDevice();
    checkOS();
  }, []);

  return (
    <div>
      {isMobile ? <MobileBanner /> : false}

      <WideBanner />

      <section className={styles.section}>
        <main className={styles.main}>{children}</main>

        <Footer />
      </section>
    </div>
  );
}

export default Layout;
