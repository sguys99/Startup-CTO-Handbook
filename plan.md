# 번역 작업 계획 — The Startup CTO's Handbook (한국어)

Zach Goldberg의 *The Startup CTO's Handbook* 영문 전문을 자연스러운 한국어로 번역하는 프로젝트의 진행 관리 문서다.

- **원문**: `StartupCTOHandbook.md` (영문, 3,571줄 — 수정 금지)
- **번역본**: `ko/` 디렉토리에 절(H2) 단위 분할 파일로 작성
- **용어집/스타일시트**: `ko/_terms.md`

## 진행률 요약

| 구분 | 수치 |
|---|---|
| 전체 절(H2) | 29 |
| 완료(reviewed) | 0 |
| 윤문(humanized) | 28 |
| 초벌(draft) | 0 |
| 미착수 | 1 |

> `humanized` 상태: Phase 1~5의 모든 절(25개), Phase 6(맺음말), Phase 7(참고문헌), Phase 9(저자·출판사 소개)가 윤문 완료(28개).
> 본문 파일이 아직 없는 Phase 8의 1개 절(용어집)만 미착수다.

## 상태 정의 (범례)

각 절은 아래 3단계를 거친다. 절마다 `[ ] draft / [ ] humanized / [ ] reviewed` 3칸으로 추적한다.

- **draft** — 의미를 정확히 보존한 1차 번역 완료 (frontmatter `status: draft`)
- **humanized** — `/humanize-korean` 윤문 + `content-fidelity-auditor` 의미 보존 검증 완료 (`status: humanized`)
- **reviewed** — 사용자 리뷰 반영·확정 (`status: reviewed`)

---

## Phase 0 — 기반 정비 (선행 작업)

- [x] `ko/index.md` 생성 (표지 + 전체 목차 front matter)
- [x] `ko/SUMMARY.md` 생성 (order 기준 네비게이션 매니페스트)
- [x] `ko/_terms.md` 용어집 1차 점검 (이후 신규 절 진행 시 지속 보강)

---

## Phase 1 — Introduction (3/3 절 humanized)

- [x] `01-introduction/index.md` — Introduction (서론) (원문 122–163)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `01-introduction/the-author.md` — The Author (원문 164–179)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `01-introduction/using-this-book.md` — Using this Book (원문 180–207)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 2 — Business Processes (1/1 절 humanized)

- [x] `02-business-processes.md` — Business Processes (원문 208–212)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 3 — People & Culture (7/7 절 humanized)

- [x] `03-people-and-culture/01-management-fundamentals.md` — Management Fundamentals (원문 217–742)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `03-people-and-culture/02-hiring-and-interviewing.md` — Hiring and Interviewing (원문 744–1237)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `03-people-and-culture/03-onboarding.md` — Onboarding (원문 1238–1369)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `03-people-and-culture/04-performance-management.md` — Performance Management (원문 1370–1571)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `03-people-and-culture/05-team-makeup.md` — Team Makeup (원문 1572–1695)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `03-people-and-culture/06-leadership-responsibilities.md` — Leadership Responsibilities (원문 1696–1855)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `03-people-and-culture/07-cto-types.md` — Which Type of Startup CTO Are You? (원문 1856–1917)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 4 — Technical Team Management (5/5 절 humanized)

- [x] `04-technical-team-management/01-tech-culture.md` — Tech Culture and General Philosophy (원문 1924–2017)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `04-technical-team-management/02-tech-debt.md` — Tech Debt (원문 2018–2110) ✅ 파일럿 완료
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `04-technical-team-management/03-technology-roadmap.md` — Technology Roadmap (원문 2111–2161)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `04-technical-team-management/04-tech-process.md` — Tech Process (원문 2162–2347)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `04-technical-team-management/05-developer-experience.md` — Developer Experience (DX) (원문 2348–2404)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 5 — Tech Architecture (9/9 절 humanized)

- [x] `05-tech-architecture/01-architecture.md` — Architecture (원문 2415–2691)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/02-data-and-analytics.md` — Data and Analytics (원문 2692–2766)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/03-tools.md` — Tools (원문 2767–2816)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/04-devops.md` — DevOps (원문 2817–2988)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/05-testing.md` — Testing (원문 2989–3122)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/06-source-control.md` — Source Control (원문 3123–3228)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/07-production-escalations.md` — Production Escalations (원문 3229–3288)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/08-it.md` — IT (원문 3289–3304)
  - [x] draft  · [x] humanized  · [ ] reviewed
- [x] `05-tech-architecture/09-security-and-compliance.md` — Security and Compliance (원문 3305–3352)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 6 — Conclusion (1/1 절 humanized)

- [x] `06-conclusion.md` — Conclusion: Measuring Success (원문 3354–3378)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 7 — Book References (1/1 절 humanized)

- [x] `07-references.md` — Book References (원문 3379–3506)
  - [x] draft  · [x] humanized  · [ ] reviewed

## Phase 8 — Glossary (0/1 절)

- [ ] `08-glossary.md` — Glossary (원문 3507–3561)
  - [ ] draft  · [ ] humanized  · [ ] reviewed

## Phase 9 — About (1/1 절 humanized)

- [x] `09-about.md` — About the author / About the publisher (원문 3562–3571)
  - [x] draft  · [x] humanized  · [ ] reviewed

> 참고: 위 원문 행 범위는 탐색 결과 기준 추정치다. 각 절 착수 시 `StartupCTOHandbook.md`에서
> 실제 `##` 경계를 재확인해 해당 파일 frontmatter의 `source_lines`에 확정 기입한다.

---

## 절별 작업 표준 절차

각 절 체크박스를 진행할 때 아래 루틴을 따른다.

1. 원문(`StartupCTOHandbook.md`) 해당 구간을 정독하고, 대응 절 파일을 생성한다 (frontmatter `status: draft`).
2. 의미를 정확히 보존하며 1차 번역한다 → `draft` 체크.
3. `/humanize-korean` 스킬로 윤문하고, `content-fidelity-auditor`로 원문 의미 보존을 검증한다 → `status: humanized`, 체크.
4. 사용자 리뷰를 반영해 확정한다 → `status: reviewed`, 체크.
5. 신규 용어는 `ko/_terms.md`에 추가하고, `ko/SUMMARY.md`·`ko/index.md` 목차를 갱신한다.
6. **챕터(Phase) 단위로 끊어 중간 공유**한다 (CLAUDE.md 워크플로우).

## frontmatter 컨벤션 (파일럿 기준)

```yaml
---
title: "한국어 제목"
title_en: "English Title"
chapter: "Chapter Name"
order: NNN        # 챕터·절 순서 (예: 402 = 4장 2번째 절)
source_lines: "시작-끝"
status: draft     # draft → humanized → reviewed
---
```

- 원문 `##`(H2) → 번역본 파일의 단독 `#`(H1)로 한 단계 승급한다.
- 원문 `###`(H3) 이하는 레벨을 그대로 유지한다.
- 제목 계층·목록·표·코드블록·링크 URL은 원문과 동일하게 보존한다. 번역은 본문 텍스트에만 적용한다.
