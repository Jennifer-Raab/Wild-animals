import { useParams } from "react-router-dom";

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
          <div>Tierklasse: {animal.fields.tierklasse}</div>
          <div>Gattung: {animal.fields.gattung}</div>
          <div>Größe: {animal.fields.mingroesse} - {animal.fields.maxgroesse} Meter</div>
          <div>Gewicht: {animal.fields.mingewicht} - {animal.fields.maxgewicht} Kilo</div>
          <div>Lebenserwartung: {animal.fields.lebenserwartung} Jahre</div>
          <div>Schutzstatus: {animal.fields.schutzstatus}</div>
          <div>{animal.fields.verhalten}</div>
        </>
      ) : (
        "not found"
      )}
    </div>
  );
}

export default Animal;
