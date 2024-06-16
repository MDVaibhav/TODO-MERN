export const getBackgroundColor = (expiryDate) => {
    const now = new Date();
    const timeDifference = new Date(expiryDate) - now;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
  
    if (daysDifference < 0) {
      return 'lightgray';
    } else if (daysDifference <= 1) {
      return 'red';
    } else if (daysDifference <= 2) {
      return 'orange';
    } else if (daysDifference <= 3) {
      return 'yellow';
    } else {
      return 'white';
    }
  };
  