# Global Testing Playbook

हर प्रोजेक्ट में, हर फीचर पर यह checklist चलाइए। Feature तभी done माना जाएगा जब हर लागू item का टेस्ट लिखा हो।

## 1. Workflow: हर फीचर का Definition of Done

- पहले use cases लिखिए (नीचे वाली checklist से), फिर टेस्ट, फिर code (TDD)।
- Unit tests: हर function और business rule।
- Integration tests: API + DB + auth एक साथ।
- E2E tests (Playwright): हर मुख्य user journey।
- CI में हर PR पर सारे टेस्ट चलें; fail हो तो merge नहीं होगा।
- हर bug fix से पहले उस bug को पकड़ने वाला टेस्ट लिखिए (regression test)।

## 2. Input checklist (हर form और field)

- खाली, सिर्फ spaces, बहुत लंबा, बहुत छोटा
- गलत format: email, phone, date, number में letters
- Negative, zero, decimal, बहुत बड़े numbers
- Special characters, emoji, हिंदी/Unicode, copy-paste किया हुआ text
- HTML/script डालकर देखिए (XSS), SQL जैसे characters डालकर देखिए
- Required field छोड़ना, duplicate data (वही email दोबारा)
- File upload: गलत type, 0 byte, बहुत बड़ी file, गलत extension वाली file

## 3. UI states (हर screen)

- Loading, empty, error, success, partial data
- 1 item, 0 items, 10,000 items (pagination, scroll)
- बहुत लंबे नाम या text से layout टूटता है या नहीं
- Mobile, tablet, desktop; छोटी screen; zoom 200%
- Dark mode (अगर है)
- Keyboard-only navigation, screen reader labels, color contrast

## 4. User behaviour

- Submit पर double/triple click (duplicate request)
- Beech में back button, refresh, tab बंद करना
- दो tabs में एक साथ एक ही record edit करना
- Session expire होने के बाद action करना
- URL हाथ से बदलकर किसी और का data खोलना
- Form भरते-भरते दूसरी page पर जाना (unsaved changes warning)

## 5. Network और server

- Slow 3G, offline, बीच में connection टूटना
- API 400, 401, 403, 404, 409, 422, 500, timeout: हर एक पर साफ़ message
- Retry करने पर duplicate data न बने (idempotency)
- Third-party service down हो (payment, email, SMS)

## 6. Auth और permissions

- हर role से हर page और API: allowed और denied दोनों टेस्ट
- Logout के बाद back button से data न दिखे
- Password reset, token expiry, गलत token
- Rate limiting: बार-बार गलत login

## 7. Data और business logic

- Boundary values: limit से ठीक पहले, ठीक पर, ठीक बाद
- Timezone, date के किनारे (महीने का आखिरी दिन, leap year, midnight)
- Currency और rounding
- Delete करने पर जुड़ा हुआ data (cascade, soft delete)
- Concurrent updates, race conditions
- Migration के बाद पुराना data सही चले

## 8. Non-functional

- Performance: page load, बड़ा data, load test (k6)
- Security scan: dependencies (npm audit), OWASP Top 10
- Visual regression: screenshot comparison
- Accessibility scan: axe
- Desktop app (Tauri): install, update, offline, OS-wise टेस्ट

## 9. Production safety net

- Error monitoring (Sentry) + alerts
- हर production error को एक नया टेस्ट बनाइए
- Feature flags और rollback plan
- Backup और restore का टेस्ट

## 10. सच्चाई

कोई भी टेस्टिंग 100% गारंटी नहीं देती। लक्ष्य यह है कि हर छूटा case एक बार ही छूटे: मिलते ही टेस्ट बनाइए और इस checklist में जोड़ दीजिए। समय के साथ यह playbook आपकी अपनी गलतियों से और मज़बूत होता जाएगा।

## 11. Automation Kit: Python + Postgres backend

हर प्रोजेक्ट में यह folder structure copy कीजिए। Backend tests असली Postgres पर चलते हैं (mock नहीं), ताकि integration bugs छूटें नहीं।

