const callHref = "https://calendly.com/planretire/gettoknow";
const callLabel = "Schedule a Getting Acquainted Call";

const Button = ({ light = false }: { light?: boolean }) => (
  <a className={`button${light ? " buttonLight" : ""}`} href={callHref}>
    {callLabel} <span aria-hidden="true">↗</span>
  </a>
);

export default function Home() {
  return (
    <main>
      <style>{`
        :root { --ink:#173f3a; --paper:#f5f0e6; --blue:#325f75; --gold:#c8963f; --rust:#b85f3f; --line:rgba(23,63,58,.2); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; color:var(--ink); background:var(--paper); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        img { display:block; width:100%; }
        .shell { width:min(1180px, calc(100% - 48px)); margin:auto; }
        .nav { min-height:88px; display:flex; align-items:center; justify-content:space-between; gap:30px; border-bottom:1px solid var(--line); }
        .logo { width:230px; height:55px; object-fit:contain; object-position:left center; }
        .navLinks { display:flex; align-items:center; gap:28px; font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
        .navLinks a { text-decoration:none; }
        .button { display:inline-flex; align-items:center; justify-content:center; gap:16px; padding:16px 21px; color:white; background:var(--rust); border:1px solid var(--rust); font-size:12px; font-weight:800; letter-spacing:.06em; line-height:1.2; text-decoration:none; text-transform:uppercase; transition:.2s ease; }
        .button:hover { background:#98472f; transform:translateY(-2px); }
        .buttonLight { color:var(--ink); background:var(--paper); border-color:var(--paper); }
        .hero { display:grid; grid-template-columns:1.03fr .97fr; min-height:690px; }
        .heroCopy { display:flex; flex-direction:column; align-items:flex-start; justify-content:center; padding:80px max(7vw, 48px); background:var(--ink); color:white; }
        .eyebrow { margin:0 0 22px; color:var(--gold); font-size:12px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        h1,h2,h3,p { margin-top:0; }
        h1,h2,h3 { font-family:Georgia, 'Times New Roman', serif; font-weight:400; }
        h1 { max-width:700px; margin-bottom:28px; font-size:clamp(48px,6vw,84px); letter-spacing:-.045em; line-height:.96; }
        .heroCopy > p:not(.eyebrow) { max-width:610px; margin-bottom:34px; color:#d9e4df; font-size:18px; line-height:1.65; }
        .heroMedia { position:relative; min-height:520px; overflow:hidden; }
        .heroMedia img { height:100%; object-fit:cover; }
        .heroNote { position:absolute; right:28px; bottom:28px; width:190px; padding:20px; background:var(--paper); box-shadow:0 12px 35px rgba(0,0,0,.18); font-family:Georgia, serif; font-size:18px; line-height:1.3; }
        .heroNote b { display:block; margin-bottom:7px; color:var(--rust); font:800 10px Arial; letter-spacing:.13em; text-transform:uppercase; }
        .trustBar { display:grid; grid-template-columns:repeat(3,1fr); border-bottom:1px solid var(--line); }
        .trustBar div { padding:25px 32px; text-align:center; font-size:12px; font-weight:800; letter-spacing:.09em; text-transform:uppercase; }
        .trustBar div + div { border-left:1px solid var(--line); }
        .section { padding:120px 0; }
        .split { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:8vw; }
        .sectionImage { position:relative; }
        .sectionImage img { height:590px; object-fit:cover; }
        .sectionImage:before { content:''; position:absolute; z-index:-1; top:-22px; left:-22px; width:45%; height:45%; background:var(--gold); }
        .sectionCopy { max-width:530px; }
        h2 { margin-bottom:24px; font-size:clamp(39px,5vw,66px); letter-spacing:-.04em; line-height:1.02; }
        .lead { color:#42605c; font-size:18px; line-height:1.7; }
        .proofList { margin:35px 0 38px; padding:0; list-style:none; border-top:1px solid var(--line); }
        .proofList li { display:grid; grid-template-columns:38px 1fr; gap:10px; padding:17px 0; border-bottom:1px solid var(--line); font-size:14px; line-height:1.5; }
        .proofList span { color:var(--rust); font-weight:900; }
        .proofBand { background:var(--blue); color:white; }
        .proofBand .lead { color:#d7e6ec; }
        .proofBand .sectionImage:before { background:var(--rust); left:auto; right:-22px; }
        .stamp { display:inline-block; margin-top:12px; padding:11px 15px; border:1px solid rgba(255,255,255,.42); color:#fff; font-size:11px; font-weight:800; letter-spacing:.11em; text-transform:uppercase; }
        .services { background:#e7dfd1; }
        .servicesHead { display:grid; grid-template-columns:1.2fr .8fr; align-items:end; gap:60px; margin-bottom:55px; }
        .servicesHead .lead { padding-bottom:7px; }
        .cards { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .card { min-height:410px; padding:32px; background:var(--paper); border-top:5px solid var(--gold); display:flex; flex-direction:column; }
        .card img { width:74px; height:74px; margin-bottom:48px; object-fit:contain; }
        .card h3 { margin-bottom:14px; font-size:30px; }
        .card p { color:#526965; line-height:1.65; }
        .card small { margin-top:auto; padding-top:24px; border-top:1px solid var(--line); font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        .process { display:grid; grid-template-columns:.8fr 1.2fr; }
        .processMedia { min-height:740px; }
        .processMedia img { height:100%; object-fit:cover; }
        .processCopy { padding:100px max(7vw,55px); color:white; background:var(--rust); }
        .processCopy .eyebrow { color:#f5d99d; }
        .steps { margin-top:40px; }
        .step { display:grid; grid-template-columns:45px 1fr; gap:18px; padding:17px 0; border-top:1px solid rgba(255,255,255,.3); }
        .step strong { font-family:Georgia, serif; font-size:24px; font-weight:400; }
        .step b { display:block; margin-bottom:5px; }
        .step span { color:#f2ddd5; font-size:14px; line-height:1.5; }
        .faqGrid { display:grid; grid-template-columns:1fr 1fr; gap:8vw; align-items:start; }
        .faqPhoto { position:sticky; top:30px; }
        .faqPhoto img { height:620px; object-fit:cover; }
        details { padding:24px 0; border-top:1px solid var(--line); }
        details:last-child { border-bottom:1px solid var(--line); }
        summary { cursor:pointer; list-style:none; display:flex; justify-content:space-between; gap:20px; font:400 22px Georgia,serif; }
        summary:after { content:'+'; color:var(--rust); font:24px Arial; }
        details[open] summary:after { content:'–'; }
        details p { margin:18px 40px 0 0; color:#526965; line-height:1.65; }
        .finalCta { display:grid; grid-template-columns:1fr 1fr; background:var(--ink); color:white; }
        .finalCta img { height:520px; object-fit:cover; }
        .finalCopy { display:flex; flex-direction:column; align-items:flex-start; justify-content:center; padding:70px max(6vw,45px); }
        .finalCopy p:not(.eyebrow) { color:#d9e4df; font-size:17px; line-height:1.65; }
        footer { padding:52px 0; color:#d9e4df; background:#102d29; font-size:12px; line-height:1.8; }
        .footerGrid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:50px; }
        footer strong { display:block; margin-bottom:8px; color:white; letter-spacing:.08em; text-transform:uppercase; }
        footer p { margin:0; }
        @media (max-width:850px) {
          .shell { width:min(100% - 32px, 620px); }
          .nav { min-height:74px; }
          .logo { width:175px; }
          .navLinks a:not(.button) { display:none; }
          .navLinks .button { padding:12px; font-size:10px; }
          .hero,.split,.servicesHead,.process,.faqGrid,.finalCta { grid-template-columns:1fr; }
          .heroCopy { padding:75px 24px; }
          .heroMedia { min-height:480px; }
          .trustBar { grid-template-columns:1fr; }
          .trustBar div + div { border-left:0; border-top:1px solid var(--line); }
          .section { padding:80px 0; }
          .sectionImage img { height:430px; }
          .split { gap:55px; }
          .proofBand .sectionImage { order:2; }
          .cards { grid-template-columns:1fr; }
          .card { min-height:340px; }
          .processMedia { min-height:450px; }
          .processCopy { padding:75px 25px; }
          .faqGrid { gap:55px; }
          .faqPhoto { position:static; }
          .faqPhoto img { height:420px; }
          .finalCta img { height:390px; }
          .footerGrid { grid-template-columns:1fr; gap:30px; }
        }
      `}</style>

      <nav className="shell nav" aria-label="Main navigation">
        <a href="#top" aria-label="GW Financial home">
          <img className="logo" src="/images/gw-college-planning-horizontal-2--dca8a5117b.png" alt="GW Financial, Inc." />
        </a>
        <div className="navLinks">
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#faq">Questions</a>
          <Button />
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Reno–Tahoe wealth management</p>
          <h1>One plan for the life you’re building.</h1>
          <p>
            Coordinate college costs, retirement income, investments, and taxes with an
            independent advisor who sees the whole financial picture.
          </p>
          <Button light />
        </div>
        <div className="heroMedia">
          <img src="/images/midaged-couple-sailing-and-smiling-d0adebb3be.png" alt="Couple sailing into retirement" />
          <div className="heroNote"><b>Plan both horizons</b>Help your family move forward without putting your own future on hold.</div>
        </div>
      </header>

      <aside className="trustBar" aria-label="Firm highlights">
        <div>Independent &amp; fee-only</div>
        <div>Fiduciary advice</div>
        <div>Serving Reno–Tahoe families</div>
      </aside>

      <section className="section" id="approach">
        <div className="shell split">
          <div className="sectionImage">
            <img src="/images/parents-helping-son-move-365ef8067a.jpg" alt="Parents helping their son move" />
          </div>
          <div className="sectionCopy">
            <p className="eyebrow">Connected decisions, considered together</p>
            <h2>College dreams shouldn’t derail retirement.</h2>
            <p className="lead">
              The best answer is rarely found in one account. We connect education funding,
              financial aid, cash flow, tax strategy, and retirement projections in one roadmap.
            </p>
            <ul className="proofList">
              <li><span>01</span>Education expense forecasting, budgeting, and funding</li>
              <li><span>02</span>Financial aid, loan, and scholarship planning</li>
              <li><span>03</span>Tax-efficient withdrawal and investment strategies</li>
            </ul>
            <Button />
          </div>
        </div>
      </section>

      <section className="section proofBand">
        <div className="shell split">
          <div className="sectionCopy">
            <p className="eyebrow">Credentialed, personal guidance</p>
            <h2>Meet Julie Bray, CFP® professional and CCFS®.</h2>
            <p className="lead">
              GW Financial is led by Julie Bray, a CERTIFIED FINANCIAL PLANNER™ professional
              who also holds the Certified College Funding Specialist™ designation recognized
              by the CFP Board. That dual perspective helps families plan across generations.
            </p>
            <span className="stamp">CFP® professional · CCFS®</span>
          </div>
          <div className="sectionImage">
            <img src="/images/middle-aged-couple-looking-at-computer-screen-9acc7a9ad9.jpg" alt="Couple reviewing their financial plan" />
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <div className="servicesHead">
            <div>
              <p className="eyebrow">A coordinated plan</p>
              <h2>Clarity for today. Capacity for tomorrow.</h2>
            </div>
            <p className="lead">Your financial life is interconnected. Your advice should be, too.</p>
          </div>
          <div className="cards">
            <article className="card">
              <img src="/images/gain-financial-clarity-and-organization-140520c8e7.png" alt="Open book icon" />
              <h3>See the whole picture</h3>
              <p>Bring investments, insurance, cash flow, taxes, education, and estate planning into focus.</p>
              <small>Financial planning</small>
            </article>
            <article className="card">
              <img src="/images/get-strategic-about-college-funding-c11a52e52c.png" alt="College funding icon" />
              <h3>Fund education wisely</h3>
              <p>Model the true cost, evaluate aid and loans, and build a strategy that protects long-term goals.</p>
              <small>College planning</small>
            </article>
            <article className="card">
              <img src="/images/achieve-long-term-financial-well-being-and-autonomy-368d18467b.png" alt="Financial autonomy icon" />
              <h3>Retire with intention</h3>
              <p>Turn savings into a thoughtful income plan while managing risk, taxes, and legacy decisions.</p>
              <small>Retirement planning</small>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div className="sectionImage">
            <img src="/images/fee-only-adv-f5633c5059.png" alt="Comparison of commission, fee-based, and fee-only advice" />
          </div>
          <div className="sectionCopy">
            <p className="eyebrow">Advice designed around you</p>
            <h2>Independent. Fee-only. Fiduciary.</h2>
            <p className="lead">
              GW Financial, Inc. is an independent, fee-only Registered Investment Advisor.
              Clients pay a set fee for advice, and the firm acts under a fiduciary duty to put
              client interests first. Comprehensive services begin at a $7,500 annual fee.
            </p>
            <Button />
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="process-title">
        <div className="processMedia">
          <img src="/images/financial-road--b522a25aeb.jpg" alt="Car traveling along a scenic road" />
        </div>
        <div className="processCopy">
          <p className="eyebrow">A clear route forward</p>
          <h2 id="process-title">Five conversations. One working plan.</h2>
          <div className="steps">
            <div className="step"><strong>01</strong><span><b>Getting Acquainted</b>Share your situation, concerns, and goals.</span></div>
            <div className="step"><strong>02</strong><span><b>Information Gathering</b>Review household accounts and financial documents.</span></div>
            <div className="step"><strong>03</strong><span><b>Goal Setting</b>Prioritize what matters by importance and feasibility.</span></div>
            <div className="step"><strong>04</strong><span><b>Recommendations</b>Evaluate specific options, tradeoffs, and timelines.</span></div>
            <div className="step"><strong>05</strong><span><b>Implementation</b>Take action, set benchmarks, and review regularly.</span></div>
          </div>
        </div>
      </section>

      <section className="section proofBand">
        <div className="shell split">
          <div className="sectionCopy">
            <p className="eyebrow">Professional community</p>
            <h2>Standards backed by respected affiliations.</h2>
            <p className="lead">
              GW Financial maintains memberships with the CFP Board, the National Association
              of Personal Financial Advisors (NAPFA), the Investments &amp; Wealth Institute, and
              the Fee Only Network.
            </p>
            <Button light />
          </div>
          <div className="sectionImage">
            <img src="/images/unsplash-image-heiygqp0tsk-826be4a178.jpg" alt="Financial planning documents and calculator on a desk" />
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="shell faqGrid">
          <div className="faqPhoto">
            <p className="eyebrow">Common questions</p>
            <h2>Start with what’s on your mind.</h2>
            <img src="/images/equal-allocation-blog-i-d5c429ceaa.jpg" alt="Couple enjoying time together at home" />
          </div>
          <div>
            <details open>
              <summary>Who does GW Financial serve?</summary>
              <p>Families in the Reno–Tahoe area navigating retirement, college costs, investment decisions, and the places where those goals overlap.</p>
            </details>
            <details>
              <summary>What does fee-only mean?</summary>
              <p>Clients pay the firm directly for advice. GW Financial is independent and does not rely on commissions for product sales.</p>
            </details>
            <details>
              <summary>What is the minimum fee?</summary>
              <p>Comprehensive wealth management and planning services are available for a minimum annual fee of $7,500.</p>
            </details>
            <details>
              <summary>What happens on the first call?</summary>
              <p>The complimentary, no-obligation call is a chance to share your financial background, current situation, and goals, and decide whether the relationship is a fit.</p>
            </details>
            <details>
              <summary>How is my information managed?</summary>
              <p>The Wheelhouse client portal provides secure document storage, planning tools, portfolio access, and advisor communication using modern encryption and security protocols.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <img src="/images/unsplash-image-376kn_isple-4cb09a5b79.jpg" alt="Clients celebrating progress on their financial plan" />
        <div className="finalCopy">
          <p className="eyebrow">Your next step</p>
          <h2>Let’s connect the dots.</h2>
          <p>Bring your questions. Leave with a clearer sense of what comes next.</p>
          <Button light />
        </div>
      </section>

      <footer>
        <div className="shell footerGrid">
          <div><strong>GW Financial, Inc.</strong><p>Independent, fee-only wealth management and financial planning for Reno–Tahoe families.</p></div>
          <div><strong>Contact</strong><p>714-850-0534<br />contact@planretire.com<br />5470 Kietzke Lane, #300, Reno, NV 89511</p></div>
          <div><strong>Important information</strong><p>GW Financial, Inc. is a Registered Investment Advisor. Information on this site is intended for U.S. residents only. CFP® certification is granted by CFP Board.</p></div>
        </div>
      </footer>
    </main>
  );
}
