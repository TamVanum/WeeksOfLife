const calculateWeeksLived = (birthDate: string) => {
  
  const [day, month, year] = birthDate.split("/").map(Number);

  // Crea un objeto Date usando los componentes
  const birthDateObj = new Date(year, month - 1, day);

  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - birthDateObj.getTime();
  const differenceInWeeks = differenceInTime / (1000 * 3600 * 24 * 7);
  return Math.floor(differenceInWeeks);
};

const calculateTotalWeeksToLive = (lifeExpectancy: number) => {
  return lifeExpectancy * 52;
};

export const calculateWeeksLeftToLive = (
  birthDate: string,
  lifeExpectancy: number
) => {
  const weeksLived = calculateWeeksLived(birthDate);
  const weeksToLive = calculateTotalWeeksToLive(lifeExpectancy);

  return weeksToLive - weeksLived;
};

const generateWeeksGrids = (weeksLived: number, weeksLeft: number) => {
  const weekArray = [];
  for (let i = 0; i <= weeksLived; i++) {
    weekArray.push(<div className="week-lived"></div>);
  }

  for (let i = 0; i <= weeksLeft; i++) {
    weekArray.push(<div className="week-left"></div>);
  }
  return weekArray;
};

export const weeksToLiveOrchestrator = (
  birthDate: string,
  lifeExpectancy: number
) => {
  const weeksLived = calculateWeeksLived(birthDate);
  const weeksLeft = calculateWeeksLeftToLive(birthDate, lifeExpectancy);
  return generateWeeksGrids(weeksLived, weeksLeft);
};
