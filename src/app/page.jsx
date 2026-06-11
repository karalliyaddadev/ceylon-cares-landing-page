"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [hover, setHover] = useState("");

  return (
    <main className={styles.main}>
      <div
        className={`${styles.content} ${
          hover === "left"
            ? styles.hoverLeft
            : hover === "right"
            ? styles.hoverRight
            : ""
        }`}
      >
        {/* LEFT PANEL */}
        <a
          href="https://medical.ceylonwellnesscare.com/"
          className={`${styles.split} ${styles.left}`}
          onMouseEnter={() => setHover("left")}
          onMouseLeave={() => setHover("")}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/coporate.webp"
              alt="Corporate"
              fill
              sizes="50vw"
              priority
              className={styles.bgImage}
            />
          </div>

          <div className={styles.overlay}></div>

          <div className={styles.text}>
            <p className={styles.subtitle}>PERSONAL & CORPORATE HEALTHCARE</p>

            <h1 className={styles.title}>
              Medical
              <br />
              Care
              <br/>
              Solutions
            </h1>

            <p className={styles.desc}>
              Comprehensive healthcare services for individuals, families, and businesses.
                Access trusted medical professionals, workplace health programs, and
                personalized care designed to support long-term wellbeing.
            </p>

            <button className={styles.button}>Explore Medical Care</button>
          </div>
        </a>

        {/* RIGHT PANEL */}
        <a
          href="https://wellness.ceylonwellnesscare.com"
          className={`${styles.split} ${styles.right}`}
          onMouseEnter={() => setHover("right")}
          onMouseLeave={() => setHover("")}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/wellness.webp"
              alt="Adventure"
              fill
              sizes="50vw"
              priority
              className={styles.bgImage}
            />
          </div>

          <div className={styles.overlay}></div>

          <div className={styles.text}>
            <p className={styles.subtitle}>CUSTOMIZED WELLNESS TRAVEL</p>

            <h1 className={styles.title}>
              Wellness
              <br />
              Journeys
              <br />
              Sri Lanka
            </h1>

            <p className={styles.desc}>
              Personalized wellness experiences for locals and international travelers.
              From relaxation and healing retreats to active wellness adventures, every
              journey is designed around your goals and preferences.
            </p>

            <button className={styles.button}>Discover Wellness Travel</button>
          </div>
        </a>

         {/* CENTER LOGO */}
          <div className={styles.logoCenter}>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={120}
              height={120}
              priority
            />
          </div>

      </div>
    </main>
  );
}