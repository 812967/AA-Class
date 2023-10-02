
function sortArray(arr){
  let returna = [arr[0]];
  for(let i = 1; i<arr.length; i++){
    if(returna[i-1]<=arr[i]){
      returna.push(arr[i]);
    }else{
      let found = 0;
      for(let ii = 0; ii<i; ii++){
        if(arr[i]<returna[ii]){
          found = ii;
          ii=i;
        }else{
          found = ii;
        }
      }
      returna.splice(found, 0, arr[i]);
    }
  }
  return returna;
}

function getMode(max, arr){
  let count = [];
  for(let i = 0; i<=max; i++){
      count[i] = 0;
  }
  for(let i = 0; i<arr.length; i++){
      count[arr[i]]++;
  }
  let mx = 0;
  for(let i = 0; i<count.length; i++){
      if(mx<count[i]){
          mx++;
      }
  }
  let moode = [];
  for(let i = 0; i<count.length; i++){
    if(count[i]===mx){
      moode.push(i);
    }
  }
  return moode;
}

function getMed(ar){
  arr = sortArray(ar);
  if(arr.length%2===0){
      let sum = (arr[arr.length/2] + arr[(arr.length/2)-1])/2;
      return sum;
  }else{
      return arr[Math.ceil(arr.length/2)];
  }
}

function getMean(arr){
  let sum = 0;
  for(let i = 0; i<arr.length; i++){
      sum+=arr[i];
  }
  return sum/arr.length;
}

