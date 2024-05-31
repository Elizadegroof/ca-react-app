import fetcher from './_fetcher'
import useSWR from 'swr'

export default function useImage (station) {
  /*const { data, error, isLoading } = useSWR(`https://graph.mapillary.com/images?access_token=${process.env.MAPILLARY_TOKEN}&fields=id,thumb_1024_url&bbox=${station.longitude-0.0001},${station.latitude-0.0001},${station.longitude+0.0001},${station.latitude+0.0001}&limit=1`, fetcher)*/
  const { data, error, isLoading } = useSWR(`https://graph.mapillary.com/images?access_token=MLY|7526764584097748|93480a11d7ab1a1369275f91a4fa2cee&fields=id,thumb_1024_url&bbox=${station.longitude-0.0001},${station.latitude-0.0001},${station.longitude+0.0001},${station.latitude+0.0001}&limit=1`, fetcher)
  
  /*console.log('data:', data);
  console.log('error:', error);
  console.log('isLoading:', isLoading);*/

  const image = data?.data && data.data.length > 0 ? data.data[0].thumb_1024_url : null;

  return {
    image,
    isLoading,
    isError: error
  }
}