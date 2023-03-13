import { APIUser, APIEmbed } from 'discord-api-types/payloads/v10';
import { RankType } from '../helpers';

/**
 * Return's the user's rank as an embed
 *
 * @param user - Discord API User
 * @param rank - User's rank of RankType
 */
export default function rankEmbed(user: APIUser, rank?: RankType) {
  const userRank = rank ?? {
    user_id: user.id,
    exp_needed: 100,
    prev_lvl_total_exp: 0,
    level: 0,
    exp: 0,
  };

  const expCard = {
    title: `${user.username}'s Rank`,
    color: user.accent_color,
    author: { name: user.username, iconURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` },
    description: `Level ${userRank.level}`,
    thumbnail: {
      url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
    },
    fields: [
      { name: 'Current Exp:', value: `${userRank.exp - userRank.prev_lvl_total_exp}` },
      { name: 'Required Exp:', value: `${userRank.exp_needed}` },
    ],
  } as APIEmbed;

  return expCard;
}
