# site/ — 웹 전자책 빌드

`ko/` 디렉터리의 한국어 번역(마크다운)을 정적 HTML 전자책으로 빌드합니다.
프레임워크 없이 Node 스크립트(`marked` + `gray-matter`)로 렌더링하고,
검색은 [Pagefind](https://pagefind.app)로 인덱싱합니다.

## 명령

```bash
npm install        # 의존성 설치
npm run build      # ../dist 로 빌드 + 검색 인덱스 생성
npm run preview    # 빌드 후 http://localhost:4173 에서 미리보기
```

## 구조

```
build.mjs            빌드 엔트리 (콘텐츠 로드 → 렌더 → dist 출력 → 표지/파비콘 복사)
lib/content.mjs      ko/**/*.md 로드, frontmatter 파싱, order 정렬, 챕터 그룹핑
lib/markdown.mjs     marked 렌더, h2/h3 id 부여 + 페이지 TOC, 내부 .md 링크 재작성
lib/templates.mjs    layout / 홈 / 절 페이지 HTML
assets/              styles.css(라이트·다크), theme.js, reader.js, search.js
```

## base path

- 로컬: `BASE=''` (기본값) → 링크가 `/...`
- 배포(GitHub Pages 프로젝트 페이지): `BASE=/Startup-CTO-Handbook`
  - `.github/workflows/deploy.yml` 에서 환경변수로 주입합니다.

## 콘텐츠 원칙

`StartupCTOHandbook.md` 와 `ko/**/*.md` 는 **읽기 전용 입력**입니다. 빌드는 이 파일들을
수정하지 않으며, 산출물은 모두 `../dist` 에만 생성됩니다(.gitignore 처리).
