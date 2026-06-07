"use client";

import { useEffect } from "react";

export default function ReferralHandler({ referralCode }: { referralCode?: string }) {
  useEffect(() => {
    if (!referralCode) return;

    sessionStorage.setItem("mosaic_referral_code", referralCode);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mosaicai://referral/${referralCode}`;
    }
  }, [referralCode]);

  return null;
}
