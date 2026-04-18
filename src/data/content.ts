// ────────────────────────────────────────────
// Swift Exam Kit — 구조화된 콘텐츠 데이터
// Swift Exam Kit — content data
// ────────────────────────────────────────────

export interface TableRow {
  cells: string[];
}

export interface TableData {
  headers: string[];
  rows: TableRow[];
}

export interface CodeBlockData {
  code: string;
  label?: string;
}

export interface CalloutData {
  type: 'warn' | 'tip' | 'key';
  label: string;
  content: string;
}

export interface CompareData {
  left: { label: string; content: string; code?: string };
  right: { label: string; content: string; code?: string };
}

export interface QuizItem {
  question: string;
  answer: string;
}

export interface QuizGroup {
  title: string;
  items: QuizItem[];
}

export interface ChecklistGroup {
  title: string;
  items: string[];
}

export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading3'; content: string; badge?: string; badgeType?: string }
  | { type: 'heading4'; content: string }
  | { type: 'table'; data: TableData }
  | { type: 'code'; data: CodeBlockData }
  | { type: 'callout'; data: CalloutData }
  | { type: 'compare'; data: CompareData }
  | { type: 'quiz-group'; data: QuizGroup }
  | { type: 'checklist-group'; data: ChecklistGroup };

export interface Section {
  id: string;
  number: string;
  label: string;
  title: string;
  badge?: string;
  badgeType?: string;
  desc: string;
  blocks: ContentBlock[];
}

export interface HeroMeta {
  label: string;
  value: string;
}

export const heroData = {
  eyebrow: 'Internet Programming · All-in-One',
  title: 'Swift Exam Kit',
  subtitle: '전체 범위를 한 페이지로',
  desc: '벼락치기하시는 분들을 위한 정리본입니다!',
  disclaimer: '내용의 정확성을 책임지지는 않습니다! 정확한 내용은 수업자료를 확인해주세요!',
};


