# SUMMARY — 네비게이션 매니페스트

이 문서는 번역본 전체의 **순서(order)와 파일 매핑**을 관리하는 단일 네비게이션 매니페스트다.
각 절 파일의 frontmatter `order` 값과 일치시키며, 새 절을 추가하거나 상태가 바뀌면 여기를 갱신한다.

- `order` 규칙: `장*100 + 절`(예: `402` = 4장 2번째 절). 장 표지/인트로는 `*00`.
- `status`: `미착수 → draft → humanized → reviewed`
- `source_lines`: 원문 `StartupCTOHandbook.md`의 `##`(H2) 경계 기준. 절 착수 시 재확인.

| order | 파일 | 제목 (KO / EN) | source_lines | status |
|---|---|---|---|---|
| 0 | [index.md](index.md) | 표지·차례 / Cover & Contents | 1–121 | reference |
| 100 | [01-introduction/index.md](01-introduction/index.md) | 서론 / Introduction | 122–163 | 미착수 |
| 101 | [01-introduction/the-author.md](01-introduction/the-author.md) | 저자에 대하여 / The Author | 164–179 | 미착수 |
| 102 | [01-introduction/using-this-book.md](01-introduction/using-this-book.md) | 이 책을 활용하는 법 / Using this Book | 180–207 | 미착수 |
| 200 | [02-business-processes.md](02-business-processes.md) | 비즈니스 프로세스 / Business Processes | 208–214 | 미착수 |
| 301 | [03-people-and-culture/01-management-fundamentals.md](03-people-and-culture/01-management-fundamentals.md) | 관리의 기본기 / Management Fundamentals | 217–743 | 미착수 |
| 302 | [03-people-and-culture/02-hiring-and-interviewing.md](03-people-and-culture/02-hiring-and-interviewing.md) | 채용과 면접 / Hiring and Interviewing | 744–1237 | 미착수 |
| 303 | [03-people-and-culture/03-onboarding.md](03-people-and-culture/03-onboarding.md) | 온보딩 / Onboarding | 1238–1369 | 미착수 |
| 304 | [03-people-and-culture/04-performance-management.md](03-people-and-culture/04-performance-management.md) | 성과 관리 / Performance Management | 1370–1571 | 미착수 |
| 305 | [03-people-and-culture/05-team-makeup.md](03-people-and-culture/05-team-makeup.md) | 팀 구성 / Team Makeup | 1572–1695 | 미착수 |
| 306 | [03-people-and-culture/06-leadership-responsibilities.md](03-people-and-culture/06-leadership-responsibilities.md) | 리더의 책임 / Leadership Responsibilities | 1696–1855 | 미착수 |
| 307 | [03-people-and-culture/07-cto-types.md](03-people-and-culture/07-cto-types.md) | 당신은 어떤 유형의 스타트업 CTO인가? / Which Type of Startup CTO Are You? | 1856–1917 | 미착수 |
| 401 | [04-technical-team-management/01-tech-culture.md](04-technical-team-management/01-tech-culture.md) | 기술 문화와 전반적 철학 / Tech Culture and General Philosophy | 1924–2017 | 미착수 |
| 402 | [04-technical-team-management/02-tech-debt.md](04-technical-team-management/02-tech-debt.md) | 기술 부채 / Tech Debt | 2018–2110 | humanized |
| 403 | [04-technical-team-management/03-technology-roadmap.md](04-technical-team-management/03-technology-roadmap.md) | 기술 로드맵 / Technology Roadmap | 2111–2161 | 미착수 |
| 404 | [04-technical-team-management/04-tech-process.md](04-technical-team-management/04-tech-process.md) | 기술 프로세스 / Tech Process | 2162–2347 | 미착수 |
| 405 | [04-technical-team-management/05-developer-experience.md](04-technical-team-management/05-developer-experience.md) | 개발자 경험(DX) / Developer Experience (DX) | 2348–2405 | 미착수 |
| 501 | [05-tech-architecture/01-architecture.md](05-tech-architecture/01-architecture.md) | 아키텍처 / Architecture | 2415–2691 | 미착수 |
| 502 | [05-tech-architecture/02-data-and-analytics.md](05-tech-architecture/02-data-and-analytics.md) | 데이터와 분석 / Data and Analytics | 2692–2766 | 미착수 |
| 503 | [05-tech-architecture/03-tools.md](05-tech-architecture/03-tools.md) | 도구 / Tools | 2767–2816 | 미착수 |
| 504 | [05-tech-architecture/04-devops.md](05-tech-architecture/04-devops.md) | DevOps | 2817–2988 | 미착수 |
| 505 | [05-tech-architecture/05-testing.md](05-tech-architecture/05-testing.md) | 테스트 / Testing | 2989–3122 | 미착수 |
| 506 | [05-tech-architecture/06-source-control.md](05-tech-architecture/06-source-control.md) | 소스 관리 / Source Control | 3123–3228 | 미착수 |
| 507 | [05-tech-architecture/07-production-escalations.md](05-tech-architecture/07-production-escalations.md) | 장애 대응 / Production Escalations | 3229–3288 | 미착수 |
| 508 | [05-tech-architecture/08-it.md](05-tech-architecture/08-it.md) | IT | 3289–3304 | 미착수 |
| 509 | [05-tech-architecture/09-security-and-compliance.md](05-tech-architecture/09-security-and-compliance.md) | 보안과 컴플라이언스 / Security and Compliance | 3305–3353 | 미착수 |
| 600 | [06-conclusion.md](06-conclusion.md) | 맺음말: 성공을 측정하기 / Conclusion: Measuring Success | 3354–3378 | 미착수 |
| 700 | [07-references.md](07-references.md) | 참고문헌 / Book References | 3379–3506 | 미착수 |
| 800 | [08-glossary.md](08-glossary.md) | 용어집 / Glossary | 3507–3561 | 미착수 |
| 900 | [09-about.md](09-about.md) | 저자·출판사 소개 / About | 3562–3571 | 미착수 |

> **참고**: 위 `source_lines`는 원문 `#`/`##` 헤딩 위치를 기준으로 산정했다. 각 절 착수 시
> 실제 경계를 재확인하고, 해당 파일 frontmatter의 `source_lines`와 본 표를 함께 갱신한다.
