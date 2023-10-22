import React, { useState ,useEffect} from 'react'
import { Map, Marker, Overlay,TileLayer ,Polyline } from 'pigeon-maps'
import './styles.css'
const customMap = {
    url: ({ x, y, z }) => `http://a.tile.stamen.com/toner-lite/${z}/${x}/${y}.png`,
  };
export function PiggeoMap() {
  const [center, setCenter] = useState([6.874, 81.6947])
  const [zoom, setZoom] = useState(4)
  const [hue, setHue] = useState(0)
  const color = `orange`
  const [count, setCount] = useState(0);
  const trackedPath = [
    [51.505, -0.09],
    [51.51, -0.11],
    [51.515, -0.12],
    // Add more coordinates as needed
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 0.1);
    }, 1000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    }
  }, []); // Empty dependency array to run this effect only once
  
  return (
    // <Map 
    //   height={'100vh'}
    //   width={'100vw'}
    //   center={center} 
    //   zoom={zoom} 
    //   onBoundsChanged={({ center, zoom }) => { 
    //     setCenter(center) 
    //     setZoom(zoom) 
    //   }} 
    // />
    <Map 
      //provider ={({ x, y, z }) => { return `http://a.tile.stamen.com/toner-lite/${z}/${x}/${y}.png`;}}
      height={'100vh'}
      width={'100vw'}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    /** defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={'100vw'} height={'100vh'} */
      tileComponent={({ tile, tileLoaded }) => (
        <img
          src={tile.url}
          srcSet={tile.srcSet}
          width={tile.width}
          height={tile.height}

          loading={'lazy'}
          onLoad={tileLoaded}
          alt={''}
          style={{
            position: 'absolute',
            left: tile.left,
            top: tile.top,
            willChange: 'transform',
            transformOrigin: 'top left',
            opacity: 1,
            // width:'100vh',
            // height:'100vw'
          }}
        />
      )}
    >
         {/* <Map.OSM /> */}
        {/* <Polyline positions={trackedPath} color="blue" /> */}

        <Marker color={'purple'} anchor={[Math.random(count)*10, Math.random(count)*100]} payload={1} onClick={({ event, anchor, payload }) => {  setHue('red');console.log(anchor) }} />
    <Marker  color={'black'} anchor={[Math.random(count)*10, Math.random(count)*100]} payload={1} onClick={({ event, anchor, payload }) => {}} />
  
    <Marker color={color} anchor={[Math.random(count)*10, Math.random(count)*100]} payload={1} onClick={({ event, anchor, payload }) => {  setHue('red');console.log(anchor) }} />
    <Marker  color={'blue'} anchor={[Math.random(count)*10, Math.random(count)*100]} payload={1} onClick={({ event, anchor, payload }) => {}} />
    <Marker  color={'red'} anchor={[Math.random(count)*10, Math.random(count)*100]} payload={1} onClick={({ event, anchor, payload }) => {}} />
    {/* <TileLayer /> */}
    
{
    /*
 <Marker color={'red'} anchor={[9+count, 15+count]} payload={1} onClick={({ event, anchor, payload }) => {  setHue(hue + 20) }} >
   Savindu
    </Marker>
    <Marker  color={'blue'} anchor={[6+count, 35+count]} payload={1} onClick={({ event, anchor, payload }) => {}} >
    Nethmee
    </Marker>    
    <Marker  color={'green'} anchor={[12+count, 65+count]} payload={1} onClick={({ event, anchor, payload }) => {}} >
     Syed
    </Marker>
    */
}
    {/* <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={'100%'} height={'100%'} alt='' />
    </Overlay> */}
  </Map>
  )
}