# 2023 2학기 웹 프로그래밍 [수업 내용을 통해 간단한 웹페이지 생성]

## 구성
+ main.html
+ Login.html
+ register.html

## 구현 내용

> 웹페이지의 디자인 적인 요소와, 자바 스크립트를 통한 정적 웹페이지의 이동, 구글 로그인 API와 쿠키를 활용하여 DB를 사용하지 않고 로그인이 된 것 처럼 구현했습니다.
> 물론 실제 로그인과 회원가입, 게시판 등의 내용은 DB를 사용해야하므로 해당 웹페이지에서는 게시판 기능은 구현되지 않았습니다. ( 최대한 교재만을 이용하여 만들 수 있는 페이지가 목적 )

## main.html

> 메인 홈페이지는 먼저, 모든 태그들을 감싸줄 wrap 클래스의 div와, 그 아래로 header, article, board_Article, footer 로 구성되어있습니다.
> header, article, board_Article, footer 클래스의 div 태그는 CSS에서 keyframe와 animation을 활용하여 처음 리프레쉬 될 때, 순서대로 출력되게 끔 구성했습니다.

------------------------------------------------------------------------

> header 태그 내에는 웹페이지의 이름과, 로그인버튼, 회원가입 버튼이 자리하고 있습니다.
> Javascript를 통해 웹페이지의 이름을 클릭하면 현재 페이지를 리프레쉬하고, 로그인 버튼과 회원가입 버튼은 각각 Login.html과 Register.html로 이동하게 끔 구현했습니다.
> 또한, 로그인을 하여 쿠키가 생성되면 로그인버튼과 회원가입 버튼이 사라지고 쿠키에 저장된 계정의 이름을 출력하고 옆에 로그아웃 버튼을 출력합니다.
> 로그아웃 버튼을 클릭 시, 생성됐던 쿠키를 삭제시켜 초기의 모습으로 리프레쉬해줍니다.

------------------------------------------------------------------------

> 다음으로 article 태그에서는 웹페이지의 목적을 잘 보여주기 위해 background-image 속성을 통해 배경을 설정하고, 검색창을 디자인하였습니다.
> DB를 사용하지 않은 관계로 입력은 되나 따로 검색 로직이 구현되지는 않았습니다.

------------------------------------------------------------------------

> 다음 board_Article 태그에서는 최신 게시물과 인기 게시물을 출력합니다.
> 해당 부분 또한 DB를 사용하지 않아 구현이 되어있지 않지만, DB를 사용한다 가정하면 board.html을 생성하고, 게시물의 내용과 작성자를 DB에서 가져온 뒤, 출력해주는 방식으로 처리합니다.
> 이 과정에서 각 게시물의 주소를 다르게 하기위해 게시물을 클릭하여 서버에 페이지 요청을 할 때, action 부분에서 각 게시물을 구분할 수 있는 값을 넣어서 보냅니다. (예를 들어 게시물이 출력되는것 또한 DB에서 SELECT * FROM BOARD 와 같은 형식으로 가져왔을 것이므로, 각 게시물의 Unique Key를 POST할 때, 같이 보내서 원하는 값만을 DB에서 뽑아 board.html에서 출력하게끔 구성합니다.)

------------------------------------------------------------------------

> 마지막으로 footer 태그에서는 사용된 이미지와 쿠키 세팅할 때 참고한 링크를 볼 수 있는 Reference 버튼과 간략한 소개들로 구성했습니다.

## Login.html

> 로그인 페이지에서는 ID와 PASSWORD의 입력칸, 로그인버튼, 구글 계정으로 로그인 버튼으로 구성하였습니다.
> ID와 PASSWORD는 각각 1글자, 5글자 이상이어야 로그인 버튼이 활성화 되게끔 Javascript 파일을 작성했습니다.
> 구글 로그인 API의 경우 클릭해서 구글 계정으로부터 가져온 회원 이름을 쿠키에 담습니다.
> ID로 로그인 한 경우, ID를 쿠키에 담습니다. 그리고, 로그인 후 main.html로 리프레쉬합니다.
> DB를 포함하여 구현할 시, ID를 통해 DB에서 유효한 사용자 계정인지의 판별이 필요합니다.
> PASSWORD의 경우 sha256 을 포함한 여러가지 방법으로 암호화하여 DB에 삽입합니다.

## Register.html

> 회원가입 페이지에서는 Login.html과 유사하지만, ID의 글자수 확인과 PASSWORD의 유효성 검사를 수행합니다.
> 유효성 검사의 경우 정규표현식을 사용하여 8~20자의 공백을 제외한 영문 대소문자, 숫자, 특수문자를 사용하게끔 하였습니다.
> 회원가입에 성공하면, Login.html로 이동하여 바로 로그인을 진행하게끔 작성했습니다.