export default function Ownerpage({ params }: any) {
  console.log(params.ownername);
  return <h1>Cabinet from Owner {params.ownername}</h1>;
}
