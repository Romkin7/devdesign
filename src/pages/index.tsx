import React from "react";
import { IServiceCardProps } from "../@types/declarations";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import {
  heroBannerMainData,
  heroBannerMainPicture,
} from "../utils/heroBannerData";
import { indexPageSEO } from "../utils/profileProjects";
import { services } from "../utils/services";

const App = () => {
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerMainData;
  return (
    <Layout>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={subTitle}
        paragraphs={paragraphs}
        buttonText={buttonText}
        heroBannerImage={heroBannerMainPicture}
      />
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Our Services</h3>
            </div>
            {services.map((service: IServiceCardProps) => {
              return (
                <div key={service.id} className="col-6 col-md-3">
                  <ServiceCard
                    href={service.href}
                    title={service.title}
                    alt={service.alt}
                    src={service.src}
                    sources={service.sources}
                    description={service.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-10">
              <h3>DevDesign offers SEO (Search engine optimisation) service</h3>
              <article className="flexSection">
                <Picture
                  alt={indexPageSEO.alt}
                  sources={indexPageSEO.sources}
                  src={indexPageSEO.src}
                />
                <p>
                  Hakukoneoptimoinnin teht??v?? on parantaa n??kyvyytt??
                  hakukoneissa, tekem??ll?? toimenpiteit??, joilla pyrit????n
                  parantamaan verkkosivuston sijoitusta Googlen luonnollisissa
                  hakutuloksissa tiettyj?? hakusanoja k??ytett??ess??. Suomalaiset
                  hakevat Googlessa jopa yli 30 miljoonaa kertaa p??ivitt??in -
                  n??in ollen hakukoneista saatujen asiakkaiden m????r?? on eritt??in
                  suuri! Tietoa etsit????n usein tarpeen, tuotteen tai palvelun
                  nimell??.
                </p>
              </article>
              <p>
                Hakukoneoptimoinnilla varmistat, ett?? yrityksesi kotisivut
                l??ytyv??t hakutuloksista silloin, kun juuri sinun toimialasi
                tuotteita ja palveluja etsit????n sek?? voit saavuttaa
                mahdollisimman hyv??n n??kyvyyden luonnollisissa hakutuloksissa
                juuri sinun toimialasi kannalta t??rkeimmill?? hakutermeill??.
              </p>
              <p>
                DevDesign tarjoaa SEO-palvelut r????t??l??ityn?? juuri teid??n tarpeen
                mukaan. Varmista Sivujesi n??kyvyys jo t??n????n pyyt??m??ll?? juuri
                sinun yrityksellesi sopiva tarjous.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
