import OptionTypes from '../types';

const urlModifier = (url: OptionTypes["url"], 
                    connectOptions: OptionTypes["connectOptions"]): string => {
  const { region, people, beforeKeword, keywords } = connectOptions;

  return `${url}${people}${region}${beforeKeword}${keywords?.split(' ').join('%20')}`
}

export default urlModifier;