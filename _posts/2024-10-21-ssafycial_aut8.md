---
layout: single
title: "#15 프론트 엔드 개발 관련 기술 스택 프리뷰"
categories: SSAFYCIAL
tag: SSAFY
toc: false
author_profile: false
published: true
typora-root-url: ../



---

안녕하세요! 11기 구미 캠퍼스 싸피셜 기자 김주현입니다! 오늘은 프론트엔드와 관련된 기술 스택에 대해 정리해보는 시간을 가지고자 합니다! 프론트엔드 애플리케이션이 복잡해지면서 전역 상태 관리가 중요해졌습니다. 여러 컴포넌트에서 데이터를 공유하고 일관성 있게 관리하기 위해 다양한 상태 관리 라이브러리들이 등장했으며, 각각의 라이브러리는 특정한 특징과 장점을 갖고 있습니다. 이번 포스팅에서는 주요 전역 상태 관리 라이브러리들을 소개하고, 각 라이브러리의 설명, 주요 개념, 예시 코드, 동작 원리, 장점, 단점, 추천 사용처에 대해 자세히 알아보는 시간을 가져봅시다!

---

## Redux

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc3AtoZEWjG3TJlb14eYkRu35kp3xoWPGAc43CNpuxBPMvhd0r9eDs34Z8ZrGtsTNjyCyc9F4ZXmKLXQTDiwiwdytetkXHNVfygRePQUMIbLrJ-mZOQxeb0Ieg3c5qGJmZCRdQJNmb8OAbROjMlLeGNlm0?key=z-MZHwjdSIXaE7v0jXBjpQ" alt="img" style="zoom: 33%;" />

설명:

Redux는 가장 널리 사용되는 전역 상태 관리 라이브러리로, 특히 React 애플리케이션에서 많이 사용됩니다. 단일 상태 트리를 기반으로 상태 관리를 하는데, 상태의 예측 가능성과 디버깅이 용이하다는 장점이 있습니다.



주요 개념:

Store: 전체 애플리케이션의 상태를 저장하는 단일 객체.

Reducer: 상태를 변화시키는 함수.

Action: 상태 변화의 의도를 나타내는 객체.

예시 코드:

```javascript
const INCREMENT = 'INCREMENT';


const incrementAction = () => ({
  type: INCREMENT,
});


// reducer 정의
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

// store 생성
import { createStore } from 'redux';
const store = createStore(counterReducer);


// store 사용
store.dispatch(incrementAction());
console.log(store.getState()); // 출력: 1

```



동작 원리:

Redux는 단일 Store에서 모든 상태를 관리하고, 상태를 변경하려면 Action을 발생시켜 Reducer에서 이를 처리합니다. 상태는 불변성을 유지하며, Reducer는 새로운 상태 객체를 반환합니다.



장점:

상태 관리가 명확하고 예측 가능함.

대규모 애플리케이션에서 유용.

Redux DevTools 등 디버깅 도구가 잘 갖춰져 있음.

단점:

초기 설정이 복잡하고 많은 보일러플레이트 코드가 필요함.

소규모 프로젝트에서 오히려 과도한 복잡성을 초래할 수 있음.

추천 사용처:

대규모 애플리케이션.

여러 컴포넌트 간 복잡한 상태 공유가 필요한 경우.



## Mobx

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFzmVWWmy43AnKHi51qgbJavKmPDrIXDQKhA_MTpLyPfllcfYBZVKobnlo6qGQj6UcsNr84GSYzFHWNaZ-qrWUzGK-SPoGMk3rXK6BnItuxqwjei-wuT531x8E0hSMLFREmhjWta8dOIKQGIfVYanj379P?key=z-MZHwjdSIXaE7v0jXBjpQ" alt="img" style="zoom:50%;" />

설명:

MobX는 선언적인 방식으로 상태를 관리하는 라이브러리로, 자동으로 상태 변화를 감지하고 UI를 업데이트합니다. 코드가 간결하고 직관적이며, 반응형 상태 관리를 지원합니다.



주요 개념:

Observable: 관찰 가능한 상태.

Action: 상태 변경 함수.

Computed: 파생된 상태.

```javascript
import { observable, action } from 'mobx';


class CounterStore {
  @observable count = 0;


  @action increment() {
    this.count += 1;
  }
}


const counterStore = new CounterStore();


counterStore.increment();
console.log(counterStore.count); // 출력: 1

```

동작 원리:

MobX는 상태를 observable로 만들고, 상태가 변경되면 이를 자동으로 감지하여 UI를 업데이트합니다. 컴포넌트는 상태의 변화를 명시적으로 구독할 필요 없이 자동으로 리렌더링됩니다.



장점:

코드가 직관적이고 간결함.

상태와 UI 간의 데이터 바인딩이 자동으로 이루어짐.

간단한 설정으로 시작할 수 있음.

단점:

복잡한 데이터 흐름에서는 상태 추적이 어려울 수 있음.

상태 변화 추적이 Redux보다 덜 명확할 수 있음.

추천 사용처:

소규모 또는 중규모 애플리케이션.

직관적이고 간단한 상태 관리가 필요한 경우.



## Context API (React)

![img](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4nvD5OGXv5f-RaizXIqJ13k3XxJGZLpyFZ5XAph9IqOdHcr4WY4Av1qKG_ifGdJTDR8oeURMCmL1515iWjZklWPhPp8OyB1zq9CHCWMCvqujW77IJdkorgKA8FULHqs7lDdMGOWrqR0W2o4xpO6JPIfOi?key=z-MZHwjdSIXaE7v0jXBjpQ)

