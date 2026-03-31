// src/lib/constants.ts

import type { Project, Region, Badge } from '@/types';

// ============= 15개 프로젝트 (C + Python) =============

// C 언어 프로젝트
const C_PROJECTS: Project[] = [
  {
    id: 'c_1_variables',
    title: '변수와 데이터 타입',
    description: 'int, float, char 등 기본 타입을 학습합니다.',
    language: 'c',
    category: 'basics',
    difficulty: 'beginner',
    code: `#include <stdio.h>

int main() {
  int age = 25;
  float height = 175.5;
  char grade = 'A';
  
  printf("나이: %d\\n", age);
  printf("키: %.1f\\n", height);
  printf("학점: %c\\n", grade);
  
  return 0;
}`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '변수 선언하기', description: 'int, float, char 선언', completed: false },
      { stepNumber: 2, title: '값 할당하기', description: '값을 변수에 저장', completed: false },
      { stepNumber: 3, title: '출력하기', description: 'printf로 출력', completed: false },
    ],
    concepts: ['변수', '데이터타입', '출력'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'c_2_pointer',
    title: '포인터 이해하기',
    description: '포인터의 기본 개념을 배웁니다.',
    language: 'c',
    category: 'basics',
    difficulty: 'intermediate',
    code: `#include <stdio.h>

int main() {
  int x = 10;
  int *ptr = &x;
  
  printf("x의 값: %d\\n", x);
  printf("x의 주소: %p\\n", (void*)ptr);
  printf("포인터가 가리키는 값: %d\\n", *ptr);
  
  return 0;
}`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '포인터 선언', description: 'int *ptr; 선언', completed: false },
      { stepNumber: 2, title: '주소 저장', description: 'ptr = &x; 할당', completed: false },
      { stepNumber: 3, title: '값 접근', description: '*ptr로 값 출력', completed: false },
    ],
    concepts: ['포인터', '주소연산자', '역참조'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'c_3_array',
    title: '배열 다루기',
    description: '배열의 선언과 사용법을 배웁니다.',
    language: 'c',
    category: 'basics',
    difficulty: 'beginner',
    code: `#include <stdio.h>

int main() {
  int numbers[5] = {10, 20, 30, 40, 50};
  
  for (int i = 0; i < 5; i++) {
    printf("numbers[%d] = %d\\n", i, numbers[i]);
  }
  
  return 0;
}`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '배열 선언', description: 'int arr[5];', completed: false },
      { stepNumber: 2, title: '초기화', description: '값 할당', completed: false },
      { stepNumber: 3, title: '반복문으로 출력', description: 'for 루프 사용', completed: false },
    ],
    concepts: ['배열', '인덱싱', '반복문'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'c_4_function',
    title: '함수 만들기',
    description: '함수의 정의와 호출을 배웁니다.',
    language: 'c',
    category: 'basics',
    difficulty: 'beginner',
    code: `#include <stdio.h>

int add(int a, int b) {
  return a + b;
}

int main() {
  int result = add(10, 20);
  printf("10 + 20 = %d\\n", result);
  return 0;
}`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '함수 정의', description: 'int add() 작성', completed: false },
      { stepNumber: 2, title: '매개변수', description: '파라미터 받기', completed: false },
      { stepNumber: 3, title: '함수 호출', description: 'add() 호출', completed: false },
    ],
    concepts: ['함수', '매개변수', '반환값'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'c_5_struct',
    title: '구조체 이해하기',
    description: '자신만의 데이터 타입을 만듭니다.',
    language: 'c',
    category: 'basics',
    difficulty: 'intermediate',
    code: `#include <stdio.h>

struct Student {
  char name[50];
  int age;
  float gpa;
};

int main() {
  struct Student s = {"John", 20, 3.8};
  printf("이름: %s\\n", s.name);
  printf("나이: %d\\n", s.age);
  printf("학점: %.1f\\n", s.gpa);
  return 0;
}`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '구조체 정의', description: 'struct Student 선언', completed: false },
      { stepNumber: 2, title: '멤버 선언', description: '필드 추가', completed: false },
      { stepNumber: 3, title: '인스턴스 생성', description: '변수에 할당', completed: false },
    ],
    concepts: ['구조체', '멤버', '자료구조'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
];