```text
project/
  backend/
    tests/
      conftest.py
      test_api_contract.py
      test_input_fuzz.py
  frontend/
    e2e/
      helpers.ts
      human.spec.ts
    playwright.config.ts
  .github/workflows/ci.yml
  .github/pull_request_template.md
```

Install:

```bash
pip install pytest pytest-cov httpx hypothesis schemathesis psycopg[binary]
```

### conftest.py: हर टेस्ट के लिए साफ़ database

यह FastAPI मानकर लिखा है; Django हो तो pytest-django के db fixture इस्तेमाल कीजिए।

```python
import os, pytest, psycopg
from fastapi.testclient import TestClient
from app.main import app

DB_URL = os.environ["TEST_DATABASE_URL"]

@pytest.fixture(autouse=True)
def clean_db():
    yield
    with psycopg.connect(DB_URL, autocommit=True) as c:
        tables = [r[0] for r in c.execute(
            "select tablename from pg_tables where schemaname='public' and tablename <> 'alembic_version'")]
        if tables:
            c.execute("truncate " + ",".join(f'"{t}"' for t in tables) + " restart identity cascade")

@pytest.fixture
def client():
    return TestClient(app)

@pytest.fixture
def auth_client(client):
    def make(role="admin"):
        r = client.post("/auth/test-login", json={"role": role})
        client.headers["Authorization"] = f"Bearer {r.json()['token']}"
        return client
    return make
```

### test\_api\_contract.py: हर endpoint अपने आप टेस्ट

Schemathesis आपकी OpenAPI spec पढ़कर हर endpoint पर हज़ारों गलत, खाली और अजीब inputs भेजता है, और 500 error या spec से अलग response पकड़ता है। नया endpoint जोड़ा तो टेस्ट अपने आप बढ़ जाता है।

```python
import schemathesis
from app.main import app

schema = schemathesis.openapi.from_asgi("/openapi.json", app)

@schema.parametrize()
def test_every_endpoint(case):
    case.call_and_validate()
```

### test\_input\_fuzz.py: human input के edge cases

```python
import pytest

NASTY = ["", " ", "a" * 10000, "<script>alert(1)</script>", "' OR 1=1 --",
         "राम 😀", "null", "-1", "0", "99999999999999999999", "\u0000"]

@pytest.mark.parametrize("value", NASTY)
def test_create_never_500(auth_client, value):
    r = auth_client().post("/students", json={"name": value, "email": value})
    assert r.status_code < 500

def test_double_submit_no_duplicate(auth_client):
    c = auth_client()
    body = {"name": "A", "email": "a@x.com"}
    c.post("/students", json=body); c.post("/students", json=body)
    assert len(c.get("/students").json()) == 1

@pytest.mark.parametrize("role,expected", [("admin", 200), ("teacher", 403), ("student", 403)])
def test_permissions(auth_client, role, expected):
    assert auth_client(role).delete("/students/1").status_code in (expected, 404)

def test_no_token_401(client):
    assert client.get("/students").status_code == 401
```

/students और /auth/test-login सिर्फ़ उदाहरण हैं; अपने endpoints के नाम डालिए। test-login सिर्फ़ test environment में ही चालू होना चाहिए।

## 12. Automation Kit: React / Next.js frontend

React (Vite) और Next.js दोनों में यही setup चलता है; बस `webServer.command` और port बदलिए।

```bash
npm i -D @playwright/test @axe-core/playwright
npx playwright install --with-deps
```

