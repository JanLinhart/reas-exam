import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const regions = [
    {
      region: "Hlavní město Praha",
      districts:
        "Benešov, Beroun, Kladno, Kolín, Kutná Hora, Mělník, Mladá Boleslav, Nymburk, Praha-východ, Praha-západ, Příbram, Rakovník",
    },
    {
      region: "Jihočeský kraj",
      districts:
        " České Budějovice, Český Krumlov, Jindřichův Hradec, Pelhřimov, Písek, Prachatice, Strakonice, Tábor",
    },
    {
      region: "Jihomoravský kraj",
      districts:
        " Blansko, Brno-město, Brno-venkov, Břeclav, Hodonín, Vyškov, Znojmo",
    },
    {
      region: "Karlovarský kraj",
      districts: "Cheb, Karlovy Vary, Sokolov",
    },
    {
      region: "Vysočina",
      districts: "Havlíčkův Brod, Jihlava, Pelhřimov, Třebíč, Žďár nad Sázavou",
    },
    {
      region: "Královehradecký kraj",
      districts: "Hradec Králové, Jičín, Náchod, Rychnov nad Kněžnou, Trutnov",
    },
    {
      region: "Liberecký kraj",
      districts: "Česká Lípa,Liberec, Jablonec nad Nisou, Semily",
    },
    {
      region: "Moravskoslezský kraj",
      districts:
        "Bruntál, Opava, Nový Jičín, Frýdek-Místek, Karviná, Ostrava-město",
    },
    {
      region: "Olomoucký kraj",
      districts: "Olomouc, Přerov, Prostějov, Šumperk, Jeseník",
    },
    {
      region: "Pardubický kraj",
      districts: "Pardubice, Chrudim, Ústí nad Orlicí, Svitavy",
    },
    {
      region: "Plzeňský kraj",
      districts:
        "Domažlice, Klatovy, Plzeň-jih, Plzeň-město, Plzeň-sever, Rokycany, Tachov",
    },
    {
      region: "Středočeský kraj",
      districts:
        "Benešov, Beroun, Kladno, Kolín, Kutná Hora, Mělník, Mladá Boleslav, Nymburk, Praha-východ, Praha-západ, Příbram, Rakovník",
    },
    {
      region: "Ústecký",
      districts:
        "Děčín, Ústí nad Labem, Litoměřice, Teplice, Louny, Most, Chomutov",
    },
    {
      region: "Zlínský kraj",
      districts: "Zlín, Vsetín, Kroměříž, Uherské Hradiště",
    },
  ];

  const submitFormData = (e) => {
    e.preventDefault();

    // if (
    //   validator.isEmpty(values.propertyType) ||
    //   validator.isEmpty(values.region) ||
    //   validator.isEmpty(values.district)
    // ) {
    //   setError(true);
    // } else {
    nextStep();
    // }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Typ nemovitosti</Form.Label>
              <Form.Select
                style={{ border: error ? "2px solid red" : "" }}
                onChange={handleFormData("propertyType")}
                name="propertyType"
                defaultValue={values.propertyType}
              >
                {" "}
                <option>Vyberte nemovitost</option>
                <option value="Dům">Dům</option>
                <option value="Byt">Byt</option>
                <option value="Pozemek">Pozemek</option>
              </Form.Select>
              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  Toto je povinné pole
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kraj</Form.Label>
              <Form.Select
                style={{ border: error ? "2px solid red" : "" }}
                onChange={handleFormData("region")}
                name="region"
                defaultValue={values.region}
              >
                {" "}
                <option>Vyberte kraj</option>
                {regions.map((region, idx) => (
                  <option key={idx} value={region.region}>
                    {region.region}
                  </option>
                ))}
              </Form.Select>

              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  Toto je povinné pole
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Okres</Form.Label>
              <Form.Select
                style={{ border: error ? "2px solid red" : "" }}
                onChange={handleFormData("district")}
                name="district"
                defaultValue={values.district}
              >
                {" "}
                <option>Vyberte okres</option>
                {values.region
                  ? regions
                      .filter((r) => r.region === values.region)[0]
                      .districts.split(",")
                      .map((district, idx) => {
                        return (
                          <option key={idx} value={district}>
                            {district}
                          </option>
                        );
                      })
                  : undefined}
              </Form.Select>
              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  Toto je povinné pole
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>

            <Button variant="primary" type="submit">
              Pokračovat
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
