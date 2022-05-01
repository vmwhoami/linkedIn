import OptionTypes from '../types';

const urlModifier = (url: OptionTypes["url"],
  connectOptions: OptionTypes["connectOptions"]): string => {
  const { region, people, beforeKeword, keywords } = connectOptions;

  // return "https://www.linkedin.com/search/results/people/?geoUrn=%5B%22102394087%22%5D&keywords=it%20recruiter&page=5&sid=Qqj"
  return `${url}${people}${region}${beforeKeword}${keywords?.split(' ').join('%20')}`
}

export default urlModifier;