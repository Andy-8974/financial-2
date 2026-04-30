/**
 * CalcWise — Global Navigation
 * Single source of truth for the entire site.
 * To update nav: edit this file only.
 * Include on every page: <script src="nav.js"></script> (root)
 *                        <script src="../nav.js"></script> (calculators/)
 */
(function () {
  /* ── Detect path depth ────────────────────────────────────────────────── */
  const isRoot = !window.location.pathname.includes('/calculators/');
  const base   = isRoot ? '' : '../';       // prefix for links back to root
  const calc   = isRoot ? 'calculators/' : ''; // prefix for calculator links

  /* ── Nav CSS ──────────────────────────────────────────────────────────── */
  const CSS = `
/* ── Nav reset ─────────────────────────────────────────────────────────── */
nav{background:#0d1f35;padding:0 2rem;position:sticky;top:0;z-index:500;
  border-bottom:1px solid rgba(201,168,76,0.15);box-shadow:0 2px 24px rgba(0,0,0,0.25);}
.nav-inner{max-width:1340px;margin:0 auto;display:flex;align-items:center;
  justify-content:space-between;height:64px;gap:1rem;}
.nav-logo{font-family:'DM Sans',system-ui,sans-serif;color:white;font-size:1.5rem;
  font-weight:700;letter-spacing:-0.02em;display:flex;align-items:center;
  gap:2px;flex-shrink:0;text-decoration:none;}
.nav-logo-dot{color:#c9a84c;}
.nav-logo-tag{font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:0.6rem;
  font-weight:600;color:#c9a84c;letter-spacing:0.12em;text-transform:uppercase;
  background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.25);
  padding:2px 6px;border-radius:4px;margin-left:8px;align-self:center;}

/* ── Desktop links ──────────────────────────────────────────────────────── */
.nav-links{display:flex;align-items:center;list-style:none;margin:0;padding:0;height:64px;}
.nav-item{position:relative;height:100%;display:flex;align-items:center;}
.nav-link{display:flex;align-items:center;gap:5px;color:rgba(255,255,255,0.65);
  font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:0.95rem;font-weight:500;
  padding:8px 14px;border-radius:7px;cursor:pointer;transition:color .18s,background .18s;
  white-space:nowrap;text-decoration:none;background:none;border:none;height:40px;
  line-height:1;user-select:none;}
/* Extend clickable area downward to bridge gap to dropdown */
.nav-item>.nav-link{padding-bottom:calc(8px + 8px);margin-bottom:-8px;}
.nav-link:hover,.nav-item:hover>.nav-link,.nav-item:focus-within>.nav-link,
.nav-item.open>.nav-link{color:white;background:rgba(255,255,255,0.07);}
.nav-link.nav-active{color:#c9a84c;}
.nav-chevron{width:13px;height:13px;flex-shrink:0;
  transition:transform .22s cubic-bezier(.4,0,.2,1);opacity:.55;}
.nav-item:hover>.nav-link .nav-chevron,.nav-item:focus-within>.nav-link .nav-chevron,
.nav-item.open>.nav-link .nav-chevron{transform:rotate(180deg);opacity:.9;}

/* ── Dropdown panel ─────────────────────────────────────────────────────── */
.nav-dropdown{position:absolute;top:100%;left:50%;min-width:220px;
  background:#152a45;border:1px solid rgba(255,255,255,0.08);border-radius:12px;
  padding:14px 6px 6px;box-shadow:0 16px 48px rgba(0,0,0,0.35),0 4px 12px rgba(0,0,0,0.2);
  opacity:0;visibility:hidden;pointer-events:none;
  transform:translateX(-50%) translateY(-8px);
  transition:opacity .22s cubic-bezier(.4,0,.2,1),transform .22s cubic-bezier(.4,0,.2,1),visibility .22s;
  z-index:600;}
.nav-dropdown::before{content:'';position:absolute;top:0;left:12px;right:12px;
  height:2px;background:linear-gradient(90deg,#c9a84c,transparent);border-radius:2px;}
/* Invisible bridge above dropdown — keeps hover alive during mouse travel */
.nav-dropdown::after{content:'';position:absolute;top:-10px;left:0;right:0;height:10px;}
.nav-item:hover>.nav-dropdown,.nav-item:focus-within>.nav-dropdown,
.nav-item.open>.nav-dropdown{opacity:1;visibility:visible;pointer-events:auto;
  transform:translateX(-50%) translateY(0);}
.nav-dd-header{font-size:0.65rem;font-weight:700;text-transform:uppercase;
  letter-spacing:0.1em;color:rgba(255,255,255,0.28);padding:8px 12px 4px;pointer-events:none;}
.nav-dd-item{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;
  color:rgba(255,255,255,0.72);font-family:'IBM Plex Sans',system-ui,sans-serif;
  font-size:0.85rem;font-weight:500;text-decoration:none;
  transition:background .14s,color .14s;white-space:nowrap;cursor:pointer;
  border:none;background:none;width:100%;text-align:left;}
.nav-dd-item:hover,.nav-dd-item:focus{background:rgba(255,255,255,0.06);color:white;outline:none;}
.nav-dd-item:focus-visible{outline:2px solid rgba(201,168,76,0.6);outline-offset:-2px;}
.nav-dd-item.nav-active{color:#e2c472;background:rgba(201,168,76,0.08);}
.nav-dd-icon{width:6px;height:6px;border-radius:50%;
  background:rgba(201,168,76,0.5);flex-shrink:0;}
.nav-dd-item:hover .nav-dd-icon{background:#c9a84c;}
.nav-dd-item.nav-active .nav-dd-icon{background:#e2c472;}

/* ── Right side ─────────────────────────────────────────────────────────── */
.nav-right{display:flex;align-items:center;gap:8px;flex-shrink:0;}
.nav-search-btn{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);
  color:rgba(255,255,255,0.65);font-family:'IBM Plex Sans',system-ui,sans-serif;
  font-size:0.8rem;padding:7px 14px;border-radius:8px;cursor:pointer;
  display:flex;align-items:center;gap:6px;transition:all .18s;white-space:nowrap;}
.nav-search-btn:hover{background:rgba(255,255,255,0.12);color:white;}

/* ── Hamburger ──────────────────────────────────────────────────────────── */
.nav-hamburger{display:none;flex-direction:column;justify-content:center;
  align-items:center;gap:5px;width:40px;height:40px;
  background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);
  border-radius:8px;cursor:pointer;padding:0;flex-shrink:0;}
.nav-hamburger span{display:block;width:18px;height:2px;background:rgba(255,255,255,0.7);
  border-radius:2px;transition:all .25s cubic-bezier(.4,0,.2,1);}
.nav-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.nav-hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0);}
.nav-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

/* ── Mobile menu ────────────────────────────────────────────────────────── */
.nav-mobile{display:none;position:fixed;top:64px;left:0;right:0;background:#0d1f35;
  border-top:1px solid rgba(201,168,76,0.12);box-shadow:0 12px 40px rgba(0,0,0,0.3);
  z-index:490;overflow-y:auto;max-height:calc(100vh - 64px);
  transform:translateY(-8px);opacity:0;
  transition:transform .28s cubic-bezier(.4,0,.2,1),opacity .28s;padding:8px 0 24px;}
.nav-mobile.open{display:block;transform:translateY(0);opacity:1;}
.nav-mobile-item{border-bottom:1px solid rgba(255,255,255,0.05);}
.nav-mobile-btn{display:flex;align-items:center;justify-content:space-between;
  width:100%;padding:14px 24px;color:rgba(255,255,255,0.75);
  font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:1rem;font-weight:600;
  background:none;border:none;cursor:pointer;text-align:left;
  transition:color .15s,background .15s;}
.nav-mobile-btn:hover{color:white;background:rgba(255,255,255,0.04);}
.nav-mobile-chevron{width:16px;height:16px;transition:transform .22s;
  opacity:.5;flex-shrink:0;}
.nav-mobile-item.open .nav-mobile-chevron{transform:rotate(180deg);}
.nav-mobile-sub{max-height:0;overflow:hidden;background:rgba(0,0,0,0.12);
  transition:max-height .32s cubic-bezier(.4,0,.2,1);}
.nav-mobile-item.open .nav-mobile-sub{max-height:600px;}
.nav-mobile-link{display:flex;align-items:center;gap:10px;padding:11px 24px 11px 36px;
  color:rgba(255,255,255,0.55);font-family:'IBM Plex Sans',system-ui,sans-serif;
  font-size:0.9rem;text-decoration:none;transition:color .14s,background .14s;}
.nav-mobile-link:hover{color:white;background:rgba(255,255,255,0.04);}
.nav-mobile-link.nav-active{color:#e2c472;}
.nav-mobile-dot{width:5px;height:5px;border-radius:50%;
  background:rgba(201,168,76,0.4);flex-shrink:0;}

/* ── Responsive ─────────────────────────────────────────────────────────── */
@media(max-width:1100px){.nav-link{font-size:.88rem;padding:8px 10px;}}
@media(max-width:860px){
  .nav-links{display:none!important;}
  .nav-hamburger{display:flex;}
}
`;

  /* ── Nav HTML builder ─────────────────────────────────────────────────── */
  const CHEVRON = `<svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`;
  const MOB_CHV = `<svg class="nav-mobile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`;
  const SRCH_IC = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`;

  // All categories and their calculators
  const CATS = [
    { id:'mortgage', label:'Mortgage', items:[
      ['mortgage-calculator.html',     'Mortgage Calculator'],
      ['mortgage-qualifier.html',      'Mortgage Qualifier'],
      ['cmhc-mortgage-insurance.html', 'CMHC Insurance'],
      ['rent-vs-buy.html',             'Rent vs. Buy'],
      ['mortgage-refinance.html',      'Mortgage Refinance'],
    ]},
    { id:'planning', label:'Financial Planning', items:[
      ['net-worth.html',      'Net Worth Calculator'],
      ['emergency-fund.html', 'Emergency Fund'],
      ['tfsa.html',           'TFSA Calculator'],
      ['rrsp-savings.html',   'RRSP Savings'],
      ['rrsp-loan.html',      'RRSP Loan'],
    ]},
    { id:'investing', label:'Investing', items:[
      ['roi.html',                  'ROI Calculator'],
      ['auto-investment-plan.html', 'Auto Investment Plan'],
      ['investment-fees.html',      'Investment Fees'],
      ['rule-of-72.html',           'Rule of 72'],
      ['black-scholes.html',        'Black-Scholes'],
    ]},
    { id:'retirement', label:'Retirement', items:[
      ['fire.html',                   'FIRE Calculator'],
      ['retirement-planning.html',    'Retirement Planning'],
      ['roth-ira.html',               'Roth IRA Calculator'],
      ['401k-contribution.html',      '401(k) Contribution'],
      ['401k-save-max.html',          '401(k) Save Max'],
      ['retirement-withdrawal.html',  'Retirement Withdrawal'],
      ['ira-comparison.html',         'IRA Comparison'],
      ['asset-allocation.html',       'Asset Allocation'],
      ['annuity.html',                'Annuity Calculator'],
    ]},
    { id:'loans', label:'Loans', items:[
      ['personal-loan.html',      'Personal Loan'],
      ['car-loan.html',           'Car Loan'],
      ['compound-interest.html',  'Compound Interest'],
      ['credit-card-payoff.html', 'Credit Card Payoff'],
      ['debt-repayment.html',     'Debt Repayment'],
      ['simple-interest.html',    'Simple Interest'],
      ['car-lease.html',          'Car Lease'],
    ]},
    { id:'other', label:'Other', items:[
      ['income-tax.html',        'Income Tax 2025'],
      ['capital-gains-tax.html', 'Capital Gains Tax'],
      ['salary.html',            'Salary Calculator'],
      ['sales-tax.html',         'Sales Tax'],
      ['currency-exchange.html', 'Currency Exchange'],
      ['inflation.html',         'Inflation Calculator'],
      ['vacation-savings.html',  'Vacation Savings'],
      ['hourly-to-salary.html',  'Hourly to Salary'],
    ]},
  ];

  function buildDesktopItems() {
    return CATS.map(cat => `
      <li class="nav-item">
        <button class="nav-link" data-cat="${cat.id}" aria-haspopup="true"
                aria-expanded="false">${cat.label} ${CHEVRON}</button>
        <div class="nav-dropdown" role="menu">
          <div class="nav-dd-header">${cat.label} Calculators</div>
          ${cat.items.map(([file, label]) =>
            `<a href="${base}calculators/${file}" class="nav-dd-item" data-page="${file}">
              <span class="nav-dd-icon"></span>${label}
            </a>`
          ).join('')}
        </div>
      </li>`
    ).join('');
  }

  function buildMobileItems() {
    return CATS.map(cat => `
      <div class="nav-mobile-item" data-cat="${cat.id}">
        <button class="nav-mobile-btn">${cat.label} ${MOB_CHV}</button>
        <div class="nav-mobile-sub">
          ${cat.items.map(([file, label]) =>
            `<a href="${base}calculators/${file}" class="nav-mobile-link" data-page="${file}">
              <span class="nav-mobile-dot"></span>${label}
            </a>`
          ).join('')}
        </div>
      </div>`
    ).join('');
  }

  const NAV_HTML = `
<nav role="navigation" aria-label="Main navigation" id="cw-nav">
  <div class="nav-inner">
    <a href="${base}index.html" class="nav-logo" aria-label="CalcWise Pro home">
      CalcWise<span class="nav-logo-dot">.</span><span class="nav-logo-tag">Pro</span>
    </a>
    <ul class="nav-links" role="list">${buildDesktopItems()}</ul>
    <div class="nav-right">
      <button class="nav-search-btn" id="cwNavSearch" aria-label="Search calculators">
        ${SRCH_IC} Search
      </button>
      <button class="nav-hamburger" id="cwHamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="nav-mobile" id="cwMobile" role="dialog" aria-label="Mobile navigation">
  ${buildMobileItems()}
</div>`;

  /* ── Inject CSS ───────────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.id = 'cw-nav-css';
  style.textContent = CSS;
  document.head.insertBefore(style, document.head.firstChild);

  /* ── Inject HTML at top of <body> ────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  /* ── Behaviour (runs after HTML is in DOM) ────────────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';

  // Active state
  document.querySelectorAll('.nav-dd-item[data-page], .nav-mobile-link[data-page]').forEach(el => {
    if (el.dataset.page === page) {
      el.classList.add('nav-active');
      // Also highlight the parent button
      const parentItem = el.closest('.nav-item, .nav-mobile-item');
      if (parentItem) {
        const btn = parentItem.querySelector('.nav-link, .nav-mobile-btn');
        if (btn) btn.classList.add('nav-active');
      }
    }
  });

  // Desktop: click toggles dropdown
  document.querySelectorAll('.nav-item').forEach(item => {
    const btn = item.querySelector('.nav-link[data-cat]');
    if (!btn) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Escape') item.classList.remove('open');
    });
  });

  // Close desktop dropdowns on outside click or scroll
  document.addEventListener('click', () =>
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'))
  );
  window.addEventListener('scroll', () =>
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'))
  , { passive: true });

  // Hamburger
  const ham = document.getElementById('cwHamburger');
  const mob = document.getElementById('cwMobile');
  if (ham && mob) {
    ham.addEventListener('click', e => {
      e.stopPropagation();
      const open = ham.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
      if (open) {
        mob.style.display = 'block';
        requestAnimationFrame(() => mob.classList.add('open'));
        document.body.style.overflow = 'hidden';
      } else {
        mob.classList.remove('open');
        document.body.style.overflow = '';
        mob.addEventListener('transitionend', () => {
          if (!mob.classList.contains('open')) mob.style.display = 'none';
        }, { once: true });
      }
    });
    document.addEventListener('click', e => {
      if (!ham.contains(e.target) && !mob.contains(e.target)) {
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
        mob.classList.remove('open');
        document.body.style.overflow = '';
        mob.style.display = 'none';
      }
    });
  }

  // Mobile submenu toggles
  document.querySelectorAll('.nav-mobile-item').forEach(item => {
    const btn = item.querySelector('.nav-mobile-btn');
    if (!btn) return;
    btn.addEventListener('click', () => item.classList.toggle('open'));
  });

  // Search button: delegate to page's openSearch() if available, else go to home
  document.getElementById('cwNavSearch')?.addEventListener('click', () => {
    if (typeof openSearch === 'function') {
      openSearch();
    } else {
      window.location.href = base + 'index.html#search';
    }
  });

})();
