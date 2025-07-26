export const completedProjects = [
  {
    label: 'Delivered on Time',
    value: 60,
  },
  {
    label: 'Delayed Delivery',
    value: 25,
  },
  {
    label: 'Exceeded Expectations',
    value: 10,
  },
  {
    label: 'Low Feedback',
    value: 5,
  },
];

export const ongoingProjects = [
  {
    label: 'In Development',
    value: 50,
  },
  {
    label: 'Under Review',
    value: 35,
  },
  {
    label: 'Blocked',
    value: 10,
  },
  {
    label: 'Other',
    value: 5,
  },
];

export const projectCategories = [
  {
    label: 'Completed',
    value: 60,
  },
  {
    label: 'Ongoing',
    value: 40,
  },
];

const normalizeProjects = (v, base) =>
  Number.parseFloat(((v * base) / 100).toFixed(2));

export const detailedProjectStats = [
  ...ongoingProjects.map((item) => ({
    ...item,
    label: item.label === 'Other' ? 'Other (Ongoing)' : item.label,
    value: normalizeProjects(item.value, projectCategories[1].value),
  })),
  ...completedProjects.map((item) => ({
    ...item,
    label: item.label === 'Other' ? 'Other (Completed)' : item.label,
    value: normalizeProjects(item.value, projectCategories[0].value),
  })),
];

export const projectFormatter = (item) => `${item.value}%`;