// Python 프로젝트
const PYTHON_PROJECTS: Project[] = [
  {
    id: 'py_1_variables',
    title: '변수 기초',
    description: 'Python의 변수와 타입을 배웁니다.',
    language: 'python',
    category: 'basics',
    difficulty: 'beginner',
    code: `name = "Alice"
age = 25
height = 165.5

print(f"이름: {name}")
print(f"나이: {age}")
print(f"키: {height}")`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '변수 선언', description: 'name = "Alice"', completed: false },
      { stepNumber: 2, title: '여러 타입', description: '정수, 실수, 문자열', completed: false },
      { stepNumber: 3, title: 'f-string 출력', description: 'print(f"...")', completed: false },
    ],
    concepts: ['변수', '타입', '출력'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_2_list',
    title: '리스트 다루기',
    description: 'Python의 가장 중요한 자료구조입니다.',
    language: 'python',
    category: 'basics',
    difficulty: 'beginner',
    code: `numbers = [1, 2, 3, 4, 5]

for num in numbers:
  print(f"숫자: {num}")

print(f"첫 번째: {numbers[0]}")
print(f"길이: {len(numbers)}")`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '리스트 생성', description: '[1, 2, 3]', completed: false },
      { stepNumber: 2, title: '반복 순회', description: 'for 루프', completed: false },
      { stepNumber: 3, title: '접근과 길이', description: 'indexing, len()', completed: false },
    ],
    concepts: ['리스트', '반복문', '인덱싱'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_3_dict',
    title: '딕셔너리 활용',
    description: '키-값 쌍으로 데이터를 저장합니다.',
    language: 'python',
    category: 'basics',
    difficulty: 'beginner',
    code: `student = {
  "name": "Bob",
  "age": 22,
  "gpa": 3.9
}

for key, value in student.items():
  print(f"{key}: {value}")`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '딕셔너리 생성', description: '{key: value}', completed: false },
      { stepNumber: 2, title: '값 접근', description: 'student["name"]', completed: false },
      { stepNumber: 3, title: '순회', description: '.items() 사용', completed: false },
    ],
    concepts: ['딕셔너리', '키-값', '반복'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_4_function',
    title: '함수 정의',
    description: 'Python 함수를 만들고 사용합니다.',
    language: 'python',
    category: 'basics',
    difficulty: 'beginner',
    code: `def greet(name):
  return f"안녕하세요, {name}님!"

result = greet("Charlie")
print(result)

def add(a, b):
  return a + b

print(add(5, 3))`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '함수 정의', description: 'def greet():', completed: false },
      { stepNumber: 2, title: '반환값', description: 'return 문', completed: false },
      { stepNumber: 3, title: '함수 호출', description: 'greet() 호출', completed: false },
    ],
    concepts: ['함수', '매개변수', '반환'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_5_class',
    title: '클래스와 객체',
    description: '객체 지향 프로그래밍의 기초입니다.',
    language: 'python',
    category: 'intermediate',
    difficulty: 'intermediate',
    code: `class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def introduce(self):
    return f"저는 {self.name}이고 {self.age}살입니다"

person = Person("David", 28)
print(person.introduce())`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '클래스 정의', description: 'class Person:', completed: false },
      { stepNumber: 2, title: '생성자', description: '__init__ 메서드', completed: false },
      { stepNumber: 3, title: '메서드', description: 'introduce() 정의', completed: false },
    ],
    concepts: ['클래스', '객체', '메서드'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_6_file',
    title: '파일 처리',
    description: '파일을 읽고 쓰는 방법을 배웁니다.',
    language: 'python',
    category: 'intermediate',
    difficulty: 'beginner',
    code: `# 파일 쓰기
with open('data.txt', 'w') as f:
  f.write("Hello, World!\\n")
  f.write("Python is great!")

# 파일 읽기
with open('data.txt', 'r') as f:
  content = f.read()
  print(content)`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '파일 열기', description: 'open() 함수', completed: false },
      { stepNumber: 2, title: '데이터 쓰기', description: 'write() 메서드', completed: false },
      { stepNumber: 3, title: '데이터 읽기', description: 'read() 메서드', completed: false },
    ],
    concepts: ['파일', '입출력', 'with 문'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_7_exception',
    title: '예외 처리',
    description: '에러를 처리하고 프로그램을 안정화합니다.',
    language: 'python',
    category: 'intermediate',
    difficulty: 'intermediate',
    code: `try:
  numbers = [1, 2, 3]
  print(numbers[5])
except IndexError:
  print("인덱스 범위를 벗어났습니다!")
except Exception as e:
  print(f"에러: {e}")
finally:
  print("프로그램 종료")`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: 'try-except', description: '에러 처리', completed: false },
      { stepNumber: 2, title: '예외 종류', description: '특정 에러 캐치', completed: false },
      { stepNumber: 3, title: 'finally', description: '항상 실행되는 블록', completed: false },
    ],
    concepts: ['예외', 'try-except', 'finally'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_8_lambda',
    title: '람다 함수',
    description: '간단한 익명 함수를 배웁니다.',
    language: 'python',
    category: 'advanced',
    difficulty: 'intermediate',
    code: `# 람다 함수
add = lambda x, y: x + y
print(add(3, 5))

# map 사용
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)

# filter 사용
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '람다 함수 정의', description: 'lambda x: x * 2', completed: false },
      { stepNumber: 2, title: 'map() 사용', description: '각 요소에 함수 적용', completed: false },
      { stepNumber: 3, title: 'filter() 사용', description: '조건에 맞는 요소 선택', completed: false },
    ],
    concepts: ['람다', 'map', 'filter'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_9_decorator',
    title: '데코레이터',
    description: '함수를 수정하지 않고 기능을 추가합니다.',
    language: 'python',
    category: 'advanced',
    difficulty: 'advanced',
    code: `def my_decorator(func):
  def wrapper(*args, **kwargs):
    print("함수 실행 전")
    result = func(*args, **kwargs)
    print("함수 실행 후")
    return result
  return wrapper

@my_decorator
def say_hello(name):
  print(f"안녕하세요, {name}님!")

say_hello("Eve")`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: '데코레이터 함수', description: '래퍼 함수 정의', completed: false },
      { stepNumber: 2, title: '@기호 사용', description: '데코레이터 적용', completed: false },
      { stepNumber: 3, title: 'args, kwargs', description: '가변 인자 처리', completed: false },
    ],
    concepts: ['데코레이터', '함수형', 'wrapper'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
  {
    id: 'py_10_api',
    title: 'API 호출',
    description: '외부 API에서 데이터를 가져옵니다.',
    language: 'python',
    category: 'advanced',
    difficulty: 'advanced',
    code: `import json

# JSON 문자열 파싱
api_response = '{"name": "Frank", "age": 30}'
data = json.loads(api_response)
print(f"이름: {data['name']}")

# 데이터를 JSON으로 변환
user = {"name": "Grace", "age": 26}
json_str = json.dumps(user)
print(json_str)`,
    progress: 0,
    status: 'not_started',
    steps: [
      { stepNumber: 1, title: 'JSON 파싱', description: 'json.loads()', completed: false },
      { stepNumber: 2, title: '데이터 변환', description: 'json.dumps()', completed: false },
      { stepNumber: 3, title: '활용', description: 'API 응답 처리', completed: false },
    ],
    concepts: ['JSON', 'API', '데이터변환'],
    createdAt: new Date(),
    lastSaved: new Date(),
  },
];

// ============= 지역 (Region) =============
export const REGIONS: Region[] = [
  {
    id: 'region_1_basics',
    name: 'C의 기초',
    emoji: '📚',
    description: '변수, 포인터, 배열 등 C의 기본을 배웁니다.',
    projects: C_PROJECTS.slice(0, 5),
    progress: 0,
    status: 'not_started',
    prerequisites: [],
  },
  {
    id: 'region_2_python_basics',
    name: 'Python 기초',
    emoji: '🐍',
    description: 'Python의 기본 문법과 개념을 배웁니다.',
    projects: PYTHON_PROJECTS.slice(0, 5),
    progress: 0,
    status: 'not_started',
    prerequisites: [],
  },
  {
    id: 'region_3_python_advanced',
    name: 'Python 심화',
    emoji: '🚀',
    description: '클래스, 데코레이터, API 등을 배웁니다.',
    projects: PYTHON_PROJECTS.slice(5, 10),
    progress: 0,
    status: 'locked',
    prerequisites: ['region_2_python_basics'],
  },
];

// ============= 뱃지 =============
export const ALL_BADGES: Badge[] = [
  {
    id: 'beginner',
    name: '초보자',
    description: '첫 프로젝트 완료',
    icon: '🌱',
    earned: false,
    requirement: '1개 프로젝트 완료',
  },
  {
    id: 'c_master',
    name: 'C 마스터',
    description: 'C 언어 5개 프로젝트 완료',
    icon: '📚',
    earned: false,
    requirement: 'C 프로젝트 5개 완료',
  },
  {
    id: 'python_master',
    name: 'Python 마스터',
    description: 'Python 프로젝트 5개 완료',
    icon: '🐍',
    earned: false,
    requirement: 'Python 프로젝트 5개 완료',
  },
  {
    id: 'streak_5',
    name: '5일 연속',
    description: '5일 연속 프로젝트 완료',
    icon: '🔥',
    earned: false,
    requirement: '5일 연속 진행',
  },
  {
    id: 'streak_30',
    name: '30일 완주',
    description: '30일 연속 프로젝트 완료',
    icon: '⭐',
    earned: false,
    requirement: '30일 연속 진행',
  },
  {
    id: 'all_completed',
    name: '최종 완성',
    description: '모든 프로젝트 완료',
    icon: '👑',
    earned: false,
    requirement: '15개 프로젝트 모두 완료',
  },
];

// ============= 기본값 =============
export const DEFAULT_USER = {
  deviceId: '',
  nickname: '신입 개발자',
  level: 1,
  totalExp: 0,
  completedProjects: 0,
  currentStreak: 0,
  createdAt: new Date(),
  lastUpdated: new Date(),
};

export const DEFAULT_STATS = {
  totalHours: 0,
  completedProjects: 0,
  learnedConcepts: 0,
  currentStreak: 0,
  badges: ALL_BADGES,
  lastUpdated: new Date(),
};

export const LANGUAGES = ['c', 'python', 'javascript'] as const;
export const LEVEL_ICONS = ['🌱', '🌳', '🌲', '🏆'] as const;
export const LEVEL_NAMES = ['초보자', '개발자', '마스터', '전문가'] as const;

// ============= 타임아웃 =============
export const EXECUTION_TIMEOUT = 5000; // 5초
export const FIRESTORE_SYNC_INTERVAL = 3000; // 3초
export const GEMINI_MAX_TOKENS = 1000;
