import security from "../assets/security.svg";

const Security = () => {
  return (
    <section className="center sectionPadding grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start gap-4">
          <span className="sectionBadge">Security</span>
          <h2 className="sectionTitle">
            AI Cybersecurity <br /> built to protect your data
          </h2>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="sectionSubtitle">
            Equip your organization with the tools and intelligence to
            anticipate threats, manage vulnerabilities, and protect your cloud,
            endpoint, and identity.
          </p>
          <button className="buttonGreen">Explore more</button>
        </div>
      </div>
      <div className="rounded-4xl bg-light-green/50 p-8 flex items-center justify-center w-full">
        <img
          className="w-full h-auto object-contain"
          src={security}
          alt="Security section image"
        />
      </div>
    </section>
  );
};

export default Security;
