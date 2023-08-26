import type { APIUser, APIEmbed } from 'discord-api-types/payloads/v10';
import { type RankType, DEFAULT_RANK } from '../helpers';

/**
 * Return's the user's rank as an embed
 *
 * @param user - Discord API User
 * @param rank - User's rank of RankType
 */
export default function rankEmbed(user: APIUser, rank?: RankType) {
  const userRank = rank ?? DEFAULT_RANK(user.id);

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
