export const getTicket = (tickets, ticketId, users) => {
  if (!ticketId || !tickets) return null;
  let ticket = tickets.find((ticket) => Number(ticket.id) === Number(ticketId));
  if (!ticket) return null;
  const user = users.find((user) => user.id === ticket.createdBy);
  if (user) {
    ticket.userName = user.userName;
  }
  return ticket;
};

export const getProjects = (projectsData) => {
  if (!projectsData) return [];
  return projectsData.map((project) => {
    return { label: project.name, value: project.id };
  });
};
