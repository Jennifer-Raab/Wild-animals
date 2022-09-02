import { useParams } from "react-router-dom";

function Animal({ animals }) {
  const { id } = useParams();

  console.log(id);

  console.log("test");

  console.log("Animals: ", animals);

  const animal =
    animals.length && animals.find((animal) => id === animal.sys.id);

  // console.log(animal);
  return (
    <div className="App">
      {animal ? (
        <>
          <div>{animal.fields.tierart}</div>
          <div>{animal.fields.tierklasse}</div>
          <div>{animal.fields.gattung}</div>
          <div>{animal.fields.mingroesse}</div>
          <div>{animal.fields.maxgroesse}</div>
          <div>{animal.fields.mingewicht}</div>
          <div>{animal.fields.maxgewicht}</div>
          <div>{animal.fields.lebenserwartung}</div>
          <div>{animal.fields.schutzstatus}</div>
          <div>{animal.fields.verhalten}</div>

          <div>
            <img
              src={animal.fields.bild.fields.file.url}
              alt={animal.fields.bild.fields.description}
            />
          </div>
        </>
      ) : (
        "not found"
      )}
    </div>
  );
}

export default Animal;
