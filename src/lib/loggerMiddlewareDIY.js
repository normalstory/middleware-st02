//미들웨어, src/index.js에 추가

const loggerMiddlewareDIY = (store) => (next) => (action) => {
  //미들웨어 기본구조
  console.group(action && action.type);
  console.log("이전상태", store.getState());
  console.log("액션", action);
  next(action); //다음 미들웨어 또는 리듀서에 전달
  console.log("다음상태", store.getState());
  console.groupEnd();
};
export default loggerMiddlewareDIY;
