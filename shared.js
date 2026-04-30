/*!
 * CalcWise — shared.js  v3.1
 * Injects: nav, footer, privacy/disclaimer modals, global search
 * Drop this file at site root. Each page includes:
 *   <script src="shared.js"></script>          (root pages)
 *   <script src="../shared.js"></script>        (calculator subpages)
 */
(function () {
  'use strict';

  /* ── SVG flag components (no emoji = no broken icons) ── */
  var FLAG_US = '<svg width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg" style="border-radius:2px;flex-shrink:0">'
    + '<rect width="18" height="13" fill="#B22234"/>'
    + '<rect y="1" width="18" height="1" fill="#fff"/><rect y="3" width="18" height="1" fill="#fff"/>'
    + '<rect y="5" width="18" height="1" fill="#fff"/><rect y="7" width="18" height="1" fill="#fff"/>'
    + '<rect y="9" width="18" height="1" fill="#fff"/><rect y="11" width="18" height="1" fill="#fff"/>'
    + '<rect width="7" height="7" fill="#3C3B6E"/>'
    + '<text x="0.5" y="6" font-size="4.5" fill="#fff" font-family="Arial">★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★</text>'
    + '</svg>';

  var FLAG_CA = '<svg width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg" style="border-radius:2px;flex-shrink:0">'
    + '<rect width="18" height="13" fill="#fff"/>'
    + '<rect width="4.5" height="13" fill="#D52B1E"/>'
    + '<rect x="13.5" width="4.5" height="13" fill="#D52B1E"/>'
    + '<path d="M9 2.5L9.6 4.5H11.5L10 5.8L10.6 7.8L9 6.5L7.4 7.8L8 5.8L6.5 4.5H8.4Z" fill="#D52B1E"/>'
    + '</svg>';

  /* ── All 39 calculators ── */
  var ALL_CALCS = [
    /* Mortgage – 5 */
    { name:'Mortgage Calculator',            url:'mortgage-calculator.html',        cat:'Mortgage',           tags:'mortgage payment amortization home loan monthly' },
    { name:'Mortgage Qualifier',             url:'mortgage-qualifier.html',         cat:'Mortgage',           tags:'qualify afford income mortgage how much' },
    { name:'CMHC Insurance Calculator',      url:'cmhc-mortgage-insurance.html',    cat:'Mortgage',           tags:'cmhc insurance premium canada down payment default' },
    { name:'Rent vs. Buy Calculator',        url:'rent-vs-buy.html',               cat:'Mortgage',           tags:'rent buy house property compare wealth' },
    { name:'Mortgage Refinance Calculator',  url:'mortgage-refinance.html',         cat:'Mortgage',           tags:'refinance mortgage break even savings lower rate' },
    /* Financial Planning – 8 */
    { name:'Net Worth Calculator',           url:'net-worth.html',                  cat:'Financial Planning',  tags:'net worth assets liabilities wealth financial health' },
    { name:'Emergency Fund Calculator',      url:'emergency-fund.html',             tags:'emergency fund savings buffer months expenses',   cat:'Financial Planning' },
    { name:'TFSA Calculator',               url:'tfsa.html',                       cat:'Financial Planning',  tags:'tfsa tax free savings account canada contribution room 7000' },
    { name:'RRSP Savings Calculator',        url:'rrsp-savings.html',               cat:'Financial Planning',  tags:'rrsp savings retirement canada tax refund deduction' },
    { name:'RRSP Loan Calculator',          url:'rrsp-loan.html',                  cat:'Financial Planning',  tags:'rrsp loan borrow interest canada contribution' },
    { name:'Retirement Planning Calculator', url:'retirement-planning.html',        cat:'Financial Planning',  tags:'retirement planning savings gap cpp social security track' },
    { name:'Retirement Withdrawal Calculator', url:'retirement-withdrawal.html',    cat:'Financial Planning',  tags:'retirement withdrawal safe rate 4% savings last how long' },
    { name:'FHSA Calculator',               url:'fhsa.html',                       cat:'Financial Planning',  tags:'fhsa first home savings account canada tax free' },
    /* Investing – 7 */
    { name:'Compound Interest Calculator',   url:'compound-interest.html',          cat:'Investing',           tags:'compound interest growth savings investment double' },
    { name:'ROI Calculator',                url:'roi.html',                        cat:'Investing',           tags:'roi return investment cagr gain loss annual' },
    { name:'Automatic Investment Plan',      url:'auto-investment-plan.html',       cat:'Investing',           tags:'automatic investment dollar cost averaging dca monthly' },
    { name:'Investment Fees Calculator',     url:'investment-fees.html',            cat:'Investing',           tags:'investment fees mer etf mutual fund management expense ratio' },
    { name:'Rule of 72 Calculator',         url:'rule-of-72.html',                 cat:'Investing',           tags:'rule of 72 double money years investment' },
    { name:'Black-Scholes Calculator',       url:'black-scholes.html',              cat:'Investing',           tags:'black scholes options pricing greeks call put delta gamma' },
    { name:'Asset Allocation Calculator',    url:'asset-allocation.html',           cat:'Investing',           tags:'asset allocation stocks bonds cash portfolio risk tolerance' },
    /* Retirement – 7 */
    { name:'F.I.R.E. Calculator',            url:'fire.html',                       cat:'Retirement',          tags:'fire financial independence retire early coast barista monte carlo' },
    { name:'Roth IRA Calculator',           url:'roth-ira.html',                   cat:'Retirement',          tags:'roth ira tax free retirement usa contribution limit' },
    { name:'401(k) Contribution Calculator', url:'401k-contribution.html',          cat:'Retirement',          tags:'401k contribution employer match usa retirement savings' },
    { name:'401(k) Save the Max',           url:'401k-save-max.html',              cat:'Retirement',          tags:'401k max contribution paycheck per period usa limit' },
    { name:'Traditional vs Roth IRA',        url:'ira-comparison.html',             cat:'Retirement',          tags:'ira traditional roth comparison usa tax after-tax' },
    { name:'Annuity Calculator',            url:'annuity.html',                    cat:'Retirement',          tags:'annuity payments present future value ordinary due' },
    { name:'CPP/OAS Estimator',             url:'cpp-oas.html',                    cat:'Retirement',          tags:'cpp oas canada pension plan old age security estimator' },
    /* Loans – 5 */
    { name:'Personal Loan Calculator',       url:'personal-loan.html',              cat:'Loans',               tags:'personal loan payment interest amortization apr' },
    { name:'Car Loan Calculator',           url:'car-loan.html',                   cat:'Loans',               tags:'car auto loan payment interest monthly vehicle' },
    { name:'Simple Interest Calculator',     url:'simple-interest.html',            cat:'Loans',               tags:'simple interest rate principal time period' },
    { name:'Debt Payoff Calculator',        url:'debt-payoff.html',                cat:'Loans',               tags:'debt payoff avalanche snowball credit card loan paydown' },
    { name:'Lease vs Buy Calculator',        url:'lease-vs-buy.html',              cat:'Loans',               tags:'lease buy car vehicle compare total cost' },
    /* Tax & Other – 7 */
    { name:'Income Tax Calculator',         url:'income-tax.html',                 cat:'Other',               tags:'income tax federal provincial state marginal rate 2025' },
    { name:'Salary Calculator',             url:'salary.html',                     cat:'Other',               tags:'salary hourly annual pay take home biweekly' },
    { name:'Sales Tax Calculator',          url:'sales-tax.html',                  cat:'Other',               tags:'sales tax gst hst pst vat calculate total' },
    { name:'Currency Exchange Calculator',   url:'currency-exchange.html',          cat:'Other',               tags:'currency exchange rate usd cad convert foreign' },
    { name:'Vacation Savings Calculator',    url:'vacation-savings.html',           cat:'Other',               tags:'vacation savings travel fund goal how much weekly' },
    { name:'Capital Gains Tax Calculator',   url:'capital-gains-tax.html',          cat:'Other',               tags:'capital gains tax investment property sell profit' },
    { name:'Inflation Calculator',          url:'inflation.html',                  cat:'Other',               tags:'inflation calculator purchasing power cpi real value' },
  ];

  /* ── detect root path ── */
  function root() {
    var p = window.location.pathname;
    if (p.indexOf('/calculators/') !== -1) return '../calculators/';
    return 'calculators/';
  }
  function rootHref() {
    var p = window.location.pathname;
    return p.indexOf('/calculators/') !== -1 ? '../' : '';
  }

  /* ── SVG icon for dd items ── */
  function ddIcon(paths) {
    return '<span class="cw-dd-ic"><svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + paths + '</svg></span>';
  }

  /* ── Build dropdown items ── */
  function ddItems(cats, r) {
    var html = '';
    cats.forEach(function (c) {
      var calc = ALL_CALCS.find(function (x) { return x.name === c; });
      if (!calc) return;
      html += '<a href="' + r + calc.url + '" class="cw-dd-a">'
        + ddIcon('<rect x="2" y="2" width="9" height="9" rx="2" stroke="#C9A84C" stroke-width="1.2"/><path d="M4.5 6.5H8.5M6.5 4.5V8.5" stroke="#C9A84C" stroke-width="1.1" stroke-linecap="round"/>')
        + calc.name + '</a>';
    });
    return html;
  }

  /* ── NAV HTML ── */
  function buildNav(r, rh) {
    return '<nav class="cw-nav" id="cw-nav">'

      /* Logo */
      + '<a href="' + rh + 'index.html" class="cw-logo">CalcWise<span class="cw-logo-dot">.</span><span class="cw-pro">PRO</span></a>'

      /* Links */
      + '<ul class="cw-nl" id="cw-nl">'

      /* Mortgage */
      + '<li><a href="#" class="cw-nl-a">Mortgage'
      + '<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a>'
      + '<div class="cw-drop">'
      + ddItems(['Mortgage Calculator','Mortgage Qualifier','CMHC Insurance Calculator','Rent vs. Buy Calculator','Mortgage Refinance Calculator'], r)
      + '</div></li>'

      /* Financial Planning */
      + '<li><a href="#" class="cw-nl-a">Financial Planning'
      + '<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a>'
      + '<div class="cw-drop">'
      + ddItems(['Net Worth Calculator','Emergency Fund Calculator','TFSA Calculator','RRSP Savings Calculator','RRSP Loan Calculator','FHSA Calculator','Retirement Planning Calculator','Retirement Withdrawal Calculator'], r)
      + '</div></li>'

      /* Investing */
      + '<li><a href="#" class="cw-nl-a">Investing'
      + '<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a>'
      + '<div class="cw-drop">'
      + ddItems(['Compound Interest Calculator','ROI Calculator','Automatic Investment Plan','Investment Fees Calculator','Rule of 72 Calculator','Black-Scholes Calculator','Asset Allocation Calculator'], r)
      + '</div></li>'

      /* Retirement */
      + '<li><a href="#" class="cw-nl-a">Retirement'
      + '<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a>'
      + '<div class="cw-drop">'
      + ddItems(['F.I.R.E. Calculator','Roth IRA Calculator','401(k) Contribution Calculator','401(k) Save the Max','Traditional vs Roth IRA','Annuity Calculator','CPP/OAS Estimator'], r)
      + '</div></li>'

      /* Loans */
      + '<li><a href="#" class="cw-nl-a">Loans'
      + '<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a>'
      + '<div class="cw-drop">'
      + ddItems(['Personal Loan Calculator','Car Loan Calculator','Simple Interest Calculator','Debt Payoff Calculator','Lease vs Buy Calculator'], r)
      + '</div></li>'

      /* Other */
      + '<li><a href="#" class="cw-nl-a">Other'
      + '<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a>'
      + '<div class="cw-drop">'
      + ddItems(['Income Tax Calculator','Salary Calculator','Sales Tax Calculator','Currency Exchange Calculator','Vacation Savings Calculator','Capital Gains Tax Calculator','Inflation Calculator'], r)
      + '</div></li>'

      + '</ul>'

      /* Search */
      + '<div class="cw-nsearch" id="cw-nsearch">'
      + '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="rgba(255,255,255,0.45)" stroke-width="1.3"/><path d="M9.5 9.5L12.5 12.5" stroke="rgba(255,255,255,0.45)" stroke-width="1.3" stroke-linecap="round"/></svg>'
      + '<input type="text" id="cw-nsinp" placeholder="Search calculators..." autocomplete="off"/>'
      + '<div class="cw-nsdrop" id="cw-nsdrop"></div>'
      + '</div>'

      /* CTA */
      + '<a href="' + rh + 'index.html" class="cw-ncta">All Calculators</a>'

      /* Hamburger */
      + '<button class="cw-burger" id="cw-burger" aria-label="Menu"><span></span><span></span><span></span></button>'

      + '</nav>';
  }

  /* ── FOOTER HTML ── */
  function buildFooter(r, rh) {
    return '<footer class="cw-ft">'
      + '<div class="cw-ft-top">'
      /* brand */
      + '<div class="cw-ft-brand">'
      + '<div class="cw-ft-logo">CalcWise<span>.</span></div>'
      + '<p>Free professional financial calculators for USA &amp; Canada. Not financial advice.</p>'
      + '<div class="cw-ft-socials">'
      + '<a href="#" class="cw-ft-social" aria-label="X"><svg viewBox="0 0 15 15" fill="none"><path d="M13.5 2L9 7.5 14 13H10.5L7.5 9.5 4 13H2L7 7.5 2 2H5.5L8.5 5.5 12 2H13.5Z" stroke="rgba(255,255,255,0.4)" stroke-width="1.1" stroke-linejoin="round"/></svg></a>'
      + '<a href="#" class="cw-ft-social" aria-label="Instagram"><svg viewBox="0 0 15 15" fill="none"><rect x="2" y="2" width="11" height="11" rx="3" stroke="rgba(255,255,255,0.4)" stroke-width="1.1"/><circle cx="7.5" cy="7.5" r="2.5" stroke="rgba(255,255,255,0.4)" stroke-width="1.1"/><circle cx="11" cy="4" r=".6" fill="rgba(255,255,255,0.4)"/></svg></a>'
      + '<a href="#" class="cw-ft-social" aria-label="Email"><svg viewBox="0 0 15 15" fill="none"><rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="rgba(255,255,255,0.4)" stroke-width="1.1"/><path d="M1.5 5.5L7.5 9.5L13.5 5.5" stroke="rgba(255,255,255,0.4)" stroke-width="1.1" stroke-linecap="round"/></svg></a>'
      + '</div>'
      + '</div>'
      /* cols */
      + '<div class="cw-ft-col"><div class="cw-ft-ct">Mortgage</div>'
      + '<a href="' + r + 'mortgage-calculator.html">Mortgage Calculator</a>'
      + '<a href="' + r + 'mortgage-qualifier.html">Mortgage Qualifier</a>'
      + '<a href="' + r + 'cmhc-mortgage-insurance.html">CMHC Insurance</a>'
      + '<a href="' + r + 'rent-vs-buy.html">Rent vs. Buy</a>'
      + '<a href="' + r + 'mortgage-refinance.html">Mortgage Refinance</a>'
      + '</div>'
      + '<div class="cw-ft-col"><div class="cw-ft-ct">Planning &amp; Savings</div>'
      + '<a href="' + r + 'net-worth.html">Net Worth</a>'
      + '<a href="' + r + 'emergency-fund.html">Emergency Fund</a>'
      + '<a href="' + r + 'tfsa.html">TFSA Calculator</a>'
      + '<a href="' + r + 'rrsp-savings.html">RRSP Savings</a>'
      + '<a href="' + r + 'rrsp-loan.html">RRSP Loan</a>'
      + '<a href="' + r + 'fhsa.html">FHSA Calculator</a>'
      + '</div>'
      + '<div class="cw-ft-col"><div class="cw-ft-ct">Retirement</div>'
      + '<a href="' + r + 'fire.html">F.I.R.E. Calculator</a>'
      + '<a href="' + r + 'retirement-planning.html">Retirement Planning</a>'
      + '<a href="' + r + 'retirement-withdrawal.html">Retirement Withdrawal</a>'
      + '<a href="' + r + 'roth-ira.html">Roth IRA</a>'
      + '<a href="' + r + '401k-contribution.html">401(k) Calculator</a>'
      + '<a href="' + r + 'cpp-oas.html">CPP/OAS Estimator</a>'
      + '</div>'
      + '<div class="cw-ft-col"><div class="cw-ft-ct">Investing</div>'
      + '<a href="' + r + 'compound-interest.html">Compound Interest</a>'
      + '<a href="' + r + 'roi.html">ROI Calculator</a>'
      + '<a href="' + r + 'investment-fees.html">Investment Fees</a>'
      + '<a href="' + r + 'asset-allocation.html">Asset Allocation</a>'
      + '<a href="' + r + 'black-scholes.html">Black-Scholes</a>'
      + '</div>'
      + '<div class="cw-ft-col"><div class="cw-ft-ct">Tax &amp; Other</div>'
      + '<a href="' + r + 'income-tax.html">Income Tax</a>'
      + '<a href="' + r + 'salary.html">Salary Calculator</a>'
      + '<a href="' + r + 'sales-tax.html">Sales Tax</a>'
      + '<a href="' + r + 'capital-gains-tax.html">Capital Gains Tax</a>'
      + '<a href="' + r + 'currency-exchange.html">Currency Exchange</a>'
      + '<a href="' + r + 'inflation.html">Inflation Calculator</a>'
      + '</div>'
      + '</div>'/* end ft-top */
      + '<div class="cw-ft-bot">'
      + '<span class="cw-ft-copy">© 2025 CalcWise. All rights reserved.</span>'
      + '<div class="cw-ft-legal">'
      + '<button class="cw-ft-lb" onclick="cwModal(\'privacy\')">Privacy Policy</button>'
      + '<span class="cw-ft-sep">·</span>'
      + '<button class="cw-ft-lb" onclick="cwModal(\'disclaimer\')">Disclaimer</button>'
      + '<span class="cw-ft-sep">·</span>'
      + '<span class="cw-ft-copy">Free professional financial calculators for USA &amp; Canada. Not financial advice.</span>'
      + '</div>'
      + '</div>'
      + '</footer>'

      /* MODALS */
      + '<div class="cw-mo" id="cw-mo" onclick="cwModalClose()"></div>'
      + '<div class="cw-md" id="cw-md-privacy">'
      + '<button class="cw-md-x" onclick="cwModalClose()">✕</button>'
      + '<h2>Privacy Policy</h2><p class="cw-md-date">Last updated: January 2025</p>'
      + '<h3>1. Information We Collect</h3><p>CalcWise does not require account registration or collect personal information. All calculations are performed locally in your browser. We do not store, transmit, or share your financial inputs.</p>'
      + '<h3>2. Analytics</h3><p>We may use privacy-respecting analytics (aggregate page view counts only) to understand which calculators are most useful. No personally identifiable information is collected.</p>'
      + '<h3>3. Cookies</h3><p>We use minimal cookies only for essential site functionality such as remembering your country preference (USA or Canada). We do not use tracking or advertising cookies.</p>'
      + '<h3>4. Third-Party Services</h3><p>CalcWise may display contextual affiliate links and advertisements. These third parties have their own privacy policies. We are not responsible for their data practices.</p>'
      + '<h3>5. Data Security</h3><p>Since no personal financial data is transmitted to our servers, your calculation inputs remain entirely private on your own device.</p>'
      + '<h3>6. Children\'s Privacy</h3><p>CalcWise is not directed at children under 13. We do not knowingly collect information from children.</p>'
      + '<h3>7. Contact</h3><p>For privacy-related questions, please contact us through the website contact page.</p>'
      + '</div>'

      + '<div class="cw-md" id="cw-md-disclaimer">'
      + '<button class="cw-md-x" onclick="cwModalClose()">✕</button>'
      + '<h2>Disclaimer</h2><p class="cw-md-date">Last updated: January 2025</p>'
      + '<h3>Not Financial Advice</h3><p>All content, calculators, and results provided by CalcWise are for <strong>informational and educational purposes only</strong>. Nothing on this website constitutes financial, investment, tax, legal, or accounting advice.</p>'
      + '<h3>Estimates Only</h3><p>Calculator results are estimates based on the inputs you provide and general mathematical formulas. Results may differ from quotes provided by financial institutions, lenders, or licensed advisors.</p>'
      + '<h3>No Guarantee of Accuracy</h3><p>While we strive to keep all calculators accurate and up to date, CalcWise makes no representations about the completeness, accuracy, or reliability of any results. Tax rates, contribution limits, and financial rules change frequently.</p>'
      + '<h3>Consult a Professional</h3><p>Always consult a qualified financial advisor, mortgage broker, accountant, or legal professional before making any significant financial decision.</p>'
      + '<h3>Canada &amp; USA Specifics</h3><p>Calculators covering Canadian rules reflect federal regulations. Provincial rules may vary. US calculators reflect federal rules; state rules may differ.</p>'
      + '<h3>Limitation of Liability</h3><p>CalcWise and its operators shall not be liable for any losses, damages, or decisions made in reliance on information or calculator results provided on this website.</p>'
      + '</div>';
  }

  /* ── SHARED CSS ── */
  var CSS = `
:root{
  --cn:#0D1B2A; --cnm:#0A1628; --cnd:#060F1A;
  --ct:#1DB584; --ctd:#18a073; --ca:#C9A84C;
  --cg50:#F8FAFB; --cg100:#F1F4F7; --cg200:#E4E9EF;
  --cg400:#9BA8B5; --cg600:#6B7A8D;
}
/* NAV */
.cw-nav{
  display:flex;align-items:center;justify-content:center;
  padding:0 40px;height:62px;
  background:var(--cnm);border-bottom:1px solid rgba(255,255,255,0.07);
  position:sticky;top:0;z-index:500;
  font-family:inherit;
}
.cw-logo{
  font-size:21px;font-weight:800;color:#fff;letter-spacing:-.5px;
  text-decoration:none;display:flex;align-items:center;
  position:absolute;left:40px;white-space:nowrap;
}
.cw-logo-dot{color:var(--ct)}
.cw-pro{
  margin-left:8px;border:1px solid var(--ct);border-radius:4px;
  padding:2px 7px;font-size:10px;font-weight:700;
  color:var(--ct);letter-spacing:.07em;
}
.cw-nl{display:flex;list-style:none;gap:0;align-items:center}
.cw-nl li{position:relative}
.cw-nl-a{
  display:flex;align-items:center;gap:4px;
  padding:0 13px;height:62px;
  font-size:14px;font-weight:500;
  color:rgba(255,255,255,0.65);text-decoration:none;
  border-bottom:2px solid transparent;
  transition:color .15s,border-color .15s;white-space:nowrap;
}
.cw-nl-a:hover,.cw-nl-a.active{color:var(--ct);border-bottom-color:var(--ct)}
.cw-caret{width:10px;height:6px;flex-shrink:0;opacity:.5;transition:transform .2s}
.cw-nl li:hover .cw-caret{transform:rotate(180deg);opacity:1}
/* dropdown */
.cw-drop{
  display:none;position:absolute;top:100%;left:50%;
  transform:translateX(-50%);
  background:var(--cnm);border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;padding:8px;min-width:230px;
  box-shadow:0 24px 56px rgba(0,0,0,0.5);z-index:600;
}
.cw-nl li:hover .cw-drop{display:block}
.cw-dd-a{
  display:flex;align-items:center;gap:10px;
  padding:9px 12px;border-radius:8px;
  font-size:13px;color:rgba(255,255,255,0.65);
  text-decoration:none;transition:all .12s;
  border-bottom:none!important;height:auto!important;
}
.cw-dd-a:hover{background:rgba(29,181,132,0.1);color:var(--ct)}
.cw-dd-ic{
  width:28px;height:28px;border-radius:7px;
  background:rgba(255,255,255,0.06);
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
}
.cw-dd-ic svg{width:13px;height:13px}
/* nav search */
.cw-nsearch{
  display:flex;align-items:center;gap:8px;
  background:rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.11);
  border-radius:8px;padding:7px 12px;
  position:absolute;right:178px;
  width:180px;transition:width .2s;
}
.cw-nsearch:focus-within{width:240px;border-color:rgba(29,181,132,0.4)}
.cw-nsearch input{
  background:transparent;border:none;outline:none;
  font-size:13px;color:#fff;width:100%;font-family:inherit;
}
.cw-nsearch input::placeholder{color:rgba(255,255,255,0.3)}
.cw-nsdrop{
  position:absolute;top:calc(100% + 8px);left:0;right:0;
  background:var(--cnm);border:1px solid rgba(255,255,255,0.12);
  border-radius:10px;overflow:hidden;display:none;
  box-shadow:0 16px 40px rgba(0,0,0,0.45);z-index:700;
}
.cw-nsdrop.show{display:block}
.cw-nsd-a{
  display:flex;align-items:center;gap:9px;
  padding:10px 14px;font-size:13px;
  color:rgba(255,255,255,0.75);text-decoration:none;
  transition:background .1s;
  border-bottom:1px solid rgba(255,255,255,0.05);
}
.cw-nsd-a:last-child{border-bottom:none}
.cw-nsd-a:hover{background:rgba(29,181,132,0.1);color:var(--ct)}
.cw-nsd-none{padding:12px 14px;font-size:13px;color:rgba(255,255,255,0.3)}
.cw-ncta{
  background:var(--ct);color:#fff;border:none;border-radius:8px;
  padding:9px 18px;font-size:13px;font-weight:700;
  cursor:pointer;font-family:inherit;transition:background .15s;
  position:absolute;right:40px;white-space:nowrap;
  text-decoration:none;display:flex;align-items:center;
}
.cw-ncta:hover{background:var(--ctd)}
.cw-burger{
  display:none;flex-direction:column;gap:5px;
  background:none;border:none;cursor:pointer;padding:4px;
  position:absolute;right:20px;
}
.cw-burger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px}
/* FOOTER */
.cw-ft{
  background:var(--cnd);border-top:1px solid rgba(255,255,255,0.07);
  padding:56px 80px 32px;font-family:inherit;
}
.cw-ft-top{
  max-width:1400px;margin:0 auto;
  display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr 1fr 1fr;
  gap:32px;padding-bottom:40px;
  border-bottom:1px solid rgba(255,255,255,0.07);
}
.cw-ft-logo{font-size:20px;font-weight:800;color:#fff;letter-spacing:-.4px;margin-bottom:10px;display:flex;align-items:center}
.cw-ft-logo span{color:var(--ct)}
.cw-ft-brand p{font-size:13px;color:rgba(255,255,255,0.35);line-height:1.7;max-width:220px;margin-bottom:18px}
.cw-ft-socials{display:flex;gap:8px}
.cw-ft-social{
  width:34px;height:34px;border-radius:8px;
  background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;transition:all .15s;text-decoration:none;
}
.cw-ft-social:hover{background:rgba(29,181,132,0.15);border-color:rgba(29,181,132,0.3)}
.cw-ft-social svg{width:14px;height:14px}
.cw-ft-ct{font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,0.22);margin-bottom:14px}
.cw-ft-col a{display:block;font-size:13px;color:rgba(255,255,255,0.45);text-decoration:none;margin-bottom:9px;transition:color .12s}
.cw-ft-col a:hover{color:var(--ct)}
.cw-ft-bot{
  max-width:1400px;margin:22px auto 0;
  display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;
}
.cw-ft-copy{font-size:12px;color:rgba(255,255,255,0.2)}
.cw-ft-legal{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.cw-ft-sep{color:rgba(255,255,255,0.2);font-size:12px}
.cw-ft-lb{
  font-size:12px;color:rgba(255,255,255,0.45);
  background:none;border:none;cursor:pointer;
  font-family:inherit;padding:0;transition:color .12s;
}
.cw-ft-lb:hover{color:var(--ct)}
/* MODALS */
.cw-mo{
  display:none;position:fixed;inset:0;
  background:rgba(0,0,0,0.72);z-index:900;backdrop-filter:blur(4px);
}
.cw-mo.show{display:block}
.cw-md{
  display:none;position:fixed;
  top:50%;left:50%;transform:translate(-50%,-50%);
  background:#fff;border-radius:16px;
  padding:40px;max-width:580px;width:90%;
  max-height:80vh;overflow-y:auto;
  z-index:1000;box-shadow:0 32px 80px rgba(0,0,0,0.5);
  font-family:inherit;
}
.cw-md.show{display:block}
.cw-md h2{font-size:22px;font-weight:800;color:var(--cn);margin-bottom:4px;letter-spacing:-.3px}
.cw-md h3{font-size:14px;font-weight:700;color:var(--cn);margin:20px 0 6px}
.cw-md p{font-size:14px;color:#5a6a7a;line-height:1.7;margin-bottom:4px}
.cw-md-date{font-size:12px;color:var(--cg400);margin-bottom:20px}
.cw-md-x{
  position:absolute;top:16px;right:16px;
  background:var(--cg100);border:none;border-radius:50%;
  width:32px;height:32px;font-size:14px;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  color:var(--cn);font-weight:600;transition:background .15s;font-family:inherit;
}
.cw-md-x:hover{background:var(--cg200)}
/* RESPONSIVE */
@media(max-width:1100px){
  .cw-nl-a{padding:0 9px;font-size:13px}
  .cw-nsearch{width:150px;right:160px}
}
@media(max-width:900px){
  .cw-nl,.cw-nsearch,.cw-ncta{display:none}
  .cw-burger{display:flex}
  .cw-ft{padding:40px 24px 24px}
  .cw-ft-top{grid-template-columns:1fr 1fr;gap:24px}
}
@media(max-width:480px){
  .cw-ft-top{grid-template-columns:1fr}
}
`;

  /* ── Inject CSS ── */
  function injectCSS() {
    if (document.getElementById('cw-css')) return;
    var s = document.createElement('style');
    s.id = 'cw-css'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ── Inject Nav ── */
  function injectNav(r, rh) {
    if (document.getElementById('cw-nav')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = buildNav(r, rh);
    document.body.insertBefore(wrap.firstElementChild, document.body.firstChild);
  }

  /* ── Inject Footer ── */
  function injectFooter(r, rh) {
    var wrap = document.createElement('div');
    wrap.innerHTML = buildFooter(r, rh);
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
  }

  /* ── Nav search ── */
  function initNavSearch(r) {
    var inp = document.getElementById('cw-nsinp');
    var drop = document.getElementById('cw-nsdrop');
    if (!inp || !drop) return;
    inp.addEventListener('input', function () {
      var q = inp.value.trim().toLowerCase();
      drop.innerHTML = '';
      if (!q) { drop.classList.remove('show'); return; }
      var hits = ALL_CALCS.filter(function (c) {
        return c.name.toLowerCase().indexOf(q) !== -1 || c.tags.indexOf(q) !== -1;
      }).slice(0, 8);
      if (!hits.length) {
        drop.innerHTML = '<div class="cw-nsd-none">No results for "' + inp.value + '"</div>';
      } else {
        hits.forEach(function (c) {
          var a = document.createElement('a');
          a.className = 'cw-nsd-a'; a.href = r + c.url;
          a.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="3.5" stroke="#1DB584" stroke-width="1.2"/><path d="M7.5 7.5L10 10" stroke="#1DB584" stroke-width="1.2" stroke-linecap="round"/></svg>' + c.name;
          drop.appendChild(a);
        });
      }
      drop.classList.add('show');
    });
    document.addEventListener('click', function (e) {
      var ns = document.getElementById('cw-nsearch');
      if (ns && !ns.contains(e.target)) drop.classList.remove('show');
    });
  }

  /* ── Hamburger ── */
  function initBurger() {
    var btn = document.getElementById('cw-burger');
    var nl = document.getElementById('cw-nl');
    if (!btn || !nl) return;
    btn.addEventListener('click', function () {
      var isOpen = nl.style.display === 'flex';
      nl.style.cssText = isOpen ? '' : 'display:flex;flex-direction:column;position:fixed;top:62px;left:0;right:0;background:#0A1628;padding:12px 0 20px;border-bottom:1px solid rgba(255,255,255,0.1);z-index:450;overflow-y:auto;max-height:calc(100vh - 62px)';
    });
  }

  /* ── Modal ── */
  window.cwModal = function (id) {
    var mo = document.getElementById('cw-mo');
    var md = document.getElementById('cw-md-' + id);
    if (mo) mo.classList.add('show');
    if (md) md.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  window.cwModalClose = function () {
    document.getElementById('cw-mo').classList.remove('show');
    document.querySelectorAll('.cw-md').forEach(function (m) { m.classList.remove('show'); });
    document.body.style.overflow = '';
  };

  /* ── Subpage banner styling ── */
  function styleSubpageBanner() {
    var isCalc = window.location.pathname.indexOf('/calculators/') !== -1;
    if (!isCalc) return;
    /* find the existing page header/hero and re-skin it */
    var bannerSelectors = ['.page-hero','.calc-hero','.hero-section','.calc-header','header.hero','div.hero','section.hero'];
    var banner = null;
    bannerSelectors.forEach(function(sel){
      if(!banner) banner = document.querySelector(sel);
    });
    /* if the subpage has an <h1> at top of body inside a dark-ish container, re-style it */
    if (!banner) {
      /* wrap first meaningful block that contains the h1 */
      var h1 = document.querySelector('body > div > h1, body > section > h1, body > div:first-of-type h1');
      if (h1) banner = h1.closest('div, section');
    }
    if (banner) {
      banner.style.background = '#0D1B2A';
      banner.style.color = '#fff';
    }
  }

  /* ── INIT ── */
  function init() {
    var r = root();
    var rh = rootHref();
    injectCSS();
    injectNav(r, rh);
    injectFooter(r, rh);
    initNavSearch(r);
    initBurger();
    styleSubpageBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
