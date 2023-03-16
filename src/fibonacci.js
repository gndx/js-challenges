// Next function calculates a fibonacci sequence of n elements

function fibonacci(n) 
{
  array = [];
  if (n == 1) 
  {
    array = [1];
  } else if (n == 2) 
  {
    array = [1, 1];
  } else 
  {
    array = [1, 1];
    for (let i=2; i < n; i++) 
    {
      array[i] = array[i-1] + array[i-2];
    }
  }
  return (array);
}



//console.log(fibonacci(10)) //[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

module.exports = fibonacci;