### playwright.config.ts

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  retries: process.env.CI ? 2 : 0,
  use: { baseURL: 'http://localhost:3000', trace: 'on-first-retry', screenshot: 'only-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
    { name: 'safari', use: { ...devices['iPhone 14'] } },
  ],
  webServer: { command: 'npm run dev', port: 3000, reuseExistingServer: !process.env.CI },
});
```

### e2e/helpers.ts: हर form पर लागू होने वाले human tests

एक बार लिखिए, हर प्रोजेक्ट के हर form पर चलाइए।

```ts
import { Page, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export const NASTY = ['', '   ', 'a'.repeat(5000), '<script>alert(1)</script>', 'राम 😀', '-1'];

export async function noA11yErrors(page: Page) {
  const r = await new AxeBuilder({ page }).analyze();
  expect(r.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toEqual([]);
}

export async function noConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on('console', m => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', e => errors.push(e.message));
  return () => expect(errors).toEqual([]);
}

export async function formSurvivesHumans(page: Page, url: string, submit: string) {
  for (const v of NASTY) {
    await page.goto(url);
    for (const input of await page.locator('input:visible, textarea:visible').all()) await input.fill(v);
    await page.getByRole('button', { name: submit }).click();
    await expect(page.locator('body')).not.toContainText(/500|Internal Server Error|undefined|NaN/);
  }
}

export async function doubleClickSafe(page: Page, submit: string, apiPath: string) {
  let calls = 0;
  page.on('request', r => r.url().includes(apiPath) && r.method() === 'POST' && calls++);
  await page.getByRole('button', { name: submit }).dblclick();
  await page.waitForTimeout(1000);
  expect(calls).toBeLessThanOrEqual(1);
}

export async function survivesOfflineAndSlow(page: Page, url: string) {
  await page.goto(url);
  await page.context().setOffline(true);
  await page.reload().catch(() => {});
  await page.context().setOffline(false);
  await page.route('**/api/**', async r => { await new Promise(s => setTimeout(s, 3000)); await r.continue(); });
  await page.goto(url);
  await expect(page.getByRole('progressbar').or(page.getByText(/loading/i))).toBeVisible();
}

export async function showsServerErrorNicely(page: Page, url: string) {
  await page.route('**/api/**', r => r.fulfill({ status: 500, body: '{}' }));
  await page.goto(url);
  await expect(page.getByRole('alert')).toBeVisible();
}
```

### e2e/human.spec.ts: हर page के लिए बस एक line

```ts
import { test, expect } from '@playwright/test';
import * as h from './helpers';

const PAGES = ['/', '/login', '/dashboard'];

for (const url of PAGES) {
  test(`${url}: a11y, console, slow, offline, 500`, async ({ page }) => {
    const check = await h.noConsoleErrors(page);
    await page.goto(url);
    await h.noA11yErrors(page);
    await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixelRatio: 0.01 });
    await h.showsServerErrorNicely(page, url);
    check();
  });
}

test('login form survives humans', async ({ page }) => {
  await h.formSurvivesHumans(page, '/login', 'Login');
});

test('back button after logout shows no data', async ({ page }) => {
  await page.goto('/dashboard');
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.goBack();
  await expect(page).toHaveURL(/login/);
});
```

नया page बना तो उसका path `PAGES` में जोड़ दीजिए; बाकी सारे checks अपने आप चलेंगे। Loading के लिए `role=progressbar` और error के लिए `role=alert` UI में रखिए, यह accessibility के लिए भी सही है।

## 13. Automation Kit: CI जो हर PR पर सब चलाए

### .github/workflows/ci.yml

```yaml
name: CI
on: [push, pull_request]

jobs:
  backend:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env: { POSTGRES_PASSWORD: test, POSTGRES_DB: test }
        ports: ['5432:5432']
        options: >-
          --health-cmd pg_isready --health-interval 5s --health-retries 10
    env:
      DATABASE_URL: postgresql://postgres:test@localhost:5432/test
      TEST_DATABASE_URL: postgresql://postgres:test@localhost:5432/test
    defaults: { run: { working-directory: backend } }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.12', cache: pip }
      - run: pip install -r requirements.txt pytest pytest-cov httpx hypothesis schemathesis 'psycopg[binary]' pip-audit
      - run: alembic upgrade head
      - run: pytest --cov=app --cov-fail-under=80 -q
      - run: pip-audit

  frontend:
    runs-on: ubuntu-latest
    needs: backend
    defaults: { run: { working-directory: frontend } }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm, cache-dependency-path: frontend/package-lock.json }
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npm run lint --if-present
      - run: npm test --if-present
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - run: npm audit --audit-level=high
      - uses: actions/upload-artifact@v4
        if: failure()
        with: { name: playwright-report, path: frontend/playwright-report }
