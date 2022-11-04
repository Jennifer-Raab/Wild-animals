import { Link } from "react-router-dom";

export default function Animals({ animals }) {
  return (
    <div className="animal-list">
      {animals.length &&
        animals.map((animal) => {
          console.log(animal);

          console.log(`INSERT INTO animals (tierart, tierklasse, gattung, mingroesse, maxgroesse, mingewicht, maxgewicht, lebenserwartung, herkunftsland_lat, herkunftsland_lng, lebensraum, schutzstatus, verhalten, bild) VALUES ('${animal.fields.tierart}', '${animal.fields.tierklasse}', '${animal.fields.gattung}', ${animal.fields.mingroesse}, ${animal.fields.maxgroesse}, ${animal.fields.mingewicht}, ${animal.fields.maxgewicht}, ${animal.fields.lebenserwartung}, ${animal.fields.herkunftsland.lat}, ${animal.fields.herkunftsland.lon}, '${JSON.stringify(animal.fields.lebensraum)}', '${animal.fields.schutzstatus}', '${animal.fields.verhalten}', '${animal.fields.bild.fields.file.url}')`);

          return (
            <div key={animal.sys.id} className="animal-card">
              <Link to={`/animal/${animal.sys.id}`}>
                <img
                  className="animal-picture"
                  src={animal.fields.bild.fields.file.url}
                  alt={animal.fields.bild.fields.description}
                />
                <p>{animal.fields.tierart}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
