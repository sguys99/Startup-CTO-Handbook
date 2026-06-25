# CLAUDE.md

이 저장소는 Zach Goldberg의 책 ***The Startup CTO's Handbook*** 영문 전문을 담고 있으며,
이를 **자연스러운 한국어로 번역**하는 프로젝트입니다.

- **원문**: `StartupCTOHandbook.md` (영문, 약 3,500줄) — **수정하지 않고 보존**합니다.
- **번역본**: `ko/` 디렉토리에 챕터별 분할 파일로 작성합니다.
- **번역 품질**: AI 번역투를 제거하고 사람이 쓴 듯한 자연스러운 한국어를 지향합니다.

## ⚠️ Git 작업 규칙 (필수)

- **별도 지시가 없으면 무조건 `main` 브랜치에서 직접 작업·커밋·푸시합니다.**
  사용자가 명시적으로 요청하지 않는 한 새 브랜치를 만들지 않습니다.
- 브랜치/PR이 필요하면 사용자가 직접 지시할 때만 생성합니다.

## 저장소 구조

```
.
├── StartupCTOHandbook.md   # 원문 (영문 전체, 단일 출처 — 수정 금지)
├── README.md               # 프로젝트 소개
├── LICENSE                 # 라이선스
├── ko/                     # 한국어 번역 (절 단위 분할) — 작업 산출물
│   ├── index.md            # 표지 + 전체 목차 (front matter)
│   ├── SUMMARY.md          # 네비게이션 매니페스트 (order 기준)
│   ├── _terms.md           # 번역 용어집/스타일시트 (translation memory)
│   ├── 01-introduction/    # index.md, the-author.md, using-this-book.md
│   ├── 02-business-processes.md
│   ├── 03-people-and-culture/        # 01-management-fundamentals.md … 07-cto-types.md
│   ├── 04-technical-team-management/ # 01-tech-culture.md … 05-developer-experience.md
│   ├── 05-tech-architecture/         # 01-architecture.md … 09-security-and-compliance.md
│   ├── 06-conclusion.md
│   ├── 07-references.md
│   ├── 08-glossary.md
│   └── 09-about.md
└── published_files/        # 원본 출판 산출물 (PDF/DOCX/표지) — 참고용
```

> 큰 챕터(People & Culture 등)는 챕터 폴더 + 절(H2)별 파일로 잘게 나눕니다.
> 각 절 파일은 단일 H1(원문 `##`→`#`로 한 단계 승급) + YAML frontmatter
> (`title·title_en·chapter·order·source_lines·status`)를 둡니다.
> 산출 컨벤션은 파일럿(`ko/04-technical-team-management/02-tech-debt.md`)에서 확정됐습니다.

## 원문 챕터 구조

`StartupCTOHandbook.md`의 주요 장(H1)과 절(H2):

1. **Introduction** — The Author, Using this Book
2. **Business Processes**
3. **People & Culture** — Management Fundamentals, Hiring and Interviewing, Onboarding,
   Performance Management, Team Makeup, Leadership Responsibilities, CTO 유형
4. **Technical Team Management** — Tech Culture, Tech Debt, Technology Roadmap,
   Tech Process, Developer Experience(DX)
5. **Tech Architecture** — Architecture, Data & Analytics, Tools, DevOps, Testing,
   Source Control, Production Escalations, IT, Security & Compliance
6. **Conclusion: Measuring Success**
7. **Book References** / **Glossary** / **About**

각 절은 위 구조의 `ko/.../*.md` 파일에 1:1로 대응시켜 번역합니다.

## 번역 워크플로우

1. **번역 단위**: 절(H2) 단위로 진행하되, 챕터 단위로 끊어 중간 공유합니다.
   원문에서 해당 구간을 읽고 대응하는 절 파일에 작성합니다(frontmatter `status: draft`).
   윤문·감사 완료 시 `status: humanized` → 사용자 리뷰 후 `reviewed`로 갱신합니다.
2. **1차 번역**: 의미를 정확히 보존하며 한국어로 옮깁니다.
3. **윤문**: `/humanize-korean` 스킬로 AI 번역투·피동 남용·기계적 병렬·어색한
   리듬을 다듬어 자연스러운 문체로 만듭니다. **내용·사실·수치·인용은 바꾸지 않습니다.**
4. **구조 보존**: 원문의 제목 계층(`#`/`##`/`###`), 목록, 표, 코드블록, 링크를
   그대로 유지합니다. 번역은 본문 텍스트에만 적용합니다.

## 번역 컨벤션

- **원문 보존**: `StartupCTOHandbook.md`는 절대 수정하지 않습니다. 모든 번역은 `ko/` 아래에만 작성합니다.
- **용어 일관성**: 기술 용어는 저장소 전체에서 동일하게 옮깁니다.
  (예: tech debt → 기술 부채, onboarding → 온보딩, roadmap → 로드맵)
  고유명사·제품명·인명은 원문 표기를 유지하거나 첫 등장 시 `한글(English)` 병기.
- **마크다운 구조 유지**: 헤딩 레벨, 목록 들여쓰기, 표, 링크 URL을 원문과 동일하게 둡니다.
- **자연스러운 문체**: 직역체·번역투를 지양합니다. 영어 어순을 그대로 옮기지 말고
  한국어 독자가 읽기 자연스러운 문장으로 재구성하되 의미는 보존합니다.
- **고유명사·인용**: 책·도구·회사명, 인용문, 통계 수치는 원문 그대로 보존합니다.

## 한국어 윤문 도구

이 저장소에는 한국어 윤문 인프라가 설치되어 있습니다:

- `/humanize-korean` 스킬 — AI 티(번역투·피동·기계적 병렬 등 10대 패턴)를 탐지·제거하는 오케스트레이터
- `.claude/agents/humanize/` — 탐지·윤문·감수 전문 에이전트
  (korean-style-rewriter, korean-translation-scholar, naturalness-reviewer,
  content-fidelity-auditor 등)

번역 후 윤문 단계에서 위 도구를 활용합니다. 특히 `content-fidelity-auditor`로
**원문 의미가 훼손되지 않았는지** 검증합니다.

## 라이선스

원문은 원저작자(Zach Goldberg)의 라이선스를 따릅니다(`LICENSE` 참고).
번역본 작성·배포 시 원저작권과 라이선스 조건을 준수합니다.
