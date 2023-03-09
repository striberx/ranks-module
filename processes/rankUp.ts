import { RankType } from '../helpers';

/**
 * Does rank up and exp addition calculations
 *
 * @param userId - Discord API User id
 * @param rank - User's rank of RankType
 * @returns Object containing the updated rank and if the user leveled up
 */
export default function rankUp(userId: string, rank?: RankType) {
  const userRank = rank ?? {
    user_id: userId,
    exp_needed: 100,
    prev_lvl_total_exp: 0,
    level: 0,
    exp: 0,
  };

  let userLeveled = false;

  userRank.exp += Math.floor(11 * Math.random() + 15); // random number between 15 and 25
  if (userRank.exp >= userRank.exp_needed + userRank.prev_lvl_total_exp) {
    userRank.level++;
    userRank.prev_lvl_total_exp += userRank.exp_needed;
    userRank.exp_needed = 5 * Math.pow(userRank.level, 2) + 50 * userRank.level + 100;

    // Replace custom message variables
    userLeveled = true;
  }

  return {
    userRank,
    userLeveled,
  };
}
