/*!
 * CalcWise shared.js v5.0 — 40 calculators, 2026
 * Injects: nav, footer, Privacy/Disclaimer modals, search
 * Root pages:    <script src="shared.js"></script>
 * Calc subpages: <script src="../shared.js"></script>
 */
(function(){
'use strict';

var CALCS=[
  {n:'Mortgage Calculator',f:'mortgage-calculator.html',c:'Mortgage',t:'mortgage payment amortization home loan monthly'},
  {n:'Mortgage Qualifier',f:'mortgage-qualifier.html',c:'Mortgage',t:'qualify afford income how much mortgage'},
  {n:'CMHC Insurance Calculator',f:'cmhc-mortgage-insurance.html',c:'Mortgage',t:'cmhc insurance premium canada down payment default'},
  {n:'Rent vs. Buy Calculator',f:'rent-vs-buy.html',c:'Mortgage',t:'rent buy house property compare wealth equity'},
  {n:'Mortgage Refinance Calculator',f:'mortgage-refinance.html',c:'Mortgage',t:'refinance mortgage break even savings lower rate'},
  {n:'Net Worth Calculator',f:'net-worth.html',c:'Financial Planning',t:'net worth assets liabilities wealth financial health'},
  {n:'Emergency Fund Calculator',f:'emergency-fund.html',c:'Financial Planning',t:'emergency fund savings buffer months expenses'},
  {n:'TFSA Calculator',f:'tfsa.html',c:'Financial Planning',t:'tfsa tax free savings account canada contribution room'},
  {n:'RRSP Savings Calculator',f:'rrsp-savings.html',c:'Financial Planning',t:'rrsp savings retirement canada tax refund deduction'},
  {n:'RRSP Loan Calculator',f:'rrsp-loan.html',c:'Financial Planning',t:'rrsp loan borrow interest canada contribution'},
  {n:'Retirement Planning Calculator',f:'retirement-planning.html',c:'Retirement',t:'retirement planning savings gap cpp social security'},
  {n:'Retirement Withdrawal Calculator',f:'retirement-withdrawal.html',c:'Retirement',t:'retirement withdrawal safe rate 4% savings last how long'},
  {n:'Compound Interest Calculator',f:'compound-interest.html',c:'Investing',t:'compound interest growth savings investment double years'},
  {n:'ROI Calculator',f:'roi.html',c:'Investing',t:'roi return investment cagr gain loss annual'},
  {n:'Automatic Investment Plan',f:'auto-investment-plan.html',c:'Investing',t:'automatic investment dollar cost averaging dca monthly'},
  {n:'Investment Fees Calculator',f:'investment-fees.html',c:'Investing',t:'investment fees mer etf mutual fund management expense'},
  {n:'Rule of 72 Calculator',f:'rule-of-72.html',c:'Investing',t:'rule of 72 double money years investment'},
  {n:'Black-Scholes Calculator',f:'black-scholes.html',c:'Investing',t:'black scholes options pricing greeks call put delta'},
  {n:'Asset Allocation Calculator',f:'asset-allocation.html',c:'Investing',t:'asset allocation stocks bonds cash portfolio risk'},
  {n:'F.I.R.E. Calculator',f:'fire.html',c:'Retirement',t:'fire financial independence retire early coast barista monte carlo'},
  {n:'Roth IRA Calculator',f:'roth-ira.html',c:'Retirement',t:'roth ira tax free retirement usa contribution limit'},
  {n:'401(k) Contribution Calculator',f:'401k-contribution.html',c:'Retirement',t:'401k contribution employer match usa retirement savings'},
  {n:'401(k) Save the Max',f:'401k-save-max.html',c:'Retirement',t:'401k max contribution paycheck per period usa limit'},
  {n:'Traditional vs Roth IRA',f:'ira-comparison.html',c:'Retirement',t:'ira traditional roth comparison usa tax after-tax'},
  {n:'Annuity Calculator',f:'annuity.html',c:'Retirement',t:'annuity payments present future value ordinary due'},
  {n:'Personal Loan Calculator',f:'personal-loan.html',c:'Loans',t:'personal loan payment interest amortization apr'},
  {n:'Car Loan Calculator',f:'car-loan.html',c:'Loans',t:'car auto loan payment interest monthly vehicle'},
  {n:'Student Loan Calculator',f:'student-loan.html',c:'Loans',t:'student loan payment interest osap fafsa repayment payoff'},
  {n:'Simple Interest Calculator',f:'simple-interest.html',c:'Loans',t:'simple interest rate principal time period'},
  {n:'Debt Repayment Calculator',f:'debt-repayment.html',c:'Loans',t:'debt repayment avalanche snowball credit card payoff'},
  {n:'Credit Card Payoff Calculator',f:'credit-card-payoff.html',c:'Loans',t:'credit card payoff minimum payment interest balance'},
  {n:'Car Lease Calculator',f:'car-lease.html',c:'Loans',t:'car lease payment monthly residual money factor'},
  {n:'Income Tax Calculator',f:'income-tax.html',c:'Tax & Salary',t:'income tax federal provincial state marginal rate 2026'},
  {n:'Salary Calculator',f:'salary.html',c:'Tax & Salary',t:'salary hourly annual pay take home biweekly'},
  {n:'Sales Tax Calculator',f:'sales-tax.html',c:'Tax & Salary',t:'sales tax gst hst pst vat calculate total'},
  {n:'Currency Exchange Calculator',f:'currency-exchange.html',c:'Tax & Salary',t:'currency exchange rate usd cad convert foreign'},
  {n:'Vacation Savings Calculator',f:'vacation-savings.html',c:'Financial Planning',t:'vacation savings travel fund goal how much weekly'},
  {n:'Capital Gains Tax Calculator',f:'capital-gains-tax.html',c:'Tax & Salary',t:'capital gains tax investment property sell profit'},
  {n:'Inflation Calculator',f:'inflation.html',c:'Tax & Salary',t:'inflation calculator purchasing power cpi real value'},
  {n:'Hourly to Salary Calculator',f:'hourly-to-salary.html',c:'Tax & Salary',t:'hourly salary converter annual income wage rate'}
];

function isSubpage(){return window.location.pathname.indexOf('/calculators/')!==-1;}
function calcBase(){return isSubpage()?'':'calculators/';}
function siteRoot(){return isSubpage()?'../':'';}

var FLAG_US='<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" style="border-radius:2px;flex-shrink:0"><rect width="20" height="14" fill="#B22234"/><rect y="1.08" width="20" height="1.08" fill="#fff"/><rect y="3.23" width="20" height="1.08" fill="#fff"/><rect y="5.38" width="20" height="1.08" fill="#fff"/><rect y="7.54" width="20" height="1.08" fill="#fff"/><rect y="9.69" width="20" height="1.08" fill="#fff"/><rect y="11.85" width="20" height="1.08" fill="#fff"/><rect width="8" height="7.54" fill="#3C3B6E"/><circle cx="1.3" cy="1.1" r=".55" fill="#fff"/><circle cx="2.65" cy="1.1" r=".55" fill="#fff"/><circle cx="4" cy="1.1" r=".55" fill="#fff"/><circle cx="5.35" cy="1.1" r=".55" fill="#fff"/><circle cx="6.7" cy="1.1" r=".55" fill="#fff"/><circle cx="1.97" cy="2.32" r=".55" fill="#fff"/><circle cx="3.32" cy="2.32" r=".55" fill="#fff"/><circle cx="4.67" cy="2.32" r=".55" fill="#fff"/><circle cx="6.02" cy="2.32" r=".55" fill="#fff"/><circle cx="1.3" cy="3.54" r=".55" fill="#fff"/><circle cx="2.65" cy="3.54" r=".55" fill="#fff"/><circle cx="4" cy="3.54" r=".55" fill="#fff"/><circle cx="5.35" cy="3.54" r=".55" fill="#fff"/><circle cx="6.7" cy="3.54" r=".55" fill="#fff"/><circle cx="1.97" cy="4.77" r=".55" fill="#fff"/><circle cx="3.32" cy="4.77" r=".55" fill="#fff"/><circle cx="4.67" cy="4.77" r=".55" fill="#fff"/><circle cx="6.02" cy="4.77" r=".55" fill="#fff"/><circle cx="1.3" cy="6" r=".55" fill="#fff"/><circle cx="2.65" cy="6" r=".55" fill="#fff"/><circle cx="4" cy="6" r=".55" fill="#fff"/><circle cx="5.35" cy="6" r=".55" fill="#fff"/><circle cx="6.7" cy="6" r=".55" fill="#fff"/></svg>';
var FLAG_CA='<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" style="border-radius:2px;flex-shrink:0"><rect width="20" height="14" fill="#fff"/><rect width="5" height="14" fill="#D52B1E"/><rect x="15" width="5" height="14" fill="#D52B1E"/><path d="M10 2.8L10.9 5.5H13.6L11.4 7.1L12.3 9.8L10 8.2L7.7 9.8L8.6 7.1L6.4 5.5H9.1Z" fill="#D52B1E"/></svg>';

var ICON_PATHS={
  "Mortgage Calculator":"M2 6.5L6.5 2L11 6.5V11.5H8.5V8.5H4.5V11.5H2Z",
  "Mortgage Qualifier":"M2 9.5L6.5 2L11 9.5H2ZM4.5 7H8.5",
  "CMHC Insurance Calculator":"M6.5 1.5L11 4V7.5C11 10 9 12 6.5 12.5 4 12 2 10 2 7.5V4ZM4.5 7L6 8.5L9 5.5",
  "Rent vs. Buy Calculator":"M2 6.5L6.5 2L11 6.5V11.5H8.5V8.5H4.5V11.5H2ZM9.5 3.5H11.5V5.5",
  "Mortgage Refinance Calculator":"M2 4C3 2 5 1.5 6.5 1.5C9 1.5 11 3.5 11 6M11 9C10 11 8 11.5 6.5 11.5C4 11.5 2 9.5 2 7",
  "Net Worth Calculator":"M6.5 1L8 4.5H12L9 7L10 11L6.5 9L3 11L4 7L1 4.5H5Z",
  "Emergency Fund Calculator":"M6.5 1.5L11 10.5H2ZM6.5 5.5V8M6.5 9.5V10",
  "TFSA Calculator":"M11 3C5 5 3 9 1.5 12 4.5 11 7.5 10 10.5 10 12 10 12 7 11 3Z",
  "RRSP Savings Calculator":"M2 2H11V11H2ZM2 4.5H11M5 2V4.5M8 2V4.5M4 7H9M4 9H7",
  "RRSP Loan Calculator":"M1.5 4H11.5A1.5 1.5 0 0 1 11.5 9H1.5ZM6.5 6.5A.75.75 0 1 0 6.5 5A.75.75 0 0 0 6.5 6.5Z",
  "FHSA Calculator":"M2 6.5L6.5 2L11 6.5V11.5H4V8.5H9V11.5",
  "Retirement Planning Calculator":"M2 3H11V12H2ZM5 1.5V4M8 1.5V4M2 6.5H11",
  "Retirement Withdrawal Calculator":"M2 5H11L8.5 8.5H4.5ZM6.5 8.5V12M4 12H9",
  "Compound Interest Calculator":"M6.5 1V12.5M9.5 3.5H5A2 2 0 1 0 5 8H8A2 2 0 1 1 8 12H3.5",
  "ROI Calculator":"M1.5 9L5 5.5L7.5 8L11 3.5M9 3.5H11V5.5",
  "Automatic Investment Plan":"M1.5 9L5 5.5L7.5 8L11 3.5M9 3.5H11V5.5M1.5 12H11.5",
  "Investment Fees Calculator":"M6.5 1V12M9.5 3H5A2 2 0 1 0 5 7H8A2 2 0 1 1 8 11H3",
  "Rule of 72 Calculator":"M6.5 1A5.5 5.5 0 1 0 6.5 12A5.5 5.5 0 0 0 6.5 1ZM6.5 4.5V6.5L8.5 7.5",
  "Black-Scholes Calculator":"M6.5 1A5.5 5.5 0 1 0 6.5 12A5.5 5.5 0 0 0 6.5 1ZM3 3L10 10M3 10L10 3",
  "Asset Allocation Calculator":"M6.5 1A5.5 5.5 0 1 1 12 6.5H6.5ZM6.5 1V6.5",
  "F.I.R.E. Calculator":"M4.5 9.5C4 7.5 5 6 6.5 3.5 7 5.5 5.5 6 5.5 5 4 6 2 7.5 2 9.5A4.5 4.5 0 0 0 4.5 9.5Z",
  "Roth IRA Calculator":"M6.5 1A5.5 5.5 0 1 0 6.5 12A5.5 5.5 0 0 0 6.5 1ZM6.5 4V6.5L9 8",
  "401(k) Contribution Calculator":"M2 6.5L6.5 2L11 6.5V12H2ZM4.5 12V9H8.5V12",
  "401(k) Save the Max":"M6.5 1.5L11 4V9C11 11 9 12 6.5 12.5 4 12 2 11 2 9V4ZM4.5 7H8.5M6.5 5V9",
  "Traditional vs Roth IRA":"M9.5 2L11.5 4L9.5 6M11.5 4H1.5M3.5 7.5L1.5 9.5L3.5 11.5M1.5 9.5H11.5",
  "Annuity Calculator":"M1.5 3.5H11.5M1.5 6.5H11.5M1.5 9.5H8.5M10.5 10V12.5M9 11.5H12",
  "CPP/OAS Estimator":"M6.5 1L8 4.5H12L9 7L10 11L6.5 9L3 11L4 7L1 4.5H5Z",
  "Personal Loan Calculator":"M11 5H12C12.5 5 13 6.5 12 8H11M1.5 5H11V10C11 11 9.5 12 8 12H4.5C3 12 1.5 11 1.5 10ZM4 1.5V5M7.5 1.5V5",
  "Car Loan Calculator":"M2 8H11.5M4 8V10M9.5 8V10M1.5 8L3.5 4H9.5L11.5 8M4.5 10.5A.5.5 0 1 0 4.5 11.5ZM9 10.5A.5.5 0 1 0 9 11.5Z",
  "Student Loan Calculator":"M6.5 1.5L1.5 4.5L6.5 7.5L11.5 4.5ZM3.5 6V9C5 11 8 11 9.5 9V6",
  "Simple Interest Calculator":"M6.5 1V12.5M1.5 6.5H11.5",
  "Debt Repayment Calculator":"M6.5 1V12.5M3.5 4L6.5 1L9.5 4M9.5 9.5L6.5 12.5L3.5 9.5",
  "Credit Card Payoff Calculator":"M1.5 3.5H11.5V11H1.5ZM1.5 6H11.5M4 8.5H6.5",
  "Car Lease Calculator":"M1.5 7H11.5M4 7V9.5M9.5 7V9.5M1.5 7L3 4H10L11.5 7M4 11A1 1 0 1 0 4 9ZM9.5 11A1 1 0 1 0 9.5 9Z",
  "Income Tax Calculator":"M2 1.5H9L11.5 4V12H2ZM9 1.5V4H11.5M4.5 7H9M4.5 9H7",
  "Salary Calculator":"M1.5 4.5H11.5V11H1.5ZM4.5 4.5V3A1 1 0 0 1 5.5 2H7.5A1 1 0 0 1 8.5 3V4.5M6.5 7V9.5M5 8.5H8",
  "Sales Tax Calculator":"M1.5 1.5H8L12 5.5V12H1.5ZM4 4.5A.5.5 0 1 0 4 5.5ZM9 9.5A.5.5 0 1 0 9 10.5ZM3 11L9.5 3",
  "Currency Exchange Calculator":"M9.5 1.5L11.5 3.5L9.5 5.5M11.5 3.5H1.5M3.5 8L1.5 10L3.5 12M1.5 10H11.5",
  "Vacation Savings Calculator":"M1.5 7L6.5 1.5L11.5 7V12.5H1.5ZM4 12.5V9.5H9V12.5M6.5 1.5V6",
  "Capital Gains Tax Calculator":"M1.5 9.5L5 6L7.5 8.5L11 3.5M9 3.5H11V5.5",
  "Inflation Calculator":"M10.5 2.5V12M6.5 5.5V12M2.5 8.5V12",
  "Hourly to Salary Calculator":"M6.5 1A5.5 5.5 0 1 0 6.5 12A5.5 5.5 0 0 0 6.5 1ZM6.5 3.5V6.5L9 8"
};
function makeIcon(nm){
  var path=ICON_PATHS[nm];
  if(!path)return '';
  // Build SVG as a string with no attribute quoting ambiguity
  return '<span class="cw-ddic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="'+path+'"/></svg></span>';
}
function ddItem(nm,cb){
  var c=CALCS.find(function(x){return x.n===nm;});
  if(!c)return '';
  return '<a class="cw-dda" href="'+cb+c.f+'">'+makeIcon(nm)+c.n+'</a>';
}
function menu(label,names,cb){
  var items=names.map(function(n){return ddItem(n,cb);}).join('');
  return '<li><a class="cw-nla" href="#">'+label+'<svg class="cw-caret" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></a><div class="cw-drop">'+items+'</div></li>';
}

function buildNav(cb,sr){
  return '<nav class="cw-nav" id="cw-nav">'
    +'<a href="'+sr+'index.html" class="cw-logo">CalcWise<span class="cw-ld">.</span><span class="cw-pro">PRO</span></a>'
    +'<ul class="cw-nl" id="cw-nl">'
    +menu('Mortgage',['Mortgage Calculator','Mortgage Qualifier','CMHC Insurance Calculator','Rent vs. Buy Calculator','Mortgage Refinance Calculator'],cb)
    +menu('Financial Planning',['Net Worth Calculator','Emergency Fund Calculator','TFSA Calculator','RRSP Savings Calculator','RRSP Loan Calculator','Vacation Savings Calculator'],cb)
    +menu('Investing',['Compound Interest Calculator','ROI Calculator','Automatic Investment Plan','Investment Fees Calculator','Rule of 72 Calculator','Asset Allocation Calculator','Black-Scholes Calculator'],cb)
    +menu('Retirement',['F.I.R.E. Calculator','Retirement Planning Calculator','Retirement Withdrawal Calculator','Roth IRA Calculator','401(k) Contribution Calculator','401(k) Save the Max','Traditional vs Roth IRA','Annuity Calculator'],cb)
    +menu('Loans',['Personal Loan Calculator','Car Loan Calculator','Student Loan Calculator','Car Lease Calculator','Simple Interest Calculator','Debt Repayment Calculator','Credit Card Payoff Calculator'],cb)
    +menu('Tax & Salary',['Income Tax Calculator','Salary Calculator','Hourly to Salary Calculator','Capital Gains Tax Calculator','Sales Tax Calculator','Currency Exchange Calculator','Inflation Calculator'],cb)
    +'</ul>'
    +'<div class="cw-nsw" id="cw-nsw"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="rgba(255,255,255,.45)" stroke-width="1.3"/><path d="M9.5 9.5L12.5 12.5" stroke="rgba(255,255,255,.45)" stroke-width="1.3" stroke-linecap="round"/></svg><input id="cw-nsi" type="text" placeholder="Search calculators..." autocomplete="off"/><div class="cw-nsd" id="cw-nsd"></div></div>'
    +'<a class="cw-ncta" href="'+sr+'index.html">All Calculators</a>'
    +'<button class="cw-burger" id="cw-burger" aria-label="Menu"><span></span><span></span><span></span></button>'
    +'</nav>';
}

function col(title,links,cb){
  return '<div class="cw-fc"><div class="cw-fct">'+title+'</div>'
    +links.map(function(l){return '<a href="'+cb+l[1]+'">'+l[0]+'</a>';}).join('')
    +'</div>';
}

function buildFooter(cb,sr){
  return '<footer class="cw-ft">'
    +'<div class="cw-ft-top">'
    +'<div class="cw-fb"><div class="cw-flogo">CalcWise<span>.</span></div>'
    +'<p>Free professional financial calculators for USA &amp; Canada. Not financial advice.</p>'
    +'<div class="cw-fss">'
    +'<a href="#" class="cw-fso" aria-label="X"><svg viewBox="0 0 15 15" fill="none"><path d="M13.5 2L9 7.5 14 13H10.5L7.5 9.5 4 13H2L7 7.5 2 2H5.5L8.5 5.5 12 2H13.5Z" stroke="rgba(255,255,255,.4)" stroke-width="1.1" stroke-linejoin="round"/></svg></a>'
    +'<a href="#" class="cw-fso" aria-label="Instagram"><svg viewBox="0 0 15 15" fill="none"><rect x="2" y="2" width="11" height="11" rx="3" stroke="rgba(255,255,255,.4)" stroke-width="1.1"/><circle cx="7.5" cy="7.5" r="2.5" stroke="rgba(255,255,255,.4)" stroke-width="1.1"/><circle cx="11" cy="4" r=".6" fill="rgba(255,255,255,.4)"/></svg></a>'
    +'<a href="mailto:hello@calcwise.pro" class="cw-fso" aria-label="Contact Email"><svg viewBox="0 0 15 15" fill="none"><rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="rgba(255,255,255,.4)" stroke-width="1.1"/><path d="M1.5 5.5L7.5 9.5L13.5 5.5" stroke="rgba(255,255,255,.4)" stroke-width="1.1" stroke-linecap="round"/></svg></a>'
    +'</div></div>'
    +col('Mortgage',[['Mortgage','mortgage-calculator.html'],['Mortgage Qualifier','mortgage-qualifier.html'],['CMHC Insurance','cmhc-mortgage-insurance.html'],['Rent vs. Buy','rent-vs-buy.html'],['Mortgage Refinance','mortgage-refinance.html']],cb)
    +col('Financial Planning',[['Net Worth','net-worth.html'],['Emergency Fund','emergency-fund.html'],['TFSA','tfsa.html'],['RRSP Savings','rrsp-savings.html'],['RRSP Loan','rrsp-loan.html'],['Vacation Savings','vacation-savings.html']],cb)
    +col('Investing',[['Compound Interest','compound-interest.html'],['ROI','roi.html'],['Automatic Investment Plan','auto-investment-plan.html'],['Investment Fees','investment-fees.html'],['Rule of 72','rule-of-72.html'],['Asset Allocation','asset-allocation.html'],['Black-Scholes','black-scholes.html']],cb)
    +col('Retirement',[['F.I.R.E.','fire.html'],['Retirement Planning','retirement-planning.html'],['Retirement Withdrawal','retirement-withdrawal.html'],['Roth IRA','roth-ira.html'],['401(k) Contribution','401k-contribution.html'],['401(k) Save the Max','401k-save-max.html'],['Traditional vs Roth IRA','ira-comparison.html'],['Annuity','annuity.html']],cb)
    +col('Loans',[['Personal Loan','personal-loan.html'],['Car Loan','car-loan.html'],['Student Loan','student-loan.html'],['Car Lease','car-lease.html'],['Simple Interest','simple-interest.html'],['Debt Repayment','debt-repayment.html'],['Credit Card Payoff','credit-card-payoff.html']],cb)
    +col('Tax & Salary',[['Income Tax','income-tax.html'],['Salary','salary.html'],['Hourly to Salary','hourly-to-salary.html'],['Capital Gains Tax','capital-gains-tax.html'],['Sales Tax','sales-tax.html'],['Currency Exchange','currency-exchange.html'],['Inflation','inflation.html']],cb)
    +'</div>'
    +'<div class="cw-fb2">'
    +'<span class="cw-fcp">© 2026 CalcWise. All rights reserved.</span>'
    +'<div class="cw-fll">'
    +'<button class="cw-flb" onclick="cwModal(\'privacy\')">Privacy Policy</button>'
    +'<span class="cw-fsp">·</span>'
    +'<button class="cw-flb" onclick="cwModal(\'disclaimer\')">Disclaimer</button>'
    +'<span class="cw-fsp">·</span>'
    +'<span class="cw-fcp">Free professional financial calculators for USA &amp; Canada. Not financial advice.</span>'
    +'</div></div>'
    +'</footer>'
    +'<div class="cw-mo" id="cw-mo" onclick="cwModalClose()"></div>'
    +'<div class="cw-md" id="cw-md-privacy"><button class="cw-mdx" onclick="cwModalClose()">✕</button>'
    +'<h2>Privacy Policy</h2><p class="cw-mdd">Last updated: January 2026</p>'
    +'<h3>1. Information We Collect</h3><p>CalcWise does not require account registration or collect personal information. All calculations are performed locally in your browser. We do not store, transmit, or share your financial inputs.</p>'
    +'<h3>2. Analytics</h3><p>We may use privacy-respecting analytics (aggregate page view counts only) to understand which calculators are most useful. No personally identifiable information is collected.</p>'
    +'<h3>3. Cookies</h3><p>We use minimal cookies only for essential site functionality. We do not use tracking or advertising cookies.</p>'
    +'<h3>4. Third-Party Services</h3><p>CalcWise may display contextual affiliate links and advertisements. These third parties have their own privacy policies. We are not responsible for their data practices.</p>'
    +'<h3>5. Data Security</h3><p>Since no personal financial data is transmitted to our servers, your calculation inputs remain entirely private on your own device.</p>'
    +'<h3>6. Contact</h3><p>For privacy-related questions, please contact us through the website contact page.</p>'
    +'</div>'
    +'<div class="cw-md" id="cw-md-disclaimer"><button class="cw-mdx" onclick="cwModalClose()">✕</button>'
    +'<h2>Disclaimer</h2><p class="cw-mdd">Last updated: January 2026</p>'
    +'<h3>Not Financial Advice</h3><p>All content, calculators, and results provided by CalcWise are for <strong>informational and educational purposes only</strong>. Nothing constitutes financial, investment, tax, legal, or accounting advice.</p>'
    +'<h3>Estimates Only</h3><p>Calculator results are estimates based on the inputs you provide. Results may differ from quotes provided by financial institutions or licensed advisors.</p>'
    +'<h3>No Guarantee of Accuracy</h3><p>While we strive to keep all calculators accurate, tax rates, contribution limits, and financial rules change frequently. Always verify with a professional.</p>'
    +'<h3>Consult a Professional</h3><p>Always consult a qualified financial advisor, mortgage broker, accountant, or legal professional before making significant financial decisions.</p>'
    +'<h3>Limitation of Liability</h3><p>CalcWise and its operators shall not be liable for any losses or decisions made in reliance on information provided on this website.</p>'
    +'</div>';
}

var CSS=`
:root{--cn:#0D1B2A;--cnm:#0A1628;--cnd:#060F1A;--ct:#1DB584;--ctd:#18a073;--ca:#C9A84C}
.cw-nav{display:flex;align-items:center;justify-content:center;padding:0 40px;height:62px;background:var(--cnm);border-bottom:1px solid rgba(255,255,255,.07);position:sticky;top:0;z-index:500;font-family:inherit}
.cw-logo{font-size:21px;font-weight:800;color:#fff;letter-spacing:-.5px;text-decoration:none;display:flex;align-items:center;position:absolute;left:40px;white-space:nowrap}
.cw-ld{color:var(--ct)}
.cw-pro{margin-left:8px;border:1px solid var(--ct);border-radius:4px;padding:2px 7px;font-size:10px;font-weight:700;color:var(--ct);letter-spacing:.07em}
.cw-nl{display:flex;list-style:none;gap:0;align-items:center}
.cw-nl li{position:relative}
.cw-nla{display:flex;align-items:center;gap:4px;padding:0 12px;height:62px;font-size:14px;font-weight:500;color:rgba(255,255,255,.65);text-decoration:none;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;white-space:nowrap}
.cw-nla:hover,.cw-nla.active{color:var(--ct);border-bottom-color:var(--ct)}
.cw-caret{width:10px;height:6px;flex-shrink:0;opacity:.5;transition:transform .2s}
.cw-nl li:hover .cw-caret{transform:rotate(180deg);opacity:1}
.cw-drop{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:var(--cnm);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:8px;min-width:230px;box-shadow:0 24px 56px rgba(0,0,0,.5);z-index:600}
.cw-nl li:hover .cw-drop{display:block}
.cw-dda{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;font-size:13px;color:rgba(255,255,255,.65);text-decoration:none;transition:all .12s;border-bottom:none!important;height:auto!important}
.cw-dda:hover{background:rgba(29,181,132,.1);color:var(--ct)}
.cw-ddic{width:28px;height:28px;border-radius:7px;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.cw-ddic svg{width:13px;height:13px;}
.cw-ddarrow{width:18px;height:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:.7}
.cw-ddarrow svg{width:13px;height:13px}
.cw-nsw{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.11);border-radius:8px;padding:7px 12px;position:absolute;right:180px;width:175px;transition:width .2s}
.cw-nsw:focus-within{width:240px;border-color:rgba(29,181,132,.4)}
.cw-nsw input{background:transparent;border:none;outline:none;font-size:13px;color:#fff;width:100%;font-family:inherit}
.cw-nsw input::placeholder{color:rgba(255,255,255,.3)}
.cw-nsd{position:absolute;top:calc(100% + 8px);left:0;right:0;background:var(--cnm);border:1px solid rgba(255,255,255,.12);border-radius:10px;overflow:hidden;display:none;box-shadow:0 16px 40px rgba(0,0,0,.45);z-index:700}
.cw-nsd.show{display:block}
.cw-nsda{display:flex;align-items:center;gap:9px;padding:10px 14px;font-size:13px;color:rgba(255,255,255,.75);text-decoration:none;transition:background .1s;border-bottom:1px solid rgba(255,255,255,.05)}
.cw-nsda:last-child{border-bottom:none}
.cw-nsda:hover{background:rgba(29,181,132,.1);color:var(--ct)}
.cw-nsdn{padding:12px 14px;font-size:13px;color:rgba(255,255,255,.3)}
.cw-ncta{background:var(--ct);color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s;position:absolute;right:40px;white-space:nowrap;text-decoration:none;display:flex;align-items:center}
.cw-ncta:hover{background:var(--ctd)}
.cw-burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;position:absolute;right:20px}
.cw-burger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px}
.cw-ft{background:var(--cnd);border-top:1px solid rgba(255,255,255,.07);padding:56px 60px 32px;font-family:inherit}
.cw-ft-top{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:24px;padding-bottom:36px;border-bottom:1px solid rgba(255,255,255,.07)}
.cw-flogo{font-size:20px;font-weight:800;color:#fff;letter-spacing:-.4px;margin-bottom:10px;display:flex;align-items:center}
.cw-flogo span{color:var(--ct)}
.cw-fb p{font-size:13px;color:rgba(255,255,255,.35);line-height:1.7;max-width:200px;margin-bottom:18px}
.cw-fss{display:flex;gap:8px}
.cw-fso{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;text-decoration:none}
.cw-fso:hover{background:rgba(29,181,132,.15);border-color:rgba(29,181,132,.3)}
.cw-fso svg{width:14px;height:14px}
.cw-fct{font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.22);margin-bottom:14px}
.cw-fc a{display:block;font-size:13px;color:rgba(255,255,255,.45);text-decoration:none;margin-bottom:9px;transition:color .12s}
.cw-fc a:hover{color:var(--ct)}
.cw-fb2{max-width:1400px;margin:22px auto 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
.cw-fcp{font-size:12px;color:rgba(255,255,255,.2)}
.cw-fll{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.cw-fsp{color:rgba(255,255,255,.2);font-size:12px}
.cw-flb{font-size:12px;color:rgba(255,255,255,.45);background:none;border:none;cursor:pointer;font-family:inherit;padding:0;transition:color .12s}
.cw-flb:hover{color:var(--ct)}
.cw-mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:900;backdrop-filter:blur(4px)}
.cw-mo.show{display:block}
.cw-md{display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border-radius:16px;padding:40px;max-width:580px;width:90%;max-height:80vh;overflow-y:auto;z-index:1000;box-shadow:0 32px 80px rgba(0,0,0,.5);font-family:inherit}
.cw-md.show{display:block}
.cw-md h2{font-size:22px;font-weight:800;color:var(--cn);margin-bottom:4px;letter-spacing:-.3px}
.cw-md h3{font-size:14px;font-weight:700;color:var(--cn);margin:18px 0 6px}
.cw-md p{font-size:14px;color:#5a6a7a;line-height:1.7;margin-bottom:4px}
.cw-mdd{font-size:12px;color:#9BA8B5;margin-bottom:18px}
.cw-mdx{position:absolute;top:16px;right:16px;background:#F1F4F7;border:none;border-radius:50%;width:32px;height:32px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--cn);font-weight:600;transition:background .15s;font-family:inherit}
.cw-mdx:hover{background:#E4E9EF}
.country-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;border:1px solid;font-size:13px;font-weight:600;margin-top:4px}
.cw-usa-badge{background:rgba(29,100,210,.12);border-color:rgba(29,100,210,.3);color:#93B8F5}
.cw-ca-badge{background:rgba(213,43,30,.1);border-color:rgba(213,43,30,.25);color:#F4A29A}
@media(max-width:1100px){.cw-nla{padding:0 8px;font-size:13px}.cw-nsw{width:140px;right:160px}}
@media(max-width:900px){.cw-nl,.cw-nsw,.cw-ncta{display:none}.cw-burger{display:flex}.cw-ft{padding:40px 24px 24px}.cw-ft-top{grid-template-columns:1fr 1fr;gap:24px}}
@media(max-width:480px){.cw-ft-top{grid-template-columns:1fr}}
`;

function addCSS(){
  if(document.getElementById('cw-css'))return;
  var s=document.createElement('style');s.id='cw-css';s.textContent=CSS;
  document.head.appendChild(s);
}
function injectNav(cb,sr){
  if(document.getElementById('cw-nav'))return;
  var d=document.createElement('div');d.innerHTML=buildNav(cb,sr);
  document.body.insertBefore(d.firstElementChild,document.body.firstChild);
}
function injectFooter(cb,sr){
  var d=document.createElement('div');d.innerHTML=buildFooter(cb,sr);
  while(d.firstChild)document.body.appendChild(d.firstChild);
}
function initNavSearch(cb){
  var inp=document.getElementById('cw-nsi');
  var drop=document.getElementById('cw-nsd');
  if(!inp||!drop)return;
  inp.addEventListener('input',function(){
    var q=inp.value.trim().toLowerCase();
    drop.innerHTML='';
    if(!q){drop.classList.remove('show');return;}
    var hits=CALCS.filter(function(c){return c.n.toLowerCase().indexOf(q)!==-1||c.t.indexOf(q)!==-1;}).slice(0,9);
    if(!hits.length){drop.innerHTML='<div class="cw-nsdn">No results for "'+inp.value+'"</div>';}
    else{hits.forEach(function(c){var a=document.createElement('a');a.className='cw-nsda';a.href=cb+c.f;a.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="3.5" stroke="#1DB584" stroke-width="1.2"/><path d="M7.5 7.5L10 10" stroke="#1DB584" stroke-width="1.2" stroke-linecap="round"/></svg>'+c.n;drop.appendChild(a);});}
    drop.classList.add('show');
  });
  document.addEventListener('click',function(e){var w=document.getElementById('cw-nsw');if(w&&!w.contains(e.target))drop.classList.remove('show');});
}
function initBurger(){
  var btn=document.getElementById('cw-burger');var nl=document.getElementById('cw-nl');
  if(!btn||!nl)return;
  btn.addEventListener('click',function(){
    var open=nl.classList.contains('cw-open');
    nl.classList.toggle('cw-open',!open);
    nl.style.cssText=open?'':'display:flex;flex-direction:column;position:fixed;top:62px;left:0;right:0;background:#0A1628;padding:12px 0 24px;border-bottom:1px solid rgba(255,255,255,.1);z-index:450;overflow-y:auto;max-height:calc(100vh - 62px)';
  });
}
function initFaqs(){
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var ans=btn.nextElementSibling;
      btn.classList.toggle('open');
      if(ans)ans.classList.toggle('open');
    });
  });
}
function initCountryToggle(){
  document.querySelectorAll('.cw-toggle').forEach(function(wrap){
    wrap.querySelectorAll('.cw-tbtn').forEach(function(btn){
      btn.addEventListener('click',function(){
        wrap.querySelectorAll('.cw-tbtn').forEach(function(b){b.classList.remove('on');});
        btn.classList.add('on');
        var mode=btn.dataset.mode;
        /* 1. data-show / data-ca / data-us attribute toggles */
        document.querySelectorAll('[data-show]').forEach(function(el){
          el.style.display=el.dataset.show===mode?'':'none';
        });
        document.querySelectorAll('[data-ca]').forEach(function(el){
          el.style.display=mode==='ca'?'':'none';
        });
        document.querySelectorAll('[data-us]').forEach(function(el){
          el.style.display=mode==='us'?'':'none';
        });
        /* 2. Call page-level setCountry if it exists (setMode is for internal page tabs only) */
        if(typeof window.setCountry==='function') window.setCountry(mode);
        else if(typeof window.switchCountry==='function') window.switchCountry(mode);
        /* 3. Trigger recalc if calc/calc/c function exists */
        setTimeout(function(){
          if(typeof window.calc==='function') window.calc();
          else if(typeof window.c==='function') window.c();
        },50);
      });
    });
  });
  /* Run initial mode after page scripts have loaded */
  function runInitialMode(){
    var activeBtn=document.querySelector('.cw-tbtn.on');
    if(activeBtn){
      var mode=activeBtn.dataset.mode||'us';
      /* Only call setCountry - NOT setMode (setMode is for page-internal tabs like Roth IRA) */
      if(typeof window.setCountry==='function') window.setCountry(mode);
      /* Trigger recalc */
      setTimeout(function(){
        if(typeof window.calc==='function') window.calc();
        else if(typeof window.c==='function') window.c();
      },100);
    }
  }
  // Try after DOMContentLoaded, then again after full load
  if(document.readyState==='complete'){
    setTimeout(runInitialMode,200);
  } else {
    window.addEventListener('load',function(){setTimeout(runInitialMode,200);});
  }
}
window.cwModal=function(id){
  var mo=document.getElementById('cw-mo');var md=document.getElementById('cw-md-'+id);
  if(mo)mo.classList.add('show');if(md)md.classList.add('show');
  document.body.style.overflow='hidden';
};
window.cwModalClose=function(){
  var mo=document.getElementById('cw-mo');if(mo)mo.classList.remove('show');
  document.querySelectorAll('.cw-md').forEach(function(m){m.classList.remove('show');});
  document.body.style.overflow='';
};
window.toggleFaq=function(btn){
  var ans=btn.nextElementSibling;
  btn.classList.toggle('open');
  if(ans)ans.classList.toggle('open');
};
function init(){
  var cb=calcBase();var sr=siteRoot();
  addCSS();injectNav(cb,sr);injectFooter(cb,sr);
  initNavSearch(cb);initBurger();initFaqs();initCountryToggle();
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
