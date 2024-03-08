"use client";

import FormWorker from "@/components/FornWorker";
import { urlBase64ToUint8Array } from "@/components/handlers/Base64";
import webpush from "@/lib/webpush";
import axios from "axios";
import { useEffect, useState } from "react";

const applicationServerKey = process.env.NEXT_PUBLIC_VAPID_KEY as string;

function Home() {
  const [subscription, setSubscription] = useState({} as PushSubscription);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) =>
        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(applicationServerKey),
          })
          .then(async (subscription) => {
            console.log(subscription);
            setSubscription(subscription);
          })
      );
    }
  }, []);

  return (
    <>
      <p>
        {subscription.options
          ? "Estas recibiendo notificaciones"
          : "No estas recibiendo notificaciones"}
      </p>
      <FormWorker subcriptionProp={subscription} />
    </>
  );
}

export default Home;
