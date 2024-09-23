"use client";

import Head from "next/head";
import React, { useEffect } from "react";

const BASE_TITLE = "Jertap";

export default function PageTitle({ title = "Jertap" }) {
  useEffect(() => {
    window.document.title = `${BASE_TITLE} - ${title}`;
  }, []);
  return (
    <Head>
      <title>{`${BASE_TITLE} - ${title}`}</title>
    </Head>
  );
}
