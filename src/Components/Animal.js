import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { stamenTerrain } from 'pigeon-maps/providers'


function Animal({ animals }) {
  const { id } = useParams();

  console.log("Animals: ", animals);

  const animal =
    animals.length && animals.find((animal) => id === animal.sys.id);

  // console.log(animal);
  return (
    <div className="animal-single">
      {animal ? (
        <>
        <nav><a href="/">{animal.fields.tierklasse}</a> &#10132; <a href="/">{animal.fields.gattung}</a> &#10132; {animal.fields.tierart}</nav>
          <h1>{animal.fields.tierart}</h1>
          <div>
            <img
              src={animal.fields.bild.fields.file.url}
              alt={animal.fields.bild.fields.description}
            />
          </div>
          <div className="animal-flex">

          <table>
            <tbody>
              <tr>
                <th>Tierklasse:</th>
                <td>{animal.fields.tierklasse}</td>
              </tr>
              <tr>
                <th>Gattung:</th>
                <td>{animal.fields.gattung}</td>
              </tr>
              <tr>
                <th>Größe:</th>
                <td>{animal.fields.mingroesse} - {animal.fields.maxgroesse} Meter</td>
              </tr>
              <tr>
                <th>Gewicht:</th>
                <td>{animal.fields.mingewicht} - {animal.fields.maxgewicht} Kilo</td>
              </tr>
              <tr>
                <th>Lebenserwartung:</th>
                <td>{animal.fields.lebenserwartung} Jahre</td>
              </tr>
              <tr>
                <th>Schutzstatus:</th>
                <td>{animal.fields.schutzstatus}</td>
              </tr>
            </tbody>
          </table>
          <Map
            provider={stamenTerrain}
            height={200}
            defaultCenter={[50.879, 4.6997]}
            defaultZoom={11}
          >
            <Marker width={50} anchor={[50.879, 4.6997]} />
          </Map>
          </div>
          <div className="animal-behaviour">{animal.fields.verhalten}</div>
        </>
      ) : (
        "not found"
      )}
    </div>
  );
}

export default Animal;
