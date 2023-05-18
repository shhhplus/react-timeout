# react-timeout

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-timeout/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-timeout.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-timeout) [![codecov](https://img.shields.io/codecov/c/github/shhhplus/react-timeout/main?token=FOCNEWKWBC)](https://codecov.io/gh/shhhplus/react-timeout) [![build status](https://img.shields.io/github/actions/workflow/status/shhhplus/react-timeout/cd.yml)](https://github.com/shhhplus/react-timeout/actions)

This react timeout component is very simple!

## Install

```sh
npm install @shhhplus/react-timeout --save
```

## How to use

### sync

```jsx
import Timeout from '@shhhplus/react-timeout';

const Demo = () => {
  const onElapsed = () => {
    console.log('...');
  };
  return <Timeout delay={1000} onElapsed={onElapsed} />;
};
```

### async

```jsx
import Timeout from '@shhhplus/react-timeout';

const Demo = () => {
  const onElapsed = () => {
    console.log('...');
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  };
  return <Timeout delay={1000} onElapsed={onElapsed} />;
};
```
