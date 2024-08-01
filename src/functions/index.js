// Function to fetch available times based on the date
export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push(i + ':00');
      }
      if(random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  // Function to submit form data
export const submitAPI = function(formData) {
    // Logic to submit formData, e.g., send a POST request
    console.log('Form data submitted:', formData);
    return true;
  };

// Function to generate a seeded random number
export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };