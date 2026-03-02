import React, { useMemo, useState } from "react";
import "./testimonila.css";

const hallResults = [
  {
    name: "Srishti Aggarwal",
    label: "Percentile",
    value: "99.13",
    img: "/testimonila_image/Shristi.png",
  },
  {
    name: "Aditya Kadanga",
    label: "Percentile",
    value: "96.74",
    img: "/testimonila_image/Aditya.png",
  },
  {
    name: "Dhruv Maheshwari",
    label: "Percentile",
    value: "96.79",
    img: "/testimonila_image/Dhruv.png",
  },
  {
    name: "Anmol yadav",
    label: "Percentile",
    value: "99.65",
    img: "/testimonila_image/Anmol_yadav.png",
  },
  {
    name: "Mukul Saini",
    label: "Percentile",
    value: "99.6",
    img: "/testimonila_image/Mukul_saini.png",
  },
  {
    name: "Ansh Goyal",
    label: "Percentile",
    value: "99.23",
    img: "/testimonila_image/Ansh_goyal.png",
  },
  {
    name: "Nitin",
    label: "AIR",
    value: "1198",
    img: "/testimonila_image/Nitin.png",
  },
  {
    name: "Prakhar Aggarwal",
    label: "Percentile",
    value: "99.85",
    img: "/testimonila_image/Prakhar_Agrwall.png",
  },
  {
    name: "Ajay Sharma",
    label: "AIR",
    value: "982",
    img: "/testimonila_image/Ajay_Shanrma.png",
  },
  {
    name: "Anuj Arora",
    label: "AIR",
    value: "501",
    img: "/testimonila_image/Anuj Arora.png",
  },
  {
    name: "Ankit Aggarwal",
    label: "AIR",
    value: "22",
    img: "/testimonila_image/Ankit Aggarwal.png",
  },
  {
    name: "Arjun Chauhan",
    label: "AIR",
    value: "591",
    img: "/testimonila_image/Arjun Chauhan.png",
  },
  {
    name: "Chirag Jain",
    label: "AIR",
    value: "529",
    img: "/testimonila_image/chirag_jain.png",
  },
  {
    name: "Prakhar Aggarwal",
    label: "AIR",
    value: "959",
    img: "/testimonila_image/Prakhar_Agrwall.png",
  },
];

const fullResultImages = [
  "/testimonila_image/full_image_1.jpeg",
  "/testimonila_image/full_image_2.jpeg",
];

const SuccessStoriesPage: React.FC = () => {
  const [showAllHall, setShowAllHall] = useState(false);
  const visibleHallResults = useMemo(
    () => (showAllHall ? hallResults : hallResults.slice(0, 6)),
    [showAllHall]
  );

  return (
    <div className="ssPage">
      <main className="ssMain">
        {/* Hero */}
        <section className="ssHero">
          <div className="ssHeroBg">
            <div className="ssHeroOverlay" />
            <div
              className="ssHeroImage"
              data-alt="University campus students studying outdoors"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9LnD7wLdSQHJgGoP1_JpA-sgKnKCUmiCJp1uczZalEI7rtbu2YMNXWCh0M2ORtpTZXoNueTN2YSQJdFlYKp19TWlcR0XVa865Liya5dNL2jJrMDuB7UhiREv5Q8aUyaJgbtJdIF1RPp0IOYkooVOUdLVz-778OwK_Meb46acFjSrYNHD0KBhYEDgjUIY1Oah2rtkQRgzrwIc8HmECIBnfOGIaAOPR62NoqNjuomnnDaH7yrwvDChvSSbqbjiYYimf68Q5hMVl6Zo')",
              }}
            />
          </div>

          <div className="ssContainer ssHeroContent">
            <div className="ssHeroBox">
              <span className="ssPill">
                <span className="ssPillSparkle">✨</span>
                500+ Selections in JEE Advanced 2026-27
              </span>

              <h1 className="ssHeroTitle">
                Celebrating Excellence:
                <br />
                <span className="ssHeroTitleAccent">Stories of Success</span>
              </h1>

              <p className="ssHeroSub">
                Meet the brilliant minds who turned their dreams into reality with determination,
                hard work, and the right guidance at IIT Study Forum.
              </p>

              <div className="ssHeroBtns">
                <button className="ssBtn ssBtnPrimaryBig" type="button">
                  View Top Rankers
                </button>
                <button className="ssBtn ssBtnGlassBig" type="button">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="ssStatsBar">
          <div className="ssContainer">
            <dl className="ssStatsGrid">
              <div className="ssStat">
                <dt className="ssStatLabel">Total Selections</dt>
                <dd className="ssStatValue">1,250+</dd>
              </div>
              <div className="ssStat">
                <dt className="ssStatLabel">Under AIR 100</dt>
                <dd className="ssStatValue">42</dd>
              </div>
              <div className="ssStat">
                <dt className="ssStatLabel">Years of Legacy</dt>
                <dd className="ssStatValue">15+</dd>
              </div>
              <div className="ssStat">
                <dt className="ssStatLabel">Average Percentile</dt>
                <dd className="ssStatValue">98.5</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="ssSection">
          <div className="ssContainer">
            <div className="ssSectionHead">
              <h2 className="ssSectionTitle">Hall of Fame</h2>
              <p className="ssSectionSub">Our top performers who set new benchmarks.</p>
            </div>

            <div className="ssHallGrid ssResultGrid">
              {visibleHallResults.map((result) => (
                <article className="ssHallCard ssResultCard" key={result.name}>
                  <div className="ssResultImageWrap">
                    <img
                      className="ssResultImage"
                      src={result.img}
                      alt={`${result.name} result`}
                    />
                  </div>
                  <div className="ssResultBody">
                    <h3 className="ssResultName">{result.name}</h3>
                    <p className="ssResultMetric">
                      <span>{result.label}</span>
                      <strong>{result.value}</strong>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            {hallResults.length > 6 && (
              <div className="ssHallToggleWrap">
                <button
                  type="button"
                  className="ssHallToggleBtn"
                  onClick={() => setShowAllHall((prev) => !prev)}
                >
                  <span>{showAllHall ? "Show Less" : "See More"}</span>
                  <span className="material-symbols-outlined">
                    {showAllHall ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Full Results */}
        <section className="ssSection ssSectionPadTopSm">
          <div className="ssContainer">
            <div className="ssSectionHead">
              <h2 className="ssSectionTitle">Full Results</h2>
              <p className="ssSectionSub">Complete newspaper-style result highlights.</p>
            </div>

            <div className="ssFullResultGrid">
              {fullResultImages.map((img, index) => (
                <article className="ssFullResultCard" key={img}>
                  <img className="ssFullResultImage" src={img} alt={`Full result ${index + 1}`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="ssBigCta">
          <div className="ssBigCtaBg" aria-hidden="true">
            <div className="ssGlow ssGlowTop" />
            <div className="ssGlow ssGlowBottom" />
          </div>

          <div className="ssContainer">
            <div className="ssBigCtaInner">
              <h2 className="ssBigCtaTitle">Ready to write your own success story?</h2>
              <p className="ssBigCtaSub">
                Join the next batch at IIT Study Forum and get the guidance you deserve. Admissions
                open for JEE 2026-27.
              </p>

              <div className="ssBigCtaBtns">
                <a className="ssCtaLinkPrimary" href="#">
                  Enroll Now
                </a>
                <a className="ssCtaLinkSecondary" href="#">
                  Talk to a counselor{" "}
                  <span className="material-symbols-outlined ssCtaArrow">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStoriesPage;
