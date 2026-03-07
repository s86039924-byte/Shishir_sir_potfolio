import React, { useMemo, useState } from "react";
import "./galery.css";
import "../tetimonila/testimonila.css";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: "Events" | "Lectures" | "Results";
  size: "large" | "medium" | "small";
  image: string;
  video?: string;
};

type TestimonialResult = {
  name: string;
  label: "Percentile" | "AIR";
  value: string;
  img: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Class Celebration",
    description: "Students celebrating a milestone together.",
    category: "Events",
    size: "large",
    image: "/testimonila_image/galery_1.png",
  },
  {
    id: "g2",
    title: "Focused Class",
    description: "Regular classroom session with faculty guidance.",
    category: "Lectures",
    size: "medium",
    image: "/testimonila_image/galery2.png",
  },
  {
    id: "g3",
    title: "Results Highlight",
    description: "Newspaper coverage of top ranks.",
    category: "Results",
    size: "small",
    image: "/testimonila_image/galery_3.jpg",
  },
  {
    id: "g4",
    title: "Results Feature",
    description: "Print media featuring IITSF achievers.",
    category: "Results",
    size: "small",
    image: "/testimonila_image/galery_4.jpg",
  },
  {
    id: "g5",
    title: "Another Result Highlight",
    description: "Yet another newspaper headline of IITSF ranks.",
    category: "Results",
    size: "medium",
    image: "/testimonila_image/galery_5.jpg",
  },
  {
    id: "g6",
    title: "Chemistry Strategy Session",
    description: "Snippets from our mentor explaining exam frameworks.",
    category: "Lectures",
    size: "medium",
    image: "https://img.youtube.com/vi/ss1G8vNILH0/hqdefault.jpg",
    video: "https://youtu.be/ss1G8vNILH0",
  },
  {
    id: "g7",
    title: "Physics Concept Capsule",
    description: "Visual explanation to build strong fundamentals.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/eyvXBZAmmNw/hqdefault.jpg",
    video: "https://youtu.be/eyvXBZAmmNw",
  },
  {
    id: "g8",
    title: "Maths Marathon Snippet",
    description: "See how we drill problem solving in class.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/vBXQzS18B1E/hqdefault.jpg",
    video: "https://youtu.be/vBXQzS18B1E",
  },
  {
    id: "g9",
    title: "Rapid Tricks Short",
    description: "Quick doubt-solving hack from the mentors.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/4iSZY1TqloM/hqdefault.jpg",
    video: "https://youtube.com/shorts/4iSZY1TqloM",
  },
  {
    id: "g10",
    title: "Motivation Byte",
    description: "Short push to keep aspirants focused.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/iAd1XRqEJCE/hqdefault.jpg",
    video: "https://youtube.com/shorts/iAd1XRqEJCE",
  },
];

const testimonialResults: TestimonialResult[] = [
  { name: "Srishti Aggarwal", label: "Percentile", value: "99.13", img: "/testimonila_image/Shristi.png" },
  { name: "Aditya Kadanga", label: "Percentile", value: "96.74", img: "/testimonila_image/Aditya.png" },
  { name: "Dhruv Maheshwari", label: "Percentile", value: "96.79", img: "/testimonila_image/Dhruv.png" },
  { name: "Anmol yadav", label: "Percentile", value: "99.65", img: "/testimonila_image/Anmol_yadav.png" },
  { name: "Mukul Saini", label: "Percentile", value: "99.6", img: "/testimonila_image/Mukul_saini.png" },
  { name: "Ansh Goyal", label: "Percentile", value: "99.23", img: "/testimonila_image/Ansh_goyal.png" },
  { name: "Nitin", label: "AIR", value: "1198", img: "/testimonila_image/Nitin.png" },
  { name: "Prakhar Aggarwal", label: "Percentile", value: "99.85", img: "/testimonila_image/Prakhar_Agrwall.png" },
  { name: "Ajay Sharma", label: "AIR", value: "982", img: "/testimonila_image/Ajay_Shanrma.png" },
  { name: "Anuj Arora", label: "AIR", value: "501", img: "/testimonila_image/Anuj Arora.png" },
  { name: "Ankit Aggarwal", label: "AIR", value: "22", img: "/testimonila_image/Ankit Aggarwal.png" },
  { name: "Arjun Chauhan", label: "AIR", value: "591", img: "/testimonila_image/Arjun Chauhan.png" },
  { name: "Chirag Jain", label: "AIR", value: "529", img: "/testimonila_image/chirag_jain.png" },
  { name: "Prakhar Aggarwal", label: "AIR", value: "959", img: "/testimonila_image/Prakhar_Agrwall.png" },
];

const toYouTubeEmbedUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0`;
      }

      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts[0] === "shorts" && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}?rel=0`;
      }
      if (parts[0] === "embed" && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}?rel=0`;
      }
    }
  } catch {
    return null;
  }

  return null;
};

const getCardClassName = (item: GalleryItem): string => {
  if (item.size === "large") return "galCard galCardBig";
  if (item.size === "medium") return "galCard galCardWide";
  return `galCard galCardSquare${item.video ? " galCardVideoSmall" : ""}`;
};

const chunkRows = <T,>(items: T[]) => {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }
  return rows;
};

const GalleryPage: React.FC = () => {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [category, setCategory] = useState<"All" | "Lectures" | "Events" | "Results">("All");
  const visibleItems = useMemo(
    () =>
      galleryItems.filter((item) => {
        const tabMatch = tab === "photos" ? !item.video : Boolean(item.video);
        const categoryMatch = category === "All" ? true : item.category === category;
        return tabMatch && categoryMatch;
      }),
    [tab, category]
  );
  const mainRows = useMemo(
    () => chunkRows(testimonialResults.filter((result) => result.label === "Percentile")),
    []
  );
  const advancedRows = useMemo(
    () => chunkRows(testimonialResults.filter((result) => result.label === "AIR")),
    []
  );
  const showTestimonialsResults = tab === "photos" && category === "Results";

  return (
    <div className="galPage">
      {/* Main */}
      <main className="galMain">
        {/* Top heading row */}
        <div className="galTopRow">
          <div className="galIntro">
            <h2 className="galTitle">Life at IITSF</h2>
            <p className="galSubtitle">
              Experience the vibrant campus culture, focused learning environment, and the moments
              that define our journey towards excellence at IIT Study Forum.
            </p>
          </div>

          <div className="galSwitch">
            <button
              className={`galSwitchBtn${tab === "photos" ? " galSwitchBtnActive" : ""}`}
              type="button"
              onClick={() => setTab("photos")}
            >
              Photos
              {tab === "photos" ? <span className="galSwitchUnderline" /> : null}
            </button>
            <button
              className={`galSwitchBtn${tab === "videos" ? " galSwitchBtnActive" : ""}`}
              type="button"
              onClick={() => setTab("videos")}
            >
              Videos
              {tab === "videos" ? <span className="galSwitchUnderline" /> : null}
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div className="galPills">
          <button
            className={`galPill${category === "All" ? " galPillActive" : ""}`}
            type="button"
            onClick={() => setCategory("All")}
          >
            All
          </button>
          <button
            className={`galPill${category === "Lectures" ? " galPillActive" : ""}`}
            type="button"
            onClick={() => setCategory("Lectures")}
          >
            Lectures
          </button>
          <button
            className={`galPill${category === "Events" ? " galPillActive" : ""}`}
            type="button"
            onClick={() => setCategory("Events")}
          >
            Events
          </button>
          <button
            className={`galPill${category === "Results" ? " galPillActive" : ""}`}
            type="button"
            onClick={() => setCategory("Results")}
          >
            Results
          </button>
        </div>

        {showTestimonialsResults ? (
          <section className="galResultsMatch">
            <div className="ssResultBlock">
              <div className="ssResultBlockHead">
                <h3 className="ssResultBlockTitle">JEE Main Results</h3>
                <p className="ssResultBlockSub">Percentile achievers</p>
              </div>
              <div className="ssHallGrid">
                {mainRows.map((row, rowIndex) => (
                  <div
                    className={`ssResultRow ${rowIndex % 2 === 0 ? "ssRowLtr" : "ssRowRtl"}`}
                    key={`gallery-main-row-${rowIndex}`}
                  >
                    {row.map((result, index) => (
                      <article
                        className="ssHallCard ssResultCard"
                        key={`gallery-main-${result.name}-${result.value}-${rowIndex}-${index}`}
                      >
                        <div className="ssResultAvatarWrap">
                          <img className="ssResultImage" src={result.img} alt={`${result.name} result`} />
                        </div>
                        <div className="ssResultStripe">
                          <span className="ssResultMetricValue">{result.value}</span>
                          <span className="ssResultMetricSuffix">%ile</span>
                        </div>
                        <p className="ssResultNamePlate">{result.name}</p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="ssResultBlock">
              <div className="ssResultBlockHead">
                <h3 className="ssResultBlockTitle">JEE Advanced Results</h3>
                <p className="ssResultBlockSub">AIR rank holders</p>
              </div>
              <div className="ssHallGrid">
                {advancedRows.map((row, rowIndex) => (
                  <div
                    className={`ssResultRow ${rowIndex % 2 === 0 ? "ssRowRtl" : "ssRowLtr"}`}
                    key={`gallery-advanced-row-${rowIndex}`}
                  >
                    {row.map((result, index) => (
                      <article
                        className="ssHallCard ssResultCard"
                        key={`gallery-adv-${result.name}-${result.value}-${rowIndex}-${index}`}
                      >
                        <div className="ssResultAvatarWrap">
                          <img className="ssResultImage" src={result.img} alt={`${result.name} result`} />
                        </div>
                        <div className="ssResultStripe">
                          <span className="ssResultMetricValue">AIR {result.value}</span>
                        </div>
                        <p className="ssResultNamePlate">{result.name}</p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Grid */}
            <section className="galGrid">
              {visibleItems.map((item) => {
                const imageSrc = item.image;
                const className = getCardClassName(item);
                if (item.video) {
                  const embedUrl = toYouTubeEmbedUrl(item.video);
                  return (
                    <article className={className} key={item.id}>
                      {embedUrl ? (
                        <iframe
                          className="galVideoFrame"
                          src={embedUrl}
                          title={item.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <a className="galVideoLinkFallback" href={item.video} target="_blank" rel="noreferrer">
                          <img className="galImg" alt={item.title} src={imageSrc} />
                        </a>
                      )}
                    </article>
                  );
                }

                if (item.size === "large") {
                  return (
                    <article className={className} key={item.id}>
                      <img className="galImg" alt={item.title} src={imageSrc} />
                      <div className="galBigOverlay" />
                      <div className="galBigContent">
                        <span className="galTag galTagRed">{item.category}</span>
                        <h3 className="galBigTitle">{item.title}</h3>
                        <p className="galBigText">{item.description}</p>
                      </div>
                    </article>
                  );
                }

                return (
                  <article className={className} key={item.id}>
                    <img className="galImg" alt={item.title} src={imageSrc} />
                    <div className="galHoverOverlay" />
                    <div className="galHoverText">
                      <p className="galHoverTitle">{item.title}</p>
                      <p className="galHoverSub">{item.category}</p>
                    </div>
                  </article>
                );
              })}
            </section>

            {/* Load More */}
            <div className="galLoadMoreWrap">
              <button className="galLoadMoreBtn" type="button">
                <span>Load More</span>
                <span className="material-symbols-outlined galLoadMoreIcon">expand_more</span>
              </button>
            </div>
          </>
        )}
      </main>

    </div>
  );
};

export default GalleryPage;
