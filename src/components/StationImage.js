import useImage from '@/data/image';


export default function StationImage(props) {
  const { image, isLoading, isError } = useImage(props.station)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!image) return <div>No image</div>

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <div><img src={image} width="320" height="auto" alt={props.station.name}/></div>
  )
}