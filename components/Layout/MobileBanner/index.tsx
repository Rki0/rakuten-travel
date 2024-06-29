"use client";

import { useState } from "react";
import { useDeviceStore } from "@/providers/device-store-provider";
import styles from "./index.module.scss";
import RakutenTravelAppLogo from "@/components/svgs/RakutenTravelAppLogo";

function MobileBanner() {
  const { isAndroid, isIOS } = useDeviceStore((state) => state);

  // TODO: if you want to manage this state as a client state, extract this code to a zustand store
  const [isCloseBanner, setIsCloseBanner] = useState(false);

  const closeBanner = () => {
    setIsCloseBanner(true);
  };

  return isCloseBanner ? (
    false
  ) : (
    <aside className={styles.aside}>
      <div onClick={() => closeBanner()}>X</div>

      <RakutenTravelAppLogo />

      <div>
        <div>앱으로 만나는 라쿠텐 트래블</div>

        <div>
          {isAndroid ? "Google Play Store" : false}
          {isIOS ? "App Store" : false}
        </div>
      </div>

      <div>보기</div>
    </aside>
  );
}

export default MobileBanner;
