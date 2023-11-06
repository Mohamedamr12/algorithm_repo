function sumOfDistinctElements(set1, set2) {
    const distinctElements = new Set([...set1, ...set2]);
    let sum = 0;
    
    for (const element of distinctElements) {
      sum += element;
    }
    
    return sum;
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  console.log(result); // Output: 13

  function dotProduct(v1, v2) {
    let product = 0;
    
    for (let i = 0; i < v1.length; i++) {
      product += v1[i] * v2[i];
    }
    
    return product;
  }
  
  function areVectorsOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
  }
  
  // Example usage
  const vectors = [
    [1, 2, 3],
    [4, -2, 1],
    [0, 1, 5]
  ];
  
  for (let i = 0; i < vectors.length; i += 2) {
    const v1 = vectors[i];
    const v2 = vectors[i + 1];
    const orthogonal = areVectorsOrthogonal(v1, v2);
    console.log(`Vectors ${v1} and ${v2} are orthogonal: ${orthogonal}`);
  }