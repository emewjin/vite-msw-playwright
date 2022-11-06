## Run test

yarn playwright

## Run with debugger

yarn workspace demo playwright --debug

## 주의사항

테스트를 실행할 때 테스트 케이스에서 실행하는 것 외에 msw worker를 같이 실행하면 안됩니다.
