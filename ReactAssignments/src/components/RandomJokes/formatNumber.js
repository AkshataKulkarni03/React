export const formatNumber = () => {
  let num = Math.round(Math.floor(Math.random() * 10000000) + 1)
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num;
    }
  };

  