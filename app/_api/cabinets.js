export async function getCabinets() {
  const response = await fetch(
    "http://localhost:5000/api/cabinets-collection",
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "asb",
      },
    }
  );
  return await response.json();
}

export async function getOwners() {
  const response = await fetch("http://localhost:5000/api/owners-collection", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: "asb",
    },
  });
  const data = await response.json();
  return data;
}
