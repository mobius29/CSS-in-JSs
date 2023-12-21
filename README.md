# Practice CSS-in-JS Libraries

## Common Environment

- node@20.9.0
- pnpm@8.10.0

- react@^18
- next@14.0.4 (page router)
- typescript@^5

## CSS-in-JSs (alphabetical)

- @emotion/react@^11.11.1 (runtime)
- @stylexjs/stylex@^0.3.0 (compiletime)
- style-components@^6.1.2 (runtime)

## Why use CSS-in-JS

- css 파일을 생성할 필요가 없이 컴포넌트 파일 내부에 작성할 수 있어 유지보수가 편해진다.
- JavaScript 변수를 활용하여 코드의 중복을 줄일 수 있다.
- 사용하는 스타일만 DOM에 포함시킨다.

## Why do not use CSS-in-JS

- JavaScript로 쓰여진 스타일을 런타임에 CSS로 직렬화해야하기 때문에 성능면에서 느릴 수 있다.
- 외부 라이브러리 사용이 필수기 때문에 번들 크기가 증가한다.
