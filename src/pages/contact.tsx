import React, { FC } from "react";
import { ITeamMember } from "../@types/declarations";
import ContactForm from "../components/Contactform/ContactForm";
import ContactInformation from "../components/ContactInformation/ContactInformation";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { TeamMembers } from "../utils/contactInformation";
import {
  heroBannerContactData,
  heroBannerContactPicture,
} from "../utils/heroBannerData";

const Contact: FC = () => {
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerContactData;
  return (
    <Layout>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={subTitle}
        paragraphs={paragraphs}
        buttonText={buttonText}
        heroBannerImage={heroBannerContactPicture}
      />
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Our Team</h3>
            </div>
            {TeamMembers.map((member: ITeamMember) => {
              return (
                <div className="col-12 col-md-4" key={member.avatar.src}>
                  <Picture
                    src={member.avatar.src}
                    alt={member.avatar.alt}
                    sources={member.avatar.sources}
                  />
                  <div>
                    <h4>{member.information.jobTitle}</h4>
                    <p>{member.information.name}</p>
                    <p>{member.information.experience}</p>
                  </div>
                </div>
              );
            })}
            <h3>Follow us</h3>
            <SocialLinks />
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h3>Contact us</h3>
            </div>
            <div className="col-md-6 flexCol">
              <ContactInformation />
              <p>
                We'll get you there with best possible solution, based on your
                requrements and needs.
              </p>
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
