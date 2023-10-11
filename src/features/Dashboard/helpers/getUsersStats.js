const getUsersStats = (users) => {
  if (!users)
    return {
      newUsers: null,
      totalUsers: null,
      totalDevelopers: null,
    };

  const now = new Date();
  const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

  const newUsers = users.filter(
    (user) => new Date(user.createdAt) >= fiveDaysAgo
  ).length;

  const totalUsers = users.length;

  const totalDevelopers = users.filter(
    (user) => user.role === "developer"
  ).length;
  return { newUsers, totalUsers, totalDevelopers };
};

export default getUsersStats;
