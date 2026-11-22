# Testing kit (templates)

These files are the automation kit from sections 11, 12 and 13 of
[`docs/TESTING_PLAYBOOK.md`](../docs/TESTING_PLAYBOOK.md), copied as-is.

They are **templates, not active tests**. They assume a FastAPI `backend/`
plus a Next.js `frontend/` layout and endpoints such as `/students` and
`/auth/test-login`. Copy each file into place, drop the `.template` suffix, and adapt the paths,
endpoints and page list to this project (see section 14 of the playbook).

The `.py` and `.ts` files end in `.template` so that this project's own
TypeScript build, linter or pytest does not pick them up (many `tsconfig.json`
files include `**/*.ts`). The file contents are exactly as in the playbook.

They live here, and not in the real test folders or `.github/workflows/`,
because dropping them in directly would break repos that are built
differently, and could overwrite tests or CI that already exist.

| Template | Copy to |
| --- | --- |
| `backend/tests/conftest.py.template` | `backend/tests/conftest.py` |
| `backend/tests/test_api_contract.py.template` | `backend/tests/test_api_contract.py` |
| `backend/tests/test_input_fuzz.py.template` | `backend/tests/test_input_fuzz.py` |
| `frontend/playwright.config.ts.template` | `frontend/playwright.config.ts` |
| `frontend/e2e/helpers.ts.template` | `frontend/e2e/helpers.ts` |
| `frontend/e2e/human.spec.ts.template` | `frontend/e2e/human.spec.ts` |
| `.github/workflows/ci.yml` | `.github/workflows/ci.yml` (merge with any existing CI) |

Install lines:

```bash
pip install pytest pytest-cov httpx hypothesis schemathesis psycopg[binary]
npm i -D @playwright/test @axe-core/playwright
npx playwright install --with-deps
```

हिंदी: ये फ़ाइलें template हैं; अपने प्रोजेक्ट के हिसाब से बदलकर सही जगह copy कीजिए।
