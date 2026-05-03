"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./StaySection.module.css";

export default function StaySection({
  bannerTitle,
  bannerSubtitle,
  bannerImage,
  cards,
  cta,
}) {
  return (
    <div className="container my-4">
      <div className={styles.banner}>
        <Image
          src={bannerImage}
          alt="Banner"
          fill
          className={styles.bannerImg}
        />

        <div className={styles.overlay}>
          <h2 className="fw-bold">{bannerTitle}</h2>
          {bannerSubtitle && (
            <p className="mb-0">{bannerSubtitle}</p>
          )}
        </div>
      </div>
      <div className="row mt-4 g-3">
        
        {cards.map((card) => (
          <div className="col-12 col-sm-6 col-md-3" key={card.id}>
            <div className="card h-100 shadow-sm">
              <div className={styles.cardImgWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.cardImg}
                />
              </div>
              <div className="card-body p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">{card.title}</h6>

                  {card.rating && (
                    <small className="text-warning">
                      ⭐ {card.rating}
                    </small>
                  )}
                </div>

                <p className="text-muted small mt-1 mb-0">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`h-100 d-flex flex-column justify-content-center align-items-center text-center ${styles.ctaCard}`}>

            <div className={styles.plus}>
              <i className="bi bi-plus-circle-dotted"></i>
            </div>

            <h6 className="fw-bold">{cta.title}</h6>
            <p className="small">{cta.description}</p>

            <Link href={cta.link}>
              <button className="btn btn-primary btn-sm">
                {cta.buttonText}
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}