import React from 'react';

const About = () => {
  return (
    <>
      <div className="about-container ">
        <section className="introduction">
          <h2>What is Diabetes Mellitus?</h2>
          <p>
            Diabetes mellitus, commonly known as diabetes, is a chronic metabolic disorder characterized by elevated levels of glucose (sugar) in the blood. This condition results from the body's inability to properly produce or use insulin, a hormone essential for glucose regulation. Glucose is a primary energy source for the body, and insulin, produced by the pancreas, facilitates its uptake by cells.
          </p>
        </section>

        <section className="types-of-diabetes">
          <h2>Types of Diabetes</h2>
          <h3>Type 1 Diabetes</h3>
          <ul>
            <li><strong>Cause:</strong> An autoimmune condition where the body’s immune system attacks insulin-producing beta cells in the pancreas.</li>
            <li><strong>Mechanism:</strong> Little to no insulin is produced, leading to high blood glucose levels.</li>
            <li><strong>Onset:</strong> Often diagnosed in children or young adults.</li>
            <li><strong>Management:</strong> Requires lifelong insulin therapy.</li>
          </ul>
          <h3>Type 2 Diabetes</h3>
          <ul>
            <li><strong>Cause:</strong> Characterized by insulin resistance, often due to lifestyle factors.</li>
            <li><strong>Mechanism:</strong> Cells become resistant to insulin, causing elevated blood glucose levels.</li>
            <li><strong>Onset:</strong> Common in adults, but increasingly seen in younger individuals.</li>
            <li><strong>Management:</strong> Lifestyle changes, medication, and sometimes insulin therapy.</li>
          </ul>
          <h3>Gestational Diabetes</h3>
          <ul>
            <li><strong>Cause:</strong> Occurs during pregnancy due to hormonal changes causing insulin resistance.</li>
            <li><strong>Management:</strong> Managed with diet, exercise, and sometimes insulin.</li>
          </ul>
        </section>

        <section className="pathophysiology">
          <h2>Pathophysiology of Diabetes</h2>
          <p>
            Diabetes affects insulin and glucose regulation. In a healthy body, the pancreas releases insulin when blood glucose rises, enabling cells to absorb glucose for energy. In diabetes, this process is disrupted, leading to hyperglycemia, or high blood sugar.
          </p>
          <p>
            Persistent hyperglycemia can damage blood vessels and nerves, increasing the risk of complications like neuropathy, retinopathy, and cardiovascular disease.
          </p>
        </section>

        <section className="diabetes-scenario">
          <h2>Diabetes: Global and Indian Scenario</h2>
          <h3>Global Scenario</h3>
          <ul>
            <li><strong>Prevalence:</strong> Over 537 million adults globally have diabetes, expected to rise to 783 million by 2045.</li>
            <li><strong>Type 2 Diabetes:</strong> Represents about 90-95% of cases, often linked to lifestyle factors.</li>
            <li><strong>Economic Burden:</strong> In 2021, diabetes-related healthcare costs exceeded USD 966 billion worldwide.</li>
          </ul>
          <h3>India’s Scenario</h3>
          <ul>
            <li><strong>High Prevalence:</strong> India has over 77 million adults with diabetes, projected to exceed 100 million by 2030.</li>
            <li><strong>Youth at Risk:</strong> More young adults are developing Type 2 diabetes due to lifestyle changes.</li>
            <li><strong>Government Initiatives:</strong> Programs like NPCDCS aim to increase screening and treatment access.</li>
          </ul>
        </section>

        <section className="contributing-factors">
          <h2>Contributing Factors to Diabetes</h2>
          <ul>
            <li><strong>Lifestyle Changes:</strong> Poor diet, physical inactivity, and stress are major risk factors.</li>
            <li><strong>Aging Population:</strong> Longer life expectancy contributes to increased diabetes prevalence.</li>
            <li><strong>Genetic Susceptibility:</strong> Certain ethnic groups, including South Asians, have a higher genetic predisposition to diabetes.</li>
          </ul>
        </section>

        <section className="prevention-research">
          <h2>Prevention, Research, and Scientific Advances</h2>
          <p>
            Maintaining a balanced diet, regular exercise, and healthy weight significantly reduce the risk of diabetes. Advanced treatments include continuous glucose monitoring, artificial pancreas systems, and research into beta-cell regeneration and gene therapy. Predictive algorithms and AI are also being developed for early diagnosis and personalized treatment.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
