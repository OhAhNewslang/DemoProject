# DemoProject
프로토타입 개발

# spring기반 프로젝트

# git 기본 초기 설정
1. git config --global user.name "본인이름"
2. git config --global user.email "본인 이메일 주소"
3. git config --list

# git pullrequest
1. organization repo를 본인 계정으로 fork (우측 상단 fork 버튼)
2. 본인 계정의 fork된 repo의 링크를 복사해서 노트북 및 컴퓨터 로컬 저장소에 clone
    cmd창에서 cd명령을 통해 원하는 폴더로 이동 후 git clone "repo_link"
    ex) cd C:\dev\shcool_project
        git clone https://github.com/git닉네임/repo이름.git
3. cd 명령을 통해 clone해서 가져온 로컬 저장소의 파일위치로 이동
    ex) cd C:\dev\shcool_project\repo이름
4. 해당 로컬 저장소에 원본이있는 organization repo와의 연결 생성
    ex) git remote add "자기 닉네임" "organization repo_link"
    git remote add upstream https://github.com/organization닉네임/repo이름.git
    * 대개 원본 파일과의 연결임을 뜻하는 영어 단어 -> upstream을 자기 닉네임 자리에 넣는다고 합니다.
5. git remote -v 로 잘 연결됬는지 확인
6. git checkout -b "담당_별명"으로 풀리퀘를 올리기위한  브랜치를 만들어준다.
    ex) git checkout -b "backend_js"
7. 코드를 수정 후
    1) git add .
    2) git commit -m "커밋 메세지"
    3) git push "repo 사용자명" "브랜치명"
        ex) git push origin backend_js
        * repo를 클론 후 아무 설정도 건드리지 안았다면
            main 브랜치는 main
            main 사용자는 origin으로 되어있음.
8. 깃헙 홈페이로 가서 pullrequest 작성
9. 코드 리뷰
10. 오가니제이션에서 merge