설명:

Context API는 React에서 제공하는 내장 상태 관리 방식으로, 간단한 전역 상태 관리에 적합합니다. 외부 라이브러리 없이 상태를 여러 컴포넌트에 전달할 수 있습니다.



주요 개념:

Provider: 전역 상태를 하위 컴포넌트에 전달.

Consumer: 하위 컴포넌트에서 상태를 소비.

```javascript
import React, { createContext, useContext, useState } from 'react';


const CounterContext = createContext();


const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};


const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <div>Count: {count}</div>;
};


const IncrementButton = () => {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(prev => prev + 1)}>Increment</button>;
};


// 사용 예시
const App = () => (
  <CounterProvider>
    <CounterDisplay />
    <IncrementButton />
  </CounterProvider>
);

```

동작 원리:

React의 Context API는 상위 컴포넌트에서 상태를 정의하고, 하위 컴포넌트들이 해당 상태에 접근하거나 변경할 수 있도록 합니다. useContext 훅을 사용하면 간편하게 상태에 접근할 수 있습니다.



장점:

외부 라이브러리 없이 전역 상태 관리 가능.

단순한 설정과 구조.

단점:

상태 변화가 많을 경우 성능 저하 가능.

복잡한 상태 관리를 위한 도구로는 부족할 수 있음.

추천 사용처:

소규모 프로젝트.

간단한 전역 상태 관리가 필요한 경우.



## Recoil

<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXciNgeFUsnOsQINbmDV_0UmueuCzFsQrNOEt2jDn53FBCvMyszO-jDTzfbIFHxAD0axZC1C1ApPr4ioSTrOOQZWx-zlCgSEQ2NQwqDIb0xSZAsqXCZ7-Is5QI5HYjrdChePhk7tv-qdCBYwiZU3R19sJPri?key=z-MZHwjdSIXaE7v0jXBjpQ" alt="img" style="zoom: 25%;" />

설명:

Recoil은 Facebook에서 개발한 전역 상태 관리 라이브러리로, React 애플리케이션에서 자연스럽게 통합됩니다. 비동기 상태 관리가 쉽고, 상태를 원자(atom) 단위로 분리해 유연한 관리가 가능합니다.



주요 개념:

Atom: 상태의 단위.

Selector: 파생된 상태 또는 비동기 상태.

```javascript
import { atom, useRecoilState } from 'recoil';


// atom 정의
const counterState = atom({
  key: 'counterState', // 고유 키
  default: 0, // 초기값
});


// 컴포넌트에서 atom 사용
const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

```



동작 원리:

Recoil은 상태를 원자(atom) 단위로 관리하여, 각각의 컴포넌트가 필요한 상태만 구독하고, 그 상태가 변경될 때만 UI가 업데이트됩니다. 비동기 상태도 쉽게 관리할 수 있어 효율적입니다.



장점:

비동기 상태 관리가 간편.

상태의 유연한 분리가 가능.

React와 자연스러운 통합.

단점:

상대적으로 덜 성숙한 라이브러리.

대규모 애플리케이션에서의 사용 사례가 적음.

추천 사용처:

비동기 작업이 많은 프로젝트.

유연한 상태 관리가 필요한 React 애플리케이션.



## Zustand

![img](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdxYbaVDrlZPi5j1GdmJFAJRcm833M2A1riI8xnzgiLPWwUuw9x-fHh0J4k_qHUG2oC8K0sOyhxorBoyw3R-_H5MoiznMiWSF9VOlNW2rCsOTpMOKx4peVE9Bh8LTWP0kFFjWyfo7BdhpswaMPk_uSwG3vN?key=z-MZHwjdSIXaE7v0jXBjpQ)

설명:

Zustand는 가벼운 상태 관리 라이브러리로, 매우 간단한 API를 제공하면서도 강력한 상태 관리를 할 수 있습니다. 작은 프로젝트에서부터 대규모 프로젝트까지 적용 가능하며, 상태가 필요한 곳에서만 구독하는 방식으로 효율적입니다.



주요 개념:

Store: 상태와 로직을 관리하는 공간.

Hooks: 상태를 가져오기 위한 훅.

```javascript
import create from 'zustand';


// store 정의
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));


// 컴포넌트에서 store 사용
const Counter = () => {
  const { count, increment } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

```

동작 원리:

Zustand는 함수형 업데이트 방식으로 상태를 관리합니다. 상태가 필요하지 않은 컴포넌트는 리렌더링을 방지하여 불필요한 성능 손실을 최소화할 수 있습니다.



장점:

설정이 매우 간단함.

상태를 모듈화하여 관리 가능.

불필요한 리렌더링 방지.

단점:

복잡한 상태 관리에는 적합하지 않을 수 있음.

추천 사용처:

중소규모 애플리케이션.

간단하고 빠른 상태 관리가 필요한 경우.

이제 각 라이브러리의 장단점과 사용법을 파악하셨을 겁니다. 각 라이브러리마다 적합한 사용처가 다르므로, 프로젝트의 규모와 요구 사항에 맞는 라이브러리를 선택하여 효율적으로 전역 상태를 관리해보세요!



---

<img src="/images/2024-03-24-ssafycial_planned2/11기_구미_김주현.png" alt="11기_구미_김주현" style="zoom:50%;" />