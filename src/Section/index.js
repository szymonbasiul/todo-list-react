import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <h2 className="section__header">
      {title}
      {extraHeaderContent}
    </h2>
    {body}
  </section>
);

export default Section;