export const sections: Section[] = [
  // ──────── 01. 맥북 Concept ────────
  {
    id: 'mac',
    number: '01',
    label: '공통 범위',
    title: '맥북 Concept',
    desc: '기능 이름만 외우면 됨.',
    blocks: [
      {
        type: 'table',
        data: {
          headers: ['기능', '설명'],
          rows: [
            { cells: ['미션 컨트롤\nMission Control', '열려 있는 <strong>창의 위치를 빠르게 제어</strong>하도록 도와주는 기능'] },
            { cells: ['앱 Exposé', '사용 중인 앱의 <strong>윈도우를 모두 표시</strong>하는 기능'] },
            { cells: ['Spaces', '<strong>작업 공간을 분리</strong>하여 멀티태스킹을 효율적으로 할 수 있게 해주는 기능'] },
            { cells: ['Launchpad', '설치된 모든 앱을 한 화면에 표시하는 기능'] },
            { cells: ['Finder', 'macOS의 파일 탐색기'] },
            { cells: ['App Store', '앱을 설치/업데이트하는 플랫폼. Xcode도 여기서 다운로드'] },
            { cells: ['Xcode', 'iOS 앱 개발용 <strong>통합 개발 환경(IDE)</strong>. <mark>macOS에서만 동작</mark>'] },
            { cells: ['트랙패드', '멀티터치 제스처를 지원하는 입력 장치'] },
            { cells: ['Force Click', '트랙패드를 <strong>강하게 눌러</strong> 추가 기능(미리보기·사전 등) 실행'] },
            { cells: ['Multi-Touch', '두 개 이상의 손가락으로 동시 입력을 받는 기술. 2007년 첫 iPhone에서 도입'] },
          ],
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: 'iOS 앱 개발 전제 조건',
          content: '<strong>① 맥 PC</strong> + <strong>② macOS(OS X)</strong> + <strong>③ Xcode</strong><br/>→ Xcode가 macOS에서만 동작하기 때문에 맥 PC가 필수.',
        },
      },
    ],
  },

  // ──────── 02. iPhone & Android 역사 ────────
  {
    id: 'ios-history',
    number: '02',
    label: '공통 범위',
    title: 'iPhone & Android 역사',
    desc: '세부 연도보다 큰 흐름과 핵심 이벤트만 기억하면 됨.',
    blocks: [
      {
        type: 'table',
        data: {
          headers: ['연도/사건', '내용'],
          rows: [
            { cells: ['2003.10', '<strong>Android, Inc.</strong> 설립 (Palo Alto, California) — Andy Rubin 등'] },
            { cells: ['2005', '<strong>Google이 Android Inc. 인수</strong>'] },
            { cells: ['2007.01', '<strong>Apple, 첫 iPhone 출시</strong> — Multi-touch gestures, HTML email, Safari, YouTube 탑재'] },
            { cells: ['2007.11', 'Open Handset Alliance 설립 (86개 기업 참여) — Android 코드를 <strong>Apache License 오픈소스</strong>로 공개'] },
            { cells: ['2008.07', 'iPhone 3G 출시 — <strong>App Store</strong>, 3G, GPS 도입'] },
            { cells: ['2008.10', '첫 Android 스마트폰 <strong>HTC Dream(G1)</strong> 출시'] },
            { cells: ['2010.01', '첫 Nexus 스마트폰 <strong>Nexus One</strong> (HTC + Google)'] },
            { cells: ['2010.06', 'iPhone 4 — <strong>Retina Display (326 ppi)</strong>'] },
            { cells: ['2015.04', 'Original Apple Watch 출시'] },
          ],
        },
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: 'Android 버전 네이밍 (9.0까지 알파벳 디저트 순)',
          content: '1.5 <strong>Cupcake</strong> → 1.6 Donut → 2.0 Éclair → 2.2 Froyo → 2.3 Gingerbread → 3.0 Honeycomb → 4.0 Ice Cream Sandwich → 4.1 Jelly Bean → 4.4 KitKat → 5.0 Lollipop → 6.0 Marshmallow → 7.0 Nougat → 8.0 Oreo → 9.0 Pie',
        },
      },
    ],
  },

  // ──────── 03. Xcode & 개발 환경 ────────
  {
    id: 'xcode',
    number: '03',
    label: '개발 환경',
    title: 'Xcode & 개발 환경',
    desc: '단답형으로 나올 수 있는 개념들.',
    blocks: [
      {
        type: 'table',
        data: {
          headers: ['용어', '설명'],
          rows: [
            { cells: ['Xcode', 'iOS 앱 개발을 위한 <strong>통합 개발 환경 (IDE, Integrated Development Environment)</strong>'] },
            { cells: ['Swift', 'Apple이 개발한 iOS/macOS 앱 개발 언어. <strong>Swift.org</strong>에 오픈소스로 공개됨'] },
            { cells: ['Playground', '코드 입력 즉시 결과를 확인할 수 있는 Xcode 기능. Swift 문법 학습에 유용'] },
            { cells: ['시뮬레이터 (Simulator)', '실제 iPhone 없이 Mac에서 앱을 실행해볼 수 있는 환경'] },
            { cells: ['IDE', 'Integrated Development Environment — 개발에 필요한 편집기, 컴파일러, 디버거를 통합한 도구'] },
            { cells: ['Cocoa / Cocoa Touch', 'Apple의 UI 프레임워크. Swift가 완전한 접근 권한을 가짐'] },
          ],
        },
      },
      {
        type: 'heading3',
        content: 'Apple Developer Program 종류',
      },
      {
        type: 'table',
        data: {
          headers: ['프로그램', '특징'],
          rows: [
            { cells: ['온라인 개발자 프로그램', '<strong>무료</strong>. 개인 맥에서 시뮬레이터로만 테스트 (앱스토어 등록 불가)'] },
            { cells: ['개인 애플 개발자 프로그램', '$99/년. 개인 개발자용'] },
            { cells: ['기업 애플 개발자 프로그램', '$99/년. 사업자 등록증 보유 기업용'] },
            { cells: ['엔터프라이즈 프로그램', '$299/년. 자사 임직원 배포용'] },
            { cells: ['iOS 개발자 대학 프로그램', '<strong>무료</strong>. 교육기관용'] },
          ],
        },
      },
    ],
  },

  // ──────── 04. Swift UI 객체 개념 ────────
  {
    id: 'ui',
    number: '04',
    label: 'Swift Concept · 핵심',
    title: 'Swift UI 객체 개념',
    desc: '정의를 그대로 외우세요. 살짝 말을 바꿔서 물을 수도 있음 (예: "임의의 양의 텍스트").',
    blocks: [
      {
        type: 'callout',
        data: {
          type: 'key',
          label: 'Xcode + 버튼으로 추가하는 객체들',
          content: 'Xcode에서 스토리보드 편집 시 <strong>우측 상단의 + 버튼</strong>을 클릭하면 Objects 라이브러리가 열리고, 여기서 아래 객체들을 드래그해 화면에 배치할 수 있음.<br/>시험에서는 <strong>각 객체의 이름과 정의</strong>를 단답형으로 물어봄. 정의를 그대로 외울 것.',
        },
      },
      {
        type: 'table',
        data: {
          headers: ['객체', '정의 (외울 문장)'],
          rows: [
            { cells: ['레이블 (Label)\nUILabel', '<mark>임의의 양의 텍스트</mark>를 보여주기 위한 객체 (읽기 전용)'] },
            { cells: ['버튼 (Button)\nUIButton', '사용자의 <strong>터치 이벤트</strong>를 받는 객체'] },
            { cells: ['텍스트 필드 (TextField)\nUITextField', '사용자로부터 <strong>한 줄의 텍스트</strong>를 입력받는 객체'] },
            { cells: ['텍스트 뷰 (TextView)\nUITextView', '<strong>여러 줄</strong>의 텍스트를 입력받거나 표시하는 객체 (TextField는 한 줄)'] },
            { cells: ['이미지 뷰 (ImageView)\nUIImageView', '이미지를 화면에 표시하는 객체'] },
            { cells: ['스위치 (Switch)\nUISwitch', '<strong>on/off</strong> 두 상태를 표현하는 객체'] },
            { cells: ['데이트 피커 (Date Picker)\nUIDatePicker', '<strong>날짜와 시간</strong>을 선택할 수 있게 해주는 객체. 시계 앱의 알람 탭에서 자주 사용'] },
            { cells: ['피커 뷰 (Picker View)\nUIPickerView', '목록에서 항목을 <strong>회전(스크롤)</strong>하여 선택하는 객체. 문자열을 선택할 때 사용'] },
            { cells: ['타이머 (Timer)', '일정 시간마다 반복적으로 작업을 수행하게 하는 객체'] },
            { cells: ['얼럿 (Alert)\nUIAlertController', '사용자에게 <strong>중요한 알림이나 경고 메시지</strong>를 나타내는 객체'] },
            { cells: ['스토리보드 (Storyboard)', '<strong>화면 간의 흐름 및 전체적인 모양</strong>을 <mark>시각적인 방식으로 연결·표현</mark>하여 직관적으로 앱의 흐름을 확인할 수 있게 만든 기능'] },
            { cells: ['ViewController', '화면(뷰)을 제어하는 클래스'] },
            { cells: ['델리게이트 (Delegate)', '어떤 객체의 <strong>동작을 대신 수행</strong>하도록 위임받은 객체. 피커뷰 등에서 사용'] },
          ],
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: '주의 — 데이트 피커 vs 피커 뷰 구분',
          content: '<strong>데이트 피커</strong>는 날짜/시간 선택용, <strong>피커 뷰</strong>는 일반 문자열 선택용. 시험에 둘 다 나올 수 있음.',
        },
      },
      {
        type: 'heading3',
        content: 'TextField vs TextView 구분',
      },
      {
        type: 'compare',
        data: {
          left: {
            label: 'TextField (UITextField)',
            content: '<strong>한 줄</strong> 입력. 이름, 이메일 등 짧은 텍스트.',
          },
          right: {
            label: 'TextView (UITextView)',
            content: '<strong>여러 줄</strong> 입력/표시. 댓글, 메모, 긴 본문.',
          },
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: '주의 — TextField ≠ TextView',
          content: '"TextField"와 "TextView"는 전혀 다른 객체. <strong>한 줄 vs 여러 줄</strong>로 구분. 혼동 주의!',
        },
      },
    ],
  },

  // ──────── 05. 아웃렛·액션 함수 ────────
  {
    id: 'outlet',
    number: '05',
    label: 'Swift Concept · 핵심',
    title: '아웃렛 변수 · 액션 함수',
    desc: '아웃렛 변수와 액션 함수의 차이를 확실히 구분해야 합니다.',
    blocks: [
      {
        type: 'compare',
        data: {
          left: {
            label: 'Outlet 변수 (아웃렛)',
            content: '<strong>스토리보드의 UI 객체</strong>를 코드에서 <strong>제어(접근)</strong>하기 위해 연결한 변수.',
            code: '@IBOutlet var txtName: UITextField!\n@IBOutlet var lblHello: UILabel!',
          },
          right: {
            label: 'Action 함수 (액션)',
            content: '사용자가 UI 객체를 <strong>조작했을 때 실행</strong>되는 함수.',
            code: '@IBAction func btnSend(_ sender: UIButton) {\n    lblHello.text = "Hello, " + txtName.text!\n}',
          },
        },
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: '한 줄 요약',
          content: '<strong>Outlet은 "UI를 제어하는 변수"</strong>, <strong>Action은 "이벤트가 일어났을 때 실행되는 함수"</strong>.',
        },
      },
      {
        type: 'heading3',
        content: '연결(Connection) 속성 구분',
      },
      {
        type: 'table',
        data: {
          headers: ['종류', '용도', '키워드'],
          rows: [
            { cells: ['Outlet', 'UI 객체 → 코드 (변수로 접근)', '<code>@IBOutlet</code>'] },
            { cells: ['Action', '이벤트 발생 → 코드 실행', '<code>@IBAction</code>'] },
          ],
        },
      },
    ],
  },

  // ──────── 06. Swift 언어 특징 ────────
  {
    id: 'swift-lang',
    number: '06',
    label: 'Swift Concept',
    title: 'Swift 언어의 특징',
    desc: '01장에 나온 Swift 장점 — 단답형으로 나올 수 있음.',
    blocks: [
      {
        type: 'table',
        data: {
          headers: ['특징', '설명'],
          rows: [
            { cells: ['빠르고 강력', '발전된 코드 분석기로 최적화된 컴파일 수행'] },
            { cells: ['완전한 플랫폼', 'Cocoa 및 Cocoa Touch 프레임워크 모두 접근 가능'] },
            { cells: ['현대적', '읽고 쓰기 쉬운 문법, <strong>헤더 파일 제거</strong> 등'] },
            { cells: ['Playground', '코드 입력 즉시 결과 확인 가능'] },
            { cells: ['안전을 위한 설계', '타입 추론, 메모리 직접 접근 차단, <strong>자동 메모리 관리</strong>'] },
            { cells: ['Objective-C 호환', '기존 Objective-C 코드와 혼합 사용 가능'] },
            { cells: ['오픈 소스', 'Swift.org에 공개'] },
          ],
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: 'Swift 문법 특이사항 — O/X 문제 가능',
          content: 'Swift에서는 문장 끝에 <strong>세미콜론(;)을 쓰지 않습니다</strong>. C/Java와 다른 점!',
        },
      },
    ],
  },

  // ──────── 07. 변수와 상수 ────────
  {
    id: 'var',
    number: '07',
    label: 'Swift 문법',
    title: '변수와 상수',
    desc: '중간고사에 변수명 규칙 O/X 문제가 나왔습니다. 선언 형식 + 이름 규칙 필수.',
    blocks: [
      {
        type: 'heading3',
        content: '선언 형식',
      },
      {
        type: 'code',
        data: {
          code: `// 형식: 키워드 이름 : 타입 = 값
let pi: Double = 3.14      // 상수 (변경 불가)
var score: Int = 95       // 변수 (변경 가능)

// 여러 개 한 번에 선언
var x = 0.0, y = 0.0, z = 0.0
var red, green, blue: Double

// 타입 추론 (Type Inference): 초기값이 있으면 타입 생략 가능
let meaningOfLife = 42       // Int로 추론
let pi2 = 3.14159            // Double로 추론 (Float 아님!)
let anotherPi = 3 + 0.14159   // Double로 추론`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: '핵심 — 실수는 항상 Double',
          content: 'Swift는 실수 리터럴을 <strong>항상 Double</strong>로 추론합니다. Float 아님. 정수와 실수를 섞으면 → Double.',
        },
      },
      {
        type: 'heading3',
        content: '이름 규칙 (O/X 문제 대비)',
      },
      {
        type: 'compare',
        data: {
          left: {
            label: '가능',
            content: `<ul class="list-disc pl-4 space-y-1">
<li>유니코드 문자: <code>let π = 3.14</code></li>
<li>한글/이모지: <code>let 你好</code>, <code>let 🐶</code></li>
<li>이름 중간 숫자: <code>var a1</code>, <code>var user2</code></li>
<li>언더스코어: <code>var _name</code></li>
</ul>`,
          },
          right: {
            label: '불가능',
            content: `<ul class="list-disc pl-4 space-y-1">
<li><strong>공백 포함</strong>: <code>var my name</code></li>
<li><strong>숫자로 시작</strong>: <code>var 1a</code></li>
<li>수학 기호·화살표</li>
<li><strong>상수 재할당</strong>: <code>let x=1; x=2</code> → 컴파일 에러</li>
</ul>`,
          },
        },
      },
      {
        type: 'heading3',
        content: 'JS/TS 개발자 관점',
      },
      {
        type: 'table',
        data: {
          headers: ['JavaScript', 'Swift', '차이점'],
          rows: [
            { cells: ['<code>const</code>', '<code>let</code>', 'Swift에서 const가 <strong>let</strong>. JS의 let과 헷갈리지 말기!'] },
            { cells: ['<code>let</code>', '<code>var</code>', 'Swift의 <strong>var</strong>가 JS의 let 역할'] },
            { cells: ['<code>null</code>', '<code>nil</code>', '이름만 다름'] },
            { cells: ['타입 없음', '<code>: Type</code>', 'Swift는 명시적 타입 (타입 추론도 있음)'] },
          ],
        },
      },
    ],
  },

  // ──────── 08. 기본 자료형 ────────
  {
    id: 'type',
    number: '08',
    label: 'Swift 문법',
    title: '기본 자료형 (Data Types)',
    desc: '각 타입의 특징이 단답으로 나올 수 있음.',
    blocks: [
      {
        type: 'table',
        data: {
          headers: ['타입', '특징', '예시'],
          rows: [
            { cells: ['Bool', '<strong>참/거짓</strong> 중 하나를 표현하는 이진법', '<code>true</code>, <code>false</code>'] },
            { cells: ['Int, Int32, Int64', '큰 수(분수 제외) - 32/64비트 <strong>음수·양수 정수</strong>', '<code>4</code>, <code>-674837</code>'] },
            { cells: ['Int8, Int16', '작은 수 - 8/16비트 음수·양수 정수', '<code>-23</code>, <code>58</code>'] },
            { cells: ['UInt, UInt32, UInt64', '큰 수 - 32/64비트 <strong>양수만</strong> (Unsigned)', '<code>5</code>, <code>10023</code>'] },
            { cells: ['UInt8, UInt16', '작은 수 - 8/16비트 양수만', '<code>35</code>, <code>254</code>'] },
            { cells: ['Float, Double', '음수 또는 양수의 <strong>부동 소수점</strong> (실수)', '<code>3.14</code>, <code>17.0</code>'] },
            { cells: ['Character', '<strong>단일 글자</strong>/숫자/부호를 큰따옴표로 묶어 표현', '<code>"T"</code>, <code>"*"</code>'] },
            { cells: ['String', '<strong>일련의 문자</strong>를 큰따옴표로 묶어 표현', '<code>"Fish"</code>, <code>"New York"</code>'] },
          ],
        },
      },
      {
        type: 'heading3',
        content: '타입 변환',
      },
      {
        type: 'code',
        data: {
          code: `var a = "123"          // String
var b = Int(a)          // String → Int 변환 (결과는 Int? 옵셔널!)

let label = "width is "
let width = 94
let widthLabel = label + String(width)   // Int → String 변환`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: '중요 — 암묵적 변환 없음',
          content: 'Swift는 <strong>절대 타입을 암묵적으로 변환하지 않습니다</strong>. 다른 타입으로 쓰려면 반드시 명시적 변환 (<code>String(width)</code>, <code>Int(a)</code> 등).',
        },
      },
    ],
  },

  // ──────── 09. 연산자 ────────
  {
    id: 'operator',
    number: '09',
    label: 'Swift 문법',
    title: '연산자 (Operators)',
    desc: '',
    blocks: [
      {
        type: 'heading3',
        content: '산술 연산자',
      },
      {
        type: 'code',
        data: {
          code: `1 + 2       // 3 (덧셈)
5 - 3       // 2 (뺄셈)
2 * 3       // 6 (곱셈)
10.0 / 2.5   // 4.0 (나눗셈)
9 % 4       // 1 (나머지, Remainder)

// 문자열 연결도 +
"hello, " + "world"   // "hello, world"`,
        },
      },
      {
        type: 'heading3',
        content: '비교 연산자',
      },
      {
        type: 'table',
        data: {
          headers: ['연산자', '의미', '예시'],
          rows: [
            { cells: ['<code>==</code>', '같음 (Equal to)', '<code>1 == 1</code> → true'] },
            { cells: ['<code>!=</code>', '다름 (Not equal to)', '<code>2 != 1</code> → true'] },
            { cells: ['<code>></code>', '초과', '<code>2 > 1</code> → true'] },
            { cells: ['<code><</code>', '미만', '<code>1 < 2</code> → true'] },
            { cells: ['<code>>=</code>', '이상', '<code>1 >= 1</code> → true'] },
            { cells: ['<code><=</code>', '이하', '<code>2 <= 1</code> → false'] },
          ],
        },
      },
      {
        type: 'heading3',
        content: '논리 연산자',
      },
      {
        type: 'code',
        data: {
          code: `// NOT (!a) - 부정
if !allowedEntry { print("ACCESS DENIED") }

// AND (&&) - 둘 다 참
if enteredDoorCode && passedRetinaScan { ... }

// OR (||) - 하나라도 참
if hasDoorKey || knowsOverridePassword { ... }`,
        },
      },
      {
        type: 'heading3',
        content: '복합 할당 연산자',
      },
      {
        type: 'code',
        data: {
          code: `var a = 1
a += 2   // a = a + 2 와 같음 → a는 3
a -= 1
a *= 2
a /= 2`,
        },
      },
      {
        type: 'heading3',
        content: '범위 연산자 (Range Operators)',
        badge: '중요',
        badgeType: 'hot',
      },
      {
        type: 'compare',
        data: {
          left: {
            label: 'Closed Range · 닫힌 범위',
            content: '<strong>양끝 포함</strong>. <code>a...b</code>',
            code: `for i in 1...5 {
    print(i)   // 1, 2, 3, 4, 5
}`,
          },
          right: {
            label: 'Half-Open Range · 반열린 범위',
            content: '<strong>오른쪽 미포함</strong>. <code>a..<b</code>',
            code: `for i in 1..<5 {
    print(i)   // 1, 2, 3, 4
}`,
          },
        },
      },
    ],
  },

  // ──────── 10. 문자열 ────────
  {
    id: 'string',
    number: '10',
    label: 'Swift 문법',
    title: '문자열 (String)',
    desc: '',
    blocks: [
      {
        type: 'heading3',
        content: '문자열 선언',
      },
      {
        type: 'code',
        data: {
          code: `let someString = "Some string literal value"

// 빈 문자열 초기화
var emptyString = ""                // 빈 문자열 리터럴
var anotherEmpty = String()        // 이니셜라이저

if emptyString.isEmpty {
    print("Nothing to see here")
}`,
        },
      },
      {
        type: 'heading3',
        content: '문자열 보간 (String Interpolation)',
      },
      {
        type: 'code',
        data: {
          code: `let name = "Anna"
print("Hello, \\(name)!")   // "Hello, Anna!"

let score = 95
print("점수: \\(score)점")    // "점수: 95점"`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: 'JS 대응',
          content: 'JS의 <code>`Hello, ${name}`</code>과 같음. Swift는 <code>\\(변수)</code> 형태.',
        },
      },
      {
        type: 'heading3',
        content: '문자열 합치기 (+ 연산자)',
      },
      {
        type: 'code',
        data: {
          code: `let a = "Hello, "
let b = "World"
let c = a + b                 // "Hello, World"

// 실습 예시: lblHello.text = "Hello, " + txtName.text!`,
        },
      },
      {
        type: 'heading3',
        content: 'Character 순회',
      },
      {
        type: 'code',
        data: {
          code: `for character in "Dog!" {
    print(character)   // D, o, g, ! 한 줄씩
}

let exclamation: Character = "!"`,
        },
      },
    ],
  },

  // ──────── 11. 배열 ────────
  {
    id: 'array',
    number: '11',
    label: 'Swift 문법 · 핵심',
    title: '배열 (Array)',
    desc: '배열 선언, 요소 추가/삭제, 개수 확인 등 기본 연산을 정리.',
    blocks: [
      {
        type: 'heading3',
        content: '선언 방법',
      },
      {
        type: 'code',
        data: {
          code: `// 방법 1) 선언과 동시에 초기화
var sports: [String] = ["adidas", "nike", "puma"]
var scores: [Int] = [100, 80, 95, 98, 86]
var name: [String] = ["슈퍼맨", "배트맨", "캡틴"]

// 방법 2) 빈 배열 선언 후 값 추가
var name2 = [String]()
var score2 = [Int]()

name2.append("슈퍼맨")
name2.append("배트맨")
score2.append(100)`,
        },
      },
      {
        type: 'heading3',
        content: '자주 쓰는 연산',
      },
      {
        type: 'code',
        data: {
          code: `// 끝에 추가 (append)
sports.append("reebok")

// 요소 개수 (count)
print(sports.count)        // 4

// 인덱스 접근
let first = sports[0]       // "adidas"
let someName = name[0]     // 첫 번째 값

// 값 변경
name[1] = "홍길동"          // 두 번째 값 변경
score[3] = 60`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: 'JS와 차이',
          content: `<ul class="list-disc pl-4 space-y-1">
<li><code>push</code> → <strong><code>append</code></strong></li>
<li><code>length</code> → <strong><code>count</code></strong></li>
<li>배열 요소는 <strong>모두 같은 타입</strong>이어야 함 (<code>[String]</code>, <code>[Int]</code>)</li>
</ul>`,
        },
      },
    ],
  },

  // ──────── 12. 함수 ────────
  {
    id: 'func',
    number: '12',
    label: 'Swift 문법',
    title: '함수 (Function)',
    desc: '',
    blocks: [
      {
        type: 'heading3',
        content: '정의와 호출',
      },
      {
        type: 'code',
        data: {
          code: `func greet(person: String) -> String {
    let greeting = "Hello, " + person + "!"
    return greeting
}

print(greet(person: "Anna"))    // "Hello, Anna!"
print(greet(person: "Brian"))   // "Hello, Brian!"`,
        },
      },
      {
        type: 'heading3',
        content: '함수 구성요소',
      },
      {
        type: 'table',
        data: {
          headers: ['구성', '의미'],
          rows: [
            { cells: ['<code>func</code>', '함수 선언 키워드 (JS의 <code>function</code>)'] },
            { cells: ['<code>greet</code>', '함수 이름'] },
            { cells: ['<code>(person: String)</code>', '매개변수 (Parameter): 이름과 타입'] },
            { cells: ['<code>-> String</code>', '반환 타입 (Return type)'] },
            { cells: ['<code>return</code>', '값 반환'] },
            { cells: ['<code>-> ()</code> 또는 생략', '반환값 없음 (Void)'] },
          ],
        },
      },
      {
        type: 'heading3',
        content: '아규먼트 레이블 완전 정리',
      },
      {
        type: 'text',
        content: 'Swift 함수의 각 매개변수는 두 가지 이름을 가질 수 있음:\n• <strong>Argument Label (아규먼트 레이블)</strong>: 함수 <strong>호출 시</strong> 사용하는 이름\n• <strong>Parameter Name (파라미터 이름)</strong>: 함수 <strong>내부에서</strong> 사용하는 이름\n\n기본적으로 Parameter Name이 곧 Argument Label로 사용됨.',
      },
      {
        type: 'heading4',
        content: '1) 기본 — 두 이름이 같음',
      },
      {
        type: 'code',
        data: {
          code: `func someFunction(firstParameterName: Int, secondParameterName: Int) {
    // 내부에서는 firstParameterName, secondParameterName 사용
}
someFunction(firstParameterName: 1, secondParameterName: 2)`,
        },
      },
      {
        type: 'heading4',
        content: '2) Specifying Argument Labels — 외부이름/내부이름 분리',
      },
      {
        type: 'text',
        content: '공백으로 구분해서 작성. 호출 시에는 앞쪽(레이블), 내부에서는 뒤쪽(파라미터 이름) 사용.',
      },
      {
        type: 'code',
        data: {
          code: `func greet(person: String, from hometown: String) -> String {
    return "Hello \\(person)! Glad you could visit from \\(hometown)."
}
print(greet(person: "Bill", from: "Cupertino"))
// "Hello Bill! Glad you could visit from Cupertino."
// 호출 시에는 from, 내부에서는 hometown 사용`,
        },
      },
      {
        type: 'heading4',
        content: '3) Omitting Argument Labels — 언더스코어(_)로 레이블 생략',
      },
      {
        type: 'code',
        data: {
          code: `func someFunction(_ firstParameterName: Int, secondParameterName: Int) {
    // 내부에서는 firstParameterName, secondParameterName 그대로 사용
}
someFunction(1, secondParameterName: 2)
// 첫 번째 인자는 레이블 없이 호출!`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: 'JS/TS 개발자 관점',
          content: 'JS에선 그냥 <code>func(1, 2)</code>처럼 값만 넘기면 됐지만, Swift는 <strong>레이블 명시가 기본</strong>. 레이블을 생략하고 싶으면 <code>_</code>를 붙여야 함.',
        },
      },
      {
        type: 'heading3',
        content: '디폴트 파라미터 값 (Default Parameter Values)',
      },
      {
        type: 'text',
        content: '함수의 매개변수에 <strong>기본값</strong>을 지정하면, 호출 시 해당 인자를 <strong>생략할 수 있음</strong>. 생략하면 기본값 사용.',
      },
      {
        type: 'code',
        data: {
          code: `func someFunction(parameterWithoutDefault: Int, parameterWithDefault: Int = 12) {
    // 두 번째 인자를 생략하면 parameterWithDefault는 12가 됨
}

someFunction(parameterWithoutDefault: 3, parameterWithDefault: 6)
// parameterWithDefault 는 6

someFunction(parameterWithoutDefault: 4)
// parameterWithDefault 는 12 (기본값 사용)`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: '디폴트 파라미터 핵심 포인트',
          content: '• 기본값이 있는 매개변수는 <strong>뒤쪽에</strong> 배치하는 것이 관례<br/>• 호출 시 해당 인자를 <strong>생략 가능</strong><br/>• 생략하면 <strong>기본값</strong>이 자동 적용',
        },
      },
    ],
  },

  // ──────── 13. 클래스 상속 ────────
  {
    id: 'inheritance',
    number: '13',
    label: 'Swift 문법 · 보충',
    title: '클래스 상속 (Inheritance)',
    desc: '클래스 상속은 Swift/iOS 개발의 기본 구조. ViewController가 동작하는 이유가 바로 상속.',
    blocks: [
      {
        type: 'text',
        content: '클래스는 <strong>부모 클래스</strong>와 <strong>자식 클래스</strong>로 구분됨.\n• <strong>자식 클래스</strong>: 상속받는 클래스\n• <strong>부모 클래스</strong>: 상속하는 클래스\n• <strong>상속받는다</strong> = 부모 클래스의 변수와 함수를 <strong>모두 사용할 수 있다</strong>는 뜻',
      },
      {
        type: 'heading3',
        content: '상속 문법',
      },
      {
        type: 'text',
        content: '클래스 이름 오른쪽에 <strong><code>:</code></strong> 과 함께 부모 클래스 이름을 입력.',
      },
      {
        type: 'code',
        data: {
          code: `class ViewController: UIViewController {
    // UIViewController 의 모든 기능 상속받음
}`,
        },
      },
      {
        type: 'heading3',
        content: '여러 프로토콜/클래스 상속',
      },
      {
        type: 'text',
        content: '<strong><code>,</code></strong> 로 이어 붙임.',
      },
      {
        type: 'code',
        data: {
          code: `class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {
    // 피커뷰 델리게이트/데이터소스도 함께 채택
}`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: '실제 적용',
          content: '우리가 지금까지 작성한 <code>ViewController</code> 클래스는 사실상 항상 <code>UIViewController</code>를 상속받고 있었음. 아웃렛 변수와 액션 함수가 동작하는 이유가 바로 이 상속 때문.',
        },
      },
    ],
  },

  // ──────── 14. 옵셔널 ────────
  {
    id: 'optional',
    number: '14',
    label: 'Swift 문법 · 최우선',
    title: '옵셔널 (Optional)',
    desc: 'Swift의 핵심 개념. 값이 있을 수도, 없을 수도 있는 타입.',
    blocks: [
      {
        type: 'heading3',
        content: '1) 개념',
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: 'Optional — 한 줄 정의',
          content: '값이 <strong>있을 수도, 없을 수도(nil)</strong> 있는 타입.<br/><strong>Swift에만 있는 개념</strong> (C, Objective-C에는 없음).',
        },
      },
      {
        type: 'heading3',
        content: '2) 대표 예제',
      },
      {
        type: 'text',
        content: '<strong>옵셔널 변수</strong> 관련 대표 코드입니다. 변수명·값만 바꿔서 나올 수 있어요.',
      },
      {
        type: 'code',
        data: {
          code: `// ① 옵셔널 선언 (? 사용)
var imgOn: UIImage?
var index: Int?

// ② 값 할당 → "래핑(wrapped)"된 상태
index = 3

// ③ nil 체크 후 강제 언래핑
if index != nil {
    print(index!)      // ! 로 강제 언래핑 (forced unwrapping)
}`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: '왜 이렇게 쓸까',
          content: '<code>!</code>로 강제 언래핑했는데 값이 <code>nil</code>이면 <strong>런타임 크래시</strong>가 납니다. 그래서 <code>if ... != nil</code>로 먼저 확인한 뒤 안전하게 꺼내는 것. 이 패턴 자체가 옵셔널을 이해했다는 증거.',
        },
      },
      {
        type: 'heading3',
        content: '3) 암묵적 언래핑 (Implicitly Unwrapped Optional)',
      },
      {
        type: 'code',
        data: {
          code: `// ! 로 선언 → 사용할 때 ! 안 붙여도 됨
var index: Int!
index = 3

if index != nil {
    print(index)      // ! 없이 바로 사용 가능
}

// 실제 코드에서 자주 봄: @IBOutlet var txtName: UITextField!`,
        },
      },
      {
        type: 'heading3',
        content: '4) 꼭 외울 용어 5가지',
      },
      {
        type: 'table',
        data: {
          headers: ['용어', '뜻', '문법'],
          rows: [
            { cells: ['Optional\n(옵셔널)', '값이 있을 수도, 없을 수도(nil) 있는 타입', '<code>Int?</code>'] },
            { cells: ['nil', '값이 없음 (JS의 null과 동일)', '<code>index = nil</code>'] },
            { cells: ['Wrapped\n(래핑)', '옵셔널에 값이 할당되어 <strong>포장된 상태</strong>', '<code>index = 3</code>'] },
            { cells: ['Forced Unwrapping\n(강제 언래핑)', '<code>!</code>로 옵셔널을 <strong>강제로 풀어서</strong> 값에 접근', '<code>index!</code>'] },
            { cells: ['Implicitly Unwrapped\n(암묵적 언래핑)', '<code>Int!</code>로 선언 → <code>!</code> 없이 접근 가능', '<code>var x: Int!</code>'] },
          ],
        },
      },
      {
        type: 'heading3',
        content: '5) ? vs ! 절대 혼동 금지',
      },
      {
        type: 'compare',
        data: {
          left: {
            label: '? (선언할 때)',
            content: '<strong>"값이 없을 수 있다"</strong>고 알려줄 때. 타입 뒤에 붙임.',
            code: 'var x: Int?',
          },
          right: {
            label: '! (사용할 때)',
            content: '<strong>"값을 강제로 꺼내겠다"</strong>고 할 때. 변수 뒤에 붙임.',
            code: 'print(x!)',
          },
        },
      },
      {
        type: 'heading3',
        content: '6) Int("123")이 옵셔널인 이유',
      },
      {
        type: 'code',
        data: {
          code: `var a = "123"
var b = Int(a)     // b는 Int? 타입 (옵셔널!)

// 왜? "abc"같은 경우 변환 실패해서 nil이 될 수 있기 때문
var c = Int("abc") // c는 nil`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: '실전 예상 문제',
          content: `<pre class="mt-2 text-sm"><code>var count: Int( )     // 옵셔널 선언
count = 5
if count ( ) nil {
    print(count( ))
}</code></pre>
답: <code>?</code> / <code>!=</code> / <code>!</code>`,
        },
      },
    ],
  },

  // ──────── 15. 조건문·반복문 ────────
  {
    id: 'flow',
    number: '15',
    label: 'Swift 문법',
    title: '조건문 · 반복문',
    desc: '',
    blocks: [
      {
        type: 'heading3',
        content: 'if 조건문',
      },
      {
        type: 'code',
        data: {
          code: `// 기본 형식
if 조건 {
    ...
} else if 조건 {
    ...
} else {
    ...
}

// 짝수/홀수 판별 예제
if num % 2 == 1 {
    print("\\(num)는 홀수입니다.")
} else {
    print("\\(num)는 짝수입니다.")
}`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: 'Swift 특이점',
          content: 'if문의 조건에 <strong>괄호()를 꼭 쓸 필요 없음</strong>. 써도 되고 안 써도 됨.<br/><code>if (num%2==1) { }</code> 도 가능.',
        },
      },
      {
        type: 'heading3',
        content: 'for-in 반복문',
      },
      {
        type: 'code',
        data: {
          code: `// 닫힌 범위 (1~5 모두 포함)
for i in 1...5 {
    print(i)   // 1, 2, 3, 4, 5
}

// 반열린 범위 (5 미포함)
for i in 1..<5 {
    print(i)   // 1, 2, 3, 4
}

// 배열 순회
let names = ["Anna", "Alex", "Brian"]
for name in names {
    print("Hello, \\(name)!")
}`,
        },
      },
      {
        type: 'heading3',
        content: 'while / repeat-while',
      },
      {
        type: 'code',
        data: {
          code: `var i = 0
while i < 10 {
    print(i)
    i += 1
}

// JS의 do-while과 동일 (최소 1번은 실행)
i = 0
repeat {
    print(i)
    i += 1
} while i < 10`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: 'JS와 차이',
          content: 'JS의 <code>do-while</code> → Swift는 <strong><code>repeat-while</code></strong>. 이름만 다름.',
        },
      },
      {
        type: 'heading3',
        content: 'switch (중요)',
      },
      {
        type: 'code',
        data: {
          code: `let char: Character = "a"
switch char {
    case "a", "A":         // 여러 case 묶기 가능
        print("The letter A")
    default:
        print("Not the letter A")
}`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: 'Swift switch 특이점',
          content: 'C언어와 달리 Swift의 switch는 <strong>자동으로 fall through 하지 않음</strong>.<br/>그래서 case 안에 <code>break</code>를 쓸 필요가 없음. 또한 각 case는 <strong>비어있으면 안 됨</strong> (컴파일 에러).',
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: 'O/X 핵심 포인트',
          content: '문제: "스위치문에서 <strong>break</strong>를 써야 종료된다" → 정답: <strong>X (거짓)</strong><br/><br/>Swift 공식 문법: <em>"In contrast with switch statements in C and Objective-C, switch statements in Swift don\'t fall through the bottom of each case and into the next one by default."</em><br/><br/>즉, Swift의 switch는 <strong>매칭된 case 실행 후 자동으로 종료</strong>됨. <code>break</code> 문 불필요. C/Java와 정반대!',
        },
      },
      {
        type: 'heading3',
        content: 'break · continue',
      },
      {
        type: 'compare',
        data: {
          left: {
            label: 'break',
            content: '반복/switch를 <strong>즉시 종료</strong>하고 밖으로 나감.',
          },
          right: {
            label: 'continue',
            content: '현재 반복을 중단하고 <strong>다음 반복</strong>으로 넘어감.',
          },
        },
      },
    ],
  },

  // ──────── 16. 클로저 ────────
  {
    id: 'closure',
    number: '16',
    label: 'Swift 문법 · 추가',
    title: '클로저 (Closure) · 익명함수',
    desc: '익명함수 개념.',
    blocks: [
      {
        type: 'heading3',
        content: '개념',
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: '클로저 / 익명함수',
          content: '함수 이름을 선언하지 않고 <strong>바로 함수 몸체만 만들어 사용하는 일회용 함수</strong>.<br/><strong>익명 함수 (Anonymous Function) = 클로저 (Closure)</strong> — 같은 말.<br/>(다른 언어의 lambda, block과 유사)',
        },
      },
      {
        type: 'heading3',
        content: '클로저 문법',
      },
      {
        type: 'code',
        data: {
          code: `// 기본 형식: { (매개변수) -> 반환타입 in 실행구문 }
{ (파라미터) -> 반환타입 in
    실행 구문
}

// 예제: numbers.map 사용
var numbers = [20, 19, 7, 12]
numbers.map({ (number: Int) -> Int in
    let result = 3 * number
    return result
})
// 결과: [60, 57, 21, 36]`,
        },
      },
      {
        type: 'heading3',
        content: '일반 함수 → 클로저 변환',
      },
      {
        type: 'code',
        data: {
          code: `// 1) 일반 함수
func completeWork(finished: Bool) -> () {
    print("complete: \\(finished)")
}

// 2) 클로저(익명함수) 형태
{
    (finished: Bool) -> () in
    print("complete: \\(finished)")
}

// 3) 반환 타입 생략 가능
{
    (finished: Bool) in
    print("complete: \\(finished)")
}

// 4) 파라미터 타입도 생략 가능 (컴파일러가 추론 가능할 때)
{
    finished in
    print("complete: \\(finished)")
}`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: '실전 사용 예시 (Alert의 handler)',
          content: `<pre class="mt-2 text-sm"><code>let offAction = UIAlertAction(title: "네",
    style: .default, handler: {
        ACTION in
        self.lampImg.image = self.imgOff
        self.isLampOn = false
    })</code></pre>
<code>handler:</code> 뒤에 오는 것이 클로저(익명함수).`,
        },
      },
    ],
  },

  // ──────── 17. 얼럿 ────────
  {
    id: 'alert',
    number: '17',
    label: 'UI · 추가',
    title: '얼럿 (Alert)',
    desc: '사용자에게 메시지를 띄우는 UI 객체.',
    blocks: [
      {
        type: 'heading3',
        content: '개념',
      },
      {
        type: 'callout',
        data: {
          type: 'key',
          label: '얼럿 (Alert)',
          content: '사용자에게 <strong>중요한 알림이나 경고 메시지</strong>를 나타내야 할 때 사용하는 객체.<br/>사용자의 <strong>주의를 집중시키는 경고</strong>로 마무리하거나 후속 조치를 취할 수 있음.',
        },
      },
      {
        type: 'heading3',
        content: '얼럿 만들기 (5단계)',
      },
      {
        type: 'code',
        data: {
          code: `// ① UIAlertController 생성
let lampOnAlert = UIAlertController(
    title: "경고",
    message: "현재 On 상태입니다",
    preferredStyle: UIAlertController.Style.alert)

// ② UIAlertAction 생성 (버튼)
let onAction = UIAlertAction(
    title: "네, 알겠습니다.",
    style: UIAlertAction.Style.default,
    handler: nil)

// ③ 얼럿에 액션 추가
lampOnAlert.addAction(onAction)

// ④ 얼럿 표시
present(lampOnAlert, animated: true, completion: nil)`,
        },
      },
      {
        type: 'callout',
        data: {
          type: 'tip',
          label: '핵심 구성',
          content: '<strong>UIAlertController</strong> (얼럿 본체) + <strong>UIAlertAction</strong> (버튼) + <strong>present()</strong> (화면 표시).',
        },
      },
    ],
  },

  // ──────── 18. 예상 문제 ────────
  {
    id: 'quiz',
    number: '18',
    label: 'Practice',
    title: '예상 문제 33',
    desc: '머릿속으로 먼저 답해보세요.',
    blocks: [
      {
        type: 'quiz-group',
        data: {
          title: '맥북 Concept',
          items: [
            { question: '열려 있는 창의 위치를 빠르게 제어하도록 도와주는 기능은?', answer: '미션 컨트롤 (Mission Control)' },
            { question: '사용 중인 앱의 윈도우를 모두 표시하는 기능은?', answer: '앱 Exposé (App Exposé)' },
            { question: '작업 공간을 분리해서 멀티태스킹을 훨씬 더 효율적으로 할 수 있게 해주는 것은?', answer: 'Spaces' },
            { question: '트랙패드를 강하게 눌러서 추가 기능을 실행하는 기능의 이름은?', answer: 'Force Click (포스 클릭)' },
          ],
        },
      },
      {
        type: 'quiz-group',
        data: {
          title: 'iOS / 개발 환경',
          items: [
            { question: '아이폰 앱 개발을 위한 통합 개발 환경(IDE)의 이름은?', answer: 'Xcode' },
            { question: 'IDE는 무엇의 약자인가?', answer: 'Integrated Development Environment (통합 개발 환경)' },
            { question: '첫 iPhone이 출시된 연도와 월은?', answer: '2007년 1월' },
            { question: '첫 Android 스마트폰의 이름은?', answer: 'HTC Dream (HTC G1)' },
            { question: 'Google이 Android, Inc.를 인수한 연도는?', answer: '2005년' },
          ],
        },
      },
      {
        type: 'quiz-group',
        data: {
          title: 'Swift UI 객체 개념',
          items: [
            { question: '임의의 양의 텍스트를 보여주기 위한 객체는?', answer: '레이블 (Label)' },
            { question: '화면 간의 흐름 및 전체적인 모양을 시각적인 방식으로 연결하고 표현해주는 기능은?', answer: '스토리보드 (Storyboard)' },
            { question: '스토리보드의 UI 객체를 코드에서 제어하기 위해 연결한 변수를 무엇이라 하는가?', answer: '아웃렛 변수 (Outlet)' },
            { question: '사용자가 UI 객체를 조작했을 때 실행되는 함수를 무엇이라 하는가?', answer: '액션 함수 (Action)' },
            { question: '사용자에게 중요한 알림이나 경고 메시지를 나타내는 객체는?', answer: '얼럿 (Alert) / UIAlertController' },
            { question: '날짜와 시간을 선택할 수 있게 해주는 객체는?', answer: '데이트 피커 (Date Picker)' },
            { question: '문자열 목록에서 회전하여 선택하게 해주는 객체는?', answer: '피커 뷰 (Picker View)' },
            { question: 'TextField와 TextView의 차이는?', answer: 'TextField는 한 줄 텍스트 입력, TextView는 여러 줄 텍스트 입력/표시.' },
          ],
        },
      },
      {
        type: 'quiz-group',
        data: {
          title: 'Swift 문법 · 빈칸 채우기',
          items: [
            { question: '3.14 값을 갖는 상수 pi를 선언하시오. ( ) ( ) : ( ) = ( )', answer: '( let ) ( pi ) : ( Double ) = ( 3.14 )' },
            { question: 'var a = "123" 일 때, a를 이용해 b에 정수 123이 저장되도록 하라. var b = ( )', answer: 'Int(a)' },
            { question: 'adidas, nike, puma를 요소로 갖는 배열 sports를 변수로 선언하라. ( ) ( ) : ( ) = ( )', answer: '( var ) ( sports ) : ( [String] ) = ( ["adidas", "nike", "puma"] )' },
            { question: '배열 sports의 끝에 "reebok"을 추가하는 코드는?', answer: 'sports.append("reebok")' },
            { question: 'sports 배열의 요소 개수를 출력하는 코드는?', answer: 'print(sports.count)' },
            { question: '다음 중 변수명으로 사용 가능한 것은? ① 1name ② my name ③ _name ④ na me', answer: '③ _name (숫자로 시작 X, 공백 포함 X)' },
            { question: '함수 매개변수에 기본값(디폴트값)을 지정하는 문법을 쓰시오.', answer: 'func f(x: Int = 10) — 타입 뒤에 = 기본값' },
            { question: '"Swift의 switch 문에서는 각 case 끝에 break를 써야 한다." (O/X)', answer: 'X — Swift의 switch는 자동으로 fall through 하지 않아 break 불필요.' },
          ],
        },
      },
      {
        type: 'quiz-group',
        data: {
          title: '옵셔널',
          items: [
            { question: '값이 존재하지 않을 수도 있음(nil일 수 있음)을 나타내는 Swift 고유의 타입 개념은?', answer: '옵셔널 (Optional)' },
            { question: 'var index: Int?로 선언된 옵셔널 변수의 값을 강제로 꺼내는 문법의 이름은?', answer: '강제 언래핑 (Forced Unwrapping) — index!' },
            { question: '옵셔널 변수에 값이 할당되어 포장된 상태를 무엇이라 하는가?', answer: '래핑 (Wrapped)' },
            { question: '다음 빈칸을 채우시오:\nvar index: Int( )\nindex = 3\nif index ( ) nil {\n    print(index( ))\n}', answer: '? / != / !' },
            { question: 'var name: String! 처럼 선언하는 옵셔널을 무엇이라 하는가?', answer: '암묵적 언래핑 옵셔널 (Implicitly Unwrapped Optional)' },
          ],
        },
      },
      {
        type: 'quiz-group',
        data: {
          title: '클로저 / 연산자',
          items: [
            { question: '함수 이름을 선언하지 않고 바로 함수 몸체만 만들어 사용하는 일회용 함수의 이름은? (두 가지 답)', answer: '익명 함수 (Anonymous Function) 또는 클로저 (Closure)' },
            { question: '1...5와 1..<5의 차이는?', answer: '1...5는 1,2,3,4,5 (양끝 포함), 1..<5는 1,2,3,4 (5 미포함)' },
            { question: '9 % 4의 결과값은?', answer: '1 (나머지 연산자)' },
          ],
        },
      },
    ],
  },

  // ──────── 19. 최종 체크리스트 ────────
  {
    id: 'checklist',
    number: '19',
    label: 'Final Check',
    title: '시험 직전 체크리스트',
    desc: '체크박스 클릭하면 완료 표시됩니다 (브라우저에 저장됨).',
    blocks: [
      {
        type: 'checklist-group',
        data: {
          title: '맥북 & iOS 개념',
          items: [
            '미션 컨트롤 · 앱 Exposé · Spaces 구분해서 외우기',
            'Xcode가 macOS에서만 동작한다는 사실',
            'Xcode = IDE (Integrated Development Environment)',
            'iOS 앱 개발 3요소: 맥 PC + macOS + Xcode',
            '첫 iPhone 2007.1, 첫 Android폰 HTC Dream 2008.10',
          ],
        },
      },
      {
        type: 'checklist-group',
        data: {
          title: 'Swift UI 객체 정의',
          items: [
            '레이블 = 임의의 양의 텍스트를 보여주기 위한 객체',
            '스토리보드 = 화면 흐름을 시각적으로 연결·표현',
            'Outlet vs Action 차이',
            '데이트 피커(날짜/시간) vs 피커 뷰(문자열) 구분',
            '얼럿 = 중요한 알림/경고 메시지를 나타내는 객체',
          ],
        },
      },
      {
        type: 'checklist-group',
        data: {
          title: 'Swift 문법 핵심',
          items: [
            'let(상수) vs var(변수) — JS의 const vs let',
            '타입 어노테이션 형식: 이름: 타입 = 값',
            'Swift는 세미콜론(;) 없음',
            'String → Int 변환: Int(a)',
            '배열 선언: var arr: [String] = [...]',
            '배열 메서드: append, count',
            '함수 호출 시 레이블 필수 func(param: value)',
            'for-in 범위 1...5 vs 1..<5',
            'if문 조건 괄호는 선택사항',
            'switch는 자동 fall through 하지 않음',
          ],
        },
      },
      {
        type: 'checklist-group',
        data: {
          title: '옵셔널 (최우선)',
          items: [
            'Optional = 값이 있을 수도/없을 수도(nil) 있는 타입',
            'Swift만의 개념 (C/Obj-C에 없음)',
            '? (선언) vs ! (강제 언래핑) 구분',
            'Wrapped (래핑) = 옵셔널에 값이 할당된 상태',
            'if index != nil { print(index!) } 패턴 외우기',
            'Int("123")은 왜 Int?를 반환하는지 이해',
          ],
        },
      },
      {
        type: 'checklist-group',
        data: {
          title: '선배들의 시험 팁',
          items: [
            '괄호 안에 답 쓸 때, 문제의 괄호 다음 괄호도 반드시 쓰기!',
            '문제의 변수만으로 코드가 안 되면 새 변수를 직접 선언하기',
            '한글/영문 답 모두 허용 (단답형)',
            '개념과 문법에 집중',
          ],
        },
      },
      {
        type: 'callout',
        data: {
          type: 'warn',
          label: '공부 팁',
          content: '개념을 확실히 잡고, UI 객체 정의와 옵셔널에 집중하세요. 문법은 <strong>차이점만</strong> 잡으면 됩니다.',
        },
      },
    ],
  },
];

export const tocItems = sections.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
}));
