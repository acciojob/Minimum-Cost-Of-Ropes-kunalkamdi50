function calculateMinCost() {
  //your code here
  var ropesInput = document.getElementById("rope-lengths").value;
    var ropes = ropesInput.split(",").map(Number);

    // Sort the array in ascending order
    ropes.sort((a, b) => a - b);

    var totalCost = 0;
    var i = 0;

    while (i < ropes.length - 1) {
      var sum = ropes[i] + ropes[i + 1];
      totalCost += sum;

      // Combine the two ropes and insert the sum back into the array
      ropes.splice(i, 2, sum);

      // Keep the array sorted
      var j = i + 1;
      while (j < ropes.length && ropes[j] < ropes[j - 1]) {
        // Swap adjacent elements until the array is sorted
        [ropes[j], ropes[j - 1]] = [ropes[j - 1], ropes[j]];
        j++;
      }

      i++;
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Minimum cost: " + totalCost;
  }

  
  
}  
