type Params = {
  params: {
    cabinetUid: string;
  };
};

export default function CabinetPage({ params: { cabinetUid } }: Params) {
  return <h1>Cabinet from cabinets</h1>;
}
