function getFinalOpenedDoors (numDoors) {
    let doors = [];
    for(let i = 1; i <= numDoors; i ++){
      let action = CalculateAction(i);
      if(action.length % 2 !== 0){
        doors.push(i);
      }
    }
    return doors;
  }
  
  function CalculateAction(value){
      let action = [];
      for(let i = value; i >= 1; i --){
          if(value % i === 0){
            action.push(i);
          }
      }
      return action;
  }
