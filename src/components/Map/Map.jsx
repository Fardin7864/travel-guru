import {Map, Marker} from  "pigeon-maps"

const PigeonMap = () => {
    return (
        <div className="rounded-xl">
            
        <Map height={600} defaultCenter={[24.923689, 89.938579]} defaultZoom={11}  >
      <Marker width={50} anchor={[24.923689, 89.938579]} />
    </Map>
        </div>
    );
};

export default PigeonMap;