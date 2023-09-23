export function filterFilmsByDirector(list, director) {
    if (director === "") {
      return list;
    }
  
    return list.filter((film) => film.director === director);
  }
  
  export function getListOf(list, prop) {
    return list.reduce((acc, film) => {
      const propV = film[prop];
      if (!acc.includes(propV)) {
        acc.push(propV);
      }
      return acc;
    }, []);
  }
  
  export function getFilmStats(list) {
    if (!list || list.length === 0) {
      return {
        acc_score: 0,
        avg_score: 0,
        total: 0,
        latest: 0,
      };
    }
    let total = 0;
    let accumulatedScore = 0;
    let latestYear = 0;
  
    list.forEach((film) => {
      const rtScore = parseFloat(film.rt_score);
      if (!isNaN(rtScore)) {
        accumulatedScore += rtScore;
        total++;
        const releaseYear = parseInt(film.release_date);
        if (!isNaN(releaseYear) && releaseYear > latestYear) {
          latestYear = releaseYear;
        }
      }
    });
  
    const avgScore = total === 0 ? 0 : accumulatedScore / total;
    return {
      acc_score: accumulatedScore,
      avg_score: avgScore,
      total: total,
      latest: latestYear,
    };
  }