```

GitHub में Settings, फिर Branches में जाकर main पर branch protection लगाइए और दोनों jobs को required कर दीजिए। तब कोई भी fail टेस्ट merge नहीं होगा। Frontend के E2E के लिए backend भी चलना चाहिए: या तो `webServer` में दोनों commands दीजिए, या API को Playwright की `page.route` से mock कीजिए।

### .github/pull\_request\_template.md: जो code नहीं पकड़ सकता

```markdown
## Human checklist
- [ ] नए use cases Playbook sections 2-7 से निकाले और हर एक का test लिखा
- [ ] Bug fix है तो पहले failing test लिखा
- [ ] नया page PAGES list में जोड़ा, नया endpoint OpenAPI में है
- [ ] Mobile पर हाथ से एक बार चलाकर देखा
- [ ] Loading, empty, error state तीनों दिखते हैं
- [ ] हर role से permission चेक किया
- [ ] DB migration rollback चेक किया
```

## 14. Setup एक बार, फिर हर प्रोजेक्ट में

1. GitHub पर एक template repo बनाइए, जैसे `my-stack-template`, और sections 11 से 13 की files उसमें डालिए।
2. Repo settings में "Template repository" चालू कीजिए।
3. हर नया प्रोजेक्ट "Use this template" से बनाइए; tests और CI पहले दिन से चालू रहेंगे।
4. जब भी कोई bug production में मिले, उसका test template repo में भी जोड़िए, ताकि अगले सारे प्रोजेक्ट को फ़ायदा मिले।

पुराने प्रोजेक्ट (ERP, Tauri app) में ये तीनों folders copy कीजिए और endpoints और page paths अपने हिसाब से बदल दीजिए।

## 15. Production bug loop: हर bug एक नया permanent test

नियम: production में कोई bug फटे तो उसका test बने बिना वह close नहीं होगा, और अगर वह बाकी प्रोजेक्ट्स में भी हो सकता है तो वह template और इस playbook में भी जाएगा।

1. **Error अपने आप पकड़ा जाए (automatic)**: backend में `sentry-sdk` और frontend में `@sentry/react` या `@sentry/nextjs` लगाइए। Sentry में GitHub integration और alert rule बनाइए ताकि नया error आते ही GitHub issue अपने आप बने, label `prod-bug` के साथ।
2. **Failing test लिखिए (आपकी नज़र ज़रूरी)**: issue की details से ऐसा test लिखिए जो वही bug दोहराए और fail हो। Claude Code से करवाना हो तो कहिए: "इस issue के लिए पहले failing regression test लिखो, फिर fix करो"। Test का नाम `test_regression_<issue number>` रखिए।
3. **Fix कीजिए**: test pass होना चाहिए और बाकी सारे tests भी।
4. **Template में डालिए (आपकी नज़र ज़रूरी)**: अगर bug आम है, जैसे double submit, timezone या permission, तो test को generic बनाकर `my-stack-template` में डालिए और इस playbook के सही section में एक line जोड़िए।
5. **CI रोकेगा (automatic)**: वह test हर PR पर चलता है, इसलिए यही bug दोबारा आया तो merge नहीं होगा।

### PR template में यह line जोड़िए

```markdown
- [ ] prod-bug है तो regression test जोड़ा, और ज़रूरत हो तो template + playbook भी update किया
```

### CI check: prod-bug PR बिना test के merge न हो

`.github/workflows/regression-guard.yml`:

```yaml
name: Regression guard
on:
  pull_request:
    types: [opened, edited, synchronize, labeled]
jobs:
  guard:
    if: contains(github.event.pull_request.labels.*.name, 'prod-bug')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - run: |
          git diff --name-only origin/${{ github.base_ref }}...HEAD | grep -E '(tests/|e2e/)' \
            || (echo 'prod-bug PR में कोई test नहीं बदला' && exit 1)
```

इसे भी branch protection में required कर दीजिए।
