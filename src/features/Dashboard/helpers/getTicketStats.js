export default (tickets) => {
  if (!tickets)
    return {
      unassignedTickets: null,
      inProgressTickets: null,
      resolvedTickets: null,
    };

  const stats = {
    unassignedTickets: 0,
    inProgressTickets: 0,
    resolvedTickets: 0,
  };

  tickets.forEach((ticket) => {
    switch (ticket.status) {
      case "new":
        stats.unassignedTickets++;
        break;
      case "development":
        stats.inProgressTickets++;
        break;
      case "resolved":
        stats.resolvedTickets++;
        break;
      default:
        break;
    }
  });

  stats.totalTickets = tickets.length;

  return stats;
};
