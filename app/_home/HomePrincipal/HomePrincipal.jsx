"use client";
import React from "react";
import styles from "./HomePrincipal.module.css";
import Pretitle from "@/components/preTitle/Pretitle"; // Re-added your component
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import schoolImg3 from "../../../public/assets/home/HomeAbout2.jpg";

const HomePrincipal = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} small_container`}>
        
        {/* ── Section header (Restored) ── */}
        <div className={`${styles.headers} section_header centered`}>
          <Pretitle text="Leadership" />
          <h2 className="section_title grey">Meet Our Principal</h2>
        </div>

        {/* ── Main layout ── */}
        <div className={styles.layout}>
          
          {/* Left Side — Image + Decorative Elements */}
          <div className={styles.imageSide}>
            <div className={styles.imageWrap}>
              <Image
                src={schoolImg3}
                alt="UGA Principal"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.img}
                priority 
              />
            </div>
            
            {/* The Striped Decorative Circle (Bottom-Left) */}
            <div className={styles.stripedCircle} aria-hidden="true" />
          </div>

          {/* Right Side — Overlapping Card */}
          <div className={styles.cardSide}>
            {/* The Solid Circle — Now positioned to touch the top-right of the card */}
            <div className={styles.topCircle} aria-hidden="true" />

            <div className={styles.card}>
              <h3 className={`sub_section_title ${styles.welcomeTitle}`}>
                A Word from the Principal
              </h3>
              <p className="body_text">
                At Utumishi Girls Academy, we believe every young woman carries
                within her the potential to lead, to serve, and to excel. Our
                purpose is to cultivate that potential — through rigorous
                academics, unwavering discipline, and a nurturing community.
              </p>
              
              <div className={styles.cardBtn}>
                <Button href="/about" variant="blue">
                  Learn more
                </Button>
              </div>
            </div>

            {/* The Teal Decorative Block (Behind the card) */}
            <div className={styles.decorBlock} aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomePrincipal;