"use client";

import { useEffect } from "react";
import { rememberChannel } from "../referral";

export default function ReferralHandler({ referralCode, channel }: { referralCode: string; channel: string }) {
  useEffect(() => {
    if (referralCode) sessionStorage.setItem("mosaic_ref", referralCode);
    if (channel) rememberChannel(channel);
  }, [referralCode, channel]);
  return null;
}
