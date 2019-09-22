import React from "react"
import cardStyles from "./Card.module.css"

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={cardStyles.card}>
        <header className={cardStyles.header}>
          <h1>Daniil Grigoryev</h1>
        </header>
        <section className={cardStyles.section}>
          <h3>Front-end developer</h3>
          {/* <h4>Front-end developer | Smart medicina</h4> */}
          <p>
            Glad to see you on my profile! During my web-development experience
            (3.6+ years), I graduated IT-college and worked in different
            professional teams. Now I use my education at the University and
            develop my professional skills as a front-end developer. I follow to
            Full-stack way in my career.
          </p>
          <p>
            Mainly I'm focusing on Reac.js development now. By working as a
            front-end developer, I have advanced knowledge in HTML & CSS (with
            valid and semantic microformat markup, cutting-edge HTML5 and CSS3
            features), confident knowledge in JavaScript (ES6/Babel) and MVC
            Frameworks(mostly vue.js) with UI Toolkit – iView and Element
          </p>
          <p>
            On my last job experience, I wrote much code in JavaScript the chats
            & bots on WebSocket and the Ajax queries, I also developed Web
            Applications in Angular 1.5. For automating my development workflow
            I use task runners - «webpack», pkg-mng. «npm/yarn», in the starter
            kit with «PostCSS/SugarSS with Stylus/SCSS» and the language
            «Pug(Jade)».
          </p>
          <p>
            I'm hardworking and responsible person, especially with deadline. If
            happens the «force majeure situations» I'm always warning in advance
            and go to compromises.
          </p>
          My list of skills:
          <ul>
            <li>Vue.js/-router</li>
            <li>React.js/Redux</li>
            <li>HTML5, Pug(Jade), Microformats, Twitter Bootstrap</li>
            <li>
              CSS3, BEM/SMACSS, Sass/Stylus, Postcss/SugarSS/CssNext, CSS
              Layout/Grids
            </li>
            <li>
              JavaScript ES6/2017, Ajax/JSON, Node.js, React.js/-router,
              JQuery/-UI
            </li>
            <li>Gulp, Webpack(2.0+), Eslint, Babel, Npm/Yarn</li>
            <li>
              Other tools: Git, Vim, Bash, Trello, Pomodoro Time, Command
              Line/CLI
            </li>
            <li>Main OS that I use: Debian Linux & MacOS </li>
          </ul>
        </section>
        <div className={cardStyles.card}>
          <header className={cardStyles.header}>
            <h2>Employment history</h2>
          </header>
          <section className={cardStyles.section}>
            <div style={{ marginBottom: "20px" }}>
              <h3>Front-end developer | Smart medicina</h3>
              <span className="txt-muted">June 2018 - October 2018</span>
              <p>
                I was developing a medical information service for the company –
                "Medicine", as well a SAS version of MIS for other clinics.
              </p>
            </div>
            <hr></hr>
            <div style={{ marginBottom: "20px" }}>
              <h3>Front-end developer | Simple technology</h3>
              <span className="txt-muted">January 2018 - June 2018</span>
              <p>
                Together with the team developed the project
                <a href="https://guarantpay.com/"> https://guarantpay.com </a>
                Took tasks assigned to me - in jira and executed them. During my
                work I mastered twig + templating system very minimally.
                React.js, also learned how to create animation on svg +
                libraries. Sverstal landing the company
                <a href="http://simple-tech.org/"> http://simple-tech.org </a>
                Increased skills not only in web development, but also in
                teamwork.
              </p>
            </div>
            <hr></hr>
            <div style={{ marginBottom: "20px" }}>
              <h3>Front-end developer | Financial Startup «Bankon24»</h3>
              <span className="txt-muted">November 2016 - July 2017</span>
              <p>
                <a href="https://www.bankon24.ru/">
                  {" "}
                  https://www.bankon24.ru/{" "}
                </a>
                is an electronic financial web-service who collects selects best
                offers on market of financial services, credits, insurance and
                bank guarantees, user can apply an application to different
                banks and microfinance organizations and then to track the route
                on his personal account, so in this way user can work with
                financial services remotely.
              </p>
              <p>
                I developed this web service in this company together with
                programmers, designers, financiers and managers. I created a
                web-based system interface JavaScript/Jquery+UI and Boostrap,
                wrote a lot of HTTP requests for asynchronous content interface
                loading.
              </p>
              <ul>
                <li>
                  Consulted and took lead in fixing inherited code problems
                </li>
                <li>
                  Utilize task runner Gulp to automate tasks—compile, compress,
                  and validate code.
                </li>
                <li>
                  Maintain Git repositories stored in Bitbucket via command
                  line.
                </li>
                <li>Contribute to project development using Atlassian JIRA</li>
                <li>Participate in client calls with project managers </li>
              </ul>
            </div>
            <hr></hr>
            <div style={{ marginBottom: "20px" }}>
              <h3>Front-end developer | Digital agency «DreamHeads»</h3>
              <span className="txt-muted">June 2016 - November 2016</span>
              <p>
                <a href="http://dreamheads.ru/"> http://dreamheads.ru/ </a>
                The differences between this Agency and another was that Digital
                Agencey haven't working on creation of UX/UX design, they were
                developing non-typical projects only from the client's design in
                a small team with professional programmers and clients managers.
              </p>
              <p>
                Every Monday I was receiving tasks technical specification of a
                new project from my manager (sometimes in a foreign languages
                which i don't know). Then i was organizing my team of
                programmers, usually i needed one back-end developer, but in
                rare cases I could find programmers on the freelance.
              </p>
              <ul>
                <li>
                  Utilize task runner Gulp with PostCSS to automate
                  tasks—compile, compress, and validate code.
                </li>
                <li>Manage Git repositories via command line</li>
                <li>
                  Maintain multiple projects across several Bitbucket
                  repositories
                </li>
                <li>
                  Develop responsive email compatible across all popular email
                  clients
                </li>
                <li>
                  Enforce quality control with cross-browser, cross-device
                  compatibility checks
                </li>
                <li>
                  Consulted and took lead in fixing inherited code problems
                </li>
              </ul>
            </div>
            <hr></hr>
            <div style={{ marginBottom: "20px" }}>
              <h3>Front-end developer | Financial Startup «Bankon24»</h3>
              <span className="txt-muted">November 2016 - July 2017</span>
              <p>
                <a href="https://www.bankon24.ru/">https://www.bankon24.ru/ </a>
                is an electronic financial web-service who collects selects best
                offers on market of financial services, credits, insurance and
                bank guarantees, user can apply an application to different
                banks and microfinance organizations and then to track the route
                on his personal account, so in this way user can work with
                financial services remotely.
              </p>
              <p>
                I developed this web service in this company together with
                programmers, designers, financiers and managers. I created a
                web-based system interface JavaScript/Jquery+UI and Boostrap,
                wrote a lot of HTTP requests for asynchronous content interface
                loading.
              </p>
              <ul>
                <li>
                  Consulted and took lead in fixing inherited code problems
                </li>
                <li>
                  Utilize task runner Gulp to automate tasks—compile, compress,
                  and validate code.
                </li>
                <li>
                  Maintain Git repositories stored in Bitbucket via command
                  line.
                </li>
                <li>Contribute to project development using Atlassian JIRA</li>
                <li>Participate in client calls with project managers </li>
              </ul>
            </div>
            <hr></hr>
            <div style={{ marginBottom: "20px" }}>
              <h3>Web-developer | Startup Agency «CROSSP»</h3>
              <span className="txt-muted">February 2015 - January 2016</span>
              <p>
                <a href="https://www.crossp.com/"> https://www.crossp.com/ </a>
                When Startup Agency «CROSSP» started operation, I worked closely
                with designers and I shared my ideas and thoughts concerning the
                project. Moreover, I was looking for other developers who could
                help us in future, also I was the only one web-developer and in
                fact I was on a position of Technical Director.
              </p>
              <p>Our team consisted of:</p>
              <ul>
                <li>CEO also the Graphic Designer;</li>
                <li>UI/UX designer;</li>
                <li>Company partner;</li>
                <li>Me as Technical Director and a project developer.</li>
              </ul>
              <p>
                For a short period of time we developed two projects
                <a href="http://stickermat.com"> http://stickermat.com </a> and
                <a href="babushka.com">babushka.com</a> (which was later renamed
                to <a href="https://egrp365.ru/">https://egrp365.ru/</a>).
              </p>
              <ul>
                <li>
                  Work on projects with teams locally and in other worldwide.
                </li>
                <li>
                  Utilize task runner Gulp with PostCSS to automate
                  tasks—compile, compress, and validate code.
                </li>
                <li>
                  Maintain Git repositories stored in Bitbucket via command
                  line.
                </li>
                <li>Extract design assets with Photoshop and Illustrator</li>
                <li>
                  Consulted and took lead in fixing inherited code problems
                </li>
                <li>Used task–manager Trello</li>
              </ul>
            </div>
            <hr></hr>
            <div style={{ marginBottom: "20px" }}>
              <h3>HTML/CSS developer | Design Studio «Luxury Design Moscow»</h3>
              <span className="txt-muted">June 2014 - February 2015</span>
              <p>
                <a href="http://www.luxdesignmoscow.ru/">
                  http://www.luxdesignmoscow.ru/
                </a>
                This was my first full-time job which i've got when i was 16
                years old. At that time, I worked part-time on freelance and of
                course I hadn't enough work experience and huge projects in my
                portfolio. But any way i passed an interview for the position on
                «HTML/CSS developer».
              </p>
              <p>
                Usually the workflow was to get PSD files from Italian UX/UI
                designer who worked in that company and then I was developing
                user interface on the HTML5, CSS and JavaScript/Jquery in
                accordance with design, trying to make everything is pixel
                perfect. During my work experience i extract design assets with
                Photoshop and Illustrator.
              </p>
              <p>
                After the performed scope of work I applied to the CMS (
                <a href="http://www.lattenoir.org/">
                  http://www.lattenoir.org/
                </a>
                ) architecture(my boss at that time), he told me how to
                integrate HTML markups in CMS and do it properly. So far as CMS
                was at the design stage, I also was busy with the writing of
                documentation, specifications and starter guide for new
                developers.
              </p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Card
