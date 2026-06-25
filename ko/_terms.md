# 번역 용어집 / 스타일시트 (Translation Memory)

이 문서는 번역 전체의 **용어 일관성**과 **문체 규칙**을 유지하기 위한 단일 출처다.
새 용어가 등장하면 여기에 추가하고, 이후 모든 절에서 동일하게 적용한다.

## 표기 원칙

- **첫 등장**: 본문에서 기술 용어·인명·제품명이 처음 나올 때 `한글(English)`로 병기하고, 이후로는 한글만 사용한다.
- **참고문헌 책 제목**: 영문 원제를 그대로 유지한다(예: *The Phoenix Project*).
- **외부 단축 URL**(`ctohb.com/...`): 원문 그대로 보존한다.
- **숫자·통계·인용**: 원문 수치를 그대로 옮긴다.
- **문체**: 번역투·피동 남용·기계적 병렬을 피하고 자연스러운 한국어 서술체(`~다`)를 기본으로 한다.

## 핵심 용어 대응표

| English | 한국어 | 비고 |
|---|---|---|
| tech debt / technical debt | 기술 부채 | |
| onboarding | 온보딩 | |
| roadmap | 로드맵 | |
| startup | 스타트업 | |
| CTO | CTO | 원문 표기 유지 |
| engineering | 엔지니어링 | 문맥상 '개발'도 허용 |
| engineer | 엔지니어 | |
| stakeholder | 이해관계자 | |
| sprint | 스프린트 | |
| feature | 기능 | |
| codebase | 코드베이스 | |
| architecture | 아키텍처 | |
| infrastructure | 인프라 | infrastructure debt → 인프라 부채 |
| observability | 관측 가능성(observability) | 첫 등장 병기 |
| uptime | 가동 시간 | |
| Mean Time to Recovery (MTTR) | 평균 복구 시간(MTTR) | |
| developer experience (DX) | 개발자 경험(DX) | |
| performance management | 성과 관리 | |
| leadership | 리더십 | |
| velocity | 벨로시티(velocity) | 개발 속도 맥락 |
| proof of concept (PoC) | 개념 증명(PoC) | |
| just-in-time | 적시(just-in-time) | |
| cooldown | 쿨다운(cooldown) | Shape Up 맥락 |
| Shape Up | Shape Up | 방법론명, 원문 유지 |
| customer crew | 고객 크루(customer crew) | 저자 고유 용어 |
| tech debt bankruptcy | 기술 부채 파산 | 저자 고유 용어 |
| debt inventory | 부채 인벤토리 | |

## 고유명사 / 제품·회사명

| English | 표기 |
|---|---|
| Golden Gate Bridge | 금문교(Golden Gate Bridge) |
| Google | 구글(Google) |
| Zach Goldberg | 잭 골드버그(Zach Goldberg) |

## 상호 참조(page 표기) 처리

원문의 `(see ..., page NN)` 형식은 번역본에서 **해당 절로 가는 상대 링크**로 바꾼다.
예: `(see Tech Process, page 157)` → `([Tech Process](../04-technical-team-management/04-tech-process.md))`.
대응 파일이 아직 없으면 링크 텍스트만 두고 추후 연결한다.
