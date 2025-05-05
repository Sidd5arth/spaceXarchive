export const fetchResources = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/launches");
  return res.json();
};

export const fetchLaunchDetail = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
  if (!res.ok) throw new Error("Failed to fetch launch details");
  return res.json();
};

export const fetchRocketDetail = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
  if (!res.ok) throw new Error("Failed to fetch rocket details");
  return res.json();
};

export const fetchLaunchPadDetail = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`);
  if (!res.ok) throw new Error("Failed to fetch Launch pad details");
  return res.json();
};
