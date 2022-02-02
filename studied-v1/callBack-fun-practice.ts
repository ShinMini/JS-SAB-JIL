// additional code written by myself
const alreadyMadeCallback = (doIt) => {
     console.log(doIt);
     if(doIt) {     // doit 매개변수로 값이 들어왔을 때, 값이 있을때, 
          return doIt;
     }   // doit 매개변수로 값이 들어오지 않았을때, 
     // 값이 들어오지 않았을 경우, 냅둠.
     console.log(doIt);
}

const initial = (alreadyMadeCallback): void =>  {     // 콜백함수 구현 후 실험.
     alreadyMadeCallback;
}

//initial(console.log('hi there'))