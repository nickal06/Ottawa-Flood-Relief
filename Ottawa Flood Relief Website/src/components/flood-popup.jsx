import "./flood-popup.css";

export function FloodPopUp( { data } ){

  if (!data){
    return <p> Loading... </p>;
  }

  return (
    <>
      <div>
        <section>
          <div>
            <h2> {data.name} </h2>
          </div>
        </section>

        <section>
          <h3> Flood Impact </h3>

          <p> Houses affected: {data.housesAffected}</p>

          <p> Estimated Damage: {data.floodDamage} </p>
        </section>

        <section> 
          <h3> Income </h3>
          
          <p> Median Household Income: {data.medianIncome}</p>

        </section>

        <section>
          <h3> Services </h3>

          {data.services.map((service) => {
            console.log(service);

            return (
              <div> 
                <span> 
                  {service} 
                </span>
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}