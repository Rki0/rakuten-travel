import Image from "next/image";
import { useEffect } from "react";
import { Viewport } from "@/constants/viewport";
import { useViewportStore } from "@/providers/viewport-store-provider";

function WideBanner() {
  const { setIsMobileView, setIsPcView, isPcView, isMobileView } =
    useViewportStore((state) => state);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < Viewport.pc) {
        setIsMobileView();
      } else {
        setIsPcView();
      }
    }

    // To initialize value of variable, function should be executed.
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside>
      {isMobileView ? (
        <Image
          src="https://img.travel.rakuten.co.jp/toptype/bnr/wide/welcomecoupon/ko-kr_sp.png"
          alt="10% 할인 라쿠텐 회원의 첫 번째 예약"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        false
      )}

      {isPcView ? (
        <Image
          src="https://img.travel.rakuten.co.jp/toptype/bnr/wide/welcomecoupon/ko-kr_pc.png"
          alt="10% 할인 라쿠텐 회원의 첫 번째 예약"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        false
      )}
    </aside>
  );
}

export default WideBanner;
