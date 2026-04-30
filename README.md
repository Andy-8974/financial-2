# CalcWise — v3 Final Package
## Files included
- `index.html` — Homepage (drop at site root)
- `shared.js`  — Global nav, footer, search, modals (drop at site root)
- `subpage-snippet.html` — Copy-paste snippet to add to every calculator subpage

---

## How to apply to existing calculator subpages

### Step 1 — Remove old nav & footer
In each `/calculators/*.html` file, delete:
- Any existing `<nav>` or header block
- Any existing `<footer>` block
- Any existing Privacy/Home links in the footer

### Step 2 — Add shared.js (ONE line, before </body>)
```html
<script src="../shared.js"></script>
```
This auto-injects the new nav, footer, Privacy/Disclaimer modals, and search.

### Step 3 — Match banner color
The calculator page header/hero div should have:
```css
background: #0D1B2A;  /* dark navy — matches homepage */
color: #fff;
```
shared.js will attempt to set this automatically, but you can also add it manually.

### Step 4 — Add font link in <head> (if not already present)
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
```

---

## SVG Flags (fix for broken emoji)
The homepage uses inline SVG flags — no emoji characters.
For subpages that show USA/Canada toggle buttons, replace any emoji with:

**USA flag:**
```html
<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" style="border-radius:2px">
  <rect width="20" height="14" fill="#B22234"/>
  <rect y="1.08" width="20" height="1.08" fill="#fff"/>
  <rect y="3.23" width="20" height="1.08" fill="#fff"/>
  <rect y="5.38" width="20" height="1.08" fill="#fff"/>
  <rect y="7.54" width="20" height="1.08" fill="#fff"/>
  <rect y="9.69" width="20" height="1.08" fill="#fff"/>
  <rect y="11.85" width="20" height="1.08" fill="#fff"/>
  <rect width="8" height="7.54" fill="#3C3B6E"/>
</svg>
```

**Canada flag:**
```html
<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" style="border-radius:2px">
  <rect width="20" height="14" fill="#fff"/>
  <rect width="5" height="14" fill="#D52B1E"/>
  <rect x="15" width="5" height="14" fill="#D52B1E"/>
  <path d="M10 2.5L11 5.5H14L11.5 7.5L12.5 10.5L10 8.5L7.5 10.5L8.5 7.5L6 5.5H9L10 2.5Z" fill="#D52B1E"/>
</svg>
```

---

## Calculator count: 39 total
Mortgage (5): mortgage-calculator, mortgage-qualifier, cmhc-mortgage-insurance, rent-vs-buy, mortgage-refinance
Financial Planning (8): net-worth, emergency-fund, tfsa, rrsp-savings, rrsp-loan, fhsa, retirement-planning, retirement-withdrawal
Investing (7): compound-interest, roi, auto-investment-plan, investment-fees, rule-of-72, black-scholes, asset-allocation
Retirement (7): fire, roth-ira, 401k-contribution, 401k-save-max, ira-comparison, annuity, cpp-oas
Loans (5): personal-loan, car-loan, simple-interest, debt-payoff, lease-vs-buy
Other (7): income-tax, salary, sales-tax, currency-exchange, vacation-savings, capital-gains-tax, inflation
