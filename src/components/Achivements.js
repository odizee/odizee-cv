const Achivements = () => {
  return (
    <div className="achievement">
      <div className="experience">
        <h2>Experience</h2>
        <hr />
        <div className="experience__wordpress">
          <h4>February 2019 - Present</h4>
          <h3>Freelance Wordpress Developer</h3>
          <ul>
            <li>Created pages for clients using wordpress</li>
            <li>
              I made use of Elementor in delivering most jobs but also used
              WpBakery.
            </li>
            <li>Built responsive websites.</li>
            <li>Used custom CSS where it was needed.</li>
            <li>Optimized website for speed.</li>
          </ul>
        </div>
        <div className="experience__hngi">
          <h4>August 2021 – October 2021</h4>
          <h3>frontend developer (react) – HNGi8 (Zuri chat)</h3>
          <ul>
            <li>Created react pages and components.</li>
            <li>
              Worked with different teams to achieve overall organization goal
            </li>
            <li>
              Worked with micro frontend technologies to achieve a plugin based
              product.
            </li>
            <li>Worked with Real Time Communications.</li>
          </ul>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <hr />
        <div className="education__uniben">
          <h4>2017</h4>
          <p>
            Bachelor of Education, Banking and finance (Second class Upper) –
            University of benin
          </p>
        </div>
        <div className="education__zuri">
          <h4>2021</h4>
          <p>Php/laravel - Zuri training</p>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
