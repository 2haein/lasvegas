# lasvegas

## React-Native

### react-native-cli 설치
- npm install react-native-cli

### lasvegas 프로젝트 생성
react-native init lasvegas

### 안드로이드 avd 실행
안드로이드 스튜디오에서 API30 이상의 에뮬레이터 설치 후 실행

### vscode 에서 실행(안드로이드 에뮬레이터가 켜져있어야함)
콘솔창에서 아래 명령어 수행
1. cd lasvegas        >>> (lasvegas/lasvegas 폴더로 이동)
2. npm run android    >>> (안드로이드로 실행하기)

안드로이드 실행 시 Unable to load script 에러 해결
프로젝트 파일(lasvegas) > android > app > src > main
폴더로 이동 후 assets 폴더가 있는지 확인 후 없으면 생성.
명령 프롬프트에서 프로젝트\android 경로로 이동 후
./gradlew clean 명령어 수행.
lasvegas 폴더로 이동 후 
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
명령어 수행.

- 참고 : 
- https://velog.io/@s2ilver8/React-Native-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0
- https://yuddomack.tistory.com/entry/1React-Native-%EC%84%A4%EC%B9%98%EC%99%80-%EC%8B%A4%ED%96%89hello-world
