function diffArray(arr1, arr2) {
    var newArr = [];
    var h1 = Object.create(null);
    arr1.forEach(function(e) {
      h1[e] = e;
    });
  
    var h2 = Object.create(null);
    arr2.forEach(function(e) {
      h2[e] = e;
    });
  
    Object.keys(h1).forEach(function(e) {
       if (!(e in h2)) newArr.push(h1[e]);
    });
    Object.keys(h2).forEach(function(e) {
       if (!(e in h1)) newArr.push(h2[e]);
    });
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(
    diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
  );
  console.log(
    diffArray(
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
  );
  console.log(
    diffArray(
      ["andesite", "grass", "dirt", "dead shrub"],
      ["andesite", "grass", "dirt", "dead shrub"]
    )
  );
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
  console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));