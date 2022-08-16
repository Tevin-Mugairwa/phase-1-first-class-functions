
function receivesAFunction(call) {
    call();
    return;
  }
  
  function returnsANamedFunction() {
    return function nameF() {
      console.log(`a named function`);
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log(`anonymous funphase-1-first-class-functionsction`);
  }

