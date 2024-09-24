// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
  }
  
  // 2. Calculate distance in feet
  function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street);
    return blocks * 264;
  }
  
  // 3. Calculate distance traveled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    return blocks * 264;
  }
  
  // 4. Calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free ride
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Updated response for distances over 2500 feet
    }
  }
