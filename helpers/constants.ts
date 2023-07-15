export const DEFAULT_RANK = (userId: string) => {
  return {
    user_id: userId,
    exp_needed: 100,
    prev_lvl_total_exp: 0,
    level: 0,
    exp: 0,
    last_msg_millis: new Date().getTime(),
  };
};
